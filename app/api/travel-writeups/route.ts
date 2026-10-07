import { readFile } from 'node:fs/promises';
import path from 'node:path';

import { NextResponse } from 'next/server';

const WRITEUP_SLUGS = ['japan', 'korea', 'thailand', 'philippines', 'usa', 'taiwan', 'mexico', 'peru'] as const;

type TravelWriteupResponse = Record<
  (typeof WRITEUP_SLUGS)[number],
  {
    citiesVisited: string[];
    paragraphs: string[];
  }
>;

function parseCitiesVisited(markdown: string) {
  const lines = markdown.replace(/\r\n/g, '\n').split('\n');
  const citiesVisited: string[] = [];
  let inCitiesSection = false;

  for (const line of lines) {
    const trimmedLine = line.trim();

    if (/^##\s+Cities Visited$/i.test(trimmedLine)) {
      inCitiesSection = true;
      continue;
    }

    if (!inCitiesSection) {
      continue;
    }

    if (/^##\s+/.test(trimmedLine)) {
      break;
    }

    if (/^-\s+/.test(trimmedLine)) {
      citiesVisited.push(trimmedLine.replace(/^-\s+/, '').trim());
    }
  }

  return citiesVisited;
}

function parseWriteupParagraphs(markdown: string) {
  const lines = markdown.replace(/\r\n/g, '\n').split('\n');
  const contentLines: string[] = [];
  let inCitiesSection = false;

  for (const line of lines) {
    const trimmedLine = line.trim();

    if (/^##\s+Cities Visited$/i.test(trimmedLine)) {
      inCitiesSection = true;
      continue;
    }

    if (!inCitiesSection) {
      continue;
    }

    if (/^##\s+/.test(trimmedLine)) {
      break;
    }

    if (/^-\s+/.test(trimmedLine)) {
      continue;
    }

    contentLines.push(line);
  }

  return contentLines
    .join('\n')
    .split(/\n\s*\n/)
    .map((paragraph) => paragraph.replace(/\s+/g, ' ').trim())
    .filter(Boolean);
}

export async function GET() {
  const writeupsDirectory = path.join(process.cwd(), 'app/assets/countries/writeups');

  const entries = await Promise.all(
    WRITEUP_SLUGS.map(async (slug) => {
      const filePath = path.join(writeupsDirectory, `${slug}.md`);
      const markdown = await readFile(filePath, 'utf8');

      return [
        slug,
        {
          citiesVisited: parseCitiesVisited(markdown),
          paragraphs: parseWriteupParagraphs(markdown),
        },
      ] as const;
    })
  );

  return NextResponse.json(Object.fromEntries(entries) as TravelWriteupResponse);
}

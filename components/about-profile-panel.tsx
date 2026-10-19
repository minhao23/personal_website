import Image from 'next/image';

import type { SectionContent } from './portfolio-types';

type AboutProfilePanelProps = {
  content: SectionContent;
};

export function AboutProfilePanel({ content }: AboutProfilePanelProps) {
  if (!content.heroImage) {
    return null;
  }

  return (
    <article className="fut-tile flex min-h-0 flex-col rounded-[30px] bg-black/28 p-6 backdrop-blur-sm md:p-8">
      <div>
        <p className="mb-3 font-[var(--font-display)] text-xs tracking-[0.3em] text-[var(--color-fut-yellow)] uppercase">
          {content.eyebrow}
        </p>
        <h1 className="section-heading max-w-none text-[2.35rem] text-white md:text-[3.05rem] md:leading-[0.94]">
          {content.title}
        </h1>
      </div>

      <div className="mt-3 grid items-start gap-4 lg:mt-4 lg:grid-cols-[minmax(250px,0.95fr)_minmax(0,2.15fr)] lg:gap-4">
        <div className="md:sticky md:top-8">
          <div className="overflow-hidden rounded-[28px] border border-white/12 bg-white/6 shadow-[0_22px_42px_rgba(0,0,0,0.25)]">
            <Image
              src={content.heroImage}
              alt={content.heroImageAlt ?? content.title}
              className="aspect-[4/3] w-full object-cover lg:h-[420px] lg:aspect-auto"
            />
          </div>
          {content.heroImageCaption ? (
            <p className="mt-3 font-[var(--font-display)] text-[11px] tracking-[0.22em] text-[var(--color-fut-yellow)] uppercase">
              {content.heroImageCaption}
            </p>
          ) : null}
        </div>

        <div className="max-w-[70ch] lg:pt-1">
          <div className="max-w-[66ch] space-y-4">
            {(content.heroParagraphs?.length ? content.heroParagraphs : [content.description]).map((paragraph) => (
              <p
                key={paragraph}
                className="text-base leading-[1.65] text-white/74 md:text-[1.06rem] md:leading-[1.68]"
              >
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      </div>
    </article>
  );
}

import Image from 'next/image';

import type { ExperienceEntry } from './portfolio-data';

type ExperienceTimelineProps = {
  entries: ExperienceEntry[];
};

export function ExperienceTimeline({ entries }: ExperienceTimelineProps) {
  return (
    <div className="relative flex h-full min-h-0 flex-col overflow-hidden rounded-[30px] border border-white/10 bg-black/24 p-5 backdrop-blur-sm md:p-6">
      <div className="relative h-full min-h-0 overflow-y-auto pr-3">
        <div className="pointer-events-none absolute bottom-2 left-4 top-2 w-px bg-[linear-gradient(180deg,rgba(245,208,0,0.95),rgba(245,208,0,0.12))]" />

        <div className="grid gap-4 pb-1 pl-10">
          {entries.map((entry) => (
            <article
              key={`${entry.company}-${entry.dateRange}`}
              className="relative rounded-[24px] border border-white/10 bg-[#0d1219]/88 p-5 shadow-[0_12px_30px_rgba(0,0,0,0.18)]"
            >
              <div className="absolute left-[-31px] top-6 h-4 w-4 rounded-full border-[3px] border-[#111823] bg-[var(--color-fut-yellow)] shadow-[0_0_0_3px_rgba(245,208,0,0.12)]" />

              <div>
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="font-[var(--font-display)] text-sm tracking-[0.18em] text-[var(--color-fut-yellow)] uppercase">
                      {entry.dateRange}
                    </p>
                    <h3 className="section-heading mt-2 text-[2rem] leading-none text-white">{entry.company}</h3>
                    <p className="mt-2 text-sm leading-6 text-white/82">{entry.role}</p>
                    <p className="text-xs tracking-[0.18em] text-white/50 uppercase">
                      {entry.location}
                      {entry.duration ? ` · ${entry.duration}` : ''}
                    </p>
                  </div>

                  {entry.image ? (
                    <Image
                      src={entry.image}
                      alt={entry.imageAlt ?? `${entry.company} logo`}
                      className="h-10 w-auto shrink-0 object-contain opacity-95"
                    />
                  ) : null}
                </div>

                <div className="mt-4 flex flex-wrap gap-2">
                  {entry.stack.map((item) => (
                    <span
                      key={item}
                      className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-[11px] tracking-[0.12em] text-white/72 uppercase"
                    >
                      {item}
                    </span>
                  ))}
                </div>

                <div className="mt-4 grid gap-2">
                  {entry.bullets.map((bullet) => (
                    <p key={bullet} className="text-sm leading-6 text-white/74">
                      {bullet}
                    </p>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}

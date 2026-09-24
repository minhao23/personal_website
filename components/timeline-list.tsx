'use client';

import Image, { type StaticImageData } from 'next/image';

export type TimelineEvent = {
  name: string;
  dates: string;
  location?: string;
  logo?: StaticImageData;
  logoAlt?: string;
  title?: string;
  duration?: string;
  tags?: string[];
  description: string[];
};

type TimelineListProps = {
  events: TimelineEvent[];
  scrollable?: boolean;
  cardClassName?: string;
};

export function TimelineList({ events, scrollable = false, cardClassName = '' }: TimelineListProps) {
  const content = (
    <>
      <div className="pointer-events-none absolute bottom-2 left-4 top-2 w-px bg-[linear-gradient(180deg,rgba(245,208,0,0.95),rgba(245,208,0,0.12))]" />

      <div className="grid gap-4 pb-1 pl-10">
        {events.map((event) => (
          <article
            key={`${event.name}-${event.dates}`}
            className={`relative rounded-[24px] border border-white/10 bg-[#0d1219]/88 p-5 shadow-[0_12px_30px_rgba(0,0,0,0.18)] ${cardClassName}`.trim()}
          >
            <div className="absolute left-[-31px] top-6 h-4 w-4 rounded-full border-[3px] border-[#111823] bg-[var(--color-fut-yellow)] shadow-[0_0_0_3px_rgba(245,208,0,0.12)]" />

            <div>
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="font-[var(--font-display)] text-sm tracking-[0.18em] text-[var(--color-fut-yellow)] uppercase">
                    {event.dates}
                  </p>
                  <h3 className="section-heading mt-2 text-[2rem] leading-none text-white">{event.name}</h3>
                  {event.title ? <p className="mt-2 text-sm leading-6 text-white/82">{event.title}</p> : null}
                  {event.location || event.duration ? (
                    <p className="text-xs tracking-[0.18em] text-white/50 uppercase">
                      {event.location}
                      {event.location && event.duration ? ' · ' : ''}
                      {event.duration}
                    </p>
                  ) : null}
                </div>

                {event.logo ? (
                  <Image
                    src={event.logo}
                    alt={event.logoAlt ?? `${event.name} logo`}
                    className="h-10 w-auto shrink-0 object-contain opacity-95"
                  />
                ) : null}
              </div>

              {event.tags?.length ? (
                <div className="mt-4 flex flex-wrap gap-2">
                  {event.tags.map((item) => (
                    <span
                      key={item}
                      className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-[11px] tracking-[0.12em] text-white/72 uppercase"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              ) : null}

              <div className="mt-4 grid gap-2">
                {event.description.map((line) => (
                  <p key={line} className="text-sm leading-6 text-white/74">
                    {line}
                  </p>
                ))}
              </div>
            </div>
          </article>
        ))}
      </div>
    </>
  );

  if (scrollable) {
    return <div className="relative h-full min-h-0 overflow-y-auto pr-3">{content}</div>;
  }

  return <div className="relative">{content}</div>;
}

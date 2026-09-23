import type { TabCard } from './portfolio-data';

export function ContentCard({ title, body, label }: TabCard) {
  return (
    <article className="fut-tile flex h-full min-h-0 flex-col justify-between rounded-[24px] p-5">
      {label ? (
        <p className="mb-3 font-[var(--font-display)] text-[11px] tracking-[0.22em] text-[var(--color-fut-yellow)] uppercase">
          {label}
        </p>
      ) : null}
      <div>
        <h3 className="section-heading mb-3 text-[1.55rem] text-white">{title}</h3>
        <p className="text-sm leading-6 text-white/74">{body}</p>
      </div>
    </article>
  );
}

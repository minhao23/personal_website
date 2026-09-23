import Image from 'next/image';

import type { TabCard } from './portfolio-data';

type ContentCardProps = TabCard & {
  onClick?: () => void;
};

export function ContentCard({ title, body, label, meta, image, imageAlt, actionLabel, onClick }: ContentCardProps) {
  const Container = onClick ? 'button' : 'article';

  return (
    <Container
      type={onClick ? 'button' : undefined}
      onClick={onClick}
      className={`fut-tile flex h-full min-h-0 flex-col rounded-[24px] p-5 text-left ${
        onClick ? 'cursor-pointer transition-transform duration-150 hover:-translate-y-0.5 hover:bg-white/6' : ''
      }`}
    >
      <div className="mb-4 flex items-start justify-between gap-3">
        {label ? (
          <p className="font-[var(--font-display)] text-[11px] tracking-[0.22em] text-[var(--color-fut-yellow)] uppercase">
            {label}
          </p>
        ) : (
          <span />
        )}
        {image ? <Image src={image} alt={imageAlt ?? title} className="h-10 w-auto object-contain" /> : null}
      </div>

      <div>
        <h3 className="section-heading mb-3 text-[1.55rem] text-white">{title}</h3>
        {meta ? <p className="mb-3 text-xs tracking-[0.18em] text-white/55 uppercase">{meta}</p> : null}
        <p className="text-sm leading-6 text-white/74">{body}</p>
      </div>

      {actionLabel ? (
        <p className="mt-4 font-[var(--font-display)] text-lg tracking-[0.03em] text-[var(--color-fut-yellow)] uppercase">
          {actionLabel}
        </p>
      ) : null}
    </Container>
  );
}

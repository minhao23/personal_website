'use client';

import type { TabCard } from './portfolio-data';

type DetailModalProps = {
  modal: NonNullable<TabCard['modal']>;
  onClose: () => void;
};

export function DetailModal({ modal, onClose }: DetailModalProps) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/72 px-4 py-8 backdrop-blur-sm">
      <button
        type="button"
        aria-label="Close modal"
        className="absolute inset-0"
        onClick={onClose}
      />

      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="detail-modal-title"
        className="relative z-10 w-full max-w-3xl overflow-hidden rounded-[28px] border border-white/10 bg-[#0c1118]/95 shadow-[0_25px_70px_rgba(0,0,0,0.45)]"
      >
        <div className="border-b border-white/10 px-6 py-5 md:px-8">
          <div className="flex items-start justify-between gap-4">
            <div>
              <p className="font-[var(--font-display)] text-sm tracking-[0.22em] text-[var(--color-fut-yellow)] uppercase">
                Education
              </p>
              <h2 id="detail-modal-title" className="section-heading mt-2 text-3xl text-white md:text-4xl">
                {modal.title}
              </h2>
              <p className="mt-3 max-w-2xl text-sm leading-6 text-white/72">{modal.description}</p>
            </div>
            <button
              type="button"
              onClick={onClose}
              className="font-[var(--font-display)] text-2xl leading-none text-white/72 transition hover:text-white"
            >
              ×
            </button>
          </div>
        </div>

        <div className="grid gap-4 px-6 py-6 md:px-8 md:py-8">
          {modal.entries.map((entry) => (
            <article key={entry.title} className="rounded-[24px] border border-white/10 bg-white/[0.04] p-5">
              <p className="font-[var(--font-display)] text-sm tracking-[0.16em] text-[var(--color-fut-yellow)] uppercase">
                {entry.meta}
              </p>
              <h3 className="section-heading mt-3 text-[1.9rem] text-white">{entry.title}</h3>
              <p className="mt-2 text-sm leading-6 text-white/72">{entry.subtitle}</p>
              <div className="mt-4 grid gap-2">
                {entry.bullets.map((bullet) => (
                  <p key={bullet} className="text-sm leading-6 text-white/78">
                    {bullet}
                  </p>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}

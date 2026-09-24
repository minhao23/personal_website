'use client';

import type { TabCard } from './portfolio-data';
import { TimelineList, type TimelineEvent } from './timeline-list';

type DetailModalProps = {
  modal: NonNullable<TabCard['modal']>;
  onClose: () => void;
};

export function DetailModal({ modal, onClose }: DetailModalProps) {
  const events: TimelineEvent[] = modal.entries.map((entry) => ({
    name: entry.title,
    dates: entry.dateRange ?? entry.meta,
    location: entry.location,
    logo: entry.image,
    logoAlt: entry.imageAlt,
    title: entry.subtitle,
    description: entry.bullets,
  }));

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
        className="relative z-10 flex max-h-[82vh] w-full max-w-4xl flex-col overflow-hidden rounded-[28px] border border-white/10 bg-[#0c1118]/95 shadow-[0_25px_70px_rgba(0,0,0,0.45)]"
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

        <div className="min-h-0 flex-1 px-6 py-6 md:px-8 md:py-8">
          <TimelineList events={events} scrollable />
        </div>
      </div>
    </div>
  );
}

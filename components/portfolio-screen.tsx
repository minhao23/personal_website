'use client';

import { useState } from 'react';

import { ContentCard } from './content-card';
import { DetailModal } from './detail-modal';
import { ExperienceTimeline } from './experience-timeline';
import { FutHeader } from './fut-header';
import { PORTFOLIO_CONTENT, type SectionSlug } from './portfolio-data';

type PortfolioScreenProps = {
  section: SectionSlug;
};

export function PortfolioScreen({ section }: PortfolioScreenProps) {
  const content = PORTFOLIO_CONTENT[section];
  const [activeModal, setActiveModal] = useState<NonNullable<(typeof content.cards)[number]['modal']> | null>(null);

  return (
    <div className="flex h-screen flex-col overflow-hidden bg-transparent text-white">
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(7,8,10,0.12)_0%,rgba(7,8,10,0.5)_38%,rgba(7,8,10,0.9)_100%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_center,rgba(245,208,0,0.1),transparent_34%)]" />

      <FutHeader activeSlug={section} />

      <main className="relative z-10 mx-auto flex min-h-0 w-full max-w-7xl flex-1 px-5 py-5 md:px-8 lg:px-10 lg:py-6">
        <section className="animate-in grid min-h-0 flex-1 gap-4 lg:grid-cols-[1.05fr_0.95fr]">
          <article className="fut-tile flex min-h-0 flex-col justify-between rounded-[30px] bg-black/28 p-6 backdrop-blur-sm md:p-8">
            <div>
              <p className="mb-3 font-[var(--font-display)] text-xs tracking-[0.3em] text-[var(--color-fut-yellow)] uppercase">
                {content.eyebrow}
              </p>
              <h1 className="section-heading max-w-3xl text-4xl text-white md:text-[4.75rem] md:leading-[0.92]">
                {content.title}
              </h1>
              <p className="mt-4 max-w-2xl text-sm leading-7 text-white/74 md:text-base">
                {content.description}
              </p>
            </div>

            <div className="mt-6 grid gap-3 sm:grid-cols-3">
              {content.stats.map((stat) => (
                <div key={stat} className="rounded-[18px] border border-white/10 bg-black/22 px-4 py-3">
                  <p className="font-[var(--font-display)] text-xs tracking-[0.18em] text-[var(--color-fut-yellow)] uppercase">
                    {stat}
                  </p>
                </div>
              ))}
            </div>
          </article>

          {content.experienceTimeline ? (
            <ExperienceTimeline entries={content.experienceTimeline} />
          ) : (
            <div className="grid min-h-0 gap-4 md:grid-cols-3 lg:grid-cols-1">
              {content.cards.map((card) => {
                const modal = card.modal;

                return (
                  <ContentCard
                    key={card.title}
                    {...card}
                    onClick={modal ? () => setActiveModal(modal) : undefined}
                  />
                );
              })}
            </div>
          )}
        </section>
      </main>

      {activeModal ? <DetailModal modal={activeModal} onClose={() => setActiveModal(null)} /> : null}
    </div>
  );
}

'use client';

import { useState, type KeyboardEvent } from 'react';

import { ContentCard } from './content-card';
import { DetailModal } from './detail-modal';
import { ExperienceTimeline } from './experience-timeline';
import { FutHeader } from './fut-header';
import { PORTFOLIO_CONTENT, type SectionSlug } from './portfolio-data';
import { SkillsModal } from './skills-modal';
import { UltimateTeamOrbit } from './ultimate-team-orbit';

type PortfolioScreenProps = {
  section: SectionSlug;
};

export function PortfolioScreen({ section }: PortfolioScreenProps) {
  const content = PORTFOLIO_CONTENT[section];
  const [activeModal, setActiveModal] = useState<NonNullable<(typeof content.cards)[number]['modal']> | null>(null);
  const [isSkillsModalOpen, setIsSkillsModalOpen] = useState(false);
  const isHomeSection = section === 'home';
  const isProjectsSection = section === 'projects';
  const projectBottomCardIndex = content.cards.length - 1;
  const hasTimeline = Boolean(content.experienceTimeline);
  const sectionGridClass = isProjectsSection
    ? 'animate-in grid min-h-0 flex-1 content-start gap-4 overflow-y-auto px-1 pt-1 pb-2 md:grid-cols-2'
    : 'animate-in grid min-h-0 flex-1 gap-4 lg:grid-cols-[1.05fr_0.95fr]';
  const heroCardClass = hasTimeline
    ? 'fut-tile flex min-h-0 flex-col justify-between rounded-[30px] bg-black/28 p-5 backdrop-blur-sm md:p-6 lg:p-7'
    : 'fut-tile flex min-h-0 flex-col justify-between rounded-[30px] bg-black/28 p-6 backdrop-blur-sm md:p-8';
  const homeHeroCardClass = 'fut-tile flex min-h-0 flex-col justify-between rounded-[30px] bg-black/28 text-left backdrop-blur-sm';
  const heroTitleClass = hasTimeline
    ? 'section-heading max-w-[12ch] text-[2.7rem] text-white md:text-[3.7rem] md:leading-[0.92]'
    : 'section-heading max-w-3xl text-[2.7rem] text-white md:text-[4.05rem] md:leading-[0.92]';

  function handleHeroKeyDown(event: KeyboardEvent<HTMLElement>) {
    if (!isHomeSection) {
      return;
    }

    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      setIsSkillsModalOpen(true);
    }
  }

  return (
    <div className="flex h-screen flex-col overflow-hidden bg-transparent text-white">
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(7,8,10,0.12)_0%,rgba(7,8,10,0.5)_38%,rgba(7,8,10,0.9)_100%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_center,rgba(245,208,0,0.1),transparent_34%)]" />

      <FutHeader activeSlug={section} />

      <main className="relative z-10 mx-auto flex min-h-0 w-full max-w-7xl flex-1 px-5 py-5 md:px-8 lg:px-10 lg:py-6">
        <section className={sectionGridClass}>
          {isProjectsSection ? (
            content.cards.map((card, index) => {
              const modal = card.modal;

              return (
                <div key={card.title} className={index === projectBottomCardIndex ? 'md:col-span-2' : ''}>
                  <ContentCard
                    {...card}
                    onClick={modal ? () => setActiveModal(modal) : undefined}
                  />
                </div>
              );
            })
          ) : isHomeSection ? (
            <button
              type="button"
              onClick={() => setIsSkillsModalOpen(true)}
              onKeyDown={handleHeroKeyDown}
              className={`${homeHeroCardClass} group cursor-pointer transition-transform duration-150 hover:-translate-y-0.5 hover:bg-white/6`}
            >
              <div className="px-6 pt-6 md:px-8 md:pt-8">
                <p className="mb-3 font-[var(--font-display)] text-xs tracking-[0.3em] text-[var(--color-fut-yellow)] uppercase">
                  {content.eyebrow}
                </p>
                <h1 className={`${heroTitleClass} transition-colors duration-150 group-hover:text-[var(--color-fut-yellow)]`}>
                  {content.title}
                </h1>
                <p className="mt-4 max-w-2xl text-sm leading-7 text-white/74 md:text-base">
                  {content.description}
                </p>
              </div>

              <UltimateTeamOrbit />

              {content.stats.length > 0 ? (
                <div className="mt-2 grid gap-3 px-6 pb-6 sm:grid-cols-3 md:px-8 md:pb-8">
                  {content.stats.map((stat) => (
                    <div key={stat} className="rounded-[18px] border border-white/10 bg-black/22 px-4 py-3">
                      <p className="font-[var(--font-display)] text-xs tracking-[0.18em] text-[var(--color-fut-yellow)] uppercase">
                        {stat}
                      </p>
                    </div>
                  ))}
                </div>
              ) : null}
            </button>
          ) : (
            <article className={heroCardClass}>
              <div>
                <p className="mb-3 font-[var(--font-display)] text-xs tracking-[0.3em] text-[var(--color-fut-yellow)] uppercase">
                  {content.eyebrow}
                </p>
                <h1 className={heroTitleClass}>{content.title}</h1>
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
          )}

          {isProjectsSection ? null : content.experienceTimeline ? (
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
      {isSkillsModalOpen ? <SkillsModal onClose={() => setIsSkillsModalOpen(false)} /> : null}
    </div>
  );
}

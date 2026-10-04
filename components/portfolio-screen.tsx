'use client';

import Image from 'next/image';
import { useState, type KeyboardEvent } from 'react';

import { ContactModal } from './contact-modal';
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
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);
  const isHomeSection = section === 'home';
  const isAboutSection = section === 'about';
  const isProjectsSection = section === 'projects';
  const projectBottomCardIndex = content.cards.length - 1;
  const hasTimeline = Boolean(content.experienceTimeline);
  const sectionGridClass = isProjectsSection
    ? 'animate-in grid min-h-0 flex-1 content-start gap-4 overflow-y-auto px-1 pt-1 pb-2 md:grid-cols-2'
    : isAboutSection
      ? 'animate-in grid min-h-0 flex-1 gap-4 lg:grid-cols-[1.22fr_0.78fr]'
      : 'animate-in grid min-h-0 flex-1 gap-4 lg:grid-cols-[1.05fr_0.95fr]';
  const heroCardClass = hasTimeline
    ? 'fut-tile flex min-h-0 flex-col justify-between rounded-[30px] bg-black/28 p-5 backdrop-blur-sm md:p-6 lg:p-7'
    : 'fut-tile flex min-h-0 flex-col justify-between rounded-[30px] bg-black/28 p-6 backdrop-blur-sm md:p-8';
  const homeHeroCardClass = 'fut-tile flex min-h-0 flex-col justify-between rounded-[30px] bg-black/28 text-left backdrop-blur-sm';
  const aboutHeroCardClass = 'fut-tile flex min-h-0 flex-col rounded-[30px] bg-black/28 p-6 backdrop-blur-sm md:p-8';
  const heroTitleClass = hasTimeline
    ? 'section-heading max-w-[12ch] text-[2.7rem] text-white md:text-[3.7rem] md:leading-[0.92]'
    : 'section-heading max-w-3xl text-[2.7rem] text-white md:text-[4.05rem] md:leading-[0.92]';
  const aboutHeroTitleClass = 'section-heading max-w-none text-[2.35rem] text-white md:text-[3.05rem] md:leading-[0.94]';

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

      <FutHeader activeSlug={section} onContactClick={() => setIsContactModalOpen(true)} />

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
            <article className={isAboutSection ? aboutHeroCardClass : heroCardClass}>
              {isAboutSection && content.heroImage ? (
                <>
                  <div>
                    <p className="mb-3 font-[var(--font-display)] text-xs tracking-[0.3em] text-[var(--color-fut-yellow)] uppercase">
                      {content.eyebrow}
                    </p>
                    <h1 className={aboutHeroTitleClass}>{content.title}</h1>
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
                      <div className="space-y-4 max-w-[66ch]">
                        {(content.heroParagraphs?.length ? content.heroParagraphs : [content.description]).map((paragraph) => (
                          <p key={paragraph} className="text-base leading-[1.65] text-white/74 md:text-[1.06rem] md:leading-[1.68]">
                            {paragraph}
                          </p>
                        ))}
                      </div>

                    </div>
                  </div>
                </>
              ) : (
                <div>
                  <p className="mb-3 font-[var(--font-display)] text-xs tracking-[0.3em] text-[var(--color-fut-yellow)] uppercase">
                    {content.eyebrow}
                  </p>
                  <h1 className={heroTitleClass}>{content.title}</h1>
                  <p className="mt-4 max-w-2xl text-sm leading-7 text-white/74 md:text-base">
                    {content.description}
                  </p>
                </div>
              )}

              {content.stats.length > 0 ? (
                <div className="mt-6 grid gap-3 sm:grid-cols-3">
                {content.stats.map((stat) => (
                  <div key={stat} className="rounded-[18px] border border-white/10 bg-black/22 px-4 py-3">
                    <p className="font-[var(--font-display)] text-xs tracking-[0.18em] text-[var(--color-fut-yellow)] uppercase">
                      {stat}
                    </p>
                  </div>
                ))}
                </div>
              ) : null}
            </article>
          )}

          {isProjectsSection ? null : content.experienceTimeline ? (
            <ExperienceTimeline entries={content.experienceTimeline} />
          ) : isAboutSection ? (
            <div className="flex min-h-0 flex-col gap-4">
              {content.cards.map((card, index) => {
                const modal = card.modal;
                const sizeClass =
                  card.title === 'Travels'
                    ? 'flex-[1.2] min-h-0'
                    : card.title === 'Off the clock'
                      ? 'flex-[0.78] min-h-0'
                      : index === 0
                        ? 'flex-[0.92] min-h-0'
                        : 'min-h-0';

                return (
                  <div key={card.title} className={sizeClass}>
                    <ContentCard
                      {...card}
                      onClick={modal ? () => setActiveModal(modal) : undefined}
                    />
                  </div>
                );
              })}
            </div>
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
      {isContactModalOpen ? <ContactModal onClose={() => setIsContactModalOpen(false)} /> : null}
      {isSkillsModalOpen ? <SkillsModal onClose={() => setIsSkillsModalOpen(false)} /> : null}
    </div>
  );
}

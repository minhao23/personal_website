import type { SectionContent, SectionSlug } from './portfolio-types';
import { AboutProfilePanel } from './about-profile-panel';
import { CertificationList } from './certification-list';
import { UltimateTeamPanel } from './ultimate-team-panel';

type PortfolioHeroProps = {
  section: SectionSlug;
  content: SectionContent;
  swappedHeroContent: SectionContent;
  onOpenSkills: () => void;
};

export function PortfolioHero({ section, content, swappedHeroContent, onOpenSkills }: PortfolioHeroProps) {
  if (section === 'home') {
    return <AboutProfilePanel content={swappedHeroContent} />;
  }

  if (section === 'about') {
    return <UltimateTeamPanel content={swappedHeroContent} onClick={onOpenSkills} />;
  }

  const isInternshipsSection = section === 'internships';
  const hasTimeline = Boolean(content.experienceTimeline);
  const containerClass = hasTimeline
    ? `fut-tile flex min-h-0 flex-col rounded-[30px] bg-black/28 p-5 backdrop-blur-sm md:p-6 lg:p-7 ${isInternshipsSection ? 'overflow-y-auto' : 'justify-between'}`
    : 'fut-tile flex min-h-0 flex-col justify-between rounded-[30px] bg-black/28 p-6 backdrop-blur-sm md:p-8';
  const titleClass = hasTimeline
    ? 'section-heading max-w-[12ch] text-[2.7rem] text-white md:text-[3.7rem] md:leading-[0.92]'
    : 'section-heading max-w-3xl text-[2.7rem] text-white md:text-[4.05rem] md:leading-[0.92]';

  return (
    <article className={`${containerClass} ${isInternshipsSection ? 'lg:order-2' : ''}`}>
      {isInternshipsSection && content.certifications?.length ? (
        <CertificationList certifications={content.certifications} className="grid gap-3" compactOnMobile />
      ) : (
        <div>
          <p className="mb-3 font-[var(--font-display)] text-xs tracking-[0.3em] text-[var(--color-fut-yellow)] uppercase">
            {content.eyebrow}
          </p>
          <h1 className={titleClass}>{content.title}</h1>
          <p className="mt-4 max-w-2xl text-sm leading-7 text-white/74 md:text-base">{content.description}</p>
        </div>
      )}

      {!isInternshipsSection && content.certifications?.length ? (
        <CertificationList certifications={content.certifications} className="mt-6 grid gap-3 lg:grid-cols-3" />
      ) : content.stats.length > 0 ? (
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
  );
}

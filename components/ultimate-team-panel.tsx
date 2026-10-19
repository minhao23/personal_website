import type { SectionContent } from './portfolio-types';
import { UltimateTeamOrbit } from './ultimate-team-orbit';

type UltimateTeamPanelProps = {
  content: SectionContent;
  onClick: () => void;
};

export function UltimateTeamPanel({ content, onClick }: UltimateTeamPanelProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="fut-tile group flex min-h-0 cursor-pointer flex-col justify-between rounded-[30px] bg-black/28 text-left backdrop-blur-sm transition-transform duration-150 hover:-translate-y-0.5 hover:bg-white/6"
    >
      <div className="px-6 pt-6 md:px-8 md:pt-8">
        <p className="mb-3 font-[var(--font-display)] text-xs tracking-[0.3em] text-[var(--color-fut-yellow)] uppercase">
          {content.eyebrow}
        </p>
        <h1 className="section-heading max-w-3xl text-[2.7rem] text-white transition-colors duration-150 group-hover:text-[var(--color-fut-yellow)] md:text-[4.05rem] md:leading-[0.92]">
          {content.title}
        </h1>
        <p className="mt-4 max-w-2xl text-sm leading-7 text-white/74 md:text-base">{content.description}</p>
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
  );
}

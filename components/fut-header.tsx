import Link from 'next/link';

import { NAV_ITEMS, type SectionSlug } from './portfolio-data';

type FutHeaderProps = {
  activeSlug: SectionSlug;
};

export function FutHeader({ activeSlug }: FutHeaderProps) {
  return (
    <header className="relative z-10 mx-auto w-full max-w-7xl px-5 pt-5 md:px-8 lg:px-10 lg:pt-6">
      <div className="overflow-hidden rounded-[18px] border border-[#1e2837] bg-[#0d1118]/70 shadow-[0_18px_40px_rgba(0,0,0,0.35)] backdrop-blur-md">
        <div className="flex items-center justify-between gap-4 border-b border-[#243246] bg-[linear-gradient(180deg,rgba(90,108,138,0.88),rgba(66,79,103,0.82))] px-4 py-3">
          <div className="flex min-w-0 items-center gap-4">
            <div className="flex items-center gap-3">
              <span className="font-[var(--font-display)] text-[2.2rem] leading-none tracking-[0.03em] text-white uppercase">
              </span>
              <span className="h-10 w-px bg-white/25" />
            </div>
            <div className="min-w-0">
              <p className="truncate font-[var(--font-display)] text-[1.55rem] leading-none tracking-[0.02em] text-white">
                He Minhao
              </p>
              <p className="mt-0.5 text-xs uppercase tracking-[0.18em] text-white/70">Welcome!</p>
            </div>
          </div>

          <div className="hidden items-center gap-2 md:flex">
            <div className="fut-top-chip">
              <span className="fut-top-label">Coins</span>
              <span className="fut-top-value">216,743</span>
            </div>
            <div className="fut-top-chip">
              <span className="fut-top-label">FIFA Points</span>
              <span className="fut-top-value">200</span>
            </div>
            <button
              type="button"
              className="font-[var(--font-display)] text-[1.35rem] leading-none tracking-[0.03em] text-black uppercase"
              style={{
                backgroundColor: 'var(--color-fut-yellow)',
                padding: '0.75rem 1.25rem',
                clipPath: 'polygon(0 0, 100% 0, 92% 100%, 0 100%)',
              }}
            >
              Get More
            </button>
          </div>
        </div>

        <nav
          className="grid h-[60px] items-stretch bg-[#10151d]"
          style={{ gridTemplateColumns: NAV_ITEMS.map((item) => item.width).join(' ') }}
        >
          {NAV_ITEMS.map((item) => {
            const isActive = activeSlug === item.slug;

            return (
              <Link
                key={item.slug}
                href={`/${item.slug}`}
                aria-current={isActive ? 'page' : undefined}
                className={`nav-tab relative border-r border-[#394558] px-3 ${
                  isActive ? 'active' : 'bg-[#10151d]'
                }`}
              >
                <span className="relative top-[1px]">{item.label}</span>
              </Link>
            );
          })}
        </nav>
      </div>
    </header>
  );
}

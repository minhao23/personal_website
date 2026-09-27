'use client';

import { useEffect, useState } from 'react';
import type { IconType } from 'react-icons';
import { FaAws } from 'react-icons/fa6';
import { SiDocker, SiPostgresql, SiPython, SiReact, SiTypescript } from 'react-icons/si';

type HeroLogo = {
  name: string;
  icon: IconType;
};

const HERO_LOGOS: HeroLogo[] = [
  {
    name: 'TypeScript',
    icon: SiTypescript,
  },
  {
    name: 'Python',
    icon: SiPython,
  },
  {
    name: 'React',
    icon: SiReact,
  },
  {
    name: 'Docker',
    icon: SiDocker,
  },
  {
    name: 'PostgreSQL',
    icon: SiPostgresql,
  },
  {
    name: 'AWS',
    icon: FaAws,
  },
];

export function UltimateTeamOrbit() {
  const [activeLogoIndex, setActiveLogoIndex] = useState(0);

  useEffect(() => {
    setActiveLogoIndex(Math.floor(Math.random() * HERO_LOGOS.length));
  }, []);

  const ActiveLogo = HERO_LOGOS[activeLogoIndex]?.icon ?? HERO_LOGOS[0].icon;

  return (
    <div aria-hidden="true" className="pointer-events-none relative mt-6 flex h-[270px] items-center justify-center overflow-hidden md:h-[310px]">
      <div className="absolute left-1/2 top-1/2 h-[220px] w-[220px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(245,208,0,0.16),transparent_68%)] blur-3xl md:h-[280px] md:w-[280px]" />
      <div className="absolute bottom-[-52px] right-[-34px] h-[240px] w-[240px] md:bottom-[-70px] md:right-[-46px] md:h-[320px] md:w-[320px]">
        <ActiveLogo className="h-full w-full text-white/16 drop-shadow-[0_22px_38px_rgba(0,0,0,0.28)]" />
      </div>
      <div className="absolute left-[-42px] top-[28px] h-[110px] w-[110px] rounded-full bg-[radial-gradient(circle,rgba(255,255,255,0.05),transparent_70%)] blur-2xl md:h-[140px] md:w-[140px]" />
    </div>
  );
}

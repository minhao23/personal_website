'use client';

import type { IconType } from 'react-icons';
import { FaAws, FaFigma, FaGithub, FaJava, FaLinux, FaNodeJs, FaTerminal } from 'react-icons/fa6';
import {
  SiC,
  SiCplusplus,
  SiDocker,
  SiGit,
  SiNextdotjs,
  SiPostgresql,
  SiPython,
  SiReact,
  SiTypescript,
} from 'react-icons/si';

type SkillPlayer = {
  position: string;
  name: string;
  icon: IconType;
  accent: string;
};

const STARTING_FORMATION: SkillPlayer[][] = [
  [
    {
      position: 'LW',
      name: 'TypeScript',
      icon: SiTypescript,
      accent: '#60a5fa',
    },
    {
      position: 'ST',
      name: 'Python',
      icon: SiPython,
      accent: '#facc15',
    },
    {
      position: 'RW',
      name: 'Java',
      icon: FaJava,
      accent: '#f87171',
    },
  ],
  [
    {
      position: 'LCM',
      name: 'React',
      icon: SiReact,
      accent: '#67e8f9',
    },
    {
      position: 'CM',
      name: 'Next.js',
      icon: SiNextdotjs,
      accent: '#e5e7eb',
    },
    {
      position: 'RCM',
      name: 'AWS',
      icon: FaAws,
      accent: '#fbbf24',
    },
  ],
  [
    {
      position: 'LB',
      name: 'Git',
      icon: SiGit,
      accent: '#fb923c',
    },
    {
      position: 'LCB',
      name: 'PostgreSQL',
      icon: SiPostgresql,
      accent: '#93c5fd',
    },
    {
      position: 'RCB',
      name: 'Docker',
      icon: SiDocker,
      accent: '#7dd3fc',
    },
    {
      position: 'RB',
      name: 'C++',
      icon: SiCplusplus,
      accent: '#c4b5fd',
    },
  ],
  [
    {
      position: 'GK',
      name: 'C',
      icon: SiC,
      accent: '#5eead4',
    },
  ],
];

const BENCH_SKILLS: SkillPlayer[] = [
  {
    position: 'SUB 1',
    name: 'Node.js',
    icon: FaNodeJs,
    accent: '#86efac',
  },
  {
    position: 'SUB 2',
    name: 'Linux',
    icon: FaLinux,
    accent: '#e5e7eb',
  },
  {
    position: 'SUB 3',
    name: 'Bash',
    icon: FaTerminal,
    accent: '#f9fafb',
  },
  {
    position: 'SUB 4',
    name: 'GitHub',
    icon: FaGithub,
    accent: '#d1d5db',
  },
  {
    position: 'SUB 5',
    name: 'Figma',
    icon: FaFigma,
    accent: '#fda4af',
  },
];

type SkillsModalProps = {
  onClose: () => void;
};

function SkillCard({ player }: { player: SkillPlayer }) {
  const Icon = player.icon;

  return (
    <article className="mx-auto w-[76px] transition-transform duration-150 ease-out hover:scale-[1.06] md:w-[84px]">
      <div
        className="relative flex h-[88px] flex-col items-center overflow-hidden px-2 pb-2 pt-1.5 [filter:drop-shadow(0_14px_18px_rgba(0,0,0,0.24))] md:h-[96px]"
        style={{
          clipPath: 'polygon(8% 0, 92% 0, 100% 12%, 100% 83%, 50% 100%, 0 83%, 0 12%)',
          background:
            'linear-gradient(180deg, #fbf3bf 0%, #f2e096 22%, #dfc764 54%, #c9a746 100%)',
        }}
      >
        <div className="absolute -left-3 top-[-9px] h-6 w-6 rounded-full bg-[#071014]" />
        <div className="absolute -right-3 top-[-9px] h-6 w-6 rounded-full bg-[#071014]" />
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.46),transparent_36%),linear-gradient(140deg,transparent_0%,rgba(255,255,255,0.13)_48%,transparent_82%)]" />
        <div
          className="pointer-events-none absolute inset-x-3 top-2 h-8 rounded-full blur-lg"
          style={{ backgroundColor: `${player.accent}40` }}
        />
        <div className="relative flex h-[52px] items-start justify-center pt-2 md:h-[58px] md:pt-2.5">
          <Icon className="h-7 w-7 text-[#1c1408] md:h-8 md:w-8" />
        </div>
        <p className="relative mt-0.5 px-1 text-center font-[var(--font-fut-card)] text-[0.54rem] leading-[1.02] font-black tracking-[0.03em] text-[#1a1208] uppercase [text-shadow:0_1px_0_rgba(255,255,255,0.2),0_0_0.4px_rgba(26,18,8,0.95)] md:text-[0.6rem]">
          {player.name}
        </p>
      </div>
    </article>
  );
}

export function SkillsModal({ onClose }: SkillsModalProps) {
  const getStartingRowClassName = (rowLength: number) => {
    if (rowLength === 4) {
      return 'mx-auto flex w-full max-w-[860px] items-center justify-between px-4 md:px-10';
    }

    if (rowLength === 3) {
      return 'mx-auto flex w-full max-w-[760px] items-center justify-between px-8 md:px-16';
    }

    return 'mx-auto flex w-full max-w-[220px] items-center justify-center';
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/72 px-4 py-8 backdrop-blur-sm">
      <button type="button" aria-label="Close modal" className="absolute inset-0" onClick={onClose} />

      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="skills-modal-title"
        className="relative z-10 flex w-full max-w-7xl flex-col overflow-hidden rounded-[28px] border border-white/10 bg-[#0c1118]/95 shadow-[0_25px_70px_rgba(0,0,0,0.45)]"
      >
        <div className="border-b border-white/10 px-5 py-4 md:px-7">
          <div className="flex items-start justify-between gap-4">
            <div>
              <p className="font-[var(--font-display)] text-sm tracking-[0.22em] text-[var(--color-fut-yellow)] uppercase">
                Skills
              </p>
              <h2 id="skills-modal-title" className="section-heading mt-2 text-3xl text-white md:text-4xl">
                4-3-3 skill squad
              </h2>
              <p className="mt-2 max-w-2xl text-sm leading-6 text-white/72">
                Starting eleven above, substitution bench below.
              </p>
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

        <div className="px-4 py-4 md:px-6 md:py-5">
          <div className="relative overflow-hidden rounded-[28px] border border-white/10 bg-[radial-gradient(circle_at_top,rgba(245,208,0,0.1),transparent_30%),linear-gradient(180deg,rgba(18,28,19,0.95),rgba(8,12,18,0.98))] p-3 md:p-5">
            <div className="pointer-events-none absolute inset-x-[8%] top-[13%] h-px bg-white/12" />
            <div className="pointer-events-none absolute inset-x-[12%] top-[38%] h-px bg-white/10" />
            <div className="pointer-events-none absolute inset-x-[8%] top-[61%] h-px bg-white/10" />
            <div className="pointer-events-none absolute bottom-[22%] left-1/2 top-[8%] w-px -translate-x-1/2 bg-white/10" />
            <div className="pointer-events-none absolute left-1/2 top-[47%] h-20 w-20 -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/10" />

            <div className="relative grid gap-4 md:gap-5">
              {STARTING_FORMATION.map((row, rowIndex) => (
                <div
                  key={`row-${rowIndex}`}
                  className={getStartingRowClassName(row.length)}
                >
                  {row.map((player) => (
                    <SkillCard key={`${player.position}-${player.name}`} player={player} />
                  ))}
                </div>
              ))}

              <div className="pt-1">
                <div className="mb-2 flex items-center justify-between gap-3">
                  <p className="font-[var(--font-display)] text-xs tracking-[0.24em] text-[var(--color-fut-yellow)] uppercase">
                    Substitution Bench
                  </p>
                  <div className="h-px flex-1 bg-white/10" />
                </div>
                <div className="grid grid-cols-3 gap-3 md:grid-cols-5">
                  {BENCH_SKILLS.map((player) => (
                    <SkillCard key={`${player.position}-${player.name}`} player={player} />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

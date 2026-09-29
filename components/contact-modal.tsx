'use client';

import type { IconType } from 'react-icons';
import { FaGithub, FaLinkedin } from 'react-icons/fa6';
import { MdEmail } from 'react-icons/md';

type ContactModalProps = {
  onClose: () => void;
};

type ContactChannel = {
  title: string;
  value: string;
  description: string;
  href: string;
  icon: IconType;
  glowClass: string;
  iconClass: string;
};

const CONTACT_CHANNELS: ContactChannel[] = [
  {
    title: 'LinkedIn',
    value: 'minhaohe',
    description: 'For professional updates, experience, and a quick way to connect.',
    href: 'https://www.linkedin.com/in/minhaohe/',
    icon: FaLinkedin,
    glowClass: 'bg-[radial-gradient(circle,rgba(10,102,194,0.22),transparent_62%)]',
    iconClass: 'text-[#0a66c2]/25',
  },
  {
    title: 'Email',
    value: 'heminhao120@gmail.com',
    description: 'Best for direct outreach, project conversations, or anything more personal.',
    href: 'mailto:heminhao120@gmail.com',
    icon: MdEmail,
    glowClass: 'bg-[radial-gradient(circle,rgba(245,208,0,0.22),transparent_62%)]',
    iconClass: 'text-[#f5d000]/22',
  },
  {
    title: 'GitHub',
    value: 'minhao23',
    description: 'Code, experiments, course projects, and the things I am actively building.',
    href: 'https://github.com/minhao23',
    icon: FaGithub,
    glowClass: 'bg-[radial-gradient(circle,rgba(255,255,255,0.16),transparent_62%)]',
    iconClass: 'text-white/16',
  },
];

export function ContactModal({ onClose }: ContactModalProps) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/72 px-4 py-8 backdrop-blur-sm">
      <button type="button" aria-label="Close contact modal" className="absolute inset-0" onClick={onClose} />

      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="contact-modal-title"
        className="relative z-10 w-full max-w-5xl overflow-hidden rounded-[28px] border border-white/10 bg-[#0c1118]/96 shadow-[0_28px_80px_rgba(0,0,0,0.48)]"
      >
        <div className="flex items-start justify-between gap-4 border-b border-white/10 px-6 py-5 md:px-8">
          <div>
            <p className="font-[var(--font-display)] text-[11px] tracking-[0.24em] text-[var(--color-fut-yellow)] uppercase">
              Contact me
            </p>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs tracking-[0.18em] text-white/72 uppercase transition hover:bg-white/10 hover:text-white"
          >
            Close
          </button>
        </div>

        <div className="grid gap-4 px-6 py-6 md:grid-cols-3 md:px-8 md:py-8">
          {CONTACT_CHANNELS.map((channel) => {
            const Icon = channel.icon;

            return (
              <a
                key={channel.title}
                href={channel.href}
                target={channel.href.startsWith('mailto:') ? undefined : '_blank'}
                rel={channel.href.startsWith('mailto:') ? undefined : 'noreferrer'}
                className="group fut-tile relative flex min-h-[220px] overflow-hidden rounded-[30px] bg-black/28 p-6 text-left transition-transform duration-150 hover:-translate-y-0.5 hover:bg-white/6 md:min-h-[250px]"
              >
                <div className="pointer-events-none absolute bottom-[-20px] right-[-24px] z-0 h-[168px] w-[168px] md:bottom-[-30px] md:right-[-36px] md:h-[210px] md:w-[210px]">
                  <div className={`absolute inset-0 rounded-full blur-2xl ${channel.glowClass}`} />
                  <Icon className={`absolute inset-0 h-full w-full ${channel.iconClass}`} />
                </div>

                <div className="relative z-10 max-w-[70%]">
                  <p className="font-[var(--font-display)] text-[11px] tracking-[0.22em] text-[var(--color-fut-yellow)] uppercase">
                    Channel
                  </p>
                  <h3 className="section-heading mt-3 text-[1.5rem] text-white transition-colors duration-150 group-hover:text-[var(--color-fut-yellow)]">
                    {channel.title}
                  </h3>
                  <p className="mt-4 text-sm leading-6 text-white/74">{channel.description}</p>
                  <p className="mt-4 font-[var(--font-display)] text-[11px] tracking-[0.14em] text-white/54 uppercase">
                    {channel.value}
                  </p>
                </div>
              </a>
            );
          })}
        </div>
      </div>
    </div>
  );
}

import type { IconType } from "react-icons"
import { FaGithub, FaLinkedin } from "react-icons/fa6"
import { MdEmail } from "react-icons/md"

import type { SectionContent } from "./portfolio-types"

type ContactChannel = {
  title: string
  value: string
  description?: string
  href: string
  icon: IconType
  glowClass: string
  iconClass: string
}

const CONTACT_CHANNELS: ContactChannel[] = [
  {
    title: "LinkedIn",
    value: "minhaohe",
    href: "https://www.linkedin.com/in/minhaohe/",
    icon: FaLinkedin,
    glowClass:
      "bg-[radial-gradient(circle,rgba(10,102,194,0.22),transparent_62%)]",
    iconClass: "text-[#0a66c2]/25",
  },
  {
    title: "Email",
    value: "heminhao120@gmail.com",
    href: "mailto:heminhao120@gmail.com",
    icon: MdEmail,
    glowClass:
      "bg-[radial-gradient(circle,rgba(245,208,0,0.22),transparent_62%)]",
    iconClass: "text-[#f5d000]/22",
  },
  {
    title: "GitHub",
    value: "minhao23",
    href: "https://github.com/minhao23",
    icon: FaGithub,
    glowClass:
      "bg-[radial-gradient(circle,rgba(255,255,255,0.16),transparent_62%)]",
    iconClass: "text-white/16",
  },
]

type ContactPageContentProps = {
  content: SectionContent
}

export function ContactPageContent({ content }: ContactPageContentProps) {
  return (
    <section className="contact-content animate-in flex min-h-0 flex-1 flex-col">
      <div className="contact-intro mb-5">
        <p className="font-[var(--font-display)] text-xs tracking-[0.3em] text-[var(--color-fut-yellow)] uppercase">
          {content.eyebrow}
        </p>
        <h1 className="section-heading mt-2 text-[2.7rem] text-white md:text-[4.05rem] md:leading-[0.92]">
          {content.title}
        </h1>
        <p className="mt-4 max-w-2xl text-sm leading-7 text-white/74 md:text-base">
          {content.description}
        </p>
      </div>

      <div className="contact-channels grid min-h-0 flex-1 gap-4 md:grid-cols-3">
        {CONTACT_CHANNELS.map((channel) => {
          const Icon = channel.icon
          const isEmail = channel.href.startsWith("mailto:")

          return (
            <a
              key={channel.title}
              href={channel.href}
              target={isEmail ? undefined : "_blank"}
              rel={isEmail ? undefined : "noreferrer"}
              className="contact-channel group fut-tile relative flex min-h-[220px] overflow-hidden rounded-[30px] bg-black/28 p-6 text-left transition-transform duration-150 hover:-translate-y-0.5 hover:bg-white/6"
            >
              <div className="contact-channel-art pointer-events-none absolute right-[-36px] bottom-[-30px] z-0 h-[210px] w-[210px]">
                <div
                  className={`absolute inset-0 rounded-full blur-2xl ${channel.glowClass}`}
                />
                <Icon
                  className={`absolute inset-0 h-full w-full ${channel.iconClass}`}
                />
              </div>

              <div className="contact-channel-text relative z-10 max-w-[70%]">
                <p className="font-[var(--font-display)] text-[11px] tracking-[0.22em] text-[var(--color-fut-yellow)] uppercase">
                  Channel
                </p>
                <h2 className="section-heading mt-3 text-[1.5rem] text-white transition-colors duration-150 group-hover:text-[var(--color-fut-yellow)]">
                  {channel.title}
                </h2>
                <p className="mt-4 text-sm leading-6 text-white/74">
                  {channel.description}
                </p>
                <p className="mt-4 font-[var(--font-display)] text-[11px] tracking-[0.14em] text-white/54 uppercase">
                  {channel.value}
                </p>
              </div>
            </a>
          )
        })}
      </div>
    </section>
  )
}

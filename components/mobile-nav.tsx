import Link from "next/link"
import { FiBriefcase, FiFolder, FiHome, FiMail } from "react-icons/fi"

import { NAV_ITEMS } from "./portfolio-data"
import type { SectionSlug } from "./portfolio-types"

type MobileNavProps = {
  activeSlug: SectionSlug
  className?: string
}

const NAV_ICONS = {
  home: FiHome,
  internships: FiBriefcase,
  projects: FiFolder,
  contact: FiMail,
}

export function MobileNav({ activeSlug, className = "" }: MobileNavProps) {
  return (
    <nav
      aria-label="Mobile navigation"
      className={`fixed inset-x-0 bottom-0 z-50 grid grid-cols-4 border-t border-white/10 bg-[#10151d]/95 px-2 pt-2 pb-[max(0.5rem,env(safe-area-inset-bottom))] shadow-[0_-8px_30px_rgba(0,0,0,0.3)] backdrop-blur-xl ${className}`}
    >
      {NAV_ITEMS.map((item) => {
        const Icon = NAV_ICONS[item.slug]
        const isActive = activeSlug === item.slug

        return (
          <Link
            key={item.slug}
            href={`/${item.slug}`}
            aria-current={isActive ? "page" : undefined}
            className={`flex min-h-12 min-w-0 flex-col items-center justify-center gap-1 rounded-xl px-1 py-2 text-[11px] font-semibold transition-colors focus-visible:outline-2 focus-visible:outline-[var(--color-fut-yellow)] ${
              isActive
                ? "bg-[var(--color-fut-yellow)]/10 text-[var(--color-fut-yellow)]"
                : "text-white/60 hover:text-white"
            }`}
          >
            <Icon aria-hidden="true" className="h-5 w-5" />
            <span className="capitalize">{item.slug}</span>
          </Link>
        )
      })}
    </nav>
  )
}

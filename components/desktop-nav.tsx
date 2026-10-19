import Link from "next/link"

import { NAV_ITEMS } from "./portfolio-data"
import type { SectionSlug } from "./portfolio-types"

type DesktopNavProps = {
  activeSlug: SectionSlug
  className?: string
}

export function DesktopNav({ activeSlug, className = "" }: DesktopNavProps) {
  return (
    <nav
      className={`h-[48px] items-stretch bg-[#10151d] ${className}`}
      style={{
        gridTemplateColumns: NAV_ITEMS.map((item) => item.width).join(" "),
      }}
    >
      {NAV_ITEMS.map((item) => {
        const isActive = activeSlug === item.slug

        return (
          <Link
            key={item.slug}
            href={`/${item.slug}`}
            aria-current={isActive ? "page" : undefined}
            className={`nav-tab relative border-r border-[#394558] px-3 ${
              isActive ? "active" : "bg-[#10151d]"
            }`}
          >
            <span className="relative top-[1px]">
              {item.slug.toUpperCase()}
            </span>
          </Link>
        )
      })}
    </nav>
  )
}

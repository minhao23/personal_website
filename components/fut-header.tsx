"use client"

import Image from "next/image"

import singaporeFlag from "../app/assets/countries/singapore.png"
import { DesktopNav } from "./desktop-nav"
import type { SectionSlug } from "./portfolio-types"

type FutHeaderProps = {
  activeSlug: SectionSlug
}

export function FutHeader({ activeSlug }: FutHeaderProps) {
  return (
    <header className="relative z-10 mx-auto w-full max-w-7xl px-5 pt-5 md:px-8 lg:px-10 lg:pt-6">
      <div className="overflow-hidden rounded-[18px] border border-[#1e2837] bg-[#0d1118]/70 shadow-[0_18px_40px_rgba(0,0,0,0.35)] backdrop-blur-md">
        <div className="flex items-center justify-between gap-4 border-b border-[#243246] bg-[linear-gradient(180deg,rgba(90,108,138,0.88),rgba(66,79,103,0.82))] px-4 py-2">
          <div className="flex min-w-0 items-center gap-4">
            <div className="flex items-center gap-3">
              <Image
                src={singaporeFlag}
                alt="Singapore flag"
                className="h-8 w-auto object-contain"
                priority
              />
              <span className="h-10 w-px bg-white/25" />
            </div>
            <div className="min-w-0">
              <div className="flex flex-row items-center gap-3">
                <p className="truncate font-[var(--font-display)] text-[1.55rem] leading-none tracking-[0.02em] text-white">
                  He Minhao
                </p>
                <div className="shrink-0 text-[11px] uppercase tracking-[0.18em] text-white/55">
                  Est. May 2002
                </div>
              </div>
              <p className="mt-0.5 text-xs uppercase tracking-[0.18em] text-white/70">
                Welcome!
              </p>
            </div>
          </div>

          <div className="ml-auto hidden items-center md:flex">
            <div className="fut-status-bar">
              <div className="fut-status-item">
                <span className="fut-top-label">Coins</span>
                <div className="flex items-center gap-2">
                  <span
                    className="fut-status-icon fut-status-icon--coin"
                    aria-hidden="true"
                  />
                  <span className="fut-top-value">&infin;</span>
                </div>
              </div>
              <div className="fut-status-divider" aria-hidden="true" />
              <div className="fut-status-item">
                <span className="fut-top-label">FIFA Points</span>
                <div className="flex items-center gap-2">
                  <span
                    className="fut-status-icon fut-status-icon--points"
                    aria-hidden="true"
                  />
                  <span className="fut-top-value">&infin;</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <DesktopNav activeSlug={activeSlug} className="hidden md:grid" />
      </div>
    </header>
  )
}

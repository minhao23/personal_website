"use client"

import { useState } from "react"

import { ContactPageContent } from "./contact-page-content"
import { DetailModal } from "./detail-modal"
import { ExperienceTimeline } from "./experience-timeline"
import { FutHeader } from "./fut-header"
import { MobileNav } from "./mobile-nav"
import { PortfolioCardList } from "./portfolio-card-list"
import { PortfolioHero } from "./portfolio-hero"
import { PORTFOLIO_CONTENT } from "./portfolio-data"
import type { SectionSlug, TabCard } from "./portfolio-types"
import { SkillsModal } from "./skills-modal"

type PortfolioScreenProps = {
  section: SectionSlug
}

export function PortfolioScreen({ section }: PortfolioScreenProps) {
  const content = PORTFOLIO_CONTENT[section]
  const isAboutSection = section === "about"
  const isContactSection = section === "contact"
  const isInternshipsSection = section === "internships"
  const isProjectsSection = section === "projects"
  const swappedHeroContent =
    section === "home"
      ? PORTFOLIO_CONTENT.about
      : isAboutSection
        ? PORTFOLIO_CONTENT.home
        : content
  const [activeModal, setActiveModal] =
    useState<NonNullable<TabCard["modal"]> | null>(null)
  const [isSkillsModalOpen, setIsSkillsModalOpen] = useState(false)

  const sectionGridClass = isProjectsSection
    ? "animate-in grid min-h-0 flex-1 content-start gap-4 overflow-y-auto px-1 pt-1 pb-2 md:grid-cols-2"
    : isAboutSection
      ? "animate-in grid min-h-0 flex-1 gap-4 lg:grid-cols-[1.22fr_0.78fr]"
      : isInternshipsSection
        ? "animate-in grid min-h-0 flex-1 gap-4 lg:grid-cols-[1.14fr_0.86fr]"
        : "animate-in grid min-h-0 flex-1 gap-4 lg:grid-cols-[1.05fr_0.95fr]"

  function handleModalOpen(modal: NonNullable<TabCard["modal"]>) {
    setActiveModal(modal)
  }

  return (
    <div className={`portfolio-screen flex h-screen flex-col overflow-hidden bg-transparent text-white${isContactSection ? " contact-screen" : ""}`}>
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(7,8,10,0.12)_0%,rgba(7,8,10,0.5)_38%,rgba(7,8,10,0.9)_100%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_center,rgba(245,208,0,0.1),transparent_34%)]" />

      <FutHeader activeSlug={section} />

      <main className="portfolio-main relative z-10 mx-auto flex min-h-0 w-full max-w-7xl flex-1 px-5 py-5 md:px-8 lg:px-10 lg:py-6">
        {isContactSection ? (
          <ContactPageContent content={content} />
        ) : (
          <section
            className={`portfolio-section ${sectionGridClass}${
              isInternshipsSection ? " internships-page" : ""
            }`}
          >
            {isProjectsSection ? (
              <PortfolioCardList
                cards={content.cards}
                layout="projects"
                onModalOpen={handleModalOpen}
              />
            ) : (
              <PortfolioHero
                section={section}
                content={content}
                swappedHeroContent={swappedHeroContent}
                onOpenSkills={() => setIsSkillsModalOpen(true)}
              />
            )}

            {isProjectsSection ? null : content.experienceTimeline ? (
              <div
                className={
                  isInternshipsSection ? "min-h-0 lg:order-1" : "min-h-0"
                }
              >
                <ExperienceTimeline entries={content.experienceTimeline} />
              </div>
            ) : (
              <PortfolioCardList
                cards={content.cards}
                layout={isAboutSection ? "about" : "grid"}
                onModalOpen={handleModalOpen}
              />
            )}
          </section>
        )}
      </main>

      <MobileNav activeSlug={section} className="md:hidden" />

      {activeModal ? (
        <DetailModal modal={activeModal} onClose={() => setActiveModal(null)} />
      ) : null}
      {isSkillsModalOpen ? (
        <SkillsModal onClose={() => setIsSkillsModalOpen(false)} />
      ) : null}
    </div>
  )
}

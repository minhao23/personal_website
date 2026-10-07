'use client';

import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';
import { FaFlag, FaStar } from 'react-icons/fa6';

import type { TabCard } from './portfolio-data';
import { TimelineList, type TimelineEvent } from './timeline-list';

type DetailModalProps = {
  modal: NonNullable<TabCard['modal']>;
  onClose: () => void;
};

type TravelWriteupSummary = {
  citiesVisited: string[];
  paragraphs: string[];
};

function splitParagraphsIntoSections(paragraphs: string[], sectionCount: number) {
  if (sectionCount <= 0) {
    return [];
  }

  const normalizedSectionCount = Math.min(sectionCount, Math.max(paragraphs.length, 1));
  const baseSize = Math.floor(paragraphs.length / normalizedSectionCount);
  const remainder = paragraphs.length % normalizedSectionCount;
  const sections: string[][] = [];
  let startIndex = 0;

  for (let index = 0; index < normalizedSectionCount; index += 1) {
    const extraItem = index < remainder ? 1 : 0;
    const endIndex = startIndex + baseSize + extraItem;
    sections.push(paragraphs.slice(startIndex, endIndex));
    startIndex = endIndex;
  }

  while (sections.length < sectionCount) {
    sections.push([]);
  }

  return sections;
}

export function DetailModal({ modal, onClose }: DetailModalProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isTravelCardSelected, setIsTravelCardSelected] = useState(false);
  const [isTravelGalleryOpen, setIsTravelGalleryOpen] = useState(false);
  const [travelWriteups, setTravelWriteups] = useState<Record<string, TravelWriteupSummary>>({});
  const selectionTimeoutRef = useRef<number | null>(null);
  const galleryOpenTimeoutRef = useRef<number | null>(null);

  useEffect(() => {
    return () => {
      if (selectionTimeoutRef.current !== null) {
        window.clearTimeout(selectionTimeoutRef.current);
      }
      if (galleryOpenTimeoutRef.current !== null) {
        window.clearTimeout(galleryOpenTimeoutRef.current);
      }
    };
  }, []);

  useEffect(() => {
    if (modal.kind !== 'travel-showcase') {
      return;
    }

    let isCancelled = false;

    fetch('/api/travel-writeups')
      .then((response) => {
        if (!response.ok) {
          throw new Error('Failed to load travel writeups');
        }

        return response.json() as Promise<Record<string, TravelWriteupSummary>>;
      })
      .then((data) => {
        if (!isCancelled) {
          setTravelWriteups(data);
        }
      })
      .catch(() => {
        if (!isCancelled) {
          setTravelWriteups({});
        }
      });

    return () => {
      isCancelled = true;
    };
  }, [modal]);

  if (modal.kind === 'travel-showcase') {
    const entries = modal.entries;
    const activeEntry = entries[activeIndex];
    const activeWriteup = travelWriteups[activeEntry.slug];
    const citiesVisited = activeWriteup?.citiesVisited ?? [];
    const writeupParagraphs = activeWriteup?.paragraphs ?? [];
    const activeGallery = activeEntry.gallery?.length
      ? activeEntry.gallery
      : [{ image: activeEntry.image, alt: activeEntry.imageAlt ?? `${activeEntry.title} flag` }];
    const heroGalleryIndex = activeGallery.findIndex((galleryItem) => galleryItem.image.width >= galleryItem.image.height);
    const heroGalleryItem = activeGallery[heroGalleryIndex >= 0 ? heroGalleryIndex : 0];
    const supportingGalleryItems = activeGallery.filter((_, index) => index !== (heroGalleryIndex >= 0 ? heroGalleryIndex : 0));

    function getTravelPhotoFrameClass(image: { width: number; height: number }, isHero = false) {
      const isPortrait = image.height > image.width;

      if (isHero) {
        return isPortrait ? 'mx-auto max-w-[min(100%,36rem)]' : 'w-full';
      }

      return isPortrait ? 'mx-auto w-full max-w-[21rem]' : 'md:col-span-2';
    }

    function getTravelPhotoImageClass(image: { width: number; height: number }, isHero = false) {
      const isPortrait = image.height > image.width;

      if (isHero) {
        return isPortrait ? 'mx-auto h-auto max-h-[72vh] w-auto max-w-full' : 'h-auto w-full';
      }

      return isPortrait ? 'mx-auto h-auto max-h-[34rem] w-auto max-w-full' : 'h-auto w-full';
    }

    function getTravelPhotoNumber(galleryItem: (typeof activeGallery)[number]) {
      return activeGallery.indexOf(galleryItem) + 1;
    }

    const firstSupportingGalleryItems = supportingGalleryItems.slice(0, 2);
    const remainingSupportingGalleryItems = supportingGalleryItems.slice(2);
    const textSectionCount = remainingSupportingGalleryItems.length > 0 ? 3 : firstSupportingGalleryItems.length > 0 ? 2 : 1;
    const [heroTextParagraphs = [], middleTextParagraphs = [], closingTextParagraphs = []] =
      splitParagraphsIntoSections(writeupParagraphs, textSectionCount);

    function triggerTravelCardSelection() {
      if (selectionTimeoutRef.current !== null) {
        window.clearTimeout(selectionTimeoutRef.current);
      }

      setIsTravelCardSelected(true);
      selectionTimeoutRef.current = window.setTimeout(() => {
        setIsTravelCardSelected(false);
        selectionTimeoutRef.current = null;
      }, 630);
    }

    function cycleEntry(delta: number) {
      setActiveIndex((currentIndex) => (currentIndex + delta + entries.length) % entries.length);
    }

    function openTravelGallery() {
      triggerTravelCardSelection();
      if (galleryOpenTimeoutRef.current !== null) {
        window.clearTimeout(galleryOpenTimeoutRef.current);
      }
      galleryOpenTimeoutRef.current = window.setTimeout(() => {
        setIsTravelGalleryOpen(true);
        galleryOpenTimeoutRef.current = null;
      }, 630);
    }

    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/72 px-4 py-8 backdrop-blur-sm">
        <button
          type="button"
          aria-label="Close modal"
          className="absolute inset-0"
          onClick={onClose}
        />

        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby="detail-modal-title"
          className="relative z-10"
        >
          {isTravelGalleryOpen ? (
            <div className="fixed inset-0 z-20 flex items-center justify-center px-4 py-6 md:px-6">
              <button
                type="button"
                aria-label="Close travel gallery"
                className="absolute inset-0"
                onClick={() => setIsTravelGalleryOpen(false)}
              />

              <div
                role="dialog"
                aria-modal="true"
                aria-labelledby="travel-gallery-title"
                className="relative z-10 flex max-h-[90vh] w-full max-w-5xl flex-col overflow-hidden rounded-[28px] border border-black/8 bg-[#f7f2e7] shadow-[0_32px_88px_rgba(0,0,0,0.46)]"
                onClick={(event) => event.stopPropagation()}
              >
                <div className="flex items-start justify-between gap-4 border-b border-black/8 bg-[linear-gradient(180deg,rgba(255,255,255,0.78)_0%,rgba(245,239,226,0.92)_100%)] px-6 py-5 md:px-8">
                  <div>
                    <p className="font-[var(--font-display)] text-[11px] tracking-[0.24em] text-[#9c7b1f] uppercase">
                      Travel Notes
                    </p>
                    <h3 id="travel-gallery-title" className="mt-2 font-[var(--font-display)] text-3xl text-[#1a2230] uppercase md:text-4xl">
                      {activeEntry.title}
                    </h3>
                    {citiesVisited.length > 0 ? (
                      <div className="mt-3 flex flex-wrap gap-2.5">
                        {citiesVisited.map((city) => (
                          <span
                            key={`${activeEntry.slug}-${city}`}
                            className="rounded-full border border-[#d9ccb3] bg-[#efe6d6] px-3 py-1.5 font-[var(--font-display)] text-[11px] tracking-[0.16em] text-[#5a4c2e] uppercase shadow-[inset_0_1px_0_rgba(255,255,255,0.65)]"
                          >
                            {city}
                          </span>
                        ))}
                      </div>
                    ) : null}
                  </div>

                  <button
                    type="button"
                    onClick={() => setIsTravelGalleryOpen(false)}
                    className="rounded-full border border-black/10 bg-white/70 px-4 py-2 text-xs tracking-[0.18em] text-[#374150] uppercase transition hover:bg-white hover:text-[#151a22]"
                  >
                    Close
                  </button>
                </div>

                <div className="overflow-y-auto px-6 py-6 md:px-8 md:py-8">
                  <figure className={`overflow-hidden rounded-[24px] bg-[#e8dfcf] shadow-[0_18px_40px_rgba(34,28,18,0.14)] ${getTravelPhotoFrameClass(heroGalleryItem.image, true)}`}>
                    <Image
                      src={heroGalleryItem.image}
                      alt={heroGalleryItem.alt ?? activeEntry.imageAlt ?? activeEntry.title}
                      className={getTravelPhotoImageClass(heroGalleryItem.image, true)}
                    />
                    <figcaption className="border-t border-black/6 bg-[#f2e8d8] px-5 py-4">
                      <p className="font-[var(--font-display)] text-[10px] tracking-[0.18em] text-[#8b6c1f] uppercase">
                        Cover Photo
                      </p>
                      <p className="mt-2 text-sm leading-6 text-[#2a2e30]">{`${activeEntry.title} travel highlight ${getTravelPhotoNumber(heroGalleryItem)}.`}</p>
                    </figcaption>
                  </figure>

                  <div className="mt-4 flex items-center justify-between gap-4 text-sm text-[#6d6556]">
                    <p>{`${activeGallery.length} ${activeGallery.length === 1 ? 'photo' : 'photos'}`}</p>
                    <p className="font-[var(--font-display)] text-[10px] tracking-[0.18em] uppercase">Travel Highlights</p>
                  </div>

                  {heroTextParagraphs.length > 0 ? (
                    <div className="mt-8 space-y-5 text-[15px] leading-8 text-[#242829] md:text-base">
                      {heroTextParagraphs.map((paragraph, index) => (
                        <p key={`${activeEntry.slug}-hero-copy-${index}`}>{paragraph}</p>
                      ))}
                    </div>
                  ) : null}

                  {firstSupportingGalleryItems.length > 0 ? (
                    <>
                      <h4 className="mt-10 font-[var(--font-display)] text-2xl text-[#1b2430]">
                        {`${activeEntry.title} Highlights`}
                      </h4>

                      <div className="mt-5 grid gap-5 md:grid-cols-2">
                        {firstSupportingGalleryItems.map((galleryItem) => (
                          <figure
                            key={`${activeEntry.title}-highlight-${getTravelPhotoNumber(galleryItem)}`}
                            className={`overflow-hidden rounded-[20px] bg-[#e8dfcf] shadow-[0_12px_28px_rgba(35,28,18,0.12)] ${getTravelPhotoFrameClass(galleryItem.image)}`}
                          >
                            <Image
                              src={galleryItem.image}
                              alt={galleryItem.alt ?? `${activeEntry.title} travel highlight ${getTravelPhotoNumber(galleryItem)}`}
                              className={getTravelPhotoImageClass(galleryItem.image)}
                            />
                            <figcaption className="border-t border-black/6 bg-[#f2e8d8] px-4 py-3">
                              <p className="font-[var(--font-display)] text-[10px] tracking-[0.18em] text-[#8b6c1f] uppercase">
                                Highlight
                              </p>
                              <p className="mt-2 text-sm leading-6 text-[#2a2e30]">{`Trip to ${activeEntry.title} photo ${getTravelPhotoNumber(galleryItem)}.`}</p>
                            </figcaption>
                          </figure>
                        ))}
                      </div>
                    </>
                  ) : null}

                  {remainingSupportingGalleryItems.length > 0 ? (
                    <>
                      {middleTextParagraphs.length > 0 ? (
                        <div className="mt-8 space-y-5 text-[15px] leading-8 text-[#242829] md:text-base">
                          {middleTextParagraphs.map((paragraph, index) => (
                            <p key={`${activeEntry.slug}-middle-copy-${index}`}>{paragraph}</p>
                          ))}
                        </div>
                      ) : null}

                      <div className="mt-5 grid gap-5 md:grid-cols-2">
                        {remainingSupportingGalleryItems.map((galleryItem) => (
                          <figure
                            key={`${activeEntry.title}-highlight-${getTravelPhotoNumber(galleryItem)}`}
                            className={`overflow-hidden rounded-[20px] bg-[#e8dfcf] shadow-[0_12px_28px_rgba(35,28,18,0.12)] ${getTravelPhotoFrameClass(galleryItem.image)}`}
                          >
                            <Image
                              src={galleryItem.image}
                              alt={galleryItem.alt ?? `${activeEntry.title} travel highlight ${getTravelPhotoNumber(galleryItem)}`}
                              className={getTravelPhotoImageClass(galleryItem.image)}
                            />
                            <figcaption className="border-t border-black/6 bg-[#f2e8d8] px-4 py-3">
                              <p className="font-[var(--font-display)] text-[10px] tracking-[0.18em] text-[#8b6c1f] uppercase">
                                Highlight
                              </p>
                              <p className="mt-2 text-sm leading-6 text-[#2a2e30]">{`Trip to ${activeEntry.title} photo ${getTravelPhotoNumber(galleryItem)}.`}</p>
                            </figcaption>
                          </figure>
                        ))}
                      </div>

                      {closingTextParagraphs.length > 0 ? (
                        <div className="mt-8 space-y-5 text-[15px] leading-8 text-[#242829] md:text-base">
                          {closingTextParagraphs.map((paragraph, index) => (
                            <p key={`${activeEntry.slug}-closing-copy-${index}`}>{paragraph}</p>
                          ))}
                        </div>
                      ) : null}
                    </>
                  ) : middleTextParagraphs.length > 0 ? (
                    <div className="mt-8 space-y-5 text-[15px] leading-8 text-[#242829] md:text-base">
                      {middleTextParagraphs.map((paragraph, index) => (
                        <p key={`${activeEntry.slug}-middle-copy-${index}`}>{paragraph}</p>
                      ))}
                    </div>
                  ) : null}
                </div>
              </div>
            </div>
          ) : null}

          <div className="relative mx-auto w-[300px] text-center md:w-[332px]">
            <article
              onClick={openTravelGallery}
              className={`relative bg-transparent shadow-[0_26px_64px_rgba(0,0,0,0.34)] transition-[transform,filter,box-shadow] duration-500 ease-out ${
                isTravelCardSelected
                  ? 'scale-[1.018] -translate-y-0.5 brightness-105 shadow-[0_30px_72px_rgba(8,13,22,0.52)]'
                  : ''
              }`}
            >
              <div className="flex items-center justify-between bg-[linear-gradient(180deg,#22344d_0%,#182537_100%)] px-5 py-3.5">
                <p className="font-[var(--font-display)] text-[13px] tracking-[0.2em] text-white/92 uppercase">
                  International
                </p>
                <FaFlag className="h-4.5 w-4.5 text-[#d7c184]" />
              </div>

              <div
                className={`mt-[8px] px-5 pb-6 pt-4 transition-colors duration-500 md:px-6 md:pb-7 ${
                  isTravelCardSelected
                    ? 'bg-[linear-gradient(180deg,#24384f_0%,#182638_100%)]'
                    : 'bg-[linear-gradient(180deg,#f2eedf_0%,#ece6d6_100%)]'
                }`}
              >
                <h2
                  id="detail-modal-title"
                  className={`font-[var(--font-display)] text-[2.25rem] leading-none tracking-[0.035em] uppercase transition-colors duration-500 md:text-[2.55rem] ${
                    isTravelCardSelected ? 'text-white' : 'text-[#3c5787]'
                  }`}
                >
                  {activeEntry.title}
                </h2>

                <div className="mt-5 flex items-center justify-between">
                  <button
                    type="button"
                    onClick={(event) => {
                      event.stopPropagation();
                      cycleEntry(-1);
                    }}
                    aria-label="Show previous country"
                    className={`w-10 text-center text-[22px] leading-none transition-colors duration-500 ${
                      isTravelCardSelected ? 'text-white/88 hover:text-white' : 'text-[#40527a] hover:text-[#2a3c61]'
                    }`}
                  >
                    &#9664;
                  </button>

                  <div className="relative flex h-[170px] w-[156px] items-center justify-center p-1 md:h-[186px] md:w-[172px]">
                    <Image
                      src={activeEntry.image}
                      alt={activeEntry.imageAlt ?? activeEntry.title}
                      className="max-h-full w-auto object-contain"
                    />
                  </div>

                  <button
                    type="button"
                    onClick={(event) => {
                      event.stopPropagation();
                      cycleEntry(1);
                    }}
                    aria-label="Show next country"
                    className={`w-10 text-center text-[22px] leading-none transition-colors duration-500 ${
                      isTravelCardSelected ? 'text-white/88 hover:text-white' : 'text-[#40527a] hover:text-[#2a3c61]'
                    }`}
                  >
                    &#9654;
                  </button>
                </div>

                <div
                  className={`mt-5 flex items-center justify-center gap-1.5 transition-colors duration-500 ${
                    isTravelCardSelected ? 'text-white' : 'text-[#efc000]'
                  }`}
                >
                  {Array.from({ length: 5 }).map((_, index) => (
                    <FaStar key={`${activeEntry.title}-${index}`} className="h-[16px] w-[16px]" />
                  ))}
                </div>

                <div
                  className={`mt-4 grid grid-cols-3 gap-3 transition-colors duration-500 ${
                    isTravelCardSelected ? 'text-white' : 'text-[#262624]'
                  }`}
                >
                  <div>
                    <p
                      className={`font-[var(--font-display)] text-[10px] tracking-[0.16em] uppercase transition-colors duration-500 ${
                        isTravelCardSelected ? 'text-white/62' : 'text-[#706c60]'
                      }`}
                    >
                      DD
                    </p>
                    <p className="font-[var(--font-display)] text-[2.45rem] leading-none md:text-[2.7rem]">01</p>
                  </div>
                  <div>
                    <p
                      className={`font-[var(--font-display)] text-[10px] tracking-[0.16em] uppercase transition-colors duration-500 ${
                        isTravelCardSelected ? 'text-white/62' : 'text-[#706c60]'
                      }`}
                    >
                      MM
                    </p>
                    <p className="font-[var(--font-display)] text-[2.45rem] leading-none md:text-[2.7rem]">01</p>
                  </div>
                  <div>
                    <p
                      className={`font-[var(--font-display)] text-[10px] tracking-[0.16em] uppercase transition-colors duration-500 ${
                        isTravelCardSelected ? 'text-white/62' : 'text-[#706c60]'
                      }`}
                    >
                      YY
                    </p>
                    <p className="font-[var(--font-display)] text-[2.45rem] leading-none md:text-[2.7rem]">01</p>
                  </div>
                </div>
              </div>
            </article>
          </div>
        </div>
      </div>
    );
  }

  const events: TimelineEvent[] = modal.entries.map((entry) => ({
    name: entry.title,
    dates: entry.dateRange ?? entry.meta,
    location: entry.location,
    logo: entry.image,
    logoAlt: entry.imageAlt,
    title: entry.subtitle,
    description: entry.bullets,
  }));

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/72 px-4 py-8 backdrop-blur-sm">
      <button
        type="button"
        aria-label="Close modal"
        className="absolute inset-0"
        onClick={onClose}
      />

      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="detail-modal-title"
        className="relative z-10 flex max-h-[82vh] w-full max-w-4xl flex-col overflow-hidden rounded-[28px] border border-white/10 bg-[#0c1118]/95 shadow-[0_25px_70px_rgba(0,0,0,0.45)]"
      >
        <div className="border-b border-white/10 px-6 py-5 md:px-8">
          <div className="flex items-start justify-between gap-4">
            <div>
              <p className="font-[var(--font-display)] text-sm tracking-[0.22em] text-[var(--color-fut-yellow)] uppercase">
                Education
              </p>
              <h2 id="detail-modal-title" className="section-heading mt-2 text-3xl text-white md:text-4xl">
                {modal.title}
              </h2>
              <p className="mt-3 max-w-2xl text-sm leading-6 text-white/72">{modal.description}</p>
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

        <div className="min-h-0 flex-1 px-6 py-6 md:px-8 md:py-8">
          <TimelineList events={events} scrollable />
        </div>
      </div>
    </div>
  );
}

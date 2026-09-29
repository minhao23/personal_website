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

export function DetailModal({ modal, onClose }: DetailModalProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isTravelCardSelected, setIsTravelCardSelected] = useState(false);
  const [isTravelGalleryOpen, setIsTravelGalleryOpen] = useState(false);
  const [travelGalleryIndex, setTravelGalleryIndex] = useState(0);
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

  if (modal.kind === 'travel-showcase') {
    const entries = modal.entries;
    const activeEntry = entries[activeIndex];
    const activeGallery = activeEntry.gallery?.length
      ? activeEntry.gallery
      : [{ image: activeEntry.image, alt: activeEntry.imageAlt ?? `${activeEntry.title} flag` }];
    const activeGalleryItem = activeGallery[travelGalleryIndex] ?? activeGallery[0];

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
      setTravelGalleryIndex(0);
      galleryOpenTimeoutRef.current = window.setTimeout(() => {
        setIsTravelGalleryOpen(true);
        galleryOpenTimeoutRef.current = null;
      }, 630);
    }

    function cycleGallery(delta: number) {
      setTravelGalleryIndex((currentIndex) => (currentIndex + delta + activeGallery.length) % activeGallery.length);
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
                    <p className="mt-2 max-w-2xl text-sm leading-6 text-[#4a4a48] md:text-base">
                      {`Trip to ${activeEntry.title}. A fuller write-up can come later, but this already reads like a proper travel page instead of a small lightbox.`}
                    </p>
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
                  <div className="relative overflow-hidden rounded-[24px] bg-[#e8dfcf] shadow-[0_18px_40px_rgba(34,28,18,0.14)]">
                    <Image
                      src={activeGalleryItem.image}
                      alt={activeGalleryItem.alt ?? activeEntry.imageAlt ?? activeEntry.title}
                      className="h-[260px] w-full object-cover md:h-[420px]"
                    />

                    {activeGallery.length > 1 ? (
                      <>
                        <button
                          type="button"
                          onClick={() => cycleGallery(-1)}
                          aria-label="Show previous travel image"
                          className="absolute left-4 top-1/2 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-black/42 text-[24px] text-white transition hover:bg-black/58"
                        >
                          &#9664;
                        </button>
                        <button
                          type="button"
                          onClick={() => cycleGallery(1)}
                          aria-label="Show next travel image"
                          className="absolute right-4 top-1/2 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-black/42 text-[24px] text-white transition hover:bg-black/58"
                        >
                          &#9654;
                        </button>
                      </>
                    ) : null}
                  </div>

                  <div className="mt-4 flex items-center justify-between gap-4 text-sm text-[#6d6556]">
                    <p>{`Photo ${travelGalleryIndex + 1} of ${activeGallery.length}`}</p>
                    <p className="font-[var(--font-display)] text-[10px] tracking-[0.18em] uppercase">Country Carousel</p>
                  </div>

                  <div className="mt-8 space-y-5 text-[15px] leading-8 text-[#242829] md:text-base">
                    <p>
                      {`This is the start of a proper ${activeEntry.title} travel entry. Instead of a small pop-up card, the layout now gives each trip room for photos, notes, and a bit more story.`}
                    </p>
                    <p>
                      {`For now, the content stays intentionally simple: the carousel pulls from your local countries/carousel folder, while the copy acts as placeholder editorial text that you can replace with the real experience later.`}
                    </p>
                  </div>

                  <div className="mt-8 rounded-[20px] bg-[#ffeab0] px-5 py-4 text-[15px] leading-7 text-[#4a3c12] md:px-6">
                    {`Trip to ${activeEntry.title}: add transport notes, favourite moments, food spots, and anything that made the place memorable.`}
                  </div>

                  <h4 className="mt-10 font-[var(--font-display)] text-2xl text-[#1b2430]">
                    {`${activeEntry.title} Highlights`}
                  </h4>

                  <div className="mt-5 grid gap-4 md:grid-cols-2">
                    {activeGallery.slice(0, Math.min(activeGallery.length, 2)).map((galleryItem, index) => (
                      <button
                        key={`${activeEntry.title}-highlight-${index}`}
                        type="button"
                        onClick={() => setTravelGalleryIndex(index)}
                        className="overflow-hidden rounded-[20px] bg-[#e8dfcf] text-left shadow-[0_12px_28px_rgba(35,28,18,0.12)] transition hover:-translate-y-0.5"
                      >
                        <Image
                          src={galleryItem.image}
                          alt={galleryItem.alt ?? `${activeEntry.title} travel highlight ${index + 1}`}
                          className="h-[180px] w-full object-cover"
                        />
                        <div className="px-4 py-3">
                          <p className="font-[var(--font-display)] text-[10px] tracking-[0.18em] text-[#8b6c1f] uppercase">
                            Highlight
                          </p>
                          <p className="mt-2 text-sm leading-6 text-[#2a2e30]">{`Trip to ${activeEntry.title} photo ${index + 1}.`}</p>
                        </div>
                      </button>
                    ))}
                  </div>

                  <div className="mt-8 space-y-5 text-[15px] leading-8 text-[#242829] md:text-base">
                    <p>
                      {`The final version can be much richer: flights, itineraries, little logistics, and the kind of details that make a travel page feel useful instead of decorative.`}
                    </p>
                    <p>
                      {`Once you are ready, each country can have its own real long-form write-up with custom captions and a fuller gallery sequence.`}
                    </p>
                  </div>
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

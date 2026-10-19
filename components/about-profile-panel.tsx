'use client';

import Image from 'next/image';
import { useCallback, useEffect, useRef, useState } from 'react';

import type { SectionContent } from './portfolio-types';

type AboutProfilePanelProps = {
  content: SectionContent;
};

export function AboutProfilePanel({ content }: AboutProfilePanelProps) {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [showScrollCue, setShowScrollCue] = useState(false);

  const updateScrollCue = useCallback(() => {
    const scrollContainer = scrollContainerRef.current;

    if (!scrollContainer) {
      return;
    }

    const maximumScrollTop = scrollContainer.scrollHeight - scrollContainer.clientHeight;
    const canScroll = maximumScrollTop > 4;
    const isAtTop = scrollContainer.scrollTop <= 2;
    const isAtBottom = scrollContainer.scrollTop >= maximumScrollTop - 2;

    setShowScrollCue(canScroll && isAtTop && !isAtBottom);
  }, []);

  useEffect(() => {
    const scrollContainer = scrollContainerRef.current;

    if (!scrollContainer) {
      return;
    }

    updateScrollCue();

    const resizeObserver = new ResizeObserver(updateScrollCue);
    resizeObserver.observe(scrollContainer);

    return () => resizeObserver.disconnect();
  }, [updateScrollCue]);

  if (!content.heroImage) {
    return null;
  }

  return (
    <article className="fut-tile flex min-h-0 flex-col overflow-hidden rounded-[30px] bg-black/28 p-6 backdrop-blur-sm md:p-8">
      <div className="shrink-0 border-b border-white/8 pb-4">
        <p className="mb-3 font-[var(--font-display)] text-xs tracking-[0.3em] text-[var(--color-fut-yellow)] uppercase">
          {content.eyebrow}
        </p>
        <h1 className="section-heading max-w-none text-[2.35rem] text-white md:text-[3.05rem] md:leading-[0.94]">
          {content.title}
        </h1>
      </div>

      <div
        ref={scrollContainerRef}
        onScroll={updateScrollCue}
        className="home-profile-scroll mt-5 min-h-0 flex-1 overflow-y-auto pr-2 pb-14"
      >
        <div className="grid items-start gap-6 xl:grid-cols-[minmax(180px,0.78fr)_minmax(0,1.22fr)]">
          <div className="mx-auto w-full max-w-[320px] xl:sticky xl:top-0">
            <div className="overflow-hidden rounded-[24px] border border-white/12 bg-white/6 shadow-[0_22px_42px_rgba(0,0,0,0.25)]">
              <Image
                src={content.heroImage}
                alt={content.heroImageAlt ?? content.title}
                className="aspect-[3/4] w-full object-cover"
              />
            </div>
            {content.heroImageCaption ? (
              <p className="mt-3 font-[var(--font-display)] text-[11px] tracking-[0.22em] text-[var(--color-fut-yellow)] uppercase">
                {content.heroImageCaption}
              </p>
            ) : null}
          </div>

          <div className="max-w-[62ch] space-y-5 xl:pt-1">
            {(content.heroParagraphs?.length ? content.heroParagraphs : [content.description]).map(
              (paragraph, index) => (
                <p
                  key={paragraph}
                  className={
                    index === 0
                      ? 'text-base leading-[1.65] text-white/88 md:text-[1.06rem] md:leading-[1.68]'
                      : 'text-[0.95rem] leading-[1.7] text-white/68 md:text-base'
                  }
                >
                  {paragraph}
                </p>
              ),
            )}
          </div>
        </div>
      </div>

      <div
        aria-hidden="true"
        className={`pointer-events-none absolute right-6 bottom-5 z-20 flex items-center gap-3 rounded-full border border-[var(--color-fut-yellow)]/22 bg-[#10151d]/92 px-4 py-2 shadow-[0_10px_28px_rgba(0,0,0,0.35)] backdrop-blur-md transition-opacity duration-300 ${
          showScrollCue ? 'opacity-100' : 'opacity-0'
        }`}
      >
        <span className="font-[var(--font-display)] text-[10px] tracking-[0.22em] text-[var(--color-fut-yellow)] uppercase">
          Scroll
        </span>
        <span className="home-scroll-arrow relative block h-5 w-3">
          <span className="absolute top-0 left-1/2 h-2 w-2 -translate-x-1/2 rotate-45 border-r border-b border-[var(--color-fut-yellow)]" />
          <span className="absolute top-2 left-1/2 h-2 w-2 -translate-x-1/2 rotate-45 border-r border-b border-[var(--color-fut-yellow)]/55" />
        </span>
      </div>
    </article>
  );
}

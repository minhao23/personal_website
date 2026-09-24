'use client';

import Image from 'next/image';
import { useCallback, useEffect, useRef, useState, type KeyboardEvent } from 'react';

import type { TabCard } from './portfolio-data';

type ContentCardProps = TabCard & {
  onClick?: () => void;
};

function wrapIndex(currentIndex: number, itemCount: number, delta: number) {
  return (currentIndex + delta + itemCount) % itemCount;
}

export function ContentCard({
  title,
  body,
  label,
  meta,
  variant,
  image,
  imageAlt,
  actionLabel,
  href,
  modal,
  onClick,
}: ContentCardProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [transitionStage, setTransitionStage] = useState<'idle' | 'exiting' | 'entering'>('idle');
  const timeoutIdsRef = useRef<number[]>([]);
  const carouselEntries = variant === 'rotator' ? modal?.entries ?? [] : [];
  const activeEntry = carouselEntries[activeIndex];
  const isInteractive = Boolean(onClick);
  const isLinked = Boolean(href);
  const useRotator = carouselEntries.length > 0;

  function handleKeyDown(event: KeyboardEvent<HTMLElement>) {
    if (!onClick || event.target !== event.currentTarget) {
      return;
    }

    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      onClick();
    }
  }

  const clearQueuedTimeouts = useCallback(() => {
    timeoutIdsRef.current.forEach((timeoutId) => window.clearTimeout(timeoutId));
    timeoutIdsRef.current = [];
  }, []);

  const queueTimeout = useCallback((callback: () => void, delayMs: number) => {
    const timeoutId = window.setTimeout(() => {
      callback();
      timeoutIdsRef.current = timeoutIdsRef.current.filter((currentId) => currentId !== timeoutId);
    }, delayMs);

    timeoutIdsRef.current.push(timeoutId);
  }, []);

  const rotateToNextEntry = useCallback(() => {
    if (!useRotator || carouselEntries.length < 2) {
      return;
    }

    clearQueuedTimeouts();
    setTransitionStage('exiting');

    queueTimeout(() => {
      setActiveIndex((currentIndex) => wrapIndex(currentIndex, carouselEntries.length, 1));
      setTransitionStage('entering');
    }, 240);

    queueTimeout(() => {
      setTransitionStage('idle');
    }, 620);
  }, [carouselEntries.length, clearQueuedTimeouts, queueTimeout, useRotator]);

  useEffect(() => {
    if (!useRotator || carouselEntries.length < 2) {
      return;
    }

    const intervalId = window.setInterval(() => {
      rotateToNextEntry();
    }, 5000);

    return () => {
      window.clearInterval(intervalId);
      clearQueuedTimeouts();
    };
  }, [carouselEntries.length, clearQueuedTimeouts, rotateToNextEntry, useRotator]);

  const content = (
    <>
      <div className="mb-4 flex items-start justify-between gap-3">
        {label ? (
          <div className="flex items-center gap-3">
            <p className="font-[var(--font-display)] text-[11px] tracking-[0.22em] text-[var(--color-fut-yellow)] uppercase">
              {label}
            </p>
            {useRotator ? (
              <p className="font-[var(--font-display)] text-[10px] tracking-[0.22em] text-white/45 uppercase">
                {String(activeIndex + 1).padStart(2, '0')} / {String(carouselEntries.length).padStart(2, '0')}
              </p>
            ) : null}
          </div>
        ) : (
          <span />
        )}
        {!useRotator && image ? <Image src={image} alt={imageAlt ?? title} className="h-10 w-auto object-contain" /> : null}
      </div>

      {useRotator && activeEntry ? (
        <div className="flex h-full min-h-0 flex-col">
          <div className="mb-3">
            <h3 className="section-heading text-[1.55rem] text-white transition-colors duration-150 group-hover:text-[var(--color-fut-yellow)]">
              {title}
            </h3>
            {meta ? <p className="mt-2 text-xs tracking-[0.18em] text-white/55 uppercase">{meta}</p> : null}
          </div>

          <div
            className={`relative flex min-h-0 flex-1 flex-col overflow-hidden rounded-[22px] border border-white/10 bg-[linear-gradient(140deg,rgba(245,208,0,0.14),rgba(18,25,35,0.96)_45%,rgba(12,17,24,0.96)_100%)] p-4 transition-all duration-300 ease-out ${
              transitionStage === 'exiting'
                ? 'translate-x-6 scale-[0.98] opacity-0'
                : transitionStage === 'entering'
                  ? 'translate-x-0 scale-100 opacity-100'
                  : 'translate-x-0 scale-100 opacity-100'
            }`}
          >
            <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-[linear-gradient(270deg,rgba(245,208,0,0.08),transparent)]" />
            <div className="relative flex items-start justify-between gap-4">
              <div className="min-w-0">
                <p className="font-[var(--font-display)] text-[10px] tracking-[0.22em] text-[var(--color-fut-yellow)] uppercase">
                  Active education card
                </p>
                <h4 className="mt-2 font-[var(--font-display)] text-[1.45rem] leading-[0.95] text-white">
                  {activeEntry.title}
                </h4>
                <p className="mt-2 text-[11px] tracking-[0.16em] text-white/55 uppercase">
                  {activeEntry.dateRange ?? activeEntry.meta}
                  {activeEntry.location ? ` · ${activeEntry.location}` : ''}
                </p>
              </div>
              {activeEntry.image ? (
                <div className="shrink-0 rounded-[16px] border border-white/10 bg-black/20 px-3 py-2">
                  <Image
                    src={activeEntry.image}
                    alt={activeEntry.imageAlt ?? activeEntry.title}
                    className="h-10 w-auto object-contain"
                  />
                </div>
              ) : null}
            </div>

            <div className="relative mt-4 flex-1">
              <p className="text-sm leading-6 text-white/82">{activeEntry.subtitle}</p>
            </div>

            <div className="relative mt-5 flex items-center justify-between gap-3">
              <div className="flex items-center gap-2">
                {carouselEntries.map((entry, index) => (
                  <span
                    key={entry.title}
                    aria-hidden="true"
                    className={`h-2.5 rounded-full transition-all duration-150 ${
                      index === activeIndex ? 'w-6 bg-[var(--color-fut-yellow)]' : 'w-2.5 bg-white/30'
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div>
          <h3 className="section-heading mb-3 text-[1.55rem] text-white transition-colors duration-150 group-hover:text-[var(--color-fut-yellow)]">
            {title}
          </h3>
          {meta ? <p className="mb-3 text-xs tracking-[0.18em] text-white/55 uppercase">{meta}</p> : null}
          <p className="text-sm leading-6 text-white/74">{body}</p>
        </div>
      )}

      {actionLabel && !useRotator ? (
        <p className="mt-4 font-[var(--font-display)] text-lg tracking-[0.03em] text-[var(--color-fut-yellow)] uppercase">
          {actionLabel}
        </p>
      ) : null}
    </>
  );

  if (isLinked && href) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noreferrer"
        className="fut-tile group flex h-full min-h-0 flex-col rounded-[24px] p-5 text-left cursor-pointer transition-transform duration-150 hover:-translate-y-0.5 hover:bg-white/6"
      >
        {content}
      </a>
    );
  }

  if (isInteractive) {
    return (
      <div
        role="button"
        tabIndex={0}
        onClick={onClick}
        onKeyDown={handleKeyDown}
        className="fut-tile group flex h-full min-h-0 flex-col rounded-[24px] p-5 text-left cursor-pointer transition-transform duration-150 hover:-translate-y-0.5 hover:bg-white/6"
      >
        {content}
      </div>
    );
  }

  return <article className="fut-tile group flex h-full min-h-0 flex-col rounded-[24px] p-5 text-left">{content}</article>;
}

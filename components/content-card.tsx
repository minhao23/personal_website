'use client';

import Image from 'next/image';
import { useCallback, useEffect, useRef, useState } from 'react';
import { SiLeetcode } from 'react-icons/si';

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
  labelHover,
  meta,
  muted,
  stack,
  variant,
  image,
  imageAlt,
  actionLabel,
  href,
  decorativeIcon,
  rotatorBadge,
  rotatorEntries,
  onClick,
}: ContentCardProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [transitionStage, setTransitionStage] = useState<'idle' | 'exiting' | 'entering'>('idle');
  const timeoutIdsRef = useRef<number[]>([]);
  const carouselEntries = variant === 'rotator' ? rotatorEntries ?? [] : [];
  const activeEntry = carouselEntries[activeIndex];
  const isInteractive = Boolean(onClick);
  const isLinked = Boolean(href);
  const useRotator = carouselEntries.length > 0;
  const showLeetCodeArtwork = decorativeIcon === 'leetcode';
  const showProfileArtwork = decorativeIcon === 'profile' && image;
  const containerClassName = useRotator
    ? 'group flex h-full min-h-0 flex-col text-left'
    : `fut-tile group flex h-full min-h-0 flex-col rounded-[24px] p-5 text-left ${muted ? 'opacity-[0.72]' : ''}`;

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
      {showLeetCodeArtwork ? (
        <>
          <div className="pointer-events-none absolute bottom-[-24px] right-[-34px] z-0 h-[170px] w-[170px] md:bottom-[-34px] md:right-[-48px] md:h-[220px] md:w-[220px]">
            <div className="absolute inset-0 rounded-full bg-[radial-gradient(circle,rgba(245,208,0,0.22),transparent_62%)] blur-2xl" />
            <SiLeetcode className="absolute inset-0 h-full w-full text-[#f5d000] opacity-[0.22] drop-shadow-[0_0_26px_rgba(245,208,0,0.18)]" />
          </div>
          <div className="pointer-events-none absolute bottom-[34px] right-[18px] z-0 h-14 w-14 rounded-full bg-[radial-gradient(circle,rgba(255,255,255,0.16),transparent_65%)] blur-xl md:bottom-[40px] md:right-[28px] md:h-16 md:w-16" />
        </>
      ) : null}

      {showProfileArtwork ? (
        <>
          <div className="pointer-events-none absolute bottom-[-12px] right-[-8px] z-0 h-[148px] w-[118px] overflow-hidden rounded-[24px] border border-white/12 bg-white/6 shadow-[0_16px_36px_rgba(0,0,0,0.22)] md:bottom-[-16px] md:right-[-14px] md:h-[190px] md:w-[148px]">
            <Image
              src={image}
              alt={imageAlt ?? title}
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent_35%,rgba(8,12,18,0.18)_100%)]" />
          </div>
          <div className="pointer-events-none absolute right-[28px] top-[28px] z-0 h-16 w-16 rounded-full bg-[radial-gradient(circle,rgba(255,255,255,0.12),transparent_68%)] blur-xl md:right-[40px] md:top-[32px]" />
        </>
      ) : null}

      {useRotator && activeEntry ? (
        <div className="relative z-10 flex h-full min-h-0 flex-col">
          <div
            className={`relative flex min-h-0 flex-1 flex-col overflow-hidden rounded-[24px] border border-white/10 bg-[linear-gradient(140deg,rgba(245,208,0,0.14),rgba(18,25,35,0.96)_45%,rgba(12,17,24,0.96)_100%)] p-4 transition-all duration-300 ease-out group-hover:border-[var(--color-fut-yellow)] ${
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
                {rotatorBadge ? (
                  <p className="font-[var(--font-display)] text-[10px] tracking-[0.22em] text-[var(--color-fut-yellow)] uppercase">
                    {rotatorBadge}
                  </p>
                ) : null}
                <h4 className="mt-2 font-[var(--font-display)] text-[1.45rem] leading-[0.95] text-white">
                  {activeEntry.title}
                </h4>
                {activeEntry.dateRange || activeEntry.meta || activeEntry.location ? (
                  <p className="mt-2 text-[11px] tracking-[0.16em] text-white/55 uppercase">
                    {activeEntry.dateRange ?? activeEntry.meta}
                    {activeEntry.location ? ` · ${activeEntry.location}` : ''}
                  </p>
                ) : null}
              </div>
              {activeEntry.image ? (
                <div className="shrink-0">
                  <Image
                    src={activeEntry.image}
                    alt={activeEntry.imageAlt ?? activeEntry.title}
                    className="h-10 w-auto object-contain"
                  />
                </div>
              ) : null}
            </div>

            <div className="relative mt-4 flex-1">
              {activeEntry.subtitle ? <p className="text-sm leading-6 text-white/82">{activeEntry.subtitle}</p> : null}
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
        <div className={`relative z-10 ${showLeetCodeArtwork || showProfileArtwork ? 'max-w-[62%] md:max-w-[55%]' : ''}`}>
          <div className="mb-4 flex items-start justify-between gap-3">
            {label ? (
              <p className="font-[var(--font-display)] text-[11px] tracking-[0.22em] text-[var(--color-fut-yellow)] uppercase">
                <span className={labelHover ? 'group-hover:hidden' : ''}>{label}</span>
                {labelHover ? <span className="hidden group-hover:inline">{labelHover}</span> : null}
              </p>
            ) : (
              <span />
            )}
            {image && !showProfileArtwork ? <Image src={image} alt={imageAlt ?? title} className="h-10 w-auto object-contain" /> : null}
          </div>
          <h3 className="section-heading mb-3 text-[1.38rem] text-white transition-colors duration-150 group-hover:text-[var(--color-fut-yellow)]">
            {title}
          </h3>
          {meta ? (
            <p className="mb-3 text-[11px] tracking-[0.18em] text-white/55 uppercase">
              {meta}
            </p>
          ) : null}
          {body ? (
            <div className="mb-4">
              <p className={`${showLeetCodeArtwork || showProfileArtwork ? 'text-white/78' : 'text-white/74'} text-sm leading-6`}>
                {body}
              </p>
            </div>
          ) : null}
          {stack && stack.length > 0 ? (
            <div>
              <p className="mb-2 font-[var(--font-display)] text-[10px] tracking-[0.2em] text-[var(--color-fut-yellow)] uppercase">
                Tech stack
              </p>
              <div className="grid grid-cols-4 gap-2">
                {stack.map((stackItem) => (
                  <div key={stackItem} className="rounded-[12px] border border-white/10 bg-black/22 px-2 py-1.5 text-center">
                    <p className="font-[var(--font-display)] text-[9px] tracking-[0.12em] text-[var(--color-fut-yellow)] uppercase">
                      {stackItem}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          ) : null}
        </div>
      )}

      {actionLabel && !useRotator ? (
        <p className="relative z-10 mt-4 font-[var(--font-display)] text-lg tracking-[0.03em] text-[var(--color-fut-yellow)] uppercase">
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
        className={`${containerClassName} cursor-pointer transition-transform duration-150 hover:-translate-y-0.5 ${useRotator ? '' : 'hover:bg-white/6'}`}
      >
        {content}
      </a>
    );
  }

  if (isInteractive) {
    return (
      <button
        type="button"
        onClick={onClick}
        className={`${containerClassName} w-full cursor-pointer appearance-none border-0 bg-transparent p-0 transition-transform duration-150 hover:-translate-y-0.5 ${useRotator ? '' : 'hover:bg-white/6'}`}
      >
        {content}
      </button>
    );
  }

  return <article className={containerClassName}>{content}</article>;
}

import type { StaticImageData } from 'next/image';

export type SectionSlug = 'home' | 'internships' | 'projects' | 'hobbies' | 'about' | 'contact';

export type RotatorEntry = {
  title: string;
  subtitle?: string;
  meta?: string;
  location?: string;
  dateRange?: string;
  image?: StaticImageData;
  imageAlt?: string;
};

export type TimelineModalEntry = {
  title: string;
  subtitle: string;
  meta: string;
  location?: string;
  dateRange?: string;
  bullets: string[];
  image?: StaticImageData;
  imageAlt?: string;
};

export type TimelineModal = {
  kind?: 'timeline';
  title: string;
  description: string;
  entries: TimelineModalEntry[];
};

export type TravelGalleryItem = {
  image: StaticImageData;
  alt?: string;
  caption?: string;
};

export type TravelCountryEntry = {
  slug: string;
  title: string;
  image: StaticImageData;
  date: Date;
  imageAlt?: string;
  gallery?: readonly TravelGalleryItem[];
};

export type TravelShowcaseModal = {
  kind: 'travel-showcase';
  title: string;
  description: string;
  entries: TravelCountryEntry[];
};

export type TabCard = {
  title: string;
  body: string;
  label?: string;
  labelHover?: string;
  meta?: string;
  muted?: boolean;
  stack?: string[];
  variant?: 'default' | 'rotator';
  href?: string;
  decorativeIcon?: 'leetcode' | 'profile';
  image?: StaticImageData;
  imageAlt?: string;
  actionLabel?: string;
  rotatorBadge?: string;
  rotatorEntries?: RotatorEntry[];
  modal?: TimelineModal | TravelShowcaseModal;
};

export type ExperienceEntry = {
  company: string;
  role: string;
  location: string;
  dateRange: string;
  duration?: string;
  stack: string[];
  bullets: string[];
  image?: StaticImageData;
  imageAlt?: string;
  logoClassName?: string;
};

export type Certification = {
  title: string;
  issuer: string;
  issued: string;
};

export type SectionContent = {
  eyebrow: string;
  title: string;
  description: string;
  stats: string[];
  certifications?: Certification[];
  heroParagraphs?: string[];
  heroImageCaption?: string;
  cards: TabCard[];
  experienceTimeline?: ExperienceEntry[];
  heroImage?: StaticImageData;
  heroImageAlt?: string;
};

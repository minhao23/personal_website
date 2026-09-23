import type { StaticImageData } from 'next/image';

import bytedanceLogo from '../app/assets/companies/bytedance-logo.webp';
import govtechLogo from '../app/assets/companies/govtech.webp';
import nusLogo from '../app/assets/universities/kisspng-national-university-of-singapore-west-bengal-natio-national-university-of-singapore-ssl-solutions-5b6615cd1c8121.6941376315334169091168.jpg';

export const NAV_ITEMS = [
  { slug: 'home', label: 'HOME', width: '1.05fr' },
  { slug: 'internships', label: 'INTERNSHIPS', width: '1.34fr' },
  { slug: 'projects', label: 'PROJECTS', width: '1.12fr' },
  { slug: 'hobbies', label: 'HOBBIES', width: '1.08fr' },
  { slug: 'about', label: 'ABOUT', width: '0.95fr' },
] as const;

export type SectionSlug = 'home' | 'internships' | 'projects' | 'hobbies' | 'about' | 'contact';

export type TabCard = {
  title: string;
  body: string;
  label?: string;
  meta?: string;
  image?: StaticImageData;
  imageAlt?: string;
  actionLabel?: string;
  modal?: {
    title: string;
    description: string;
    entries: {
      title: string;
      subtitle: string;
      meta: string;
      bullets: string[];
    }[];
  };
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
};

export type SectionContent = {
  eyebrow: string;
  title: string;
  description: string;
  stats: string[];
  cards: TabCard[];
  experienceTimeline?: ExperienceEntry[];
};

export const PORTFOLIO_CONTENT: Record<SectionSlug, SectionContent> = {
  home: {
    eyebrow: 'Home',
    title: 'A sharper FIFA-style portfolio screen.',
    description:
      'The layout now focuses on one clean hero, one simple navbar, and compact panels that stay inside a single screen.',
    stats: ['NUS Double Degree', '4.63 CS GPA', '7 Distinctions'],
    cards: [
      {
        label: 'Focus',
        title: 'Visual identity first',
        body: 'The stadium background does the heavy lifting, so the interface can stay cleaner and less noisy.',
      },
      {
        label: 'Education',
        title: 'Educational history',
        meta: 'Click to view full details',
        body: 'Computer Science and Business Administration at NUS, with Eunoia Junior College before that.',
        image: nusLogo,
        imageAlt: 'National University of Singapore logo',
        actionLabel: 'Open education history',
        modal: {
          title: 'Educational history',
          description: 'A quick look at the academic background captured in the resume.',
          entries: [
            {
              title: 'National University of Singapore',
              subtitle: 'BSc in Computer Science and BBA in Business Administration',
              meta: 'Singapore · Aug 2023 - May 2027',
              bullets: [
                'Double Degree Programme in Computer Science and Business Administration.',
                'GPA: 4.63 in Computer Science and 4.37 in Business Administration.',
              ],
            },
            {
              title: 'Eunoia Junior College',
              subtitle: 'GCE A-Level',
              meta: 'Singapore · Jan 2020 - Dec 2021',
              bullets: ['Obtained 7 distinctions.'],
            },
          ],
        },
      },
      {
        label: 'Result',
        title: 'Single-screen layout',
        body: 'The page stays compact and readable, so each section feels more like a FUT panel than a long scrolling site.',
      },
    ],
  },
  internships: {
    eyebrow: 'Internships',
    title: 'Engineering experience across infrastructure, product systems, and operations.',
    description:
      'Your resume shows a mix of software engineering, network operations, automation, testing, and developer tooling across ByteDance, GovTech, and Contfinity.',
    stats: ['3 Internships', '87% Test Coverage', '61% Faster Queries'],
    cards: [],
    experienceTimeline: [
      {
        company: 'ByteDance',
        role: 'Network Operation Engineer Intern',
        location: 'Singapore',
        dateRange: 'Aug 2026 - Present',
        duration: 'Current',
        stack: ['Python', 'Prometheus', 'Grafana', 'Bash'],
        bullets: [
          'Built a network monitoring and alerting pipeline to improve observability and reduce downtime.',
          'Automated network configuration management with Bash, cutting manual deployment effort by 45%.',
          'Analyzed and optimized network traffic performance, improving throughput by 30%.',
        ],
        image: bytedanceLogo,
        imageAlt: 'ByteDance logo',
      },
      {
        company: 'Government Technology Agency',
        role: 'Software Engineer Intern',
        location: 'Singapore',
        dateRange: 'Jan 2026 - Present',
        duration: '8 months',
        stack: ['Next.js', 'FastAPI', 'AWS', 'PostgreSQL', 'Docker', 'Playwright'],
        bullets: [
          'Developed internal workflow systems used by more than 2,000 staff with Next.js, FastAPI, AWS, and PostgreSQL.',
          'Implemented Docker-based development environments and GitLab CI pipelines to improve deployment and testing workflows.',
          'Built more than 30 end-to-end, unit, and integration tests to reach 87% coverage and integrated OpenAI-powered ReAct agents that reduced average query handling time by 61%.',
        ],
        image: govtechLogo,
        imageAlt: 'Government Technology Agency logo',
      },
      {
        company: 'Contfinity',
        role: 'Network Engineer Intern',
        location: 'Singapore',
        dateRange: 'May 2025 - Aug 2025',
        duration: '4 months',
        stack: ['Linux', 'Bash', 'Syslog', 'Network Documentation'],
        bullets: [
          'Implemented HTTPS-enabled syslog forwarding pipelines using Linux and Bash for centralized logging systems.',
          'Produced technical network documentation and infrastructure diagrams for large-scale government clients.',
        ],
      },
    ],
  },
  projects: {
    eyebrow: 'Projects',
    title: 'Show the strongest work cleanly.',
    description:
      'This tab keeps project presentation short and sharp so each idea feels intentional rather than overcrowded.',
    stats: ['Builds', 'Case Studies', 'Experiments'],
    cards: [
      {
        label: 'Project',
        title: 'Portfolio rebuild',
        body: 'A cleaner Next.js portfolio built around a strong visual reference and simpler structure.',
      },
      {
        label: 'Project',
        title: 'UI systems lab',
        body: 'A collection of interface experiments, reusable components, and layout studies.',
      },
      {
        label: 'Project',
        title: 'Case study archive',
        body: 'A place to document process, decisions, and what each project taught you.',
      },
    ],
  },
  hobbies: {
    eyebrow: 'Hobbies',
    title: 'A bit of personality outside the work.',
    description:
      'This tab gives the site some character without turning it into a long personal essay.',
    stats: ['Football', 'References', 'Making'],
    cards: [
      {
        label: 'Hobby',
        title: 'Football',
        body: 'The visual language here comes from football menus, stadium presentation, and FIFA-style hierarchy.',
      },
      {
        label: 'Hobby',
        title: 'Design references',
        body: 'Collecting references and breaking down layouts helps turn vague ideas into stronger interfaces.',
      },
      {
        label: 'Hobby',
        title: 'Making things',
        body: 'Small experiments and side builds keep both taste and technical instincts sharp.',
      },
    ],
  },
  about: {
    eyebrow: 'About',
    title: 'Short, direct, and easier to scan.',
    description:
      'The about area should explain your intent quickly, without turning into a long block of text.',
    stats: ['Clearer', 'Stronger', 'More Personal'],
    cards: [
      {
        label: 'Why',
        title: 'Built with intention',
        body: 'The goal is to feel like a real personal brand page, not a starter template with random cards.',
      },
      {
        label: 'How',
        title: 'Visual hierarchy first',
        body: 'The page keeps the palette, typography, and spacing consistent so the stadium reference can lead.',
      },
      {
        label: 'Next',
        title: 'Real content later',
        body: 'Your real bio, internship details, and project links can replace the placeholder copy next.',
      },
    ],
  },
  contact: {
    eyebrow: 'Contact',
    title: 'A cleaner final screen.',
    description:
      'This tab should make it obvious how to reach you, without a bulky form or extra filler.',
    stats: ['Email', 'LinkedIn', 'GitHub'],
    cards: [
      {
        label: 'Channel',
        title: 'Email',
        body: 'Add your main email address here for recruiters, teams, and collaborators.',
      },
      {
        label: 'Channel',
        title: 'LinkedIn',
        body: 'Use this spot for the profile you want people to visit first.',
      },
      {
        label: 'Channel',
        title: 'GitHub',
        body: 'Link the code or profile that best represents the kind of work you want to be known for.',
      },
    ],
  },
};

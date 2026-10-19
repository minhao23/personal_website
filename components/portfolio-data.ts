import profilePic from '../app/assets/profile_pic.jpg';
import { EDUCATION_MODAL, EDUCATION_ROTATOR_ENTRIES, PRIMARY_EDUCATION_ENTRY } from './education-data';
import { CERTIFICATIONS, EXPERIENCE_TIMELINE } from './internships-data';
import type { SectionContent, SectionSlug } from './portfolio-types';
import { TRAVEL_COUNTRIES } from './travel-data';

export type { ExperienceEntry, SectionContent, SectionSlug, TabCard } from './portfolio-types';

export const NAV_ITEMS = [
  { slug: 'home', width: '1.05fr' },
  { slug: 'internships', width: '1.34fr' },
  { slug: 'projects', width: '1.12fr' },
  { slug: 'about', width: '0.95fr' },
] as const;

export const PORTFOLIO_CONTENT: Record<SectionSlug, SectionContent> = {
  home: {
    eyebrow: '',
    title: 'Ultimate Team',
    description:
      '',
    stats: [],
    cards: [
      {
        title: 'Travels',
        variant: 'rotator',
        body: 'A rotating snapshot of a few places for now, with fuller stories to come later.',
        rotatorBadge: 'Travels',
        rotatorEntries: [...TRAVEL_COUNTRIES],
        modal: {
          kind: 'travel-showcase',
          title: 'Travels',
          description: 'A FIFA-style country carousel for a few places so far. Use the arrows to cycle through them.',
          entries: [...TRAVEL_COUNTRIES],
        },
      },
      {
        title: 'Educational history',
        variant: 'rotator',
        body: 'Computer Science and Business Administration at NUS, with an exchange term at UNC Chapel Hill and Eunoia Junior College before that.',
        rotatorBadge: 'Education history',
        image: PRIMARY_EDUCATION_ENTRY.image,
        imageAlt: PRIMARY_EDUCATION_ENTRY.imageAlt,
        rotatorEntries: EDUCATION_ROTATOR_ENTRIES,
        actionLabel: 'Open education history',
        modal: EDUCATION_MODAL,
      },
      {
        title: 'Practice arena',
        body: 'The grind is free.',
        href: 'https://leetcode.com/u/Minhao23/',
        decorativeIcon: 'leetcode',
      },
    ],
  },
  internships: {
    eyebrow: 'Internships',
    title: 'Shipping across infra, product, and ops.',
    description:
      'Work across ByteDance, GovTech, and Contfinity spans internal platforms, network operations, automation, testing, and developer tooling with clear operational impact.',
    stats: [],
    certifications: CERTIFICATIONS,
    cards: [],
    experienceTimeline: EXPERIENCE_TIMELINE,
  },
  projects: {
    eyebrow: 'Projects',
    title: 'Show the strongest work cleanly.',
    description:
      'This tab keeps project presentation short and sharp so each idea feels intentional rather than overcrowded.',
    stats: ['Builds', 'Case Studies', 'Experiments'],
    cards: [
      {
        title: 'Ikizen',
        body: 'A productivity-focused web app built around task flows, authentication, and a cleaner day-to-day planning experience.',
        stack: ['TypeScript', 'React', 'CSS', 'Supabase (SQL)', 'Telegram Bot'],
        href: 'https://github.com/minhao23/busy-bee',
      },
      {
        title: 'Passport photo maker',
        body: 'A computer vision pipeline that turns raw portraits into passport-ready images with automatic background removal and formatting.',
        stack: ['Python', 'YOLOv8', 'rembg', 'OpenCV'],
        href: 'https://github.com/minhao23/passport-photo',
      },
      {
        title: 'Gambling',
        body: 'My first ever project! A react web application that teaches you how to play Poker.',
        stack: ['JavaScript', 'React', 'CSS', 'WebSockets', 'Firebase (NoSQL)'],
        href: 'https://github.com/minhao23/gamebling-orbital-24',
      },
      {
        title: 'World Cup picks',
        body: 'A full-stack picks platform for tournament predictions, scoring logic, and a shared World Cup bracket experience. Website deactivated as the world cup has ended.',
        stack: ['TypeScript','Next.js', 'Python', 'FastAPI'],
        href: 'https://github.com/tyhclint/worldcupsiu',
      },
      {
        title: 'Address Book',
        body: 'A desktop planning tool for real estate sales workflows, focused on structured contact management and follow-up reminders.',
        stack: ['Java', 'Gradle', 'JavaFX'],
        href: 'https://github.com/AY2425S1-CS2103-F09-2/tp',
      },
      {
        title: 'Travel planner',
        body: 'A MCP server that helps to orchestrate travel plans and find flights.',
        meta: 'Coming soon',
        muted: true,
        stack: ['chromaDB', 'Next.js', 'FastAPI', 'Docker', 'FastMCP'],
        href: 'https://github.com/minhao23/travel-planner',
      },
      {
        title: 'Coming soon...',
        body: 'More case studies and polished writeups will land here once they are ready to be shown properly.',
        muted: true,
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
    title: 'Welcome to my page!',
    description:
      'I am Minhao, a computer science and business student at NUS who likes building things that feel sharp, useful, and well considered.',
    stats: [],
    heroParagraphs: [
      'What draws me most to software is the mix of systems thinking and taste. I enjoy the challenge of turning something complex into an experience that feels obvious, calm, and intentional once it is in front of the user.',
      'So far, that has taken me from software engineering work at GovTech to data engineering work in ByteDance network implementation, where I have worked on problems that sit closer to real users, real operations, and real constraints than classroom projects usually do.',
      'Outside of school and internships, I spend most of my time on the tennis court, the football pitch, or in Muay Thai training. I also like collecting references and turning them into interfaces, which is probably why this site ended up looking like a FIFA screen in the first place.',
    ],
    heroImage: profilePic,
    heroImageAlt: 'Profile photo of He Minhao',
    heroImageCaption: 'Me in Cebu, 2025',
    cards: [
      {
        label: 'Why',
        labelHover: 'View highlights',
        title: 'My favourite game',
        body:
          'If this page looks familiar to you (hopefully it does), it is because it was designed after ' +
          "my favorite game, FIFA 17. It's a game I've spent countless hours on, " +
          'and what better way to bring my website to life, than through an interface that defined much of my childhood.',
      },
      {
        title: 'Hobbies',
        body: 'Outside work, the main through-line is football culture, collecting strong interface references, and building small experiments that sharpen both taste and technical instincts.',
      },
      {
        label: 'Outside work',
        title: 'Off the clock',
        body: 'Away from the screen, most of my time goes into tennis, football, Muay Thai, and the kind of references that quietly shape how I build things.',
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

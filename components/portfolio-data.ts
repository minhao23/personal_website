export const NAV_ITEMS = [
  { slug: 'home', label: 'HOME', width: '1.05fr' },
  { slug: 'internships', label: 'INTERNSHIPS', width: '1.34fr' },
  { slug: 'projects', label: 'PROJECTS', width: '1.12fr' },
  { slug: 'hobbies', label: 'HOBBIES', width: '1.08fr' },
  { slug: 'about', label: 'ABOUT', width: '0.95fr' },
  { slug: 'contact', label: 'CONTACT', width: '1.06fr' },
] as const;

export type SectionSlug = (typeof NAV_ITEMS)[number]['slug'];

export type TabCard = {
  title: string;
  body: string;
  label?: string;
};

export type SectionContent = {
  eyebrow: string;
  title: string;
  description: string;
  stats: string[];
  cards: TabCard[];
};

export const PORTFOLIO_CONTENT: Record<SectionSlug, SectionContent> = {
  home: {
    eyebrow: 'Home',
    title: 'A sharper FIFA-style portfolio screen.',
    description:
      'The layout now focuses on one clean hero, one simple navbar, and compact panels that stay inside a single screen.',
    stats: ['FIFA Direction', 'No Page Scroll', 'Cleaner Navbar'],
    cards: [
      {
        label: 'Focus',
        title: 'Visual identity first',
        body: 'The stadium background does the heavy lifting, so the interface can stay cleaner and less noisy.',
      },
      {
        label: 'Layout',
        title: 'One viewport only',
        body: 'The page is structured to fit inside the screen rather than stacking sections vertically.',
      },
      {
        label: 'Result',
        title: 'Less clutter',
        body: 'The odd top-left and top-right UI blocks are removed so the navigation reads properly.',
      },
    ],
  },
  internships: {
    eyebrow: 'Internships',
    title: 'What this page should highlight.',
    description:
      'This section is meant for your internship story: what roles you want, what you bring, and where you want to grow.',
    stats: ['Product Roles', 'Engineering Roles', 'Creative Tech'],
    cards: [
      {
        label: 'Track',
        title: 'Product engineering',
        body: 'Good fit for teams that want frontend execution, component thinking, and fast iteration.',
      },
      {
        label: 'Track',
        title: 'Software engineering',
        body: 'Useful for showing problem solving, debugging, systems thinking, and backend fundamentals.',
      },
      {
        label: 'Track',
        title: 'Creative tech',
        body: 'Best for internships where design taste and implementation quality both matter.',
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

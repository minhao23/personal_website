import type { StaticImageData } from 'next/image';

import bytedanceLogo from '../app/assets/companies/bytedance-logo.webp';
import govtechLogo from '../app/assets/companies/govtech.webp';
import japanFlag from '../app/assets/countries/japan.png';
import mexicoFlag from '../app/assets/countries/mexico.png';
import peruFlag from '../app/assets/countries/peru.png';
import profilePic from '../app/assets/profile_pic.jpg';
import singaporeFlag from '../app/assets/countries/singapore.png';
import southKoreaFlag from '../app/assets/countries/south-korea.png';
import thailandFlag from '../app/assets/countries/thailand.png';
import usaFlag from '../app/assets/countries/united-states-of-america.png';
import japanTrip1 from '../app/assets/countries/carousel/japan/japan1.jpg';
import japanTrip2 from '../app/assets/countries/carousel/japan/japan2.jpg';
import japanTrip3 from '../app/assets/countries/carousel/japan/japan3.jpg';
import mexicoTrip1 from '../app/assets/countries/carousel/mexico/mexico1.jpg';
import mexicoTrip2 from '../app/assets/countries/carousel/mexico/mexico2.jpg';
import mexicoTrip3 from '../app/assets/countries/carousel/mexico/mexico3.jpg';
import mexicoTrip4 from '../app/assets/countries/carousel/mexico/mexico4.jpg';
import peruTrip1 from '../app/assets/countries/carousel/peru/peru1.jpg';
import peruTrip2 from '../app/assets/countries/carousel/peru/peru2.jpg';
import peruTrip3 from '../app/assets/countries/carousel/peru/peru3.jpg';
import usaTrip1 from '../app/assets/countries/carousel/usa/usa1.jpg';
import usaTrip2 from '../app/assets/countries/carousel/usa/usa2.jpg';
import usaTrip3 from '../app/assets/countries/carousel/usa/usa3.jpg';
import usaTrip4 from '../app/assets/countries/carousel/usa/usa4.jpg';
import usaTrip5 from '../app/assets/countries/carousel/usa/usa5.jpg';
import eunoiaLogo from '../app/assets/universities/eunoia.png';
import nusLogo from '../app/assets/universities/kisspng-national-university-of-singapore-west-bengal-natio-national-university-of-singapore-ssl-solutions-5b6615cd1c8121.6941376315334169091168.jpg';
import uncLogo from '../app/assets/universities/unc.jpeg';

export const NAV_ITEMS = [
  { slug: 'home', width: '1.05fr' },
  { slug: 'internships', width: '1.34fr' },
  { slug: 'projects', width: '1.12fr' },
  { slug: 'about', width: '0.95fr' },
] as const;

export type SectionSlug = 'home' | 'internships' | 'projects' | 'hobbies' | 'about' | 'contact';

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
  rotatorEntries?: {
    title: string;
    subtitle?: string;
    meta?: string;
    location?: string;
    dateRange?: string;
    image?: StaticImageData;
    imageAlt?: string;
  }[];
  modal?:
    | {
        kind?: 'timeline';
        title: string;
        description: string;
        entries: {
          title: string;
          subtitle: string;
          meta: string;
          location?: string;
          dateRange?: string;
          bullets: string[];
          image?: StaticImageData;
          imageAlt?: string;
        }[];
      }
    | {
        kind: 'travel-showcase';
        title: string;
        description: string;
        entries: {
          title: string;
          image: StaticImageData;
          imageAlt?: string;
          gallery?: readonly {
            image: StaticImageData;
            alt?: string;
          }[];
        }[];
      };
};

const TRAVEL_COUNTRIES = [
  {
    title: 'Singapore',
    image: singaporeFlag,
    imageAlt: 'Singapore flag',
  },
  {
    title: 'Japan',
    image: japanFlag,
    imageAlt: 'Japan flag',
    gallery: [
      { image: japanTrip1, alt: 'Japan travel photo 1' },
      { image: japanTrip2, alt: 'Japan travel photo 2' },
      { image: japanTrip3, alt: 'Japan travel photo 3' },
    ],
  },
  {
    title: 'South Korea',
    image: southKoreaFlag,
    imageAlt: 'South Korea flag',
  },
  {
    title: 'Thailand',
    image: thailandFlag,
    imageAlt: 'Thailand flag',
  },
  {
    title: 'United States',
    image: usaFlag,
    imageAlt: 'United States flag',
    gallery: [
      { image: usaTrip1, alt: 'United States travel photo 1' },
      { image: usaTrip2, alt: 'United States travel photo 2' },
      { image: usaTrip3, alt: 'United States travel photo 3' },
      { image: usaTrip4, alt: 'United States travel photo 4' },
      { image: usaTrip5, alt: 'United States travel photo 5' },
    ],
  },
  {
    title: 'Mexico',
    image: mexicoFlag,
    imageAlt: 'Mexico flag',
    gallery: [
      { image: mexicoTrip1, alt: 'Mexico travel photo 1' },
      { image: mexicoTrip2, alt: 'Mexico travel photo 2' },
      { image: mexicoTrip3, alt: 'Mexico travel photo 3' },
      { image: mexicoTrip4, alt: 'Mexico travel photo 4' },
    ],
  },
  {
    title: 'Peru',
    image: peruFlag,
    imageAlt: 'Peru flag',
    gallery: [
      { image: peruTrip1, alt: 'Peru travel photo 1' },
      { image: peruTrip2, alt: 'Peru travel photo 2' },
      { image: peruTrip3, alt: 'Peru travel photo 3' },
    ],
  },
] as const;

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
  heroParagraphs?: string[];
  heroImageCaption?: string;
  cards: TabCard[];
  experienceTimeline?: ExperienceEntry[];
  heroImage?: StaticImageData;
  heroImageAlt?: string;
};

export const PORTFOLIO_CONTENT: Record<SectionSlug, SectionContent> = {
  home: {
    eyebrow: '',
    title: 'Ultimate Team',
    description:
      '',
    stats: [],
    cards: [
      {
        title: 'Hobbies',
        body: 'Outside work, the main through-line is football culture, collecting strong interface references, and building small experiments that sharpen both taste and technical instincts.',
      },
      {
        title: 'Educational history',
        variant: 'rotator',
        body: 'Computer Science and Business Administration at NUS, with an exchange term at UNC Chapel Hill and Eunoia Junior College before that.',
        rotatorBadge: 'Education history',
        image: nusLogo,
        imageAlt: 'National University of Singapore logo',
        rotatorEntries: [
          {
            title: 'National University of Singapore',
            subtitle: 'BSc in Computer Science and BBA in Business Administration',
            meta: 'Singapore · Aug 2023 - May 2027',
            location: 'Singapore',
            dateRange: 'Aug 2023 - May 2027',
            image: nusLogo,
            imageAlt: 'National University of Singapore logo',
          },
          {
            title: 'University of North Carolina at Chapel Hill',
            subtitle: 'Student Exchange Programme',
            meta: 'Chapel Hill, North Carolina · Aug 2025 - Dec 2025',
            location: 'Chapel Hill, North Carolina',
            dateRange: 'Aug 2025 - Dec 2025',
            image: uncLogo,
            imageAlt: 'UNC Chapel Hill logo',
          },
          {
            title: 'Eunoia Junior College',
            subtitle: 'GCE A-Level',
            meta: 'Singapore · Jan 2020 - Dec 2021',
            location: 'Singapore',
            dateRange: 'Jan 2020 - Dec 2021',
            image: eunoiaLogo,
            imageAlt: 'Eunoia Junior College logo',
          },
        ],
        actionLabel: 'Open education history',
        modal: {
          title: 'Educational history',
          description: 'A quick look at the academic background captured in the resume.',
          entries: [
            {
              title: 'National University of Singapore',
              subtitle: 'BSc in Computer Science and BBA in Business Administration',
              meta: 'Singapore · Aug 2023 - May 2027',
              location: 'Singapore',
              dateRange: 'Aug 2023 - May 2027',
              image: nusLogo,
              imageAlt: 'National University of Singapore logo',
              bullets: [
                'Double Degree Programme in Computer Science and Business Administration.',
                'GPA: 4.63 in Computer Science and 4.37 in Business Administration.',
              ],
            },
            {
              title: 'University of North Carolina at Chapel Hill',
              subtitle: 'Student Exchange Programme',
              meta: 'Chapel Hill, North Carolina · Aug 2025 - Dec 2025',
              location: 'Chapel Hill, North Carolina',
              dateRange: 'Aug 2025 - Dec 2025',
              image: uncLogo,
              imageAlt: 'UNC Chapel Hill logo',
              bullets: ['Spent one semester on exchange at UNC Chapel Hill during the NUS degree programme.'],
            },
            {
              title: 'Eunoia Junior College',
              subtitle: 'GCE A-Level',
              meta: 'Singapore · Jan 2020 - Dec 2021',
              location: 'Singapore',
              dateRange: 'Jan 2020 - Dec 2021',
              image: eunoiaLogo,
              imageAlt: 'Eunoia Junior College logo',
              bullets: ['Obtained 7 distinctions.'],
            },
          ],
        },
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
    stats: ['3 Internships', '2,000+ Users Served', '61% Faster Queries'],
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
        body: 'If this page looks familiar to you (hopefully it does), it is because it was designed after ' + 
        'my favorite game, FIFA 17. It\'s a game I\'ve spent  countless hours on, ' +
        'and what better way to bring my website to life, than through an interface that defined much of my childhood.',
      },
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

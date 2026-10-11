import bytedanceLogo from '../app/assets/companies/bytedance.png';
import govtechLogo from '../app/assets/companies/govtech.png';

import type { Certification, ExperienceEntry } from './portfolio-types';

export const CERTIFICATIONS: Certification[] = [
  {
    title: 'Applied Software Engineering Fundamentals',
    issuer: 'IBM',
    issued: 'Issued Jul 2025',
  },
  {
    title: 'Foundations of Cybersecurity',
    issuer: 'Google',
    issued: 'Issued Jun 2025',
  },
  {
    title: 'Google Cybersecurity Specialization',
    issuer: 'Google',
    issued: 'Issued Jun 2025',
  },
];

export const EXPERIENCE_TIMELINE: ExperienceEntry[] = [
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
    logoClassName: 'w-[138px] h-auto',
  },
  {
    company: 'Government Technology Agency',
    role: 'Software Engineer Intern',
    location: 'Singapore',
    dateRange: 'Jan 2026 - Aug 2026',
    duration: '8 months',
    stack: ['Next.js', 'FastAPI', 'AWS', 'PostgreSQL', 'Docker', 'Playwright'],
    bullets: [
      'Developed internal workflow systems used by more than 2,000 staff with Next.js, FastAPI, AWS, and PostgreSQL.',
      'Implemented Docker-based development environments and GitLab CI pipelines to improve deployment and testing workflows.',
      'Built more than 30 end-to-end, unit, and integration tests to reach 87% coverage and integrated OpenAI-powered ReAct agents that reduced average query handling time by 61%.',
    ],
    image: govtechLogo,
    imageAlt: 'Government Technology Agency logo',
    logoClassName: 'w-[72px] h-auto',
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
];

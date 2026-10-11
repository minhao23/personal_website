import eunoiaLogo from '../app/assets/universities/ejc.avif';
import nusLogo from '../app/assets/universities/nus.png';
import uncLogo from '../app/assets/universities/unc.png';

import type { RotatorEntry, TimelineModal, TimelineModalEntry } from './portfolio-types';

export const EDUCATION_ENTRIES: TimelineModalEntry[] = [
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
];

export const EDUCATION_ROTATOR_ENTRIES: RotatorEntry[] = EDUCATION_ENTRIES.map(({ bullets, ...entry }) => entry);

export const EDUCATION_MODAL: TimelineModal = {
  title: 'Educational history',
  description: 'A quick look at the academic background captured in the resume.',
  entries: EDUCATION_ENTRIES,
};

export const PRIMARY_EDUCATION_ENTRY = EDUCATION_ENTRIES[0];

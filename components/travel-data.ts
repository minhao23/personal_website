import japanFlag from '../app/assets/countries/japan.png';
import mexicoFlag from '../app/assets/countries/mexico.png';
import peruFlag from '../app/assets/countries/peru.png';
import philippinesFlag from '../app/assets/countries/philippines.png';
import southKoreaFlag from '../app/assets/countries/korea.png';
import taiwanFlag from '../app/assets/countries/taiwan.png';
import thailandFlag from '../app/assets/countries/thailand.png';
import usaFlag from '../app/assets/countries/usa.png';
import japanTrip1 from '../app/assets/countries/carousel/japan/japan1.jpg';
import japanTrip2 from '../app/assets/countries/carousel/japan/japan2.jpg';
import japanTrip3 from '../app/assets/countries/carousel/japan/japan3.jpg';
import koreaTrip1 from '../app/assets/countries/carousel/korea/korea1.jpg';
import koreaTrip2 from '../app/assets/countries/carousel/korea/korea2.jpg';
import koreaTrip3 from '../app/assets/countries/carousel/korea/korea3.jpg';
import koreaTrip4 from '../app/assets/countries/carousel/korea/korea4.jpg';
import koreaTrip5 from '../app/assets/countries/carousel/korea/korea5.jpg';
import koreaTrip6 from '../app/assets/countries/carousel/korea/korea6.jpg';
import mexicoTrip1 from '../app/assets/countries/carousel/mexico/mexico1.jpg';
import mexicoTrip2 from '../app/assets/countries/carousel/mexico/mexico2.jpg';
import mexicoTrip3 from '../app/assets/countries/carousel/mexico/mexico3.jpg';
import mexicoTrip4 from '../app/assets/countries/carousel/mexico/mexico4.jpg';
import peruTrip1 from '../app/assets/countries/carousel/peru/peru1.jpg';
import peruTrip2 from '../app/assets/countries/carousel/peru/peru2.jpg';
import peruTrip3 from '../app/assets/countries/carousel/peru/peru3.jpg';
import peruTrip4 from '../app/assets/countries/carousel/peru/peru4.jpg';
import peruTrip5 from '../app/assets/countries/carousel/peru/peru5.jpg';
import philippinesTrip1 from '../app/assets/countries/carousel/philippines/philippines1.jpg';
import philippinesTrip2 from '../app/assets/countries/carousel/philippines/philippines2.jpg';
import philippinesTrip3 from '../app/assets/countries/carousel/philippines/philippines3.jpg';
import taiwanTrip1 from '../app/assets/countries/carousel/taiwan/taiwan1.jpg';
import taiwanTrip2 from '../app/assets/countries/carousel/taiwan/taiwan2.jpg';
import taiwanTrip3 from '../app/assets/countries/carousel/taiwan/taiwan3.jpg';
import taiwanTrip4 from '../app/assets/countries/carousel/taiwan/taiwan4.jpg';
import thailandTrip1 from '../app/assets/countries/carousel/thailand/thailand1.jpg';
import thailandTrip2 from '../app/assets/countries/carousel/thailand/thailand2.jpg';
import thailandTrip3 from '../app/assets/countries/carousel/thailand/thailand3.jpg';
import thailandTrip4 from '../app/assets/countries/carousel/thailand/thailand4.jpg';
import thailandTrip5 from '../app/assets/countries/carousel/thailand/thailand5.jpg';
import thailandTrip6 from '../app/assets/countries/carousel/thailand/thailand6.jpg';
import usaTrip1 from '../app/assets/countries/carousel/usa/usa1.jpg';
import usaTrip2 from '../app/assets/countries/carousel/usa/usa2.jpg';
import usaTrip3 from '../app/assets/countries/carousel/usa/usa3.jpg';
import usaTrip4 from '../app/assets/countries/carousel/usa/usa4.jpg';
import usaTrip5 from '../app/assets/countries/carousel/usa/usa5.jpg';
import usaTrip6 from '../app/assets/countries/carousel/usa/usa6.jpg';
import usaTrip7 from '../app/assets/countries/carousel/usa/usa7.jpg';

import type { TravelCountryEntry } from './portfolio-types';

export const TRAVEL_COUNTRIES: TravelCountryEntry[] = [
  {
    slug: 'japan',
    date: new Date('2022-12-11'),
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
    slug: 'korea',
    date: new Date('2025-12-16'),
    title: 'South Korea',
    image: southKoreaFlag,
    imageAlt: 'South Korea flag',
    gallery: [
      { image: koreaTrip1, alt: 'South Korea travel photo 1' },
      { image: koreaTrip2, alt: 'South Korea travel photo 2' },
      { image: koreaTrip3, alt: 'South Korea travel photo 3' },
      { image: koreaTrip4, alt: 'South Korea travel photo 4' },
      { image: koreaTrip5, alt: 'South Korea travel photo 5' },
      { image: koreaTrip6, alt: 'South Korea travel photo 6' },
    ],
  },
  {
    slug: 'thailand',
    date: new Date('2024-05-03'),
    title: 'Thailand',
    image: thailandFlag,
    imageAlt: 'Thailand flag',
    gallery: [
      { image: thailandTrip1, alt: 'Thailand travel photo 1' },
      { image: thailandTrip2, alt: 'Thailand travel photo 2' },
      { image: thailandTrip3, alt: 'Thailand travel photo 3' },
      { image: thailandTrip4, alt: 'Thailand travel photo 4' },
      { image: thailandTrip5, alt: 'Thailand travel photo 5' },
      { image: thailandTrip6, alt: 'Thailand travel photo 6' },
    ],
  },
  {
    slug: 'philippines',
    date: new Date('2025-05-04'),
    title: 'Philippines',
    image: philippinesFlag,
    imageAlt: 'Philippines flag',
    gallery: [
      { image: philippinesTrip1, alt: 'Philippines travel photo 1' },
      { image: philippinesTrip2, alt: 'Philippines travel photo 2' },
      { image: philippinesTrip3, alt: 'Philippines travel photo 3' },
    ],
  },
  {
    slug: 'usa',
    date: new Date('2025-08-16'),
    title: 'United States',
    image: usaFlag,
    imageAlt: 'United States flag',
    gallery: [
      { image: usaTrip1, alt: 'United States travel photo 1' },
      { image: usaTrip2, alt: 'United States travel photo 2' },
      { image: usaTrip3, alt: 'United States travel photo 3' },
      { image: usaTrip4, alt: 'United States travel photo 4' },
      { image: usaTrip5, alt: 'United States travel photo 5' },
      { image: usaTrip6, alt: 'United States travel photo 6' },
      { image: usaTrip7, alt: 'United States travel photo 7' },
    ],
  },
  {
    slug: 'taiwan',
    date: new Date('2026-07-30'),
    title: 'Taiwan',
    image: taiwanFlag,
    imageAlt: 'Taiwan flag',
    gallery: [
      { image: taiwanTrip1, alt: 'Taiwan travel photo 1' },
      { image: taiwanTrip2, alt: 'Taiwan travel photo 2' },
      { image: taiwanTrip3, alt: 'Taiwan travel photo 3' },
      { image: taiwanTrip4, alt: 'Taiwan travel photo 4' },
    ],
  },
  {
    slug: 'mexico',
    title: 'Mexico',
    date: new Date('2025-11-11'),
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
    slug: 'peru',
    date: new Date('2025-09-13'),
    title: 'Peru',
    image: peruFlag,
    imageAlt: 'Peru flag',
    gallery: [
      { image: peruTrip1, alt: 'Peru travel photo 1' },
      { image: peruTrip2, alt: 'Peru travel photo 2' },
      { image: peruTrip3, alt: 'Peru travel photo 3' },
      { image: peruTrip4, alt: 'Peru travel photo 4' },
      { image: peruTrip5, alt: 'Peru travel photo 5' },
    ],
  },
];

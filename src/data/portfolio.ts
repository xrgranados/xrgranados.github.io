// src/data/portfolio.ts
// ─── Single source of truth for all portfolio content ───
// Edit this file to update your portfolio without touching components.

export const meta = {
  name:        'Rafael Granados',
  role:        'Backend Dev',
  tagline:     'Passionate about building robust backend systems with PHP and Node.js. Enthusiastic problem solver, dedicated to creating efficient solutions that scale.',
  location:    'Guatemala 🇬🇹',
  available:   true,
  site:        'https://xrgranados.github.io',
  photoAlt:    'Rafael Granados — Backend Developer',
} as const;

export const stats = [
  { value: '8+',  label: 'Years exp.' },
  { value: '10+', label: 'Projects' },
  { value: 'GT',  label: 'Guatemala' },
] as const;

export const about = {
  headline: 'I build custom web applications',
  paragraphs: [
    `I am a web developer with over <strong>8 years of experience</strong> building web applications
     using the latest front-end and back-end technologies. My experience includes developing
     <em>web application infrastructure</em>, REST APIs and hybrid mobile applications using
     cutting edge technologies such as ReactJS, Ionic, Laravel, Codeigniter, Node.js among others.`,

    `I have worked on several projects, including the development of an <strong>LMS for a prestigious
     university</strong> in my country, where I implemented modules across backend, frontend and mobile.
     I also built the complete infrastructure for a <em>personal transportation application</em> with
     ReactJS and Laravel — including a real-time geolocation system and payment gateways.`,

    `I consider myself a <strong>passionate developer</strong> and I am always looking to learn new
     skills to improve my projects and deliver better solutions.`,
  ],
} as const;

export type SkillGroup = {
  label: string;
  chips: { name: string; primary?: boolean }[];
};

export const skillGroups: SkillGroup[] = [
  {
    label: 'Backend',
    chips: [
      { name: 'PHP',        primary: true },
      { name: 'Laravel',    primary: true },
      { name: 'Codeigniter', primary: true },
      { name: 'REST APIs' },
      { name: 'Webhooks' },
      { name: 'Node.js' },
    ],
  },
  {
    label: 'Frontend / Mobile',
    chips: [
      { name: 'ReactJS' },
      { name: 'Ionic' },
      { name: 'JavaScript' },
      { name: 'HTML/CSS' },
    ],
  },
  {
    label: 'Infra & Tools',
    chips: [
      { name: 'MySQL' },
      { name: 'Git' },
      { name: 'PowerTranz' },
      { name: 'Geolocation APIs' },
      { name: 'Docker' },
    ],
  },
];

export type Project = {
  type:         string;
  name:         string;
  subtitle:     string;
  description:  string;
  achievements: string[];
  stack:        string[];
  badge?:       { text: string; color: 'orange' | 'blue' };
  personal?:    boolean;
};

export const projects: Project[] = [
  {
    type:        'Enterprise · Education',
    name:        'University LMS Platform',
    subtitle:    'Full-stack Learning Management System — Confidential Client',
    description: `Designed and developed a complete LMS for a prestigious university in Guatemala.
                  The system manages thousands of students, course content, evaluations and certificates —
                  with backend, web frontend and mobile application layers fully integrated.`,
    achievements: [
      'Architected the backend infrastructure handling concurrent users and course data management',
      'Built REST API consumed by both the web platform and the Ionic mobile app',
      'Implemented role-based access control: admin, teacher, student',
      'Developed modules for live assessments, progress tracking and certificate generation',
      'Integrated notification system for course updates and deadlines',
    ],
    stack:  ['PHP', 'Moodle', 'MySQL', 'Ionic', 'REST API'],
    badge:  { text: 'Under NDA', color: 'orange' },
  },
  {
    type:        'Enterprise · Transport',
    name:        'Ride Personal Backend Infrastructure',
    subtitle:    'Backoffice + REST API + Payment Gateways — Confidential Client',
    description: `Architected and developed a comprehensive backend ecosystem for a ride personal platform,
                  encompassing an administrative backoffice and a high-performance REST API for mobile clients.`,
    achievements: [
      'Designed the RESTful API architecture for iOS/Android mobile clients',
      'Implemented real-time geolocation system using mapping APIs for driver/passenger tracking',
      'Integrated payment gateway with PowerTranz — including webhook handling for async payment events',
      'Designed a multi-channel communication layer, integrating WhatsApp Chatbots, SMS gateways, and proprietary internal APIs for automated user engagement.',
      'Built admin backoffice with Laravel for managing users, trips, drivers and payouts',
      'Implemented fare calculation engine with dynamic pricing logic',
    ],
    stack:    ['Laravel', 'Node.js', 'REST API', 'PowerTranz', 'Webhooks', 'Geolocation', 'ReactJS'],
    badge:    { text: 'Under NDA', color: 'orange' },
  },
  {
    type:        'Personal · Open Source',
    name:        'Laravel REST API Starter Kit',
    subtitle:    'Opinionated boilerplate for production APIs · github.com/xrgranados',
    description: `A production-ready Laravel API starter kit built from patterns refined across
                  multiple projects. Includes authentication, role permissions, rate limiting,
                  standardized responses and Docker setup — so new projects go from zero to
                  deployed API in under an hour.`,
    achievements: [
      'JWT + Sanctum authentication with refresh token rotation',
      'Structured API response format with consistent error codes',
      'Role-based permission system using Spatie',
      'Docker Compose setup for local development parity',
    ],
    stack:    ['Laravel', 'PHP', 'MySQL', 'Docker', 'JWT'],
    badge:    { text: 'Open Source', color: 'blue' },
    personal: true,
  },
];

export type ContactLink = {
  label:   string;
  value:   string;
  href:    string;
  icon:    string;
};

export const contactLinks: ContactLink[] = [
  { label: 'Email',       value: 'xr.granados@gmail.com',            href: 'mailto:xr.granados@gmail.com',         icon: '✉' },
  { label: 'Telegram',    value: '@xrgranados',                      href: 'https://t.me/xrgranados',              icon: '✈' },
  { label: 'LinkedIn',    value: 'linkedin.com/in/xrgranados',       href: 'https://linkedin.com/in/xrgranados',   icon: 'in' },
  { label: 'GitHub',      value: 'github.com/xrgranados',            href: 'https://github.com/xrgranados',        icon: '</>' },
  { label: 'Twitter / X', value: '@xrgranados',                      href: 'https://twitter.com/xrgranados',       icon: '𝕏' },
];

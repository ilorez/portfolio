/**
 * Homepage section configuration — single source of truth for section order,
 * titles, icons, and which data to render. Content is resolved from @/data.
 */

export type SectionTheme = 'about' | 'experience' | 'primary' | 'work' | 'contact';

export type SectionCardType =
  | 'service'
  | 'experience'
  | 'education'
  | 'funFact'
  | 'project'
  | 'skillCategory'
  | 'certification';

export interface HomepageSectionConfig {
  id: string;
  title: string;
  /** Lucide icon name (e.g. "user", "briefcase", "code-xml") */
  icon: string;
  theme: SectionTheme;
  /** Optional subtitle or metadata line */
  subtitle?: string;
  /** For sections without items: description (or use profile/contact content in component) */
  description?: string;
  /** Key into portfolio / data to get items array or object */
  dataKey?: 'services' | 'experience' | 'education' | 'funFacts' | 'projects' | 'skills' | 'certifications';
  cardType?: SectionCardType;
}

export const HOMEPAGE_SECTIONS: HomepageSectionConfig[] = [
  {
    id: 'projects',
    title: 'Projects',
    icon: 'lightbulb',
    theme: 'work',
    dataKey: 'projects',
    cardType: 'project',
  },
  {
    id: 'about',
    title: 'About Me',
    icon: 'user',
    theme: 'about',
    description: '', // filled from profile.bio in component
  },
  {
    id: 'services',
    title: 'Services',
    icon: 'code-xml',
    theme: 'about',
    dataKey: 'services',
    cardType: 'service',
  },
  {
    id: 'fun-facts',
    title: 'Fun Facts',
    icon: 'sparkles',
    theme: 'about',
    dataKey: 'funFacts',
    cardType: 'funFact',
  },
  {
    id: 'experience',
    title: 'Experiences',
    icon: 'briefcase',
    theme: 'experience',
    dataKey: 'experience',
    cardType: 'experience',
  },
  {
    id: 'education',
    title: 'Education',
    icon: 'graduation-cap',
    theme: 'experience',
    dataKey: 'education',
    cardType: 'education',
  },
  {
    id: 'certifications',
    title: 'Certifications',
    icon: 'award',
    theme: 'primary',
    dataKey: 'certifications',
    cardType: 'certification',
  },
  {
    id: 'skills',
    title: 'Skills & Technologies',
    icon: 'layers',
    theme: 'primary',
    dataKey: 'skills',
    cardType: 'skillCategory',
  },
  {
    id: 'contact',
    title: 'Contact',
    icon: 'mail',
    theme: 'contact',
    description: '', // filled with email + CTA in component
  },
];

/**
 * Portfolio data types — front-end only, no database.
 * Add new types here when you add blogs, comments, etc.
 */

export interface ProfileInfo {
  username: string;
  first_name: string;
  last_name: string;
  email: string;
  phone: string;
  address: string;
  website: string;
  Jobs: string[];
  bio: string;
  profile_picture: string;
  cover_picture: string;
  resume: string;
}

export interface SocialLink {
  id: string;
  name: string;
  url: string;
}

export interface Service {
  title: string;
  description: string;
  icon: string;
}

export interface TeamMember {
  name: string;
  role?: string;
  github?: string;
}

export interface Project {
  slug: string;
  title: string;
  description: string;
  long_description?: string;
  image?: string;
  link?: string;
  github?: string;
  tags?: string[];
  features?: string[];
  technologies?: string[];
  screenshots?: string[];
  team?: TeamMember[];
  Icon?: string;
  background?: string;
}

export interface SkillItem {
  name: string;
  level: string;
}

export type SkillsByCategory = Record<string, SkillItem[]>;

export interface Language {
  name: string;
  level: string;
}

export interface FunFact {
  icon: string;
  text: string;
}

export interface Education {
  degree: string;
  major?: string;
  school: string;
  location?: string;
  start_date: string;
  end_date: string;
  description?: string;
  activities?: string[];
  skills?: string[];
  logo?: string;
  link?: string;
}

export interface Experience {
  slug: string;
  title: string;
  company: string;
  location: string;
  start_date: string;
  end_date: string;
  description: string;
  responsibilities?: string[];
  skills?: string[];
  logo?: string;
  link?: string;
  linkedin?: string;
  instagram?: string;
  github?: string;
  project_slug?: string;
}

export interface Certification {
  title: string;
  issuer: string;
  date: string;
  description?: string;
  link?: string;
  credential_id?: string;
  certificate_link?: string;
  logo?: string;
  skills?: string[];
}

export interface BlogPostLink {
  title: string;
  url: string;
}

export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  date: string;
  cover_image?: string;
  images?: string[];
  tags?: string[];
  category?: string;
  read_time?: string;
  links?: BlogPostLink[];
  published: boolean;
}

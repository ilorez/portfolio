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

export interface Project {
  title: string;
  description: string;
  image?: string;
  link?: string;
  github?: string;
  tags?: string[];
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

/** Placeholder for future: blog post */
export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  date: string;
  tags?: string[];
}

/** Placeholder for future: comment */
export interface Comment {
  id: string;
  postId: string;
  author: string;
  content: string;
  date: string;
}

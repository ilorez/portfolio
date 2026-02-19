/**
 * Single entry point for all portfolio data.
 * Import from '@/data' or '@/data/index'.
 */

import type {
  ProfileInfo,
  SocialLink,
  Service,
  Project,
  SkillsByCategory,
  Language,
  FunFact,
  Education,
  Experience,
  Certification,
} from './types';

import profileData from './profile.json';
import socialsData from './socials.json';
import servicesData from './services.json';
import projectsData from './projects.json';
import skillsData from './skills.json';
import languagesData from './languages.json';
import funFactsData from './fun-facts.json';
import educationData from './education.json';
import experienceData from './experience.json';
import certificationsData from './certifications.json';

export type {
  ProfileInfo,
  SocialLink,
  Service,
  Project,
  SkillsByCategory,
  Language,
  FunFact,
  Education,
  Experience,
  Certification,
};

export const profile = profileData as ProfileInfo;
export const socials = socialsData as SocialLink[];
export const services = servicesData as Service[];
export const projects = projectsData as Project[];
export const skills = skillsData as SkillsByCategory;
export const languages = languagesData as Language[];
export const funFacts = funFactsData as FunFact[];
export const education = educationData as Education[];
export const experience = experienceData as Experience[];
export const certifications = certificationsData as Certification[];

/** All data in one object for components that need it (e.g. legacy usage) */
export const portfolio = {
  profile,
  socials,
  services,
  projects,
  skills,
  languages,
  funFacts,
  education,
  experience,
  certifications,
};

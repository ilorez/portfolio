'use client';

import React from 'react';
import { cn } from '@/lib/utils';
import dynamicIconImports from 'lucide-react/dynamicIconImports';
import { motion } from 'framer-motion';
import CapitalizedText from '../CapitalizedText';
import IconWithVerticalLine from '../IconWithVerticalLine';
import Services from '../Services';
import FunFacts from '../FunFact';
import ExperienceCard from '../ExperieceCard';
import EducationCard from '../EducationCard';
import ProjectCard from '../ProjectCard';
import CertificationCard from '../CertificationCard';
import SkillsBlock from '../SkillsBlock';
import ContactCard from '../ContactCard';
import { Button } from '@/components/ui/button';
import { FileDown } from 'lucide-react';
import Link from 'next/link';
import type { HomepageSectionConfig, SectionTheme } from '@/data/homepage-sections';
import type { Service, Experience, Education, FunFact as FunFactType, Project, Certification } from '@/data/types';
import type { SkillsByCategory } from '@/data/types';
import { profile } from '@/data';
import { thirdFont } from '@/app/fonts';

const THEME_STYLES: Record<
  SectionTheme,
  { titleCap: string; titleLight: string }
> = {
  about: {
    titleCap: 'text-primary',
    titleLight: 'text-light-primary',
  },
  experience: {
    titleCap: 'text-amber-600 dark:text-amber-400',
    titleLight: 'text-amber-700 dark:text-amber-300',
  },
  primary: {
    titleCap: 'text-violet-600 dark:text-violet-400',
    titleLight: 'text-violet-700 dark:text-violet-300',
  },
  work: {
    titleCap: 'text-teal-600 dark:text-teal-400',
    titleLight: 'text-teal-700 dark:text-teal-300',
  },
  contact: {
    titleCap: 'text-sky-600 dark:text-sky-400',
    titleLight: 'text-sky-700 dark:text-sky-300',
  },
};

export interface HomepageSectionProps {
  section: HomepageSectionConfig;
  /** Resolved items (array or skills object). Omit for about/contact. */
  items?: unknown[] | SkillsByCategory;
  /** Override description for sections without items (e.g. about, contact). */
  descriptionOverride?: string;
}

export default function HomepageSection({
  section,
  items,
  descriptionOverride,
}: HomepageSectionProps) {
  const themeStyles = THEME_STYLES[section.theme];
  const iconName = section.icon as keyof typeof dynamicIconImports;
  const titleCap = themeStyles.titleCap;
  const titleLight = themeStyles.titleLight;

  const content = (() => {
    if (section.id === 'about') {
      const text = descriptionOverride ?? profile.bio;
      return (
        <div className="flex flex-col gap-3 md:gap-4 max-w-[800px]">
          <motion.p
            className="text-justify text-lg"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.55, ease: 'easeOut' }}
          >
            I&apos;m{' '}
            <span className={cn('text-primary', thirdFont.className)}>
              {profile.first_name} {profile.last_name}
            </span>
            , {text}
          </motion.p>
        </div>
      );
    }

    if (section.id === 'resume') {
      return (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.45, ease: 'easeOut' }}
        >
          <Button asChild variant="outline" size="lg" className="gap-2 w-fit">
            <Link href="/resume" aria-label="Go to resume page">
              <FileDown className="h-5 w-5" />
              View / Download CV
            </Link>
          </Button>
        </motion.div>
      );
    }

    if (section.id === 'contact') {
      return (
        <div className="flex flex-col gap-4 md:gap-6 max-w-[800px]">
          {descriptionOverride && (
            <motion.p
              className="text-justify text-lg text-muted-foreground"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.35 }}
              transition={{ duration: 0.5, ease: 'easeOut' }}
            >
              {descriptionOverride}
            </motion.p>
          )}
          <motion.div
            initial={{ opacity: 0, x: 90, y: 10, filter: 'blur(8px)' }}
            whileInView={{ opacity: 1, x: 0, y: 0, filter: 'blur(0px)' }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
          >
            <ContactCard />
          </motion.div>
          <motion.p
            className="text-sm text-muted-foreground"
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ duration: 0.45, ease: 'easeOut', delay: 0.05 }}
          >
            Or email directly:{' '}
            <a
              href={`mailto:${profile.email}`}
              className="text-primary hover:underline font-medium"
            >
              {profile.email}
            </a>
          </motion.p>
        </div>
      );
    }

    if (!items) return null;

    if (section.cardType === 'skillCategory') {
      return (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
        >
          <SkillsBlock skills={items as SkillsByCategory} />
        </motion.div>
      );
    }

    const list = Array.isArray(items) ? items : [];
    if (list.length === 0) return null;

    switch (section.cardType) {
      case 'service':
        return (
          <div className="flex flex-wrap w-full gap-2">
            {(list as Service[]).map((s, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 22, x: i % 2 === 0 ? -18 : 18 }}
                whileInView={{ opacity: 1, y: 0, x: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: 0.45, ease: 'easeOut', delay: i * 0.05 }}
              >
                <Services title={s.title} description={s.description} icon={s.icon as keyof typeof dynamicIconImports} />
              </motion.div>
            ))}
          </div>
        );
      case 'funFact':
        return (
          <div className="flex flex-wrap w-full gap-2">
            {(list as FunFactType[]).map((f, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20, x: i % 2 === 0 ? -12 : 12 }}
                whileInView={{ opacity: 1, y: 0, x: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: 0.45, ease: 'easeOut', delay: i * 0.04 }}
              >
                <FunFacts text={f.text} icon={f.icon as keyof typeof dynamicIconImports} />
              </motion.div>
            ))}
          </div>
        );
      case 'experience':
        return (
          <div className="flex flex-wrap w-full gap-2">
            {(list as Experience[]).map((e, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 26, x: -16 }}
                whileInView={{ opacity: 1, y: 0, x: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: 0.5, ease: 'easeOut', delay: i * 0.06 }}
              >
                <ExperienceCard {...e} />
              </motion.div>
            ))}
          </div>
        );
      case 'education':
        return (
          <div className="flex flex-wrap w-full gap-2">
            {(list as Education[]).map((e, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 26, x: 16 }}
                whileInView={{ opacity: 1, y: 0, x: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: 0.5, ease: 'easeOut', delay: i * 0.06 }}
              >
                <EducationCard {...e} />
              </motion.div>
            ))}
          </div>
        );
      case 'project':
        return (
          <div className="flex flex-wrap w-full gap-2">
            {(list as Project[]).map((p, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 28, x: i % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, y: 0, x: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: 0.55, ease: 'easeOut', delay: i * 0.07 }}
              >
                <ProjectCard {...p} />
              </motion.div>
            ))}
          </div>
        );
      case 'certification':
        return (
          <div className="flex flex-wrap w-full gap-2">
            {(list as Certification[]).map((c, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 22, x: i % 2 === 0 ? -14 : 14 }}
                whileInView={{ opacity: 1, y: 0, x: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: 0.45, ease: 'easeOut', delay: i * 0.05 }}
              >
                <CertificationCard {...c} />
              </motion.div>
            ))}
          </div>
        );
      default:
        return null;
    }
  })();

  return (
    <div className="flex flex-row gap-3 md:gap-6 items-stretch min-h-0">
      <IconWithVerticalLine icon={iconName} iconSize={28} theme={section.theme} />
      <div className="flex flex-col gap-3 md:gap-5 min-w-0 flex-1 pb-1">
        <div className="flex flex-col gap-1.5 md:gap-2">
          <CapitalizedText
            text={section.title}
            cap_color={titleCap}
            light_color={titleLight}
          />
          {section.subtitle && (
            <p className="text-sm text-muted-foreground">{section.subtitle}</p>
          )}
          {content}
        </div>
      </div>
    </div>
  );
}

'use client';

import React from 'react';
import { cn } from '@/lib/utils';
import dynamicIconImports from 'lucide-react/dynamicIconImports';
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
import type { HomepageSectionConfig, SectionTheme } from '@/data/homepage-sections';
import type { Service, Experience, Education, FunFact as FunFactType, Project, Certification } from '@/data/types';
import type { SkillsByCategory } from '@/data/types';
import { profile } from '@/data';
import { thirdFont } from '@/app/fonts';

const THEME_STYLES: Record<
  SectionTheme,
  { lineClassName: string; shadow: string; titleCap: string; titleLight: string }
> = {
  about: {
    lineClassName: 'bg-gradient-to-b from-i-about-from via-i-about-via to-i-about-to',
    shadow: 'shadow-i-about-from/50',
    titleCap: 'text-primary',
    titleLight: 'text-light-primary',
  },
  experience: {
    lineClassName: 'bg-gradient-to-b from-i-experience-from via-i-experience-via to-i-experience-to',
    shadow: 'shadow-i-experience-from/50',
    titleCap: 'text-i-experience-via',
    titleLight: 'text-light-experience',
  },
  primary: {
    lineClassName: 'bg-gradient-to-b from-primary/90 via-primary to-primary/90',
    shadow: 'shadow-primary/30',
    titleCap: 'text-primary',
    titleLight: 'text-light-primary',
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
        <p className="text-justify text-lg max-w-[800px]">
          I&apos;m{' '}
          <span className={cn('text-primary', thirdFont.className)}>
            {profile.first_name} {profile.last_name}
          </span>
          , {text}
        </p>
      );
    }

    if (section.id === 'contact') {
      return (
        <div className="flex flex-col gap-6 max-w-[800px]">
          {descriptionOverride && (
            <p className="text-justify text-lg text-muted-foreground">
              {descriptionOverride}
            </p>
          )}
          <ContactCard />
          <p className="text-sm text-muted-foreground">
            Or email directly:{' '}
            <a
              href={`mailto:${profile.email}`}
              className="text-primary hover:underline font-medium"
            >
              {profile.email}
            </a>
          </p>
        </div>
      );
    }

    if (!items) return null;

    if (section.cardType === 'skillCategory') {
      return <SkillsBlock skills={items as SkillsByCategory} />;
    }

    const list = Array.isArray(items) ? items : [];
    if (list.length === 0) return null;

    switch (section.cardType) {
      case 'service':
        return (
          <div className="flex flex-wrap w-full gap-2">
            {(list as Service[]).map((s, i) => (
              <Services key={i} title={s.title} description={s.description} icon={s.icon as keyof typeof dynamicIconImports} />
            ))}
          </div>
        );
      case 'funFact':
        return (
          <div className="flex flex-wrap w-full gap-2">
            {(list as FunFactType[]).map((f, i) => (
              <FunFacts key={i} text={f.text} icon={f.icon as keyof typeof dynamicIconImports} />
            ))}
          </div>
        );
      case 'experience':
        return (
          <div className="flex flex-wrap w-full gap-2">
            {(list as Experience[]).map((e, i) => (
              <ExperienceCard key={i} {...e} />
            ))}
          </div>
        );
      case 'education':
        return (
          <div className="flex flex-wrap w-full gap-2">
            {(list as Education[]).map((e, i) => (
              <EducationCard key={i} {...e} />
            ))}
          </div>
        );
      case 'project':
        return (
          <div className="flex flex-wrap w-full gap-2">
            {(list as Project[]).map((p, i) => (
              <ProjectCard key={i} {...p} />
            ))}
          </div>
        );
      case 'certification':
        return (
          <div className="flex flex-wrap w-full gap-2">
            {(list as Certification[]).map((c, i) => (
              <CertificationCard key={i} {...c} />
            ))}
          </div>
        );
      default:
        return null;
    }
  })();

  return (
    <div className="flex flex-row gap-6 h-fit">
      <IconWithVerticalLine
        icon={iconName}
        iconSize={30}
        shadow={themeStyles.shadow}
        className={themeStyles.lineClassName}
      />
      <div className="flex flex-col gap-5 min-w-0 flex-1">
        <div className="flex flex-col gap-2">
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

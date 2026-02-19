'use client';

import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import type { SkillsByCategory, SkillItem } from '@/data/types';

interface SkillsBlockProps {
  skills: SkillsByCategory;
}

const SkillCategoryCard = ({ category, items }: { category: string; items: SkillItem[] }) => (
  <Card
    className={[
      'w-full max-w-[320px] transition-all duration-200',
      'bg-card border border-border/50 shadow-sm',
      'hover:shadow-md hover:border-primary/20 dark:hover:border-primary/30',
    ].join(' ')}
  >
    <CardHeader className="pb-2">
      <CardTitle className="text-base">{category}</CardTitle>
    </CardHeader>
    <CardContent className="pt-0">
      <ul className="flex flex-wrap gap-2">
        {items.map(({ name, level }) => (
          <li key={name} className="text-sm text-muted-foreground">
            <span className="font-medium text-foreground">{name}</span>
            {level && <span className="text-muted-foreground/80"> · {level}</span>}
          </li>
        ))}
      </ul>
    </CardContent>
  </Card>
);

const SkillsBlock = ({ skills }: SkillsBlockProps) => {
  const entries = Object.entries(skills);
  return (
    <div className="flex flex-wrap w-full gap-3">
      {entries.map(([category, items]) => (
        <SkillCategoryCard key={category} category={category} items={items} />
      ))}
    </div>
  );
};

export default SkillsBlock;

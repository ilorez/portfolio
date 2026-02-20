'use client';

import React from 'react';
import Link from 'next/link';
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ExternalLink, Github } from 'lucide-react';
import type { Project } from '@/data/types';

interface ProjectCardProps extends Project {}

const ProjectCard = ({
  slug,
  title,
  description,
  link,
  github,
  tags,
}: ProjectCardProps) => {
  return (
    <Link href={`/projects/${slug}`} className="block w-full max-w-[500px] group">
      <Card
        className={[
          'w-full transition-all duration-200',
          'bg-card border border-border/50 shadow-sm',
          'hover:shadow-md hover:border-primary/20 dark:hover:border-primary/30',
        ].join(' ')}
      >
        <CardHeader className="flex flex-col gap-2">
          <div className="flex flex-wrap items-center justify-between gap-2">
            <CardTitle className="text-xl group-hover:text-primary transition-colors">{title}</CardTitle>
            <div className="flex items-center gap-2">
              {link && (
                <span
                  onClick={(e) => {
                    e.preventDefault();
                    window.open(link, '_blank');
                  }}
                  className="text-muted-foreground hover:text-primary transition-colors cursor-pointer"
                  aria-label={`View ${title}`}
                >
                  <ExternalLink className="h-4 w-4" />
                </span>
              )}
              {github && (
                <span
                  onClick={(e) => {
                    e.preventDefault();
                    window.open(github, '_blank');
                  }}
                  className="text-muted-foreground hover:text-primary transition-colors cursor-pointer"
                  aria-label={`${title} on GitHub`}
                >
                  <Github className="h-4 w-4" />
                </span>
              )}
            </div>
          </div>
          {tags && tags.length > 0 && (
            <div className="flex flex-wrap gap-1">
              {tags.map((tag) => (
                <Badge key={tag} variant="secondary" className="text-xs font-normal">
                  {tag}
                </Badge>
              ))}
            </div>
          )}
        </CardHeader>
        <CardContent className="pt-0">
          <CardDescription className="text-foreground/90">{description}</CardDescription>
        </CardContent>
      </Card>
    </Link>
  );
};

export default ProjectCard;

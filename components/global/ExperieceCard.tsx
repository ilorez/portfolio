import React from 'react';
import Link from 'next/link';
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from '@/components/ui/card';
import { cn } from '@/lib/utils';
import { ArrowRight } from 'lucide-react';

export interface ExperienceProps {
  slug: string;
  title: string;
  description: string;
  company: string;
  location: string;
  start_date: string;
  end_date: string;
}

const ExperienceCard = ({
  slug,
  title,
  description,
  company,
  location,
  start_date,
  end_date,
}: ExperienceProps) => (
  <Link href={`/experience/${slug}`} className="block w-full max-w-xl group">
    <Card
      className={cn(
        'w-full rounded-xl border border-border bg-card p-5',
        'shadow-sm transition-all duration-200',
        'hover:shadow-md hover:border-primary/30',
        'text-left cursor-pointer'
      )}
    >
      <CardHeader className="p-0 pb-3">
        <p className="text-xs font-medium text-muted-foreground uppercase tracking-wider">
          {start_date} — {end_date}
        </p>
        <CardTitle className="text-lg font-semibold group-hover:text-primary transition-colors flex items-center gap-2">
          {title}
          <ArrowRight className="h-4 w-4 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200" />
        </CardTitle>
        <CardDescription className="text-sm">
          {company} · {location}
        </CardDescription>
      </CardHeader>
      <CardContent className="p-0">
        <p className="text-sm text-muted-foreground leading-relaxed line-clamp-2">{description}</p>
      </CardContent>
    </Card>
  </Link>
);

export default ExperienceCard;

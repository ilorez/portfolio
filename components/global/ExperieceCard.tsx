import React from 'react';
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from '@/components/ui/card';
import { cn } from '@/lib/utils';

export interface ExperienceProps {
  title: string;
  description: string;
  company: string;
  location: string;
  start_date: string;
  end_date: string;
}

const ExperienceCard = ({
  title,
  description,
  company,
  location,
  start_date,
  end_date,
}: ExperienceProps) => (
  <Card
    className={cn(
      'w-full max-w-xl rounded-xl border border-border bg-card p-5',
      'shadow-sm transition-shadow hover:shadow-md',
      'text-left'
    )}
  >
    <CardHeader className="p-0 pb-3">
      <p className="text-xs font-medium text-muted-foreground uppercase tracking-wider">
        {start_date} — {end_date}
      </p>
      <CardTitle className="text-lg font-semibold">{title}</CardTitle>
      <CardDescription className="text-sm">
        {company} · {location}
      </CardDescription>
    </CardHeader>
    <CardContent className="p-0">
      <p className="text-sm text-muted-foreground leading-relaxed">{description}</p>
    </CardContent>
  </Card>
);

export default ExperienceCard;

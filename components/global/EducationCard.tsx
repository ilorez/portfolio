import React from 'react';
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from '@/components/ui/card';
import { cn } from '@/lib/utils';

export interface EducationProps {
  degree: string;
  major?: string;
  school: string;
  location?: string;
  start_date: string;
  end_date: string;
  description?: string;
  activities?: string[];
  skills?: string[];
}

const EducationCard = ({
  degree,
  major = '',
  school,
  location,
  start_date,
  end_date,
  description = '',
  activities,
  skills,
}: EducationProps) => (
  <Card
    className={cn(
      'w-full max-w-xl rounded-xl border border-border bg-card p-4 md:p-5',
      'shadow-sm transition-shadow hover:shadow-md',
      'text-left'
    )}
  >
    <CardHeader className="p-0 pb-3">
      <p className="text-xs font-medium text-muted-foreground uppercase tracking-wider">
        {start_date} — {end_date}
      </p>
      <CardTitle className="text-lg font-semibold">
        {degree}
        {major ? ` in ${major}` : ''}
      </CardTitle>
      <CardDescription className="text-sm">
        {school}
        {location ? ` · ${location}` : ''}
      </CardDescription>
    </CardHeader>
    <CardContent className="p-0 space-y-2">
      {description ? (
        <p className="text-sm text-muted-foreground leading-relaxed">{description}</p>
      ) : null}
      {skills && skills.length > 0 ? (
        <p className="text-xs text-muted-foreground">
          {skills.join(' · ')}
        </p>
      ) : null}
      {activities && activities.length > 0 ? (
        <p className="text-xs text-muted-foreground">
          {activities.join(' · ')}
        </p>
      ) : null}
    </CardContent>
  </Card>
);

export default EducationCard;

import React from 'react';
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription
} from '@/components/ui/card';
import { Badge } from '../ui/badge';

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
}: EducationProps) => {
  return (
    <Card className="w-[450px] max-w-[500px] bg-i-experience-bg flex flex-col gap-2 border-none shadow-none outline-none">
      <CardHeader className="w-full flex flex-col gap-4">
        <Badge variant="outline" className="w-fit flex gap-1 text-i-experience-date border-i-experience-date rounded-sm">
          <span>{start_date}</span><span>-</span><span>{end_date}</span>
        </Badge>
        <div className="w-full flex flex-col">
          <CardTitle className="w-full text-xl">
            {degree}{major !== '' && <span> in {major}</span>}
          </CardTitle>
          <CardDescription>
            {school}{location ? ` (${location})` : ''}
          </CardDescription>
        </div>
      </CardHeader>
      <CardContent className="w-full space-y-2">
        {description && <p>{description}</p>}
        {skills && skills.length > 0 && (
          <div className="flex flex-wrap gap-1">
            {skills.map((s) => (
              <Badge key={s} variant="secondary" className="text-xs font-normal">
                {s}
              </Badge>
            ))}
          </div>
        )}
        {activities && activities.length > 0 && (
          <p className="text-sm text-muted-foreground">
            {activities.join(' · ')}
          </p>
        )}
      </CardContent>
    </Card>
  );
};

export default EducationCard;

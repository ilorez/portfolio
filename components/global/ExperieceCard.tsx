import React from 'react';
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription
} from '@/components/ui/card';
import Icon from '@/components/global/LucideIcon';
import dynamicIconImports from 'lucide-react/dynamicIconImports';
import { Badge } from '../ui/badge';

// {
//   "title": "Développeur Full-Stack",
//   "company": "AlloBaba",
//   "location": "Morocco, Marrakech",
//   "start_date": "Mars 2024",
//   "end_date": "Avril 2024",
//   "description": "AlloBaba est une agence internationale de communication web et marketing digital, offrant des solutions innovantes et un développement rapide pour des projets exigeants. En tant que développeur Full-Stack, j'étais responsable de la conception, du déploiement et de la maintenance d'applications web internes et externes."
// },

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
  end_date
}: ExperienceProps) => {
  return (
    <Card className="w-[500px] max-w-[500px] bg-i-experience-bg flex flex-col gap-2 border-none shadow-none outline-none">
      <CardHeader className="w-full flex flex-col gap-4">
        <Badge variant="outline" className="w-fit text-i-experience-date border-i-experience-date rounded-sm">
          {start_date}-{end_date}
        </Badge>
        <div className="w-full flex flex-col">
        <CardTitle className="w-full text-xl">{title}</CardTitle>
        <CardDescription>{company} ({location})</CardDescription>
        </div>
      </CardHeader>
      <CardContent className="w-full">{description}</CardContent>
    </Card>
  );
};

export default ExperienceCard;

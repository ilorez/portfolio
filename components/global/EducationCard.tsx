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
//   "degree": "Technician Specialize",
//   "major": "Development digital", 
//   "school": "Ista NTIC SYBA",
//   "location": "Morocco",
//   "start_date": "January 2022",
//   "end_date": "December 2024",
//   "description": "In My time at OFPPT I learned a lot of things about web development, building websites, and more."
// },

export interface EducationProps {
  degree: string;
  major?: string;
  school: string;
  location: string;
  start_date: string;
  end_date: string;
  description: string;
}

const EducationCard = ({
  degree,major="",school,location,start_date,end_date,description
}: EducationProps) => {
  return (
    <Card className="w-[450px] max-w-[500px] bg-i-experience-bg flex flex-col gap-2 border-none shadow-none outline-none">
      <CardHeader className="w-full flex flex-col gap-4">
        <Badge variant="outline" className="w-fit flex gap-1 text-i-experience-date border-i-experience-date rounded-sm">
          <span>{start_date}</span><span>-</span><span>{end_date}</span>
        </Badge>
        <div className="w-full flex flex-col">
        <CardTitle className="w-full text-xl">{degree}{major != "" &&<span>{" in "}{major}</span>}</CardTitle>
        <CardDescription>{school} ({location})</CardDescription>
        </div>
      </CardHeader>
      <CardContent className="w-full">{description}</CardContent>
    </Card>
  );
};

export default EducationCard;

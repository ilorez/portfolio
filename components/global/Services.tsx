import React from 'react';
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle
} from '@/components/ui/card';
import Icon from '@/components/global/LucideIcon';
import dynamicIconImports from 'lucide-react/dynamicIconImports';

export interface Service {
  title: string;
  description: string;
  icon: keyof typeof dynamicIconImports;
}

const Services = ({ title, description, icon }: Service) => {
  return (
    <Card className="w-[400px] max-w-[400px] bg-i-services-bg flex flex-col gap-2 justify-center border-none shadow-none outline-none">
      <CardHeader className='w-full flex flex-col justify-center items-center '>
        <Icon name={icon} className='text-i-services-icon' size={40} />
        <CardTitle>{title}</CardTitle>
      </CardHeader>
      <CardContent className='w-full text-center'>
            {description}
      </CardContent>
    </Card>
  );
};

export default Services;

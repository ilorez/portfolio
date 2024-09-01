import React from 'react';
import {
  Card,
  CardContent,
  CardHeader,
} from '@/components/ui/card';
import Icon from '@/components/global/LucideIcon';
import dynamicIconImports from 'lucide-react/dynamicIconImports';

export interface FunFact {
  icon: keyof typeof dynamicIconImports;
  text: string;
}

const FunFacts = ({ text, icon }: FunFact) => {
  return (
    <Card className="w-[400px] max-w-[400px] bg-i-fun-facts-bg flex flex-col gap-2 justify-center border-none shadow-none outline-none">
      <CardHeader className='w-full flex flex-col justify-center items-center '>
        <Icon name={icon} className='text-i-fun-facts-icon' size={40} />
      </CardHeader>
      <CardContent className='w-full text-center'>
            {text}
      </CardContent>
    </Card>
  );
};

export default FunFacts;

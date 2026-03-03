import React from 'react';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import Icon from '@/components/global/LucideIcon';
import dynamicIconImports from 'lucide-react/dynamicIconImports';
import { cn } from '@/lib/utils';

export interface FunFact {
  icon: keyof typeof dynamicIconImports;
  text: string;
}

const FunFacts = ({ text, icon }: FunFact) => (
  <Card
    className={cn(
      'w-full max-w-xs rounded-xl border border-border bg-card p-4 md:p-5',
      'shadow-sm transition-shadow hover:shadow-md',
      'text-left'
    )}
  >
    <CardHeader className="p-0 pb-3">
      <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
        <Icon name={icon} size={22} />
      </div>
    </CardHeader>
    <CardContent className="p-0">
      <p className="text-sm text-muted-foreground leading-relaxed">{text}</p>
    </CardContent>
  </Card>
);

export default FunFacts;

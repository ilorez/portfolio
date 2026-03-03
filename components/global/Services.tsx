import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Icon from '@/components/global/LucideIcon';
import dynamicIconImports from 'lucide-react/dynamicIconImports';
import { cn } from '@/lib/utils';

export interface Service {
  title: string;
  description: string;
  icon: keyof typeof dynamicIconImports;
}

const Services = ({ title, description, icon }: Service) => (
  <Card
    className={cn(
      'w-full max-w-sm rounded-xl border border-border bg-card p-4 md:p-5',
      'shadow-sm transition-shadow hover:shadow-md',
      'text-left'
    )}
  >
    <CardHeader className="p-0 pb-3">
      <div className="flex items-center gap-3">
        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
          <Icon name={icon} size={22} />
        </div>
        <CardTitle className="text-base font-semibold">{title}</CardTitle>
      </div>
    </CardHeader>
    <CardContent className="p-0">
      <p className="text-sm text-muted-foreground leading-relaxed">{description}</p>
    </CardContent>
  </Card>
);

export default Services;

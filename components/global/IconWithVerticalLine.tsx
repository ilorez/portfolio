import React from 'react';
import Icon from './LucideIcon';
import VerticalLine from './VerticalLine';
import dynamicIconImports from 'lucide-react/dynamicIconImports';
import { cn } from '@/lib/utils';

interface IconWithVerticalLineProps {
  icon: keyof typeof dynamicIconImports;
  iconSize?: number;
  className?: string;
  shadow?: string;
}

/** Unified left accent: icon + vertical line for all sections. */
const IconWithVerticalLine = ({
  icon,
  iconSize = 28,
  className,
  shadow = 'shadow-primary/20',
}: IconWithVerticalLineProps) => (
  <div className="flex flex-col items-center gap-1 shrink-0">
    <div className="relative flex items-center justify-center">
      <div
        className={cn(
          'absolute inset-0 rounded-full scale-125 -z-10',
          'bg-primary/10 dark:bg-primary/20',
          shadow
        )}
        aria-hidden
      />
      <div className="relative text-primary">
        <Icon name={icon} size={iconSize} />
      </div>
    </div>
    <VerticalLine className={className} />
  </div>
);

export default IconWithVerticalLine;

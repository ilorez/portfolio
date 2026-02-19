import React from 'react';
import Icon from './LucideIcon';
import VerticalLine from './VerticalLine';
import dynamicIconImports from 'lucide-react/dynamicIconImports';
import { cn } from '@/lib/utils';

export type SectionTheme = 'about' | 'experience' | 'primary';

const THEME_LINE_CLASSES: Record<SectionTheme, string> = {
  about:
    'bg-gradient-to-b from-primary/30 via-primary to-primary/30 dark:from-primary/40 dark:via-primary dark:to-primary/40',
  experience:
    'bg-gradient-to-b from-amber-500/30 via-amber-500 to-amber-500/30 dark:from-amber-400/40 dark:via-amber-400 dark:to-amber-400/40',
  primary:
    'bg-gradient-to-b from-violet-500/30 via-violet-500 to-violet-500/30 dark:from-violet-400/40 dark:via-violet-400 dark:to-violet-400/40',
};

const THEME_ICON_WRAPPER: Record<SectionTheme, string> = {
  about: 'bg-primary/10 dark:bg-primary/20 shadow-primary/20',
  experience: 'bg-amber-500/10 dark:bg-amber-500/20 shadow-amber-500/20',
  primary: 'bg-violet-500/10 dark:bg-violet-500/20 shadow-violet-500/20',
};

const THEME_ICON_COLOR: Record<SectionTheme, string> = {
  about: 'text-primary',
  experience: 'text-amber-600 dark:text-amber-400',
  primary: 'text-violet-600 dark:text-violet-400',
};

interface IconWithVerticalLineProps {
  icon: keyof typeof dynamicIconImports;
  iconSize?: number;
  theme: SectionTheme;
}

/** Left accent: icon + full-height vertical line. Line stretches to section height. */
const IconWithVerticalLine = ({
  icon,
  iconSize = 28,
  theme,
}: IconWithVerticalLineProps) => (
  <div className="flex flex-col items-center gap-1 shrink-0 self-stretch h-full min-h-0">
    <div className="relative flex items-center justify-center shrink-0">
      <div
        className={cn(
          'absolute inset-0 rounded-full scale-125 -z-10',
          THEME_ICON_WRAPPER[theme]
        )}
        aria-hidden
      />
      <div className={cn('relative', THEME_ICON_COLOR[theme])}>
        <Icon name={icon} size={iconSize} />
      </div>
    </div>
    <VerticalLine className={THEME_LINE_CLASSES[theme]} />
  </div>
);

export default IconWithVerticalLine;

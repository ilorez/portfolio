'use client';

import React, { useRef } from 'react';
import Icon from './LucideIcon';
import dynamicIconImports from 'lucide-react/dynamicIconImports';
import { cn } from '@/lib/utils';
import {
  motion,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
} from 'framer-motion';

export type SectionTheme = 'about' | 'experience' | 'primary' | 'work' | 'contact';

const THEME_LINE_CLASSES: Record<SectionTheme, string> = {
  about:
    'bg-gradient-to-b from-primary/30 via-primary to-primary/30 dark:from-primary/40 dark:via-primary dark:to-primary/40',
  experience:
    'bg-gradient-to-b from-amber-500/30 via-amber-500 to-amber-500/30 dark:from-amber-400/40 dark:via-amber-400 dark:to-amber-400/40',
  primary:
    'bg-gradient-to-b from-violet-500/30 via-violet-500 to-violet-500/30 dark:from-violet-400/40 dark:via-violet-400 dark:to-violet-400/40',
  work:
    'bg-gradient-to-b from-teal-500/30 via-teal-500 to-teal-500/30 dark:from-teal-400/40 dark:via-teal-400 dark:to-teal-400/40',
  contact:
    'bg-gradient-to-b from-sky-500/30 via-sky-500 to-sky-500/30 dark:from-sky-400/40 dark:via-sky-400 dark:to-sky-400/40',
};
const THEME_ICON_WRAPPER: Record<SectionTheme, string> = {
  about: 'bg-primary/10 dark:bg-primary/20 shadow-primary/20',
  experience: 'bg-amber-500/10 dark:bg-amber-500/20 shadow-amber-500/20',
  primary: 'bg-violet-500/10 dark:bg-violet-500/20 shadow-violet-500/20',
  work: 'bg-teal-500/10 dark:bg-teal-500/20 shadow-teal-500/20',
  contact: 'bg-sky-500/10 dark:bg-sky-500/20 shadow-sky-500/20',
};

const THEME_ICON_COLOR: Record<SectionTheme, string> = {
  about: 'text-primary',
  experience: 'text-amber-600 dark:text-amber-400',
  primary: 'text-violet-600 dark:text-violet-400',
  work: 'text-teal-600 dark:text-teal-400',
  contact: 'text-sky-600 dark:text-sky-400',
};

const THEME_PACKET_GLOW: Record<SectionTheme, string> = {
  about: 'bg-primary/70 dark:bg-primary/80',
  experience: 'bg-amber-500/75 dark:bg-amber-400/80',
  primary: 'bg-violet-500/75 dark:bg-violet-400/80',
  work: 'bg-teal-500/75 dark:bg-teal-400/80',
  contact: 'bg-sky-500/75 dark:bg-sky-400/80',
};

interface IconWithVerticalLineProps {
  icon: keyof typeof dynamicIconImports;
  iconSize?: number;
  theme: SectionTheme;
}

/** Left accent: icon + full-height line. Line is absolute so it spans the full section height. */
const IconWithVerticalLine = ({
  icon,
  iconSize = 28,
  theme,
}: IconWithVerticalLineProps) => {
  const shouldReduceMotion = useReducedMotion();
  const rootRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: rootRef,
    offset: ['start 65%', 'end 62%'],
  });
  const progress = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 24,
    mass: 0.25,
  });
  const iconY = useTransform(progress, [0, 0.5, 1], [3, -5, 3]);
  const iconScale = useTransform(progress, [0, 0.5, 1], [0.97, 1.06, 0.97]);
  const haloOpacity = useTransform(progress, [0, 0.35, 1], [0.2, 0.9, 0.3]);

  return (
    <div ref={rootRef} className="relative w-14 shrink-0 self-stretch min-h-0">
      <div className="relative flex flex-col items-center">
        <motion.div
          className="relative flex items-center justify-center shrink-0"
          style={
            shouldReduceMotion
              ? undefined
              : {
                  y: iconY,
                  scale: iconScale,
                }
          }
          transition={{ type: 'spring', stiffness: 140, damping: 22, mass: 0.5 }}
        >
          <motion.div
            className={cn(
              'absolute inset-0 rounded-full scale-125 -z-10',
              THEME_ICON_WRAPPER[theme]
            )}
            style={shouldReduceMotion ? undefined : { opacity: haloOpacity }}
            animate={shouldReduceMotion ? undefined : { scale: [1.2, 1.3, 1.2] }}
            transition={
              shouldReduceMotion
                ? undefined
                : { duration: 2.8, ease: 'easeInOut', repeat: Infinity }
            }
            aria-hidden
          />
          <div className={cn('relative', THEME_ICON_COLOR[theme])}>
            <Icon name={icon} size={iconSize} />
          </div>
        </motion.div>
      </div>
      {/* Base line + scroll fill */}
      <div
        className="absolute left-1/2 top-14 -translate-x-1/2 bottom-0 w-1 rounded-full min-h-[2rem] bg-muted/40"
        aria-hidden
      />
      <motion.div
        className={cn(
          'absolute left-1/2 top-14 -translate-x-1/2 bottom-0 w-1 rounded-full min-h-[2rem] origin-top overflow-hidden',
          THEME_LINE_CLASSES[theme]
        )}
        style={{ scaleY: progress }}
        aria-hidden
      >
        <div className="absolute inset-0 line-data-flow" />
        <div
          className={cn(
            'absolute left-1/2 top-0 h-8 w-2 -translate-x-1/2 rounded-full blur-[6px] line-data-packet',
            THEME_PACKET_GLOW[theme]
          )}
        />
      </motion.div>
    </div>
  );
};

export default IconWithVerticalLine;

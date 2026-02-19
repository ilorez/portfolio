import { cn } from '@/lib/utils';

interface VerticalLineProps {
  className?: string;
}

/** Single unified style for all section left lines. */
const VerticalLine = ({ className }: VerticalLineProps) => (
  <div className="flex items-center justify-center h-full min-h-[2rem]">
    <div
      className={cn(
        'w-1 rounded-full min-h-[2rem] flex-1',
        'bg-gradient-to-b from-primary/30 via-primary to-primary/30',
        'dark:from-primary/40 dark:via-primary dark:to-primary/40',
        className
      )}
      aria-hidden
    />
  </div>
);

export default VerticalLine;

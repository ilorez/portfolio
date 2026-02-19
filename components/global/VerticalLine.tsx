import { cn } from '@/lib/utils';

interface VerticalLineProps {
  className?: string;
}

/** Vertical line that fills available height — use with flex-1 in parent. */
const VerticalLine = ({ className }: VerticalLineProps) => (
  <div className="flex-1 min-h-[1.5rem] w-full flex justify-center self-stretch">
    <div
      className={cn(
        'w-1 rounded-full h-full min-h-[1.5rem]',
        className
      )}
      aria-hidden
    />
  </div>
);

export default VerticalLine;

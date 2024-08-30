import { cn } from '@/lib/utils';
import React from 'react';

interface VerticalLineProps {
  className?: string;
}

const VerticalLine = ({ className }: VerticalLineProps) => {
return (
 <div className="flex items-center justify-center h-full">
 <div
 className={cn(`w-vertical-line h-full rounded-full shadow-xl shadow-i-about-from/50`, className)}
 ></div>
 </div>
  );
 };

export default VerticalLine;

import { cn } from '@/lib/utils';
import React from 'react';

interface VerticalLineProps {
  className?: string;
}

const VerticalLine = ({ className }: VerticalLineProps) => {
  return (
    <div className="flex items-center justify-center h-full">
      {/* <div className="w-2 h-full rounded-full bg-gradient-to-b from-[#93D1BE] via-[#2EB88E] to-[#93D1BE]"></div> */}
      <div
        className={cn(`w-vertical-line h-full rounded-full `, className)}
      ></div>
      {/* bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 */}
    </div>
  );
};

export default VerticalLine;

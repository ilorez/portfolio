import React from 'react';

interface VerticalLineProps {
  from: string;
  to: string;
}

const VerticalLine = () => {
  return (
    <div className="flex items-center justify-center h-full">
      <div className="w-2 h-full rounded-full bg-gradient-to-b to-[#3c832f] from-[#8ffbd3] shadow-[0_0_12px_0_rgba(0,255,0,0.5)]"></div>
    </div>
  );
};

export default VerticalLine;
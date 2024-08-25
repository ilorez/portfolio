import React from 'react';

interface VerticalLineProps {
  from: string;
  via: string;
  to: string;
  width ?: number;
}

const VerticalLine = ({from,via,to,width = 6 }:VerticalLineProps) => {
  return (
    <div className="flex items-center justify-center h-full">
      {/* <div className="w-2 h-full rounded-full bg-gradient-to-b from-[#93D1BE] via-[#2EB88E] to-[#93D1BE]"></div> */}
      <div className={
        `w-[5px] h-full rounded-full bg-gradient-to-b from-[${from}] [via-${via}] to-[${to}]`
      }></div>
      {/* bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 */}
    </div>
  );
};

export default VerticalLine;
import React from 'react';
import VerticalLine from './VerticalLine';

const Icon_VerticalLineLine: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-2">
      <div className="relative inline-block">
        <div
          className="absolute -z-10 inset-0 rounded-full"
          style={{
            background: `radial-gradient(circle, #506A64 0%, #2B3331 40%)`,
            transform: 'scale(2.40)' // Makes the shadow slightly larger than the icon
          }}
        ></div>
        <div className="relative z-10">
          <User size={30} />
        </div>
      </div>
      <VerticalLine />
    </div>
  );
};

export default Icon_VerticalLineLine;

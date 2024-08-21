import React from 'react';
import { User } from 'lucide-react'; // Example icon

interface IconWithShadowProps {
  IconComponent: React.ElementType;
  size?: number;
  shadowColor?: string;
}

const IconWithShadow: React.FC<IconWithShadowProps> = ({ 
  IconComponent, 
  size = 24, 
  shadowColor = '#10B981' // Default to a green color
}) => {
  return (
    <div className="relative inline-block">
      <div 
        className="absolute inset-0 rounded-full"
        style={{
          background: `radial-gradient(circle, ${shadowColor}50 0%, transparent 70%)`,
          transform: 'scale(1.2)', // Makes the shadow slightly larger than the icon
        }}
      ></div>
      <div className="relative z-10">
        <IconComponent size={size} />
      </div>
    </div>
  );
};

export default IconWithShadow;
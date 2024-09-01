import React from 'react';
import Icon from './LucideIcon';
import VerticalLine from './VerticalLine';
import dynamicIconImports from 'lucide-react/dynamicIconImports';

interface IconWithVerticalLineProps {
  icon: keyof typeof dynamicIconImports;
  iconSize?:number;
  className:string;
  shadow?:string;
}

const IconWithVerticalLine: React.FC<IconWithVerticalLineProps> = ({icon,iconSize=30, className, shadow}) => {
  return (
    <div className="flex flex-col items-center justify-center gap-2">
    <div className="relative inline-block">
      {/* change this to classnames radial-gradient(circle, #506A64 0%, #2B3331 40%) */}
      {/*bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 */}
      <div
        className={`absolute -z-10 inset-0 rounded-full scale-125 shadow-lg ${shadow}`}
      ></div>
      <div className="relative">
        <Icon name={icon} size={iconSize} />
      </div>
    </div>
    <VerticalLine className={className} />
  </div>
  );
};

export default IconWithVerticalLine;
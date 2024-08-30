import React from 'react';
import VerticalLine from '../VerticalLine';
import { User } from 'lucide-react';
import CapitalizedText from '../CapitalizedText';
import { thirdFont } from '@/app/fonts';
import { cn } from '@/lib/utils';

const About: React.FC = () => {
  return (
    <div className="flex flex-col pl-6 w-full">
      {/* about */}
      <div className="flex flex-row gap-6 h-fit">
        {/* the line */}
        <div className="flex flex-col items-center justify-center gap-2">
          <div className="relative inline-block">
            {/* change this to classnames radial-gradient(circle, #506A64 0%, #2B3331 40%) */}
            {/*bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 */}
            <div
              className="absolute -z-10 inset-0 rounded-full scale-125 shadow-lg shadow-i-about-from/50  "
              // style={{
              //   background: `radial-gradient(circle, #506A64 0%, #2B3331 40%)`,
              //   transform: 'scale(2.40)' // Makes the shadow slightly larger than the icon
              // }}
            ></div>
            <div className="relative">
              <User size={30} />
            </div>
          </div>
          <VerticalLine className="bg-gradient-to-b from-i-about-from via-i-about-via to-i-about-to" />
        </div>
        {/* content */}
        <div>
          {/* about me */}
          <div className="flex flex-col gap-2">
            <CapitalizedText text="About Me" />
            <p className='text-justify'>
              I&apos;m{' '}
              <span className={cn('text-primary', thirdFont.className)}>
                Zobair Najdaoui
              </span>
              , a full-stack <span className="font-sans">developer</span> from
              Morocco with a knack for design. I love running and traveling,
              finding joy in the simplicity of a good run and the adventure of
              exploring new places. Combining my technical skills with my
              passions, I strive to create engaging digital experiences that
              leave a mark.
            </p>
          </div>
          {/* services */}
          <div></div>
          {/* fun fucts */}
          <div></div>
        </div>
      </div>
    </div>
  );
};

export default About;

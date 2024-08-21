import React from 'react';
import VerticalLine from '../VerticalLine';
import { User } from 'lucide-react';
import CapitalizedText from '../CapitalizedText';
import IconWithShadow from '../IconWithShadow';

const About: React.FC = () => {
  return (
    <div className="flex flex-col pl-6 w-full">
      {/* about */}
      <div className="flex flex-row gap-6 h-screen">
        {/* the line */}

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
        {/* content */}
        <div>
          {/* about me */}
          <div className="flex flex-col gap-2">
            <CapitalizedText text="About Me" />
            <p>
              I&apos;m <span className="text-primary">Zobair Najdaoui</span>, a
              full-stack developer from Morocco with a knack for design. I love
              running and traveling, finding joy in the simplicity of a good run
              and the adventure of exploring new places. Combining my technical
              skills with my passions, I strive to create engaging digital
              experiences that leave a mark.
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

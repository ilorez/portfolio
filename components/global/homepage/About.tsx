import React from 'react';
import VerticalLine from '../VerticalLine';
import { User } from 'lucide-react';
import CapitalizedText from '../CapitalizedText';
import { thirdFont } from '@/app/fonts';
import { cn } from '@/lib/utils';
// import json data
import data from '@/IlorezData/ilorez.json';
import Services, { Service } from '../Services';
import FunFacts, { FunFact } from '../FunFact';
import IconWithVerticalLine from '../IconWithVerticalLine';

const About: React.FC = () => {
  const services: Service[] = data.services as Service[];
  const fun_facts: FunFact[] = data.fun_facts as FunFact[];
  return (
    <div className="flex flex-col pl-6 w-full gap-8">
      {/* about */}
      <div className="flex flex-row gap-6 h-fit">
        {/* the line */}
        <IconWithVerticalLine
          icon="user"
          iconSize={30}
          shadow="shadow-i-about-from/50"
          className="bg-gradient-to-b from-i-about-from via-i-about-via to-i-about-to"
        />
        {/* content */}
        <div className="flex flex-col gap-5">
          {/* about me */}
          <div className="flex flex-col gap-2">
            <CapitalizedText text="About Me" cap_color='text-primary' light_color='text-light-primary' />
            <p className="text-justify text-lg max-w-[800px]">
              I&apos;m{' '}
              <span className={cn('text-primary', thirdFont.className)}>
                Zobair Najdaoui
              </span>
              , a full-stack developer from Morocco with a knack for design. I
              love running and traveling, finding joy in the simplicity of a
              good run and the adventure of exploring new places. Combining my
              technical skills with my passions, I strive to create engaging
              digital experiences that leave a mark.
            </p>
          </div>
          {/* services */}
          <div className="flex flex-col gap-2">
            <CapitalizedText text="Services" cap_color='text-primary' light_color='text-light-primary' />
            <div className="flex flex-wrap w-full gap-2">
              {services.map((service, index) => (
                <Services
                  key={index}
                  title={service.title}
                  description={service.description}
                  icon={service.icon}
                />
              ))}
            </div>
          </div>
          {/* fun fucts */}
          <div className="flex flex-col gap-2">
            <CapitalizedText text="Fun Facts" cap_color='text-primary' light_color='text-light-primary' />
            <div className="flex flex-wrap w-full gap-2">
              {fun_facts.map((fun_fact, index) => (
                <FunFacts
                  key={index}
                  text={fun_fact.text}
                  icon={fun_fact.icon}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
      {/* services */}
      <div className="flex flex-row gap-6 h-fit">
        {/* the line */}
        <IconWithVerticalLine
          icon="briefcase-business"
          iconSize={30}
          shadow="shadow-i-experience-from/50"
          className="bg-gradient-to-b from-i-experience-from via-i-experience-via to-i-experience-to"
        />
        {/* content */}
        <div className="flex flex-col gap-5">
          {/* about me */}
          <div className="flex flex-col gap-2">
            <CapitalizedText text="experience" cap_color='text-i-experience-via' light_color='text-light-experience' />
            <p className="text-justify text-lg max-w-[800px]">
              I&apos;m{' '}
              <span className={cn('text-primary', thirdFont.className)}>
                Zobair Najdaoui
              </span>
              , a full-stack developer from Morocco with a knack for design. I
              love running and traveling, finding joy in the simplicity of a
              good run and the adventure of exploring new places. Combining my
              technical skills with my passions, I strive to create engaging
              digital experiences that leave a mark.
            </p>
          </div>
          
          
        </div>
      </div>
    </div>
  );
};

export default About;

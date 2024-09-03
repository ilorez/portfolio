import React from 'react';
import CapitalizedText from '../CapitalizedText';
// import json data
import data from '@/IlorezData/ilorez.json';
import IconWithVerticalLine from '../IconWithVerticalLine';
import ExperienceCard, { ExperienceProps } from '../ExperieceCard';

const Experience: React.FC = () => {
  const experiences: ExperienceProps[] = data.experiences as ExperienceProps[];
  return (
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
        {/* Experiences */}
        <div className="flex flex-col gap-2">
          <CapitalizedText
            text="experience"
            cap_color="text-i-experience-via"
            light_color="text-light-experience"
          />
          <div className="flex flex-wrap w-full gap-2">
            {experiences.map((exp, index) => (
              <ExperienceCard key={index} {...exp} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;

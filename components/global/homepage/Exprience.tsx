import React from 'react';
import CapitalizedText from '../CapitalizedText';
import { education, experience } from '@/data';
import IconWithVerticalLine from '../IconWithVerticalLine';
import ExperienceCard from '../ExperieceCard';
import EducationCard from '../EducationCard';

export default function Experience() {
  return (
    <div className="flex flex-row gap-6 h-fit">
      <IconWithVerticalLine
        icon="briefcase-business"
        iconSize={30}
        shadow="shadow-i-experience-from/50"
        className="bg-gradient-to-b from-i-experience-from via-i-experience-via to-i-experience-to"
      />
      <div className="flex flex-col gap-5">
        <div className="flex flex-col gap-2">
          <CapitalizedText
            text="Experiences"
            cap_color="text-i-experience-via"
            light_color="text-light-experience"
          />
          <div className="flex flex-wrap w-full gap-2">
            {experience.map((exp, index) => (
              <ExperienceCard key={index} {...exp} />
            ))}
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <CapitalizedText
            text="Education"
            cap_color="text-i-experience-via"
            light_color="text-light-experience"
          />
          <div className="flex flex-wrap w-full gap-2">
            {education.map((edu, index) => (
              <EducationCard key={index} {...edu} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

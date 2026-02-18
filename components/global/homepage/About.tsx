import React from 'react';
import CapitalizedText from '../CapitalizedText';
import { thirdFont } from '@/app/fonts';
import { cn } from '@/lib/utils';
import { profile, services as servicesData, funFacts } from '@/data';
import Services, { Service } from '../Services';
import FunFacts, { type FunFact } from '../FunFact';
import IconWithVerticalLine from '../IconWithVerticalLine';

export default function About() {
  return (
    <div className="flex flex-row gap-6 h-fit">
      <IconWithVerticalLine
        icon="user"
        iconSize={30}
        shadow="shadow-i-about-from/50"
        className="bg-gradient-to-b from-i-about-from via-i-about-via to-i-about-to"
      />
      <div className="flex flex-col gap-5">
        <div className="flex flex-col gap-2">
          <CapitalizedText
            text="About Me"
            cap_color="text-primary"
            light_color="text-light-primary"
          />
          <p className="text-justify text-lg max-w-[800px]">
            I&apos;m{' '}
            <span className={cn('text-primary', thirdFont.className)}>
              {profile.first_name} {profile.last_name}
            </span>
            , {profile.bio}
          </p>
        </div>
        <div className="flex flex-col gap-2">
          <CapitalizedText
            text="Services"
            cap_color="text-primary"
            light_color="text-light-primary"
          />
          <div className="flex flex-wrap w-full gap-2">
            {(servicesData as Service[]).map((service, index) => (
              <Services
                key={index}
                title={service.title}
                description={service.description}
                icon={service.icon}
              />
            ))}
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <CapitalizedText
            text="Fun Facts"
            cap_color="text-primary"
            light_color="text-light-primary"
          />
          <div className="flex flex-wrap w-full gap-2">
            {funFacts.map((fun_fact, index) => (
              <FunFacts
                key={index}
                text={fun_fact.text}
                icon={fun_fact.icon as FunFact['icon']}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

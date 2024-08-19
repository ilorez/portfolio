'use client';

import Image from 'next/image';
import { Button } from '@/components/ui/button';
import Header from '@/components/global/homepage/header';
import Navbar from '@/components/global/Navbar';
// create a home page for my portfolio
export default function Home() {
  return (
    <div className="h-[200vh]">
      <Header />
      <div className="fixed top-0 m-6 z-10">
        <Navbar />
      </div>
      <div className="flex flex-col pl-6 w-full">
        {/* about */}
        <div className='flex flex-row gap-6 h-fit'>
          {/* the line */}
          <div className="w-16 min-h-full">
            {' '}
            <span className="w-1 min-h-full  bg-green-400"></span>
          </div>
          {/* content */}
          <div>
            {/* about me */}
            <div>
              I&apos;m Zobair Najdaoui, a full-stack developer from Morocco with a
              knack for design. I love running and traveling, finding joy in the
              simplicity of a good run and the adventure of exploring new
              places. Combining my technical skills with my passions, I strive
              to create engaging digital experiences that leave a mark.
            </div>
            {/* services */}
            <div></div>
            {/* fun fucts */}
            <div></div>
          </div>
        </div>
      </div>
    </div>
  );
}

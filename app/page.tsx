'use client';

import Image from 'next/image';
import { Button } from '@/components/ui/button';
import Header from '@/components/global/homepage/header';
import Navbar from '@/components/global/Navbar';
import VerticalLine from '@/components/global/VerticalLine';
import About from '@/components/global/homepage/About';
// create a home page for my portfolio
export default function Home() {
  return (
    <div className="h-[200vh]">
      <Header />
      <div className="fixed top-0 m-6 z-10">
        <Navbar />
      </div>
      <div className="m-6 text-card">
        <About />
      </div>
    </div>
  );
}

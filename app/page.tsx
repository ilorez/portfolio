'use client';
import Header from '@/components/global/homepage/header';
import Navbar from '@/components/global/Navbar';
import About from '@/components/global/homepage/About';
import Experience from '@/components/global/homepage/Exprience';
// create a home page for my portfolio
export default function Home() {
  return (
    <div className="h-[200vh]">
      <Header />
      <div className="fixed top-0 m-6  z-10">
        <Navbar />
      </div>
      <div className="flex flex-col m-6 w-fit items-start mt-6">
        <div className="flex flex-col pl-6 w-full gap-8">
          <About />
          <Experience />
        </div>
      </div>
    </div>
  );
}

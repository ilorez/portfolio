'use client';

import Header from '@/components/global/homepage/header';
import Navbar from '@/components/global/Navbar';
import About from '@/components/global/homepage/About';
import Experience from '@/components/global/homepage/Exprience';

export default function Home() {
  return (
    <>
      <header className="fixed top-0 left-0 z-20 p-4 md:p-6">
        <Navbar />
      </header>

      <main>
        <Header />
        <div className="mx-auto max-w-5xl px-4 py-12 md:px-8 md:py-16">
          <section id="about" className="scroll-mt-24 pb-12 md:pb-16">
            <About />
          </section>
          <section id="experience" className="scroll-mt-24 pb-12 md:pb-16">
            <Experience />
          </section>
          {/* Future: <section id="projects">, <section id="contact"> */}
        </div>
      </main>
    </>
  );
}

'use client';

import Header from '@/components/global/homepage/header';
import Navbar from '@/components/global/Navbar';
import Footer from '@/components/global/Footer';
import HomepageSection from '@/components/global/homepage/HomepageSection';
import { HOMEPAGE_SECTIONS } from '@/data/homepage-sections';
import { portfolio } from '@/data';
import type { SkillsByCategory } from '@/data/types';

export default function Home() {
  return (
    <>
      <header className="fixed top-0 left-0 z-20 p-4 md:p-6">
        <Navbar />
      </header>

      <main>
        <section id="hero" className="scroll-mt-24">
          <Header />
        </section>
        <div className="mx-auto max-w-5xl px-3 py-8 sm:px-4 md:px-8 md:py-16">
          {HOMEPAGE_SECTIONS.map((section) => {
            const dataKey = section.dataKey;
            const raw =
              dataKey === 'skills'
                ? portfolio.skills
                : dataKey
                  ? (portfolio as Record<string, unknown>)[dataKey]
                  : undefined;
            const items: unknown[] | SkillsByCategory | undefined =
              raw !== undefined ? (raw as unknown[] | SkillsByCategory) : undefined;

            return (
              <section
                key={section.id}
                id={section.id}
                className="scroll-mt-24 pb-8 md:pb-16"
              >
                <HomepageSection
                  section={section}
                  items={items}
                  descriptionOverride={
                    section.id === 'contact'
                      ? "Have a project in mind, a collaboration idea, or just want to say hello? I'd love to hear from you and discuss how we can build something meaningful together."
                      : undefined
                  }
                />
              </section>
            );
          })}
        </div>
      </main>

      <Footer />
    </>
  );
}

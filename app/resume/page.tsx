import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowLeft, Download, Mail, MapPin, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { education, experience, profile, skills, socials } from '@/data';

export const metadata: Metadata = {
  title: `Resume | ${profile.first_name} ${profile.last_name}`,
  description: `Resume of ${profile.first_name} ${profile.last_name}`,
};

const topSkills = Array.from(
  new Set(
    Object.values(skills)
      .flat()
      .map((item) => item.name)
  )
).slice(0, 16);

const socialLinks = socials.slice(0, 5);

export default function ResumePage() {
  return (
    <main className="min-h-screen bg-[#ece8f5] px-4 py-8 text-zinc-900 dark:bg-zinc-900 dark:text-zinc-100 md:px-8 md:py-12">
      <div className="mx-auto max-w-6xl">
        <div className="mb-6 flex flex-wrap items-center justify-between gap-3">
          <Button asChild variant="outline" className="bg-white/80 dark:bg-zinc-800/80">
            <Link href="/">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Portfolio
            </Link>
          </Button>
          <Button asChild className="ml-auto gap-2">
            <a href={profile.resume} target="_blank" rel="noopener noreferrer">
              <Download className="h-4 w-4" />
              Download
            </a>
          </Button>
        </div>

        <article className="overflow-hidden rounded-2xl border border-zinc-200 bg-white shadow-xl dark:border-zinc-800 dark:bg-zinc-950">
          <div className="grid gap-0 lg:grid-cols-[300px,1fr]">
            <aside className="space-y-8 bg-zinc-100/90 p-6 dark:bg-zinc-900">
              <div>
                <h1 className="text-4xl font-extrabold leading-tight text-indigo-700 dark:text-indigo-300">
                  {profile.first_name}
                  <br />
                  {profile.last_name}
                </h1>
                <p className="mt-3 text-sm font-semibold uppercase tracking-widest text-zinc-500 dark:text-zinc-400">
                  {profile.Jobs?.[0] ?? 'Software Engineer'}
                </p>
              </div>

              <section>
                <h2 className="mb-3 text-xs font-bold uppercase tracking-widest text-zinc-500 dark:text-zinc-400">
                  Contact
                </h2>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start gap-2">
                    <Mail className="mt-0.5 h-4 w-4 shrink-0 text-zinc-500" />
                    <a className="hover:underline" href={`mailto:${profile.email}`}>
                      {profile.email}
                    </a>
                  </li>
                  {profile.phone && (
                    <li className="flex items-start gap-2">
                      <Phone className="mt-0.5 h-4 w-4 shrink-0 text-zinc-500" />
                      <span>{profile.phone}</span>
                    </li>
                  )}
                  <li className="flex items-start gap-2">
                    <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-zinc-500" />
                    <span>{profile.address}</span>
                  </li>
                </ul>
              </section>

              <section>
                <h2 className="mb-3 text-xs font-bold uppercase tracking-widest text-zinc-500 dark:text-zinc-400">
                  Links
                </h2>
                <ul className="space-y-2 text-sm">
                  <li>
                    <a className="hover:underline" href={profile.website} target="_blank" rel="noreferrer">
                      Personal Website
                    </a>
                  </li>
                  {socialLinks.map((social) => (
                    <li key={social.id}>
                      <a className="hover:underline" href={social.url} target="_blank" rel="noreferrer">
                        {social.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </section>

              <section>
                <h2 className="mb-3 text-xs font-bold uppercase tracking-widest text-zinc-500 dark:text-zinc-400">
                  Core Skills
                </h2>
                <ul className="space-y-1 text-sm">
                  {topSkills.map((skill) => (
                    <li key={skill}>- {skill}</li>
                  ))}
                </ul>
              </section>
            </aside>

            <div className="space-y-8 p-6 md:p-8">
              <section>
                <h2 className="mb-3 text-xs font-bold uppercase tracking-[0.18em] text-zinc-500 dark:text-zinc-400">
                  Summary
                </h2>
                <p className="text-sm leading-7 text-zinc-700 dark:text-zinc-300">{profile.bio}</p>
              </section>

              <section>
                <h2 className="mb-4 text-xs font-bold uppercase tracking-[0.18em] text-zinc-500 dark:text-zinc-400">
                  Experience
                </h2>
                <div className="space-y-6">
                  {experience.map((item) => (
                    <div key={item.slug} className="border-l-2 border-zinc-200 pl-4 dark:border-zinc-700">
                      <div className="flex flex-wrap items-baseline justify-between gap-2">
                        <h3 className="text-base font-semibold">{item.company}</h3>
                        <p className="text-xs text-zinc-500">
                          {item.start_date} - {item.end_date}
                        </p>
                      </div>
                      <p className="text-sm font-medium text-indigo-700 dark:text-indigo-300">{item.title}</p>
                      <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">{item.description}</p>
                      {item.responsibilities?.length ? (
                        <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-zinc-700 dark:text-zinc-300">
                          {item.responsibilities.slice(0, 4).map((responsibility) => (
                            <li key={responsibility}>{responsibility}</li>
                          ))}
                        </ul>
                      ) : null}
                    </div>
                  ))}
                </div>
              </section>

              <section>
                <h2 className="mb-4 text-xs font-bold uppercase tracking-[0.18em] text-zinc-500 dark:text-zinc-400">
                  Education
                </h2>
                <div className="space-y-4">
                  {education.map((item) => (
                    <div key={`${item.school}-${item.degree}`}>
                      <div className="flex flex-wrap items-baseline justify-between gap-2">
                        <h3 className="text-base font-semibold">{item.school}</h3>
                        <p className="text-xs text-zinc-500">
                          {item.start_date} - {item.end_date}
                        </p>
                      </div>
                      <p className="text-sm font-medium text-indigo-700 dark:text-indigo-300">{item.degree}</p>
                      {item.description && (
                        <p className="mt-1 text-sm text-zinc-700 dark:text-zinc-300">{item.description}</p>
                      )}
                    </div>
                  ))}
                </div>
              </section>
            </div>
          </div>
        </article>
      </div>
    </main>
  );
}

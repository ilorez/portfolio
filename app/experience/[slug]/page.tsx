import { notFound } from 'next/navigation';
import Link from 'next/link';
import { experience, projects } from '@/data';
import { cn } from '@/lib/utils';
import { ArrowLeft, MapPin, Calendar, Building2, ExternalLink, CheckCircle2, Linkedin, Instagram, Github, Rocket } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { thirdFont } from '@/app/fonts';

interface ExperiencePageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return experience.map((exp) => ({
    slug: exp.slug,
  }));
}

export async function generateMetadata({ params }: ExperiencePageProps) {
  const { slug } = await params;
  const exp = experience.find((e) => e.slug === slug);
  if (!exp) return { title: 'Experience Not Found' };
  return {
    title: `${exp.title} at ${exp.company} — Experience`,
    description: exp.description,
  };
}

export default async function ExperiencePage({ params }: ExperiencePageProps) {
  const { slug } = await params;
  const exp = experience.find((e) => e.slug === slug);

  if (!exp) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-background">
      <div className="max-w-4xl mx-auto px-4 md:px-8 py-12 md:py-16">
        {/* Back Button */}
        <Link
          href="/#experience"
          className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-8"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to Portfolio
        </Link>

        {/* Header */}
        <header className="mb-10">
          <div className="flex items-start gap-4 mb-4">
            {exp.logo && (
              <div className="shrink-0 w-16 h-16 rounded-xl bg-muted flex items-center justify-center overflow-hidden border border-border">
                <img
                  src={exp.logo}
                  alt={`${exp.company} logo`}
                  className="w-full h-full object-cover"
                />
              </div>
            )}
            <div className="flex-1 min-w-0">
              <h1 className={cn('text-2xl md:text-3xl font-bold text-foreground mb-1', thirdFont.className)}>
                {exp.title}
              </h1>
              <p className="text-lg text-primary font-medium">{exp.company}</p>
            </div>
          </div>

          {/* Meta Info */}
          <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
            <span className="inline-flex items-center gap-1.5">
              <Calendar className="h-4 w-4" />
              {exp.start_date} — {exp.end_date}
            </span>
            <span className="inline-flex items-center gap-1.5">
              <MapPin className="h-4 w-4" />
              {exp.location}
            </span>
            {exp.link && (
              <a
                href={exp.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 hover:text-primary transition-colors"
              >
                <Building2 className="h-4 w-4" />
                Website
                <ExternalLink className="h-3 w-3" />
              </a>
            )}
            {exp.linkedin && (
              <a
                href={exp.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 hover:text-primary transition-colors"
              >
                <Linkedin className="h-4 w-4" />
                LinkedIn
              </a>
            )}
            {exp.instagram && (
              <a
                href={exp.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 hover:text-primary transition-colors"
              >
                <Instagram className="h-4 w-4" />
                Instagram
              </a>
            )}
            {exp.github && (
              <a
                href={exp.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 hover:text-primary transition-colors"
              >
                <Github className="h-4 w-4" />
                GitHub
              </a>
            )}
          </div>
        </header>

        {/* Description */}
        <section className="mb-10">
          <h2 className="text-lg font-semibold text-foreground mb-3">Overview</h2>
          <p className="text-muted-foreground leading-relaxed">{exp.description}</p>
        </section>

        {/* Responsibilities */}
        {exp.responsibilities && exp.responsibilities.length > 0 && (
          <section className="mb-10">
            <h2 className="text-lg font-semibold text-foreground mb-4">Key Responsibilities</h2>
            <ul className="space-y-3">
              {exp.responsibilities.map((resp, index) => (
                <li key={index} className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                  <span className="text-muted-foreground leading-relaxed">{resp}</span>
                </li>
              ))}
            </ul>
          </section>
        )}

        {/* Skills */}
        {exp.skills && exp.skills.length > 0 && (
          <section className="mb-10">
            <h2 className="text-lg font-semibold text-foreground mb-4">Skills & Technologies</h2>
            <div className="flex flex-wrap gap-2">
              {exp.skills.map((skill, index) => (
                <Badge key={index} variant="secondary" className="text-sm">
                  {skill}
                </Badge>
              ))}
            </div>
          </section>
        )}

        {/* Project Built */}
        {exp.project_slug && (() => {
          const project = projects.find((p) => p.slug === exp.project_slug);
          if (!project) return null;
          return (
            <section className="mb-10">
              <h2 className="text-lg font-semibold text-foreground mb-4">Project Built</h2>
              <Link
                href={`/projects/${project.slug}`}
                className="group block p-4 rounded-xl border border-border bg-muted/30 hover:bg-muted/50 hover:border-primary/50 transition-all"
              >
                <div className="flex items-center gap-4">
                  {project.image && (
                    <div className="shrink-0 w-12 h-12 rounded-lg bg-muted flex items-center justify-center overflow-hidden border border-border">
                      <img
                        src={project.image}
                        alt={`${project.title} logo`}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  )}
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2">
                      <Rocket className="h-4 w-4 text-primary" />
                      <span className="font-semibold text-foreground group-hover:text-primary transition-colors">
                        {project.title}
                      </span>
                    </div>
                    <p className="text-sm text-muted-foreground mt-1 line-clamp-2">
                      {project.description}
                    </p>
                  </div>
                  <ExternalLink className="h-4 w-4 text-muted-foreground group-hover:text-primary transition-colors shrink-0" />
                </div>
              </Link>
            </section>
          );
        })()}

        {/* Back Button */}
        <div className="pt-6 border-t border-border">
          <Button variant="outline" asChild>
            <Link href="/#experience" className="gap-2">
              <ArrowLeft className="h-4 w-4" />
              Back to All Experiences
            </Link>
          </Button>
        </div>
      </div>
    </main>
  );
}

import { notFound } from 'next/navigation';
import Link from 'next/link';
import { projects } from '@/data';
import { cn } from '@/lib/utils';
import { ArrowLeft, ExternalLink, CheckCircle2, Github, Rocket, Users } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { thirdFont } from '@/app/fonts';

interface ProjectPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) return { title: 'Project Not Found' };
  return {
    title: `${project.title} — Project`,
    description: project.description,
  };
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-background">
      <div className="max-w-4xl mx-auto px-4 md:px-8 py-12 md:py-16">
        <Link
          href="/#work"
          className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-8"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to Portfolio
        </Link>

        <header className="mb-10">
          <div className="flex items-start gap-4 mb-4">
            {project.image && (
              <div className="shrink-0 w-16 h-16 rounded-xl bg-muted flex items-center justify-center overflow-hidden border border-border">
                <img
                  src={project.image}
                  alt={`${project.title} logo`}
                  className="w-full h-full object-cover"
                />
              </div>
            )}
            <div className="flex-1 min-w-0">
              <h1 className={cn('text-2xl md:text-3xl font-bold text-foreground mb-1', thirdFont.className)}>
                {project.title}
              </h1>
              {project.tags && project.tags.length > 0 && (
                <div className="flex flex-wrap gap-1.5 mt-2">
                  {project.tags.slice(0, 4).map((tag, index) => (
                    <Badge key={index} variant="outline" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>
              )}
            </div>
          </div>

          <div className="flex flex-wrap gap-3 mt-4">
            {project.link && (
              <Button asChild size="sm">
                <a href={project.link} target="_blank" rel="noopener noreferrer">
                  <Rocket className="h-4 w-4 mr-2" />
                  Live Demo
                  <ExternalLink className="h-3 w-3 ml-1" />
                </a>
              </Button>
            )}
            {project.github && (
              <Button variant="outline" asChild size="sm">
                <a href={project.github} target="_blank" rel="noopener noreferrer">
                  <Github className="h-4 w-4 mr-2" />
                  View Source
                </a>
              </Button>
            )}
          </div>
        </header>

        <section className="mb-10">
          <h2 className="text-lg font-semibold text-foreground mb-3">Overview</h2>
          <p className="text-muted-foreground leading-relaxed">
            {project.long_description || project.description}
          </p>
        </section>

        {project.features && project.features.length > 0 && (
          <section className="mb-10">
            <h2 className="text-lg font-semibold text-foreground mb-4">Key Features</h2>
            <ul className="space-y-3">
              {project.features.map((feature, index) => (
                <li key={index} className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                  <span className="text-muted-foreground leading-relaxed">{feature}</span>
                </li>
              ))}
            </ul>
          </section>
        )}

        {project.technologies && project.technologies.length > 0 && (
          <section className="mb-10">
            <h2 className="text-lg font-semibold text-foreground mb-4">Technologies Used</h2>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech, index) => (
                <Badge key={index} variant="secondary" className="text-sm">
                  {tech}
                </Badge>
              ))}
            </div>
          </section>
        )}

        {project.team && project.team.length > 0 && (
          <section className="mb-10">
            <h2 className="text-lg font-semibold text-foreground mb-4">Team</h2>
            <div className="flex flex-wrap gap-3">
              {project.team.map((member, index) => (
                <div key={index} className="flex items-center gap-2">
                  {member.github ? (
                    <a
                      href={member.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-muted hover:bg-muted/80 border border-border hover:border-primary/50 transition-all group"
                    >
                      <Users className="h-4 w-4 text-muted-foreground group-hover:text-primary transition-colors" />
                      <span className="text-sm font-medium text-foreground group-hover:text-primary transition-colors">
                        {member.name}
                      </span>
                      {member.role && (
                        <span className="text-xs text-muted-foreground">({member.role})</span>
                      )}
                      <Github className="h-3.5 w-3.5 text-muted-foreground group-hover:text-primary transition-colors" />
                    </a>
                  ) : (
                    <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-muted border border-border">
                      <Users className="h-4 w-4 text-muted-foreground" />
                      <span className="text-sm font-medium text-foreground">{member.name}</span>
                      {member.role && (
                        <span className="text-xs text-muted-foreground">({member.role})</span>
                      )}
                    </span>
                  )}
                </div>
              ))}
            </div>
          </section>
        )}

        {project.screenshots && project.screenshots.length > 0 && (
          <section className="mb-10">
            <h2 className="text-lg font-semibold text-foreground mb-4">Screenshots</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {project.screenshots.map((screenshot, index) => (
                <div key={index} className="rounded-lg overflow-hidden border border-border">
                  <img
                    src={screenshot}
                    alt={`${project.title} screenshot ${index + 1}`}
                    className="w-full h-auto"
                  />
                </div>
              ))}
            </div>
          </section>
        )}

        <div className="pt-6 border-t border-border">
          <Button variant="outline" asChild>
            <Link href="/#work" className="gap-2">
              <ArrowLeft className="h-4 w-4" />
              Back to All Projects
            </Link>
          </Button>
        </div>
      </div>
    </main>
  );
}

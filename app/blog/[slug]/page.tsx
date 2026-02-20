import { notFound } from 'next/navigation';
import Link from 'next/link';
import { client, postBySlugQuery, postSlugsQuery, urlFor } from '@/lib/sanity';
import { cn } from '@/lib/utils';
import { ArrowLeft, Calendar, Clock, Tag, ExternalLink } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { thirdFont } from '@/app/fonts';
import { PortableText, type PortableTextComponents } from '@portabletext/react';

export const revalidate = 60;

interface BlogPostPageProps {
  params: Promise<{ slug: string }>;
}

interface SanityPost {
  _id: string;
  title: string;
  slug: string;
  excerpt: string;
  coverImage?: {
    asset: {
      _ref: string;
    };
  };
  content: any[];
  publishedAt: string;
  readTime?: string;
  category?: string;
  tags?: string[];
  links?: { title: string; url: string }[];
}

async function getPost(slug: string): Promise<SanityPost | null> {
  return client.fetch(postBySlugQuery, { slug });
}

async function getPostSlugs(): Promise<string[]> {
  return client.fetch(postSlugsQuery);
}

export async function generateStaticParams() {
  const slugs = await getPostSlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = await getPost(slug);
  if (!post) return { title: 'Post Not Found' };
  return {
    title: `${post.title} — Blog`,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      images: post.coverImage ? [urlFor(post.coverImage).width(1200).height(630).url()] : [],
    },
  };
}

const portableTextComponents: PortableTextComponents = {
  types: {
    image: ({ value }) => (
      <div className="my-8 rounded-lg overflow-hidden border border-border">
        <img
          src={urlFor(value).width(800).url()}
          alt={value.alt || 'Blog image'}
          className="w-full h-auto"
        />
      </div>
    ),
  },
  block: {
    h1: ({ children }) => (
      <h1 className="text-2xl font-bold text-foreground mt-8 mb-4">{children}</h1>
    ),
    h2: ({ children }) => (
      <h2 className="text-xl font-semibold text-foreground mt-8 mb-4">{children}</h2>
    ),
    h3: ({ children }) => (
      <h3 className="text-lg font-semibold text-foreground mt-6 mb-3">{children}</h3>
    ),
    normal: ({ children }) => (
      <p className="text-muted-foreground leading-relaxed mb-4">{children}</p>
    ),
    blockquote: ({ children }) => (
      <blockquote className="border-l-4 border-primary pl-4 my-6 italic text-muted-foreground">
        {children}
      </blockquote>
    ),
  },
  marks: {
    strong: ({ children }) => <strong className="font-semibold text-foreground">{children}</strong>,
    em: ({ children }) => <em>{children}</em>,
    code: ({ children }) => (
      <code className="px-1.5 py-0.5 rounded bg-muted text-sm font-mono">{children}</code>
    ),
    link: ({ children, value }) => (
      <a
        href={value?.href}
        target="_blank"
        rel="noopener noreferrer"
        className="text-primary hover:underline"
      >
        {children}
      </a>
    ),
  },
  list: {
    bullet: ({ children }) => <ul className="list-disc ml-6 mb-4 space-y-2">{children}</ul>,
    number: ({ children }) => <ol className="list-decimal ml-6 mb-4 space-y-2">{children}</ol>,
  },
  listItem: {
    bullet: ({ children }) => <li className="text-muted-foreground">{children}</li>,
    number: ({ children }) => <li className="text-muted-foreground">{children}</li>,
  },
};

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = await getPost(slug);

  if (!post) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-background">
      <article className="max-w-3xl mx-auto px-4 md:px-8 py-12 md:py-16">
        <Link
          href="/blog"
          className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-8"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to Blog
        </Link>

        <header className="mb-10">
          {post.coverImage && (
            <div className="w-full h-64 md:h-80 rounded-xl overflow-hidden mb-8 bg-muted">
              <img
                src={urlFor(post.coverImage).width(1200).height(600).url()}
                alt={post.title}
                className="w-full h-full object-cover"
              />
            </div>
          )}

          <div className="flex flex-wrap items-center gap-3 text-sm text-muted-foreground mb-4">
            <span className="inline-flex items-center gap-1.5">
              <Calendar className="h-4 w-4" />
              {new Date(post.publishedAt).toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric',
              })}
            </span>
            {post.readTime && (
              <span className="inline-flex items-center gap-1.5">
                <Clock className="h-4 w-4" />
                {post.readTime}
              </span>
            )}
            {post.category && (
              <Badge variant="secondary">{post.category}</Badge>
            )}
          </div>

          <h1 className={cn('text-3xl md:text-4xl font-bold text-foreground mb-4', thirdFont.className)}>
            {post.title}
          </h1>

          <p className="text-lg text-muted-foreground leading-relaxed">
            {post.excerpt}
          </p>

          {post.tags && post.tags.length > 0 && (
            <div className="flex flex-wrap gap-2 mt-6">
              {post.tags.map((tag) => (
                <Badge key={tag} variant="outline" className="text-sm">
                  <Tag className="h-3 w-3 mr-1" />
                  {tag}
                </Badge>
              ))}
            </div>
          )}
        </header>

        <div className="border-t border-border pt-10">
          {post.content && (
            <PortableText value={post.content} components={portableTextComponents} />
          )}
        </div>

        {post.links && post.links.length > 0 && (
          <section className="mt-10 pt-10 border-t border-border">
            <h2 className="text-lg font-semibold text-foreground mb-4">Related Links</h2>
            <div className="flex flex-wrap gap-3">
              {post.links.map((link, index) => (
                <Button key={index} variant="outline" asChild size="sm">
                  <a href={link.url} target="_blank" rel="noopener noreferrer">
                    {link.title}
                    <ExternalLink className="h-3.5 w-3.5 ml-2" />
                  </a>
                </Button>
              ))}
            </div>
          </section>
        )}

        <footer className="mt-12 pt-8 border-t border-border">
          <Button variant="outline" asChild>
            <Link href="/blog" className="gap-2">
              <ArrowLeft className="h-4 w-4" />
              Back to All Posts
            </Link>
          </Button>
        </footer>
      </article>
    </main>
  );
}

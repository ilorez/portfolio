import { notFound } from 'next/navigation';
import Link from 'next/link';
import { blogPosts } from '@/data';
import { cn } from '@/lib/utils';
import { ArrowLeft, Calendar, Clock, Tag, ExternalLink, Share2 } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { thirdFont } from '@/app/fonts';

interface BlogPostPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) return { title: 'Post Not Found' };
  return {
    title: `${post.title} — Blog`,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      images: post.cover_image ? [post.cover_image] : [],
    },
  };
}

function renderMarkdown(content: string) {
  let html = content;
  
  html = html.replace(/^### (.*$)/gim, '<h3 class="text-lg font-semibold text-foreground mt-6 mb-3">$1</h3>');
  html = html.replace(/^## (.*$)/gim, '<h2 class="text-xl font-semibold text-foreground mt-8 mb-4">$1</h2>');
  html = html.replace(/^# (.*$)/gim, '<h1 class="text-2xl font-bold text-foreground mt-8 mb-4">$1</h1>');
  
  html = html.replace(/\*\*(.*?)\*\*/g, '<strong class="font-semibold text-foreground">$1</strong>');
  html = html.replace(/\*(.*?)\*/g, '<em>$1</em>');
  html = html.replace(/`(.*?)`/g, '<code class="px-1.5 py-0.5 rounded bg-muted text-sm font-mono">$1</code>');
  
  html = html.replace(/^\d+\. (.*$)/gim, '<li class="ml-6 list-decimal text-muted-foreground leading-relaxed">$1</li>');
  html = html.replace(/^- (.*$)/gim, '<li class="ml-6 list-disc text-muted-foreground leading-relaxed">$1</li>');
  
  html = html.replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2" target="_blank" rel="noopener noreferrer" class="text-primary hover:underline">$1</a>');
  
  html = html.replace(/\n\n/g, '</p><p class="text-muted-foreground leading-relaxed mb-4">');
  html = `<p class="text-muted-foreground leading-relaxed mb-4">${html}</p>`;
  
  return html;
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);

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
          {post.cover_image && (
            <div className="w-full h-64 md:h-80 rounded-xl overflow-hidden mb-8 bg-muted">
              <img
                src={post.cover_image}
                alt={post.title}
                className="w-full h-full object-cover"
              />
            </div>
          )}

          <div className="flex flex-wrap items-center gap-3 text-sm text-muted-foreground mb-4">
            <span className="inline-flex items-center gap-1.5">
              <Calendar className="h-4 w-4" />
              {new Date(post.date).toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric',
              })}
            </span>
            {post.read_time && (
              <span className="inline-flex items-center gap-1.5">
                <Clock className="h-4 w-4" />
                {post.read_time}
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
          <div 
            className="prose prose-neutral dark:prose-invert max-w-none"
            dangerouslySetInnerHTML={{ __html: renderMarkdown(post.content) }}
          />
        </div>

        {post.images && post.images.length > 0 && (
          <section className="mt-10 pt-10 border-t border-border">
            <h2 className="text-lg font-semibold text-foreground mb-4">Images</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {post.images.map((image, index) => (
                <div key={index} className="rounded-lg overflow-hidden border border-border">
                  <img
                    src={image}
                    alt={`${post.title} image ${index + 1}`}
                    className="w-full h-auto"
                  />
                </div>
              ))}
            </div>
          </section>
        )}

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
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <Button variant="outline" asChild>
              <Link href="/blog" className="gap-2">
                <ArrowLeft className="h-4 w-4" />
                Back to All Posts
              </Link>
            </Button>
          </div>
        </footer>
      </article>
    </main>
  );
}

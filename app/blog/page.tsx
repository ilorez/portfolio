import Link from 'next/link';
import { client, postsQuery, urlFor } from '@/lib/sanity';
import { cn } from '@/lib/utils';
import { ArrowLeft, Calendar, Clock, Tag, ArrowRight } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { thirdFont } from '@/app/fonts';

export const metadata = {
  title: 'Blog — Posts & Articles',
  description: 'Read my latest blog posts about software development, technology, and my journey as a developer.',
};

export const revalidate = 60;

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
  publishedAt: string;
  readTime?: string;
  category?: string;
  tags?: string[];
}

async function getPosts(): Promise<SanityPost[]> {
  return client.fetch(postsQuery);
}

export default async function BlogPage() {
  const posts = await getPosts();

  return (
    <main className="min-h-screen bg-background">
      <div className="max-w-4xl mx-auto px-4 md:px-8 py-12 md:py-16">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-8"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to Portfolio
        </Link>

        <header className="mb-12">
          <h1 className={cn('text-3xl md:text-4xl font-bold text-foreground mb-4', thirdFont.className)}>
            Blog
          </h1>
          <p className="text-muted-foreground text-lg">
            Thoughts, tutorials, and updates from my journey as a developer.
          </p>
        </header>

        {posts.length === 0 ? (
          <div className="text-center py-16">
            <p className="text-muted-foreground text-lg">No posts yet. Check back soon!</p>
          </div>
        ) : (
          <div className="space-y-8">
            {posts.map((post) => (
              <article key={post._id} className="group">
                <Link href={`/blog/${post.slug}`} className="block">
                  <div className="p-6 rounded-xl border border-border bg-card hover:bg-muted/50 hover:border-primary/30 transition-all">
                    <div className="flex flex-col md:flex-row gap-6">
                      {post.coverImage && (
                        <div className="shrink-0 w-full md:w-48 h-32 rounded-lg overflow-hidden bg-muted">
                          <img
                            src={urlFor(post.coverImage).width(400).height(200).url()}
                            alt={post.title}
                            className="w-full h-full object-cover"
                          />
                        </div>
                      )}
                      <div className="flex-1 min-w-0">
                        <div className="flex flex-wrap items-center gap-3 text-xs text-muted-foreground mb-2">
                          <span className="inline-flex items-center gap-1">
                            <Calendar className="h-3.5 w-3.5" />
                            {new Date(post.publishedAt).toLocaleDateString('en-US', {
                              year: 'numeric',
                              month: 'short',
                              day: 'numeric',
                            })}
                          </span>
                          {post.readTime && (
                            <span className="inline-flex items-center gap-1">
                              <Clock className="h-3.5 w-3.5" />
                              {post.readTime}
                            </span>
                          )}
                          {post.category && (
                            <Badge variant="outline" className="text-xs">
                              {post.category}
                            </Badge>
                          )}
                        </div>

                        <h2 className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors mb-2">
                          {post.title}
                        </h2>

                        <p className="text-muted-foreground text-sm leading-relaxed line-clamp-2 mb-3">
                          {post.excerpt}
                        </p>

                        {post.tags && post.tags.length > 0 && (
                          <div className="flex flex-wrap gap-1.5">
                            {post.tags.slice(0, 3).map((tag) => (
                              <span
                                key={tag}
                                className="inline-flex items-center gap-1 text-xs text-muted-foreground"
                              >
                                <Tag className="h-3 w-3" />
                                {tag}
                              </span>
                            ))}
                          </div>
                        )}

                        <div className="mt-4 flex items-center gap-1 text-sm text-primary font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                          Read more
                          <ArrowRight className="h-4 w-4" />
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              </article>
            ))}
          </div>
        )}
      </div>
    </main>
  );
}

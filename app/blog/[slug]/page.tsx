import { notFound } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { client, postBySlugQuery, postSlugsQuery, urlFor } from '@/lib/sanity';
import { cn } from '@/lib/utils';
import { ArrowLeft, Calendar, Clock, Tag, ExternalLink } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { thirdFont } from '@/app/fonts';
import { PortableText, type PortableTextComponents } from '@portabletext/react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

export const revalidate = 60;

/** Slugify heading text for id attributes so #anchor links work (markdown-style). */
function slugify(text: string): string {
  return text
    .toLowerCase()
    .trim()
    .replace(/\s+/g, '-')
    .replace(/[^\w-]/g, '');
}

interface BlogPostPageProps {
  params: Promise<{ slug: string }>;
}

interface GalleryImage {
  asset: { _ref: string };
  caption?: string;
}

interface SanityPost {
  _id: string;
  title: string;
  slug: string;
  excerpt: string;
  coverImage?: { asset: { _ref: string } };
  gallery?: GalleryImage[];
  contentMarkdown?: string | null;
  content: any[];
  publishedAt: string;
  readTime?: string;
  category?: string;
  tags?: string[];
  links?: { title: string; url: string }[];
}

function ImageGallery({ images }: { images: GalleryImage[] }) {
  const count = images.length;
  if (count === 0) return null;

  const renderImage = (img: GalleryImage, index: number, size = 400) => (
    <img
      src={urlFor(img).width(size).height(size).url()}
      alt={img.caption || `Gallery image ${index + 1}`}
      className="w-full h-full object-cover"
    />
  );

  if (count === 1) {
    return (
      <div className="rounded-xl overflow-hidden border border-border">
        <img src={urlFor(images[0]).width(800).url()} alt={images[0].caption || 'Gallery image'} className="w-full h-auto" />
        {images[0].caption && <p className="text-sm text-muted-foreground p-3 bg-muted/30">{images[0].caption}</p>}
      </div>
    );
  }

  if (count === 3) {
    return (
      <div className="grid grid-cols-2 gap-1 rounded-xl overflow-hidden border border-border">
        <div className="row-span-2 overflow-hidden">
          <img src={urlFor(images[0]).width(400).height(800).url()} alt={images[0].caption || 'Gallery image 1'} className="w-full h-full object-cover" />
        </div>
        {images.slice(1).map((img, i) => (
          <div key={i} className="aspect-square overflow-hidden">{renderImage(img, i + 1)}</div>
        ))}
      </div>
    );
  }

  const visibleImages = images.slice(0, 4);
  const remainingCount = count > 4 ? count - 4 : 0;

  return (
    <div className="grid grid-cols-2 gap-1 rounded-xl overflow-hidden border border-border">
      {visibleImages.map((img, i) => (
        <div key={i} className="aspect-square overflow-hidden relative">
          {renderImage(img, i)}
          {i === 3 && remainingCount > 0 && (
            <div className="absolute inset-0 bg-black/60 flex items-center justify-center">
              <span className="text-white text-2xl font-bold">+{remainingCount}</span>
            </div>
          )}
        </div>
      ))}
    </div>
  );
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
    h1: ({ children, value }) => {
      const text = (value as { children?: { text?: string }[] })?.children?.map((c) => c.text ?? '').join('') ?? '';
      const id = text ? slugify(text) : undefined;
      return (
        <h1 id={id} className="text-2xl font-bold text-foreground mt-8 mb-4 scroll-mt-20">
          {children}
        </h1>
      );
    },
    h2: ({ children, value }) => {
      const text = (value as { children?: { text?: string }[] })?.children?.map((c) => c.text ?? '').join('') ?? '';
      const id = text ? slugify(text) : undefined;
      return (
        <h2 id={id} className="text-xl font-semibold text-foreground mt-8 mb-4 scroll-mt-20">
          {children}
        </h2>
      );
    },
    h3: ({ children, value }) => {
      const text = (value as { children?: { text?: string }[] })?.children?.map((c) => c.text ?? '').join('') ?? '';
      const id = text ? slugify(text) : undefined;
      return (
        <h3 id={id} className="text-lg font-semibold text-foreground mt-6 mb-3 scroll-mt-20">
          {children}
        </h3>
      );
    },
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
    link: ({ children, value }) => {
      const href = value?.href ?? '#';
      const isInternal = href.startsWith('/');
      const isAnchor = href.startsWith('#');
      if (isInternal) {
        return (
          <Link href={href} className="text-primary hover:underline">
            {children}
          </Link>
        );
      }
      if (isAnchor) {
        return (
          <a href={href} className="text-primary hover:underline">
            {children}
          </a>
        );
      }
      return (
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="text-primary hover:underline"
        >
          {children}
        </a>
      );
    },
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

function MarkdownLink({
  href,
  children,
}: {
  href?: string;
  children?: React.ReactNode;
}) {
  const url = href ?? '#';
  const isInternal = url.startsWith('/');
  const isAnchor = url.startsWith('#');
  if (isInternal) {
    return (
      <Link href={url} className="text-primary hover:underline">
        {children}
      </Link>
    );
  }
  if (isAnchor) {
    return (
      <a href={url} className="text-primary hover:underline">
        {children}
      </a>
    );
  }
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="text-primary hover:underline"
    >
      {children}
    </a>
  );
}

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

          {post.gallery && post.gallery.length > 0 && (
            <div className="mt-8">
              <ImageGallery images={post.gallery} />
            </div>
          )}

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

        <div className="border-t border-border pt-10 prose prose-invert max-w-none">
          {post.contentMarkdown?.trim() ? (
            <ReactMarkdown
              remarkPlugins={[remarkGfm]}
              components={{
                a: ({ href, children }) => <MarkdownLink href={href}>{children}</MarkdownLink>,
                h1: ({ node, children }) => {
                  const text = (node as { children?: { value?: string }[] })?.children?.map((c) => (c as { value?: string }).value ?? '').join('') ?? '';
                  const id = text ? slugify(text) : undefined;
                  return (
                    <h1 id={id} className="text-2xl font-bold text-foreground mt-8 mb-4 scroll-mt-20">
                      {children}
                    </h1>
                  );
                },
                h2: ({ node, children }) => {
                  const text = (node as { children?: { value?: string }[] })?.children?.map((c) => (c as { value?: string }).value ?? '').join('') ?? '';
                  const id = text ? slugify(text) : undefined;
                  return (
                    <h2 id={id} className="text-xl font-semibold text-foreground mt-8 mb-4 scroll-mt-20">
                      {children}
                    </h2>
                  );
                },
                h3: ({ node, children }) => {
                  const text = (node as { children?: { value?: string }[] })?.children?.map((c) => (c as { value?: string }).value ?? '').join('') ?? '';
                  const id = text ? slugify(text) : undefined;
                  return (
                    <h3 id={id} className="text-lg font-semibold text-foreground mt-6 mb-3 scroll-mt-20">
                      {children}
                    </h3>
                  );
                },
                p: ({ children }) => (
                  <p className="text-muted-foreground leading-relaxed mb-4">{children}</p>
                ),
                blockquote: ({ children }) => (
                  <blockquote className="border-l-4 border-primary pl-4 my-6 italic text-muted-foreground">
                    {children}
                  </blockquote>
                ),
                ul: ({ children }) => <ul className="list-disc ml-6 mb-4 space-y-2">{children}</ul>,
                ol: ({ children }) => <ol className="list-decimal ml-6 mb-4 space-y-2">{children}</ol>,
                li: ({ children }) => <li className="text-muted-foreground">{children}</li>,
                code: ({ children }) => (
                  <code className="px-1.5 py-0.5 rounded bg-muted text-sm font-mono">
                    {children}
                  </code>
                ),
                pre: ({ children }) => (
                  <pre className="my-4 p-4 rounded-lg bg-muted overflow-x-auto">{children}</pre>
                ),
              }}
            >
              {post.contentMarkdown}
            </ReactMarkdown>
          ) : (
            post.content && (
              <PortableText value={post.content} components={portableTextComponents} />
            )
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

        <footer className="mt-12 pt-8 border-t border-border flex items-center justify-between">
          <Button variant="outline" asChild>
            <Link href="/blog" className="gap-2">
              <ArrowLeft className="h-4 w-4" />
              All Posts
            </Link>
          </Button>
          <Image src="/cat_logo/sad.svg" alt="ilorez" width={32} height={32} className="opacity-50 hover:opacity-100 transition-opacity" />
        </footer>
      </article>
    </main>
  );
}

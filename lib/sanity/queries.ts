import { groq } from 'next-sanity';

export const postsQuery = groq`
  *[_type == "post"] | order(publishedAt desc) {
    _id,
    title,
    "slug": slug.current,
    excerpt,
    coverImage,
    publishedAt,
    readTime,
    tags,
    "category": category->title,
    links
  }
`;

export const postBySlugQuery = groq`
  *[_type == "post" && slug.current == $slug][0] {
    _id,
    title,
    "slug": slug.current,
    excerpt,
    coverImage,
    gallery[] {
      asset,
      caption
    },
    content,
    publishedAt,
    readTime,
    tags,
    "category": category->title,
    links
  }
`;

export const postSlugsQuery = groq`
  *[_type == "post" && defined(slug.current)][].slug.current
`;

export const categoriesQuery = groq`
  *[_type == "category"] {
    _id,
    title,
    "slug": slug.current,
    description
  }
`;

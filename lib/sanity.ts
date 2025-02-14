import { createClient } from 'next-sanity';

export const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
  apiVersion: '2024-02-12',
  useCdn: false,
});

export const blogQuery = `*[_type == "post"] {
  _id,
  title,
  slug,
  mainImage,
  publishedAt,
  excerpt,
  "author": author->name,
  "categories": categories[]->title
} | order(publishedAt desc)`;

export const singleBlogQuery = `*[_type == "post" && slug.current == $slug][0] {
  _id,
  title,
  slug,
  mainImage,
  publishedAt,
  body,
  "author": author->name,
  "categories": categories[]->title
}`;

export const latestBlogsQuery = `*[_type == "post"] {
  _id,
  title,
  "slug": slug.current,
  mainImage,
  publishedAt,
  excerpt,
  "author": author->name,
  "categories": categories[]->title
} | order(publishedAt desc)[0...3]`;

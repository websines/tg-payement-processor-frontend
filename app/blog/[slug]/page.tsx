import Image from 'next/image';
import Link from 'next/link';
import { client, singleBlogQuery } from '@/lib/sanity';
import { urlForImage } from '@/lib/image';
import { PortableText } from '@portabletext/react';
import { portableTextComponents } from '@/app/components/portable-text';
import { Navigation } from '@/app/components/Navigation';
import { PageProps } from '@/.next/types/app/layout';

export const revalidate = 60;

interface Props {
  params: {
    slug: string;
  };
}

const getImageUrl = (image: any) => {
  try {
    if (!image || !image.asset) {
      return null;
    }
    return urlForImage(image).url();
  } catch (error) {
    console.error('Error generating image URL:', error);
    return null;
  }
};

const getCategoryColor = (index: number) => {
  const colors = [
    'from-blue-400/20 to-blue-500/20 text-blue-400',
    'from-purple-400/20 to-purple-500/20 text-purple-400',
    'from-green-400/20 to-green-500/20 text-green-400',
    'from-yellow-400/20 to-yellow-500/20 text-yellow-400',
    'from-red-400/20 to-red-500/20 text-red-400',
    'from-indigo-400/20 to-indigo-500/20 text-indigo-400'
  ];
  return colors[index % colors.length];
};

export default async function BlogPost({ params }: PageProps) {
  const { slug } = await params;
  const post = await client.fetch(singleBlogQuery, { slug: slug });

  if (!post) {
    return <div>Post not found</div>;
  }

  const imageUrl = getImageUrl(post.mainImage);

  return (
    <>
      <Navigation />
      <article className="min-h-screen">
        {/* Hero section with image */}
        <div className="relative h-[70vh] bg-gradient-to-br from-gray-900 to-black">
          {imageUrl ? (
            <>
              <Image
                src={imageUrl}
                alt={post.title}
                fill
                className="object-cover opacity-60"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-transparent" />
            </>
          ) : (
            <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 to-gray-900" />
          )}
          
          {/* Overlay content */}
          <div className="absolute inset-0 flex items-center">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
              <div className="flex gap-2 justify-center mb-8 flex-wrap">
                {post.categories?.map((category: string, index: number) => (
                  <span
                    key={category}
                    className={`text-sm font-medium px-4 py-1.5 rounded-full bg-gradient-to-br ${getCategoryColor(index)} backdrop-blur-lg shadow-lg shadow-black/20`}
                  >
                    {category}
                  </span>
                ))}
              </div>
              <h1 className="text-4xl md:text-6xl font-bold mb-8 bg-gradient-to-br from-white via-blue-100 to-blue-400 bg-clip-text text-transparent [text-wrap:balance]">
                {post.title}
              </h1>
              <div className="flex items-center justify-center gap-4 text-gray-400 text-lg">
                <span className="font-medium">{post.author}</span>
                <span>•</span>
                <time>
                  {new Date(post.publishedAt).toLocaleDateString('en-US', {
                    month: 'long',
                    day: 'numeric',
                    year: 'numeric',
                  })}
                </time>
              </div>
            </div>
          </div>

          {/* Decorative elements */}
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-5" />
            <div className="absolute -bottom-px left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
          </div>
        </div>

        {/* Article content */}
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-b from-black to-gray-900" />
          <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl shadow-xl shadow-black/20 border border-white/10 p-8 md:p-16">
              <PortableText 
                value={post.body} 
                components={portableTextComponents}
              />
            </div>

            {/* Back to blog */}
            <div className="mt-16 text-center">
              <Link 
                href="/blog"
                className="inline-flex items-center text-gray-400 hover:text-white font-medium group"
              >
                <svg className="w-5 h-5 mr-2 transform transition-transform group-hover:-translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16l-4-4m0 0l4-4m-4 4h18" />
                </svg>
                Back to Blog
              </Link>
            </div>
          </div>
        </div>
      </article>
    </>
  );
}

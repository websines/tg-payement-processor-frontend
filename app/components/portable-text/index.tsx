import { PortableTextComponents } from '@portabletext/react';
import Image from 'next/image';
import Link from 'next/link';
import { urlForImage } from '@/lib/image';

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

export const portableTextComponents: PortableTextComponents = {
  block: {
    h1: ({ children }) => (
      <h1 className="text-4xl font-bold mb-6 bg-gradient-to-br from-white via-blue-100 to-blue-400 bg-clip-text text-transparent">
        {children}
      </h1>
    ),
    h2: ({ children }) => (
      <h2 className="text-3xl font-bold mb-4 bg-gradient-to-br from-white via-blue-100 to-blue-400 bg-clip-text text-transparent">
        {children}
      </h2>
    ),
    h3: ({ children }) => (
      <h3 className="text-2xl font-bold mb-4 bg-gradient-to-br from-white via-blue-100 to-blue-400 bg-clip-text text-transparent">
        {children}
      </h3>
    ),
    normal: ({ children }) => (
      <p className="mb-6 text-gray-300 leading-relaxed">
        {children}
      </p>
    ),
    blockquote: ({ children }) => (
      <blockquote className="border-l-4 border-blue-500 pl-4 my-6 italic text-gray-300 bg-white/5 p-4 rounded-r-lg">
        {children}
      </blockquote>
    ),
  },
  list: {
    bullet: ({ children }) => (
      <ul className="mb-6 ml-6 space-y-2 text-gray-300 list-disc marker:text-blue-400">
        {children}
      </ul>
    ),
    number: ({ children }) => (
      <ol className="mb-6 ml-6 space-y-2 text-gray-300 list-decimal marker:text-blue-400">
        {children}
      </ol>
    ),
  },
  marks: {
    link: ({ children, value }) => {
      const rel = !value.href.startsWith('/') ? 'noopener noreferrer' : undefined;
      return (
        <Link 
          href={value.href} 
          rel={rel}
          className="text-blue-400 hover:text-blue-300 underline underline-offset-2 transition-colors"
        >
          {children}
        </Link>
      );
    },
    strong: ({ children }) => (
      <strong className="font-bold text-white">
        {children}
      </strong>
    ),
    em: ({ children }) => (
      <em className="italic text-gray-200">
        {children}
      </em>
    ),
    code: ({ children }) => (
      <code className="font-mono text-sm bg-white/5 rounded px-1.5 py-0.5 text-gray-200">
        {children}
      </code>
    ),
  },
  types: {
    image: ({ value }) => {
      const imageUrl = getImageUrl(value);
      if (!imageUrl) {
        return null;
      }
      return (
        <div className="relative my-8 rounded-xl overflow-hidden bg-gray-900">
          <div className="aspect-video relative">
            <Image
              src={imageUrl}
              alt={value.alt || ''}
              fill
              className="object-cover"
            />
          </div>
          {value.caption && (
            <div className="p-4 bg-white/5 text-sm text-gray-400 text-center">
              {value.caption}
            </div>
          )}
        </div>
      );
    },
    callout: ({ value }) => {
      return (
        <div className="my-8 rounded-xl overflow-hidden bg-white/5 border border-white/10 backdrop-blur-sm">
          <div className="p-6">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center text-white">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h4 className="text-lg font-semibold text-white">Note</h4>
            </div>
            <div className="text-gray-300 prose-sm">
              {value.text}
            </div>
          </div>
        </div>
      );
    },
  },
};

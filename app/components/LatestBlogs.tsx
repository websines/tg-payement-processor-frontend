import Link from 'next/link';
import Image from 'next/image';
import { client, latestBlogsQuery } from '@/lib/sanity';
import { urlForImage } from '@/lib/image';

interface Post {
  _id: string;
  title: string;
  slug: string;
  mainImage: any;
  categories: string[];
  publishedAt: string;
  excerpt: string;
  author: string;
}

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

export async function LatestBlogs() {
  const posts = await client.fetch<Post[]>(latestBlogsQuery);

  if (!posts || posts.length === 0) {
    return null;
  }

  return (
    <div className="py-24 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-5" />
        <div className="absolute top-1/2 left-1/2 w-[800px] h-[800px] -translate-x-1/2 -translate-y-1/2 bg-blue-500/10 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-br from-white via-blue-100 to-blue-400 bg-clip-text text-transparent">
            Latest Insights
          </h2>
          <p className="text-lg text-gray-400">
            Stay updated with the latest trends and insights in payment processing.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post) => (
            <Link 
              key={post._id} 
              href={`/blog/${post.slug}`}
              className="group relative"
            >
              {/* Card */}
              <div className="relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl overflow-hidden transition-all duration-300 hover:bg-white/10">
                {/* Image */}
                <div className="relative h-48 md:h-56 lg:h-64">
                  {post.mainImage ? (
                    <Image
                      src={urlForImage(post.mainImage).url()}
                      alt={post.title}
                      fill
                      className="object-cover transition-all duration-500 group-hover:scale-105"
                    />
                  ) : (
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-500/20" />
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                </div>

                {/* Content */}
                <div className="p-6">
                  {/* Categories */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {post.categories?.map((category, index) => (
                      <span
                        key={category}
                        className={`text-xs font-medium px-2.5 py-1 rounded-full bg-gradient-to-br ${getCategoryColor(index)} backdrop-blur-lg`}
                      >
                        {category}
                      </span>
                    ))}
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-semibold mb-3 text-white group-hover:text-blue-400 transition-colors">
                    {post.title}
                  </h3>

                  {/* Excerpt */}
                  <p className="text-gray-400 mb-4 line-clamp-2">
                    {post.excerpt}
                  </p>

                  {/* Meta */}
                  <div className="flex items-center justify-between text-sm text-gray-500">
                    <span>{post.author}</span>
                    <time>
                      {new Date(post.publishedAt).toLocaleDateString('en-US', {
                        month: 'long',
                        day: 'numeric',
                        year: 'numeric',
                      })}
                    </time>
                  </div>
                </div>

                {/* Hover effect */}
                <div className="absolute inset-0 border-2 border-blue-400/0 rounded-2xl transition-all duration-300 group-hover:border-blue-400/50" />
              </div>
            </Link>
          ))}
        </div>

        {/* View all blogs link */}
        <div className="mt-12 text-center">
          <Link 
            href="/blog" 
            className="inline-flex items-center text-gray-400 hover:text-white font-medium group"
          >
            View All Articles
            <svg className="w-5 h-5 ml-2 transform transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </Link>
        </div>
      </div>
    </div>
  );
}

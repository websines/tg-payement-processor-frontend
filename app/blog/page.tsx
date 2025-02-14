import { client, blogQuery } from '@/lib/sanity';
import { BlogList } from '../components/BlogList';
import { Navigation } from '../components/Navigation';

export const revalidate = 60;

export default async function BlogPage() {
  const posts = await client.fetch(blogQuery);

  return (
    <>
      <Navigation />
      <div className="pt-20 min-h-screen">
        {/* Header section */}
        <div className="relative py-24 overflow-hidden bg-gradient-to-b from-black to-gray-900">
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-5" />
            <div className="absolute top-0 left-1/2 w-[800px] h-[800px] -translate-x-1/2 -translate-y-1/2 bg-blue-500/10 rounded-full blur-3xl" />
            <div className="absolute bottom-0 right-0 w-[600px] h-[600px] translate-x-1/2 translate-y-1/2 bg-blue-500/10 rounded-full blur-3xl" />
          </div>

          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto">
              <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-br from-white via-blue-100 to-blue-500 bg-clip-text text-transparent">
                Latest Blog Posts
              </h1>
              <p className="text-xl text-gray-400 [text-wrap:balance]">
                Stay updated with the latest insights about payment processing, high-risk merchant accounts, and industry trends.
              </p>
            </div>
          </div>
        </div>

        {/* Blog posts grid */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <BlogList posts={posts} />
        </div>
      </div>
    </>
  );
}

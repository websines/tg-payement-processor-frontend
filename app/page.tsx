import { Hero } from './components/Hero';
import { Features } from './components/Features';
import { Benefits } from './components/Benefits';
import { LatestBlogs } from './components/LatestBlogs';
import { CTA } from './components/CTA';
import { Navigation } from './components/Navigation';

export default function Home() {
  return (
    <div className="min-h-screen pt-16 ">
      <Navigation />
      <Hero />
      <Features />
      <Benefits />
      <LatestBlogs />
      <CTA />
    </div>
  );
}
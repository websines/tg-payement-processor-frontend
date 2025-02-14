import { Button } from './Button';

export function CTA() {
  return (
    <div className="py-24 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-5" />
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-transparent to-purple-500/10" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative">
          {/* Glass card */}
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 md:p-16 text-center">
            {/* Content */}
            <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-br from-white via-blue-100 to-blue-400 bg-clip-text text-transparent">
              Ready to Find Your Perfect Payment Processor?
            </h2>
            <p className="text-lg text-gray-400 mb-8 max-w-2xl mx-auto">
              Join thousands of businesses who have found their ideal payment processing solution through our AI-powered platform.
            </p>

            {/* Action buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button size="lg">
                Get Started
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </Button>
              <Button variant="outline" size="lg">
                Learn More
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </Button>
            </div>

            {/* Decorative corners */}
            <div className="absolute top-0 left-0 w-24 h-24 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-blue-600/20 transform -rotate-45 -translate-x-12 -translate-y-12" />
            </div>
            <div className="absolute bottom-0 right-0 w-24 h-24 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-purple-600/20 transform -rotate-45 translate-x-12 translate-y-12" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

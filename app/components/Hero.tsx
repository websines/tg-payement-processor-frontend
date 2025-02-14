import { Button } from './Button';

export function Hero() {
  return (
    <div className="relative pt-20 pb-20 md:pt-32 md:pb-32 overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-5" />
        <div className="absolute top-1/2 left-1/2 w-[800px] h-[800px] -translate-x-1/2 -translate-y-1/2 bg-blue-500/10 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          {/* Main heading */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-8 [text-wrap:balance] bg-gradient-to-br from-white via-blue-100 to-blue-400 bg-clip-text text-transparent">
            Get Matched & Approved for a Payment Processor—With Our Help!
          </h1>
          
          {/* Subheading */}
          <p className="text-xl md:text-2xl text-gray-400 mb-8 max-w-3xl mx-auto [text-wrap:balance]">
            AI-powered matching + expert assistance to get your business approved faster.
          </p>

          {/* Key benefits */}
          <div className="flex flex-col gap-3 mb-12 text-lg text-gray-300">
            <p>✅ We don't just recommend—we help you through the process.</p>
            <p>✅ Need help after applying? We'll guide you every step of the way.</p>
          </div>

          {/* CTA buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
            <Button size="lg">
            <a href="https://t.me/processormatch_bot" target="_blank">
                    Apply as a Merchant
                  </a>
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Button>
            <Button variant="outline" size="lg">
            <a href="https://t.me/processormatch_bot" target="_blank">
                    Apply as a Processor
                  </a>
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </Button>
          </div>

          {/* Trust badges */}
          <div className="flex flex-wrap items-center justify-center gap-6">
            {[
              'Full Application Support',
              'AI-Powered Matching',
              'Ongoing Assistance',
              'Document Help'
            ].map((badge) => (
              <div 
                key={badge}
                className="flex items-center space-x-2 px-4 py-2 rounded-xl bg-white/5 border border-white/10 backdrop-blur-sm hover:bg-white/10 transition-colors"
              >
                <svg className="w-5 h-5 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-sm font-medium text-gray-300">{badge}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

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
              Not Approved? We've Got You Covered!
            </h2>
            <p className="text-lg text-gray-400 mb-8 max-w-2xl mx-auto">
              Getting rejected is frustrating, but we don't leave you hanging. We keep searching and notify you when new opportunities arise.
            </p>

            {/* Benefits list */}
            <div className="flex flex-col gap-4 mb-12 max-w-2xl mx-auto text-left">
              <div className="flex items-start gap-3">
                <svg className="w-6 h-6 text-blue-400 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <p className="text-gray-400">We keep your profile in our system & update you on new partnerships</p>
              </div>
              <div className="flex items-start gap-3">
                <svg className="w-6 h-6 text-blue-400 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <p className="text-gray-400">We notify you when there's a higher chance of approval with new processors</p>
              </div>
              <div className="flex items-start gap-3">
                <svg className="w-6 h-6 text-blue-400 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <p className="text-gray-400">You'll be the first to know about better payment solutions through our email updates</p>
              </div>
            </div>

            {/* Action buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button size="lg" >
              <a href="https://form.jotform.com/250494790580060" target="_blank">
                    Apply Now
                  </a>
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </Button>
              <Button variant="outline" size="lg">
                Join Our Email List
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
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

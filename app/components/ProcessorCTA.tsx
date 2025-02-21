import { Button } from './Button';

export function ProcessorCTA() {
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
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 md:p-16">
            {/* Content */}
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-br from-white via-blue-100 to-blue-400 bg-clip-text text-transparent">
                Looking for Pre-Qualified Merchants?
              </h2>
              <p className="text-lg text-gray-400 mb-8">
                We don't just send leads, we assist merchants with the application process, making it easier for processors to approve and onboard them.
              </p>

              {/* Benefits list */}
              <div className="flex flex-col gap-4 mb-12 text-left">
                <div className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-blue-400 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <p className="text-gray-400">We vet and guide merchants before they apply</p>
                </div>
                <div className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-blue-400 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <p className="text-gray-400">We help merchants submit proper documents for a smoother approval process</p>
                </div>
                <div className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-blue-400 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <p className="text-gray-400">We send only serious applicants ready to start processing</p>
                </div>
              </div>

              {/* Action button */}
              <div className="flex justify-center">
                <Button size="lg">
                <a href="https://form.jotform.com/250494790580060" target="_blank">
                    Apply Now
                  </a>
                  <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </Button>
              </div>
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

export function Benefits() {
  const benefits = [
    {
      title: 'Full Application Support',
      description: 'We do not just recommend—we assist you throughout the entire application process.',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
        </svg>
      ),
      gradient: 'from-blue-500/20 to-blue-600/20',
      iconGradient: 'from-blue-500 to-blue-600',
    },
    {
      title: 'Continuous Support',
      description: 'Not approved? We keep searching and notify you when new payment solutions become available.',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
        </svg>
      ),
      gradient: 'from-purple-500/20 to-purple-600/20',
      iconGradient: 'from-purple-500 to-purple-600',
    },
    {
      title: 'Stay Updated',
      description: 'Get exclusive updates about new payment solutions through our email notifications.',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      gradient: 'from-green-500/20 to-green-600/20',
      iconGradient: 'from-green-500 to-green-600',
    },
  ];

  return (
    <div className="py-24 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-5" />
        <div className="absolute top-0 right-1/2 w-[800px] h-[800px] translate-x-1/2 -translate-y-1/2 bg-blue-500/10 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-br from-white via-blue-100 to-blue-400 bg-clip-text text-transparent">
            Why Choose ProcessorMatch AI?
          </h2>
          <p className="text-lg text-gray-400">
            We're more than a matching service—we're your partner in securing payment processing.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {benefits.map((benefit) => (
            <div 
              key={benefit.title}
              className="relative group"
            >
              <div className={`bg-gradient-to-br ${benefit.gradient} absolute -inset-0.5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity blur`} />
              <div className="relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 transition-all duration-300 hover:bg-white/10">
                {/* Icon */}
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${benefit.iconGradient} flex items-center justify-center text-white shadow-lg mb-6`}>
                  {benefit.icon}
                </div>

                {/* Content */}
                <h3 className="text-xl font-semibold mb-3 text-white group-hover:text-blue-400 transition-colors">
                  {benefit.title}
                </h3>
                <p className="text-gray-400">
                  {benefit.description}
                </p>

                {/* Decorative corner */}
                <div className="absolute top-0 right-0 w-16 h-16 overflow-hidden rounded-tr-2xl">
                  <div className={`absolute inset-0 bg-gradient-to-br ${benefit.gradient} transform rotate-45 translate-x-8 -translate-y-8`} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

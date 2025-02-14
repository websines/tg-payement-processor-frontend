export function Benefits() {
  const benefits = [
    {
      title: 'Save Time',
      description: 'Stop spending hours researching payment processors. Get instant matches tailored to your needs.',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      gradient: 'from-blue-500/20 to-blue-600/20',
      iconGradient: 'from-blue-500 to-blue-600',
    },
    {
      title: 'Save Money',
      description: 'Find processors with the best rates and lowest fees for your specific business type.',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      gradient: 'from-purple-500/20 to-purple-600/20',
      iconGradient: 'from-purple-500 to-purple-600',
    },
    {
      title: 'Reduce Risk',
      description: 'Get matched with processors who specialize in your industry and understand your risks.',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
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
            Why Choose ProcessorMatch
          </h2>
          <p className="text-lg text-gray-400">
            Our AI-powered platform helps you find the perfect payment processor while saving time and money.
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

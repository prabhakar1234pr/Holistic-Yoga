"use client";

export default function HowItWorks() {
  const steps = [
    {
      number: "1",
      title: "Explore",
      description:
        "Browse our diverse class types and flexible schedules to find the perfect session that aligns with your goals.",
      icon: "🔍",
    },
    {
      number: "2",
      title: "Connect",
      description:
        "Reach out to us via WhatsApp for instant booking assistance or to get answers to any questions you may have.",
      icon: "💬",
    },
    {
      number: "3",
      title: "Flow",
      description:
        "Join your personalized online yoga session from anywhere in the world and embark on your journey to well-being.",
      icon: "🧘",
    },
  ];

  return (
    <section className="py-20 md:py-28 bg-white">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 md:space-y-16">
        <div className="text-center space-y-6 md:space-y-8">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-gray-900">
            Your Path to Inner Peace: How It Works
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
            Flexible packages are available, with sessions starting from affordable prices.
          </p>
        </div>

        <div className="relative grid w-full md:grid-cols-3 gap-10 md:gap-16">
          <div className="hidden md:block absolute top-20 left-1/3 right-1/3 h-1 bg-gradient-to-r from-emerald-300 via-purple-300 to-emerald-300" />

          {steps.map((step) => (
            <div key={step.number} className="relative w-full text-center">
              <div className="relative mx-auto mb-8 inline-flex items-center justify-center w-28 h-28 bg-gradient-to-br from-emerald-500 to-purple-600 rounded-full text-white text-5xl font-bold shadow-lg transform hover:scale-105 transition-transform duration-300">
                <span className="absolute">{step.icon}</span>
              </div>

              <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-2 w-14 h-14 bg-white rounded-full flex items-center justify-center border-4 border-emerald-500 text-emerald-600 font-bold text-2xl shadow-md">
                {step.number}
              </div>

              <h3 className="text-2xl font-serif font-bold text-gray-900 mb-4">
                {step.title}
              </h3>
              <p className="text-gray-600 leading-relaxed text-base md:text-lg">
                {step.description}
              </p>
            </div>
          ))}
        </div>

        <div className="text-center">
          <a
            href="https://wa.me/7718820274"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white px-10 py-5 text-lg font-semibold shadow-lg hover:shadow-xl transform hover:scale-[1.02] transition-all duration-300"
          >
            Start Your Journey Now
          </a>
        </div>
      </div>
    </section>
  );
}


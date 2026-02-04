"use client";

export default function Benefits() {
  const benefits = [
    {
      icon: "⏰",
      title: "Flexibility",
      description:
        "Schedule sessions that fit your global timezone and personal availability, making yoga accessible whenever you need it.",
    },
    {
      icon: "🌍",
      title: "Accessibility",
      description:
        "Practice from any location in the world, eliminating travel time and geographical barriers to your wellness journey.",
    },
    {
      icon: "🏠",
      title: "Comfort",
      description:
        "Learn and practice in the privacy and comfort of your own space, fostering a relaxed and focused environment.",
    },
    {
      icon: "💰",
      title: "Cost-Effective",
      description:
        "Enjoy significant savings with no studio fees, travel costs, or hidden expenses, making yoga more affordable.",
    },
  ];

  return (
    <section className="py-20 md:py-28 bg-white">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 md:space-y-16">
        <div className="text-center space-y-6 md:space-y-8">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-gray-900">
            The Benefits of Online Yoga
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
            Experience the convenience and flexibility of practicing yoga from anywhere in the world
          </p>
        </div>

        <div className="grid w-full items-start md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {benefits.map((benefit) => (
            <div
              key={benefit.title}
              className="w-full h-fit rounded-3xl border-2 border-gray-100 bg-gradient-to-br from-gray-50 to-white p-10 md:p-12 text-center shadow-sm hover:border-emerald-300 hover:shadow-lg transition-all duration-300"
            >
              <div className="text-4xl mb-5">{benefit.icon}</div>
              <h3 className="text-xl font-serif font-bold text-gray-900 mb-4">
                {benefit.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}


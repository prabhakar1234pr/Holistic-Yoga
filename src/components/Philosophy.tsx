"use client";

export default function Philosophy() {
  const features = [
    {
      icon: "🧘",
      title: "Tailored for You",
      description:
        "Customized sessions from beginner level to support you finding greater calm, strength and clarity.",
    },
    {
      icon: "🌿",
      title: "Holistic Approach",
      description:
        "Emphasizing mind-body connection for complete well-being and inner harmony.",
    },
    {
      icon: "💚",
      title: "Compassionate Guidance",
      description:
        "Certified instructors with a mission to empower and transform individuals with practical tools and insights that you can carry off the mat and into your daily life.",
    },
  ];

  return (
    <section className="py-20 md:py-28 bg-white">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 md:space-y-16">
        <div className="text-center space-y-6 md:space-y-8">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-emerald-950">
            Embrace Your Journey
            <span className="block text-emerald-700 mt-2">Our Philosophy</span>
          </h2>
          <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            At Holistic Yoga, we believe in tailoring yoga for all levels and goals, focusing on a holistic mind-body connection. Our small class sizes ensure personalized attention, guided by certified instructors.
          </p>
        </div>

        <div className="grid w-full items-start md:grid-cols-3 gap-8 md:gap-10">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="w-full h-fit rounded-3xl border border-emerald-100 bg-gradient-to-br from-emerald-50 to-white p-10 md:p-12 text-center shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
            >
              <div className="text-5xl mb-5">{feature.icon}</div>
              <h3 className="text-2xl font-serif font-bold text-gray-900 mb-4">
                {feature.title}
              </h3>
              <p className="text-gray-600 leading-relaxed text-base md:text-lg">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}


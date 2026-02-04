"use client";

export default function Offerings() {
  const offerings = [
    {
      title: "Private 1:1 Sessions",
      description:
        "Customized Hatha and Krishnamacharya flows for individual progress. Perfect for personalized attention and tailored practice.",
      icon: "✨",
      color: "from-emerald-500 to-teal-600",
    },
    {
      title: "Group Classes",
      description:
        "Weekly schedules for deeply relaxing Restorative Yoga. Connect with a community while finding your inner peace.",
      icon: "🌙",
      color: "from-purple-500 to-indigo-600",
    },
    {
      title: "Prenatal & Postnatal",
      description:
        "Customized Yoga sessions during Pregnancy for a healthier delivery and better recovery after the postpartum via Postnatal sessions.",
      icon: "🤱",
      color: "from-pink-500 to-rose-600",
    },
  ];

  return (
    <section
      id="offerings"
      className="py-20 md:py-28 bg-gradient-to-b from-white to-emerald-50"
    >
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 md:space-y-16">
        <div className="text-center space-y-6 md:space-y-8">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-gray-900">
            Our Diverse Yoga Offerings
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Explore our comprehensive range of online yoga classes designed to fit your unique needs and schedule.
            <br className="hidden md:block" />
            All sessions are conveniently accessible via Zoom, Google Meet, or your preferred online platform.
          </p>
        </div>

        <div className="grid w-full items-start md:grid-cols-3 gap-8 md:gap-10">
          {offerings.map((offering) => (
            <div
              key={offering.title}
              className="group relative w-full overflow-hidden rounded-3xl bg-white shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2"
            >
              <div
                className={`absolute inset-0 bg-gradient-to-br ${offering.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
              />
              <div className="relative p-10 md:p-12">
                <div className="text-5xl mb-6 transform group-hover:scale-110 transition-transform duration-300">
                  {offering.icon}
                </div>
                <h3 className="text-2xl font-serif font-bold text-gray-900 mb-4 group-hover:text-white transition-colors duration-300">
                  {offering.title}
                </h3>
                <p className="text-gray-600 leading-relaxed text-base md:text-lg group-hover:text-white/90 transition-colors duration-300">
                  {offering.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}


import { Card } from "@/components/ui/card";

export default function Benefits() {
  const benefits = [
    {
      icon: "⏰",
      title: "Flexibility",
      description: "Times that fit your timezone and routine.",
    },
    {
      icon: "🌍",
      title: "Accessibility",
      description: "Practice anywhere—no commute, no barriers.",
    },
    {
      icon: "🏠",
      title: "Comfort",
      description: "Your space, your pace, your focus.",
    },
    {
      icon: "💰",
      title: "Cost-Effective",
      description: "No studio fees or travel costs.",
    },
  ];

  return (
    <section className="py-14 sm:py-16 md:py-28 bg-white">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 md:space-y-16">
        <div className="text-center space-y-6 md:space-y-8">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-gray-900">
            Why Online Yoga Works
          </h2>
          <div className="flex justify-center">
            <p className="text-lg sm:text-xl text-gray-600 max-w-xl mx-auto text-center">
              Real guidance. More flexibility.
            </p>
          </div>
        </div>

        <div className="grid w-full items-start md:grid-cols-2 gap-6 md:gap-8">
          {benefits.map((benefit, index) => (
            <Card
              key={index}
              className="w-full h-fit rounded-3xl p-7 sm:p-8 md:p-10 bg-gradient-to-br from-gray-50 to-white border-2 border-gray-100 hover:border-emerald-300 hover:shadow-lg transition-all duration-300"
            >
              <div className="flex items-start gap-5 md:gap-6">
                <div className="shrink-0 rounded-2xl bg-white/70 ring-1 ring-gray-100 px-4 py-3 text-3xl shadow-sm">
                  {benefit.icon}
                </div>

                <div className="min-w-0 text-left">
                  <h3 className="text-xl font-serif font-bold text-gray-900">
                    {benefit.title}
                  </h3>
                  <p className="mt-2 text-gray-600 leading-relaxed">
                    {benefit.description}
                  </p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

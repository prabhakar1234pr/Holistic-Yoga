import { Card } from "@/components/ui/card";
import Reveal from "@/components/Reveal";

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
    <section className="py-10 sm:py-12 md:py-16 bg-gradient-to-b from-amber-50/50 via-white to-white">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-9 md:space-y-12">
        <Reveal className="text-center space-y-4 md:space-y-6">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-slate-900">
            Why Online Yoga Works
          </h2>
          <div className="flex justify-center">
            <p className="text-base sm:text-lg md:text-xl text-slate-600 max-w-xl mx-auto text-center">
              Real guidance. More flexibility.
            </p>
          </div>
        </Reveal>

        <div className="grid w-full items-start md:grid-cols-2 gap-5 md:gap-7">
          {benefits.map((benefit, index) => (
            <Reveal key={index} delayMs={index * 70}>
              <Card className="w-full h-fit rounded-3xl p-6 sm:p-7 md:p-8 bg-gradient-to-br from-white to-emerald-50/60 border border-emerald-100/70 hover:shadow-md transition-all duration-300">
                <div className="flex items-start gap-4 md:gap-5">
                  <div className="shrink-0 rounded-2xl bg-white/70 ring-1 ring-emerald-100 px-4 py-3 text-3xl shadow-sm">
                    {benefit.icon}
                  </div>

                  <div className="min-w-0 text-left">
                    <h3 className="text-xl font-serif font-bold text-slate-900">
                      {benefit.title}
                    </h3>
                    <p className="mt-2 text-slate-600 leading-relaxed">
                      {benefit.description}
                    </p>
                  </div>
                </div>
              </Card>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

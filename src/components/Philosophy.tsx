import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Reveal from "@/components/Reveal";

export default function Philosophy() {
  const features = [
    {
      icon: "🧘",
      title: "Tailored for You",
      description: "Sessions built around your body, goals, and level—from beginner to advanced.",
    },
    {
      icon: "🌿",
      title: "Holistic Approach",
      description: "Breath, movement, and mindfulness—for whole-body well-being.",
    },
    {
      icon: "💚",
      title: "Compassionate Guidance",
      description: "Clear cues, kind support, and tools you can use off the mat.",
    },
  ];

  return (
    <section className="pt-10 sm:pt-12 md:pt-16 pb-10 sm:pb-12 md:pb-16 bg-gradient-to-b from-white to-amber-50/60">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-9 md:space-y-12">
        <Reveal className="text-center space-y-4 md:space-y-6">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-slate-900">
            Your Practice, Your Pace
            <span className="block text-emerald-800 mt-2">Our Philosophy</span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-slate-600 max-w-4xl md:max-w-7xl mx-auto leading-relaxed text-center">
            Yoga for every body—grounded in breath, alignment, and mindful movement. Get personal guidance in a calm, online space.
          </p>
        </Reveal>

        <div className="grid w-full items-stretch md:grid-cols-3 gap-6 md:gap-8">
          {features.map((feature, index) => (
            <Reveal key={index} delayMs={index * 80} className="h-full">
              <Card className="w-full h-full rounded-3xl p-6 sm:p-7 md:p-9 text-center bg-gradient-to-br from-emerald-50/70 to-white border-emerald-100 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1.5">
                <CardHeader className="justify-items-center text-center px-0">
                  <div className="text-4xl mb-4">{feature.icon}</div>
                  <CardTitle className="text-xl sm:text-2xl font-serif font-bold text-slate-900 mb-3">
                    {feature.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-center px-0 flex flex-col h-full">
                  <CardDescription className="text-slate-600 leading-relaxed text-base md:text-lg text-center">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

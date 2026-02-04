import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { MotionWrap } from "@/components/Motion";
import Reveal from "@/components/Reveal";

export default function Offerings() {
  const offerings = [
    {
      title: "Private 1:1 Sessions",
      description: "Hatha + Krishnamacharya, personalized to your goals and progress.",
      icon: "✨",
      color: "from-amber-500/90 to-orange-500/90",
    },
    {
      title: "Group Classes",
      description: "Restorative flows to reset and recharge—practice with a supportive community.",
      icon: "🌙",
      color: "from-emerald-600/90 to-teal-600/90",
    },
    {
      title: "Prenatal & Postnatal",
      description: "Gentle, safe sessions for pregnancy and postnatal recovery.",
      icon: "🤱",
      color: "from-sky-600/85 to-indigo-600/85",
    },
  ];

  return (
    <section
      id="offerings"
      className="pt-10 sm:pt-12 md:pt-16 pb-10 sm:pb-12 md:pb-16 bg-gradient-to-b from-amber-50/40 via-white to-emerald-50/40"
    >
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-9 md:space-y-12">
        <Reveal className="text-center space-y-4 md:space-y-6">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-slate-900">
            Choose Your Session
          </h2>
          <div className="flex justify-center">
            <p className="text-base sm:text-lg md:text-xl text-slate-600 max-w-5xl mx-auto leading-relaxed text-center">
              Private 1:1, group classes, and prenatal/postnatal support.
              <br className="hidden md:block" />
              Join on Zoom, Google Meet, or your preferred platform.
            </p>
          </div>
        </Reveal>

        <div className="grid w-full items-stretch md:grid-cols-2 xl:grid-cols-3 gap-6 md:gap-8">
          {offerings.map((offering, index) => (
            <Reveal key={index} delayMs={index * 80} className="h-full">
              <MotionWrap className="h-full">
                <Card className="group relative w-full overflow-hidden rounded-3xl bg-white/85 backdrop-blur-[2px] shadow-md hover:shadow-xl transition-all duration-500 transform hover:-translate-y-1.5 h-full">
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${offering.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                  />
                  <CardHeader className="relative p-6 sm:p-7 md:p-8">
                    <div className="text-4xl mb-4 transform group-hover:scale-110 transition-transform duration-300">
                      {offering.icon}
                    </div>
                    {offering.title === "Private 1:1 Sessions" ? (
                      <CardTitle className="text-2xl font-serif font-bold text-slate-900 mb-2 group-hover:text-white transition-colors duration-300">
                        Private{" "}
                        <span className="font-sans font-medium text-[0.9em] tracking-tight">
                          1:1
                        </span>{" "}
                        Sessions
                      </CardTitle>
                    ) : (
                      <CardTitle className="text-2xl font-serif font-bold text-slate-900 mb-2 group-hover:text-white transition-colors duration-300">
                        {offering.title}
                      </CardTitle>
                    )}
                  </CardHeader>
                  <CardContent className="relative px-6 pb-6 sm:px-7 sm:pb-7 md:px-8 md:pb-8">
                    <CardDescription className="text-slate-600 leading-relaxed text-base md:text-lg group-hover:text-white/90 transition-colors duration-300 text-clamp-4">
                      {offering.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              </MotionWrap>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

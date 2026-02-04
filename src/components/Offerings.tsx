import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { MotionWrap } from "@/components/Motion";

export default function Offerings() {
  const offerings = [
    {
      title: "Private 1:1 Sessions",
      description: "Hatha + Krishnamacharya, personalized to your goals and progress.",
      icon: "✨",
      color: "from-emerald-500 to-teal-600",
    },
    {
      title: "Group Classes",
      description: "Restorative flows to reset and recharge—practice with a supportive community.",
      icon: "🌙",
      color: "from-purple-500 to-indigo-600",
    },
    {
      title: "Prenatal & Postnatal",
      description: "Gentle, safe sessions for pregnancy and postnatal recovery.",
      icon: "🤱",
      color: "from-pink-500 to-rose-600",
    },
  ];

  return (
    <section id="offerings" className="pt-12 sm:pt-14 md:pt-20 pb-14 sm:pb-16 md:pb-28 bg-gradient-to-b from-white to-emerald-50">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 md:space-y-16">
        <div className="text-center space-y-6 md:space-y-8">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-gray-900">
            Choose Your Session
          </h2>
          <div className="flex justify-center">
            <p className="text-lg sm:text-xl text-gray-600 max-w-5xl mx-auto leading-relaxed text-center">
              Private 1:1, group classes, and prenatal/postnatal support.
              <br className="hidden md:block" />
              Join on Zoom, Google Meet, or your preferred platform.
            </p>
          </div>
        </div>

        <div className="grid w-full items-stretch md:grid-cols-2 xl:grid-cols-3 gap-8 md:gap-10">
          {offerings.map((offering, index) => (
            <MotionWrap key={index} className="h-full">
              <Card className="group relative w-full overflow-hidden rounded-3xl bg-white shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 h-full min-h-[320px]">
                <div className={`absolute inset-0 bg-gradient-to-br ${offering.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
                <CardHeader className="relative p-7 sm:p-8 md:p-10">
                  <div className="text-5xl mb-5 transform group-hover:scale-110 transition-transform duration-300">
                    {offering.icon}
                  </div>
                  <CardTitle className="text-2xl font-serif font-bold text-gray-900 mb-3 group-hover:text-white transition-colors duration-300">
                    {offering.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="relative px-7 pb-7 sm:px-8 sm:pb-8 md:px-10 md:pb-10">
                  <CardDescription className="text-gray-600 leading-relaxed text-base md:text-lg group-hover:text-white/90 transition-colors duration-300 text-clamp-4">
                    {offering.description}
                  </CardDescription>
                </CardContent>
              </Card>
            </MotionWrap>
          ))}
        </div>
      </div>
    </section>
  );
}

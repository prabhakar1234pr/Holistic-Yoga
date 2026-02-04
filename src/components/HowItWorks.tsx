import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MotionWrap } from "@/components/Motion";
import LottieAccent from "@/components/LottieAccent";
import Reveal from "@/components/Reveal";

export default function HowItWorks() {
  const steps = [
    {
      number: "1",
      title: "Explore",
      description: "Pick 1:1, group, or prenatal/postnatal—share your goal.",
    },
    {
      number: "2",
      title: "Connect",
      description: "Message on WhatsApp to choose a time and plan.",
    },
    {
      number: "3",
      title: "Flow",
      description: "Join online and feel the difference—one session at a time.",
    },
  ];

  return (
    <section className="pt-8 sm:pt-10 md:pt-12 pb-8 sm:pb-10 md:pb-12 bg-gradient-to-b from-white to-emerald-50/40">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-7 md:space-y-9">
        <Reveal className="text-center space-y-4 md:space-y-6">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-slate-900">
            Start in 3 Simple Steps
          </h2>
          <div className="flex justify-center">
            <LottieAccent className="h-9 w-9" label="Calm breathing accent" />
          </div>
          <p className="text-base sm:text-lg md:text-xl text-slate-600 max-w-3xl mx-auto text-center">
            Message on WhatsApp to book in minutes.
          </p>
        </Reveal>

        <div className="grid w-full md:grid-cols-3 gap-5 sm:gap-6 md:gap-7 relative">
          {steps.map((step, index) => (
            <Reveal key={index} delayMs={index * 80} className="h-full">
              <Card className="relative w-full h-full text-center rounded-3xl bg-white/70 backdrop-blur-[2px] ring-1 ring-emerald-100 shadow-sm py-5 sm:py-6">
                <CardHeader className="px-6">
                  <div className="mx-auto mb-4 inline-flex items-center justify-center size-14 sm:size-16 md:size-[68px] rounded-full bg-white/90 ring-1 ring-emerald-200 shadow-sm">
                    <span className="font-serif font-bold text-2xl sm:text-3xl text-emerald-800">
                      {step.number}
                    </span>
                  </div>
                  <CardTitle className="text-xl sm:text-2xl font-serif font-bold text-slate-900 mb-3">
                    {step.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="px-6">
                  <CardDescription className="text-slate-600 leading-relaxed text-base sm:text-lg">
                    {step.description}
                  </CardDescription>
                </CardContent>
              </Card>
            </Reveal>
          ))}
        </div>

        <Reveal className="text-center">
          <MotionWrap as="span" className="inline-block">
            <Button
              asChild
              size="lg"
              className="bg-gradient-to-r from-emerald-700 to-teal-700 hover:from-emerald-800 hover:to-teal-800 text-white rounded-full px-9 py-6 text-base sm:text-lg h-auto shadow-md hover:shadow-lg transform hover:scale-[1.02] transition-all duration-300"
            >
              <a
                href="https://wa.me/7718820274"
                target="_blank"
                rel="noopener noreferrer"
              >
                Book on WhatsApp
              </a>
            </Button>
          </MotionWrap>
        </Reveal>
      </div>
    </section>
  );
}

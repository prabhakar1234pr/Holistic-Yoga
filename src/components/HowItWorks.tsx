import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MotionWrap } from "@/components/Motion";
import LottieAccent from "@/components/LottieAccent";

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
    <section className="pt-8 md:pt-10 pb-8 md:pb-10 bg-white">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 md:space-y-16">
        <div className="text-center space-y-6 md:space-y-8">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-gray-900">
            Start in 3 Simple Steps
          </h2>
          <div className="flex justify-center">
            <LottieAccent className="h-10 w-10" label="Calm breathing accent" />
          </div>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto text-center">
            Message on WhatsApp to book in minutes.
          </p>
        </div>

        <div className="grid w-full md:grid-cols-3 gap-10 sm:gap-12 md:gap-16 relative">
          {steps.map((step, index) => (
            <Card key={index} className="relative w-full text-center border-0 shadow-none">
              <CardHeader>
                <div className="mx-auto mb-6 sm:mb-8 inline-flex items-center justify-center size-16 sm:size-20 md:size-24 rounded-full bg-white ring-2 ring-emerald-200 shadow-sm">
                  <span className="font-serif font-bold text-2xl sm:text-3xl md:text-4xl text-emerald-700">
                    {step.number}
                  </span>
                </div>
                <CardTitle className="text-2xl font-serif font-bold text-gray-900 mb-6">
                  {step.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600 leading-relaxed text-lg">
                  {step.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <MotionWrap as="span" className="inline-block">
            <Button
              asChild
              size="lg"
              className="bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white rounded-none px-10 py-6 text-lg h-auto shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
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
        </div>
      </div>
    </section>
  );
}

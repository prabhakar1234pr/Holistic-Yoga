"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function HowItWorks() {
  const steps = [
    {
      number: "1",
      title: "Explore",
      description: "Browse our diverse class types and flexible schedules to find the perfect session that aligns with your goals.",
      icon: "🔍",
    },
    {
      number: "2",
      title: "Connect",
      description: "Reach out to us via WhatsApp for instant booking assistance or to get answers to any questions you may have.",
      icon: "💬",
    },
    {
      number: "3",
      title: "Flow",
      description: "Join your personalized online yoga session from anywhere in the world and embark on your journey to well-being.",
      icon: "🧘",
    },
  ];

  return (
    <section className="pt-8 md:pt-10 pb-8 md:pb-10 bg-white">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 md:space-y-16">
        <div className="text-center space-y-6 md:space-y-8">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-gray-900">
            Your Path to Inner Peace: How It Works
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto text-center">
            Flexible packages are available, with sessions starting from affordable prices.
          </p>
        </div>

        <div className="grid w-full md:grid-cols-3 gap-16 relative">
          {steps.map((step, index) => (
            <Card key={index} className="relative w-full text-center border-0 shadow-none">
              <CardHeader>
                <div className="relative inline-flex items-center justify-center w-28 h-28 bg-gradient-to-br from-emerald-500 to-purple-600 rounded-full text-white text-5xl font-bold mb-8 shadow-lg transform hover:scale-110 transition-transform duration-300">
                  <span className="absolute">{step.icon}</span>
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
              Start Your Journey Now
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}

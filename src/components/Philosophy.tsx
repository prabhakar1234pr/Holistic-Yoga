"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export default function Philosophy() {
  const features = [
    {
      icon: "🧘",
      title: "Tailored for You",
      description: "Customized sessions from beginner level to support you finding greater calm, strength and clarity.",
    },
    {
      icon: "🌿",
      title: "Holistic Approach",
      description: "Emphasizing mind-body connection for complete well-being and inner harmony.",
    },
    {
      icon: "💚",
      title: "Compassionate Guidance",
      description: "Certified instructors with a mission to empower and transform individuals with practical tools and insights that you can carry off the mat and into your daily life.",
    },
  ];

  return (
    <section className="pt-14 sm:pt-16 md:pt-28 pb-12 sm:pb-14 md:pb-20 bg-white">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 md:space-y-16">
        <div className="text-center space-y-6 md:space-y-8">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-emerald-950">
            Embrace Your Journey
            <span className="block text-emerald-700 mt-2">Our Philosophy</span>
          </h2>
          <p className="text-lg sm:text-xl md:text-2xl text-gray-600 max-w-4xl md:max-w-7xl mx-auto leading-relaxed text-center">
            At Holistic Yoga, we believe in tailoring yoga for all levels and goals, focusing on a holistic mind-body connection. Our small class sizes ensure personalized attention, guided by certified instructors.
          </p>
        </div>

        <div className="grid w-full items-stretch md:grid-cols-3 gap-12">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="w-full h-full min-h-[260px] sm:min-h-[300px] rounded-3xl p-7 sm:p-8 md:p-12 text-center bg-gradient-to-br from-emerald-50 to-white border-emerald-100 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <CardHeader className="justify-items-center text-center px-0">
                <div className="text-5xl mb-5">{feature.icon}</div>
                <CardTitle className="text-2xl font-serif font-bold text-gray-900 mb-4">
                  {feature.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="text-center px-0 flex flex-col h-full">
                <CardDescription className="text-gray-600 leading-relaxed text-base md:text-lg text-center">
                  {feature.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

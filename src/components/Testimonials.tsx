"use client";

import { Card, CardContent, CardDescription, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function Testimonials() {
  const testimonials = [
    {
      quote: "My stress levels reduced by 30% after just a few weeks of consistent practice with Holistic Yoga. Truly life-changing!",
      author: "Client from Karnataka, India",
      rating: 5,
    },
    {
      quote: "As a complete beginner, I found the instruction to be incredibly passionate and supportive. It worked for my mommy pooch to some extent that which I couldn't believe. It helped me to calm my mind and improved my health",
      author: "Client from Karnataka, India",
      rating: 5,
    },
    {
      quote: "My TSH used to be very high which was around 20 before I joined Yoga classes. Now it's 0.595 and also I have lost weight of 3kgs.",
      author: "Client from Andhra Pradesh, India",
      rating: 5,
    },
    {
      quote: "I felt so relaxed during yoga sessions. It brings immense energy and happiness. Benefited with not only a flexible body, but a happier mind too.",
      author: "Client from Texas, North America",
      rating: 5,
    },
    {
      quote: "Thank you for being such an inspirational teacher. I have really enjoyed yoga with you and felt the much needed positive shift in my life.",
      author: "Client from Arizona, North America",
      rating: 5,
    },
    {
      quote: "Yoga helped me in relieving my pains and improved my emotional well being. Health improved a lot",
      author: "Client from AP, India",
      rating: 5,
    },
  ];

  return (
    <section id="testimonials" className="py-14 sm:py-16 md:py-28 bg-gradient-to-b from-emerald-50 to-white">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 md:space-y-16">
        <div className="text-center space-y-6 md:space-y-8">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-gray-900">
            Hear From Our Global Community
          </h2>
          <div className="flex justify-center">
            <p className="text-lg sm:text-xl text-gray-600 max-w-xl mx-auto text-center">
              Our clients from around the world share their transformative experiences with Holistic Yoga.
            </p>
          </div>
          <Badge className="inline-flex items-center gap-3 px-5 py-2 sm:px-8 sm:py-3 bg-emerald-100 text-emerald-700 rounded-full text-base sm:text-lg h-auto">
            <span className="text-2xl font-bold">98%</span>
            <span className="font-semibold">Client Satisfaction Rate</span>
          </Badge>
        </div>

        <div className="grid w-full md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              className="w-full rounded-3xl p-7 sm:p-8 md:p-10 shadow-md hover:shadow-xl transition-all duration-300 h-auto md:h-[398px]"
            >
              <CardHeader className="px-0">
                <div className="flex gap-1 mb-6">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <span key={i} className="text-yellow-400 text-xl">⭐</span>
                  ))}
                </div>
              </CardHeader>
              <CardContent className="px-0 flex flex-col h-full">
                <CardDescription className="text-gray-700 leading-relaxed italic text-lg text-clamp-6">
                  "{testimonial.quote}"
                </CardDescription>
                <p className="mt-auto pt-6 text-sm font-semibold text-emerald-600">
                  — {testimonial.author}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

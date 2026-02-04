"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";

export default function About() {
  const certifications = [
    "Hatha Yoga",
    "Krishnamacharya Yoga",
    "Prenatal & Postnatal Yoga",
    "Certified Heartfulness Meditation Trainer",
  ];

  return (
    <section id="about" className="py-20 md:py-28 bg-gradient-to-b from-white to-emerald-50">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-4xl mx-auto text-center space-y-10 md:space-y-12">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 text-center">
            About Me: Certified International Yoga Trainer
          </h2>

          <Card className="rounded-3xl border border-emerald-100 bg-gradient-to-br from-white via-emerald-50 to-white p-14 md:p-20 shadow-2xl">
            <CardHeader className="justify-items-center text-center">
              <div className="mx-auto mb-10 size-40 md:size-48 overflow-hidden rounded-full bg-white shadow-lg ring-1 ring-emerald-100">
                <Image
                  src="/Teja.jpeg"
                  alt="Yoga trainer portrait"
                  width={192}
                  height={192}
                  className="h-full w-full object-cover"
                />
              </div>
              <CardDescription className="text-xl text-gray-800 leading-relaxed text-center">
                Hello! I transitioned from Software Engineering to become an International Yoga Trainer, 
                driven by a deep passion to <strong className="text-emerald-600">bring health, harmony, and empowerment</strong> through 
                yoga to people's lives, wherever you are in the world.
              </CardDescription>
            </CardHeader>
            <CardContent className="text-center space-y-10 md:space-y-12">
              <CardDescription className="text-lg text-gray-700 leading-relaxed text-center">
                My mission is to empower individuals to achieve physical, mental, and emotional balance 
                through personalized online practice.
              </CardDescription>

              <Card className="rounded-2xl border border-emerald-100 bg-white/70 shadow-sm">
                <CardHeader className="justify-items-center text-center">
                  <CardTitle className="text-2xl font-serif font-bold text-gray-900 text-center mb-6">
                    Certifications & Specializations
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap justify-center gap-3">
                    {certifications.map((cert, index) => (
                      <Badge
                        key={index}
                        variant="secondary"
                        className="text-lg px-4 py-2 bg-emerald-100 text-emerald-700 hover:bg-emerald-200"
                      >
                        ✓ {cert}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <CardDescription className="text-lg text-gray-700 leading-relaxed text-center">
                I specialize in creating accessible and engaging sessions tailored to all levels, especially 
                for beginners. My goal is to guide you on a journey to inner peace and well-being, fostering 
                a supportive and enriching online sanctuary for your practice.
              </CardDescription>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}

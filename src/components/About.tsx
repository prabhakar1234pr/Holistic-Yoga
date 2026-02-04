"use client";

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
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center space-y-10 md:space-y-12">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-gray-900">
            About Me: Certified International Yoga Trainer
          </h2>

          <div className="rounded-3xl border border-emerald-100 bg-gradient-to-br from-white via-emerald-50 to-white p-10 md:p-14 shadow-2xl">
            {/* Portrait */}
            <div className="mx-auto mb-8 size-40 md:size-48 overflow-hidden rounded-full bg-white shadow-lg ring-1 ring-emerald-100">
              <Image
                src="/Teja.jpeg"
                alt="Yoga trainer portrait"
                width={220}
                height={220}
                className="h-full w-full object-cover"
              />
            </div>

            <div className="space-y-10 md:space-y-12">
              <p className="text-lg md:text-xl text-gray-800 leading-relaxed">
                Hello! I transitioned from Software Engineering to become an International Yoga Trainer, driven by a deep passion to{" "}
                <strong className="text-emerald-600">bring health, harmony, and empowerment</strong>{" "}
                through yoga to people's lives, wherever you are in the world.
              </p>

              <p className="text-base md:text-lg text-gray-700 leading-relaxed">
                My mission is to empower individuals to achieve physical, mental, and emotional balance through personalized online practice.
              </p>

              <div className="rounded-2xl border border-emerald-100 bg-white/70 p-8 shadow-sm">
                <h3 className="text-2xl font-serif font-bold text-gray-900 mb-6">
                  Certifications & Specializations
                </h3>
                <div className="flex flex-wrap justify-center gap-3">
                  {certifications.map((cert) => (
                    <span
                      key={cert}
                      className="text-base md:text-lg px-4 py-2 bg-emerald-100 text-emerald-700 hover:bg-emerald-200 transition-colors"
                    >
                      ✓ {cert}
                    </span>
                  ))}
                </div>
              </div>

              <p className="text-base md:text-lg text-gray-700 leading-relaxed">
                I specialize in creating accessible and engaging sessions tailored to all levels, especially for beginners. My goal is to guide you on a journey to inner peace and well-being, fostering a supportive and enriching online sanctuary for your practice.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}


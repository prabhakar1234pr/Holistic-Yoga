import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";
import Reveal from "@/components/Reveal";

export default function About() {
  const certifications = [
    "Hatha Yoga",
    "Krishnamacharya Yoga",
    "Prenatal & Postnatal Yoga",
    "Certified Heartfulness Meditation Trainer",
  ];

  return (
    <section
      id="about"
      className="py-12 sm:py-14 md:py-16 bg-gradient-to-b from-emerald-50/40 via-white to-amber-50/40"
    >
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-4xl mx-auto text-center space-y-8 md:space-y-10">
          <Reveal>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-slate-900 text-center">
              Meet Tejasree
            </h2>
          </Reveal>

          <Reveal>
            <Card className="rounded-3xl border border-emerald-100 bg-gradient-to-br from-white via-emerald-50/60 to-white p-7 sm:p-9 md:p-12 shadow-xl">
              <CardHeader className="justify-items-center text-center">
                <div className="mx-auto mb-7 sm:mb-8 size-32 sm:size-36 md:size-40 overflow-hidden rounded-full bg-white shadow-md ring-1 ring-emerald-100">
                  <Image
                    src="/Teja.jpeg"
                    alt="Yoga trainer portrait"
                    width={192}
                    height={192}
                    className="h-full w-full object-cover"
                  />
                </div>
                <CardDescription className="text-base sm:text-lg md:text-xl text-slate-700 leading-relaxed text-center">
                  Former software engineer, now an international yoga trainer.
                  <br className="hidden sm:block" />
                  I help you build{" "}
                  <strong className="text-emerald-700">strength, calm, and balance</strong>
                  —wherever you are.
                </CardDescription>
              </CardHeader>
              <CardContent className="text-center space-y-8 md:space-y-10">
                <CardDescription className="text-base sm:text-lg text-slate-600 leading-relaxed text-center">
                  Personalized online practice for your body, mind, and breath.
                </CardDescription>

              <Reveal delayMs={90}>
                <Card className="rounded-2xl border border-emerald-100 bg-white/75 shadow-sm">
                  <CardHeader className="justify-items-center text-center">
                    <CardTitle className="text-2xl font-serif font-bold text-slate-900 text-center mb-5">
                      Certifications & Specializations
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap justify-center gap-2 sm:gap-3">
                      {certifications.map((cert, index) => (
                        <Badge
                          key={index}
                          variant="secondary"
                          className="max-w-full shrink whitespace-normal break-words text-center leading-snug text-sm sm:text-base px-4 py-2 bg-emerald-100 text-emerald-800 hover:bg-emerald-200"
                        >
                          ✓ {cert}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </Reveal>

                <CardDescription className="text-base sm:text-lg text-slate-600 leading-relaxed text-center">
                  Accessible sessions for every level—especially beginners. Clear guidance, steady
                  progress, and a calm space to return to.
                </CardDescription>
              </CardContent>
            </Card>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

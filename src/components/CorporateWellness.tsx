import Image from "next/image";
import { Card } from "@/components/ui/card";
import Reveal from "@/components/Reveal";

export default function CorporateWellness() {
  const images = [
    { src: "/session1.jpeg", alt: "Corporate yoga session photo 1" },
    { src: "/session2.jpeg", alt: "Corporate yoga session photo 2" },
    { src: "/session3.jpeg", alt: "Corporate yoga session photo 3" },
  ];

  return (
    <section id="corporate-wellness" className="py-10 sm:py-12 md:py-16 bg-gradient-to-b from-white to-sky-50/60">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-7 md:space-y-10">
        <Reveal className="text-center space-y-3 md:space-y-5">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-slate-900">
            Corporate Wellness
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-slate-600 max-w-5xl mx-auto text-center">
            Chair yoga and mat sessions for teams—delivered for Oracle, Tech Mahindra, LIC, and Mazagaon Dock.
            <br className="hidden sm:block" />
            Ideal for wellness programs and International Yoga Day.
          </p>
        </Reveal>

        <div className="grid w-full gap-5 md:gap-7 md:grid-cols-3">
          {images.map((img) => (
            <Reveal key={img.src} className="h-full">
              <Card className="overflow-hidden rounded-3xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow duration-300 bg-white/70">
                <div className="relative aspect-[4/3] w-full">
                  <Image
                    src={img.src}
                    alt={img.alt}
                    fill
                    className="object-cover"
                    sizes="(min-width: 768px) 33vw, 100vw"
                    priority={false}
                  />
                </div>
              </Card>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}


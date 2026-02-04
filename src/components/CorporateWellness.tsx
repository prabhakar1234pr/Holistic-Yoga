import Image from "next/image";
import { Card } from "@/components/ui/card";

export default function CorporateWellness() {
  const images = [
    { src: "/session1.jpeg", alt: "Corporate yoga session photo 1" },
    { src: "/session2.jpeg", alt: "Corporate yoga session photo 2" },
    { src: "/session3.jpeg", alt: "Corporate yoga session photo 3" },
  ];

  return (
    <section id="corporate-wellness" className="py-12 md:py-16 bg-white">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8 md:space-y-10">
        <div className="text-center space-y-4 md:space-y-6">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-gray-900">
            Corporate Wellness
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-5xl mx-auto text-center">
            Chair yoga and mat sessions for teams—delivered for Oracle, Tech Mahindra, LIC, and Mazagaon Dock.
            <br className="hidden sm:block" />
            Ideal for wellness programs and International Yoga Day.
          </p>
        </div>

        <div className="grid w-full gap-6 md:gap-8 md:grid-cols-3">
          {images.map((img) => (
            <Card
              key={img.src}
              className="overflow-hidden rounded-3xl border border-gray-100 shadow-md hover:shadow-xl transition-shadow duration-300"
            >
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
          ))}
        </div>
      </div>
    </section>
  );
}


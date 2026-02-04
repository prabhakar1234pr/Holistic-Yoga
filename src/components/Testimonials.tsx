 "use client";

import * as React from "react";
import { Card, CardContent, CardDescription, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Reveal from "@/components/Reveal";

const TESTIMONIALS = [
  {
    quote:
      "After a few weeks of consistent practice, I felt noticeably less stressed and more balanced. Truly life-changing!",
    author: "Client from Karnataka, India",
    rating: 5,
  },
  {
    quote:
      "As a complete beginner, I found the instruction incredibly supportive and encouraging. It helped me feel calmer, stronger, and more confident in my body.",
    author: "Client from Karnataka, India",
    rating: 5,
  },
  {
    quote:
      "Since joining the classes, I’ve noticed meaningful improvements in my overall well-being and energy, and I’ve also lost a few kilos.",
    author: "Client from Andhra Pradesh, India",
    rating: 5,
  },
  {
    quote:
      "I felt so relaxed during yoga sessions. It brings immense energy and happiness. Benefited with not only a flexible body, but a happier mind too.",
    author: "Client from Texas, North America",
    rating: 5,
  },
  {
    quote:
      "Thank you for being such an inspirational teacher. I have really enjoyed yoga with you and felt the much needed positive shift in my life.",
    author: "Client from Arizona, North America",
    rating: 5,
  },
  {
    quote:
      "Yoga helped me in relieving my pains and improved my emotional well being. Health improved a lot",
    author: "Client from AP, India",
    rating: 5,
  },
] as const;

export default function Testimonials() {
  const reduceMotion = useReducedMotion();
  const [index, setIndex] = React.useState(0);
  const [direction, setDirection] = React.useState<-1 | 1>(1);

  const len = TESTIMONIALS.length;
  const current = TESTIMONIALS[index]!;
  const prev = TESTIMONIALS[(index - 1 + len) % len]!;
  const next = TESTIMONIALS[(index + 1) % len]!;

  const swipeThreshold = 110;

  const go = (dir: -1 | 1) => {
    setDirection(dir);
    setIndex((i) => (i + dir + len) % len);
  };

  return (
    <section id="testimonials" className="py-10 sm:py-12 md:py-16 bg-gradient-to-b from-emerald-50/50 to-white">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-9 md:space-y-12">
        <Reveal className="text-center space-y-4 md:space-y-6">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-slate-900">
            Loved Around the World
          </h2>
          <div className="flex justify-center">
            <p className="text-base sm:text-lg md:text-xl text-slate-600 max-w-xl mx-auto text-center">
              Real stories from students across the globe.
            </p>
          </div>
          <Badge className="inline-flex items-center gap-3 px-5 py-2 sm:px-7 sm:py-3 bg-emerald-100 text-emerald-800 rounded-full text-sm sm:text-base h-auto">
            <span className="text-2xl font-bold">98%</span>
            <span className="font-semibold">Client Satisfaction Rate</span>
          </Badge>
        </Reveal>

        <Reveal className="mx-auto w-full max-w-4xl">
          <div
            className="relative h-[340px] sm:h-[360px] md:h-[380px] overflow-hidden"
            style={{ perspective: "1200px" }}
          >
            {/* Side peeks (previous / next) */}
            <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
              <div className="absolute left-1/2 top-[46%] -translate-y-1/2 -translate-x-[112%] rotate-[-10deg] scale-[0.9] origin-bottom-right transform-gpu">
                <Card className="h-[320px] sm:h-[340px] md:h-[360px] w-[84vw] max-w-[520px] rounded-3xl bg-white/80 shadow-md border border-emerald-100/60">
                  <CardContent className="flex flex-col h-full p-7 sm:p-8 md:p-10 opacity-70">
                    <CardDescription className="text-slate-700 leading-relaxed italic text-base sm:text-lg text-clamp-4">
                      <q>{prev.quote}</q>
                    </CardDescription>
                    <p className="mt-auto pt-6 text-xs sm:text-sm font-semibold text-emerald-600">
                      — {prev.author}
                    </p>
                  </CardContent>
                </Card>
              </div>

              <div className="absolute left-1/2 top-[46%] -translate-y-1/2 translate-x-[12%] rotate-[10deg] scale-[0.9] origin-bottom-left transform-gpu">
                <Card className="h-[320px] sm:h-[340px] md:h-[360px] w-[84vw] max-w-[520px] rounded-3xl bg-white/80 shadow-md border border-emerald-100/60">
                  <CardContent className="flex flex-col h-full p-7 sm:p-8 md:p-10 opacity-70">
                    <CardDescription className="text-slate-700 leading-relaxed italic text-base sm:text-lg text-clamp-4">
                      <q>{next.quote}</q>
                    </CardDescription>
                    <p className="mt-auto pt-6 text-xs sm:text-sm font-semibold text-emerald-600">
                      — {next.author}
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Left/Right buttons */}
            <Button
              type="button"
              variant="outline"
              size="icon"
              className="absolute left-2 top-1/2 -translate-y-1/2 z-30 rounded-full bg-white/85 backdrop-blur-sm"
              onClick={() => go(-1)}
              aria-label={`Previous testimonial: ${prev.author}`}
            >
              <ChevronLeft className="h-5 w-5" />
            </Button>
            <Button
              type="button"
              variant="outline"
              size="icon"
              className="absolute right-2 top-1/2 -translate-y-1/2 z-30 rounded-full bg-white/85 backdrop-blur-sm"
              onClick={() => go(1)}
              aria-label={`Next testimonial: ${next.author}`}
            >
              <ChevronRight className="h-5 w-5" />
            </Button>

            {/* Top swipeable card. */}
            <AnimatePresence initial={false} custom={direction}>
              <motion.div
                key={index}
                className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20"
                drag={reduceMotion ? false : "x"}
                dragConstraints={{ left: 0, right: 0 }}
                dragElastic={0.18}
                onDragEnd={(_, info) => {
                  if (reduceMotion) return;
                  if (info.offset.x > swipeThreshold) go(-1);
                  else if (info.offset.x < -swipeThreshold) go(1);
                }}
                custom={direction}
                initial={{ opacity: 0, scale: 0.98, x: direction * 18 }}
                animate={{ opacity: 1, scale: 1, x: 0 }}
                exit={{
                  opacity: 0,
                  x: direction * -420,
                  rotate: direction * -10,
                  transition: { duration: 0.2 },
                }}
                transition={{ type: "spring", stiffness: 260, damping: 26 }}
                style={{ touchAction: "pan-y" }}
              >
                <Card className="h-[320px] sm:h-[340px] md:h-[360px] w-[92vw] max-w-[520px] rounded-3xl p-7 sm:p-8 md:p-10 shadow-xl bg-white">
                  <CardHeader className="px-0">
                    <span className="sr-only">{current.rating} out of 5 stars</span>
                    <div className="flex gap-1 mb-6" aria-hidden="true">
                    {[...Array(current.rating)].map((_, i) => (
                        <span key={i} className="text-yellow-400 text-xl">
                          ⭐
                        </span>
                      ))}
                    </div>
                  </CardHeader>
                  <CardContent className="px-0 flex flex-col h-full">
                    <CardDescription className="text-slate-700 leading-relaxed italic text-base sm:text-lg">
                      <q>{current.quote}</q>
                    </CardDescription>
                    <p className="mt-auto pt-6 text-sm font-semibold text-emerald-600">
                      — {current.author}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            </AnimatePresence>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

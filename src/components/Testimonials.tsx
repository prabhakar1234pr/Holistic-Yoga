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

  const swipeThreshold = 60;

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

        {/* iPhone app-switcher style: stacked overlapping cards */}
        <Reveal className="mx-auto w-full max-w-4xl">
          <div className="flex items-center gap-2 sm:gap-4">
            <Button
              type="button"
              variant="outline"
              size="icon"
              className="shrink-0 rounded-full bg-white/90 backdrop-blur-sm h-9 w-9 sm:h-10 sm:w-10 border-slate-200"
              onClick={() => go(-1)}
              aria-label={`Previous testimonial: ${prev.author}`}
            >
              <ChevronLeft className="h-4 w-4 sm:h-5 sm:w-5" />
            </Button>

            <div
              className="relative flex-1 min-w-0 h-[300px] sm:h-[320px] md:h-[340px] overflow-visible"
              style={{ perspective: "1200px" }}
            >
              {/* Blurred backdrop (iPhone style) */}
              <div className="absolute inset-0 -m-4 bg-gradient-to-b from-slate-100/80 to-white/80 rounded-3xl backdrop-blur-sm pointer-events-none" aria-hidden="true" />

              {/* Side cards - peeking behind like recent apps */}
              <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
                <div className="absolute left-1/2 top-[48%] -translate-y-1/2 -translate-x-[108%] rotate-[-8deg] scale-[0.88] origin-center transform-gpu">
                  <Card className="h-[260px] sm:h-[280px] md:h-[300px] w-[72vw] max-w-[340px] rounded-[1.25rem] bg-white/90 shadow-lg border border-slate-200/80">
                    <CardContent className="flex flex-col h-full p-3 sm:p-4 opacity-60 overflow-hidden">
                      <CardDescription className="text-slate-600 leading-relaxed italic text-xs sm:text-sm line-clamp-4">
                        <q>{prev.quote}</q>
                      </CardDescription>
                      <p className="mt-auto pt-3 text-[10px] sm:text-xs font-semibold text-emerald-600 truncate">
                        — {prev.author}
                      </p>
                    </CardContent>
                  </Card>
                </div>
                <div className="absolute left-1/2 top-[48%] -translate-y-1/2 translate-x-[8%] rotate-[8deg] scale-[0.88] origin-center transform-gpu">
                  <Card className="h-[260px] sm:h-[280px] md:h-[300px] w-[72vw] max-w-[340px] rounded-[1.25rem] bg-white/90 shadow-lg border border-slate-200/80">
                    <CardContent className="flex flex-col h-full p-3 sm:p-4 opacity-60 overflow-hidden">
                      <CardDescription className="text-slate-600 leading-relaxed italic text-xs sm:text-sm line-clamp-4">
                        <q>{next.quote}</q>
                      </CardDescription>
                      <p className="mt-auto pt-3 text-[10px] sm:text-xs font-semibold text-emerald-600 truncate">
                        — {next.author}
                      </p>
                    </CardContent>
                  </Card>
                </div>
              </div>

              {/* Focused card (foreground) - scrollable content so nothing is cut */}
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
                  initial={{ opacity: 0, scale: 0.95, x: direction * 20 }}
                  animate={{ opacity: 1, scale: 1, x: 0 }}
                  exit={{
                    opacity: 0,
                    x: direction * -380,
                    rotate: direction * -8,
                    transition: { duration: 0.2 },
                  }}
                  transition={{ type: "spring", stiffness: 260, damping: 26 }}
                  style={{ touchAction: "pan-x" }}
                >
                  <Card className="h-[260px] sm:h-[280px] md:h-[300px] w-[82vw] max-w-[340px] rounded-[1.25rem] shadow-xl border border-slate-200/80 bg-white overflow-hidden flex flex-col">
                    <CardHeader className="px-3 pt-3 pb-1 sm:px-4 sm:pt-4 shrink-0">
                      <span className="sr-only">{current.rating} out of 5 stars</span>
                      <div className="flex gap-0.5 mb-2" aria-hidden="true">
                        {[...Array(current.rating)].map((_, i) => (
                          <span key={i} className="text-yellow-400 text-xs sm:text-sm">
                            ⭐
                          </span>
                        ))}
                      </div>
                    </CardHeader>
                    <CardContent className="px-3 sm:px-4 pb-4 flex flex-col flex-1 min-h-0 overflow-y-auto">
                      <CardDescription className="text-slate-700 leading-relaxed italic text-xs sm:text-sm">
                        <q>{current.quote}</q>
                      </CardDescription>
                      <p className="mt-auto pt-3 shrink-0 text-[10px] sm:text-xs font-semibold text-emerald-600">
                        — {current.author}
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>
              </AnimatePresence>
            </div>

            <Button
              type="button"
              variant="outline"
              size="icon"
              className="shrink-0 rounded-full bg-white/90 backdrop-blur-sm h-9 w-9 sm:h-10 sm:w-10 border-slate-200"
              onClick={() => go(1)}
              aria-label={`Next testimonial: ${next.author}`}
            >
              <ChevronRight className="h-4 w-4 sm:h-5 sm:w-5" />
            </Button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

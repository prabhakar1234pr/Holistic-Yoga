import LottieAccent from "@/components/LottieAccent";
import Reveal from "@/components/Reveal";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen w-full flex items-center justify-center bg-[radial-gradient(circle_at_15%_20%,rgba(253,230,138,0.55),transparent_55%),radial-gradient(circle_at_85%_15%,rgba(251,191,36,0.22),transparent_55%),radial-gradient(circle_at_70%_85%,rgba(254,215,170,0.45),transparent_60%),linear-gradient(to_bottom_right,rgba(255,247,237,1),rgba(255,255,255,1),rgba(240,253,250,0.7))] overflow-hidden"
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-8 w-72 h-72 bg-amber-200 rounded-full mix-blend-multiply filter blur-xl opacity-25 animate-blob motion-reduce:animate-none"></div>
        <div className="absolute top-44 right-8 w-72 h-72 bg-orange-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000 motion-reduce:animate-none"></div>
        <div className="absolute -bottom-10 left-1/2 w-72 h-72 bg-emerald-200 rounded-full mix-blend-multiply filter blur-xl opacity-15 animate-blob animation-delay-4000 motion-reduce:animate-none"></div>
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 sm:py-28 md:py-32 text-center flex flex-col items-center justify-center">
        <div className="space-y-6 md:space-y-8">
          <Reveal>
            <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-bold text-slate-900 leading-tight">
              <span className="font-serif">Holistic Yoga</span>
            </h1>
          </Reveal>
          <Reveal delayMs={70}>
            <p className="text-xl sm:text-2xl md:text-3xl lg:text-4xl text-slate-700 font-light">
              Online yoga, tailored to you
            </p>
          </Reveal>
          {process.env.NEXT_PUBLIC_SHOW_HERO_VIDEO === "1" ? (
            <Reveal delayMs={120}>
              <video
                className="mx-auto w-full max-w-xs rounded-2xl ring-1 ring-emerald-100 shadow-sm"
                src="/videos/hero-breathe.mp4"
                muted
                playsInline
                autoPlay
                loop
                preload="metadata"
              />
            </Reveal>
          ) : null}
          <Reveal delayMs={160}>
            <div className="flex justify-center">
              {/* Lazy-loaded Lottie accent (client-only) */}
              <LottieAccent className="h-12 w-12" label="Breathing accent" />
            </div>
          </Reveal>
          <Reveal delayMs={210}>
            <p className="text-base sm:text-lg md:text-xl text-slate-600 max-w-2xl sm:max-w-3xl md:max-w-4xl mx-auto leading-relaxed text-center">
              1:1 and small-group sessions with an international certified instructor.
              <br className="hidden sm:block" />
              Practice anywhere. Feel stronger, calmer, and more aligned.
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

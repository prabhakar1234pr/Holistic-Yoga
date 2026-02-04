import LottieAccent from "@/components/LottieAccent";

export default function Hero() {
  return (
    <section className="relative min-h-screen w-full flex items-center justify-center bg-gradient-to-br from-emerald-50 via-white to-purple-50 overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-emerald-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob motion-reduce:animate-none"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-2000 motion-reduce:animate-none"></div>
        <div className="absolute -bottom-8 left-1/2 w-72 h-72 bg-amber-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-4000 motion-reduce:animate-none"></div>
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 sm:py-28 md:py-32 text-center flex flex-col items-center justify-center">
        <div className="animate-fade-in-up space-y-6 md:space-y-8">
          <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-bold text-gray-900 leading-tight">
            <span className="font-serif">Holistic Yoga</span>
          </h1>
          <p className="text-xl sm:text-2xl md:text-3xl lg:text-4xl text-gray-700 font-light">
            Online yoga, tailored to you
          </p>
          {process.env.NEXT_PUBLIC_SHOW_HERO_VIDEO === "1" ? (
            <video
              className="mx-auto w-full max-w-xs rounded-2xl ring-1 ring-emerald-100 shadow-sm"
              src="/videos/hero-breathe.mp4"
              muted
              playsInline
              autoPlay
              loop
              preload="metadata"
            />
          ) : null}
          <div className="flex justify-center">
            {/* Lazy-loaded Lottie accent (client-only) */}
            <LottieAccent className="h-12 w-12" label="Breathing accent" />
          </div>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-2xl sm:max-w-3xl md:max-w-4xl mx-auto leading-relaxed text-center">
            1:1 and small-group sessions with an international certified instructor.
            <br className="hidden sm:block" />
            Practice anywhere. Feel stronger, calmer, and more aligned.
          </p>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce motion-reduce:hidden">
        <svg
          className="w-6 h-6 text-gray-400"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          viewBox="0 0 24 24"
          stroke="currentColor"
          aria-hidden="true"
        >
          <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
        </svg>
      </div>
    </section>
  );
}

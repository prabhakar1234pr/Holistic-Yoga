"use client";

import * as React from "react";

export default function Hero() {
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section className="relative min-h-screen w-full flex items-center justify-center bg-gradient-to-br from-emerald-50 via-white to-purple-50 overflow-hidden">
      {/* Animated background blobs */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-16 left-8 w-72 h-72 bg-emerald-200 rounded-full mix-blend-multiply blur-2xl opacity-30 animate-blob" />
        <div className="absolute top-28 right-8 w-72 h-72 bg-purple-200 rounded-full mix-blend-multiply blur-2xl opacity-30 animate-blob animation-delay-2000" />
        <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 w-72 h-72 bg-amber-200 rounded-full mix-blend-multiply blur-2xl opacity-30 animate-blob animation-delay-4000" />
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-28 md:py-32 text-center flex flex-col items-center justify-center">
        <div className={`${mounted ? "animate-fade-in-up" : "opacity-0"} space-y-6 md:space-y-8`}>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-gray-900 leading-tight">
            <span className="font-serif">Holistic Yoga</span>
          </h1>

          <p className="text-2xl md:text-3xl lg:text-4xl text-gray-700 font-light">
            Your Online Yoga Sanctuary
          </p>

          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Connect with an International Certified Yoga Instructor through personalized online sessions, anytime, anywhere.
            <br className="hidden sm:block" />
            Boost your well-being from the comfort of your home or travels.
          </p>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
        <svg
          className="w-6 h-6 text-gray-400"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <path d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>

      <style jsx>{`
        @keyframes blob {
          0% {
            transform: translate(0px, 0px) scale(1);
          }
          33% {
            transform: translate(30px, -50px) scale(1.1);
          }
          66% {
            transform: translate(-20px, 20px) scale(0.9);
          }
          100% {
            transform: translate(0px, 0px) scale(1);
          }
        }
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
      `}</style>
    </section>
  );
}


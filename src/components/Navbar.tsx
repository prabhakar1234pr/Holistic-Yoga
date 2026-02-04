"use client";

import Reveal from "@/components/Reveal";

export default function Navbar() {
  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 bg-transparent"
    >
      <Reveal className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20 w-full">
          <div className="flex-shrink-0">
            <a href="#" className="text-xl sm:text-2xl font-serif font-bold text-slate-900">
              Holistic Yoga
            </a>
          </div>
        </div>
      </Reveal>
    </nav>
  );
}

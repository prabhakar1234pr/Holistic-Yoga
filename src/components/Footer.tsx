"use client";

import { Separator } from "@/components/ui/separator";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12 sm:py-16">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          <div>
            <h3 className="text-2xl font-serif font-bold mb-6">Holistic Yoga</h3>
            <p className="text-gray-400 leading-relaxed text-base sm:text-lg">
              Your Online Yoga Sanctuary. Bringing holistic wellness to you at the comfort of your home!
            </p>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-4 text-gray-400">
              <li>
                <a href="#offerings" className="hover:text-emerald-400 transition-colors text-base sm:text-lg">
                  Our Offerings
                </a>
              </li>
              <li>
                <a href="#testimonials" className="hover:text-emerald-400 transition-colors text-base sm:text-lg">
                  Testimonials
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-emerald-400 transition-colors text-base sm:text-lg">
                  About
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-6">Connect</h4>
            <ul className="space-y-4 text-gray-400">
              <li>
                <a
                  href="https://wa.me/7718820274"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-emerald-400 transition-colors text-base sm:text-lg"
                >
                  WhatsApp
                </a>
              </li>
              <li>
                <a
                  href="https://instagram.com/holisticyoga.with.tejasree"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-emerald-400 transition-colors text-base sm:text-lg"
                >
                  Instagram
                </a>
              </li>
            </ul>
          </div>
        </div>

        <Separator className="bg-gray-800 mb-12" />
        <div className="text-center text-gray-400">
          <p className="text-base sm:text-lg">&copy; {new Date().getFullYear()} Holistic Yoga. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

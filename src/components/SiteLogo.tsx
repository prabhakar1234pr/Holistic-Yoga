import Link from "next/link";

export default function SiteLogo() {
  return (
    <Link
      href="/"
      aria-label="Holistic Yoga home"
      className="fixed top-4 left-4 z-50 select-none rounded-full bg-white/35 backdrop-blur-sm px-4 py-2 text-sm sm:text-base font-serif font-bold tracking-[0.12em] text-slate-900 shadow-sm ring-1 ring-white/50 hover:bg-white/45 transition-colors animate-fade-in"
    >
      HOLISTIC YOGA
    </Link>
  );
}


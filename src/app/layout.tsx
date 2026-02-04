import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import SiteLogo from "@/components/SiteLogo";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL && /^https?:\/\//.test(process.env.NEXT_PUBLIC_SITE_URL)
    ? process.env.NEXT_PUBLIC_SITE_URL
    : "http://localhost:3000";

export const metadata: Metadata = {
  title: "Holistic Yoga - Your Online Yoga Sanctuary",
  description: "Connect with International Certified Yoga Instructor through personalized online sessions, anytime, anywhere. Boost your well-being from the comfort of your home.",
  metadataBase: new URL(siteUrl),
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "Holistic Yoga - Your Online Yoga Sanctuary",
    description:
      "Connect with an International Certified Yoga Instructor through personalized online sessions, anytime, anywhere. Boost your well-being from the comfort of your home.",
    url: "/",
    siteName: "Holistic Yoga",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Holistic Yoga - Your Online Yoga Sanctuary",
    description:
      "Connect with an International Certified Yoga Instructor through personalized online sessions, anytime, anywhere. Boost your well-being from the comfort of your home.",
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${playfair.variable} antialiased`}
      >
        <SiteLogo />
        {children}
      </body>
    </html>
  );
}

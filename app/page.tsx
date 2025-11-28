'use client';

import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import dynamic from "next/dynamic";
import Navbar from "@/components/Navbar";
import InteractiveSlashHero from "@/components/InteractiveSlashHero";
import SmoothScroll from "@/components/scroll/SmoothScroll";
import WelcomeScreen from "@/components/WelcomeScreen";

// Lazy Load Heavy Components for "Ngebut" Performance
const Features = dynamic(() => import("@/components/Features"), { ssr: true });
const Benefits = dynamic(() => import("@/components/Benefits"), { ssr: true });
const DownloadCTA = dynamic(() => import("@/components/DownloadCTA"), { ssr: true });
const Footer = dynamic(() => import("@/components/Footer"), { ssr: true });

export default function Home() {
  const [showWelcome, setShowWelcome] = useState(true);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Liora Match",
    "url": "https://lioramatch.netlify.app",
    "logo": "https://lioramatch.netlify.app/logo.png",
    "sameAs": [
      "https://twitter.com/lioramatch",
      "https://instagram.com/lioramatch"
    ],
    "description": "Platform guru privat terverifikasi terbaik di Indonesia.",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Jakarta",
      "addressCountry": "ID"
    }
  };

  return (
    <SmoothScroll>
      <main className="min-h-screen bg-[#050608] text-white selection:bg-[#00ADB5] selection:text-white">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />

        <AnimatePresence>
          {showWelcome && (
            <WelcomeScreen onEnter={() => setShowWelcome(false)} />
          )}
        </AnimatePresence>

        <Navbar />
        <InteractiveSlashHero />
        <Features />
        <Benefits />
        <DownloadCTA />
        <Footer />
      </main>
    </SmoothScroll>
  );
}

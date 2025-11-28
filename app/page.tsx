'use client';

import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import Navbar from "@/components/Navbar";
import InteractiveSlashHero from "@/components/InteractiveSlashHero";
import Features from "@/components/Features";
import Benefits from "@/components/Benefits";
import DownloadCTA from "@/components/DownloadCTA";
import Footer from "@/components/Footer";
import SmoothScroll from "@/components/scroll/SmoothScroll";
import WelcomeScreen from "@/components/WelcomeScreen";

export default function Home() {
  const [showWelcome, setShowWelcome] = useState(true);

  return (
    <SmoothScroll>
      <main className="min-h-screen bg-[#050608] text-white selection:bg-[#00ADB5] selection:text-white">
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

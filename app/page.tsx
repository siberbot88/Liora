import Navbar from "@/components/Navbar";
import InteractiveSlashHero from "@/components/InteractiveSlashHero";
import Features from "@/components/Features";
import Benefits from "@/components/Benefits";
import DownloadCTA from "@/components/DownloadCTA";
import Footer from "@/components/Footer";
import SmoothScroll from "@/components/scroll/SmoothScroll";

export default function Home() {
  return (
    <SmoothScroll>
      <main className="min-h-screen bg-[#050608] text-white selection:bg-[#00ADB5] selection:text-white">
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

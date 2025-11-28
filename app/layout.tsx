import type { Metadata } from "next";
import { Outfit, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  display: "swap",
});

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Liora Match - Platform Guru Privat Terverifikasi Terbaik",
  description: "Temukan guru privat berkualitas untuk akademik dan non-akademik. Aman, terverifikasi, dan sesuai kebutuhan Anda.",
  keywords: ["guru privat", "les privat", "bimbingan belajar", "tutor", "pembelajaran online", "akademik", "non-akademik"],
  authors: [{ name: "Liora Match" }],
  openGraph: {
    title: "Liora Match - Platform Guru Privat Terverifikasi",
    description: "Platform terpercaya untuk menemukan guru privat terverifikasi dengan mudah",
    type: "website",
  },
  viewport: "width=device-width, initial-scale=1",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" className={`${outfit.variable} ${jakarta.variable} scroll-smooth`}>
      <body className="antialiased font-sans bg-[#050608] text-white">
        {children}
      </body>
    </html>
  );
}

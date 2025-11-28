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
  metadataBase: new URL('https://lioramatch.netlify.app'),
  title: {
    default: "Liora Match - Platform Guru Privat Terverifikasi Terbaik",
    template: "%s | Liora Match"
  },
  description: "Temukan guru privat berkualitas untuk akademik dan non-akademik. Aman, terverifikasi, dan sesuai kebutuhan Anda. Booking instan tanpa ribet.",
  keywords: ["guru privat", "les privat", "bimbingan belajar", "tutor", "pembelajaran online", "akademik", "non-akademik", "liora match", "cari guru"],
  authors: [{ name: "Liora Match Team", url: "https://lioramatch.netlify.app" }],
  creator: "Liora Match",
  publisher: "Liora Match",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: "Liora Match - Platform Guru Privat Terverifikasi",
    description: "Platform terpercaya untuk menemukan guru privat terverifikasi dengan mudah. Jadwal fleksibel, harga transparan.",
    url: 'https://lioramatch.netlify.app',
    siteName: 'Liora Match',
    locale: 'id_ID',
    type: 'website',
    images: [
      {
        url: '/og-image.jpg', // Ensure you have this image in public folder or use a remote URL
        width: 1200,
        height: 630,
        alt: 'Liora Match Preview',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Liora Match - Cari Guru Privat Jadi Mudah',
    description: 'Temukan guru privat berkualitas untuk akademik dan non-akademik. Aman, terverifikasi, dan sesuai kebutuhan Anda.',
    creator: '@lioramatch', // Update if you have a real handle
    images: ['/twitter-image.jpg'], // Ensure you have this image
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: 'https://lioramatch.netlify.app',
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

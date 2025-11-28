'use client';

import { useRef, useState } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import SmoothScroll from '@/components/scroll/SmoothScroll';
import StorySection from '@/components/scroll/StorySection';
import ParallaxLayer from '@/components/scroll/ParallaxLayer';
import TextReveal from '@/components/scroll/TextReveal';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import {
    ClockIcon,
    QuestionMarkCircleIcon,
    ExclamationTriangleIcon,
    MagnifyingGlassIcon,
    ShieldCheckIcon,
    CalendarIcon,
    SparklesIcon,
    StarIcon,
    MapPinIcon
} from '@heroicons/react/24/outline';
import Button from '@/components/Button';

export default function ForParentsPage() {
    return (
        <SmoothScroll>
            <main className="bg-[#050608] text-white overflow-x-hidden selection:bg-[#00ADB5] selection:text-white">
                <Navbar />

                {/* CHAPTER 1: THE NOISE (ATMOSPHERIC INTRO) */}
                <StorySection height="h-[150vh]" className="z-10">
                    {(progress) => {
                        const opacity = useTransform(progress, [0, 0.5], [1, 0]);
                        const scale = useTransform(progress, [0, 0.5], [1, 0.9]);
                        const blur = useTransform(progress, [0, 0.5], ["0px", "10px"]);

                        return (
                            <div className="sticky top-0 h-screen w-full flex items-center justify-center overflow-hidden">
                                {/* Atmospheric Fog */}
                                <div className="absolute inset-0 bg-gradient-to-b from-[#050608] via-transparent to-[#050608] z-10 pointer-events-none"></div>
                                <ParallaxLayer progress={progress} speed={0.1} className="opacity-30">
                                    <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,_rgba(0,173,181,0.1),_transparent_70%)]"></div>
                                </ParallaxLayer>

                                {/* Floating "Anxiety" Elements */}
                                <ParallaxLayer progress={progress} speed={0.3} className="opacity-20 text-gray-500">
                                    <ClockIcon className="absolute top-[15%] left-[10%] w-32 h-32 rotate-12 blur-[2px]" />
                                    <QuestionMarkCircleIcon className="absolute bottom-[20%] right-[10%] w-40 h-40 -rotate-12 blur-[1px]" />
                                    <ExclamationTriangleIcon className="absolute top-[30%] right-[25%] w-24 h-24 rotate-45 blur-[3px]" />
                                    <div className="absolute top-[60%] left-[20%] text-9xl font-bold opacity-10 select-none">?</div>
                                    <div className="absolute bottom-[10%] left-[40%] text-8xl font-bold opacity-10 select-none">!</div>
                                </ParallaxLayer>

                                <motion.div
                                    style={{ opacity, scale, filter: blur }}
                                    className="text-center z-20 px-6 max-w-5xl"
                                >
                                    <h1 className="text-6xl md:text-8xl font-bold mb-8 leading-tight tracking-tight">
                                        Mencari guru<br />
                                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-400 to-gray-600">seharusnya tidak</span><br />
                                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00ADB5] to-[#00E0E9] drop-shadow-[0_0_30px_rgba(0,173,181,0.4)]">se-rumit ini.</span>
                                    </h1>
                                    <p className="text-xl md:text-2xl text-gray-400 max-w-2xl mx-auto font-light">
                                        Jadwal bentrok. Kualifikasi meragukan. Harga tidak transparan.
                                        <br /><span className="text-white font-medium">Sudah saatnya berubah.</span>
                                    </p>
                                </motion.div>
                            </div>
                        );
                    }}
                </StorySection>

                {/* CHAPTER 2: THE SPOTLIGHT (REVEAL) */}
                <StorySection height="h-[200vh]" className="z-20">
                    {(progress) => {
                        // Spotlight effect
                        const clipPath = useTransform(
                            progress,
                            [0, 0.8],
                            ["circle(0% at 50% 50%)", "circle(150% at 50% 50%)"]
                        );

                        return (
                            <div className="sticky top-0 h-screen w-full flex items-center justify-center">
                                <motion.div
                                    style={{ clipPath }}
                                    className="absolute inset-0 bg-gradient-to-br from-[#00ADB5] to-[#008C93] flex items-center justify-center overflow-hidden"
                                >
                                    {/* Texture */}
                                    <div className="absolute inset-0 opacity-20 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] mix-blend-overlay"></div>

                                    <div className="text-center text-white max-w-5xl px-6 relative z-10">
                                        <motion.div
                                            initial={{ opacity: 0, y: 50 }}
                                            whileInView={{ opacity: 1, y: 0 }}
                                            transition={{ duration: 0.8 }}
                                        >
                                            <TextReveal className="text-5xl md:text-8xl font-bold mb-8 text-white drop-shadow-lg">
                                                Clarity.
                                            </TextReveal>
                                            <p className="text-2xl md:text-3xl text-white/90 font-light max-w-3xl mx-auto">
                                                Liora Match menghubungkan Anda dengan guru terbaik dalam hitungan detik.
                                                <br /><strong>Tanpa drama. Tanpa ragu.</strong>
                                            </p>
                                        </motion.div>
                                    </div>
                                </motion.div>
                            </div>
                        );
                    }}
                </StorySection>

                {/* CHAPTER 3: THE SOLUTION (HIGH-FIDELITY MOCKUP) */}
                <StorySection height="h-[300vh]" className="z-30 bg-[#0B0B0D]">
                    {(progress) => {
                        const activeScreen = useTransform(progress, [0, 0.33, 0.66, 1], [0, 0, 1, 2]);
                        const activeIndex = useSpring(activeScreen, { stiffness: 200, damping: 30 });

                        return (
                            <div className="sticky top-0 h-screen w-full flex flex-col md:flex-row items-center justify-center overflow-hidden px-6 lg:px-20">

                                {/* Left: Text Content */}
                                <div className="w-full md:w-1/2 max-w-xl space-y-32 py-24 md:py-0 relative z-10">
                                    <FeatureText
                                        icon={<MagnifyingGlassIcon className="w-6 h-6" />}
                                        title="Pencarian Cerdas"
                                        desc="Filter berdasarkan mata pelajaran, lokasi, harga, dan jadwal. Algoritma kami menemukan yang paling cocok."
                                        active={activeIndex}
                                        index={0}
                                    />
                                    <FeatureText
                                        icon={<ShieldCheckIcon className="w-6 h-6" />}
                                        title="Terverifikasi & Aman"
                                        desc="Setiap guru melewati background check ketat. Identitas, ijazah, dan pengalaman—semua valid."
                                        active={activeIndex}
                                        index={1}
                                    />
                                    <FeatureText
                                        icon={<CalendarIcon className="w-6 h-6" />}
                                        title="Booking Instan"
                                        desc="Lihat jadwal real-time. Booking sesi dalam hitungan detik. Tanpa negosiasi yang melelahkan."
                                        active={activeIndex}
                                        index={2}
                                    />
                                </div>

                                {/* Right: Phone Mockup */}
                                <div className="w-full md:w-1/2 flex justify-center items-center h-[50vh] md:h-full relative">
                                    {/* Glow behind phone */}
                                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#00ADB5]/20 rounded-full blur-[100px]"></div>

                                    <div className="relative w-[320px] h-[650px] bg-[#1A1A1A] rounded-[3.5rem] border-[8px] border-[#2A2A2A] shadow-2xl overflow-hidden transform rotate-[-5deg] hover:rotate-0 transition-transform duration-700">
                                        {/* Dynamic Island */}
                                        <div className="absolute top-4 left-1/2 -translate-x-1/2 w-28 h-8 bg-black rounded-full z-30"></div>

                                        {/* Screen Content */}
                                        <div className="relative w-full h-full bg-[#050608] pt-14 px-5 overflow-hidden">
                                            <motion.div
                                                className="absolute inset-0 flex flex-col transition-transform duration-700 ease-in-out"
                                                style={{ y: useTransform(activeIndex, (v) => v * -100 + "%") }}
                                            >
                                                {/* Screen 1: Search UI */}
                                                <div className="h-full w-full p-5 flex flex-col gap-5">
                                                    <div className="flex items-center justify-between mb-2">
                                                        <h2 className="text-2xl font-bold text-white">Explore</h2>
                                                        <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#00ADB5] to-[#00D4DD]"></div>
                                                    </div>
                                                    <div className="h-12 bg-[#1A1A1A] rounded-2xl flex items-center px-4 gap-3 border border-white/5">
                                                        <MagnifyingGlassIcon className="w-5 h-5 text-gray-400" />
                                                        <div className="text-gray-500 text-sm">Cari Matematika, Fisika...</div>
                                                    </div>
                                                    <div className="flex gap-3 overflow-x-auto pb-2 no-scrollbar">
                                                        {['Akademik', 'Bahasa', 'Musik', 'Coding'].map((tag, i) => (
                                                            <div key={i} className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap ${i === 0 ? 'bg-[#00ADB5] text-white' : 'bg-[#1A1A1A] text-gray-400 border border-white/5'}`}>
                                                                {tag}
                                                            </div>
                                                        ))}
                                                    </div>
                                                    <div className="space-y-4">
                                                        {[1, 2, 3].map(i => (
                                                            <div key={i} className="bg-[#1A1A1A] p-4 rounded-3xl border border-white/5 flex gap-4">
                                                                <div className="w-14 h-14 bg-gray-800 rounded-2xl"></div>
                                                                <div className="flex-1">
                                                                    <div className="h-4 w-32 bg-gray-700 rounded mb-2"></div>
                                                                    <div className="flex items-center gap-1 text-xs text-[#00ADB5]">
                                                                        <StarIcon className="w-3 h-3 fill-current" />
                                                                        <span>4.9 (120 reviews)</span>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        ))}
                                                    </div>
                                                </div>

                                                {/* Screen 2: Profile & Verify */}
                                                <div className="h-full w-full p-5 flex flex-col gap-5 bg-[#050608]">
                                                    <div className="relative h-48 bg-gradient-to-b from-[#00ADB5]/20 to-transparent rounded-3xl overflow-hidden mb-4">
                                                        <div className="absolute bottom-4 left-4 flex items-end gap-3">
                                                            <div className="w-20 h-20 bg-gray-800 rounded-2xl border-4 border-[#050608]"></div>
                                                            <div className="mb-2">
                                                                <div className="text-xl font-bold text-white">Sarah W.</div>
                                                                <div className="text-sm text-gray-400">Guru Matematika</div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="flex gap-3">
                                                        <div className="flex-1 bg-[#1A1A1A] p-3 rounded-2xl border border-white/5 text-center">
                                                            <ShieldCheckIcon className="w-6 h-6 text-[#00ADB5] mx-auto mb-1" />
                                                            <div className="text-xs text-gray-400">Verified ID</div>
                                                        </div>
                                                        <div className="flex-1 bg-[#1A1A1A] p-3 rounded-2xl border border-white/5 text-center">
                                                            <StarIcon className="w-6 h-6 text-yellow-500 mx-auto mb-1" />
                                                            <div className="text-xs text-gray-400">Super Tutor</div>
                                                        </div>
                                                    </div>
                                                    <div className="bg-[#1A1A1A] p-4 rounded-3xl border border-white/5">
                                                        <h3 className="font-bold text-white mb-2">Tentang</h3>
                                                        <p className="text-sm text-gray-400 leading-relaxed">
                                                            Lulusan S1 Matematika UI dengan pengalaman mengajar 5 tahun. Spesialis persiapan UTBK dan Olimpiade.
                                                        </p>
                                                    </div>
                                                </div>

                                                {/* Screen 3: Booking */}
                                                <div className="h-full w-full p-5 flex flex-col gap-5 bg-[#050608]">
                                                    <div className="flex items-center gap-4 mb-4">
                                                        <div className="w-10 h-10 bg-[#1A1A1A] rounded-xl flex items-center justify-center text-white">←</div>
                                                        <div className="font-bold text-xl text-white">Pilih Jadwal</div>
                                                    </div>
                                                    <div className="bg-[#1A1A1A] p-4 rounded-3xl border border-white/5 mb-4">
                                                        <div className="flex justify-between items-center mb-4 text-white">
                                                            <span className="font-bold">Oktober 2025</span>
                                                            <span>→</span>
                                                        </div>
                                                        <div className="grid grid-cols-7 gap-2 text-center text-xs text-gray-400">
                                                            {['S', 'M', 'T', 'W', 'T', 'F', 'S'].map(d => <div key={d}>{d}</div>)}
                                                            {Array.from({ length: 31 }).map((_, i) => (
                                                                <div key={i} className={`p-2 rounded-full ${i === 14 ? 'bg-[#00ADB5] text-white shadow-lg shadow-[#00ADB5]/30' : 'hover:bg-white/5'}`}>
                                                                    {i + 1}
                                                                </div>
                                                            ))}
                                                        </div>
                                                    </div>
                                                    <div className="space-y-3">
                                                        <div className="p-4 border border-[#00ADB5] bg-[#00ADB5]/10 rounded-2xl flex justify-between items-center">
                                                            <span className="font-bold text-[#00ADB5]">16:00 - 17:30</span>
                                                            <div className="w-5 h-5 rounded-full bg-[#00ADB5] flex items-center justify-center text-black text-xs">✓</div>
                                                        </div>
                                                        <div className="p-4 bg-[#1A1A1A] rounded-2xl text-gray-500 flex justify-between items-center">
                                                            <span>19:00 - 20:30</span>
                                                        </div>
                                                    </div>
                                                    <div className="mt-auto">
                                                        <div className="w-full h-14 bg-gradient-to-r from-[#00ADB5] to-[#00D4DD] rounded-2xl flex items-center justify-center text-white font-bold shadow-lg shadow-[#00ADB5]/20">
                                                            Konfirmasi Booking
                                                        </div>
                                                    </div>
                                                </div>

                                            </motion.div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        );
                    }}
                </StorySection>

                {/* CHAPTER 4: CTA (PREMIUM) */}
                <StorySection height="h-[80vh]" className="z-40 bg-[#050608]">
                    {(progress) => (
                        <div className="h-full flex flex-col items-center justify-center text-center px-6 relative overflow-hidden">
                            <ParallaxLayer progress={progress} speed={-0.1} className="absolute inset-0 opacity-30">
                                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-[#00ADB5] to-purple-500 rounded-full blur-[150px] animate-pulse"></div>
                            </ParallaxLayer>

                            <motion.div
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.8 }}
                                className="relative z-10 max-w-4xl"
                            >
                                <SparklesIcon className="w-16 h-16 text-[#00ADB5] mx-auto mb-8 animate-float" />
                                <h2 className="text-5xl md:text-7xl font-bold mb-8 tracking-tight">
                                    Pendidikan terbaik,<br />
                                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00ADB5] to-[#00E0E9]">di ujung jari Anda.</span>
                                </h2>
                                <p className="text-xl text-gray-400 mb-12 max-w-2xl mx-auto">
                                    Bergabung dengan komunitas orang tua cerdas yang memilih Liora Match.
                                </p>

                                <div className="flex flex-col sm:flex-row gap-6 justify-center">
                                    <Button size="xl" className="shadow-[0_0_40px_rgba(0,173,181,0.4)] hover:scale-105 transition-transform duration-300 bg-gradient-to-r from-[#00ADB5] to-[#00D4DD] border-none">
                                        Mulai Cari Guru
                                    </Button>
                                    <Button size="xl" variant="outline" className="border-white/10 hover:bg-white/5 text-white backdrop-blur-md">
                                        Pelajari Lebih Lanjut
                                    </Button>
                                </div>
                            </motion.div>
                        </div>
                    )}
                </StorySection>

                <Footer />
            </main>
        </SmoothScroll>
    );
}

function FeatureText({ icon, title, desc, active, index }: any) {
    const opacity = useTransform(active, [index - 0.5, index, index + 0.5], [0.6, 1, 0.6]);
    const scale = useTransform(active, [index - 0.5, index, index + 0.5], [0.98, 1, 0.98]);
    const x = useTransform(active, [index - 0.5, index, index + 0.5], [-10, 0, -10]);

    return (
        <motion.div style={{ opacity, scale, x }} className="space-y-4 transition-colors duration-300">
            <div className={`inline-flex items-center gap-3 px-5 py-2 rounded-full border transition-colors duration-300 ${active === index ? 'bg-[#00ADB5]/10 text-[#00ADB5] border-[#00ADB5]/20' : 'bg-white/5 text-gray-400 border-white/5'}`}>
                {icon}
                <span className="font-bold tracking-wide uppercase text-sm">{title}</span>
            </div>
            <h3 className={`text-4xl md:text-5xl font-bold leading-tight transition-colors duration-300 ${active === index ? 'text-white' : 'text-gray-500'}`}>{title}</h3>
            <p className="text-lg text-gray-400 leading-relaxed">{desc}</p>
        </motion.div>
    );
}

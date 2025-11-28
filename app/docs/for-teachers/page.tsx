'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import SmoothScroll from '@/components/scroll/SmoothScroll';
import StorySection from '@/components/scroll/StorySection';
import ParallaxLayer from '@/components/scroll/ParallaxLayer';
import TextReveal from '@/components/scroll/TextReveal';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Button from '@/components/Button';
import {
    BookOpenIcon,
    PencilSquareIcon,
    ComputerDesktopIcon,
    DocumentTextIcon,
    CurrencyDollarIcon,
    ChartBarIcon,
    UserGroupIcon,
    CheckBadgeIcon
} from '@heroicons/react/24/outline';

export default function ForTeachersPage() {
    return (
        <SmoothScroll>
            <main className="bg-[#050608] text-white overflow-x-hidden">
                <Navbar />

                {/* CHAPTER 1: THE PASSION (INTRO) */}
                <StorySection height="h-[150vh]" className="z-10">
                    {(progress) => {
                        const opacity = useTransform(progress, [0, 0.5], [1, 0]);
                        const scale = useTransform(progress, [0, 0.5], [1, 0.8]);
                        const yTools = useTransform(progress, [0, 1], [0, -100]);

                        return (
                            <div className="sticky top-0 h-screen w-full flex items-center justify-center overflow-hidden">
                                {/* Floating Tools */}
                                <ParallaxLayer progress={progress} speed={0.3} className="opacity-20">
                                    <BookOpenIcon className="absolute top-[20%] left-[15%] w-24 h-24 text-[#00ADB5] -rotate-12" />
                                    <PencilSquareIcon className="absolute bottom-[30%] right-[20%] w-20 h-20 text-purple-500 rotate-12" />
                                    <ComputerDesktopIcon className="absolute top-[40%] right-[10%] w-16 h-16 text-blue-500 -rotate-6" />
                                </ParallaxLayer>

                                <motion.div style={{ opacity, scale, y: yTools }} className="text-center z-10 px-6 max-w-4xl">
                                    <h1 className="text-5xl md:text-7xl font-bold mb-8 leading-tight">
                                        Mengajar adalah <span className="text-[#00ADB5]">passion</span>.<br />
                                        <span className="text-gray-500 text-4xl md:text-6xl">Administrasi adalah beban.</span>
                                    </h1>
                                    <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                                        Jangan biarkan urusan jadwal, penagihan, dan marketing menghalangi Anda mencerdaskan bangsa.
                                    </p>
                                </motion.div>
                            </div>
                        );
                    }}
                </StorySection>

                {/* CHAPTER 2: THE SOLUTION (DASHBOARD REVEAL) */}
                <StorySection height="h-[200vh]" className="z-20">
                    {(progress) => {
                        // Circle reveal effect
                        const clipPath = useTransform(
                            progress,
                            [0, 0.8],
                            ["circle(0% at 50% 50%)", "circle(150% at 50% 50%)"]
                        );

                        return (
                            <div className="sticky top-0 h-screen w-full flex items-center justify-center">
                                <motion.div
                                    style={{ clipPath }}
                                    className="absolute inset-0 bg-white flex items-center justify-center overflow-hidden"
                                >
                                    <div className="absolute inset-0 bg-gray-50 opacity-50"></div>

                                    <div className="relative w-full max-w-6xl px-6 flex flex-col md:flex-row items-center gap-12">
                                        <div className="w-full md:w-1/2 text-gray-900">
                                            <TextReveal className="text-4xl md:text-6xl font-bold mb-6 text-gray-900">
                                                Fokus pada siswa. Biarkan kami mengurus sisanya.
                                            </TextReveal>
                                            <p className="text-xl text-gray-600 mb-8">
                                                Dashboard Liora memberikan Anda kendali penuh tanpa kerumitan.
                                            </p>
                                            <ul className="space-y-4">
                                                {[
                                                    "Jadwal Otomatis",
                                                    "Pembayaran Terjamin",
                                                    "Laporan Progres Digital"
                                                ].map((item, i) => (
                                                    <motion.li
                                                        key={i}
                                                        initial={{ opacity: 0, x: -20 }}
                                                        whileInView={{ opacity: 1, x: 0 }}
                                                        transition={{ delay: i * 0.2 }}
                                                        className="flex items-center gap-3 text-lg font-semibold"
                                                    >
                                                        <CheckBadgeIcon className="w-6 h-6 text-[#00ADB5]" />
                                                        {item}
                                                    </motion.li>
                                                ))}
                                            </ul>
                                        </div>

                                        {/* Dashboard Mockup */}
                                        <div className="w-full md:w-1/2">
                                            <div className="relative bg-white rounded-2xl shadow-2xl border border-gray-200 p-6 transform rotate-3 hover:rotate-0 transition-transform duration-500">
                                                <div className="flex items-center justify-between mb-8 border-b border-gray-100 pb-4">
                                                    <div className="flex items-center gap-3">
                                                        <div className="w-10 h-10 bg-[#00ADB5] rounded-lg flex items-center justify-center text-white font-bold">L</div>
                                                        <div className="font-bold text-gray-900">Teacher Dashboard</div>
                                                    </div>
                                                    <div className="flex gap-2">
                                                        <div className="w-3 h-3 rounded-full bg-red-400"></div>
                                                        <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                                                        <div className="w-3 h-3 rounded-full bg-green-400"></div>
                                                    </div>
                                                </div>

                                                <div className="grid grid-cols-2 gap-4 mb-6">
                                                    <div className="bg-blue-50 p-4 rounded-xl">
                                                        <div className="text-sm text-blue-600 mb-1">Total Siswa</div>
                                                        <div className="text-2xl font-bold text-blue-900">24</div>
                                                    </div>
                                                    <div className="bg-green-50 p-4 rounded-xl">
                                                        <div className="text-sm text-green-600 mb-1">Pendapatan</div>
                                                        <div className="text-2xl font-bold text-green-900">Rp 8.5jt</div>
                                                    </div>
                                                </div>

                                                <div className="space-y-3">
                                                    <div className="text-sm font-semibold text-gray-500">Jadwal Hari Ini</div>
                                                    {[1, 2].map(i => (
                                                        <div key={i} className="flex items-center gap-4 p-3 border border-gray-100 rounded-xl hover:bg-gray-50">
                                                            <div className="w-12 h-12 bg-gray-200 rounded-full"></div>
                                                            <div className="flex-1">
                                                                <div className="font-bold text-gray-900">Matematika Dasar</div>
                                                                <div className="text-sm text-gray-500">16:00 - 17:30</div>
                                                            </div>
                                                            <div className="px-3 py-1 bg-[#00ADB5]/10 text-[#00ADB5] text-xs rounded-full font-bold">
                                                                Upcoming
                                                            </div>
                                                        </div>
                                                    ))}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </motion.div>
                            </div>
                        );
                    }}
                </StorySection>

                {/* CHAPTER 3: THE GROWTH (STATS) */}
                <StorySection height="h-[150vh]" className="z-30 bg-[#0B0B0D]">
                    {(progress) => (
                        <div className="h-full flex items-center justify-center px-6 relative overflow-hidden">
                            {/* Interactive Background Particles */}
                            <ParallaxLayer progress={progress} speed={0.2} className="absolute inset-0">
                                <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#00ADB5] rounded-full blur-[150px] opacity-20 animate-pulse"></div>
                                <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-purple-500 rounded-full blur-[120px] opacity-20 animate-pulse delay-1000"></div>
                            </ParallaxLayer>

                            {/* Grid Pattern */}
                            <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay pointer-events-none"></div>
                            <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none"></div>

                            <div className="max-w-7xl w-full grid md:grid-cols-3 gap-8 relative z-10">
                                <StatCard
                                    icon={<UserGroupIcon className="w-10 h-10 text-[#00ADB5]" />}
                                    value="10x"
                                    label="Lebih Banyak Siswa"
                                    desc="Jangkauan lebih luas tanpa batas geografis."
                                    delay={0}
                                />
                                <StatCard
                                    icon={<CurrencyDollarIcon className="w-10 h-10 text-green-400" />}
                                    value="+40%"
                                    label="Kenaikan Income"
                                    desc="Rata-rata kenaikan pendapatan mitra guru kami."
                                    delay={0.2}
                                    featured={true}
                                />
                                <StatCard
                                    icon={<ChartBarIcon className="w-10 h-10 text-purple-400" />}
                                    value="0"
                                    label="Biaya Pendaftaran"
                                    desc="100% Gratis untuk mulai mengajar."
                                    delay={0.4}
                                />
                            </div>
                        </div>
                    )}
                </StorySection>

                {/* CHAPTER 4: CTA */}
                <StorySection height="h-[80vh]" className="z-40 bg-[#050608]">
                    {(progress) => (
                        <div className="h-full flex flex-col items-center justify-center text-center px-6 relative overflow-hidden">
                            <ParallaxLayer progress={progress} speed={-0.1} className="absolute inset-0 opacity-20">
                                <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-[#00ADB5] rounded-full blur-[120px]"></div>
                            </ParallaxLayer>

                            <motion.div
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.8 }}
                                className="relative z-10 max-w-3xl"
                            >
                                <h2 className="text-4xl md:text-6xl font-bold mb-8">
                                    Mulai Karir Mengajar Anda
                                </h2>
                                <p className="text-xl text-gray-400 mb-12">
                                    Bergabung dengan komunitas pengajar profesional terbesar di Indonesia.
                                </p>

                                <div className="flex flex-col sm:flex-row gap-6 justify-center">
                                    <Button size="xl" className="shadow-[0_0_30px_rgba(0,173,181,0.4)] hover:scale-105 transition-transform duration-300">
                                        Daftar Sebagai Guru
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

function StatCard({ icon, value, label, desc, delay, featured }: any) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ y: -10, scale: 1.02 }}
            transition={{ duration: 0.6, delay }}
            className={`relative group p-8 rounded-[2rem] border transition-all duration-500 overflow-hidden
                ${featured
                    ? 'bg-[#00ADB5]/5 border-[#00ADB5]/30 shadow-[0_0_50px_rgba(0,173,181,0.1)]'
                    : 'bg-white/5 border-white/10 hover:border-white/20 hover:bg-white/10'
                }
            `}
        >
            {/* Hover Glow Effect */}
            <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

            <div className={`inline-flex items-center justify-center w-20 h-20 rounded-2xl mb-6 transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3
                ${featured ? 'bg-[#00ADB5]/20' : 'bg-white/5'}
            `}>
                {icon}
            </div>

            <div className="relative z-10">
                <div className="text-6xl font-bold text-white mb-3 tracking-tight">{value}</div>
                <div className={`text-xl font-bold mb-2 ${featured ? 'text-[#00ADB5]' : 'text-gray-200'}`}>{label}</div>
                <p className="text-gray-400 leading-relaxed">{desc}</p>
            </div>
        </motion.div>
    );
}

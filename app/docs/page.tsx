'use client';

import Link from "next/link";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SmoothScroll from "@/components/scroll/SmoothScroll";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import {
    QuestionMarkCircleIcon,
    BookOpenIcon,
    ArrowRightIcon
} from "@heroicons/react/24/outline";

export default function DocsPage() {
    const [openFAQ, setOpenFAQ] = useState<number | null>(0);

    return (
        <SmoothScroll>
            <main className="min-h-screen bg-[#050608] text-white selection:bg-[#00ADB5] selection:text-white">
                <Navbar />

                <div className="relative pt-32 pb-20 overflow-hidden">
                    {/* Background Elements */}
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-gradient-to-b from-[#00ADB5]/10 to-transparent pointer-events-none"></div>
                    <div className="absolute top-20 right-0 w-96 h-96 bg-[#00ADB5]/5 rounded-full blur-3xl pointer-events-none"></div>
                    <div className="absolute bottom-0 left-0 w-64 h-64 bg-purple-500/5 rounded-full blur-3xl pointer-events-none"></div>

                    <div className="max-w-6xl mx-auto px-6 lg:px-8 relative z-10">
                        {/* Header */}
                        <div className="text-center mb-20">
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: 0.1 }}
                                className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-[#00ADB5] to-[#00D4DD] rounded-3xl mb-8 shadow-[0_0_30px_rgba(0,173,181,0.3)]"
                            >
                                <BookOpenIcon className="w-10 h-10 text-white" />
                            </motion.div>

                            <motion.h1
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: 0.1 }}
                                className="text-5xl md:text-7xl font-bold mb-6 tracking-tight"
                            >
                                Pusat <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00ADB5] to-[#00E0E9]">Bantuan</span>
                            </motion.h1>

                            <motion.p
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: 0.2 }}
                                className="text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed"
                            >
                                Temukan panduan lengkap untuk memulai perjalanan belajar atau mengajar Anda di Liora Match.
                            </motion.p>
                        </div>

                        {/* Guides Grid */}
                        <div className="grid md:grid-cols-2 gap-8 mb-32">
                            <GuideCard
                                href="/docs/for-parents"
                                icon={<UserGroupIcon className="w-8 h-8 text-white" />}
                                title="Panduan Orang Tua"
                                description="Pelajari cara mencari guru terbaik, mengatur jadwal, dan memantau perkembangan anak Anda."
                                features={["Cara Booking Guru", "Sistem Pembayaran Aman", "Monitoring Progress"]}
                                delay={0.3}
                            />
                            <GuideCard
                                href="/docs/for-teachers"
                                icon={<AcademicCapIcon className="w-8 h-8 text-white" />}
                                title="Panduan Guru"
                                description="Mulai karir mengajar Anda, kelola jadwal, dan tingkatkan pendapatan dengan fitur premium kami."
                                features={["Verifikasi Akun", "Kelola Jadwal Mengajar", "Pencairan Dana"]}
                                delay={0.4}
                            />
                        </div>

                        {/* FAQ Section */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            className="max-w-3xl mx-auto"
                        >
                            <div className="flex items-center gap-4 mb-10 justify-center">
                                <QuestionMarkCircleIcon className="w-8 h-8 text-[#00ADB5]" />
                                <h2 className="text-3xl font-bold">Frequently Asked Questions</h2>
                            </div>

                            <div className="space-y-4">
                                <FAQItem
                                    question="Apakah Liora Match gratis?"
                                    answer="Aplikasi Liora Match gratis untuk diunduh dan digunakan. Platform mengambil fee 15% dari setiap transaksi yang terjadi."
                                    isOpen={openFAQ === 0}
                                    onClick={() => setOpenFAQ(openFAQ === 0 ? null : 0)}
                                />
                                <FAQItem
                                    question="Bagaimana cara verifikasi guru?"
                                    answer="Setiap guru melalui proses verifikasi yang ketat termasuk verifikasi identitas, kredensial pendidikan, dan background check untuk memastikan keamanan siswa."
                                    isOpen={openFAQ === 1}
                                    onClick={() => setOpenFAQ(openFAQ === 1 ? null : 1)}
                                />
                                <FAQItem
                                    question="Apakah bisa refund jika tidak cocok dengan guru?"
                                    answer="Ya, kami memiliki kebijakan refund untuk sesi pertama jika Anda tidak puas. Detail lengkap ada di Terms of Service."
                                    isOpen={openFAQ === 2}
                                    onClick={() => setOpenFAQ(openFAQ === 2 ? null : 2)}
                                />
                                <FAQItem
                                    question="Bagaimana sistem pembayaran bekerja?"
                                    answer="Pembayaran dilakukan melalui aplikasi dengan berbagai metode (transfer bank, e-wallet, kartu kredit). Dana ditahan hingga sesi selesai untuk keamanan kedua belah pihak."
                                    isOpen={openFAQ === 3}
                                    onClick={() => setOpenFAQ(openFAQ === 3 ? null : 3)}
                                />
                            </div>
                        </motion.div>
                    </div>
                </div>
                <Footer />
            </main>
        </SmoothScroll>
    );
}

import { UserGroupIcon, AcademicCapIcon } from "@heroicons/react/24/outline";

function GuideCard({ href, icon, title, description, features, delay }: any) {
    return (
        <Link href={href}>
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay }}
                className="group relative h-full bg-white/5 border border-white/10 rounded-[2.5rem] p-8 hover:bg-white/10 transition-colors duration-300 overflow-hidden"
            >
                {/* Hover Glow */}
                <div className="absolute top-0 right-0 w-64 h-64 bg-[#00ADB5]/20 rounded-full blur-[100px] opacity-0 group-hover:opacity-100 transition-opacity duration-500 -translate-y-1/2 translate-x-1/2"></div>

                <div className="relative z-10">
                    <div className="flex items-start justify-between mb-8">
                        <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#00ADB5] to-[#00D4DD] flex items-center justify-center shadow-lg shadow-[#00ADB5]/20 group-hover:scale-110 transition-transform duration-300">
                            {icon}
                        </div>
                        <div className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center group-hover:bg-white group-hover:text-black transition-all duration-300">
                            <ArrowRightIcon className="w-4 h-4" />
                        </div>
                    </div>

                    <h2 className="text-3xl font-bold mb-4 group-hover:text-[#00ADB5] transition-colors">
                        {title}
                    </h2>
                    <p className="text-gray-400 mb-8 leading-relaxed">
                        {description}
                    </p>

                    <div className="space-y-3 border-t border-white/10 pt-6">
                        {features.map((feature: string, i: number) => (
                            <div key={i} className="flex items-center gap-3 text-sm text-gray-400">
                                <div className="w-1.5 h-1.5 rounded-full bg-[#00ADB5]"></div>
                                {feature}
                            </div>
                        ))}
                    </div>
                </div>
            </motion.div>
        </Link>
    );
}

function FAQItem({ question, answer, isOpen, onClick }: any) {
    return (
        <motion.div
            initial={false}
            className={`border rounded-2xl overflow-hidden transition-colors duration-300 ${isOpen ? 'bg-[#00ADB5]/10 border-[#00ADB5]/30' : 'bg-white/5 border-white/10 hover:bg-white/10'}`}
        >
            <button
                onClick={onClick}
                className="w-full flex items-center justify-between p-6 text-left"
            >
                <span className={`font-bold text-lg transition-colors ${isOpen ? 'text-[#00ADB5]' : 'text-white'}`}>
                    {question}
                </span>
                <div className={`w-8 h-8 rounded-full flex items-center justify-center border transition-all duration-300 ${isOpen ? 'bg-[#00ADB5] border-[#00ADB5] rotate-180' : 'border-white/20'}`}>
                    <svg className={`w-4 h-4 transition-colors ${isOpen ? 'text-black' : 'text-white'}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                </div>
            </button>
            <AnimatePresence initial={false}>
                {isOpen && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                    >
                        <div className="px-6 pb-6 text-gray-400 leading-relaxed border-t border-white/5 pt-4">
                            {answer}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.div>
    );
}

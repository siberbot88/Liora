'use client';

import { motion } from "framer-motion";
import Button from "./Button";
import { DevicePhoneMobileIcon } from "@heroicons/react/24/solid";
import { ShieldCheckIcon, UserGroupIcon, StarIcon } from "@heroicons/react/24/outline";

export default function DownloadCTA() {
    return (
        <section id="download" className="py-32 bg-[#050608] relative overflow-hidden">
            {/* Animated Background */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-[#00ADB5]/10 via-[#050608]/50 to-[#050608]"></div>
                <motion.div
                    animate={{
                        scale: [1, 1.2, 1],
                        opacity: [0.3, 0.5, 0.3]
                    }}
                    transition={{
                        duration: 8,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }}
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#00ADB5]/5 rounded-full blur-[100px]"
                ></motion.div>
            </div>

            <div className="relative max-w-7xl mx-auto px-6 lg:px-8 z-10">
                <div className="max-w-5xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="relative bg-white/5 backdrop-blur-2xl rounded-[3rem] p-12 md:p-20 border border-white/10 overflow-hidden text-center"
                    >
                        {/* Glow Effect */}
                        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-1/2 bg-gradient-to-b from-[#00ADB5]/10 to-transparent"></div>

                        <div className="relative z-10">
                            <motion.div
                                initial={{ scale: 0 }}
                                whileInView={{ scale: 1 }}
                                transition={{ type: "spring", stiffness: 200, delay: 0.2 }}
                                className="inline-flex items-center justify-center w-24 h-24 bg-gradient-to-br from-[#00ADB5] to-[#00D4DD] rounded-3xl mb-10 shadow-[0_0_40px_rgba(0,173,181,0.4)]"
                            >
                                <DevicePhoneMobileIcon className="w-12 h-12 text-white" />
                            </motion.div>

                            <h2 className="text-5xl md:text-7xl font-bold mb-6 text-white tracking-tight">
                                Mulai Perjalanan Anda
                            </h2>
                            <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-2xl mx-auto">
                                Bergabung dengan ribuan siswa dan guru yang telah menemukan kecocokan mereka di Liora Match.
                            </p>

                            {/* Download Buttons */}
                            <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
                                <a href="#" className="block">
                                    <Button size="xl" className="w-full flex items-center justify-center gap-3 shadow-[0_0_30px_rgba(0,173,181,0.3)] hover:scale-105 transition-transform">
                                        <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09l.01-.01zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z" />
                                        </svg>
                                        Download for iOS
                                    </Button>
                                </a>
                                <a href="#" className="block">
                                    <Button size="xl" variant="outline" className="w-full flex items-center justify-center gap-3 border-white/20 text-white hover:bg-white hover:text-black hover:scale-105 transition-all">
                                        <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M3.609 1.814L13.792 12 3.61 22.186a.996.996 0 01-.61-.92V2.734a1 1 0 01.609-.92zm10.89 10.893l2.302 2.302-10.937 6.333 8.635-8.635zm3.199-3.198l2.807 1.626a1 1 0 010 1.73l-2.808 1.626L15.206 12l2.492-2.491zM5.864 2.658L16.802 8.99l-2.303 2.303-8.635-8.635z" />
                                        </svg>
                                        Download for Android
                                    </Button>
                                </a>
                            </div>

                            {/* Trust Indicators */}
                            <div className="flex flex-wrap justify-center gap-8 md:gap-12 text-gray-400">
                                <div className="flex items-center gap-3">
                                    <ShieldCheckIcon className="w-6 h-6 text-[#00ADB5]" />
                                    <span className="font-semibold">100% Aman</span>
                                </div>
                                <div className="flex items-center gap-3">
                                    <UserGroupIcon className="w-6 h-6 text-[#00ADB5]" />
                                    <span className="font-semibold">10.000+ Pengguna</span>
                                </div>
                                <div className="flex items-center gap-3">
                                    <StarIcon className="w-6 h-6 text-[#00ADB5]" />
                                    <span className="font-semibold">Rating 4.8/5</span>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}

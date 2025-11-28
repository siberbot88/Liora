'use client';

import { motion } from "framer-motion";
import {
    MapPinIcon,
    CalendarDaysIcon,
    UserGroupIcon,
    VideoCameraIcon,
    ShieldCheckIcon,
    ChartBarIcon
} from "@heroicons/react/24/outline";

export default function Features() {
    const features = [
        {
            icon: MapPinIcon,
            title: "Filter Area & Mata Pelajaran",
            description: "Cari guru berdasarkan lokasi terdekat dan mata pelajaran yang diinginkan dengan mudah."
        },
        {
            icon: CalendarDaysIcon,
            title: "Jadwal Fleksibel & Booking Cepat",
            description: "Pilih waktu yang sesuai dengan kesibukan Anda. Proses booking praktis dan anti-ribet."
        },
        {
            icon: UserGroupIcon,
            title: "Profil Guru Lengkap",
            description: "Lihat video perkenalan, kredensial, ulasan, dan rating dari guru sebelum memilih."
        },
        {
            icon: VideoCameraIcon,
            title: "Kelas Online & Rekaman",
            description: "Belajar dari mana saja dengan fitur kelas online dan akses rekaman sesi untuk review."
        },
        {
            icon: ShieldCheckIcon,
            title: "Keamanan Terjamin",
            description: "Alamat ter-mask untuk privasi, guru terverifikasi, chat aman antara orang tua dan guru."
        },
        {
            icon: ChartBarIcon,
            title: "Absensi & Progres",
            description: "Pantau kemajuan belajar dengan laporan lengkap dan sistem absensi otomatis."
        }
    ];

    const container = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1
            }
        }
    };

    const item = {
        hidden: { opacity: 0, y: 20 },
        show: { opacity: 1, y: 0, transition: { duration: 0.5 } }
    };

    return (
        <section id="features" className="py-32 bg-[#050608] relative overflow-hidden">
            {/* Background Elements */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                <div className="absolute top-1/4 left-0 w-[500px] h-[500px] bg-[#00ADB5]/5 rounded-full blur-[120px]"></div>
                <div className="absolute bottom-1/4 right-0 w-[500px] h-[500px] bg-purple-500/5 rounded-full blur-[120px]"></div>
            </div>

            <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-20"
                >
                    <h2 className="text-4xl md:text-6xl font-bold mb-6">
                        Fitur <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00ADB5] to-[#00E0E9]">Unggulan</span>
                    </h2>
                    <p className="text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed">
                        Semua yang Anda butuhkan untuk pengalaman belajar yang aman, nyaman, dan efektif.
                    </p>
                </motion.div>

                {/* Features Grid */}
                <motion.div
                    variants={container}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, margin: "-100px" }}
                    className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
                >
                    {features.map((feature, index) => (
                        <motion.div key={index} variants={item}>
                            <div className="group relative h-full bg-white/5 border border-white/10 rounded-[2rem] p-8 hover:bg-white/10 transition-all duration-300 hover:-translate-y-1">
                                {/* Hover Glow */}
                                <div className="absolute inset-0 bg-gradient-to-br from-[#00ADB5]/0 to-[#00ADB5]/0 group-hover:from-[#00ADB5]/5 group-hover:to-transparent rounded-[2rem] transition-all duration-500"></div>

                                <div className="relative z-10">
                                    {/* Icon */}
                                    <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#00ADB5] to-[#00D4DD] flex items-center justify-center mb-6 shadow-lg shadow-[#00ADB5]/20 group-hover:scale-110 transition-transform duration-300">
                                        <feature.icon className="w-8 h-8 text-white" />
                                    </div>

                                    {/* Title */}
                                    <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-[#00ADB5] transition-colors">
                                        {feature.title}
                                    </h3>

                                    {/* Description */}
                                    <p className="text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors">
                                        {feature.description}
                                    </p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}

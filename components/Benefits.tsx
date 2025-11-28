'use client';

import { motion } from "framer-motion";
import {
    MagnifyingGlassIcon,
    ClockIcon,
    ChartBarIcon,
    ShieldCheckIcon,
    UserGroupIcon,
    BanknotesIcon,
    UserCircleIcon,
    CalendarIcon
} from "@heroicons/react/24/outline";

export default function Benefits() {
    const parentBenefits = [
        {
            icon: MagnifyingGlassIcon,
            title: "Pencarian Guru yang Mudah",
            description: "Filter berdasarkan lokasi, mata pelajaran, rating, dan harga"
        },
        {
            icon: ClockIcon,
            title: "Jadwal yang Fleksibel",
            description: "Pilih waktu yang sesuai dengan kesibukan anak"
        },
        {
            icon: ChartBarIcon,
            title: "Pantau Progres Belajar",
            description: "Laporan lengkap, rekaman sesi, dan sistem absensi"
        },
        {
            icon: ShieldCheckIcon,
            title: "Merasa Aman & Terlindungi",
            description: "Guru terverifikasi, privasi terjaga, pembayaran aman"
        }
    ];

    const teacherBenefits = [
        {
            icon: UserGroupIcon,
            title: "Akses ke Lebih Banyak Murid",
            description: "Jangkau lebih banyak siswa yang membutuhkan"
        },
        {
            icon: BanknotesIcon,
            title: "Penghasilan Lebih Stabil",
            description: "Platform fee hanya 15%, withdrawal mudah"
        },
        {
            icon: UserCircleIcon,
            title: "Profil Profesional",
            description: "Tampilkan kredensial, video perkenalan, ulasan"
        },
        {
            icon: CalendarIcon,
            title: "Manajemen Jadwal Mudah",
            description: "Atur availability dan terima booking otomatis"
        }
    ];

    return (
        <section className="py-32 bg-[#0B0B0D] relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-24"
                >
                    <h2 className="text-4xl md:text-6xl font-bold mb-6">
                        Keuntungan untuk <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00ADB5] to-[#00E0E9]">Semua Pihak</span>
                    </h2>
                    <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                        Solusi win-win untuk ekosistem pendidikan yang lebih baik.
                    </p>
                </motion.div>

                <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
                    {/* For Parents/Students */}
                    <div>
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            className="sticky top-32"
                        >
                            <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#00ADB5]/10 text-[#00ADB5] rounded-full font-bold mb-8 border border-[#00ADB5]/20">
                                <UserGroupIcon className="w-5 h-5" />
                                Untuk Orang Tua & Siswa
                            </div>
                            <div className="space-y-6">
                                {parentBenefits.map((benefit, index) => (
                                    <BenefitCard key={index} benefit={benefit} delay={index * 0.1} />
                                ))}
                            </div>
                        </motion.div>
                    </div>

                    {/* For Teachers */}
                    <div>
                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                        >
                            <div className="inline-flex items-center gap-2 px-4 py-2 bg-purple-500/10 text-purple-400 rounded-full font-bold mb-8 border border-purple-500/20">
                                <UserCircleIcon className="w-5 h-5" />
                                Untuk Guru
                            </div>
                            <div className="space-y-6">
                                {teacherBenefits.map((benefit, index) => (
                                    <BenefitCard key={index} benefit={benefit} delay={index * 0.1} variant="purple" />
                                ))}
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
}

function BenefitCard({ benefit, delay, variant = "cyan" }: any) {
    const colors = {
        cyan: "from-[#00ADB5] to-[#00D4DD] shadow-[#00ADB5]/20",
        purple: "from-purple-500 to-pink-500 shadow-purple-500/20"
    };

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay }}
            className="flex items-start gap-6 p-6 rounded-3xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors duration-300"
        >
            <div className={`flex-shrink-0 w-14 h-14 rounded-2xl bg-gradient-to-br ${colors[variant as keyof typeof colors]} flex items-center justify-center shadow-lg`}>
                <benefit.icon className="w-7 h-7 text-white" />
            </div>
            <div>
                <h3 className="text-xl font-bold mb-2 text-white">
                    {benefit.title}
                </h3>
                <p className="text-gray-400 leading-relaxed">
                    {benefit.description}
                </p>
            </div>
        </motion.div>
    );
}

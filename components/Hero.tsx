'use client';
import { useEffect, useState } from "react";
import Button from "./Button";
import { ShieldCheckIcon, ClockIcon, CheckBadgeIcon } from "@heroicons/react/24/solid";

export default function Hero() {
    const [isActive, setIsActive] = useState(false);
    const [currentSubject, setCurrentSubject] = useState(0);

    const subjects = [
        "Matematika",
        "Bahasa Inggris",
        "Seni & Musik",
        "Coding & Teknologi"
    ];

    useEffect(() => {
        setIsActive(true);

        // Rotating text animation
        const interval = setInterval(() => {
            setCurrentSubject((prev) => (prev + 1) % subjects.length);
        }, 2500);

        return () => clearInterval(interval);
    }, []);

    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
            {/* Background Decorative Elements */}
            <div className="absolute inset-0 overflow-hidden">
                {/* Gradient Orbs */}
                <div className="absolute top-1/4 -left-20 w-96 h-96 bg-[#00ADB5]/20 rounded-full blur-3xl animate-pulse"></div>
                <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-[#00D4DD]/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>

                {/* Decorative Grid Pattern */}
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:4rem_4rem]"></div>

                {/* Floating Shapes */}
                <div className="absolute top-20 right-1/4 w-32 h-32 border-2 border-[#00ADB5]/20 rounded-2xl rotate-12 animate-float"></div>
                <div className="absolute bottom-40 left-1/4 w-24 h-24 border-2 border-[#00D4DD]/20 rounded-full animate-float" style={{ animationDelay: '0.5s', animationDuration: '4s' }}></div>
            </div>

            <div className="relative max-w-7xl mx-auto px-6 lg:px-8 py-20">
                <div className={`text-center stagger-children ${isActive ? 'active' : ''}`}>
                    {/* Main Heading with Rotating Text */}
                    <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-8 leading-relaxed">
                        Temukan{' '}
                        <span className="gradient-text">Guru Privat</span>
                        <br />
                        <span className="block mt-2">untuk</span>
                        <span className="block relative h-[1.5em] md:h-[1.4em] mt-2 overflow-hidden">
                            {subjects.map((subject, index) => (
                                <span
                                    key={subject}
                                    className={`absolute inset-x-0 text-center transition-all duration-500 ${index === currentSubject
                                            ? 'opacity-100 translate-y-0'
                                            : index < currentSubject
                                                ? 'opacity-0 -translate-y-full'
                                                : 'opacity-0 translate-y-full'
                                        }`}
                                    style={{
                                        background: 'linear-gradient(135deg, #00ADB5, #00D4DD)',
                                        WebkitBackgroundClip: 'text',
                                        WebkitTextFillColor: 'transparent',
                                        backgroundClip: 'text',
                                    }}
                                >
                                    {subject}
                                </span>
                            ))}
                        </span>
                    </h1>

                    {/* Subheading */}
                    <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-400 mb-10 max-w-3xl mx-auto leading-relaxed">
                        Platform terpercaya untuk menco-cokan Anda dengan guru privat berkualitas untuk pembelajaran akademik & non-akademik
                    </p>

                    {/* Trust Badges */}
                    <div className="flex flex-wrap justify-center gap-4 mb-14">
                        <div className="flex items-center gap-2 px-6 py-3 bg-white dark:bg-[#0B0B0D] rounded-2xl shadow-lg border border-[#E5E7EB] dark:border-[#2a2a2c]">
                            <ShieldCheckIcon className="w-6 h-6 text-[#00ADB5]" />
                            <span className="font-semibold text-gray-800 dark:text-gray-200">Guru Terverifikasi</span>
                        </div>
                        <div className="flex items-center gap-2 px-6 py-3 bg-white dark:bg-[#0B0B0D] rounded-2xl shadow-lg border border-[#E5E7EB] dark:border-[#2a2a2c]">
                            <CheckBadgeIcon className="w-6 h-6 text-[#00ADB5]" />
                            <span className="font-semibold text-gray-800 dark:text-gray-200">Aman & Terpercaya</span>
                        </div>
                        <div className="flex items-center gap-2 px-6 py-3 bg-white dark:bg-[#0B0B0D] rounded-2xl shadow-lg border border-[#E5E7EB] dark:border-[#2a2a2c]">
                            <ClockIcon className="w-6 h-6 text-[#00ADB5]" />
                            <span className="font-semibold text-gray-800 dark:text-gray-200">Jadwal Fleksibel</span>
                        </div>
                    </div>

                    {/* CTA Buttons */}
                    <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
                        <Button size="lg" className="shadow-xl">
                            <span className="flex items-center gap-2">
                                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09l.01-.01zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z" />
                                </svg>
                                Download iOS
                            </span>
                        </Button>
                        <Button size="lg" variant="outline">
                            <span className="flex items-center gap-2">
                                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M3.609 1.814L13.792 12 3.61 22.186a.996.996 0 01-.61-.92V2.734a1 1 0 01.609-.92zm10.89 10.893l2.302 2.302-10.937 6.333 8.635-8.635zm3.199-3.198l2.807 1.626a1 1 0 010 1.73l-2.808 1.626L15.206 12l2.492-2.491zM5.864 2.658L16.802 8.99l-2.303 2.303-8.635-8.635z" />
                                </svg>
                                Download Android
                            </span>
                        </Button>
                    </div>

                    {/* Demo Image/Video Placeholder */}
                    <div className="max-w-5xl mx-auto">
                        <div className="relative rounded-3xl overflow-hidden shadow-2xl border-8 border-white dark:border-[#0B0B0D]">
                            <div className="aspect-video bg-gradient-to-br from-[#00ADB5]/10 to-[#00D4DD]/10 flex items-center justify-center relative overflow-hidden">
                                {/* Decorative pattern overlay */}
                                <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNiIgc3Ryb2tlPSIjMDBBREI1IiBzdHJva2Utd2lkdGg9IjEiIG9wYWNpdHk9Ii4xIi8+PC9nPjwvc3ZnPg==')] opacity-30"></div>

                                <div className="text-center relative z-10">
                                    <div className="w-20 h-20 mx-auto mb-4 rounded-2xl bg-[#00ADB5]/20 flex items-center justify-center backdrop-blur-sm">
                                        <svg className="w-10 h-10 text-[#00ADB5]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                        </svg>
                                    </div>
                                    <p className="text-lg font-semibold text-gray-700 dark:text-gray-300">Demo Video</p>
                                    <p className="text-sm text-gray-500">Lihat bagaimana Liora Match bekerja</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

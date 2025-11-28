'use client';
import { useState, useRef, useEffect } from 'react';
import Card from './Card';
import { SparklesIcon, AcademicCapIcon, UserGroupIcon } from '@heroicons/react/24/outline';

export default function SlashRevealShowcase() {
    const [isDragging, setIsDragging] = useState(false);
    const [slashPosition, setSlashPosition] = useState(50);
    const containerRef = useRef<HTMLDivElement>(null);

    const handleMouseDown = () => setIsDragging(true);
    const handleMouseUp = () => setIsDragging(false);
    const handleTouchStart = () => setIsDragging(true);
    const handleTouchEnd = () => setIsDragging(false);

    const handleMove = (clientX: number) => {
        if (isDragging && containerRef.current) {
            const rect = containerRef.current.getBoundingClientRect();
            const x = clientX - rect.left;
            const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100));
            setSlashPosition(percentage);
        }
    };

    const handleMouseMove = (e: React.MouseEvent) => handleMove(e.clientX);
    const handleTouchMove = (e: React.TouchEvent) => handleMove(e.touches[0].clientX);

    useEffect(() => {
        const handleGlobalMouseUp = () => setIsDragging(false);
        window.addEventListener('mouseup', handleGlobalMouseUp);
        window.addEventListener('touchend', handleGlobalMouseUp);
        return () => {
            window.removeEventListener('mouseup', handleGlobalMouseUp);
            window.removeEventListener('touchend', handleGlobalMouseUp);
        };
    }, []);

    return (
        <section className="py-24 bg-gradient-to-br from-[#F5F7FA] to-white dark:from-[#050608] dark:to-[#0B0B0D] relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNiIgc3Ryb2tlPSIjMDBBREI1IiBzdHJva2Utd2lkdGg9IjEiIG9wYWNpdHk9Ii4wNSIvPjwvZz48L3N2Zz4=')] opacity-50"></div>

            <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
                {/* Header */}
                <div className="text-center mb-16">
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-[#00ADB5] to-[#00D4DD] rounded-2xl mb-6 shadow-lg shadow-[#00ADB5]/30">
                        <SparklesIcon className="w-8 h-8 text-white" />
                    </div>
                    <h2 className="text-4xl md:text-5xl font-bold mb-4">
                        Drag untuk <span className="gradient-text">Melihat Detail</span>
                    </h2>
                    <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                        Geser slider untuk membandingkan pengalaman belajar sebelum dan sesudah menggunakan Liora Match
                    </p>
                </div>

                {/* Slash Reveal Container */}
                <div
                    ref={containerRef}
                    className="relative max-w-5xl mx-auto rounded-3xl overflow-hidden shadow-2xl cursor-ew-resize touch-none select-none"
                    onMouseDown={handleMouseDown}
                    onMouseMove={handleMouseMove}
                    onMouseUp={handleMouseUp}
                    onTouchStart={handleTouchStart}
                    onTouchMove={handleTouchMove}
                    onTouchEnd={handleTouchEnd}
                    style={{ height: '500px' }}
                >
                    {/* Before Content (Right Side - Without Liora) */}
                    <div className="absolute inset-0 bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-900 flex items-center justify-center p-8">
                        <div className="text-center max-w-md">
                            <div className="w-20 h-20 mx-auto mb-6 rounded-2xl bg-gray-300 dark:bg-gray-700 flex items-center justify-center">
                                <svg className="w-10 h-10 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </div>
                            <h3 className="text-2xl font-bold mb-4 text-gray-800 dark:text-gray-200">Tanpa Liora Match</h3>
                            <ul className="space-y-3 text-left">
                                <li className="flex items-start gap-2 text-gray-600 dark:text-gray-400">
                                    <span className="text-red-500">✗</span>
                                    <span>Sulit menemukan guru yang tepat</span>
                                </li>
                                <li className="flex items-start gap-2 text-gray-600 dark:text-gray-400">
                                    <span className="text-red-500">✗</span>
                                    <span>Tidak ada verifikasi kredensial</span>
                                </li>
                                <li className="flex items-start gap-2 text-gray-600 dark:text-gray-400">
                                    <span className="text-red-500">✗</span>
                                    <span>Proses booking yang ribet</span>
                                </li>
                                <li className="flex items-start gap-2 text-gray-600 dark:text-gray-400">
                                    <span className="text-red-500">✗</span>
                                    <span>Keamanan tidak terjamin</span>
                                </li>
                            </ul>
                        </div>
                    </div>

                    {/* After Content (Left Side - With Liora) */}
                    <div
                        className="absolute inset-0 bg-gradient-to-br from-[#00ADB5] to-[#00D4DD] flex items-center justify-center p-8"
                        style={{ clipPath: `inset(0 ${100 - slashPosition}% 0 0)` }}
                    >
                        <div className="text-center max-w-md text-white">
                            <div className="w-20 h-20 mx-auto mb-6 rounded-2xl bg-white/20 backdrop-blur-sm flex items-center justify-center">
                                <AcademicCapIcon className="w-10 h-10 text-white" />
                            </div>
                            <h3 className="text-2xl font-bold mb-4">Dengan Liora Match</h3>
                            <ul className="space-y-3 text-left">
                                <li className="flex items-start gap-2">
                                    <span className="text-white">✓</span>
                                    <span>Filter guru berdasarkan kebutuhan</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-white">✓</span>
                                    <span>Guru terverifikasi 100%</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-white">✓</span>
                                    <span>Booking dalam hitungan detik</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-white">✓</span>
                                    <span>Keamanan & privasi terjamin</span>
                                </li>
                            </ul>
                        </div>
                    </div>

                    {/* Slash Divider */}
                    <div
                        className="absolute inset-y-0 w-1 bg-white shadow-2xl z-20 pointer-events-none"
                        style={{ left: `${slashPosition}%`, transform: 'translateX(-50%)' }}
                    >
                        {/* Drag Handle */}
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-white rounded-full shadow-xl flex items-center justify-center pointer-events-auto cursor-ew-resize">
                            <svg className="w-6 h-6 text-[#00ADB5]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 9l4-4 4 4m0 6l-4 4-4-4" />
                            </svg>
                        </div>
                    </div>
                </div>

                {/* Instructions */}
                <div className="text-center mt-8">
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                        <span className="hidden md:inline">Drag slider</span>
                        <span className="md:hidden">Tap and drag</span>
                        {' '}atau tap untuk membandingkan
                    </p>
                </div>

                {/* Stats Cards */}
                <div className="grid md:grid-cols-3 gap-6 mt-16">
                    <Card className="text-center">
                        <div className="w-12 h-12 mx-auto mb-4 rounded-xl bg-[#00ADB5]/10 flex items-center justify-center">
                            <UserGroupIcon className="w-6 h-6 text-[#00ADB5]" />
                        </div>
                        <div className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-2">10,000+</div>
                        <div className="text-gray-600 dark:text-gray-400">Pengguna Aktif</div>
                    </Card>
                    <Card className="text-center">
                        <div className="w-12 h-12 mx-auto mb-4 rounded-xl bg-[#00ADB5]/10 flex items-center justify-center">
                            <AcademicCapIcon className="w-6 h-6 text-[#00ADB5]" />
                        </div>
                        <div className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-2">2,500+</div>
                        <div className="text-gray-600 dark:text-gray-400">Guru Terverifikasi</div>
                    </Card>
                    <Card className="text-center">
                        <div className="w-12 h-12 mx-auto mb-4 rounded-xl bg-[#00ADB5]/10 flex items-center justify-center">
                            <SparklesIcon className="w-6 h-6 text-[#00ADB5]" />
                        </div>
                        <div className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-2">4.8/5</div>
                        <div className="text-gray-600 dark:text-gray-400">Rating Pengguna</div>
                    </Card>
                </div>
            </div>
        </section>
    );
}

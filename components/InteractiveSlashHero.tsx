'use client';

import { useState, useRef, useEffect, useCallback } from 'react';
import Button from './Button';
import {
    ShieldCheckIcon,
    ClockIcon,
    CheckBadgeIcon,
    XMarkIcon,
    Bars3Icon,
    AcademicCapIcon,
    UserGroupIcon,
    SparklesIcon
} from '@heroicons/react/24/solid';

export default function InteractiveSlashHero() {
    const [isDragging, setIsDragging] = useState(false);
    const [slashPosition, setSlashPosition] = useState(50); // 0 to 100
    const containerRef = useRef<HTMLDivElement>(null);
    const [isMobile, setIsMobile] = useState(false);

    // Handle resize to detect mobile
    useEffect(() => {
        const checkMobile = () => setIsMobile(window.innerWidth < 768);
        checkMobile();
        window.addEventListener('resize', checkMobile);
        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    // Drag Logic
    const handleMove = useCallback((clientX: number) => {
        if (containerRef.current) {
            const rect = containerRef.current.getBoundingClientRect();
            const x = clientX - rect.left;
            // Add some padding/constraints so it doesn't go fully 0 or 100
            const rawPercentage = (x / rect.width) * 100;
            const percentage = Math.max(10, Math.min(90, rawPercentage));
            setSlashPosition(percentage);
        }
    }, []);

    const onMouseDown = () => setIsDragging(true);
    const onMouseUp = () => setIsDragging(false);
    const onMouseMove = (e: React.MouseEvent) => {
        if (isDragging) handleMove(e.clientX);
    };

    const onTouchStart = () => setIsDragging(true);
    const onTouchEnd = () => setIsDragging(false);
    const onTouchMove = (e: React.TouchEvent) => {
        handleMove(e.touches[0].clientX);
    };

    // Global event listeners for drag end
    useEffect(() => {
        const handleGlobalEnd = () => setIsDragging(false);
        if (isDragging) {
            window.addEventListener('mouseup', handleGlobalEnd);
            window.addEventListener('touchend', handleGlobalEnd);
        }
        return () => {
            window.removeEventListener('mouseup', handleGlobalEnd);
            window.removeEventListener('touchend', handleGlobalEnd);
        };
    }, [isDragging]);

    // Calculate clip paths
    // Slope offset: how much the slash tilts. 
    // Let's say +/- 15% tilt.
    const tilt = 15;
    // Top X = position + tilt
    // Bottom X = position - tilt
    // We need to ensure the polygon covers the left side properly.
    // Polygon for Left Layer (Before): 
    // (0,0) -> (pos + tilt, 0) -> (pos - tilt, 100%) -> (0, 100%)
    const clipPathValue = `polygon(0 0, ${slashPosition + tilt}% 0, ${slashPosition - tilt}% 100%, 0 100%)`;

    // Slash Line Position
    // It's a line connecting (pos + tilt, 0) and (pos - tilt, 100%)
    // We can use a div with the same skew/rotation or just absolute positioning.
    // Easier: A div with width ~4px, centered on the slash path.
    // Actually, simpler to use a div that is also clipped or transformed.
    // Let's try a transformed div:
    // Center X at 50% height is `slashPosition`.
    // Rotation angle? 
    // tan(theta) = (2 * tilt% width) / 100% height.
    // This depends on aspect ratio. 
    // Better approach for the line: Use an SVG overlay or a div with the exact same clip-path but slightly larger/smaller to create a border?
    // Or just a div that is absolutely positioned left: slashPosition%, top: 0, bottom: 0, width: 2px... but it needs to tilt.
    // Let's use the "border" trick: The Left layer has a border-right? No, clip-path cuts borders.
    // Best way: A dedicated divider element that uses the same geometry.
    // Let's use an SVG line for the divider to be precise.

    return (
        <section
            ref={containerRef}
            className="relative h-[90vh] min-h-[600px] w-full overflow-hidden select-none cursor-ew-resize touch-none"
            onMouseDown={onMouseDown}
            onMouseMove={onMouseMove}
            onMouseUp={onMouseUp}
            onTouchStart={onTouchStart}
            onTouchMove={onTouchMove}
            onTouchEnd={onTouchEnd}
        >
            {/* ================= RIGHT LAYER (AFTER / WITH LIORA) ================= */}
            {/* Base Layer - Full Width */}
            <div className="absolute inset-0 bg-[#050608] flex items-center justify-center">
                {/* Background Elements */}
                <div className="absolute inset-0 overflow-hidden">
                    <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-[#00ADB5]/20 rounded-full blur-3xl animate-pulse"></div>
                    <div className="absolute bottom-0 left-0 w-full h-full bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHZpZXdCb3g9IjAgMCAyMCAyMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSIjMDBBREI1IiBmaWxsLW9wYWNpdHk9IjAuMDUiPjxjaXJjbGUgY3g9IjEiIGN5PSIxIiByPSIxIi8+PC9nPjwvc3ZnPg==')] opacity-30"></div>
                </div>

                {/* Content Container - Right Aligned */}
                <div className="relative w-full max-w-7xl mx-auto px-6 h-full flex items-center justify-end">
                    <div
                        className="w-1/2 pl-12 pt-20 transition-transform duration-100 ease-out"
                        style={{
                            transform: `translateX(${(50 - slashPosition) * 0.5}px) scale(${1 + (100 - slashPosition) * 0.0005})`,
                            opacity: Math.max(0, (100 - slashPosition) / 50)
                        }}
                    >
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#00ADB5]/10 border border-[#00ADB5]/20 text-[#00ADB5] mb-6">
                            <SparklesIcon className="w-4 h-4" />
                            <span className="text-xs font-bold tracking-wider uppercase">Dengan Liora Match</span>
                        </div>

                        <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
                            Belajar Jadi <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00ADB5] to-[#00E0E9]">
                                Lebih Menyenangkan
                            </span>
                        </h1>

                        <p className="text-gray-400 text-lg mb-8 max-w-md leading-relaxed">
                            Temukan guru privat yang cocok dengan gaya belajarmu. Jadwal fleksibel, terverifikasi, dan aman.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4">
                            <Button size="lg" className="bg-[#00ADB5] hover:bg-[#008C93] text-white shadow-[0_0_20px_rgba(0,173,181,0.3)] border-none">
                                Cari Guru Sekarang
                            </Button>
                            <Button size="lg" variant="outline" className="border-gray-700 text-gray-300 hover:bg-gray-800">
                                Daftar sebagai Guru
                            </Button>
                        </div>

                        {/* App Mockup / Illustration */}
                        <div className="mt-12 relative">
                            <div className="absolute -inset-4 bg-[#00ADB5]/20 blur-xl rounded-full"></div>
                            <div className="relative bg-[#0B0B0D] border border-gray-800 rounded-2xl p-4 shadow-2xl max-w-sm transform rotate-3 hover:rotate-0 transition-transform duration-500">
                                <div className="flex items-center gap-3 mb-4 border-b border-gray-800 pb-3">
                                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#00ADB5] to-blue-500 flex items-center justify-center text-white font-bold">L</div>
                                    <div>
                                        <div className="text-sm font-bold text-white">Liora Match</div>
                                        <div className="text-xs text-[#00ADB5]">Verified Tutor</div>
                                    </div>
                                    <div className="ml-auto bg-[#00ADB5]/10 px-2 py-1 rounded text-xs text-[#00ADB5]">Active</div>
                                </div>
                                <div className="space-y-2">
                                    <div className="h-2 bg-gray-800 rounded w-3/4"></div>
                                    <div className="h-2 bg-gray-800 rounded w-1/2"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* ================= LEFT LAYER (BEFORE / WITHOUT LIORA) ================= */}
            {/* Overlay Layer - Clipped */}
            <div
                className="absolute inset-0 bg-[#F0F2F5] overflow-hidden"
                style={{ clipPath: clipPathValue }}
            >
                {/* Content Container - Left Aligned */}
                <div className="relative w-full max-w-7xl mx-auto px-6 h-full flex items-center justify-start">
                    <div
                        className="w-1/2 pr-12 pt-20 transition-transform duration-100 ease-out"
                        style={{
                            transform: `translateX(${(slashPosition - 50) * 0.5}px) scale(${1 + slashPosition * 0.0005})`,
                            opacity: Math.max(0, slashPosition / 50)
                        }}
                    >
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gray-200 border border-gray-300 text-gray-500 mb-6">
                            <XMarkIcon className="w-4 h-4" />
                            <span className="text-xs font-bold tracking-wider uppercase">Tanpa Liora Match</span>
                        </div>

                        <h1 className="text-4xl md:text-5xl font-bold text-gray-400 mb-6 leading-tight grayscale opacity-70">
                            Cari Guru <br />
                            <span className="text-gray-500">
                                Masih Ribet?
                            </span>
                        </h1>

                        <p className="text-gray-500 text-lg mb-8 max-w-md leading-relaxed grayscale opacity-80">
                            Bingung cari guru berkualitas? Jadwal sering bentrok? Tidak ada jaminan keamanan?
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 grayscale opacity-50 pointer-events-none select-none">
                            <button className="px-6 py-3 rounded-xl bg-gray-300 text-gray-500 font-semibold cursor-not-allowed">
                                Cari Manual...
                            </button>
                        </div>

                        {/* Chaos Illustration */}
                        <div className="mt-12 relative grayscale opacity-60">
                            <div className="relative bg-white border border-gray-300 rounded-2xl p-6 shadow-sm max-w-sm transform -rotate-2">
                                <div className="flex items-center justify-between mb-4">
                                    <div className="text-sm font-bold text-gray-400">Jadwal Les?</div>
                                    <XMarkIcon className="w-5 h-5 text-red-300" />
                                </div>
                                <div className="space-y-3">
                                    <div className="flex items-center gap-2 text-sm text-gray-400">
                                        <div className="w-4 h-4 border border-gray-300 rounded"></div>
                                        <span>Senin: Bentrok</span>
                                    </div>
                                    <div className="flex items-center gap-2 text-sm text-gray-400">
                                        <div className="w-4 h-4 border border-gray-300 rounded"></div>
                                        <span>Selasa: Guru Cancel</span>
                                    </div>
                                    <div className="flex items-center gap-2 text-sm text-gray-400">
                                        <div className="w-4 h-4 border border-gray-300 rounded"></div>
                                        <span>Rabu: Macet</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Dark Overlay to make it look "dimmed" */}
                <div className="absolute inset-0 bg-gray-500/10 pointer-events-none mix-blend-multiply"></div>
            </div>

            {/* ================= SLASH DIVIDER & HANDLE ================= */}
            {/* We use an SVG to draw the exact line matching the clip-path */}
            <svg className="absolute inset-0 w-full h-full pointer-events-none z-20 overflow-visible">
                <defs>
                    <linearGradient id="slashGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#00ADB5" stopOpacity="0" />
                        <stop offset="50%" stopColor="#00ADB5" stopOpacity="1" />
                        <stop offset="100%" stopColor="#00ADB5" stopOpacity="0" />
                    </linearGradient>
                    <filter id="glow">
                        <feGaussianBlur stdDeviation="4" result="coloredBlur" />
                        <feMerge>
                            <feMergeNode in="coloredBlur" />
                            <feMergeNode in="SourceGraphic" />
                        </feMerge>
                    </filter>
                </defs>
                {/* The line coordinates must match the clip-path polygon edges 
            Top point: (slashPosition + tilt)%, 0
            Bottom point: (slashPosition - tilt)%, 100%
        */}
                <line
                    x1={`${slashPosition + tilt}%`}
                    y1="0%"
                    x2={`${slashPosition - tilt}%`}
                    y2="100%"
                    stroke="url(#slashGradient)"
                    strokeWidth="4"
                    filter="url(#glow)"
                />
            </svg>

            {/* Draggable Handle */}
            {/* Positioned at the center of the line (50% Y) */}
            {/* X position at 50% Y is exactly `slashPosition`% because the tilt cancels out at the midpoint */}
            <div
                className="absolute top-1/2 z-30 -translate-x-1/2 -translate-y-1/2 group cursor-ew-resize"
                style={{ left: `${slashPosition}%` }}
            >
                <div className="relative">
                    {/* Pulse Effect */}
                    <div className="absolute inset-0 bg-[#00ADB5] rounded-full blur-md opacity-50 group-hover:opacity-80 transition-opacity duration-300 animate-pulse"></div>

                    {/* Handle Body */}
                    <div className="relative w-12 h-12 bg-white rounded-full shadow-[0_0_20px_rgba(0,173,181,0.5)] flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300">
                        <div className="flex gap-1">
                            <div className="w-1 h-4 bg-[#00ADB5] rounded-full"></div>
                            <div className="w-1 h-4 bg-gray-300 rounded-full"></div>
                        </div>
                    </div>

                    {/* Microcopy Tooltip */}
                    <div className="absolute top-16 left-1/2 -translate-x-1/2 whitespace-nowrap pointer-events-none">
                        <div className="bg-black/80 backdrop-blur text-white text-xs px-3 py-1.5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-y-2 group-hover:translate-y-0">
                            {slashPosition < 50 ? "Geser ke Kanan →" : "← Geser ke Kiri"}
                        </div>
                    </div>
                </div>
            </div>

            {/* Mobile Instructions */}
            <div className="absolute bottom-8 left-0 right-0 text-center pointer-events-none md:hidden z-30">
                <div className="inline-block bg-black/50 backdrop-blur-md text-white text-xs px-4 py-2 rounded-full border border-white/10">
                    Geser untuk membandingkan
                </div>
            </div>

        </section>
    );
}

'use client';
import Link from "next/link";
import { useState, useEffect } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

export default function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 10);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-[#050608]/80 backdrop-blur-md shadow-lg border-b border-white/10' : 'bg-transparent'
            }`}>
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
                <div className="flex items-center justify-between h-20">
                    {/* Logo */}
                    <Link href="/" className="flex items-center gap-3 group">
                        <div className="relative w-10 h-10 rounded-xl bg-gradient-to-br from-[#00ADB5] to-[#008C93] flex items-center justify-center font-bold text-white text-xl shadow-lg shadow-[#00ADB5]/30 group-hover:scale-110 transition-transform duration-300">
                            <span>L</span>
                        </div>
                        <span className="text-xl font-bold bg-gradient-to-r from-[#00ADB5] to-[#00D4DD] bg-clip-text text-transparent">
                            Liora Match
                        </span>
                    </Link>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center gap-8">
                        <Link
                            href="/docs/for-parents"
                            className="text-gray-300 hover:text-[#00ADB5] transition-colors font-medium slash-effect px-3 py-2 rounded-lg"
                        >
                            Untuk Orang Tua
                        </Link>
                        <Link
                            href="/docs/for-teachers"
                            className="text-gray-300 hover:text-[#00ADB5] transition-colors font-medium slash-effect px-3 py-2 rounded-lg"
                        >
                            Untuk Guru
                        </Link>
                        <Link
                            href="/#features"
                            className="text-gray-300 hover:text-[#00ADB5] transition-colors font-medium slash-effect px-3 py-2 rounded-lg"
                        >
                            Fitur
                        </Link>
                        <Link
                            href="/#download"
                            className="px-6 py-3 bg-[#00ADB5] text-white rounded-2xl font-semibold hover:bg-[#008C93] shadow-lg shadow-[#00ADB5]/20 hover:shadow-xl hover:shadow-[#00ADB5]/30 transition-all duration-300 hover:-translate-y-0.5"
                        >
                            Download App
                        </Link>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                        className="md:hidden p-2 text-gray-700 dark:text-gray-300 hover:text-[#00ADB5] transition-colors"
                    >
                        {mobileMenuOpen ? (
                            <XMarkIcon className="w-6 h-6" />
                        ) : (
                            <Bars3Icon className="w-6 h-6" />
                        )}
                    </button>
                </div>

                {/* Mobile Menu */}
                {mobileMenuOpen && (
                    <div className="md:hidden py-4 space-y-3 bg-[#050608]/95 backdrop-blur-xl border-t border-white/10 absolute left-0 right-0 px-6 pb-6 shadow-2xl">
                        <Link
                            href="/docs/for-parents"
                            className="block px-4 py-3 text-gray-300 hover:text-[#00ADB5] hover:bg-white/5 rounded-xl transition-colors"
                            onClick={() => setMobileMenuOpen(false)}
                        >
                            Untuk Orang Tua
                        </Link>
                        <Link
                            href="/docs/for-teachers"
                            className="block px-4 py-3 text-gray-300 hover:text-[#00ADB5] hover:bg-white/5 rounded-xl transition-colors"
                            onClick={() => setMobileMenuOpen(false)}
                        >
                            Untuk Guru
                        </Link>
                        <Link
                            href="/#features"
                            className="block px-4 py-3 text-gray-300 hover:text-[#00ADB5] hover:bg-white/5 rounded-xl transition-colors"
                            onClick={() => setMobileMenuOpen(false)}
                        >
                            Fitur
                        </Link>
                        <Link
                            href="/#download"
                            className="block px-4 py-3 bg-[#00ADB5] text-white rounded-xl font-semibold text-center shadow-lg mt-4"
                            onClick={() => setMobileMenuOpen(false)}
                        >
                            Download App
                        </Link>
                    </div>
                )}
            </div>
        </nav>
    );
}

import Link from "next/link";
import { EnvelopeIcon } from "@heroicons/react/24/outline";

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="relative bg-[#050608] text-gray-300 border-t border-[#2a2a2c]">
            <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
                    {/* Brand */}
                    <div className="col-span-1 md:col-span-2">
                        <div className="flex items-center gap-3 mb-4">
                            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#00ADB5] to-[#00D4DD] flex items-center justify-center font-bold text-white text-xl shadow-lg">
                                <span>L</span>
                            </div>
                            <span className="text-2xl font-bold text-white">Liora Match</span>
                        </div>
                        <p className="text-gray-400 mb-6 max-w-md">
                            Platform terpercaya untuk mencocokkan Anda dengan guru privat berkualitas. Aman, mudah, dan terpercaya.
                        </p>

                        {/* Social Links */}
                        <div className="flex gap-4">
                            <a href="#" className="w-10 h-10 rounded-xl bg-[#0B0B0D] hover:bg-[#00ADB5] flex items-center justify-center transition-colors border border-[#2a2a2c]">
                                <span className="sr-only">Facebook</span>
                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                                </svg>
                            </a>
                            <a href="#" className="w-10 h-10 rounded-xl bg-[#0B0B0D] hover:bg-[#00ADB5] flex items-center justify-center transition-colors border border-[#2a2a2c]">
                                <span className="sr-only">Instagram</span>
                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                                </svg>
                            </a>
                            <a href="#" className="w-10 h-10 rounded-xl bg-[#0B0B0D] hover:bg-[#00ADB5] flex items-center justify-center transition-colors border border-[#2a2a2c]">
                                <span className="sr-only">Twitter</span>
                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M23.953 4.57c-.885.389-1.83.654-2.825.775 1.014-.611 1.794-1.574 2.163-2.724-.951.555-2.005.959-3.127 1.184-.896-.959-2.173-1.559-3.591-1.559-2.717 0-4.92 2.203-4.92 4.917 0 .39.045.765.127 1.124-4.09-.193-7.715-2.157-10.141-5.126-.427.722-.666 1.561-.666 2.475 0 1.71.87 3.213 2.188 4.096-.807-.026-1.566-.248-2.228-.616v.061c0 2.385 1.693 4.374 3.946 4.827-.413.111-.849.171-1.296.171-.314 0-.615-.03-.916-.086.631 1.953 2.445 3.377 4.604 3.417-1.68 1.319-3.809 2.105-6.102 2.105-.39 0-.779-.023-1.17-.067 2.189 1.394 4.768 2.209 7.557 2.209 9.054 0 13.999-7.496 13.999-13.986 0-.209 0-.42-.015-.63.961-.689 1.8-1.56 2.46-2.548l-.047-.02z" />
                                </svg>
                            </a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="font-semibold text-white mb-4">Quick Links</h3>
                        <ul className="space-y-3">
                            <li><Link href="/#features" className="hover:text-[#00ADB5] transition-colors">Features</Link></li>
                            <li><Link href="/#how-it-works" className="hover:text-[#00ADB5] transition-colors">How It Works</Link></li>
                            <li><Link href="/#download" className="hover:text-[#00ADB5] transition-colors">Download</Link></li>
                            <li><Link href="/docs" className="hover:text-[#00ADB5] transition-colors">Documentation</Link></li>
                        </ul>
                    </div>

                    {/* Documentation */}
                    <div>
                        <h3 className="font-semibold text-white mb-4">Documentation</h3>
                        <ul className="space-y-3">
                            <li><Link href="/docs/for-parents" className="hover:text-[#00ADB5] transition-colors">For Parents</Link></li>
                            <li><Link href="/docs/for-teachers" className="hover:text-[#00ADB5] transition-colors">For Teachers</Link></li>
                            <li><Link href="#" className="hover:text-[#00ADB5] transition-colors">FAQ</Link></li>
                            <li>
                                <a href="mailto:support@lioramatch.com" className="hover:text-[#00ADB5] transition-colors inline-flex items-center gap-2">
                                    <EnvelopeIcon className="w-4 h-4" />
                                    Contact Support
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="border-t border-[#2a2a2c] mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-gray-400 text-sm">
                        © {currentYear} Liora Match. All rights reserved.
                    </p>
                    <div className="flex gap-6 text-sm">
                        <Link href="#" className="hover:text-[#00ADB5] transition-colors">Privacy Policy</Link>
                        <Link href="#" className="hover:text-[#00ADB5] transition-colors">Terms of Service</Link>
                        <Link href="#" className="hover:text-[#00ADB5] transition-colors">Cookie Policy</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}

'use client';

import { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Button from './Button';

interface WelcomeScreenProps {
    onEnter: () => void;
}

export default function WelcomeScreen({ onEnter }: WelcomeScreenProps) {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        let animationFrameId: number;
        let particles: Particle[] = [];

        const resizeCanvas = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
            initParticles();
        };

        class Particle {
            x: number;
            y: number;
            vx: number;
            vy: number;
            size: number;
            color: string;

            constructor() {
                this.x = Math.random() * canvas!.width;
                this.y = Math.random() * canvas!.height;
                this.vx = (Math.random() - 0.5) * 0.5;
                this.vy = (Math.random() - 0.5) * 0.5;
                this.size = Math.random() * 2 + 1;
                this.color = '#00ADB5';
            }

            update(mouse: { x: number, y: number }) {
                this.x += this.vx;
                this.y += this.vy;

                // Friction to smooth out movements
                this.vx *= 0.99;
                this.vy *= 0.99;

                // Keep minimum movement to prevent stopping completely
                if (Math.abs(this.vx) < 0.1) this.vx += (Math.random() - 0.5) * 0.01;
                if (Math.abs(this.vy) < 0.1) this.vy += (Math.random() - 0.5) * 0.01;

                // Bounce off edges
                if (this.x < 0 || this.x > canvas!.width) this.vx *= -1;
                if (this.y < 0 || this.y > canvas!.height) this.vy *= -1;

                // Mouse interaction (repel) - Smoother force
                const dx = mouse.x - this.x;
                const dy = mouse.y - this.y;
                const distance = Math.sqrt(dx * dx + dy * dy);
                const maxDistance = 200; // Increased range for gentler effect

                if (distance < maxDistance) {
                    const forceDirectionX = dx / distance;
                    const forceDirectionY = dy / distance;
                    const force = (maxDistance - distance) / maxDistance;
                    const directionX = forceDirectionX * force * 0.05; // Reduced force multiplier
                    const directionY = forceDirectionY * force * 0.05;

                    this.vx -= directionX;
                    this.vy -= directionY;
                }
            }

            draw() {
                if (!ctx) return;
                ctx.beginPath();
                ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
                ctx.fillStyle = this.color;
                ctx.fill();
            }
        }

        const initParticles = () => {
            particles = [];
            const numberOfParticles = (canvas.width * canvas.height) / 15000;
            for (let i = 0; i < numberOfParticles; i++) {
                particles.push(new Particle());
            }
        };

        const connectParticles = () => {
            for (let a = 0; a < particles.length; a++) {
                for (let b = a; b < particles.length; b++) {
                    const dx = particles[a].x - particles[b].x;
                    const dy = particles[a].y - particles[b].y;
                    const distance = Math.sqrt(dx * dx + dy * dy);

                    if (distance < 150) {
                        const opacity = 1 - distance / 150;
                        ctx!.strokeStyle = `rgba(0, 173, 181, ${opacity * 0.5})`;
                        ctx!.lineWidth = 1;
                        ctx!.beginPath();
                        ctx!.moveTo(particles[a].x, particles[a].y);
                        ctx!.lineTo(particles[b].x, particles[b].y);
                        ctx!.stroke();
                    }
                }
            }
        };

        const animate = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            particles.forEach(particle => {
                particle.update(mousePos);
                particle.draw();
            });
            connectParticles();

            animationFrameId = requestAnimationFrame(animate);
        };

        window.addEventListener('resize', resizeCanvas);
        resizeCanvas();
        animate();

        return () => {
            window.removeEventListener('resize', resizeCanvas);
            cancelAnimationFrame(animationFrameId);
        };
    }, [mousePos]);

    const handleMouseMove = (e: React.MouseEvent) => {
        setMousePos({ x: e.clientX, y: e.clientY });
    };

    return (
        <motion.div
            initial={{ opacity: 1 }}
            exit={{ opacity: 0, transition: { duration: 0.8, ease: "easeInOut" } }}
            className="fixed inset-0 z-[100] bg-[#050608] flex flex-col items-center justify-center overflow-hidden"
            onMouseMove={handleMouseMove}
        >
            <canvas
                ref={canvasRef}
                className="absolute inset-0 w-full h-full"
            />

            <div className="relative z-10 text-center px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                >
                    <div className="w-20 h-20 bg-[#00ADB5] rounded-2xl flex items-center justify-center text-4xl font-bold text-white mx-auto mb-8 shadow-[0_0_50px_rgba(0,173,181,0.4)]">
                        L
                    </div>
                    <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight">
                        Welcome to <span className="text-[#00ADB5]">Liora Match</span>
                    </h1>
                    <p className="text-xl text-gray-400 mb-12 max-w-2xl mx-auto">
                        Platform pencarian guru privat terpercaya dengan pengalaman digital yang imersif.
                    </p>

                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={onEnter}
                        className="px-10 py-4 bg-transparent border-2 border-[#00ADB5] text-[#00ADB5] rounded-full font-bold text-lg hover:bg-[#00ADB5] hover:text-white transition-all duration-300 shadow-[0_0_20px_rgba(0,173,181,0.2)] hover:shadow-[0_0_40px_rgba(0,173,181,0.6)]"
                    >
                        Enter Website
                    </motion.button>
                </motion.div>
            </div>

            <div className="absolute bottom-10 left-0 w-full text-center text-gray-500 text-sm">
                Gerakkan mouse Anda untuk berinteraksi dengan konstelasi
            </div>
        </motion.div>
    );
}

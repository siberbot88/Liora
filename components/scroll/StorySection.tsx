'use client';

import { useRef, ReactNode } from 'react';
import { useScroll, useTransform, motion, MotionValue } from 'framer-motion';
import { cn } from '@/lib/utils';

interface StorySectionProps {
    children: (progress: MotionValue<number>) => ReactNode;
    className?: string;
    height?: string; // e.g., 'h-[200vh]' for pinned sections
}

export default function StorySection({ children, className, height = 'h-screen' }: StorySectionProps) {
    const containerRef = useRef<HTMLDivElement>(null);

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"]
    });

    return (
        <section ref={containerRef} className={cn("relative w-full", height, className)}>
            {children(scrollYProgress)}
        </section>
    );
}

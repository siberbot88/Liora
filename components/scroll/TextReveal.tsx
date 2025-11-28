'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { cn } from '@/lib/utils';

interface TextRevealProps {
    children: string;
    className?: string;
}

export default function TextReveal({ children, className }: TextRevealProps) {
    const elementRef = useRef<HTMLSpanElement>(null);
    const { scrollYProgress } = useScroll({
        target: elementRef,
        offset: ["start 0.9", "start 0.25"]
    });

    const words = children.split(" ");

    return (
        <span ref={elementRef} className={cn("inline-block leading-tight", className)}>
            {words.map((word, i) => {
                const start = i / words.length;
                const end = start + (1 / words.length);
                return (
                    <Word key={i} progress={scrollYProgress} range={[start, end]}>
                        {word}
                    </Word>
                );
            })}
        </span>
    );
}

const Word = ({ children, progress, range }: { children: string, progress: any, range: [number, number] }) => {
    const opacity = useTransform(progress, range, [0.1, 1]);
    return (
        <span className="relative inline-block mr-2">
            <span className="absolute opacity-10">{children}</span>
            <motion.span style={{ opacity }}>{children}</motion.span>
        </span>
    );
};

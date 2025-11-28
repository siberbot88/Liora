'use client';

import { motion, MotionValue, useTransform } from 'framer-motion';
import { ReactNode } from 'react';

interface ParallaxLayerProps {
    children: ReactNode;
    progress: MotionValue<number>;
    speed?: number; // Negative for reverse direction
    className?: string;
    opacity?: [number, number]; // Optional opacity range
}

export default function ParallaxLayer({
    children,
    progress,
    speed = 0.5,
    className = "",
    opacity
}: ParallaxLayerProps) {
    const y = useTransform(progress, [0, 1], ["0%", `${speed * 100}%`]);
    const opacityValue = opacity ? useTransform(progress, [0, 0.5, 1], [opacity[0], 1, opacity[1]]) : 1;

    return (
        <motion.div
            style={{ y, opacity: opacityValue }}
            className={`absolute inset-0 w-full h-full ${className}`}
        >
            {children}
        </motion.div>
    );
}

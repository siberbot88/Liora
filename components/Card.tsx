import { ReactNode } from 'react';

interface CardProps {
    children: ReactNode;
    className?: string;
    glass?: boolean;
    hover?: boolean;
}

export default function Card({ children, className = '', glass = false, hover = false }: CardProps) {
    const baseStyles = 'rounded-2xl p-6 border transition-all duration-300';
    const glassStyles = glass ? 'glass' : 'bg-white dark:bg-[#0B0B0D] border-[#E5E7EB] dark:border-[#2a2a2c]';
    const hoverStyles = hover ? 'hover-lift cursor-pointer' : '';
    const shadowStyles = 'shadow-lg shadow-neutral-200/50 dark:shadow-none';

    return (
        <div className={`${baseStyles} ${glassStyles} ${hoverStyles} ${shadowStyles} ${className}`}>
            {children}
        </div>
    );
}

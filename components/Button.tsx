import { ButtonHTMLAttributes, ReactNode } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
    size?: 'sm' | 'md' | 'lg' | 'xl';
    children: ReactNode;
}

export default function Button({
    variant = 'primary',
    size = 'md',
    className = '',
    children,
    ...props
}: ButtonProps) {
    const baseStyles = 'rounded-2xl font-semibold transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed';

    const variants = {
        primary: 'bg-[#00ADB5] text-white hover:bg-[#008C93] shadow-lg shadow-[#00ADB5]/20 hover:shadow-xl hover:shadow-[#00ADB5]/30 hover:-translate-y-0.5',
        secondary: 'bg-[#0B0B0D] text-white hover:bg-[#1a1a1c] border border-[#2a2a2c]',
        outline: 'border-2 border-[#00ADB5] text-[#00ADB5] hover:bg-[#00ADB5] hover:text-white',
        ghost: 'text-[#00ADB5] hover:bg-[#00ADB5]/10',
    };

    const sizes = {
        sm: 'px-4 py-2 text-sm',
        md: 'px-6 py-3 text-base',
        lg: 'px-8 py-4 text-lg',
        xl: 'px-10 py-5 text-xl',
    };

    return (
        <button
            className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
            {...props}
        >
            {children}
        </button>
    );
}

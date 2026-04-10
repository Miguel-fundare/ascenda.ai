import { motion } from 'motion/react';
import { ReactNode } from 'react';

interface ButtonProps {
  children: ReactNode;
  variant?: 'primary' | 'secondary';
  size?: 'sm' | 'md' | 'lg';
  onClick?: () => void;
  type?: 'button' | 'submit';
  className?: string;
  disabled?: boolean;
}

export function Button({
  children,
  variant = 'primary',
  size = 'md',
  onClick,
  type = 'button',
  className = '',
  disabled = false,
}: ButtonProps) {
  const baseStyles = 'font-normal transition-all cursor-pointer border-0';

  const sizeStyles = {
    sm: 'text-sm px-6 py-2.5',
    md: 'text-sm px-9 py-3.5',
    lg: 'text-base px-12 py-4',
  };

  return (
    <motion.button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`${baseStyles} ${sizeStyles[size]} ${className}`}
      style={{
        borderRadius: '8px',
        backgroundColor: variant === 'primary' ? '#E85D2A' : 'transparent',
        borderColor: variant === 'secondary' ? 'var(--th-btn-secondary-border)' : 'transparent',
        borderWidth: variant === 'secondary' ? '1px' : '0',
        borderStyle: 'solid',
        color: variant === 'primary' ? '#FFFFFF' : 'var(--th-text-heading)',
        opacity: disabled ? 0.6 : 1,
      }}
      whileHover={disabled ? {} : {
        filter: variant === 'primary' ? 'brightness(1.15)' : 'brightness(1.1)',
        y: -1,
      }}
      whileTap={disabled ? {} : { scale: 0.98 }}
      transition={{ duration: 0.2 }}
    >
      {children}
    </motion.button>
  );
}

import { motion } from 'motion/react';
import { ReactNode } from 'react';

interface CardProps {
  children: ReactNode;
  variant?: 'dark' | 'light' | 'featured';
  className?: string;
  hoverable?: boolean;
}

export function Card({ children, variant = 'dark', className = '', hoverable = true }: CardProps) {
  const baseStyles = 'rounded-[14px] border p-6';

  const bgColor = variant === 'light' ? 'var(--th-card-light)' : 'var(--th-card-dark)';
  const borderColor = variant === 'featured' ? '#E85D2A' : 'var(--th-border-dark)';

  const Component = hoverable ? motion.div : 'div';

  const hoverProps = hoverable
    ? {
        whileHover: {
          borderColor: 'rgba(232, 93, 42, 0.3)',
          y: -4,
        },
        transition: { duration: 0.2 },
      }
    : {};

  return (
    <Component
      className={`${baseStyles} ${className}`}
      style={{
        backgroundColor: bgColor,
        borderColor: borderColor,
        borderTopColor: variant === 'featured' ? '#E85D2A' : borderColor,
        borderTopWidth: variant === 'featured' ? '2px' : '1px',
      }}
      {...hoverProps}
    >
      {children}
    </Component>
  );
}

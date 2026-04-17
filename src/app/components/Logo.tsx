import { motion } from 'motion/react';

interface LogoProps {
  size?: number;
  withGlow?: boolean;
  className?: string;
  animated?: boolean;
}

export function Logo({ size = 40, withGlow = false, className = '', animated = false }: LogoProps) {
  const strokeWidth = size > 100 ? '4.5' : size > 40 ? '3.5' : '3';

  return (
    <div className={`relative inline-flex items-center justify-center ${className}`} style={{ width: size, height: size }}>
      {withGlow && (
        <>
          <div
            className="absolute inset-0 rounded-full logo-glow-outer"
            style={{
              width: size * 2.5,
              height: size * 2.5,
              left: '50%',
              top: '50%',
              transform: 'translate(-50%, -50%)',
              filter: 'blur(40px)',
              animation: withGlow ? 'pulse 3s ease-in-out infinite' : 'none',
            }}
          />
          <div
            className="absolute inset-0 rounded-full logo-glow-inner"
            style={{
              width: size * 1.5,
              height: size * 1.5,
              left: '50%',
              top: '50%',
              transform: 'translate(-50%, -50%)',
              filter: 'blur(20px)',
              animation: withGlow ? 'pulseSm 3s ease-in-out infinite' : 'none',
            }}
          />
        </>
      )}
      <svg
        width={size}
        height={size}
        viewBox="0 0 140 140"
        className="relative z-10"
        style={{
          color: 'var(--brand-orange)',
          filter: withGlow ? 'drop-shadow(0 0 12px rgba(232,93,42,0.8)) drop-shadow(0 0 30px rgba(232,93,42,0.5))' : 'none'
        }}
      >
        <g transform="translate(70,70)" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round">
          {animated ? (
            <>
              <motion.ellipse
                fill="none"
                rx="48"
                ry="32"
                initial={{ strokeDasharray: 280, strokeDashoffset: 280, opacity: 0 }}
                animate={{ strokeDashoffset: 0, opacity: 1 }}
                transition={{ duration: 1.4, delay: 0.3, ease: [0.4, 0, 0.2, 1] }}
              />
              <motion.ellipse
                fill="none"
                rx="48"
                ry="32"
                transform="rotate(60)"
                initial={{ strokeDasharray: 280, strokeDashoffset: 280, opacity: 0 }}
                animate={{ strokeDashoffset: 0, opacity: 1 }}
                transition={{ duration: 1.4, delay: 0.7, ease: [0.4, 0, 0.2, 1] }}
              />
              <motion.ellipse
                fill="none"
                rx="48"
                ry="32"
                transform="rotate(120)"
                initial={{ strokeDasharray: 280, strokeDashoffset: 280, opacity: 0 }}
                animate={{ strokeDashoffset: 0, opacity: 1 }}
                transition={{ duration: 1.4, delay: 1.1, ease: [0.4, 0, 0.2, 1] }}
              />
              <motion.circle
                r="9"
                fill="currentColor"
                stroke="none"
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.5, delay: 1.7, ease: [0.4, 0, 0.2, 1] }}
                style={{ transformOrigin: '0px 0px' }}
              />
            </>
          ) : (
            <>
              <ellipse fill="none" rx="48" ry="32" />
              <ellipse fill="none" rx="48" ry="32" transform="rotate(60)" />
              <ellipse fill="none" rx="48" ry="32" transform="rotate(120)" />
              <circle r="9" fill="currentColor" stroke="none" />
            </>
          )}
        </g>
      </svg>
      <style>{`
        @keyframes pulse {
          0%, 100% { opacity: 0.5; transform: translate(-50%, -50%) scale(1); }
          50% { opacity: 1; transform: translate(-50%, -50%) scale(1.1); }
        }
        @keyframes pulseSm {
          0%, 100% { opacity: 0.3; transform: translate(-50%, -50%) scale(1); }
          50% { opacity: 0.6; transform: translate(-50%, -50%) scale(1.05); }
        }
      `}</style>
    </div>
  );
}

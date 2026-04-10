interface SectionLabelProps {
  children: string;
  className?: string;
}

export function SectionLabel({ children, className = '' }: SectionLabelProps) {
  return (
    <div
      className={`text-[11px] font-semibold uppercase tracking-[0.12em] mb-4 ${className}`}
      style={{ color: '#E85D2A' }}
    >
      {children}
    </div>
  );
}

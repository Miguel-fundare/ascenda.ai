import { Logo } from './Logo';

export function Footer() {
  return (
    <footer
      className="border-t py-16"
      style={{
        backgroundColor: 'var(--th-bg-secondary)',
        borderColor: 'var(--th-border-dark)',
      }}
    >
      <div className="max-w-[1000px] mx-auto px-8 text-center">
        <div className="flex items-center justify-center gap-3 mb-4">
          <Logo size={28} />
          <span className="text-[17px] font-normal" style={{ color: '#E85D2A' }}>
            Ascenda
          </span>
        </div>
        <p className="text-xs" style={{ color: 'var(--th-text-dim-light)' }}>
          2026 Ascenda. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

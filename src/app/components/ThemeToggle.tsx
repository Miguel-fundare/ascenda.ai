import { useTheme } from '../context/ThemeContext';

export function ThemeToggle() {
  const { theme, toggleTheme, accent, toggleAccent } = useTheme();
  const isDark = theme === 'dark';
  const isRosa = accent === 'rosa';

  return (
    <div style={{ position: 'fixed', bottom: '24px', right: '24px', zIndex: 200, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px' }}>
      {/* Hidden accent dot — small, subtle, only visible on hover of the area */}
      <button
        onClick={toggleAccent}
        title={isRosa ? 'Switch to orange accent' : 'Switch to rosa accent'}
        style={{
          width: '10px',
          height: '10px',
          borderRadius: '50%',
          border: 'none',
          backgroundColor: isRosa ? '#FF6EC7' : '#E85D2A',
          cursor: 'pointer',
          opacity: 0.25,
          transition: 'opacity 0.3s ease',
          padding: 0,
        }}
        onMouseEnter={e => (e.currentTarget.style.opacity = '0.9')}
        onMouseLeave={e => (e.currentTarget.style.opacity = '0.25')}
      />

      {/* Main dark/light toggle */}
      <button
        onClick={toggleTheme}
        title={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
        style={{
          width: '44px',
          height: '44px',
          borderRadius: '50%',
          border: '1px solid var(--th-toggle-border)',
          backgroundColor: 'var(--th-toggle-bg)',
          color: 'var(--th-toggle-color)',
          cursor: 'pointer',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          backdropFilter: 'blur(10px)',
          transition: 'all 0.3s ease',
          opacity: 0.6,
        }}
        onMouseEnter={e => (e.currentTarget.style.opacity = '1')}
        onMouseLeave={e => (e.currentTarget.style.opacity = '0.6')}
      >
        <span>
          {isDark ? (
            // Sun — click to go light
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="5" />
              <line x1="12" y1="1" x2="12" y2="3" />
              <line x1="12" y1="21" x2="12" y2="23" />
              <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
              <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
              <line x1="1" y1="12" x2="3" y2="12" />
              <line x1="21" y1="12" x2="23" y2="12" />
              <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
              <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
            </svg>
          ) : (
            // Moon — click to go dark
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
            </svg>
          )}
        </span>
      </button>
    </div>
  );
}

import { useState } from 'react';
import { Link, useLocation } from 'react-router';
import { Logo } from './Logo';
import { Button } from './Button';

export function Nav() {
  const location = useLocation();
  const [mobileOpen, setMobileOpen] = useState(false);

  const navLinks = [
    { name: 'About', path: '/about' },
    { name: 'Solutions', path: '/solutions' },
    { name: 'Use Cases', path: '/use-cases' },
    { name: 'FAQ', path: '/faq' },
    { name: 'Contact', path: '/contact' },
  ];

  const handleMobileLink = () => setMobileOpen(false);

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 border-b"
      style={{
        backgroundColor: 'var(--th-nav-bg)',
        backdropFilter: 'blur(10px)',
        borderColor: 'var(--th-border-dark)',
      }}
    >
      <div className="max-w-[1440px] mx-auto px-6 py-4 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-3 group" onClick={handleMobileLink}>
          <Logo size={32} />
          <span className="text-[17px] font-normal transition-colors group-hover:opacity-80" style={{ color: '#E85D2A' }}>
            Ascenda
          </span>
        </Link>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className="text-sm font-normal transition-colors hover:text-[#E85D2A]"
              style={{
                color: location.pathname === link.path ? '#E85D2A' : 'var(--th-nav-text)',
              }}
            >
              {link.name}
            </Link>
          ))}
          <Button
            variant="primary"
            size="sm"
            onClick={() => window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' })}
          >
            Book a Discovery Session
          </Button>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          <span
            className="block w-6 h-0.5 transition-all duration-200"
            style={{
              backgroundColor: 'var(--th-nav-text)',
              transform: mobileOpen ? 'translateY(8px) rotate(45deg)' : 'none',
            }}
          />
          <span
            className="block w-6 h-0.5 transition-all duration-200"
            style={{
              backgroundColor: 'var(--th-nav-text)',
              opacity: mobileOpen ? 0 : 1,
            }}
          />
          <span
            className="block w-6 h-0.5 transition-all duration-200"
            style={{
              backgroundColor: 'var(--th-nav-text)',
              transform: mobileOpen ? 'translateY(-8px) rotate(-45deg)' : 'none',
            }}
          />
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div
          className="md:hidden border-t px-6 py-4 flex flex-col gap-4"
          style={{
            backgroundColor: 'var(--th-nav-bg)',
            borderColor: 'var(--th-border-dark)',
          }}
        >
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className="text-sm font-normal py-2 transition-colors hover:text-[#E85D2A]"
              style={{
                color: location.pathname === link.path ? '#E85D2A' : 'var(--th-nav-text)',
              }}
              onClick={handleMobileLink}
            >
              {link.name}
            </Link>
          ))}
          <Button
            variant="primary"
            size="sm"
            className="w-full mt-2"
            onClick={() => {
              setMobileOpen(false);
              window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
            }}
          >
            Book a Discovery Session
          </Button>
        </div>
      )}
    </nav>
  );
}

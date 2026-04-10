import { Link, useLocation } from 'react-router';
import { Logo } from './Logo';
import { Button } from './Button';

export function Nav() {
  const location = useLocation();

  const navLinks = [
    { name: 'About', path: '/about' },
    { name: 'Solutions', path: '/solutions' },
    { name: 'Use Cases', path: '/use-cases' },
    { name: 'FAQ', path: '/faq' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 border-b"
      style={{
        backgroundColor: 'var(--th-nav-bg)',
        backdropFilter: 'blur(10px)',
        borderColor: 'var(--th-border-dark)',
      }}
    >
      <div className="max-w-[1440px] mx-auto px-8 py-4 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-3 group">
          <Logo size={32} />
          <span className="text-[17px] font-normal transition-colors group-hover:opacity-80" style={{ color: '#E85D2A' }}>
            Ascenda
          </span>
        </Link>

        <div className="flex items-center gap-8">
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
      </div>
    </nav>
  );
}

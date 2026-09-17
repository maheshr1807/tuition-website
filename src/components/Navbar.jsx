import { useState, useEffect } from 'react';
import { FiMenu, FiX } from 'react-icons/fi';
import { academyConfig } from '../utils/config';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Classes', href: '#classes' },
    { name: 'Teachers', href: '#teachers' },
    { name: 'Results', href: '#results' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav style={{
      position: 'fixed',
      width: '100%',
      top: 0,
      zIndex: 50,
      transition: 'all 0.3s ease',
      backgroundColor: scrolled ? 'rgba(255, 255, 255, 0.95)' : 'white',
      backdropFilter: scrolled ? 'blur(10px)' : 'none',
      boxShadow: scrolled ? '0 4px 6px -1px rgba(0, 0, 0, 0.1)' : 'none',
      borderBottom: scrolled ? 'none' : '1px solid var(--border)'
    }}>
      <div className="container" style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        height: '80px'
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          {/* Simple Text Logo with Icon placeholder */}
          <div style={{ backgroundColor: 'var(--primary)', color: 'white', padding: '0.25rem', borderRadius: '4px' }}>
            🎓
          </div>
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <span style={{ fontWeight: 800, fontSize: '1.25rem', color: 'var(--text)', lineHeight: 1 }}>
              Bright Future
            </span>
            <span style={{ fontSize: '0.75rem', fontWeight: 600, color: 'var(--primary)', letterSpacing: '1px' }}>
              ACADEMY
            </span>
          </div>
        </div>

        {/* Desktop Menu */}
        <div style={{ display: 'none', gap: '2rem', alignItems: 'center' }} className="desktop-menu">
          {navLinks.map((link) => (
            <a key={link.name} href={link.href} style={{ fontWeight: 500, color: 'var(--text)', transition: 'color 0.2s' }}>
              {link.name}
            </a>
          ))}
          <a href="#contact" className="btn btn-primary" style={{ padding: '0.5rem 1.25rem' }}>Join Now</a>
        </div>

        {/* Mobile Toggle */}
        <button className="mobile-toggle" onClick={() => setIsOpen(!isOpen)} style={{ display: 'block', fontSize: '1.5rem', color: 'var(--text)', background: 'none' }}>
          {isOpen ? <FiX /> : <FiMenu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div style={{
          position: 'absolute',
          top: '100%',
          left: 0,
          right: 0,
          backgroundColor: 'white',
          padding: '1rem',
          boxShadow: '0 10px 15px -3px rgba(0,0,0,0.1)',
          display: 'flex',
          flexDirection: 'column',
          gap: '1rem'
        }}>
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              onClick={() => setIsOpen(false)}
              style={{ padding: '0.5rem', fontWeight: 500, borderBottom: '1px solid var(--border)' }}
            >
              {link.name}
            </a>
          ))}
          <a href="#contact" onClick={() => setIsOpen(false)} className="btn btn-primary" style={{ textAlign: 'center', marginTop: '0.5rem' }}>
            Join Now
          </a>
        </div>
      )}

      <style>{`
        @media (min-width: 1024px) {
          .desktop-menu { display: flex !important; }
          .mobile-toggle { display: none !important; }
        }
      `}</style>
    </nav>
  );
};

export default Navbar;

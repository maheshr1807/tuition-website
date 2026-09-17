import { academyConfig } from '../utils/config';
import { FiInstagram, FiFacebook, FiYoutube, FiPhone, FiMail, FiMapPin } from 'react-icons/fi';

const Footer = () => {
  return (
    <footer style={{ backgroundColor: '#0F172A', color: 'white', paddingTop: '5rem', paddingBottom: '6rem' }}>
      <div className="container">
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', 
          gap: '3rem',
          marginBottom: '3rem'
        }}>
          
          {/* Brand Info */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1.5rem' }}>
              <div style={{ backgroundColor: 'var(--primary)', color: 'white', padding: '0.5rem', borderRadius: '4px', fontSize: '1.25rem' }}>
                🎓
              </div>
              <div style={{ display: 'flex', flexDirection: 'column' }}>
                <span style={{ fontWeight: 800, fontSize: '1.5rem', lineHeight: 1 }}>Bright Future</span>
                <span style={{ fontSize: '0.875rem', fontWeight: 600, color: 'var(--primary)', letterSpacing: '1px' }}>ACADEMY</span>
              </div>
            </div>
            <p style={{ color: '#94A3B8', marginBottom: '1.5rem', maxWidth: '300px' }}>
              {academyConfig.tagline}
            </p>
            <div style={{ display: 'flex', gap: '1rem' }}>
              <a href={academyConfig.socialLinks.instagram} target="_blank" rel="noopener noreferrer" style={{ color: 'white', fontSize: '1.25rem', opacity: 0.8, transition: 'opacity 0.2s' }}>
                <FiInstagram />
              </a>
              <a href={academyConfig.socialLinks.facebook} target="_blank" rel="noopener noreferrer" style={{ color: 'white', fontSize: '1.25rem', opacity: 0.8, transition: 'opacity 0.2s' }}>
                <FiFacebook />
              </a>
              <a href={academyConfig.socialLinks.youtube} target="_blank" rel="noopener noreferrer" style={{ color: 'white', fontSize: '1.25rem', opacity: 0.8, transition: 'opacity 0.2s' }}>
                <FiYoutube />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 style={{ fontSize: '1.25rem', fontWeight: 600, marginBottom: '1.5rem' }}>Quick Links</h4>
            <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              {['Home', 'About', 'Classes', 'Teachers', 'Results', 'Gallery', 'Contact'].map(link => (
                <li key={link}>
                  <a href={`#${link.toLowerCase()}`} style={{ color: '#94A3B8', transition: 'color 0.2s' }} className="footer-link">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Classes */}
          <div>
            <h4 style={{ fontSize: '1.25rem', fontWeight: 600, marginBottom: '1.5rem' }}>Classes</h4>
            <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', color: '#94A3B8' }}>
              <li>Classes 6–8</li>
              <li>Classes 9–10</li>
              <li>Classes 11–12</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 style={{ fontSize: '1.25rem', fontWeight: 600, marginBottom: '1.5rem' }}>Contact Us</h4>
            <ul style={{ display: 'flex', flexDirection: 'column', gap: '1rem', color: '#94A3B8' }}>
              <li style={{ display: 'flex', gap: '0.75rem', alignItems: 'flex-start' }}>
                <FiPhone style={{ marginTop: '0.25rem', color: 'var(--primary)' }} />
                <a href={`tel:${academyConfig.phone.replace(/[^+0-9]/g, '')}`}>{academyConfig.phone}</a>
              </li>
              <li style={{ display: 'flex', gap: '0.75rem', alignItems: 'flex-start' }}>
                <FiMail style={{ marginTop: '0.25rem', color: 'var(--primary)' }} />
                <a href={`mailto:${academyConfig.email}`}>{academyConfig.email}</a>
              </li>
              <li style={{ display: 'flex', gap: '0.75rem', alignItems: 'flex-start' }}>
                <FiMapPin style={{ marginTop: '0.25rem', color: 'var(--primary)' }} />
                <span>{academyConfig.address}</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div style={{ 
          borderTop: '1px solid #334155', 
          paddingTop: '2rem',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '1rem',
          color: '#64748B',
          fontSize: '0.875rem',
          textAlign: 'center'
        }}>
          <p>© {academyConfig.copyrightYear} {academyConfig.name}. All Rights Reserved.</p>
          <p>Designed & Developed by {academyConfig.developerName}</p>
        </div>
      </div>
      
      <style>{`
        .footer-link:hover {
          color: white !important;
          text-decoration: underline;
        }
      `}</style>
    </footer>
  );
};

export default Footer;

import { academyConfig } from '../utils/config';
import { openWhatsApp } from '../utils/whatsapp';
import { FiPhone, FiMessageCircle, FiEdit } from 'react-icons/fi';

const MobileBottomBar = () => {
  return (
    <div className="mobile-bottom-bar" style={{
      position: 'fixed',
      bottom: 0,
      left: 0,
      width: '100%',
      backgroundColor: 'white',
      boxShadow: '0 -2px 10px rgba(0,0,0,0.1)',
      display: 'none', // Hidden on desktop
      zIndex: 98,
      borderTop: '1px solid var(--border)'
    }}>
      <div style={{ display: 'flex', width: '100%' }}>
        <a 
          href={`tel:${academyConfig.phone.replace(/[^+0-9]/g, '')}`} 
          style={{
            flex: 1, padding: '0.75rem', display: 'flex', flexDirection: 'column', 
            alignItems: 'center', justifyContent: 'center', color: 'var(--text)', gap: '0.25rem',
            borderRight: '1px solid var(--border)'
          }}
        >
          <FiPhone size={20} />
          <span style={{ fontSize: '0.75rem', fontWeight: 600 }}>Call Now</span>
        </a>
        
        <button 
          onClick={() => openWhatsApp("Hello, I would like to know more.")}
          style={{
            flex: 1, padding: '0.75rem', display: 'flex', flexDirection: 'column', 
            alignItems: 'center', justifyContent: 'center', color: 'var(--success)', gap: '0.25rem',
            background: 'none', borderRight: '1px solid var(--border)'
          }}
        >
          <FiMessageCircle size={20} />
          <span style={{ fontSize: '0.75rem', fontWeight: 600 }}>WhatsApp</span>
        </button>
        
        <a 
          href="#contact"
          style={{
            flex: 1, padding: '0.75rem', display: 'flex', flexDirection: 'column', 
            alignItems: 'center', justifyContent: 'center', backgroundColor: 'var(--primary)', 
            color: 'white', gap: '0.25rem'
          }}
        >
          <FiEdit size={20} />
          <span style={{ fontSize: '0.75rem', fontWeight: 600 }}>Join Now</span>
        </a>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .mobile-bottom-bar {
            display: block !important;
          }
          body {
            /* Add padding to body so content isn't hidden behind the bar */
            padding-bottom: 70px;
          }
        }
      `}</style>
    </div>
  );
};

export default MobileBottomBar;

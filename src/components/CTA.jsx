import { academyConfig } from '../utils/config';
import { openWhatsApp } from '../utils/whatsapp';
import { FiMessageCircle, FiPhoneCall } from 'react-icons/fi';

const CTA = () => {
  return (
    <section style={{ padding: '6rem 0' }}>
      <div className="container">
        <div style={{
          backgroundColor: 'var(--primary)',
          borderRadius: '1.5rem',
          padding: '4rem 2rem',
          textAlign: 'center',
          color: 'white',
          position: 'relative',
          overflow: 'hidden',
          boxShadow: '0 25px 50px -12px rgba(37, 99, 235, 0.25)'
        }}>
          {/* Decorative Background Elements */}
          <div style={{ position: 'absolute', top: '-10%', left: '-5%', width: '300px', height: '300px', background: 'rgba(255,255,255,0.1)', borderRadius: '50%', filter: 'blur(40px)' }}></div>
          <div style={{ position: 'absolute', bottom: '-10%', right: '-5%', width: '300px', height: '300px', background: 'rgba(255,255,255,0.1)', borderRadius: '50%', filter: 'blur(40px)' }}></div>
          
          <div style={{ position: 'relative', zIndex: 1, maxWidth: '800px', margin: '0 auto' }}>
            <h2 style={{ fontSize: '2.5rem', fontWeight: 800, marginBottom: '1.5rem', lineHeight: 1.2 }}>
              Give Your Child the Right Learning Support
            </h2>
            <p style={{ fontSize: '1.25rem', opacity: 0.9, marginBottom: '2.5rem' }}>
              Join {academyConfig.name} and help your child build stronger concepts and greater confidence.
            </p>
            
            <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
              <a href="#contact" className="btn" style={{ 
                backgroundColor: 'white', color: 'var(--primary)', padding: '1rem 2.5rem', fontSize: '1.125rem' 
              }}>
                Join Now
              </a>
              <button 
                onClick={() => openWhatsApp("Hello, I'm interested in joining the academy.")}
                className="btn btn-whatsapp" 
                style={{ padding: '1rem 2rem', fontSize: '1.125rem' }}
              >
                <FiMessageCircle /> WhatsApp Us
              </button>
              <a 
                href={`tel:${academyConfig.phone.replace(/[^+0-9]/g, '')}`} 
                className="btn"
                style={{ border: '2px solid rgba(255,255,255,0.3)', color: 'white', padding: '1rem 2rem', fontSize: '1.125rem' }}
              >
                <FiPhoneCall /> Call Now
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;

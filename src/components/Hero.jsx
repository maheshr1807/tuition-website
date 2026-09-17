import { motion } from 'framer-motion';
import { academyConfig } from '../utils/config';
import { openWhatsApp } from '../utils/whatsapp';
import { FiMessageCircle, FiArrowRight } from 'react-icons/fi';

const Hero = () => {
  return (
    <section id="home" style={{ 
      paddingTop: '120px', 
      minHeight: '100vh', 
      display: 'flex', 
      alignItems: 'center',
      background: 'linear-gradient(135deg, var(--background) 0%, #E0E7FF 100%)'
    }}>
      <div className="container" style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
        gap: '4rem',
        alignItems: 'center'
      }}>
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div style={{ 
            display: 'inline-block', 
            padding: '0.25rem 1rem', 
            backgroundColor: 'rgba(37, 99, 235, 0.1)', 
            color: 'var(--primary)',
            borderRadius: '9999px',
            fontWeight: 600,
            fontSize: '0.875rem',
            marginBottom: '1.5rem'
          }}>
            Trusted Tuition Centre in Madurai
          </div>
          <h1 style={{
            fontSize: 'clamp(2.5rem, 5vw, 4rem)',
            fontWeight: 800,
            lineHeight: 1.1,
            marginBottom: '1rem',
            color: 'var(--text)'
          }}>
            Learn Better. <br/>
            <span style={{ color: 'var(--primary)' }}>Score Better.</span>
          </h1>
          <p style={{
            fontSize: '1.25rem',
            fontWeight: 500,
            color: 'var(--accent)',
            marginBottom: '1rem'
          }}>
            Your Success Starts Here
          </p>
          <p style={{
            fontSize: '1.125rem',
            color: 'var(--muted)',
            marginBottom: '2rem',
            maxWidth: '500px'
          }}>
            Personalized tuition classes for school students with experienced teachers, regular assessments, and individual attention.
          </p>
          
          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', marginBottom: '2rem' }}>
            <a href="#contact" className="btn btn-primary" style={{ padding: '1rem 2rem', fontSize: '1.125rem' }}>
              Join Now <FiArrowRight />
            </a>
            <button 
              onClick={() => openWhatsApp("Hello, I would like to know more about the tuition classes.")}
              className="btn btn-secondary"
              style={{ padding: '1rem 2rem', fontSize: '1.125rem', borderColor: 'var(--success)', color: 'var(--success)' }}
            >
              <FiMessageCircle /> Talk on WhatsApp
            </button>
          </div>
          
          <div style={{ display: 'flex', gap: '1.5rem', flexWrap: 'wrap', color: 'var(--muted)', fontWeight: 500, fontSize: '0.9rem' }}>
            <span style={{ display: 'flex', alignItems: 'center', gap: '0.25rem' }}>✓ Classes 6–12</span>
            <span style={{ display: 'flex', alignItems: 'center', gap: '0.25rem' }}>✓ Experienced Teachers</span>
            <span style={{ display: 'flex', alignItems: 'center', gap: '0.25rem' }}>✓ Personal Attention</span>
          </div>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          style={{ position: 'relative' }}
        >
          <img 
            src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=800" 
            alt="Students studying" 
            style={{ borderRadius: '1rem', boxShadow: '0 20px 25px -5px rgba(0,0,0,0.1)' }}
          />
          
          {/* Floating cards */}
          <motion.div 
            animate={{ y: [0, -10, 0] }}
            transition={{ repeat: Infinity, duration: 3, ease: 'easeInOut' }}
            style={{
              position: 'absolute', top: '10%', left: '-5%',
              background: 'white', padding: '1rem', borderRadius: '0.5rem',
              boxShadow: '0 10px 15px -3px rgba(0,0,0,0.1)',
              display: 'flex', alignItems: 'center', gap: '0.5rem',
              fontWeight: 600, color: 'var(--text)'
            }}
          >
            <div style={{ background: 'var(--success)', color: 'white', padding: '0.5rem', borderRadius: '50%' }}>📈</div>
            95%+ Academic Improvement
          </motion.div>

          <motion.div 
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 4, ease: 'easeInOut' }}
            style={{
              position: 'absolute', bottom: '10%', right: '-5%',
              background: 'white', padding: '1rem', borderRadius: '0.5rem',
              boxShadow: '0 10px 15px -3px rgba(0,0,0,0.1)',
              display: 'flex', alignItems: 'center', gap: '0.5rem',
              fontWeight: 600, color: 'var(--text)'
            }}
          >
            <div style={{ background: 'var(--primary)', color: 'white', padding: '0.5rem', borderRadius: '50%' }}>👨‍🏫</div>
            10+ Experienced Teachers
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;

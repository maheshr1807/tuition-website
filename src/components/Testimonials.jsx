import { motion } from 'framer-motion';
import { testimonials } from '../data/testimonials';

const Testimonials = () => {
  return (
    <section style={{ backgroundColor: 'var(--background)' }}>
      <div className="container">
        <div className="text-center" style={{ marginBottom: '4rem' }}>
          <h2 className="heading-2">What Parents and Students Say</h2>
          <p className="text-muted" style={{ maxWidth: '600px', margin: '0 auto', fontSize: '1.125rem' }}>
            Hear from our community about their experience at Bright Future Academy.
          </p>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '2rem'
        }}>
          {testimonials.map((test, idx) => (
            <motion.div 
              key={test.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="card"
              style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', position: 'relative' }}
            >
              <div style={{ position: 'absolute', top: '1.5rem', right: '1.5rem', opacity: 0.1, fontSize: '4rem', lineHeight: 0.8, color: 'var(--primary)', fontFamily: 'serif' }}>
                "
              </div>
              
              <div style={{ display: 'flex', gap: '0.25rem', color: '#FBBF24', fontSize: '1.25rem' }}>
                {[...Array(test.rating)].map((_, i) => (
                  <span key={i}>★</span>
                ))}
              </div>
              
              <p style={{ fontSize: '1.125rem', color: 'var(--text)', fontStyle: 'italic', flexGrow: 1, position: 'relative', zIndex: 1 }}>
                "{test.quote}"
              </p>
              
              <div style={{ borderTop: '1px solid var(--border)', paddingTop: '1.25rem' }}>
                <p style={{ fontWeight: 600, margin: 0 }}>— {test.author}</p>
              </div>
            </motion.div>
          ))}
        </div>
        <p className="text-center text-muted" style={{ marginTop: '2rem', fontSize: '0.875rem' }}>
          *Note: These are sample testimonials.
        </p>
      </div>
    </section>
  );
};

export default Testimonials;

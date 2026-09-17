import { motion } from 'framer-motion';
import { teachers } from '../data/teachers';
import { FiBook } from 'react-icons/fi';

const Teachers = () => {
  return (
    <section id="teachers" style={{ backgroundColor: 'white' }}>
      <div className="container">
        <div className="text-center" style={{ marginBottom: '4rem' }}>
          <h2 className="heading-2">Meet Our Teachers</h2>
          <p className="text-muted" style={{ maxWidth: '600px', margin: '0 auto', fontSize: '1.125rem' }}>
            Learn from passionate educators dedicated to your child's success.
          </p>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
          gap: '2.5rem'
        }}>
          {teachers.map((teacher, idx) => (
            <motion.div
              key={teacher.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="card"
              style={{ overflow: 'hidden', padding: 0, display: 'flex', flexDirection: 'column' }}
            >
              <div style={{ height: '280px', overflow: 'hidden' }}>
                <img 
                  src={teacher.image} 
                  alt={teacher.name} 
                  style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.5s' }}
                  onMouseOver={e => e.currentTarget.style.transform = 'scale(1.05)'}
                  onMouseOut={e => e.currentTarget.style.transform = 'scale(1)'}
                />
              </div>
              <div style={{ padding: '1.5rem', flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
                <h3 className="heading-3">{teacher.name}</h3>
                <p style={{ color: 'var(--primary)', fontWeight: 600, marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <FiBook /> {teacher.subject}
                </p>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', marginTop: 'auto' }}>
                  <p className="text-muted" style={{ fontSize: '0.875rem' }}>
                    <strong>Experience:</strong> {teacher.experience}
                  </p>
                  <p className="text-muted" style={{ fontSize: '0.875rem' }}>
                    <strong>Qualification:</strong> {teacher.qualification}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Teachers;

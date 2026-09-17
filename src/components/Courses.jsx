import { motion } from 'framer-motion';
import { courses } from '../data/courses';
import { openWhatsApp } from '../utils/whatsapp';
import { FiClock, FiCheckCircle } from 'react-icons/fi';

const Courses = () => {
  return (
    <section id="classes" style={{ backgroundColor: 'white' }}>
      <div className="container">
        <div className="text-center" style={{ marginBottom: '4rem' }}>
          <h2 className="heading-2">Our Classes</h2>
          <p className="text-muted" style={{ maxWidth: '600px', margin: '0 auto', fontSize: '1.125rem' }}>
            Structured tuition programs designed for every academic level.
          </p>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '2.5rem'
        }}>
          {courses.map((course, idx) => (
            <motion.div 
              key={course.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="card"
              style={{ display: 'flex', flexDirection: 'column', height: '100%' }}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1.5rem' }}>
                <h3 style={{ fontSize: '1.5rem', fontWeight: 700, color: 'var(--text)', margin: 0 }}>
                  {course.title}
                </h3>
                <div style={{ 
                  backgroundColor: 'rgba(37, 99, 235, 0.1)', 
                  color: 'var(--primary)',
                  padding: '0.5rem',
                  borderRadius: '0.5rem'
                }}>
                  📚
                </div>
              </div>
              
              <p className="text-muted" style={{ marginBottom: '1.5rem' }}>
                {course.description}
              </p>
              
              <div style={{ marginBottom: '2rem', flexGrow: 1 }}>
                <h4 style={{ fontSize: '1rem', fontWeight: 600, marginBottom: '0.75rem' }}>Subjects:</h4>
                <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                  {course.subjects.map((sub, i) => (
                    <li key={i} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--text)' }}>
                      <FiCheckCircle style={{ color: 'var(--success)' }} /> {sub}
                    </li>
                  ))}
                </ul>
              </div>
              
              <div style={{ 
                display: 'flex', alignItems: 'center', gap: '0.5rem', 
                color: 'var(--muted)', fontSize: '0.875rem', marginBottom: '1.5rem',
                paddingTop: '1.5rem', borderTop: '1px solid var(--border)'
              }}>
                <FiClock /> {course.timing}
              </div>
              
              <button 
                className="btn btn-primary" 
                style={{ width: '100%' }}
                onClick={() => openWhatsApp(`Hello, I would like to enquire about the tuition for ${course.title}.`)}
              >
                Enquire Now
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Courses;

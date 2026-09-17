import { motion } from 'framer-motion';

const Stats = () => {
  const statsData = [
    { value: "500+", label: "Students Guided" },
    { value: "10+", label: "Experienced Teachers" },
    { value: "95%", label: "Student Improvement" },
    { value: "8+", label: "Years of Experience" }
  ];

  return (
    <section style={{ backgroundColor: 'white', padding: '4rem 0' }}>
      <div className="container">
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
          gap: '2rem',
          textAlign: 'center'
        }}>
          {statsData.map((stat, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div style={{ 
                fontSize: '3rem', 
                fontWeight: 800, 
                color: 'var(--primary)',
                marginBottom: '0.5rem',
                lineHeight: 1
              }}>
                {stat.value}
              </div>
              <div style={{ fontWeight: 600, color: 'var(--muted)', fontSize: '1.125rem' }}>
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;

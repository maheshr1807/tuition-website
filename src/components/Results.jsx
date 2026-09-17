import { motion } from 'framer-motion';

const Results = () => {
  const stats = [
    { value: "98%", label: "Highest Score" },
    { value: "95%+", label: "Average Improvement" },
    { value: "50+", label: "Students Scored 90%+" },
    { value: "200+", label: "Successful Students" }
  ];

  // ============================================
  // SAMPLE DATA: REPLACE WITH ACTUAL RESULTS
  // ============================================
  const achievers = [
    { id: 1, grade: "Class 10 Student", score: "98%", highlight: "Mathematics – 100/100" },
    { id: 2, grade: "Class 12 Student", score: "96%", highlight: "Physics – 98/100" },
    { id: 3, grade: "Class 10 Student", score: "95%", highlight: "Science – 97/100" }
  ];

  return (
    <section id="results" style={{ backgroundColor: 'var(--background)' }}>
      <div className="container">
        <div className="text-center" style={{ marginBottom: '4rem' }}>
          <h2 className="heading-2">Helping Students Achieve More</h2>
          <p className="text-muted" style={{ maxWidth: '600px', margin: '0 auto', fontSize: '1.125rem' }}>
            Our consistent track record of academic excellence.
          </p>
        </div>

        {/* Stats Row */}
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', 
          gap: '2rem',
          marginBottom: '4rem'
        }}>
          {stats.map((stat, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              className="card text-center"
              style={{ padding: '2rem 1rem' }}
            >
              <div style={{ fontSize: '2.5rem', fontWeight: 800, color: 'var(--primary)', marginBottom: '0.5rem' }}>
                {stat.value}
              </div>
              <div style={{ fontWeight: 500, color: 'var(--text)' }}>
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Achievers */}
        <h3 className="heading-3 text-center" style={{ marginBottom: '2rem' }}>Recent Achievers</h3>
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', 
          gap: '2rem'
        }}>
          {achievers.map((achiever) => (
            <motion.div 
              key={achiever.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="card"
              style={{ display: 'flex', alignItems: 'center', gap: '1.5rem', borderLeft: '4px solid var(--accent)' }}
            >
              <div style={{ 
                width: '80px', height: '80px', 
                borderRadius: '50%', 
                backgroundColor: 'rgba(245, 158, 11, 0.1)',
                color: 'var(--accent)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontSize: '1.5rem', flexShrink: 0
              }}>
                🏆
              </div>
              <div>
                <h4 style={{ fontSize: '1.25rem', fontWeight: 700, margin: 0, color: 'var(--text)' }}>
                  {achiever.grade}
                </h4>
                <div style={{ fontSize: '2rem', fontWeight: 800, color: 'var(--primary)', lineHeight: 1.2 }}>
                  {achiever.score}
                </div>
                <p style={{ color: 'var(--success)', fontWeight: 600, margin: 0, fontSize: '0.875rem' }}>
                  {achiever.highlight}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
        <p className="text-center text-muted" style={{ marginTop: '2rem', fontSize: '0.875rem' }}>
          *Note: Real results must replace these sample results before production.
        </p>
      </div>
    </section>
  );
};

export default Results;

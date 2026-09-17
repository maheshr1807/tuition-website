import { motion } from 'framer-motion';

const TeachingProcess = () => {
  const steps = [
    { num: "1", title: "Understand", desc: "We identify the student's strengths and areas for improvement." },
    { num: "2", title: "Learn", desc: "Concepts are explained using simple and practical examples." },
    { num: "3", title: "Practice", desc: "Students solve exercises and participate in regular tests." },
    { num: "4", title: "Improve", desc: "Performance is reviewed and personalized guidance is provided." }
  ];

  return (
    <section style={{ backgroundColor: 'var(--background)' }}>
      <div className="container">
        <div className="text-center" style={{ marginBottom: '4rem' }}>
          <h2 className="heading-2">Our Teaching Process</h2>
          <p className="text-muted" style={{ maxWidth: '600px', margin: '0 auto', fontSize: '1.125rem' }}>
            A structured approach to ensure consistent academic growth.
          </p>
        </div>

        <div style={{ position: 'relative', maxWidth: '800px', margin: '0 auto' }}>
          {/* Connecting Line */}
          <div style={{
            position: 'absolute',
            top: '24px',
            bottom: '24px',
            left: '24px',
            width: '2px',
            backgroundColor: 'var(--border)',
            zIndex: 0
          }} className="timeline-line"></div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '3rem' }}>
            {steps.map((step, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                style={{ display: 'flex', gap: '2rem', position: 'relative', zIndex: 1 }}
              >
                <div style={{
                  width: '48px', height: '48px',
                  borderRadius: '50%',
                  backgroundColor: 'var(--primary)',
                  color: 'white',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontWeight: 700, fontSize: '1.25rem',
                  flexShrink: 0,
                  boxShadow: '0 4px 6px -1px rgba(37, 99, 235, 0.4)'
                }}>
                  {step.num}
                </div>
                <div className="card" style={{ flexGrow: 1, padding: '1.5rem' }}>
                  <h3 className="heading-3">{step.title}</h3>
                  <p className="text-muted" style={{ margin: 0 }}>{step.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
      
      <style>{`
        @media (min-width: 768px) {
          .timeline-line {
            left: 50% !important;
            transform: translateX(-50%);
          }
          .timeline-item:nth-child(odd) {
            flex-direction: row-reverse;
          }
          .timeline-item:nth-child(odd) > div:last-child {
            text-align: right;
          }
        }
      `}</style>
    </section>
  );
};

export default TeachingProcess;

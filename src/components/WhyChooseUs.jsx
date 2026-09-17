import { motion } from 'framer-motion';
import { FiBookOpen, FiUsers, FiEdit3, FiTarget, FiHelpCircle, FiTrendingUp } from 'react-icons/fi';

const WhyChooseUs = () => {
  const features = [
    { icon: <FiUsers />, title: "Experienced Teachers", desc: "Learn from highly qualified faculty with years of teaching experience." },
    { icon: <FiTarget />, title: "Personal Attention", desc: "Small batch sizes ensure individual focus and doubt clearing." },
    { icon: <FiEdit3 />, title: "Regular Tests", desc: "Weekly and monthly assessments to track academic progress." },
    { icon: <FiBookOpen />, title: "Small Batch Size", desc: "Limited students per batch for interactive learning sessions." },
    { icon: <FiHelpCircle />, title: "Doubt Clearing", desc: "Dedicated doubt clearing sessions before and after regular classes." },
    { icon: <FiTrendingUp />, title: "Performance Tracking", desc: "Regular feedback to parents on student's performance." }
  ];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <section id="about" style={{ backgroundColor: 'var(--background)' }}>
      <div className="container">
        <div className="text-center" style={{ marginBottom: '4rem' }}>
          <h2 className="heading-2">Why Parents Choose Bright Future Academy</h2>
          <p className="text-muted" style={{ maxWidth: '600px', margin: '0 auto', fontSize: '1.125rem' }}>
            We focus on strong fundamentals, regular practice, and personal attention to help every student improve.
          </p>
        </div>

        <motion.div 
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '2rem'
          }}
        >
          {features.map((feature, idx) => (
            <motion.div key={idx} variants={item} className="card" style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <div style={{ 
                width: '3rem', height: '3rem', 
                borderRadius: '0.5rem', 
                backgroundColor: 'rgba(124, 58, 237, 0.1)', 
                color: 'var(--secondary)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontSize: '1.5rem'
              }}>
                {feature.icon}
              </div>
              <h3 className="heading-3" style={{ marginBottom: '0' }}>{feature.title}</h3>
              <p className="text-muted">{feature.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default WhyChooseUs;

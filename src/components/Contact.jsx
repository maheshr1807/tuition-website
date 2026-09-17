import { useState } from 'react';
import { academyConfig } from '../utils/config';
import { openWhatsApp } from '../utils/whatsapp';
import { FiMapPin, FiPhone, FiMail, FiClock } from 'react-icons/fi';

const Contact = () => {
  const [formData, setFormData] = useState({
    studentName: '',
    parentName: '',
    phone: '',
    class: '',
    subject: '',
    preferredTime: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Generate WhatsApp Message
    const message = `Hello ${academyConfig.name},
I would like to enquire about tuition classes.

Student Name: ${formData.studentName}
Parent Name: ${formData.parentName}
Phone Number: ${formData.phone}
Class: ${formData.class}
Subject: ${formData.subject}
Preferred Time: ${formData.preferredTime}
Message: ${formData.message}

Thank you.`;

    openWhatsApp(message);
  };

  return (
    <section id="contact" style={{ backgroundColor: 'var(--background)' }}>
      <div className="container">
        <div className="text-center" style={{ marginBottom: '4rem' }}>
          <h2 className="heading-2">Get in Touch</h2>
          <p className="text-muted" style={{ maxWidth: '600px', margin: '0 auto', fontSize: '1.125rem' }}>
            We'd love to hear from you. Send us an enquiry or visit our center.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '4rem' }}>
          
          {/* Left: Contact Info & Map */}
          <div>
            <div className="card" style={{ marginBottom: '2rem' }}>
              <h3 className="heading-3" style={{ marginBottom: '1.5rem' }}>Contact Information</h3>
              <ul style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                <li style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                  <FiMapPin style={{ color: 'var(--primary)', fontSize: '1.5rem', flexShrink: 0, marginTop: '0.25rem' }} />
                  <div>
                    <strong style={{ display: 'block', color: 'var(--text)' }}>Address:</strong>
                    <span className="text-muted">{academyConfig.address}</span>
                  </div>
                </li>
                <li style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                  <FiPhone style={{ color: 'var(--primary)', fontSize: '1.5rem', flexShrink: 0, marginTop: '0.25rem' }} />
                  <div>
                    <strong style={{ display: 'block', color: 'var(--text)' }}>Phone:</strong>
                    <a href={`tel:${academyConfig.phone.replace(/[^+0-9]/g, '')}`} className="text-muted">{academyConfig.phone}</a>
                  </div>
                </li>
                <li style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                  <FiMail style={{ color: 'var(--primary)', fontSize: '1.5rem', flexShrink: 0, marginTop: '0.25rem' }} />
                  <div>
                    <strong style={{ display: 'block', color: 'var(--text)' }}>Email:</strong>
                    <a href={`mailto:${academyConfig.email}`} className="text-muted">{academyConfig.email}</a>
                  </div>
                </li>
                <li style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                  <FiClock style={{ color: 'var(--primary)', fontSize: '1.5rem', flexShrink: 0, marginTop: '0.25rem' }} />
                  <div>
                    <strong style={{ display: 'block', color: 'var(--text)' }}>Timing:</strong>
                    <span className="text-muted">{academyConfig.timings}</span>
                  </div>
                </li>
              </ul>
            </div>

            {/* Google Map */}
            <div className="card" style={{ padding: '0', overflow: 'hidden', height: '300px', position: 'relative' }}>
              <iframe 
                src={academyConfig.googleMapsUrl}
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen="" 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                title="Google Maps Location"
              ></iframe>
            </div>
            <div style={{ marginTop: '1rem', textAlign: 'center' }}>
              <a 
                href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(academyConfig.name + ', ' + academyConfig.address)}`} 
                target="_blank" 
                rel="noopener noreferrer"
                className="btn btn-secondary"
                style={{ width: '100%' }}
              >
                Get Directions
              </a>
            </div>
          </div>

          {/* Right: Enquiry Form */}
          <div className="card">
            <h3 className="heading-3" style={{ marginBottom: '1.5rem' }}>Send an Enquiry</h3>
            <form onSubmit={handleSubmit}>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                <div className="input-group">
                  <label htmlFor="studentName">Student Name *</label>
                  <input type="text" id="studentName" name="studentName" required className="input-control" value={formData.studentName} onChange={handleChange} />
                </div>
                <div className="input-group">
                  <label htmlFor="parentName">Parent Name *</label>
                  <input type="text" id="parentName" name="parentName" required className="input-control" value={formData.parentName} onChange={handleChange} />
                </div>
              </div>

              <div className="input-group">
                <label htmlFor="phone">Phone Number *</label>
                <input type="tel" id="phone" name="phone" required className="input-control" value={formData.phone} onChange={handleChange} />
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                <div className="input-group">
                  <label htmlFor="class">Class *</label>
                  <select id="class" name="class" required className="input-control" value={formData.class} onChange={handleChange}>
                    <option value="">Select Class</option>
                    <option value="6-8">Classes 6–8</option>
                    <option value="9-10">Classes 9–10</option>
                    <option value="11-12">Classes 11–12</option>
                  </select>
                </div>
                <div className="input-group">
                  <label htmlFor="subject">Subject *</label>
                  <input type="text" id="subject" name="subject" required className="input-control" placeholder="e.g. Maths, Science" value={formData.subject} onChange={handleChange} />
                </div>
              </div>

              <div className="input-group">
                <label htmlFor="preferredTime">Preferred Contact Time</label>
                <input type="text" id="preferredTime" name="preferredTime" className="input-control" placeholder="e.g. Evening 6 PM" value={formData.preferredTime} onChange={handleChange} />
              </div>

              <div className="input-group">
                <label htmlFor="message">Message</label>
                <textarea id="message" name="message" rows="4" className="input-control" placeholder="Any specific requirements?" value={formData.message} onChange={handleChange}></textarea>
              </div>

              <button type="submit" className="btn btn-primary" style={{ width: '100%', padding: '1rem' }}>
                Send Enquiry via WhatsApp
              </button>
            </form>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default Contact;

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { gallery, categories } from '../data/gallery';
import { FiX } from 'react-icons/fi';

const Gallery = () => {
  const [filter, setFilter] = useState('All');
  const [selectedImage, setSelectedImage] = useState(null);

  const filteredImages = filter === 'All' 
    ? gallery 
    : gallery.filter(img => img.category === filter);

  // Handle ESC key to close lightbox
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') setSelectedImage(null);
    };
    if (selectedImage) {
      document.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden'; // Prevent scrolling
    }
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'auto';
    };
  }, [selectedImage]);

  return (
    <section id="gallery" style={{ backgroundColor: 'white' }}>
      <div className="container">
        <div className="text-center" style={{ marginBottom: '3rem' }}>
          <h2 className="heading-2">Life at Bright Future Academy</h2>
          <p className="text-muted" style={{ maxWidth: '600px', margin: '0 auto', fontSize: '1.125rem' }}>
            A glimpse into our classrooms, events, and student achievements.
          </p>
        </div>

        {/* Filter Buttons */}
        <div style={{ 
          display: 'flex', 
          flexWrap: 'wrap', 
          justifyContent: 'center', 
          gap: '0.75rem',
          marginBottom: '3rem'
        }}>
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              style={{
                padding: '0.5rem 1.25rem',
                borderRadius: '9999px',
                fontWeight: 600,
                fontSize: '0.875rem',
                backgroundColor: filter === cat ? 'var(--primary)' : 'var(--background)',
                color: filter === cat ? 'white' : 'var(--text)',
                transition: 'all 0.2s',
                border: filter === cat ? '1px solid var(--primary)' : '1px solid var(--border)'
              }}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <motion.div 
          layout
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
            gap: '1.5rem'
          }}
        >
          <AnimatePresence>
            {filteredImages.map((img) => (
              <motion.div
                layout
                key={img.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                style={{ 
                  borderRadius: '1rem', 
                  overflow: 'hidden',
                  cursor: 'pointer',
                  aspectRatio: '4/3',
                  position: 'relative'
                }}
                onClick={() => setSelectedImage(img)}
                className="gallery-item"
              >
                <img 
                  src={img.url} 
                  alt={img.alt} 
                  loading="lazy"
                  style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.5s' }}
                />
                <div className="overlay" style={{
                  position: 'absolute', inset: 0, 
                  backgroundColor: 'rgba(0,0,0,0.3)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  opacity: 0, transition: 'opacity 0.3s'
                }}>
                  <span style={{ color: 'white', fontWeight: 600, fontSize: '1.125rem' }}>View</span>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            style={{
              position: 'fixed', inset: 0, zIndex: 100,
              backgroundColor: 'rgba(0, 0, 0, 0.9)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              padding: '2rem'
            }}
            onClick={() => setSelectedImage(null)}
          >
            <button 
              style={{
                position: 'absolute', top: '2rem', right: '2rem',
                background: 'rgba(255,255,255,0.1)', color: 'white',
                border: 'none', borderRadius: '50%', width: '48px', height: '48px',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontSize: '1.5rem', cursor: 'pointer', zIndex: 101
              }}
              onClick={() => setSelectedImage(null)}
              aria-label="Close lightbox"
            >
              <FiX />
            </button>
            <motion.img 
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              src={selectedImage.url} 
              alt={selectedImage.alt} 
              style={{ maxWidth: '100%', maxHeight: '90vh', objectFit: 'contain', borderRadius: '0.5rem' }}
              onClick={(e) => e.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`
        .gallery-item:hover img {
          transform: scale(1.05);
        }
        .gallery-item:hover .overlay {
          opacity: 1 !important;
        }
      `}</style>
    </section>
  );
};

export default Gallery;

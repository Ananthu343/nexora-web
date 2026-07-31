import { useRef, useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const projects = [
  { id: 1, title: 'Lumina Rebrand', category: 'Branding', image: 'https://images.pexels.com/photos/5706015/pexels-photo-5706015.jpeg?auto=compress&cs=tinysrgb&h=650&w=940' },
  { id: 2, title: 'Echo Social Campaign', category: 'Social Media', image: 'https://images.pexels.com/photos/6476257/pexels-photo-6476257.jpeg?auto=compress&cs=tinysrgb&h=650&w=940' },
  { id: 3, title: 'Nexus FinTech Platform', category: 'Web', image: 'https://images.pexels.com/photos/3194519/pexels-photo-3194519.jpeg?auto=compress&cs=tinysrgb&h=650&w=940' },
  { id: 4, title: 'Aura Product Launch', category: 'Video', image: 'https://images.pexels.com/photos/6224/hands-people-woman-working.jpg?auto=compress&cs=tinysrgb&h=650&w=940' },
  { id: 5, title: 'Velocity App Design', category: 'Web', image: 'https://images.pexels.com/photos/3194521/pexels-photo-3194521.jpeg?auto=compress&cs=tinysrgb&h=650&w=940' },
  { id: 6, title: 'Horizon Brand Guidelines', category: 'Branding', image: 'https://images.pexels.com/photos/8117415/pexels-photo-8117415.jpeg?auto=compress&cs=tinysrgb&h=650&w=940' },
];

const Portfolio = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [width, setWidth] = useState(0);
  const carousel = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (carousel.current) {
      setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth);
    }
  }, []);

  return (
    <section id="work" className="py-24 relative bg-paper overflow-hidden" ref={containerRef}>
      <div className="max-w-7xl mx-auto px-6 mb-16">
        <h2 className="text-[clamp(32px,4vw,56px)] font-bold mb-4 text-ink-text">
          Selected <span className="text-terracotta">Works</span>
        </h2>
        <p className="text-ink-text/70 text-lg max-w-xl">
          Drag to explore a curated selection of our most impactful projects.
        </p>
      </div>

      <motion.div ref={carousel} className="cursor-grab overflow-hidden">
        <motion.div 
          drag="x" 
          dragConstraints={{ right: 0, left: -width }} 
          whileTap={{ cursor: "grabbing" }}
          className="flex gap-8 px-6 pb-12 w-max"
        >
          {projects.map((project) => (
            <motion.div
              key={project.id}
              className="group relative rounded-md overflow-hidden aspect-[3/4] w-[300px] md:w-[400px] border border-tan/40 shadow-xl shadow-umber/5 flex-shrink-0 bg-white"
            >
              {/* Grayscale to Color Image */}
              <img 
                src={project.image} 
                alt={project.title} 
                className="w-full h-full object-cover grayscale opacity-90 transition-all duration-700 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-105 pointer-events-none"
              />
              
              {/* Overlay with info */}
              <div className="absolute inset-0 bg-gradient-to-t from-ink/90 via-ink/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-8 pointer-events-none">
                <span className="text-tan text-sm font-semibold mb-2 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 uppercase tracking-widest">{project.category}</span>
                <h3 className="text-2xl font-bold font-display text-paper mb-4 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-75">{project.title}</h3>
                <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-100">
                  <span className="inline-flex items-center text-sm font-medium text-paper transition-colors">
                    View Case Study <span className="ml-2">→</span>
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Portfolio;

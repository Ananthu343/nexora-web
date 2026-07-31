import { useRef, useEffect } from 'react';
import { motion, useInView } from 'framer-motion';
import { Target, Telescope, Users } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
        
        {/* Left: Content */}
        <div className="flex flex-col gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-[clamp(32px,4vw,56px)] font-bold leading-tight mb-6 text-ink-text">
              We Don't Just Adapt to Digital. <span className="text-gradient">We Define It.</span>
            </h2>
            <p className="text-lg text-ink-text/70">
              Nexora is an award-winning digital marketing and creative agency. We partner with ambitious brands to create digital experiences that resonate, engage, and convert. Our multi-disciplinary team blends strategy, creativity, and technology.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 gap-8 mt-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="flex flex-col gap-3 group cursor-none"
            >
              <div className="w-12 h-12 rounded-xl bg-terracotta/15 flex items-center justify-center text-terracotta transition-all duration-500 group-hover:bg-terracotta/25 group-hover:scale-[1.08]">
                <Target size={24} />
              </div>
              <h3 className="text-xl font-bold text-ink-text">Our Mission</h3>
              <p className="text-ink-text/70 text-sm leading-relaxed">
                To empower brands with data-driven strategies and compelling creatives that drive measurable ROI.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex flex-col gap-3 group cursor-none"
            >
              <div className="w-12 h-12 rounded-xl bg-terracotta/15 flex items-center justify-center text-terracotta transition-all duration-500 group-hover:bg-terracotta/25 group-hover:scale-[1.08]">
                <Telescope size={24} />
              </div>
              <h3 className="text-xl font-bold text-ink-text">Our Vision</h3>
              <p className="text-ink-text/70 text-sm leading-relaxed">
                To be the global benchmark for creative innovation and digital marketing excellence.
              </p>
            </motion.div>
          </div>
        </div>

        {/* Right: Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="relative rounded-3xl overflow-hidden aspect-[4/3] border border-ink/10"
        >
          <img 
            src="https://images.pexels.com/photos/6476257/pexels-photo-6476257.jpeg?auto=compress&cs=tinysrgb&h=650&w=940" 
            alt="Nexora Creative Agency Team Collaborating" 
            className="w-full h-full object-cover grayscale-[30%] sepia-[15%]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-paper via-transparent to-transparent opacity-80" />
        </motion.div>
      </div>

      {/* Stats Row */}
      <div className="max-w-7xl mx-auto px-6 mt-24">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <Stat value={150} label="Projects Delivered" suffix="+" sparklineColor="#9A4F38" delay={0.1} />
          <Stat value={98} label="Client Retention" suffix="%" sparklineColor="#2E1611" delay={0.2} />
          <Stat value={45} label="Awards Won" suffix="" sparklineColor="#9A4F38" delay={0.3} />
          <Stat value={12} label="Years Experience" suffix="+" sparklineColor="#2E1611" delay={0.4} />
        </div>
      </div>
    </section>
  );
};

const Stat = ({ value, label, suffix, sparklineColor, delay }: { value: number, label: string, suffix: string, sparklineColor: string, delay: number }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <div ref={ref} className="relative flex flex-col items-center justify-center p-6 border border-ink/10 rounded-2xl bg-ink/5 overflow-hidden group">
      {/* Animated Sparkline Background */}
      <svg className="absolute bottom-0 w-full h-12 opacity-20 pointer-events-none" preserveAspectRatio="none" viewBox="0 0 100 30">
        <motion.path
          d="M0 30 Q 25 10 50 20 T 100 5"
          fill="none"
          stroke={sparklineColor}
          strokeWidth="4"
          initial={{ pathLength: 0 }}
          animate={isInView ? { pathLength: 1 } : { pathLength: 0 }}
          transition={{ duration: 1.5, ease: "easeOut", delay }}
        />
      </svg>
      
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
        transition={{ duration: 0.5, delay }}
        className="flex items-end font-display font-bold text-5xl mb-2 text-ink-text"
      >
        <Counter value={value} isInView={isInView} />
        <span className="text-3xl text-gradient">{suffix}</span>
      </motion.div>
      
      <motion.span 
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.5, delay: delay + 0.2 }}
        className="text-sm font-medium text-ink-text/70 uppercase tracking-wider text-center"
      >
        {label}
      </motion.span>
    </div>
  );
};

// Simple count up component
const Counter = ({ value, isInView }: { value: number, isInView: boolean }) => {
  const ref = useRef<HTMLSpanElement>(null);
  
  useEffect(() => {
    if (!isInView || !ref.current) return;
    
    let start = 0;
    const end = value;
    const duration = 1500;
    let startTime: number | null = null;
    
    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      // easeOutExpo
      const easeProgress = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
      
      if (ref.current) {
        ref.current.innerText = Math.floor(easeProgress * end).toString();
      }
      
      if (progress < 1) {
        window.requestAnimationFrame(step);
      }
    };
    
    window.requestAnimationFrame(step);
  }, [value, isInView]);

  return <span ref={ref}>0</span>;
};

export default About;

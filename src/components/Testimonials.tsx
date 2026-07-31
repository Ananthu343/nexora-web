import { useRef, useEffect, useState } from 'react';
import { motion, useInView } from 'framer-motion';

const testimonials = [
  {
    name: 'Sarah Jenkins',
    role: 'CMO, TechNova',
    image: 'https://images.pexels.com/photos/37148308/pexels-photo-37148308.jpeg?auto=compress&cs=tinysrgb&h=300&w=300',
    text: "Nexora completely transformed our brand identity. Their data-driven approach coupled with stunning creative work increased our lead generation by 150% in just 6 months."
  },
  {
    name: 'Marcus Thorne',
    role: 'Founder, Elevate App',
    image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&h=300&w=300',
    text: "Working with the Nexora team was an absolute game-changer. They understood our vision instantly and delivered a mobile experience that our users absolutely love."
  },
  {
    name: 'Elena Rostova',
    role: 'VP Marketing, Nexus FinTech',
    image: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&h=300&w=300',
    text: "Their SEO and paid media strategies are unmatched. The continuous optimizations ensure we are always ahead of our competition. A truly premium agency experience."
  }
];

const Testimonials = () => {
  return (
    <section className="py-24 relative overflow-hidden bg-ink">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-[clamp(40px,6vw,80px)] font-bold mb-4 text-paper font-display">
            Client <span className="text-terracotta">Success Stories</span>
          </h2>
        </div>

        <div className="flex gap-6 overflow-x-auto snap-x snap-mandatory hide-scrollbar pb-8">
          {testimonials.map((t, i) => (
            <TestimonialCard key={i} testimonial={t} delay={i * 0.2} />
          ))}
        </div>
      </div>
    </section>
  );
};

const TestimonialCard = ({ testimonial, delay }: { testimonial: any, delay: number }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <div 
      ref={ref}
      className="min-w-[85vw] md:min-w-[400px] snap-center bg-stone-dark border border-stone-light/30 rounded-3xl p-8 md:p-10 relative overflow-hidden group"
    >
      {/* Quote Graphic */}
      <span className="absolute -top-4 -left-4 text-9xl text-stone-light/10 font-serif leading-none font-bold">"</span>
      
      <p className="text-lg md:text-xl leading-relaxed mb-10 relative z-10 text-paper/70 group-hover:text-paper transition-colors duration-500">
        "{testimonial.text}"
      </p>

      <div className="flex items-center gap-4 relative z-10">
        <div className="relative">
          {/* Animated pulse ring */}
          <motion.div
            initial={{ scale: 0.5, opacity: 0 }}
            animate={isInView ? { scale: 1.2, opacity: [0, 0.5, 0] } : {}}
            transition={{ duration: 1.5, delay: delay + 0.5, ease: "easeOut" }}
            className="absolute inset-0 bg-terracotta rounded-full blur-md"
          />
          <img src={testimonial.image} alt={testimonial.name} className="w-14 h-14 rounded-full object-cover relative z-10 border border-stone-light/20" />
        </div>
        <div>
          <h4 className="font-bold font-display text-paper">{testimonial.name}</h4>
          <p className="text-sm text-paper/50">{testimonial.role}</p>
        </div>
        
        {/* Sequential Stars */}
        <div className="ml-auto flex gap-1">
          {[1, 2, 3, 4, 5].map((star) => (
            <motion.svg
              key={star}
              initial={{ opacity: 0, scale: 0 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.3, delay: delay + 0.5 + (star * 0.1) }}
              className="w-4 h-4 text-terracotta"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </motion.svg>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonials;

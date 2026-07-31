import { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Sparkles, TrendingUp, Clock, Users, Target, Handshake } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const WhyUs = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    // Stagger animation for bento boxes
    gsap.from(".gsap-reveal", {
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 70%",
      },
      y: 40,
      opacity: 0,
      duration: 0.8,
      stagger: 0.1,
      ease: "power3.out"
    });

    // Draw SVG animation for data-driven item
    gsap.from(".draw-line", {
      scrollTrigger: {
        trigger: ".data-box",
        start: "top 80%",
      },
      strokeDashoffset: 100,
      strokeDasharray: 100,
      duration: 1.5,
      ease: "power2.out"
    });
  }, { scope: containerRef });

  return (
    <section id="why-us" className="py-32 relative overflow-hidden bg-ink cursor-none" ref={containerRef}>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-terracotta/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="mb-24 flex flex-col md:flex-row justify-between items-end gap-8 border-b border-stone-light/20 pb-12">
          <h2 className="text-[clamp(48px,8vw,110px)] font-bold leading-[0.9] tracking-tighter text-paper uppercase max-w-4xl">
            Why Partner With Us
          </h2>
          <p className="text-paper/60 text-xl max-w-sm font-serif italic pb-2">
            The distinct advantages of choosing Nexora as your growth partner.
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {/* Box 1: Emphasized (Span 2 cols on tablet+) */}
          <div className="gsap-reveal md:col-span-2">
            <div className="bento-box data-box h-full bg-stone-dark border border-stone-light/20 rounded-3xl p-10 flex flex-col justify-between relative overflow-hidden group transition-all duration-500 hover:border-terracotta hover:-translate-y-1 hover:shadow-[0_8px_30px_rgb(154,79,56,0.15)]">
              {/* Corner accent line */}
              <div className="absolute top-0 left-0 w-6 h-[2px] bg-terracotta" />
              
              {/* Watermark */}
              <div className="absolute -bottom-10 -right-10 opacity-5 group-hover:opacity-10 transition-opacity text-terracotta pointer-events-none">
                <TrendingUp size={240} strokeWidth={1} />
              </div>

              <div className="absolute top-0 right-0 p-8 opacity-20 group-hover:opacity-40 transition-opacity duration-500 pointer-events-none">
                <svg width="150" height="150" viewBox="0 0 100 100" fill="none" stroke="url(#terracotta-gradient)" strokeWidth="2">
                  <defs>
                    <linearGradient id="terracotta-gradient" x1="0" y1="100" x2="100" y2="0" gradientUnits="userSpaceOnUse">
                      <stop stopColor="#9A4F38" stopOpacity="0" />
                      <stop offset="1" stopColor="#9A4F38" />
                    </linearGradient>
                  </defs>
                  <path className="draw-line" d="M10 90 Q 30 70 50 80 T 90 20" fill="none" strokeLinecap="round" />
                  <path className="draw-line" d="M70 20 L 90 20 L 90 40" fill="none" strokeLinecap="round" />
                </svg>
              </div>
              
              <div className="w-14 h-14 rounded-2xl bg-terracotta/15 flex items-center justify-center text-terracotta mb-8 relative z-10 border border-terracotta/20 transition-all duration-500 group-hover:bg-terracotta/25 group-hover:scale-[1.08]">
                <TrendingUp size={28} />
              </div>
              <div className="relative z-10 flex flex-col sm:flex-row sm:items-end justify-between gap-6">
                <div>
                  <h3 className="text-3xl font-bold mb-4 text-paper font-display">Data-Driven Marketing</h3>
                  <p className="text-paper/70 max-w-md text-lg">Every decision we make is backed by analytics. We continuously optimize campaigns to ensure maximum return on your investment.</p>
                </div>
                <div className="text-right">
                   <p className="text-sm text-terracotta font-bold uppercase tracking-widest mb-1">Performance</p>
                   <p className="text-4xl text-paper font-display">2.4x</p>
                </div>
              </div>
            </div>
          </div>

          {/* Box 2 */}
          <div className="gsap-reveal">
            <div className="bento-box h-full bg-stone-dark border border-stone-light/20 rounded-3xl p-10 flex flex-col relative overflow-hidden group transition-all duration-500 hover:border-terracotta hover:-translate-y-1 hover:shadow-[0_8px_30px_rgb(154,79,56,0.15)]">
              <div className="absolute top-0 left-0 w-6 h-[2px] bg-terracotta" />
              <div className="absolute -bottom-6 -right-6 opacity-5 group-hover:opacity-10 transition-opacity text-terracotta pointer-events-none">
                <Sparkles size={160} strokeWidth={1} />
              </div>

              <div className="w-12 h-12 rounded-xl bg-terracotta/15 flex items-center justify-center text-terracotta mb-6 border border-terracotta/20 transition-all duration-500 group-hover:bg-terracotta/25 group-hover:scale-[1.08] relative z-10">
                <Sparkles size={24} />
              </div>
              <h3 className="text-2xl font-bold mb-3 text-paper font-display relative z-10">Premium Design</h3>
              <p className="text-paper/70 relative z-10">Award-winning aesthetics that elevate your brand perception instantly.</p>
            </div>
          </div>

          {/* Box 3 */}
          <div className="gsap-reveal">
            <div className="bento-box h-full bg-stone-dark border border-stone-light/20 rounded-3xl p-10 flex flex-col relative overflow-hidden group transition-all duration-500 hover:border-terracotta hover:-translate-y-1 hover:shadow-[0_8px_30px_rgb(154,79,56,0.15)]">
              <div className="absolute top-0 left-0 w-6 h-[2px] bg-terracotta" />
              <div className="absolute -bottom-6 -right-6 opacity-5 group-hover:opacity-10 transition-opacity text-terracotta pointer-events-none">
                <Users size={160} strokeWidth={1} />
              </div>

              <div className="w-12 h-12 rounded-xl bg-terracotta/15 flex items-center justify-center text-terracotta mb-6 border border-terracotta/20 transition-all duration-500 group-hover:bg-terracotta/25 group-hover:scale-[1.08] relative z-10">
                <Users size={24} />
              </div>
              <h3 className="text-2xl font-bold mb-3 text-paper font-display relative z-10">Experienced Team</h3>
              <p className="text-paper/70 relative z-10">Industry veterans with a proven track record across diverse niches.</p>
            </div>
          </div>

          {/* Box 4: Span 2 cols */}
          <div className="gsap-reveal md:col-span-2">
            <div className="bento-box h-full bg-stone-dark border border-stone-light/20 rounded-3xl p-10 flex flex-col relative overflow-hidden group transition-all duration-500 hover:border-terracotta hover:-translate-y-1 hover:shadow-[0_8px_30px_rgb(154,79,56,0.15)]">
              <div className="absolute top-0 left-0 w-6 h-[2px] bg-terracotta" />
              <div className="absolute -bottom-10 -right-10 opacity-5 group-hover:opacity-10 transition-opacity text-terracotta pointer-events-none">
                <Target size={240} strokeWidth={1} />
              </div>

              <div className="w-14 h-14 rounded-2xl bg-terracotta/15 flex items-center justify-center text-terracotta mb-8 relative z-10 border border-terracotta/20 transition-all duration-500 group-hover:bg-terracotta/25 group-hover:scale-[1.08]">
                <Target size={28} />
              </div>
              <div className="relative z-10 flex flex-col sm:flex-row sm:items-end justify-between gap-6">
                <div>
                  <h3 className="text-3xl font-bold mb-4 text-paper font-display">Results-Oriented Strategy</h3>
                  <p className="text-paper/70 max-w-md text-lg">We don't do vanity metrics. Our strategies are built strictly around your core business objectives, focusing on leads, sales, and tangible growth.</p>
                </div>
                <div className="text-right">
                  <p className="text-sm text-terracotta font-bold uppercase tracking-widest mb-1">Goal Attainment</p>
                  <p className="text-4xl text-paper font-display">98%</p>
                </div>
              </div>
            </div>
          </div>

          {/* Box 5 */}
          <div className="gsap-reveal">
            <div className="bento-box h-full bg-stone-dark border border-stone-light/20 rounded-3xl p-10 flex flex-col relative overflow-hidden group transition-all duration-500 hover:border-terracotta hover:-translate-y-1 hover:shadow-[0_8px_30px_rgb(154,79,56,0.15)]">
              <div className="absolute top-0 left-0 w-6 h-[2px] bg-terracotta" />
              <div className="absolute -bottom-6 -right-6 opacity-5 group-hover:opacity-10 transition-opacity text-terracotta pointer-events-none">
                <Clock size={160} strokeWidth={1} />
              </div>

              <div className="w-12 h-12 rounded-xl bg-terracotta/15 flex items-center justify-center text-terracotta mb-6 border border-terracotta/20 transition-all duration-500 group-hover:bg-terracotta/25 group-hover:scale-[1.08] relative z-10">
                <Clock size={24} />
              </div>
              <h3 className="text-2xl font-bold mb-3 text-paper font-display relative z-10">Fast Delivery</h3>
              <p className="text-paper/70 relative z-10">Agile methodologies ensuring your projects launch on time, every time.</p>
            </div>
          </div>
          
          {/* Box 6 (Restored) */}
          <div className="gsap-reveal md:col-span-3">
            <div className="bento-box h-full bg-stone-dark border border-stone-light/20 rounded-3xl p-10 flex flex-col relative overflow-hidden group transition-all duration-500 hover:border-terracotta hover:-translate-y-1 hover:shadow-[0_8px_30px_rgb(154,79,56,0.15)]">
              <div className="absolute top-0 left-0 w-6 h-[2px] bg-terracotta" />
              <div className="absolute -bottom-6 -right-6 opacity-5 group-hover:opacity-10 transition-opacity text-terracotta pointer-events-none">
                <Handshake size={200} strokeWidth={1} />
              </div>

              <div className="w-12 h-12 rounded-xl bg-terracotta/15 flex items-center justify-center text-terracotta mb-6 border border-terracotta/20 transition-all duration-500 group-hover:bg-terracotta/25 group-hover:scale-[1.08] relative z-10">
                <Handshake size={24} />
              </div>
              <h3 className="text-2xl font-bold mb-3 text-paper font-display relative z-10">Client-Focused Approach</h3>
              <p className="text-paper/70 relative z-10 max-w-lg">Your success is our success. We prioritize transparent communication and collaborative partnerships to achieve your vision.</p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default WhyUs;

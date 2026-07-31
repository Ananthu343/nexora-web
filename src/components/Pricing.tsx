import { Check } from 'lucide-react';
import { motion } from 'framer-motion';

const Pricing = () => {
  return (
    <section id="pricing" className="py-24 relative bg-ink">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-[clamp(40px,6vw,80px)] font-bold mb-4 text-paper font-display">
            Transparent <span className="text-terracotta">Pricing</span>
          </h2>
          <p className="text-paper/70 text-lg max-w-2xl mx-auto font-serif italic">
            Flexible plans designed to scale with your business needs. No hidden fees.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 items-center">
          
          {/* Starter Plan */}
          <div className="bg-stone-dark border border-stone-light/30 rounded-3xl p-8 flex flex-col h-fit">
            <h3 className="text-xl font-bold font-display mb-2 text-paper">Starter</h3>
            <p className="text-sm text-paper/70 mb-6">Perfect for small businesses starting out.</p>
            <div className="mb-8 text-paper">
              <span className="text-4xl font-bold">$2,500</span>
              <span className="text-paper/50">/mo</span>
            </div>
            <ul className="flex flex-col gap-4 mb-8">
              {['Social Media Management', 'Basic SEO Setup', 'Monthly Reporting', 'Email Support'].map((feature, i) => (
                <li key={i} className="flex items-center gap-3 text-sm text-paper">
                  <Check size={16} className="text-terracotta shrink-0" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
            <button className="w-full py-4 rounded-full border border-stone-light/30 text-paper hover:bg-stone-light/10 transition-colors font-semibold mt-auto">
              Get Started
            </button>
          </div>

          {/* Growth Plan (Highlighted) */}
          <motion.div 
            initial={{ y: 20 }}
            whileInView={{ y: 0 }}
            viewport={{ once: true }}
            className="relative bg-stone-dark rounded-3xl p-8 flex flex-col scale-105 shadow-2xl z-10"
          >
            {/* Glowing Border Animation (kept violet for tech accent) */}
            <div className="absolute inset-0 rounded-3xl overflow-hidden pointer-events-none p-[1px]">
              <div className="absolute top-0 left-0 w-[200%] h-[200%] -translate-x-1/4 -translate-y-1/4 bg-[conic-gradient(from_0deg,transparent_0_340deg,#7C3AED_360deg)] animate-[spin_4s_linear_infinite] opacity-50 blur-sm" />
            </div>
            <div className="absolute inset-[1px] bg-stone-dark rounded-[23px] z-0" />

            <div className="relative z-10 flex flex-col h-full">
              <div className="flex justify-between items-center mb-2">
                <h3 className="text-xl font-bold font-display text-paper">Growth</h3>
                <span className="px-3 py-1 bg-gradient-cta text-white rounded-full text-[10px] font-bold uppercase tracking-wider">Recommended</span>
              </div>
              <p className="text-sm text-paper/70 mb-6">For scaling brands needing aggressive growth.</p>
              <div className="mb-8 text-paper">
                <span className="text-5xl font-bold">$5,000</span>
                <span className="text-paper/50">/mo</span>
              </div>
              <ul className="flex flex-col gap-4 mb-8">
                {['Omnichannel Marketing', 'Advanced SEO & Content', 'PPC & Meta Ads Management', 'Weekly Strategy Calls', 'Dedicated Account Manager'].map((feature, i) => (
                  <li key={i} className="flex items-center gap-3 text-sm text-paper">
                    <Check size={16} className="text-cyan shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <button className="w-full py-4 rounded-full bg-gradient-cta text-white font-semibold hover:opacity-90 transition-opacity mt-auto">
                Accelerate Growth
              </button>
            </div>
          </motion.div>

          {/* Premium Plan */}
          <div className="bg-stone-dark border border-stone-light/30 rounded-3xl p-8 flex flex-col h-fit">
            <h3 className="text-xl font-bold font-display mb-2 text-paper">Premium</h3>
            <p className="text-sm text-paper/70 mb-6">Enterprise-grade solutions for established brands.</p>
            <div className="mb-8 text-paper">
              <span className="text-4xl font-bold">Custom</span>
            </div>
            <ul className="flex flex-col gap-4 mb-8">
              {['Full-Service Creative & Marketing', 'Custom Web/App Development', 'Predictive Data Analytics', 'Executive Strategy Sessions'].map((feature, i) => (
                <li key={i} className="flex items-center gap-3 text-sm text-paper">
                  <Check size={16} className="text-terracotta shrink-0" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
            <button className="w-full py-4 rounded-full border border-stone-light/30 text-paper hover:bg-stone-light/10 transition-colors font-semibold mt-auto">
              Contact Sales
            </button>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Pricing;

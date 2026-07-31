import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, Phone, MapPin, CheckCircle2 } from 'lucide-react';

const Contact = () => {
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');
    setTimeout(() => {
      setStatus('success');
      setTimeout(() => setStatus('idle'), 5000);
    }, 1500);
  };

  const services = [
    'Social Media Management', 'Meta Ads', 'Google Ads', 'SEO', 
    'Branding Design', 'Graphic Design', 'Video Production', 'Motion Graphics',
    'Website Development', 'Mobile App Development', 'UI/UX Design'
  ];

  return (
    <section id="contact" className="pt-32 pb-24 relative overflow-hidden bg-paper">
      
      <div className="max-w-7xl mx-auto px-6 mb-16 text-center">
         <h2 className="text-[clamp(40px,7vw,96px)] font-bold leading-[0.95] tracking-tight text-ink-text mb-6">
            Let's build something<br/>
            <span className="font-serif italic font-normal text-terracotta">beautiful together.</span>
         </h2>
      </div>

      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-5 gap-16 relative z-10">
        
        {/* Left: Copy & Trust Signals */}
        <div className="lg:col-span-2 flex flex-col justify-between">
          <div>
            <p className="text-ink-text/70 text-lg mb-12">
              Whether you have a clear vision or need help defining it, our team is ready to help you achieve your goals. Fill out the form, and we'll get back to you within 24 hours.
            </p>

            <div className="flex flex-col gap-6 mb-12">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full border border-ink/10 flex items-center justify-center">
                  <Mail className="text-terracotta" size={20} />
                </div>
                <div>
                  <p className="text-sm text-ink-text/70">Email Us</p>
                  <p className="font-semibold text-ink-text">hello@nexora.agency</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full border border-ink/10 flex items-center justify-center">
                  <Phone className="text-umber" size={20} />
                </div>
                <div>
                  <p className="text-sm text-ink-text/70">Call Us</p>
                  <p className="font-semibold text-ink-text">+1 (555) 123-4567</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full border border-ink/10 flex items-center justify-center">
                  <MapPin className="text-terracotta" size={20} />
                </div>
                <div>
                  <p className="text-sm text-ink-text/70">Visit Us</p>
                  <p className="font-semibold text-ink-text">100 Innovation Dr, Tech District</p>
                </div>
              </div>
            </div>
          </div>

          <div className="flex items-center gap-4 p-6 bg-tan/10 border border-ink/10 rounded-2xl">
            <div className="flex -space-x-4">
              <img src="https://images.pexels.com/photos/37148308/pexels-photo-37148308.jpeg?auto=compress&cs=tinysrgb&h=100&w=100" className="w-10 h-10 rounded-full border-2 border-paper object-cover grayscale-[20%]" alt="Team member" />
              <img src="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&h=100&w=100" className="w-10 h-10 rounded-full border-2 border-paper object-cover grayscale-[20%]" alt="Team member" />
              <div className="w-10 h-10 rounded-full border-2 border-paper bg-terracotta flex items-center justify-center text-xs font-bold text-paper">+15</div>
            </div>
            <p className="text-sm text-ink-text/70">Trusted by <strong className="text-ink-text">150+</strong> companies globally.</p>
          </div>
        </div>

        {/* Right: Form */}
        <div className="lg:col-span-3 bg-white border border-ink/10 rounded-3xl p-8 md:p-10 relative shadow-2xl shadow-umber/5">
          <AnimatePresence mode="wait">
            {status === 'success' ? (
              <motion.div
                key="success"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                className="absolute inset-0 flex flex-col items-center justify-center text-center p-8 bg-white rounded-3xl z-20"
              >
                <motion.div
                  initial={{ pathLength: 0, opacity: 0 }}
                  animate={{ pathLength: 1, opacity: 1 }}
                  transition={{ duration: 0.5, ease: "easeOut" }}
                >
                  <CheckCircle2 className="w-20 h-20 text-terracotta mb-6" strokeWidth={1.5} />
                </motion.div>
                <h3 className="text-2xl font-bold mb-2 text-ink-text font-display">Message Sent!</h3>
                <p className="text-ink-text/70">Thanks for reaching out. A strategist will contact you shortly.</p>
              </motion.div>
            ) : (
              <motion.form
                key="form"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onSubmit={handleSubmit}
                className="flex flex-col gap-6"
              >
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="flex flex-col gap-2">
                    <label className="text-sm font-medium text-ink-text/70">Full Name</label>
                    <input required type="text" className="w-full bg-paper/50 border border-ink/10 rounded-xl px-4 py-3 focus:outline-none focus:border-terracotta transition-colors text-ink-text placeholder-ink-text/30" placeholder="John Doe" />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label className="text-sm font-medium text-ink-text/70">Company Name</label>
                    <input type="text" className="w-full bg-paper/50 border border-ink/10 rounded-xl px-4 py-3 focus:outline-none focus:border-terracotta transition-colors text-ink-text placeholder-ink-text/30" placeholder="Acme Inc." />
                  </div>
                </div>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="flex flex-col gap-2">
                    <label className="text-sm font-medium text-ink-text/70">Email Address</label>
                    <input required type="email" className="w-full bg-paper/50 border border-ink/10 rounded-xl px-4 py-3 focus:outline-none focus:border-terracotta transition-colors text-ink-text placeholder-ink-text/30" placeholder="john@example.com" />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label className="text-sm font-medium text-ink-text/70">Phone Number</label>
                    <input type="tel" className="w-full bg-paper/50 border border-ink/10 rounded-xl px-4 py-3 focus:outline-none focus:border-terracotta transition-colors text-ink-text placeholder-ink-text/30" placeholder="+1 (555) 000-0000" />
                  </div>
                </div>

                <div className="flex flex-col gap-2">
                  <label className="text-sm font-medium text-ink-text/70">Service Required</label>
                  <select required defaultValue="" className="w-full bg-paper/50 border border-ink/10 rounded-xl px-4 py-3 focus:outline-none focus:border-terracotta transition-colors appearance-none text-ink-text">
                    <option value="" disabled>Select a service</option>
                    {services.map(s => <option key={s} value={s} className="bg-paper">{s}</option>)}
                  </select>
                </div>

                <div className="flex flex-col gap-2">
                  <label className="text-sm font-medium text-ink-text/70">Project Details</label>
                  <textarea required rows={4} className="w-full bg-paper/50 border border-ink/10 rounded-xl px-4 py-3 focus:outline-none focus:border-terracotta transition-colors resize-none text-ink-text placeholder-ink-text/30" placeholder="Tell us about your goals..."></textarea>
                </div>

                <button 
                  disabled={status === 'submitting'}
                  className="w-full py-4 rounded-xl bg-terracotta font-bold text-white hover:bg-umber transition-colors mt-4 disabled:opacity-50 flex justify-center items-center h-14"
                >
                  {status === 'submitting' ? (
                    <div className="w-6 h-6 border-2 border-white border-t-transparent rounded-full animate-spin" />
                  ) : (
                    "Start Your Project"
                  )}
                </button>
              </motion.form>
            )}
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
};

export default Contact;

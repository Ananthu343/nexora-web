import { useState, useEffect } from 'react';
import { motion, useScroll, useMotionValueEvent } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const { scrollY } = useScroll();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    setScrolled(latest > 50);
  });

  const navLinks = ['About', 'Services', 'Work', 'Pricing', 'Contact'];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed top-0 left-0 w-full z-50 transition-colors duration-300 ${
        scrolled ? 'bg-paper/90 backdrop-blur-md border-b border-ink/5' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-2 cursor-pointer">
          <div className="w-8 h-8 rounded-lg bg-terracotta flex items-center justify-center">
            <span className="font-display font-bold text-lg text-paper">N</span>
          </div>
          <span className="font-display font-bold text-xl tracking-tight text-ink-text">Nexora</span>
        </div>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-8">
          <div className="flex gap-6">
            {navLinks.map((link) => (
              <a
                key={link}
                href={`#${link.toLowerCase()}`}
                className="text-sm font-medium text-muted hover:text-terracotta transition-colors"
              >
                {link}
              </a>
            ))}
          </div>
          <button className="bg-gradient-cta px-6 py-2.5 rounded-full text-sm font-semibold text-white hover:opacity-90 transition-opacity">
            Get Free Consultation
          </button>
        </div>

        {/* Mobile Toggle */}
        <button
          className="lg:hidden text-ink-text p-2"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="absolute top-20 left-0 w-full bg-paper/95 backdrop-blur-xl border-b border-ink/5 py-6 px-6 flex flex-col gap-6 lg:hidden shadow-2xl"
        >
          {navLinks.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              className="text-lg font-medium text-ink-text"
              onClick={() => setMobileMenuOpen(false)}
            >
              {link}
            </a>
          ))}
          <button className="bg-gradient-cta px-6 py-3 rounded-full text-base font-semibold text-white w-full text-center mt-2">
            Get Free Consultation
          </button>
        </motion.div>
      )}
    </motion.nav>
  );
};

export default Navbar;

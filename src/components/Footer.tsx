import { Camera, MessageCircle, Globe } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="pt-24 pb-8 relative border-t border-ink/10 bg-paper">
      {/* Subtle top gradient border line */}
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-terracotta/20 to-transparent" />
      
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
        
        {/* Column 1: Brand */}
        <div className="flex flex-col gap-6">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-terracotta flex items-center justify-center">
              <span className="font-display font-bold text-lg text-paper">N</span>
            </div>
            <span className="font-display font-bold text-xl tracking-tight text-ink-text">Nexora</span>
          </div>
          <p className="text-sm text-ink-text/70">
            Transforming complex challenges into elegant, data-driven experiences that elevate your brand.
          </p>
          <div className="flex gap-4">
            <a href="#" className="w-10 h-10 rounded-full bg-tan/20 flex items-center justify-center hover:bg-terracotta hover:text-paper transition-colors text-ink-text/70">
              <Camera size={18} />
            </a>
            <a href="#" className="w-10 h-10 rounded-full bg-tan/20 flex items-center justify-center hover:bg-terracotta hover:text-paper transition-colors text-ink-text/70">
              <MessageCircle size={18} />
            </a>
            <a href="#" className="w-10 h-10 rounded-full bg-tan/20 flex items-center justify-center hover:bg-terracotta hover:text-paper transition-colors text-ink-text/70">
              <Globe size={18} />
            </a>
          </div>
        </div>

        {/* Column 2: About */}
        <div className="flex flex-col gap-4">
          <h4 className="font-bold mb-2 text-ink-text">Company</h4>
          {['About Us', 'Careers', 'News & Insights', 'Awards', 'Contact'].map(link => (
            <a key={link} href={`#${link.toLowerCase().replace(/ & /g, '-').replace(/ /g, '-')}`} className="text-sm text-ink-text/70 hover:text-terracotta transition-colors">
              {link}
            </a>
          ))}
        </div>

        {/* Column 3: Services */}
        <div className="flex flex-col gap-4">
          <h4 className="font-bold mb-2 text-ink-text">Services</h4>
          {['Digital Marketing', 'SEO Optimization', 'Web Development', 'UI/UX Design', 'Branding'].map(link => (
            <a key={link} href="#services" className="text-sm text-ink-text/70 hover:text-terracotta transition-colors">
              {link}
            </a>
          ))}
        </div>

        {/* Column 4: Contact */}
        <div className="flex flex-col gap-4">
          <h4 className="font-bold mb-2 text-ink-text">Contact Us</h4>
          <p className="text-sm text-ink-text/70">hello@nexora.agency</p>
          <p className="text-sm text-ink-text/70">+1 (555) 123-4567</p>
          <p className="text-sm text-ink-text/70 mt-2">
            100 Innovation Dr,<br />
            Tech District, NY 10001
          </p>
        </div>

      </div>

      <div className="max-w-7xl mx-auto px-6 pt-8 border-t border-ink/10 flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-xs text-ink-text/70">
          &copy; {new Date().getFullYear()} Nexora Digital Agency. All rights reserved.
        </p>
        <div className="flex gap-6">
          <a href="#" className="text-xs text-ink-text/70 hover:text-terracotta transition-colors">Privacy Policy</a>
          <a href="#" className="text-xs text-ink-text/70 hover:text-terracotta transition-colors">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

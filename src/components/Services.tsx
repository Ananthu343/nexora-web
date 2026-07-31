import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { 
  Share2, Activity, MousePointerClick, Search, 
  Fingerprint, PenTool, Video, PlaySquare, 
  LayoutTemplate, Smartphone, Layers,
  Rocket, Palette, Code2
} from 'lucide-react';

const servicesList = [
  {
    num: '01',
    title: 'Digital Marketing',
    desc: 'Targeted campaigns to maximize ROI across search, social, and programmatic channels.',
    icon: Rocket,
    tags: [
      { name: 'Social Media', Icon: Share2 },
      { name: 'Meta Ads', Icon: Activity },
      { name: 'Google Ads', Icon: MousePointerClick },
      { name: 'SEO', Icon: Search }
    ]
  },
  {
    num: '02',
    title: 'Creative Strategy',
    desc: 'Crafting compelling visual assets and brand identities that set you apart from competitors.',
    icon: Palette,
    tags: [
      { name: 'Branding Design', Icon: Fingerprint },
      { name: 'Graphic Design', Icon: PenTool },
      { name: 'Video Production', Icon: Video },
      { name: 'Motion Graphics', Icon: PlaySquare }
    ]
  },
  {
    num: '03',
    title: 'Technology & Web',
    desc: 'Fast, secure, and scalable digital platforms built for performance and seamless user experiences.',
    icon: Code2,
    tags: [
      { name: 'Website Development', Icon: LayoutTemplate },
      { name: 'Mobile Apps', Icon: Smartphone },
      { name: 'UI/UX Design', Icon: Layers }
    ]
  }
];

const Services = () => {
  return (
    <section id="services" className="py-24 relative bg-paper cursor-none">
      <div className="max-w-5xl mx-auto px-6">
        <div className="mb-20 text-center md:text-left">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className="text-[clamp(32px,4vw,56px)] font-bold mb-4 text-ink-text"
          >
            Comprehensive <span className="text-gradient">Capabilities</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ delay: 0.1 }}
            className="text-ink-text/70 text-lg max-w-2xl"
          >
            End-to-end solutions designed to scale your business in the digital era.
          </motion.p>
        </div>

        <div className="flex flex-col gap-8">
          {servicesList.map((service) => (
            <ServiceRow key={service.num} service={service} />
          ))}
        </div>
      </div>
    </section>
  );
};

const ServiceRow = ({ service }: { service: any }) => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 90%", "end 10%"]
  });

  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0.3, 1, 1, 0.3]);
  const y = useTransform(scrollYProgress, [0, 0.2], [20, 0]);

  const MainIcon = service.icon;

  return (
    <motion.div 
      ref={ref}
      style={{ opacity, y }}
      className="bg-white border border-stone-light/20 rounded-3xl p-8 md:p-12 relative overflow-hidden group transition-all duration-500 hover:border-terracotta hover:-translate-y-1 hover:shadow-[0_8px_30px_rgb(154,79,56,0.15)] flex flex-col md:flex-row gap-8 md:gap-16 items-start"
    >
      {/* Corner accent line */}
      <div className="absolute top-0 left-0 w-6 h-[2px] bg-terracotta" />
      
      {/* Watermark */}
      <div className="absolute -bottom-10 -right-10 opacity-[0.03] group-hover:opacity-10 transition-opacity text-terracotta pointer-events-none">
        <MainIcon size={280} strokeWidth={1} />
      </div>

      <div className="text-6xl md:text-8xl font-display font-bold text-terracotta/90 group-hover:text-terracotta transition-colors relative z-10">
        {service.num}
      </div>
      
      <div className="flex-1 mt-2 md:mt-4 relative z-10">
        <h3 className="text-3xl font-bold font-display mb-4 text-ink-text">{service.title}</h3>
        <p className="text-lg text-ink-text/70 mb-8 max-w-lg leading-relaxed">
          {service.desc}
        </p>
        
        <div className="flex flex-wrap gap-3">
          {service.tags.map((tag: any) => {
            const TagIcon = tag.Icon;
            return (
              <span 
                key={tag.name} 
                className="flex items-center gap-2 px-4 py-2 rounded-full bg-tan/20 border border-stone-light/20 text-ink-text text-sm font-medium tracking-wide group-hover:border-terracotta/30 transition-colors"
              >
                <TagIcon size={14} className="text-terracotta" />
                {tag.name}
              </span>
            );
          })}
        </div>
      </div>
    </motion.div>
  );
};

export default Services;

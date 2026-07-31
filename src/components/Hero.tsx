import { motion } from 'framer-motion';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Sphere, Line } from '@react-three/drei';
import { useRef, useMemo } from 'react';
import * as THREE from 'three';

// 3D Scene Component (kept for motion/tech aspect, simplified or shifted)
const NodeNetwork = () => {
  const group = useRef<THREE.Group>(null);
  
  const nodes = useMemo(() => {
    return Array.from({ length: 15 }, () => ({
      position: new THREE.Vector3(
        (Math.random() - 0.5) * 10,
        (Math.random() - 0.5) * 10,
        (Math.random() - 0.5) * 10
      ),
      velocity: new THREE.Vector3(
        (Math.random() - 0.5) * 0.02,
        (Math.random() - 0.5) * 0.02,
        (Math.random() - 0.5) * 0.02
      )
    }));
  }, []);

  useFrame(() => {
    if (group.current) {
      group.current.rotation.y += 0.001;
      group.current.rotation.x += 0.0005;
    }
  });

  return (
    <group ref={group}>
      {nodes.map((node, i) => (
        <Sphere key={i} position={node.position} args={[0.1, 16, 16]}>
          <meshBasicMaterial color="#22D3EE" transparent opacity={0.3} />
        </Sphere>
      ))}
      {nodes.map((node, i) => {
        if (i === nodes.length - 1) return null;
        return (
          <Line
            key={`line-${i}`}
            points={[node.position, nodes[i + 1].position]}
            color="#7C3AED"
            transparent
            opacity={0.15}
            lineWidth={1}
          />
        );
      })}
    </group>
  );
};

const Hero = () => {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden bg-paper">
      
      {/* 3D Background - Subtle tech accent */}
      <div className="absolute inset-0 z-0 opacity-40 mix-blend-multiply pointer-events-none">
        <Canvas camera={{ position: [0, 0, 15], fov: 45 }}>
          <NodeNetwork />
        </Canvas>
      </div>

      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center relative z-10 w-full">
        
        {/* Text Content */}
        <div className="flex flex-col items-start gap-6 pt-10 lg:pt-0">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="px-4 py-1.5 rounded-full border border-ink/10 bg-white/50 backdrop-blur-sm flex items-center gap-2"
          >
            <div className="w-2 h-2 rounded-full bg-terracotta animate-pulse" />
            <span className="text-sm font-medium text-ink-text">Digital Marketing & Creative Agency</span>
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-[clamp(48px,6vw,84px)] font-bold leading-[1.05] tracking-tight text-ink-text"
          >
            Grow Your Brand With Powerful Solutions
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="text-lg md:text-xl text-ink-text/70 max-w-lg leading-relaxed font-medium"
          >
            We transform complex challenges into elegant, data-driven experiences that elevate your brand and drive sustainable growth.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.6 }}
            className="flex flex-wrap items-center gap-4 mt-4"
          >
            <button className="bg-gradient-cta px-8 py-4 rounded-full text-white font-semibold hover:opacity-90 transition-opacity shadow-lg shadow-violet/20">
              Get Free Consultation
            </button>
            <button className="px-8 py-4 rounded-full border border-ink/10 text-ink-text font-semibold hover:bg-ink/5 transition-colors">
              View Our Work →
            </button>
          </motion.div>
        </div>

        {/* Cream Collage Layer Treatment */}
        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9, delay: 0.4 }}
          className="relative h-[500px] w-full hidden md:block"
        >
          {/* Image 1 */}
          <motion.div 
            animate={{ y: [-5, 5, -5] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-10 right-10 w-64 h-80 bg-white p-2 shadow-2xl shadow-umber/10 rounded-sm rotate-3 z-20"
          >
            <img src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Team" className="w-full h-full object-cover grayscale-[30%] sepia-[15%]" />
            {/* Terracotta tag accent */}
            <div className="absolute -top-3 -right-3 bg-terracotta text-paper text-[10px] font-bold px-3 py-1 uppercase tracking-wider shadow-md -rotate-6">
              Strategy
            </div>
          </motion.div>

          {/* Image 2 */}
          <motion.div 
            animate={{ y: [5, -5, 5] }}
            transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
            className="absolute bottom-10 left-10 w-72 h-56 bg-white p-2 shadow-2xl shadow-umber/10 rounded-sm -rotate-6 z-10"
          >
            <img src="https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Analytics" className="w-full h-full object-cover grayscale-[40%] sepia-[20%]" />
            {/* Terracotta underline accent */}
            <div className="absolute -bottom-2 left-10 w-24 h-1.5 bg-terracotta" />
          </motion.div>

          {/* Image 3 (Abstract/Paper texture sticker) */}
          <motion.div 
            animate={{ rotate: [12, 15, 12] }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-40 left-0 w-32 h-40 bg-tan/30 p-1 shadow-lg shadow-umber/5 rounded-sm rotate-12 z-0 border border-tan"
          >
            <img src="https://images.pexels.com/photos/1749303/pexels-photo-1749303.jpeg?auto=compress&cs=tinysrgb&w=400" alt="Abstract" className="w-full h-full object-cover opacity-80 mix-blend-multiply" />
          </motion.div>
        </motion.div>

      </div>
    </section>
  );
};

export default Hero;

import { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, PerspectiveCamera } from '@react-three/drei';
import * as THREE from 'three';
import NetworkNode from './NetworkNode';

const SceneContent = () => {
  const groupRef = useRef<THREE.Group>(null);
  
  // Generate random node positions and connections
  const { nodes, lines } = useMemo(() => {
    const isMobile = window.innerWidth < 768;
    const numNodes = isMobile ? 15 : 30; // Reduce nodes on mobile for performance
    const radius = isMobile ? 3 : 5;
    
    const nodes = [];
    for (let i = 0; i < numNodes; i++) {
      const theta = Math.random() * 2 * Math.PI;
      const phi = Math.acos((Math.random() * 2) - 1);
      
      const x = radius * Math.sin(phi) * Math.cos(theta);
      const y = radius * Math.sin(phi) * Math.sin(theta);
      const z = radius * Math.cos(phi);
      
      // Randomly select a few nodes to pulse
      const isPulsing = Math.random() > 0.8;
      
      nodes.push({ position: new THREE.Vector3(x, y, z), isPulsing });
    }

    const lines = [];
    const maxDistance = 3.5;
    
    for (let i = 0; i < nodes.length; i++) {
      for (let j = i + 1; j < nodes.length; j++) {
        const distance = nodes[i].position.distanceTo(nodes[j].position);
        if (distance < maxDistance) {
          lines.push([nodes[i].position, nodes[j].position]);
        }
      }
    }

    return { nodes, lines };
  }, []);

  useFrame((state, delta) => {
    if (groupRef.current) {
      groupRef.current.rotation.y += delta * 0.1;
      groupRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.2) * 0.2;
    }
  });

  return (
    <group ref={groupRef}>
      {nodes.map((node, i) => (
        <NetworkNode key={`node-${i}`} position={node.position} isPulsing={node.isPulsing} />
      ))}
      
      {lines.map((line, i) => (
        <Line key={`line-${i}`} start={line[0]} end={line[1]} />
      ))}
    </group>
  );
};

const Line = ({ start, end }: { start: THREE.Vector3, end: THREE.Vector3 }) => {
  const lineRef = useRef<THREE.Line>(null);
  
  const geometry = useMemo(() => {
    const geo = new THREE.BufferGeometry().setFromPoints([start, end]);
    return geo;
  }, [start, end]);
  
  const material = useMemo(() => new THREE.LineBasicMaterial({ 
    color: new THREE.Color('#7C3AED').lerp(new THREE.Color('#22D3EE'), Math.random()), 
    transparent: true, 
    opacity: 0.15 
  }), []);

  return <line ref={lineRef} geometry={geometry} material={material} />;
};

const HeroScene = () => {
  return (
    <div className="w-full h-full">
      <Canvas dpr={[1, 2]}>
        <PerspectiveCamera makeDefault position={[0, 0, 12]} fov={45} />
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={1} color="#7C3AED" />
        <pointLight position={[-10, -10, -10]} intensity={1} color="#22D3EE" />
        
        <SceneContent />
        
        <OrbitControls 
          enableZoom={false} 
          enablePan={false}
          autoRotate={false}
          maxPolarAngle={Math.PI / 1.5}
          minPolarAngle={Math.PI / 3}
        />
      </Canvas>
    </div>
  );
};

export default HeroScene;

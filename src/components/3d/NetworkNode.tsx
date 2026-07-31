import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

interface NetworkNodeProps {
  position: THREE.Vector3;
  isPulsing: boolean;
}

const NetworkNode = ({ position, isPulsing }: NetworkNodeProps) => {
  const meshRef = useRef<THREE.Mesh>(null);
  const materialRef = useRef<THREE.MeshStandardMaterial>(null);
  const pulseRef = useRef<THREE.Mesh>(null);

  const baseColor = new THREE.Color('#F5F5F7');
  const pulseColor = new THREE.Color('#22D3EE');

  useFrame((state) => {
    if (!meshRef.current) return;

    // Hover effect animation using time
    meshRef.current.position.y = position.y + Math.sin(state.clock.elapsedTime * 2 + position.x) * 0.1;

    if (isPulsing && pulseRef.current && materialRef.current) {
      // Pulse animation
      const scale = 1 + Math.sin(state.clock.elapsedTime * 4) * 0.5;
      const opacity = Math.max(0, 0.5 - (scale - 1));
      
      pulseRef.current.scale.set(scale, scale, scale);
      (pulseRef.current.material as THREE.MeshBasicMaterial).opacity = opacity;
      
      materialRef.current.color.lerpColors(baseColor, pulseColor, Math.sin(state.clock.elapsedTime * 4) * 0.5 + 0.5);
    }
  });

  return (
    <group position={position}>
      {/* Core Node */}
      <mesh ref={meshRef}>
        <sphereGeometry args={[0.08, 16, 16]} />
        <meshStandardMaterial ref={materialRef} color={baseColor} roughness={0.2} metalness={0.8} />
      </mesh>
      
      {/* Pulse Ring */}
      {isPulsing && (
        <mesh ref={pulseRef}>
          <sphereGeometry args={[0.15, 16, 16]} />
          <meshBasicMaterial color={pulseColor} transparent opacity={0.5} blending={THREE.AdditiveBlending} depthWrite={false} />
        </mesh>
      )}
    </group>
  );
};

export default NetworkNode;

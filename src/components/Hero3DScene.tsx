import { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Sphere, Box, Torus, Cone } from '@react-three/drei';
import * as THREE from 'three';

function FloatingObject({ position, children }: { position: [number, number, number]; children: React.ReactNode }) {
  const ref = useRef<THREE.Group>(null);
  
  useFrame(({ clock }) => {
    if (ref.current) {
      ref.current.position.y = position[1] + Math.sin(clock.elapsedTime + position[0]) * 0.3;
      ref.current.rotation.y += 0.01;
    }
  });

  return (
    <group ref={ref} position={position}>
      {children}
    </group>
  );
}

function FilmRoll() {
  return (
    <FloatingObject position={[-2, 0, 0]}>
      <group>
        <Box args={[0.8, 0.6, 0.3]}>
          <meshStandardMaterial color="#c084fc" metalness={0.8} roughness={0.2} />
        </Box>
        <Torus args={[0.3, 0.08, 16, 32]} position={[-0.5, 0, 0.2]} rotation={[0, Math.PI / 2, 0]}>
          <meshStandardMaterial color="#c084fc" metalness={0.8} roughness={0.2} />
        </Torus>
        <Torus args={[0.3, 0.08, 16, 32]} position={[0.5, 0, 0.2]} rotation={[0, Math.PI / 2, 0]}>
          <meshStandardMaterial color="#c084fc" metalness={0.8} roughness={0.2} />
        </Torus>
      </group>
    </FloatingObject>
  );
}

function Camera() {
  return (
    <FloatingObject position={[2, 0, 0]}>
      <group>
        <Box args={[0.8, 0.6, 0.5]}>
          <meshStandardMaterial color="#06b6d4" metalness={0.8} roughness={0.2} />
        </Box>
        <Cone args={[0.3, 0.6, 32]} position={[0, 0, 0.6]} rotation={[Math.PI / 2, 0, 0]}>
          <meshStandardMaterial color="#0891b2" metalness={0.8} roughness={0.2} />
        </Cone>
      </group>
    </FloatingObject>
  );
}

function PetIcon() {
  return (
    <FloatingObject position={[0, 1.5, -1]}>
      <Sphere args={[0.4, 32, 32]}>
        <meshStandardMaterial color="#f472b6" metalness={0.6} roughness={0.3} />
      </Sphere>
    </FloatingObject>
  );
}

function Planet() {
  return (
    <FloatingObject position={[0, -1.5, -1]}>
      <Sphere args={[0.5, 32, 32]}>
        <meshStandardMaterial 
          color="#a78bfa" 
          metalness={0.7} 
          roughness={0.2}
          emissive="#a78bfa"
          emissiveIntensity={0.3}
        />
      </Sphere>
    </FloatingObject>
  );
}

export default function Hero3DScene() {
  return (
    <div className="w-full h-full absolute inset-0 opacity-70">
      <Canvas camera={{ position: [0, 0, 6], fov: 50 }}>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={1} color="#c084fc" />
        <pointLight position={[-10, -10, -10]} intensity={0.5} color="#06b6d4" />
        
        <FilmRoll />
        <Camera />
        <PetIcon />
        <Planet />
        
        <OrbitControls 
          enableZoom={false} 
          enablePan={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
          autoRotate
          autoRotateSpeed={0.5}
        />
      </Canvas>
    </div>
  );
}

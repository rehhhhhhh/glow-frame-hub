import { useRef, useState } from 'react';
import { Canvas, useFrame, ThreeEvent } from '@react-three/fiber';
import { OrbitControls, PerspectiveCamera, useTexture } from '@react-three/drei';
import * as THREE from 'three';

function GrabbableObject({ 
  position, 
  children, 
  rotationSpeed = 0.01 
}: { 
  position: [number, number, number]; 
  children: React.ReactNode;
  rotationSpeed?: number;
}) {
  const ref = useRef<THREE.Group>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  
  useFrame(({ clock }) => {
    if (ref.current && !isDragging) {
      ref.current.position.y = position[1] + Math.sin(clock.elapsedTime + position[0]) * 0.3;
      ref.current.rotation.y += rotationSpeed;
      
      if (isHovered) {
        ref.current.scale.lerp(new THREE.Vector3(1.2, 1.2, 1.2), 0.1);
      } else {
        ref.current.scale.lerp(new THREE.Vector3(1, 1, 1), 0.1);
      }
    }
  });

  const handlePointerDown = (e: ThreeEvent<PointerEvent>) => {
    e.stopPropagation();
    setIsDragging(true);
  };

  const handlePointerUp = () => {
    setIsDragging(false);
  };

  return (
    <group 
      ref={ref} 
      position={position}
      onPointerDown={handlePointerDown}
      onPointerUp={handlePointerUp}
      onPointerOver={() => setIsHovered(true)}
      onPointerOut={() => setIsHovered(false)}
    >
      {children}
    </group>
  );
}

function RealisticCamera() {
  return (
    <GrabbableObject position={[-3, 0, 0]}>
      <group>
        {/* Camera Body */}
        <mesh castShadow>
          <boxGeometry args={[1.2, 0.8, 1]} />
          <meshStandardMaterial 
            color="#1a1a1a" 
            metalness={0.7} 
            roughness={0.3}
          />
        </mesh>
        
        {/* Lens */}
        <mesh position={[0, 0, 0.7]} rotation={[Math.PI / 2, 0, 0]} castShadow>
          <cylinderGeometry args={[0.4, 0.5, 0.6, 32]} />
          <meshStandardMaterial 
            color="#0a0a0a" 
            metalness={0.9} 
            roughness={0.1}
          />
        </mesh>
        
        {/* Lens Glass */}
        <mesh position={[0, 0, 1]} castShadow>
          <circleGeometry args={[0.35, 32]} />
          <meshStandardMaterial 
            color="#1a4d2e"
            metalness={0.95} 
            roughness={0.05}
            emissive="#0d3d1a"
            emissiveIntensity={0.3}
          />
        </mesh>
        
        {/* Viewfinder */}
        <mesh position={[0, 0.5, -0.3]} castShadow>
          <boxGeometry args={[0.3, 0.2, 0.2]} />
          <meshStandardMaterial color="#0a0a0a" />
        </mesh>
        
        {/* Red Record Button */}
        <mesh position={[0.5, 0.3, 0.3]} castShadow>
          <sphereGeometry args={[0.08, 16, 16]} />
          <meshStandardMaterial 
            color="#ff0000" 
            emissive="#ff0000"
            emissiveIntensity={0.5}
          />
        </mesh>
      </group>
    </GrabbableObject>
  );
}

function GojoCharacter() {
  return (
    <GrabbableObject position={[3, 0, 0]} rotationSpeed={0.005}>
      <group>
        {/* Head */}
        <mesh position={[0, 1, 0]} castShadow>
          <sphereGeometry args={[0.35, 32, 32]} />
          <meshStandardMaterial color="#ffd7ba" />
        </mesh>
        
        {/* Hair */}
        <mesh position={[0, 1.3, 0]} castShadow>
          <sphereGeometry args={[0.38, 32, 32]} />
          <meshStandardMaterial color="#e8e8e8" roughness={0.7} />
        </mesh>
        
        {/* Blindfold/Glasses */}
        <mesh position={[0, 1.05, 0.3]} castShadow>
          <boxGeometry args={[0.5, 0.15, 0.1]} />
          <meshStandardMaterial 
            color="#000000" 
            metalness={0.3}
          />
        </mesh>
        
        {/* Blue Energy Glow */}
        <mesh position={[0, 1.05, 0.35]}>
          <sphereGeometry args={[0.15, 16, 16]} />
          <meshStandardMaterial 
            color="#00ffff"
            emissive="#00ffff"
            emissiveIntensity={1.5}
            transparent
            opacity={0.6}
          />
        </mesh>
        
        {/* Body */}
        <mesh position={[0, 0.3, 0]} castShadow>
          <cylinderGeometry args={[0.25, 0.3, 0.9, 32]} />
          <meshStandardMaterial color="#1a1a2e" />
        </mesh>
        
        {/* Arms */}
        <mesh position={[-0.4, 0.5, 0]} rotation={[0, 0, 0.3]} castShadow>
          <cylinderGeometry args={[0.08, 0.08, 0.7, 16]} />
          <meshStandardMaterial color="#1a1a2e" />
        </mesh>
        <mesh position={[0.4, 0.5, 0]} rotation={[0, 0, -0.3]} castShadow>
          <cylinderGeometry args={[0.08, 0.08, 0.7, 16]} />
          <meshStandardMaterial color="#1a1a2e" />
        </mesh>
      </group>
    </GrabbableObject>
  );
}

function Laptop() {
  return (
    <GrabbableObject position={[0, -1.5, 0]} rotationSpeed={0.008}>
      <group rotation={[-0.3, 0, 0]}>
        {/* Laptop Base */}
        <mesh position={[0, 0, 0]} castShadow>
          <boxGeometry args={[1.6, 0.05, 1.1]} />
          <meshStandardMaterial 
            color="#2a2a2a" 
            metalness={0.8}
            roughness={0.2}
          />
        </mesh>
        
        {/* Keyboard Area */}
        <mesh position={[0, 0.03, 0]} castShadow>
          <boxGeometry args={[1.4, 0.01, 0.9]} />
          <meshStandardMaterial color="#1a1a1a" />
        </mesh>
        
        {/* Trackpad */}
        <mesh position={[0, 0.04, 0.35]} castShadow>
          <boxGeometry args={[0.5, 0.01, 0.3]} />
          <meshStandardMaterial color="#0d3d1a" metalness={0.5} />
        </mesh>
        
        {/* Screen */}
        <mesh position={[0, 0.5, -0.5]} rotation={[0.3, 0, 0]} castShadow>
          <boxGeometry args={[1.6, 1, 0.05]} />
          <meshStandardMaterial 
            color="#1a1a1a" 
            metalness={0.9}
            roughness={0.1}
          />
        </mesh>
        
        {/* Screen Display */}
        <mesh position={[0, 0.5, -0.48]} rotation={[0.3, 0, 0]}>
          <planeGeometry args={[1.5, 0.9]} />
          <meshStandardMaterial 
            color="#0d5f2e"
            emissive="#0d5f2e"
            emissiveIntensity={0.6}
          />
        </mesh>
        
        {/* Logo */}
        <mesh position={[0, 0.5, -0.53]} rotation={[0.3, 0, 0]}>
          <circleGeometry args={[0.08, 32]} />
          <meshStandardMaterial 
            color="#00ff00"
            emissive="#00ff00"
            emissiveIntensity={0.8}
          />
        </mesh>
      </group>
    </GrabbableObject>
  );
}

function VRHeadset() {
  return (
    <GrabbableObject position={[0, 1.5, -1]} rotationSpeed={0.012}>
      <group>
        {/* Main Headset Body */}
        <mesh castShadow>
          <boxGeometry args={[1, 0.6, 0.5]} />
          <meshStandardMaterial 
            color="#f5f5f5" 
            metalness={0.3}
            roughness={0.4}
          />
        </mesh>
        
        {/* Left Lens */}
        <mesh position={[-0.25, 0, 0.26]} rotation={[Math.PI / 2, 0, 0]} castShadow>
          <cylinderGeometry args={[0.2, 0.2, 0.05, 32]} />
          <meshStandardMaterial 
            color="#0a0a0a" 
            metalness={0.9}
            roughness={0.05}
          />
        </mesh>
        
        {/* Right Lens */}
        <mesh position={[0.25, 0, 0.26]} rotation={[Math.PI / 2, 0, 0]} castShadow>
          <cylinderGeometry args={[0.2, 0.2, 0.05, 32]} />
          <meshStandardMaterial 
            color="#0a0a0a" 
            metalness={0.9}
            roughness={0.05}
          />
        </mesh>
        
        {/* Oculus Logo Area */}
        <mesh position={[0, 0.15, 0.26]}>
          <circleGeometry args={[0.12, 32]} />
          <meshStandardMaterial 
            color="#1a1a1a"
          />
        </mesh>
        
        {/* Green Indicator Light */}
        <mesh position={[0.4, 0.2, 0.2]}>
          <sphereGeometry args={[0.03, 16, 16]} />
          <meshStandardMaterial 
            color="#00ff00"
            emissive="#00ff00"
            emissiveIntensity={2}
          />
        </mesh>
        
        {/* Head Strap */}
        <mesh position={[0, 0, -0.4]} rotation={[0, 0, Math.PI / 2]} castShadow>
          <torusGeometry args={[0.35, 0.05, 16, 32, Math.PI]} />
          <meshStandardMaterial color="#2a2a2a" />
        </mesh>
      </group>
    </GrabbableObject>
  );
}

export default function Enhanced3DScene() {
  return (
    <div className="w-full h-full absolute inset-0 opacity-80 pointer-events-auto">
      <Canvas shadows camera={{ position: [0, 0, 8], fov: 50 }}>
        <PerspectiveCamera makeDefault position={[0, 0, 8]} />
        
        {/* Lighting */}
        <ambientLight intensity={0.3} />
        <pointLight position={[10, 10, 10]} intensity={1} color="#00ff00" castShadow />
        <pointLight position={[-10, -10, -10]} intensity={0.5} color="#00ff00" />
        <spotLight 
          position={[0, 5, 0]} 
          angle={0.3} 
          penumbra={1} 
          intensity={0.5} 
          color="#00ff00"
          castShadow 
        />
        
        {/* 3D Objects */}
        <RealisticCamera />
        <GojoCharacter />
        <Laptop />
        <VRHeadset />
        
        <OrbitControls 
          enableZoom={true}
          enablePan={true}
          maxDistance={12}
          minDistance={4}
        />
      </Canvas>
    </div>
  );
}

import { useEffect, useMemo, useRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, PerspectiveCamera, useFBX } from "@react-three/drei";
import * as THREE from "three";

function RotatingModel({ url, index }: { url: string; index: number }) {
  const groupRef = useRef<THREE.Group>(null);
  const model = useFBX(url);

  useFrame(() => {
    if (groupRef.current) {
      groupRef.current.rotation.y += 0.002;
    }
  });

  // spread models in a gentle arc
  const position = useMemo<[number, number, number]>(() => {
    const radius = 2.5;
    const angle = (index - 1) * 0.6; // -0.6, 0, 0.6 ...
    return [Math.sin(angle) * radius, 0, Math.cos(angle) * -0.5];
  }, [index]);

  return (
    <group ref={groupRef} position={position} scale={[0.01, 0.01, 0.01]}>
      <primitive object={model} />
    </group>
  );
}

export default function FbxScene() {
  const [urls, setUrls] = useState<string[]>([]);

  useEffect(() => {
    return () => {
      urls.forEach((u) => URL.revokeObjectURL(u));
    };
  }, [urls]);

  const onFilesSelected = (files: FileList | null) => {
    if (!files) return;
    const next = Array.from(files).map((f) => URL.createObjectURL(f));
    setUrls(next);
  };

  return (
    <div className="w-full h-full absolute inset-0 opacity-80 pointer-events-auto">
      {/* Lightweight uploader overlay in corner */}
      <div className="absolute z-10 right-4 top-20">
        <label className="inline-flex items-center gap-2 px-3 py-1.5 rounded-md bg-black/10 text-black text-xs font-semibold cursor-pointer shadow-sm">
          Upload .fbx
          <input
            type="file"
            accept=".fbx"
            multiple
            className="hidden"
            onChange={(e) => onFilesSelected(e.target.files)}
          />
        </label>
      </div>

      <Canvas shadows camera={{ position: [0, 0, 8], fov: 50 }}>
        <PerspectiveCamera makeDefault position={[0, 0, 8]} />

        {/* Golden lighting */}
        <ambientLight intensity={0.35} />
        <pointLight position={[10, 10, 10]} intensity={1} color="#FFD700" castShadow />
        <pointLight position={[-10, -10, -10]} intensity={0.6} color="#FFB700" />
        <spotLight position={[0, 6, 2]} angle={0.3} penumbra={1} intensity={0.6} color="#FFD700" castShadow />

        {urls.map((u, i) => (
          <RotatingModel key={u} url={u} index={i} />
        ))}

        <OrbitControls enableZoom enablePan maxDistance={14} minDistance={4} />
      </Canvas>
    </div>
  );
}



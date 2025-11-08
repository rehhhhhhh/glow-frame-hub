import { Suspense, useMemo } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, PerspectiveCamera, useFBX } from "@react-three/drei";

function FbxModel({ url, position }: { url: string; position: [number, number, number] }) {
  const fbx = useFBX(url);
  return <primitive object={fbx} position={position} scale={[0.01, 0.01, 0.01]} />;
}

export default function HeroFbxScene() {
  // Discover .fbx files in assets/models at build-time
  const models = useMemo(() => {
    // import.meta.glob returns a map of paths to loader functions
    const files = import.meta.glob("/src/assets/models/**/*.fbx", { eager: false });
    const urls = Object.keys(files).slice(0, 4); // take up to 4
    return urls;
  }, []);

  if (!models.length) return null;

  // Evenly spaced positions around the hero, pushed back on Z by ~3.5
  const positions: [number, number, number][] = [
    [-3, 0.5, -3.5],
    [3, 0.75, -3.5],
    [-1.5, -1.2, -3.8],
    [1.8, -1.0, -3.8],
  ];

  return (
    <div className="w-full h-full absolute inset-0 pointer-events-none">
      <Canvas shadows camera={{ position: [0, 0, 8], fov: 50 }}>
        <PerspectiveCamera makeDefault position={[0, 0, 8]} />

        {/* Soft, golden-tinted lighting with subtle shadows */}
        <ambientLight intensity={0.35} />
        <directionalLight position={[6, 8, 4]} intensity={0.7} color="#FFD700" castShadow />
        <directionalLight position={[-6, -4, 6]} intensity={0.4} color="#FFB700" />

        <Suspense fallback={null}>
          {models.map((url, i) => (
            <FbxModel key={url} url={url} position={positions[i % positions.length]} />
          ))}
        </Suspense>

        {/* Keep controls passive to avoid camera movement; disabled interactions */}
        <OrbitControls enableZoom={false} enablePan={false} enableRotate={false} />
      </Canvas>
    </div>
  );
}



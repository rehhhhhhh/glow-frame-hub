import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

interface Particle {
  id: number;
  x: number;
  y: number;
  size: number;
  duration: number;
}

export default function GreenParticleBurst({ onComplete, color = "hsl(142, 76%, 45%)", power = 1 }: { onComplete?: () => void, color?: string, power?: number }) {
  const [particles, setParticles] = useState<Particle[]>([]);
  useEffect(() => {
    const count = Math.round(120 * power);
    const baseVel = 250 * power;
    const newParticles: Particle[] = [];
    for (let i = 0; i < count; i++) {
      const angle = (Math.PI * 2 * i) / count;
      const velocity = baseVel + Math.random() * (200 * power);
      newParticles.push({
        id: i,
        x: Math.cos(angle) * velocity,
        y: Math.sin(angle) * velocity,
        size: 4 + Math.random() * (8 * power),
        duration: 0.6 + Math.random() * 0.5,
      });
    }
    setParticles(newParticles);
    const timer = setTimeout(() => {
      onComplete?.();
    }, 1300 + 200 * (power - 1));
    return () => clearTimeout(timer);
  }, [onComplete, power]);

  return (
    <div className="fixed inset-0 pointer-events-none z-50 flex items-center justify-center">
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute rounded-full"
          style={{
            width: particle.size,
            height: particle.size,
            background:
              color === '#FFD700' || color === 'gold'
                ? `radial-gradient(circle, #FFD700 50%, #fffbe7 100%)`
                : `radial-gradient(circle, hsl(142, 76%, 45%), hsl(142, 80%, 50%))`,
            boxShadow:
              color === '#FFD700' || color === 'gold'
                ? `0 0 ${particle.size * 4}px #FFD70099, 0 0 10px #fffbe5cc`
                : `0 0 ${particle.size * 2.5}px hsl(142, 76%, 45%)`,
          }}
          initial={{ x: 0, y: 0, opacity: 1, scale: 1 }}
          animate={{
            x: particle.x,
            y: particle.y,
            opacity: 0,
            scale: 0,
          }}
          transition={{
            duration: particle.duration,
            ease: 'easeInOut',
          }}
        />
      ))}
      {/* Center Flash */}
      <motion.div
        className="absolute rounded-full"
        style={{
          width: 64 * power,
          height: 64 * power,
          background:
            color === '#FFD700' || color === 'gold'
              ? 'radial-gradient(circle, #FFD700 25%, transparent 70%)'
              : 'radial-gradient(circle, hsl(142, 76%, 45%), transparent)',
          boxShadow: color === '#FFD700' || color === 'gold' ? '0 0 80px #FFD70088, 0 0 16px #fffbe5aa' : undefined,
        }}
        initial={{ scale: 0, opacity: 1 }}
        animate={{ scale: 5 * power, opacity: 0 }}
        transition={{ duration: 0.9, ease: 'easeInOut' }}
      />
    </div>
  );
}

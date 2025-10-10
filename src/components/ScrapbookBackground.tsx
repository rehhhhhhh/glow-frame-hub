import { motion } from "framer-motion";
import texture1 from "@/assets/texture-1.jpg";
import texture2 from "@/assets/texture-2.jpg";
import paperTexture from "@/assets/paper-texture.jpg";

export default function ScrapbookBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden">
      {/* Base paper texture layer */}
      <div 
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `url(${paperTexture})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          mixBlendMode: 'multiply'
        }}
      />

      {/* Gradient overlay layers */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-background/80 to-secondary/20" />
      <div className="absolute inset-0 bg-gradient-to-tr from-accent/10 via-transparent to-primary/10" />

      {/* Animated texture layers - scrapbook pieces */}
      <motion.div
        className="absolute top-0 left-0 w-1/3 h-1/2 opacity-10"
        style={{
          backgroundImage: `url(${texture1})`,
          backgroundSize: 'cover',
          clipPath: 'polygon(0 0, 100% 5%, 95% 100%, 0 95%)',
          filter: 'blur(1px)',
          mixBlendMode: 'overlay'
        }}
        animate={{
          x: [0, 10, 0],
          y: [0, 5, 0],
          rotate: [-1, 1, -1]
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      <motion.div
        className="absolute bottom-0 right-0 w-1/2 h-1/3 opacity-10"
        style={{
          backgroundImage: `url(${texture2})`,
          backgroundSize: 'cover',
          clipPath: 'polygon(5% 0, 100% 0, 100% 95%, 0 100%)',
          filter: 'blur(1px)',
          mixBlendMode: 'overlay'
        }}
        animate={{
          x: [0, -10, 0],
          y: [0, -5, 0],
          rotate: [1, -1, 1]
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      <motion.div
        className="absolute top-1/4 right-1/4 w-1/4 h-1/4 opacity-10"
        style={{
          backgroundImage: `url(${texture1})`,
          backgroundSize: 'cover',
          clipPath: 'polygon(10% 0, 100% 10%, 90% 100%, 0 90%)',
          filter: 'blur(2px)',
          mixBlendMode: 'soft-light'
        }}
        animate={{
          x: [0, 15, 0],
          y: [0, -10, 0],
          rotate: [2, -2, 2],
          scale: [1, 1.05, 1]
        }}
        transition={{
          duration: 30,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      {/* Glow orbs - scrapbook light effects */}
      <motion.div
        className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full opacity-20"
        style={{
          background: 'radial-gradient(circle, hsl(var(--primary)) 0%, transparent 70%)',
          filter: 'blur(60px)'
        }}
        animate={{
          x: [0, 50, 0],
          y: [0, -30, 0],
          scale: [1, 1.2, 1]
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      <motion.div
        className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full opacity-15"
        style={{
          background: 'radial-gradient(circle, hsl(var(--secondary)) 0%, transparent 70%)',
          filter: 'blur(70px)'
        }}
        animate={{
          x: [0, -40, 0],
          y: [0, 40, 0],
          scale: [1, 1.3, 1]
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      <motion.div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full opacity-10"
        style={{
          background: 'radial-gradient(circle, hsl(var(--accent)) 0%, transparent 70%)',
          filter: 'blur(80px)'
        }}
        animate={{
          scale: [1, 1.4, 1],
          opacity: [0.1, 0.15, 0.1]
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      {/* Scattered dots/confetti effect */}
      {Array.from({ length: 30 }).map((_, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full"
          style={{
            width: Math.random() * 8 + 2 + 'px',
            height: Math.random() * 8 + 2 + 'px',
            left: Math.random() * 100 + '%',
            top: Math.random() * 100 + '%',
            backgroundColor: [
              'hsl(var(--primary))',
              'hsl(var(--secondary))',
              'hsl(var(--accent))'
            ][i % 3],
            opacity: 0.1 + Math.random() * 0.2
          }}
          animate={{
            y: [0, -20, 0],
            x: [0, Math.random() * 20 - 10, 0],
            scale: [1, 1.2, 1],
            opacity: [0.1, 0.3, 0.1]
          }}
          transition={{
            duration: 3 + Math.random() * 4,
            repeat: Infinity,
            delay: Math.random() * 2,
            ease: "easeInOut"
          }}
        />
      ))}

      {/* Torn paper edge effects */}
      <div className="absolute top-0 left-0 w-full h-20 opacity-20 bg-gradient-to-b from-foreground/10 to-transparent"
        style={{
          clipPath: 'polygon(0 0, 100% 0, 100% 40%, 98% 60%, 95% 45%, 92% 70%, 88% 50%, 85% 65%, 80% 45%, 75% 60%, 70% 40%, 65% 55%, 60% 45%, 55% 60%, 50% 40%, 45% 55%, 40% 45%, 35% 60%, 30% 45%, 25% 55%, 20% 45%, 15% 60%, 10% 45%, 5% 55%, 0 50%)'
        }}
      />
      
      <div className="absolute bottom-0 left-0 w-full h-20 opacity-20 bg-gradient-to-t from-foreground/10 to-transparent"
        style={{
          clipPath: 'polygon(0 60%, 5% 45%, 10% 55%, 15% 40%, 20% 55%, 25% 45%, 30% 55%, 35% 40%, 40% 55%, 45% 45%, 50% 60%, 55% 40%, 60% 55%, 65% 45%, 70% 60%, 75% 40%, 80% 55%, 85% 35%, 88% 50%, 92% 30%, 95% 55%, 98% 40%, 100% 60%, 100% 100%, 0 100%)'
        }}
      />

      {/* Film grain overlay */}
      <div 
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 400 400\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noiseFilter\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'3.5\' numOctaves=\'6\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noiseFilter)\'/%3E%3C/svg%3E")',
          mixBlendMode: 'overlay'
        }}
      />
    </div>
  );
}

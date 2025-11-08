import { motion } from "framer-motion";
import { ArrowDown, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import ParticleBackground from "@/components/ParticleBackground";
import HeroFbxScene from "@/components/HeroFbxScene";
// Removed ScrapbookBackground for clarity and modern look
import { Link } from "react-router-dom";
import siteData from "@/data/site.json";
import sampleCert from "@/assets/no-light-left.jpg";

// Helper: Split a string into a span element per letter for animation
const LetterReveal = ({ children }: { children: string }) => (
  <span className="inline-block">
    {[...children.toUpperCase()].map((char, i) => (
      <motion.span
        key={i}
        className="inline-block transformer-letter"
        initial={{ opacity: 0, y: -44, filter: "brightness(1.9) grayscale(1)" }}
        animate={{
          opacity: 1,
          y: 0,
          filter: [
            "brightness(2.3) grayscale(1)",
            "brightness(1.4) grayscale(0.6)",
            "brightness(1) grayscale(0)"
          ]
        }}
        transition={{
          delay: i * 0.14,
          duration: 0.53,
          type: "spring",
          stiffness: 260,
          damping: 15,
        }}
        style={{
          textShadow:
            "0 2px 16px #FFD700aa, 0 -2px 2px #FFA50088, 1px 2px 8px #ffed9740",
        }}
      >{char}</motion.span>
    ))}
  </span>
);

export default function Hero() {
  return (
    <>
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-[#191919] via-[#222212] to-[#0b0902] dark:bg-gradient-to-br dark:from-[#131311] dark:via-[#15140d] dark:to-[#050505]">
      {/* Background Video - blends with a cleaner gold-accent gradient */}
      <video
        className="absolute inset-0 w-full h-full object-cover z-0 opacity-65 pointer-events-none mix-blend-luminosity [mask-image:linear-gradient(to_bottom,rgba(0,0,0,0.82)70%,rgba(0,0,0,0.8)100%)]"
        src="/background.mp4"
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
        style={{ background: "#15140d" }}
      />
      {/* Remove the former dark overlay and scrapbook effect */}
      {/* Subtle golden animated gradient overlay (modern feel) */}
      <div className="absolute inset-0 pointer-events-none z-[1]" style={{background: 'linear-gradient(120deg,rgba(255,215,64,0.04) 0%,rgba(255,255,255,0.01) 70%)'}} />
      {/* Keep only the lighter, elegant particles */}
      <ParticleBackground lightVersion />
      <HeroFbxScene />
      <div className="relative z-10 container mx-auto px-4 text-center flex flex-col items-center justify-center min-h-[60vh]">
        <motion.h1
          className="mt-12 text-[clamp(3rem,11vw,8rem)] font-extrabold leading-tight text-glow !text-yellow-300 drop-shadow-[0_2px_30px_#FFD700dd]"
          style={{ fontFamily: 'Orbitron, Exo, Arial Black, Arial, sans-serif', textTransform: "uppercase", lineHeight: 1.1 }}
          initial="hidden"
          animate="visible"
        >
          <LetterReveal>Rahul S</LetterReveal>
        </motion.h1>

        <motion.div
          className="flex flex-col items-center mb-8"
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <div className="font-bold text-2xl md:text-3xl text-center mb-2 tracking-wide" style={{letterSpacing:'0.022em'}}>Welcome to my Multimedia Portfolio</div>
          <div className="text-lg md:text-xl max-w-2xl mx-auto text-center font-semibold text-[#FFD700] dark:text-[#FFD700] text-foreground/90 dark:text-foreground/90" style={{letterSpacing:'0.01em'}}>
            I’m Rahul S, an AR/VR Developer, Video Editor, and Game Designer passionate about creating immersive experiences.
          </div>
        </motion.div>

        <div className="flex flex-row gap-6 justify-center items-center mt-8 flex-wrap">
          <Link to="/projects">
            <Button size="lg" className="gap-2 hover-lift bg-[#FFD700] dark:bg-[#FFD700] text-[#15140d] dark:text-[#15140d] font-extrabold border-0 shadow-[0_0_34px_0_#FFD70077] focus:ring-2 focus:ring-yellow-400"
              style={{boxShadow: '0 0 34px #FFD70077, 0 2px 16px #fff8d799'}}>
              View My Work
            </Button>
          </Link>
          <a href="/RAHUL S RESUMEE.pdf" download="RAHUL S RESUMEE.pdf" target="_blank" rel="noopener noreferrer">
            <Button size="lg" variant="outline" className="gap-2 hover-lift border-[#FFD700] dark:border-[#FFD700] text-[#FFD700] dark:text-[#FFD700] font-bold bg-card/50 dark:bg-card/50 backdrop-blur-xl shadow-[0_0_26px_0_#FFD70033] focus:ring-2 focus:ring-yellow-400 hover:bg-[#FFD70022] dark:hover:bg-[#FFD70022]">
              <Download className="w-4 h-4" />
              Download Resume
            </Button>
          </a>
        </div>
      </div>
    </div>
    {/* Certifications section removed; moved to Skills page. */}
    </>
  );
}

/* Add these CSS classes to your index.css for effect: */
/*
.perspective {
  perspective: 1200px;
}
.cert-card {
  transition: transform 0.6s cubic-bezier(.82,-0.07,.19,1.05);
  transform-style: preserve-3d;
  min-height: 320px;
}
.cert-card:hover .flip-front,
.cert-card:focus-visible .flip-front {
  transform: rotateY(180deg);
}
.cert-card:hover .flip-back,
.cert-card:focus-visible .flip-back {
  transform: rotateY(0deg);
}
.flip-front,
.flip-back {
  backface-visibility: hidden;
  transition: transform 0.6s cubic-bezier(.82,-0.07,.19,1.05);
  height: 100%;
}
.flip-back {
  transform: rotateY(180deg);
  z-index:2;
  box-shadow: 0 6px 32px 0 #ffc74024;
}
.flip-front {
  z-index: 1;
}
*/

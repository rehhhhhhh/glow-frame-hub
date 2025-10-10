import { motion } from "framer-motion";
import { ArrowDown, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import Hero3DScene from "@/components/Hero3DScene";
import ParticleBackground from "@/components/ParticleBackground";
import ScrapbookBackground from "@/components/ScrapbookBackground";
import { Link } from "react-router-dom";
import siteData from "@/data/site.json";

export default function Hero() {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Layered scrapbook background */}
      <ScrapbookBackground />
      
      {/* Interactive particles on top of scrapbook */}
      <ParticleBackground />
      
      {/* 3D Scene */}
      <Hero3DScene />

      <div className="relative z-10 container mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-6xl md:text-8xl font-bold mb-6 text-glow">
            {siteData.name}
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-4">
            {siteData.tagline}
          </p>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8 leading-relaxed">
            {siteData.about.substring(0, 200)}...
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link to="/projects">
              <Button size="lg" className="gap-2 hover-lift">
                View My Work
                <ArrowDown className="w-4 h-4" />
              </Button>
            </Link>
            <a href={siteData.resume} download>
              <Button size="lg" variant="outline" className="gap-2 hover-lift">
                <Download className="w-4 h-4" />
                Download Resume
              </Button>
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <ArrowDown className="w-6 h-6 animate-bounce text-primary" />
        </motion.div>
      </div>
    </div>
  );
}

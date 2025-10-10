import { motion, AnimatePresence } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Play } from "lucide-react";
import { useState, useEffect } from "react";
import projectsData from "@/data/projects.json";
import ScrapbookBackground from "@/components/ScrapbookBackground";
import ParticleBackground from "@/components/ParticleBackground";
import Enhanced3DScene from "@/components/Enhanced3DScene";
import GreenParticleBurst from "@/components/GreenParticleBurst";

export default function Projects() {
  const [filter, setFilter] = useState("all");
  const [showBurst, setShowBurst] = useState(true);
  const [showProjects, setShowProjects] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowProjects(true);
    }, 1200);
    return () => clearTimeout(timer);
  }, []);

  const categories = ["all", ...new Set(projectsData.map(p => p.category))];
  const filteredProjects = filter === "all" 
    ? projectsData 
    : projectsData.filter(p => p.category === filter);

  return (
    <div className="min-h-screen pt-24 pb-16 relative overflow-hidden bg-gradient-to-b from-background via-background to-black">
      {showBurst && <GreenParticleBurst onComplete={() => setShowBurst(false)} />}
      <ScrapbookBackground />
      <ParticleBackground />
      <Enhanced3DScene />
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-5xl md:text-7xl font-bold mb-4 text-glow">My Projects</h1>
          <p className="text-xl text-muted-foreground mb-8">
            Explore my portfolio of AR/VR games, video edits, and design work
          </p>

          {/* Category Filter */}
          <div className="flex flex-wrap gap-3 mb-12">
            {categories.map((category) => (
              <Button
                key={category}
                variant={filter === category ? "default" : "outline"}
                onClick={() => setFilter(category)}
                className="capitalize"
              >
                {category}
              </Button>
            ))}
          </div>

          {/* Projects Grid */}
          <AnimatePresence>
            {showProjects && (
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredProjects.map((project, index) => (
                  <motion.div
                    key={project.id}
                    initial={{ opacity: 0, y: -500, rotate: Math.random() * 360 }}
                    animate={{ 
                      opacity: 1, 
                      y: 0,
                      rotate: 0,
                    }}
                    transition={{ 
                      delay: index * 0.1,
                      type: "spring",
                      stiffness: 100,
                      damping: 15,
                    }}
                  >
                <Card className="overflow-hidden hover-lift card-glow group">
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                  
                  <div className="p-6">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-xs px-2 py-1 bg-primary/20 text-primary rounded-full">
                        {project.category}
                      </span>
                      {project.featured && (
                        <span className="text-xs px-2 py-1 bg-accent/20 text-accent rounded-full">
                          Featured
                        </span>
                      )}
                    </div>
                    
                    <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                    <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                      {project.description}
                    </p>

                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tech.slice(0, 3).map((tech) => (
                        <span
                          key={tech}
                          className="text-xs px-2 py-1 bg-secondary/20 text-secondary rounded"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    <div className="flex gap-2">
                      <a
                        href={project.demoLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1"
                      >
                        <Button variant="outline" size="sm" className="w-full gap-2">
                          <Play className="w-4 h-4" />
                          View Demo
                        </Button>
                      </a>
                    </div>
                  </div>
                </Card>
                  </motion.div>
                ))}
              </div>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </div>
  );
}

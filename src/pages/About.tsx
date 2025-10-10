import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import siteData from "@/data/site.json";
import ScrapbookBackground from "@/components/ScrapbookBackground";
import ParticleBackground from "@/components/ParticleBackground";
import Enhanced3DScene from "@/components/Enhanced3DScene";
import profilePhoto from "@/assets/profile-photo.jpg";

export default function About() {
  return (
    <div className="min-h-screen pt-24 pb-16 relative overflow-hidden bg-gradient-to-b from-background via-background to-black">
      <ScrapbookBackground />
      <ParticleBackground />
      <Enhanced3DScene />
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-5xl md:text-7xl font-bold mb-8 text-glow">About Me</h1>
          
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="md:col-span-1"
            >
              <Card className="p-4 bg-gradient-to-br from-card to-card/50 backdrop-blur-sm border-primary/30 hover-lift">
                <div className="relative w-full aspect-square overflow-hidden rounded-lg mb-4">
                  <img 
                    src={profilePhoto} 
                    alt="Rahul S" 
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent" />
                </div>
                <h2 className="text-2xl font-bold text-center text-glow">{siteData.name}</h2>
                <p className="text-center text-muted-foreground mt-2">{siteData.tagline}</p>
              </Card>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              className="md:col-span-2"
            >
              <Card className="p-8 md:p-12 bg-gradient-to-br from-card to-card/50 backdrop-blur-sm border-primary/20 h-full flex items-center">
                <p className="text-lg md:text-xl leading-relaxed text-foreground">
                  {siteData.about}
                </p>
              </Card>
            </motion.div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
            >
              <Card className="p-6 hover-lift card-glow">
                <h3 className="text-2xl font-bold mb-4 text-primary">Education</h3>
                <div className="space-y-2">
                  <p className="font-semibold">Rajalakshmi Engineering College</p>
                  <p className="text-muted-foreground">Game Design and Development</p>
                  <p className="text-sm text-muted-foreground">Chennai, India</p>
                </div>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
            >
              <Card className="p-6 hover-lift card-glow">
                <h3 className="text-2xl font-bold mb-4 text-secondary">Contact Info</h3>
                <div className="space-y-2">
                  <p className="font-semibold">Email</p>
                  <a href={`mailto:${siteData.contact.email}`} className="text-primary hover:underline block">
                    {siteData.contact.email}
                  </a>
                  <p className="font-semibold mt-4">Phone</p>
                  <a href={`tel:${siteData.contact.phone}`} className="text-primary hover:underline block">
                    {siteData.contact.phone}
                  </a>
                </div>
              </Card>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="mt-12"
          >
            <Card className="p-6 hover-lift card-glow">
              <h3 className="text-2xl font-bold mb-4 text-accent">Specializations</h3>
              <div className="grid md:grid-cols-3 gap-4">
                <div>
                  <h4 className="font-semibold text-primary mb-2">AR/VR Development</h4>
                  <p className="text-sm text-muted-foreground">Creating immersive experiences with Unity and cutting-edge AR/VR technologies</p>
                </div>
                <div>
                  <h4 className="font-semibold text-secondary mb-2">Video Editing</h4>
                  <p className="text-sm text-muted-foreground">Crafting cinematic visuals and motion-driven content with advanced editing techniques</p>
                </div>
                <div>
                  <h4 className="font-semibold text-accent mb-2">Game Design</h4>
                  <p className="text-sm text-muted-foreground">Developing engaging gameplay experiences from concept to execution</p>
                </div>
              </div>
            </Card>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}

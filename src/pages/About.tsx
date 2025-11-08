import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import siteData from "@/data/site.json";
// Removed scrapbook background for a clean cinematic gradient
import ParticleBackground from "@/components/ParticleBackground";
import Enhanced3DScene from "@/components/Enhanced3DScene";
import profilePhoto from "@/assets/profile-photo.jpg";
import aboutPhoto from "@/assets/profile-photo.jpg";
import celestialAr from "@/assets/celestial-ar.jpg";
import petverse from "@/assets/petverse.jpg";
import petverseVr from "@/assets/petverse-vr.jpg";
import heroBg from "@/assets/hero-bg.jpg";
import noLightLeft from "@/assets/no-light-left.jpg";
import allmight from "@/assets/allmight-smile.png";
import OwnedFooter from "@/components/OwnedFooter";
import devsImage from "@/assets/about-devs.jpg";
import img1 from "@/assets/img1.jpg";
import img2 from "@/assets/img2.jpg";
import img3 from "@/assets/IMG3.jpeg";
import img4 from "@/assets/img4.jpg";
import img5 from "@/assets/IMG5.jpeg";
import img6 from "@/assets/IMG6.jpeg";
import img7 from "@/assets/IMG7.jpeg";

export default function About() {
  const achievements = [
    {
      id: 1,
      title: "BIONARY (VIT HACKATHON)",
      description: "Among 50 teams, we created PetVerse, a cross-platform AR/VR/PC pet simulation game and won first place with a cash prize of ₹6,000.",
      image: img3,
    },
    {
      id: 2,
      title: "OPEN SPACE (DEVS REC)",
      description: "Secured runner-up position in an inter-college event for our innovative interactive project showcasing creative technical design.",
      image: img2,
    },
    {
      id: 3,
      title: "Enthirathon (National Level Hackathon)",
      description: "Won the Best Innovation Award for PetVerse, a multi-platform AR/VR project merging gameplay and immersive experiences.",
      image: img1,
    },
    {
      id: 4,
      title: "Game Expo",
      description: "Presented No Light Left (Part 1) at the department’s Game Expo, earning huge appreciation for creativity and gameplay design.",
      image: img6,
    },
    {
      id: 5,
      title: "Dezine (Department Symposium)",
      description: "Conducted an immersive video-editing workshop for 70+ participants, appreciated for its engaging and hands-on approach.",
      image: img4,
    },
    {
      id: 6,
      title: "Internal Hackathon (SIH)",
      description: "Won among Top 45 teams with a ₹3,000 prize for Verdant Saga, built for Mobile, PC, and VR platforms.",
      image: img5,
    },
    {
      id: 7,
      title: "Film Club Rec",
      description: "Served as the Video Editor and Post-Production Lead, contributing to multiple creative projects and learning advanced editing and storytelling techniques through the club’s collaborative environment.",
      image: img7,
    },
  ];
  return (
    <div className="relative min-h-screen bg-gradient-to-br from-[#191919] via-[#222212] to-[#0b0902] dark:bg-gradient-to-br dark:from-[#131311] dark:via-[#15140d] dark:to-[#050505] overflow-hidden pt-24">
      <video
        className="absolute inset-0 w-full h-full object-cover z-0 opacity-70 pointer-events-none transition-opacity duration-500"
        src="/BACKABOUT.mp4"
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
        style={{ filter: 'grayscale(1)', background: 'black' }}
      />
      <ParticleBackground lightVersion />
      {/* ScrapbookBackground removed for clarity. */}
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-5xl md:text-7xl font-bold mb-8 mt-1 text-glow">About Me</h1>
          
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="md:col-span-1"
            >
              <Card className="p-4 bg-gradient-to-br from-card to-card/50 backdrop-blur-sm border-2 border-[#FFD700] hover-lift">
                <div className="relative w-full aspect-square overflow-hidden rounded-lg mb-4">
                  <img
                    src={aboutPhoto}
                    alt="About photo"
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      (e.currentTarget as HTMLImageElement).src = profilePhoto;
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/10 to-transparent" />
                </div>
                <h2 className="text-2xl font-bold text-center text-glow">{siteData.name}</h2>
                <p className="text-center mt-2 font-semibold text-[#FFD700] dark:text-[#FFD700] text-foreground/90 dark:text-foreground/90">{siteData.tagline}</p>
              </Card>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              className="md:col-span-2"
            >
              <Card className="p-8 md:p-12 bg-gradient-to-br from-card to-card/50 backdrop-blur-sm border-2 border-[#FFD700] flex flex-col items-center">
                <p className="text-lg md:text-xl leading-relaxed text-foreground mb-4">
                  {siteData.about}
                </p>
              </Card>
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.35 }}
                className="golden-glow animate-float-soft mt-7"
              >
                <span>MILLION PERCENT</span><br />
                <span>EFFORTS EVERYTIME</span>
              </motion.div>
            </motion.div>
          </div>

          <div className="grid md:grid-cols-2 gap-8 items-stretch">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="h-full"
            >
              <Card className="p-8 hover-lift card-glow h-full flex flex-col justify-between border-2 border-[#FFD700]">
                <h3 className="text-2xl font-extrabold mb-4 text-primary uppercase">Education</h3>
                <div className="space-y-2 flex-1">
                  <p className="font-semibold">Rajalakshmi Engineering College</p>
                  <p className="text-muted-foreground">B.E Computer Science and Design</p>
                  <p className="text-sm text-muted-foreground">Chennai, India</p>
                </div>
              </Card>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              className="h-full"
            >
              <Card className="p-8 hover-lift card-glow h-full flex flex-col justify-between border-2 border-[#FFD700]">
                <h3 className="text-2xl font-extrabold mb-4 text-secondary uppercase">Contact Info</h3>
                <div className="space-y-2 flex-1">
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
            <Card className="p-6 hover-lift card-glow border-2 border-[#FFD700]">
              <h3 className="text-2xl font-extrabold mb-4 text-accent uppercase">Specializations</h3>
              <div className="grid md:grid-cols-3 gap-4">
                <div>
                  <h4 className="font-extrabold text-primary mb-2 uppercase">AR/VR Development</h4>
                  <p className="text-sm text-muted-foreground">Creating immersive experiences with Unity and cutting-edge AR/VR technologies</p>
                </div>
                <div>
                  <h4 className="font-extrabold text-secondary mb-2 uppercase">Video Editing</h4>
                  <p className="text-sm text-muted-foreground">Crafting cinematic visuals and motion-driven content with advanced editing techniques</p>
                </div>
                <div>
                  <h4 className="font-extrabold text-accent mb-2 uppercase">Game Design</h4>
                  <p className="text-sm text-muted-foreground">Developing engaging gameplay experiences from concept to execution</p>
                </div>
              </div>
            </Card>
          </motion.div>

          {/* Achievements Marquee */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="mt-12"
          >
            <Card className="p-6 hover-lift card-glow border-2 border-[#FFD700]">
              <h3 className="text-2xl font-extrabold mb-4 text-primary uppercase">Achievements</h3>
              <div className="relative overflow-hidden rounded-lg">
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-background via-transparent to-background opacity-80" />
                <div className="[mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
                  <motion.div
                    className="flex gap-6 will-change-transform"
                    animate={{ x: [0, -1200] }}
                    transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                  >
                    {[...achievements, ...achievements].map((item, idx) => (
                      <div key={`${item.id}-${idx}`} className="min-w-[230px] max-w-[310px] min-h-[375px] px-3">
                        <div className="bg-[#ffd70018] dark:bg-[#191914] border-[2.2px] border-[#FFD700] rounded-2xl overflow-hidden shadow-[0_4px_32px_#FFD70022] flex flex-col items-center justify-start p-5 h-full">
                          {item.image ? (
                            <img src={item.image} alt="Achievement" className="rounded-xl h-36 w-48 object-cover mb-3 shadow-md border-[1.5px] border-[#FFD70080]" />
                          ) : (
                            <div className="rounded-xl h-36 w-48 mb-3 bg-[#222]/40 flex items-center justify-center text-muted-foreground text-xs uppercase border-[1.5px] border-[#FFD70040]">No Image</div>
                          )}
                          <h4 className="card-title text-base text-center mb-2 leading-tight">{item.title}</h4>
                          <p className="card-text text-sm text-center leading-snug">{item.description}</p>
                        </div>
                      </div>
                    ))}
                  </motion.div>
                </div>
              </div>
            </Card>
          </motion.div>
        </motion.div>
      </div>
      <OwnedFooter />
    </div>
  );
}

import { motion, AnimatePresence } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Play } from "lucide-react";
import { useState, useEffect } from "react";
import ParticleBackground from "@/components/ParticleBackground";
import GreenParticleBurst from "@/components/GreenParticleBurst";
import OwnedFooter from "@/components/OwnedFooter";
import img11 from "@/assets/11.png";
import img12 from "@/assets/12.png";
import img13 from "@/assets/13.png";
import img14 from "@/assets/14.png";
import img15 from "@/assets/15.png";
import img16 from "@/assets/16.png";
import img17 from "@/assets/17.jpg";
import img18 from "@/assets/18.jpg";
import img19 from "@/assets/19.jpg";
import img20 from "@/assets/20.jpg";
import img21 from "@/assets/21.png";
import img22 from "@/assets/22.jpg";
import img23 from "@/assets/23.png";
import img24 from "@/assets/24.png";
import img25 from "@/assets/25.png";
import img26 from "@/assets/26.png";
import img27 from "@/assets/27.png";
import img28 from "@/assets/28.png";
import img29 from "@/assets/29.jpg";
import img30 from "@/assets/30.jpg";
import imgAA from "@/assets/AA.png";
import imgRRRR from "@/assets/RRRR.png";

type ProjectItem = {
  title: string;
  description: string;
  categories: string[];
  image?: string;
  imageZoom?: boolean;
  zoomLevel?: number;
  projectLink?: string;
  driveLinks?: {
    AR?: string;
    PC?: string;
    VR?: string;
    Link1?: string;
    Link2?: string;
    Link3?: string;
    Link4?: string;
    Link5?: string;
  };
};

export default function Projects() {
  const [filter, setFilter] = useState("all");
  const [showBurst, setShowBurst] = useState(true);
  const [showProjects, setShowProjects] = useState(false);

  useEffect(() => {
    setShowBurst(true);
  }, []);

  const projects: ProjectItem[] = [
    { title: "Celestial AR - Educational AR Application for Children and All Ages", description: "An interactive AR app built using Unity and Vuforia that teaches kids about celestial bodies using joystick-controlled simulations and a shape-drawing space theme. Includes voice-narrated panels, parental controls, and visual feedback for a fun, safe learning experience.", categories: ["Game Development","AR Development"], image: img30, projectLink: "https://drive.google.com/file/d/1q4V5bW6m_iRJ8c8cgK9gj1BSnlfT5bk_/view?usp=sharing" }, // 1
    { title: "Petverse AR/VR Gamified Platform for Pet Interaction", description: "A Unity-based AR/VR platform that simulates lifelike pet adoption, care, and clinic interactions with 3D cats and dogs. Focuses on gamified, user-friendly design across modules like Pet Adoption Center and Breed Store.", categories: ["Game Development","VR Development","AR Development"], image: img13, driveLinks: { AR: "https://drive.google.com/file/d/1k_K0He7dYO0JEOvYv_pJUp48k4jBb_Cv/view?usp=drive_link", PC: "https://drive.google.com/file/d/1jnFNlK2UY9PCpar6WJ_xJkglVIwHPpJ5/view?usp=drive_link", VR: "https://drive.google.com/file/d/12cAgZhVf3o0AYjJAFHldPkx3c0HinwHg/view?usp=drive_link" } }, // 2
    { title: "No Light Left 1 First-Person Horror Escape Game", description: "A suspense-driven first-person horror game in Unity featuring escape rooms, haunted environments, and time-based progression. Combines puzzle-solving and survival inspired by Granny-style horror games.", categories: ["Game Development"], image: img12 }, // 3
    { title: "Miles – Automated VR Simulation Car (VR)", description: "An immersive, voice-activated VR driving simulation where players control a car entirely through voice commands. The game emphasizes safe driving practices by integrating automated safety measures, offering both a futuristic experience and a practical demonstration of voice-controlled navigation.", categories: ["VR Development"], image: img27, projectLink: "https://drive.google.com/file/d/1taPKzVr7QIYNhBW-nKCe1pQmcem2tyVH/view?usp=sharing" }, // 4
    { title: "Exist Edge – AR Life Simulation App (Mobile- AR)", description: "An AR life simulation app that presents players with two distinct choices—positive and negative actions. Based on their decisions, the app visualizes future outcomes of their life paths while tracking progress in a connected database. It blends interactive storytelling with moral decision-making to show how choices shape personal growth.", categories: ["Game Development","AR Development"], image: img28, projectLink: "https://drive.google.com/file/d/1cGqmb9woHsmDlPq4TzBDeJuzenIS6JPs/view?usp=sharing" }, // 5
    { title: "Verdant Saga – Educational Learning Platform for Schools & Colleges (Mobile, PC, VR)", description: "An educational platform designed for schools and colleges, available on Mobile, PC, and VR. The platform combines interactive learning, immersive simulations, and gamified progress tracking to make education engaging and adaptive for diverse learners.", categories: ["Game Development","VR Development","AR Development"], image: img11, projectLink: "https://drive.google.com/file/d/1-DuzWwWgYf96hwB9A7LsR8qUWUnRRzaB/view?usp=sharing" }, // 6
    { title: "TimeTrace – Time-Based Third-Person Game (In Development) (PC)", description: "A third-person, narrative-driven action game inspired by time manipulation mechanics. Similar in spirit to Quantum Break, it allows players to bend time during combat and exploration, solving challenges that blend real-time strategy with cinematic storytelling.", categories: ["Game Development"], image: imgRRRR }, // 7
    { title: "Mumbai Rain – News Video Edit (2025)", description: "A broadcast-style video edit created using Adobe Premiere Pro, covering the Mumbai heavy rain and cyclone impact. The edit focuses on visual storytelling through precise voice-over sync, balanced audio, and bold news titles. Designed with a realistic newsroom aesthetic, it captures the intensity of the storm and its effects, showcasing skill in news editing, motion composition, and audio-visual pacing.", categories: ["Video Editing"], image: img16, projectLink: "https://drive.google.com/file/d/1uq5WDOIeFkxh1G9E-3E8wv3VoaPjU6oe/view" }, // 8
    { title: "Cinematic Poetry – A Visual Poem Through Film (2024)", description: "A creative visual poem crafted for the official Film Club REC, merging poetry and cinema. Using carefully chosen film scenes, transitions, and rhythm-based pacing, the edit conveys emotional tone and poetic weight through visuals. Demonstrates strength in creative direction, narrative editing, and thematic design.", categories: ["Video Editing"], image: img17, projectLink: "https://drive.google.com/file/d/142JTJKYX-ZHLaj2MLc5hrKanSR6Mshq_/view" }, // 9
    { title: "Django Unchained – Script-to-Screen Edit (2024)", description: "A film analysis-style edit produced for Film Club REC, aligning the Django Unchained screenplay with its corresponding visual scenes. Combines dialogue timing, typography, and cinematic pacing to highlight the connection between writing and visuals. Reflects command over story-based editing, scripting flow, and text animation.", categories: ["Video Editing"], image: img18, projectLink: "https://drive.google.com/file/d/1yNF4x_jG1GRTnhfE2lwvL-K81dFeXf1y/view" }, // 10
    { title: "REC Tech Lounge – Visual Showcase (2023)", description: "A visual short film created for a college video editing workshop, featuring the REC Tech Lounge. Highlights the harmony between nature and technology through smooth transitions, synced tones, and color grading. Marks an early milestone in developing technical editing precision and visual narrative clarity.", categories: ["Video Editing","Graphic Design"], image: img25, projectLink: "https://drive.google.com/file/d/1abfsfi3FvYUFM9XRwPs0jn-gyWtzWgsL/view" }, // 11
    { title: "Sakthi Auto Components – Safety Awareness Project (2025)", description: "A consultancy project leading a team producing 3D animated safety videos for industrial workers. Responsible for post-production including video editing, sound design, and compositing ensuring clarity and engagement. This project applied storytelling and editing skills to a real-world industrial training context, balancing creativity with professionalism.", categories: ["Video Editing","Graphic Design"], image: img26, projectLink: "https://drive.google.com/file/d/1v5RLRVqPmYD9oUIXMs1Ym8qDAFLbaTiT/view?usp=drive_link" }, // 12
    // Graphic Design placeholders (3 more)
    { title: "Graphic Design Showcase 1 – Game Poster Design", description: "Created using Adobe Photoshop and Canva, this poster was designed for our college game expo. We presented our own game along with this promotional poster. The poster received several positive comments from students and faculty. This project reflects my skills in branding, visual composition, and creative storytelling.", categories: ["Graphic Design"], image: img14, projectLink: "https://drive.google.com/file/d/1EnNdwlPp7kXfmYxpy-1HVCxZcyCyfXWX/view" }, // 13
    { title: "Graphic Design Showcase 2 – Match Event Poster", description: "I designed this poster for the Devs Club to showcase match details across the campus. The goal was to maintain clean hierarchy, strong visuals, and an engaging sports theme. It helped the club highlight event updates in a professional manner. This project strengthened my skills in layout design and color theory.", categories: ["Graphic Design"], image: img15, projectLink: "https://drive.google.com/file/d/1T7f5sRlDikY1zmCViuP55KxPVrgMqM5K/view" }, // 14
    { title: "Graphic Design Showcase 3 – 2025 College Calendar", description: "We created our official 2025 college calendar with innovative design concepts. The visuals were built using Figma, focusing on creative layouts and futuristic themes. Each page showcased unique artwork combining visual effects and clean UI thinking. This project enhanced my abilities in design consistency, planning, and creative direction.", categories: ["Graphic Design"], image: imgAA, projectLink: "https://drive.google.com/file/d/1WLX5EZYYIvBRXgNAZvDlmQsamf2tGKid/view" }, // 15
    // Video Editing extra 4
    { title: "Video Edit Reel 1 – Personal Motion Graphics Edit", description: "This is a short motion-graphics-based edit of myself created using After Effects and Premiere Pro. The project focuses on pacing, sound sync, and smooth transitions. I experimented with cinematic framing and color grading to enhance mood. It showcases my foundational skills in video editing and motion design.", categories: ["Video Editing"], image: img19, imageZoom: true, zoomLevel: 1.6, projectLink: "https://drive.google.com/file/d/1UWDbBo-v08IE8GstEhcw23nzKUMNdD-K/view?usp=drive_link" }, // 17
    { title: "Video Edit Reel 2 – Spider-Man 2 Debut Edit", description: "A narrative-style VFX edit created as a tribute to the Spider-Man 2 movie debut. The project emphasizes continuity, rhythm, and dynamic visual effects. I used light streaks, particle effects, and dramatic transitions for impact. It highlights my ability to merge storytelling with motion graphics.", categories: ["Video Editing"], image: img21, imageZoom: true, zoomLevel: 1.8, projectLink: "https://drive.google.com/file/d/1lAB6FMQIOXKE-Y9nHhXGNgNY7dcq_AZ7/view" }, // 18
    { title: "Video Edit Reel 3 – Batman Debut Edit", description: "A dark-themed cinematic edit inspired by the debut of the Batman movie. I focused on mood-driven lighting, sharp cuts, and atmospheric sound design. The edit uses VFX overlays to create a gritty and intense tone. This project demonstrates my skill in creating dramatic, film-style edits.", categories: ["Video Editing"], image: img24, imageZoom: true, zoomLevel: 1.6, projectLink: "https://drive.google.com/file/d/1sWELaqKWEvGX8wjh_Bj52DnsO9Ovmsvh/view" }, // 19
    { title: "Video Edit Reel 4 – Short VFX Concepts Compilation", description: "A collection of short clips, each showcasing unique VFX styles and transitions. I explored glow effects, distortion, camera shakes, and motion-tracked graphics. The goal was to experiment with new visual ideas and creative workflows. This reel highlights my growth in fast-paced, effect-heavy editing.", categories: ["Video Editing"], image: img22, projectLink: "https://drive.google.com/file/d/1Km7UFjmuzF0pTUaRqb7bufFztRm2PSv-/view" }, // 20
    { title: "Video Edit Reel 5 – Creative Visual Experiment Series", description: "This series includes multiple short edits containing different visual themes. Each clip features its own style, such as neon elements, motion trails, or color bursts. I used both After Effects and Premiere Pro to blend effects with storytelling. It represents my continuous practice in mastering cinematic and experimental visuals.", categories: ["Video Editing"], image: img23, imageZoom: true, zoomLevel: 1.8, projectLink: "https://drive.google.com/file/d/16ZNOwbVVObB2-2JkJFjvObt44cOjQcus/view" }, // 21
  ];

  const categoryOrder = ["all","Game Development","VR Development","AR Development","Graphic Design","Video Editing"] as const;
  const categories = categoryOrder;

  const filteredProjects = filter === "all"
    ? projects
    : projects.filter(p => p.categories.includes(filter));

  return (
    <div className="relative min-h-screen overflow-hidden pt-24">
      <video
        className="absolute inset-0 w-full h-full object-cover z-0 opacity-70 pointer-events-none transition-opacity duration-500"
        src="/LUFFYBACK.mp4"
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
        style={{ filter: 'grayscale(1)', background: 'black' }}
      />
      <ParticleBackground lightVersion />
      {showBurst && (
        <GreenParticleBurst
          color="#FFD700"
          power={2.2}
          onComplete={() => {
            setShowBurst(false);
            setShowProjects(true);
          }}
        />
      )}
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-5xl md:text-7xl font-bold mb-4 text-glow">My Projects</h1>
          <p className="text-xl mb-8 font-semibold text-[#FFD700] dark:text-[#FFD700] text-foreground/90 dark:text-foreground/90">
            Explore my portfolio of AR/VR games, video edits, and design work
          </p>

          <div className="flex flex-wrap gap-3 mb-12">
            {categories.map((category) => (
              <Button
                key={category}
                variant={filter === category ? "default" : "outline"}
                onClick={() => setFilter(category as string)}
                className="capitalize rounded-xl px-6 py-2"
              >
                {category}
              </Button>
            ))}
          </div>

          <AnimatePresence>
            {showProjects && (
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 py-8">
                {filteredProjects.map((proj, i) => {
                  // Get the original index in the full projects array
                  const originalIndex = projects.findIndex(p => p.title === proj.title);
                  // Check if this is PetVerse (2nd box, index 1)
                  const isPetVerse = originalIndex === 1;
                  
                  return (
                  <motion.div
                    key={proj.title + i}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.05 * i, ease: "easeOut" }}
                    className="bg-[#ffd70013] dark:bg-[#1a1a17] border-2 border-[#FFD700] rounded-xl shadow-xl flex flex-col items-center hover:scale-[1.042] transition-transform duration-300 py-6 px-6 min-h-[330px]"
                  >
                    {proj.image ? (
                      <div className="w-full mb-4 rounded-md overflow-hidden border-2 border-[#FFD70055] bg-[#222]/20 aspect-video">
                        <img 
                          src={proj.image} 
                          alt={proj.title} 
                          className={`w-full h-full ${proj.imageZoom ? 'object-cover' : 'object-cover'}`}
                          style={proj.imageZoom ? { transform: `scale(${proj.zoomLevel || 1.6})`, transition: 'transform 0.3s ease' } : {}}
                          onLoad={(e) => {
                            if (!proj.imageZoom) {
                              const img = e.currentTarget;
                              const aspectRatio = img.naturalWidth / img.naturalHeight;
                              // If image is landscape/wide (aspect ratio > 1.2), use cover to fill
                              // Otherwise use contain to maintain ratio
                              if (aspectRatio > 1.2) {
                                img.className = "w-full h-full object-cover";
                              } else {
                                img.className = "w-full h-full object-contain";
                              }
                            }
                          }}
                        />
                  </div>
                    ) : (
                      <div className="w-full mb-4 rounded-md bg-[#222]/40 flex items-center justify-center text-muted-foreground text-xs uppercase border-2 border-[#FFD70055] aspect-video">No Image</div>
                    )}
                    <h4 className="card-title text-lg mb-3 text-center"><span className="text-[#FFD700] font-extrabold mr-2">{i + 1}.</span>{proj.title}</h4>
                    <p className="card-text text-sm text-center mb-4">{proj.description}</p>
                    {isPetVerse && proj.driveLinks ? (
                      <div className="mt-auto flex flex-wrap gap-2 justify-center">
                        {proj.driveLinks.AR && (
                          <a href={proj.driveLinks.AR} target="_blank" rel="noopener noreferrer">
                            <Button variant="outline" className="border-[#FFD700] dark:border-[#FFD700] text-[#FFD700] dark:text-[#FFD700] hover:bg-[#FFD70022] dark:hover:bg-[#FFD70022] font-semibold">AR</Button>
                          </a>
                        )}
                        {proj.driveLinks.PC && (
                          <a href={proj.driveLinks.PC} target="_blank" rel="noopener noreferrer">
                            <Button variant="outline" className="border-[#FFD700] dark:border-[#FFD700] text-[#FFD700] dark:text-[#FFD700] hover:bg-[#FFD70022] dark:hover:bg-[#FFD70022] font-semibold">PC</Button>
                          </a>
                        )}
                        {proj.driveLinks.VR && (
                          <a href={proj.driveLinks.VR} target="_blank" rel="noopener noreferrer">
                            <Button variant="outline" className="border-[#FFD700] dark:border-[#FFD700] text-[#FFD700] dark:text-[#FFD700] hover:bg-[#FFD70022] dark:hover:bg-[#FFD70022] font-semibold">VR</Button>
                          </a>
                      )}
                    </div>
                    ) : (
                      <a href={proj.projectLink || "#"} target={proj.projectLink ? "_blank" : undefined} rel={proj.projectLink ? "noopener noreferrer" : undefined} className="mt-auto">
                        <Button variant="outline" className="border-[#FFD700] dark:border-[#FFD700] text-[#FFD700] dark:text-[#FFD700] hover:bg-[#FFD70022] dark:hover:bg-[#FFD70022] font-semibold">View Project</Button>
                      </a>
                    )}
                  </motion.div>
                  );
                })}
              </div>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
      <OwnedFooter />
    </div>
  );
}

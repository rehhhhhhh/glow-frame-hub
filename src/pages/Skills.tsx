import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import siteData from "@/data/site.json";
import { Gamepad2, Video, Palette, Code } from "lucide-react";
import ParticleBackground from "@/components/ParticleBackground";
import Enhanced3DScene from "@/components/Enhanced3DScene";
import sampleCert from "@/assets/no-light-left.jpg";
import C1 from "@/assets/C1.jpeg";
import C2 from "@/assets/C2.jpeg";
import C3 from "@/assets/C3.jpg";
import C4 from "@/assets/C4.jpg";
import C5 from "@/assets/C5.png";
import C6 from "@/assets/C6.jpg";
import C7 from "@/assets/C7.png";
import C8 from "@/assets/C8.png";
import OwnedFooter from "@/components/OwnedFooter";
import TechnologyRing from "@/components/TechnologyRing";

const categoryIcons: Record<string, typeof Gamepad2> = {
  "Game Development": Gamepad2,
  "Immersive Tech": Gamepad2,
  "Post-Production": Video,
  "Visual Effects": Video,
  "3D Art": Palette,
  "Design": Palette,
  "Mobile Editing": Video,
};

const experienceYears: Record<string, string> = {
  "Unity": "3+ years",
  "Unreal Engine": "2+ years",
  "AR/VR Development": "3+ years",
  "C#": "3+ years",
  "Adobe Premiere Pro": "4+ years",
  "After Effects": "3+ years",
  "Blender": "2+ years",
  "Photoshop": "4+ years",
};

export default function Skills() {
  const categories = [...new Set(siteData.skills.map(s => s.category))];
  const skillDescriptions: Record<string, string> = {
    "Unity": "Game engine for real-time 3D apps and games",
    "AR/VR Development": "Building immersive ARCore/Vuforia/Meta SDK apps",
    "Video Editing": "Story-first edits with pacing, sync and grading",
    "Motion Graphics": "Animated titles, overlays and VFX",
    "3D Modeling": "Clean topology for animation-ready assets",
    "Adobe Photoshop": "Retouching, compositing and design",
    "Adobe Premiere Pro": "Professional video editing and post-production",
    "Game Design": "Mechanics, balance and player experience",
  };

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-[#191919] via-[#222212] to-[#0b0902] dark:bg-gradient-to-br dark:from-[#131311] dark:via-[#15140d] dark:to-[#050505] overflow-hidden pt-24">
      <video
        className="absolute inset-0 w-full h-full object-cover z-0 opacity-70 pointer-events-none transition-opacity duration-500"
        src="/BA.mp4"
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
        style={{ filter: 'grayscale(1)', background: 'black' }}
      />
      <ParticleBackground lightVersion />
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-5xl md:text-7xl font-bold mb-4 text-glow">Skills & Expertise</h1>
          <p className="text-xl mb-12 font-semibold text-[#FFD700] dark:text-[#FFD700] text-foreground/90 dark:text-foreground/90">
            My technical proficiencies across various creative domains
          </p>

          {/* Skills, Technologies, and Experience section */}
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <Card className="p-6 hover-lift card-glow border-2 border-[#FFD700]">
              <h2 className="card-title text-2xl mb-4 uppercase font-extrabold">Skills</h2>
              <div className="grid gap-4 mb-6">
                {siteData.skills.map((skill, index) => (
                  <div key={index}>
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-sm font-semibold">{skill.name}</span>
                      <span className="text-xs">{skill.level}%</span>
                    </div>
                    <div className="w-full h-2 rounded bg-[#ffd70020] overflow-hidden border border-[#FFD70055]">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true, amount: 0.4 }}
                        transition={{ duration: 0.9, ease: "easeOut" }}
                        className="h-full bg-[#FFD700]"
                      />
                    </div>
                    <div className="text-xs mt-1 card-text">{skillDescriptions[skill.name] || ""}</div>
                  </div>
                ))}
              </div>
              <motion.div
                className="mt-6 pt-6 sm:pt-8 pb-6 sm:pb-8 border-t-2 border-[#FFD700] bg-[#ffd70013] dark:bg-[#ffd70013] rounded-lg px-4 sm:px-6 py-6 sm:py-8 border-2 border-[#FFD700] min-h-[180px] sm:min-h-[200px] flex items-center justify-center"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                <p className="text-[#FFD700] dark:text-[#FFD700] font-extrabold text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed text-center uppercase tracking-wide w-full break-words">
                  I LEARNED THIS SKILL OUT OF MY OWN INTEREST DURING MY COLLEGE YEARS, AND I HAVE APPLIED IT IN ALL MY PROJECTS, HACKATHONS, AND INTERNSHIPS. THIS EXPERIENCE HAS HELPED ME REACH A POINT WHERE I CAN INDEPENDENTLY HANDLE PROJECTS ACROSS THREE DIFFERENT FIELDS: GAME DEVELOPMENT, VIDEO EDITING, AND AR/VR. IT HAS GIVEN ME THE CONFIDENCE AND PRACTICAL KNOWLEDGE TO EXECUTE MULTI-DOMAIN TASKS EFFECTIVELY.
                </p>
              </motion.div>
            </Card>
            <Card className="p-6 hover-lift card-glow border-2 border-[#FFD700]">
              <h2 className="card-title text-2xl mb-6 uppercase font-extrabold text-center">Technologies I Use</h2>
              <TechnologyRing />
            </Card>
          </div>

          {/* Experience Section */}
          <div className="mb-12">
            <Card className="p-6 hover-lift card-glow border-2 border-[#FFD700]">
              <h2 className="card-title text-2xl mb-6 uppercase font-extrabold">Experience</h2>
              <div className="grid md:grid-cols-1 gap-6">
                {/* UI/UX Designer Intern */}
                <motion.div
                  className="bg-[#ffd70013] rounded-lg p-5 border border-[#FFD70055] hover:border-[#FFD700] transition-colors"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                >
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-3">
                    <h3 className="card-title text-lg uppercase font-extrabold text-[#FFD700]">UI/UX Designer Intern</h3>
                    <span className="text-sm font-bold text-[#FFD700] bg-[#ffd70020] px-3 py-1 rounded-md mt-2 md:mt-0">1 Month</span>
                  </div>
                  <p className="text-sm font-semibold text-[#FFC107] mb-2">CodSoft</p>
                  <p className="card-text text-sm">Completed a 1-month internship focused on user interface design, wireframing, and prototyping using Figma.</p>
                </motion.div>

                {/* 3D Modeler & VideoEditor Intern */}
                <motion.div
                  className="bg-[#ffd70013] rounded-lg p-5 border border-[#FFD70055] hover:border-[#FFD700] transition-colors"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                >
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-3">
                    <h3 className="card-title text-lg uppercase font-extrabold text-[#FFD700]">3D Modeler & VideoEditor Intern</h3>
                    <span className="text-sm font-bold text-[#FFD700] bg-[#ffd70020] px-3 py-1 rounded-md mt-2 md:mt-0">1 Year (Present)</span>
                  </div>
                  <p className="text-sm font-semibold text-[#FFC107] mb-2">Sakthi Autos (Consultancy Project, Remote)</p>
                  <p className="card-text text-sm">Currently working on a funded project involving 3D modeling, rigging, and animation for automotive promotional videos, incorporating multilingual voice-overs, visual effects, and sound design through advanced video editing.</p>
                </motion.div>

                {/* Game Designer Intern */}
                <motion.div
                  className="bg-[#ffd70013] rounded-lg p-5 border border-[#FFD70055] hover:border-[#FFD700] transition-colors"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-3">
                    <h3 className="card-title text-lg uppercase font-extrabold text-[#FFD700]">Game Designer Intern</h3>
                    <span className="text-sm font-bold text-[#FFD700] bg-[#ffd70020] px-3 py-1 rounded-md mt-2 md:mt-0">4+ Months (Current)</span>
                  </div>
                  <p className="text-sm font-semibold text-[#FFC107] mb-2">Jabsz Gaming Studio (Remote)</p>
                  <p className="card-text text-sm">Currently working on a multiplayer mobile game titled Battle Tanks at Jabsz Gaming Studio as a Level Designer Intern. Contributing to map design, gameplay flow, and environment layout. Ongoing internship (4+ months), with the game yet to be released.</p>
                </motion.div>
              </div>
            </Card>
          </div>

          {/* CERTIFICATIONS SECTION - moved to its own page */}
        </motion.div>
      </div>
      <OwnedFooter />
    </div>
  );
}

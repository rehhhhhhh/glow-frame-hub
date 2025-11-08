import { motion } from "framer-motion";
import ParticleBackground from "@/components/ParticleBackground";
import OwnedFooter from "@/components/OwnedFooter";
import C1 from "@/assets/C1.jpeg";
import C2 from "@/assets/C2.jpeg";
import C3 from "@/assets/C3.jpg";
import C4 from "@/assets/C4.jpg";
import C5 from "@/assets/C5.png";
import C6 from "@/assets/C6.jpg";
import C7 from "@/assets/C7.png";
import C8 from "@/assets/C8.png";

export default function Certifications() {
  return (
    <div className="relative min-h-screen overflow-hidden pt-24">
      <video
        className="absolute inset-0 w-full h-full object-cover z-0 opacity-70 pointer-events-none transition-opacity duration-500"
        src="/SKILLSBC.mp4"
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
        style={{ filter: 'grayscale(1)', background: 'black' }}
      />
      <ParticleBackground lightVersion />
      <div className="container mx-auto px-4 relative z-10">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <h1 className="text-5xl md:text-7xl font-bold mb-4 text-glow">Certifications</h1>
          <p className="text-xl mb-12 font-semibold text-[#FFD700] dark:text-[#FFD700] text-foreground/90 dark:text-foreground/90">Selected courses and credentials</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {[
              { image: C1, title: "AR/VR Specialization course (TANSAM)", desc: "Immersive content creation, spatial interaction, and XR integration techniques." },
              { image: C2, title: "Coursera Introduction to Game Design & VFX", desc: "Game mechanics, storytelling, and visual effects design." },
              { image: C3, title: "NPTEL Usability Engineering", desc: "UX principles and evaluation techniques for interactive systems." },
              { image: C4, title: "Augmented Reality Marketing – LinkedIn", desc: "Leveraging AR for interactive brand engagement and marketing." },
              { image: C5, title: "Oracle Fundamentals of Java & DBMS", desc: "Core Java programming and database management essentials." },
              { image: C6, title: "Unity Essentials Pathway – Unity", desc: "Unity workflows, lighting, and scripting." },
              { image: C7, title: "Product Management Job Simulation – Electronic Arts (EA)", desc: "Production pipelines, project planning, and publishing workflows." },
              { image: C8, title: "Epic Games: Introduction to Game Design – Coursera", desc: "Design principles, mechanics, and world-building using Unreal/Epic tools." },
            ].map((cert, i) => (
              <div key={i} className="bg-[#ffd70013] dark:bg-[#1a1a17] rounded-xl overflow-hidden border-2 border-[#FFD700] shadow-xl flex flex-col items-center hover:scale-[1.045] transition-transform duration-300 py-6 px-5 min-h-[420px]">
                <img src={cert.image} alt={cert.title} className="h-44 w-full object-contain rounded-md shadow-md border border-[#FFD70075] mb-4" />
                <h3 className="card-title text-lg mb-2 text-center">{cert.title}</h3>
                <p className="card-text text-sm text-center">{cert.desc}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
      <OwnedFooter />
    </div>
  );
}

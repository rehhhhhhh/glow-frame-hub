import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import siteData from "@/data/site.json";
import { Gamepad2, Video, Palette, Code } from "lucide-react";
import ScrapbookBackground from "@/components/ScrapbookBackground";
import ParticleBackground from "@/components/ParticleBackground";
import Enhanced3DScene from "@/components/Enhanced3DScene";

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
  "Alight Motion": "2+ years",
  "Blender": "2+ years",
  "Photoshop": "4+ years",
};

export default function Skills() {
  const categories = [...new Set(siteData.skills.map(s => s.category))];

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
          <h1 className="text-5xl md:text-7xl font-bold mb-4 text-glow">Skills & Expertise</h1>
          <p className="text-xl text-muted-foreground mb-12">
            My technical proficiencies across various creative domains
          </p>

          <div className="space-y-12">
            {categories.map((category, catIndex) => {
              const categorySkills = siteData.skills.filter(s => s.category === category);
              const Icon = categoryIcons[category] || Code;

              return (
                <motion.div
                  key={category}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: catIndex * 0.1 }}
                >
                  <Card className="p-8 hover-lift card-glow">
                    <div className="flex items-center gap-3 mb-6">
                      <Icon className="w-8 h-8 text-primary" />
                      <h2 className="text-3xl font-bold">{category}</h2>
                    </div>

                    <div className="grid gap-6">
                      {categorySkills.map((skill, index) => (
                        <motion.div
                          key={skill.name}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: (catIndex * 0.1) + (index * 0.05) }}
                        >
                          <div className="flex items-center justify-between mb-2">
                            <div className="flex items-center gap-2">
                              <span className="font-semibold text-lg">{skill.name}</span>
                              {experienceYears[skill.name] && (
                                <span className="text-xs px-2 py-1 bg-primary/20 text-primary rounded-full">
                                  {experienceYears[skill.name]}
                                </span>
                              )}
                            </div>
                            <span className="text-sm text-muted-foreground">{skill.level}%</span>
                          </div>
                          <motion.div
                            initial={{ width: 0 }}
                            animate={{ width: "100%" }}
                            transition={{ delay: (catIndex * 0.1) + (index * 0.05) + 0.2, duration: 1 }}
                          >
                            <Progress value={skill.level} className="h-2" />
                          </motion.div>
                        </motion.div>
                      ))}
                    </div>
                  </Card>
                </motion.div>
              );
            })}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="mt-12"
          >
            <Card className="p-8 hover-lift card-glow bg-gradient-to-br from-primary/10 to-secondary/10">
              <h2 className="text-3xl font-bold mb-4">Tools & Technologies</h2>
              <div className="flex flex-wrap gap-3">
                {["Unity", "Unreal Engine", "Adobe Premiere Pro", "After Effects", "Alight Motion", "Photoshop", "Blender", "C#", "AR Foundation", "VR SDK"].map((tool) => (
                  <span
                    key={tool}
                    className="px-4 py-2 bg-card rounded-lg text-sm font-medium hover:bg-primary/20 transition-colors"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </Card>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}

import { Github, Linkedin, Instagram, Youtube, Twitter } from "lucide-react";
import { motion } from "framer-motion";
import siteData from "@/data/site.json";

const socialIcons = {
  github: Github,
  linkedin: Linkedin,
  instagram: Instagram,
  youtube: Youtube,
  twitter: Twitter,
};

export default function SocialToolbar() {
  return (
    <div className="fixed right-8 top-1/2 -translate-y-1/2 z-40 hidden lg:flex flex-col gap-4">
      {Object.entries(siteData.social).map(([platform, url], index) => {
        const Icon = socialIcons[platform as keyof typeof socialIcons];
        return (
          <motion.a
            key={platform}
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 bg-card/50 backdrop-blur-sm rounded-lg hover:bg-primary/20 transition-all duration-300 hover:scale-110 hover:shadow-glow group"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.1 }}
            whileHover={{ x: -5 }}
          >
            <Icon className="w-5 h-5 text-foreground group-hover:text-primary transition-colors" />
          </motion.a>
        );
      })}
    </div>
  );
}

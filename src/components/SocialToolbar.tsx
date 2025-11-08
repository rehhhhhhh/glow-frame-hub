import { Github, Linkedin } from "lucide-react";
import { motion } from "framer-motion";

export default function SocialToolbar() {
  return (
    <div className="fixed right-8 top-1/2 -translate-y-1/2 z-40 hidden lg:flex flex-col items-center gap-6">
      <motion.a
        href="https://github.com/rahuls-portfolio"
        target="_blank"
        rel="noopener noreferrer"
        className="p-3 bg-card/50 backdrop-blur-sm rounded-full hover:bg-primary/20 transition-all duration-300 hover:scale-110 hover:shadow-glow group"
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0 }}
        whileHover={{ x: -8 }}
      >
        <Github className="w-6 h-6 text-foreground group-hover:text-primary transition-colors" />
      </motion.a>
      <motion.a
        href="https://www.linkedin.com/in/rahuls/"
        target="_blank"
        rel="noopener noreferrer"
        className="p-3 bg-card/50 backdrop-blur-sm rounded-full hover:bg-primary/20 transition-all duration-300 hover:scale-110 hover:shadow-glow group"
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.15 }}
        whileHover={{ x: -8 }}
      >
        <Linkedin className="w-6 h-6 text-foreground group-hover:text-primary transition-colors" />
      </motion.a>
    </div>
  );
}
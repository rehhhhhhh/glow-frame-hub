import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import Hero from "./pages/Hero";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Skills from "./pages/Skills";
import Certifications from "./pages/Certifications";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import Navigation from "./components/Navigation";
import SocialToolbar from "./components/SocialToolbar";
import AICompanion from "./components/AICompanion";
import CursorToggle from "./components/CursorToggle";
import ThemeToggle from "./components/ThemeToggle";

const queryClient = new QueryClient();

const pageVariants = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -20 }
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <div className="min-h-screen text-foreground relative">
          {/* Animated golden orbs background (behind all content) */}
          <motion.div
            aria-hidden
            className="pointer-events-none fixed inset-0 -z-10 overflow-hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            {/* Soft radial orbs with subtle motion */}
            <motion.div
              className="absolute w-[60vw] h-[60vw] -top-32 -left-32 rounded-full"
              style={{
                background: "radial-gradient(circle, rgba(255,215,0,0.25) 0%, rgba(255,183,0,0) 60%)",
                filter: "blur(40px)",
              }}
              animate={{
                x: [0, 20, -10, 0],
                y: [0, -10, 15, 0],
                scale: [1, 1.05, 0.98, 1],
              }}
              transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
            />
            <motion.div
              className="absolute w-[50vw] h-[50vw] -bottom-24 -right-24 rounded-full"
              style={{
                background: "radial-gradient(circle, rgba(255,183,0,0.22) 0%, rgba(255,183,0,0) 60%)",
                filter: "blur(36px)",
              }}
              animate={{
                x: [0, -15, 10, 0],
                y: [0, 10, -12, 0],
                scale: [1, 0.97, 1.04, 1],
              }}
              transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
            />
            <motion.div
              className="absolute w-[35vw] h-[35vw] top-1/2 left-1/3 -translate-x-1/2 -translate-y-1/2 rounded-full"
              style={{
                background: "radial-gradient(circle, rgba(255,215,0,0.18) 0%, rgba(255,215,0,0) 60%)",
                filter: "blur(30px)",
              }}
              animate={{
                rotate: [0, 10, -8, 0],
                scale: [1, 1.02, 0.99, 1],
              }}
              transition={{ duration: 26, repeat: Infinity, ease: "easeInOut" }}
            />
          </motion.div>
          <Navigation />
          <SocialToolbar />
          <AICompanion />
          <ThemeToggle />
          <div className="fixed bottom-8 right-8 z-50">
            <CursorToggle />
          </div>
          
          <AnimatePresence mode="wait">
            <Routes>
              <Route path="/" element={
                <motion.div
                  variants={pageVariants}
                  initial="initial"
                  animate="animate"
                  exit="exit"
                  transition={{ duration: 0.4 }}
                >
                  <Hero />
                </motion.div>
              } />
              <Route path="/about" element={
                <motion.div
                  variants={pageVariants}
                  initial="initial"
                  animate="animate"
                  exit="exit"
                  transition={{ duration: 0.4 }}
                >
                  <About />
                </motion.div>
              } />
              <Route path="/projects" element={
                <motion.div
                  variants={pageVariants}
                  initial="initial"
                  animate="animate"
                  exit="exit"
                  transition={{ duration: 0.4 }}
                >
                  <Projects />
                </motion.div>
              } />
              <Route path="/skills" element={
                <motion.div
                  variants={pageVariants}
                  initial="initial"
                  animate="animate"
                  exit="exit"
                  transition={{ duration: 0.4 }}
                >
                  <Skills />
                </motion.div>
              } />
              <Route path="/certifications" element={
                <motion.div
                  variants={pageVariants}
                  initial="initial"
                  animate="animate"
                  exit="exit"
                  transition={{ duration: 0.4 }}
                >
                  <Certifications />
                </motion.div>
              } />
              <Route path="/contact" element={
                <motion.div
                  variants={pageVariants}
                  initial="initial"
                  animate="animate"
                  exit="exit"
                  transition={{ duration: 0.4 }}
                >
                  <Contact />
                </motion.div>
              } />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </AnimatePresence>
        </div>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;

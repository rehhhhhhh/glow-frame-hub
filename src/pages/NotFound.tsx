import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import ScrapbookBackground from "@/components/ScrapbookBackground";
import ParticleBackground from "@/components/ParticleBackground";
import Enhanced3DScene from "@/components/Enhanced3DScene";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-[#161616] via-[#191911] to-[#090909] overflow-hidden">
      <ParticleBackground lightVersion />
      {/* Background layers for visual consistency */}
      <ScrapbookBackground />
      <Enhanced3DScene />
      <div className="text-center">
        <h1 className="mb-4 text-4xl font-bold">404</h1>
        <p className="mb-4 text-xl text-muted-foreground">Oops! Page not found</p>
        <a href="/" className="text-primary underline hover:opacity-80">
          Return to Home
        </a>
      </div>
    </div>
  );
};

export default NotFound;

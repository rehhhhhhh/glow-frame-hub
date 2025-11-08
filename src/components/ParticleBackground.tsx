import { useEffect, useMemo } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";

export default function ParticleBackground({ lightVersion = false }: { lightVersion?: boolean }) {
  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    });
  }, []);

  const options = useMemo(
    () => (lightVersion
      ? {
        background: { color: { value: "transparent" } },
        fpsLimit: 120,
        interactivity: { events: {}, modes: {} },
        particles: {
          color: { value: ["#FFF", "#FFF8DC", "#FFD700", "#FFFDE4", "#FFFBEA"] },
          links: { enable: false }, // No lines
          move: {
            enable: true,
            direction: "bottom", // Mostly move down
            speed: 0.4, // Gently
            straight: false, // Some wandering
            random: true,
            outModes: {
              default: "out", // re-enter from top when off screen
            },
            angle: {
              offset: 0, // down
              value: 15, // allow a bit of x-drift
            }
          },
          number: { value: 200, density: { enable: true, area: 800 } },
          opacity: {
            value: { min: 0.65, max: 1 },
            animation: {
              enable: true,
              speed: 1.2, // faster twinkle
              minimumValue: 0.27,
              sync: false,
            },
          },
          shape: { type: ["circle"] },
          size: {
            value: { min: 0.9, max: 2.3 },
            animation: {
              enable: true,
              speed: 1,
              minimumValue: 0.6,
              sync: false,
            },
          },
          twinkle: {
            particles: {
              enable: true,
              frequency: 0.38, // more twinkle
              color: "#FFD700",
              opacity: 1,
            }
          }
        },
        detectRetina: true,
      }
      : {
        // original colorful networking mode
        background: { color: { value: "transparent" } },
        fpsLimit: 120,
        interactivity: {
          events: {
            onClick: { enable: true, mode: "push" },
            onHover: { enable: true, mode: "repulse" },
          },
          modes: {
            push: { quantity: 6 },
            repulse: { distance: 120, duration: 0.4 },
          },
        },
        particles: {
          color: { value: ["#c084fc", "#06b6d4", "#f472b6", "#a78bfa"] },
          links: {
            color: "#c084fc",
            distance: 180,
            enable: true,
            opacity: 0.4,
            width: 1.5,
          },
          move: {
            direction: "none" as const,
            enable: true,
            outModes: { default: "bounce" as const },
            random: true,
            speed: 1.5,
            straight: false,
          },
          number: {
            density: { enable: true },
            value: 100,
          },
          opacity: {
            value: { min: 0.3, max: 0.7 },
            animation: {
              enable: true,
              speed: 1,
              minimumValue: 0.3,
            },
          },
          shape: { type: ["circle", "square"] },
          size: {
            value: { min: 2, max: 5 },
            animation: { enable: true, speed: 2, minimumValue: 1 },
          },
        },
        detectRetina: true,
      }
    ),
    [lightVersion]
  );

  return (
    <Particles
      id="tsparticles"
      options={options}
      className="absolute inset-0 z-0"
    />
  );
}

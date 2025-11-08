import { motion } from "framer-motion";
import { useState } from "react";

interface TechnologyCategory {
  name: string;
  color: string;
  technologies: string[];
  angle: number; // Starting angle in degrees
  size: number; // Segment size in degrees
}

const technologyCategories: TechnologyCategory[] = [
  {
    name: "Game Development",
    color: "#FF0000", // Red
    technologies: ["Unity", "Unreal Engine"],
    angle: -90, // Top
    size: 72,
  },
  {
    name: "Video Production",
    color: "#FF69B4", // Pink
    technologies: ["Adobe Premiere Pro", "After Effects", "Alight Motion", "CapCut"],
    angle: -18, // Top-right
    size: 72,
  },
  {
    name: "3D Modeling & Animation",
    color: "#FFA500", // Orange
    technologies: ["Blender", "Maya"],
    angle: 54, // Bottom-right
    size: 72,
  },
  {
    name: "AR/VR Development",
    color: "#0000FF", // Blue
    technologies: ["C#", "ARCore", "Vuforia", "Meta SDK", "Oculus"],
    angle: 126, // Bottom
    size: 72,
  },
  {
    name: "Graphic Design",
    color: "#00CED1", // Turquoise/Cyan
    technologies: ["Canva", "Photoshop"],
    angle: 198, // Left
    size: 72,
  }
];

export default function TechnologyRing() {
  const [selectedCategory, setSelectedCategory] = useState<number | null>(null);

  const radius = 120;
  const innerRadius = 60;
  const centerX = 0;
  const centerY = 0;

  const createPath = (category: TechnologyCategory) => {
    const startAngle = (category.angle * Math.PI) / 180;
    const endAngle = ((category.angle + category.size) * Math.PI) / 180;
    
    const outerX1 = centerX + radius * Math.cos(startAngle);
    const outerY1 = centerY + radius * Math.sin(startAngle);
    const outerX2 = centerX + radius * Math.cos(endAngle);
    const outerY2 = centerY + radius * Math.sin(endAngle);
    
    const innerX1 = centerX + innerRadius * Math.cos(startAngle);
    const innerY1 = centerY + innerRadius * Math.sin(startAngle);
    const innerX2 = centerX + innerRadius * Math.cos(endAngle);
    const innerY2 = centerY + innerRadius * Math.sin(endAngle);
    
    const largeArc = category.size > 180 ? 1 : 0;
    
    return `M ${outerX1} ${outerY1} A ${radius} ${radius} 0 ${largeArc} 1 ${outerX2} ${outerY2} L ${innerX2} ${innerY2} A ${innerRadius} ${innerRadius} 0 ${largeArc} 0 ${innerX1} ${innerY1} Z`;
  };

  const handleSegmentClick = (index: number, e: React.MouseEvent) => {
    e.stopPropagation();
    setSelectedCategory(selectedCategory === index ? null : index);
  };

  return (
    <div className="relative w-full flex flex-col items-center justify-center py-4 sm:py-8">
      <div className="relative w-full max-w-2xl aspect-square min-h-[300px] sm:min-h-[400px]">
        <svg
          viewBox="-180 -180 360 360"
          className="w-full h-full"
          style={{ filter: "drop-shadow(0 0 20px rgba(255, 215, 0, 0.3))" }}
        >
          {/* Outer ring border */}
          <circle
            cx={centerX}
            cy={centerY}
            r={radius}
            fill="none"
            stroke="rgba(255, 215, 0, 0.3)"
            strokeWidth="2"
          />
          
          {/* Inner ring border */}
          <circle
            cx={centerX}
            cy={centerY}
            r={innerRadius}
            fill="none"
            stroke="rgba(255, 215, 0, 0.3)"
            strokeWidth="2"
          />
          
          {/* Segments - filled by default */}
          {technologyCategories.map((category, index) => {
            const isSelected = selectedCategory === index;
            
            return (
              <g 
                key={category.name}
                onClick={(e) => handleSegmentClick(index, e)}
                onTouchStart={(e) => handleSegmentClick(index, e as any)}
                style={{ cursor: "pointer", touchAction: "manipulation" }}
              >
                {/* Filled segment - always visible, no animation */}
                <path
                  d={createPath(category)}
                  fill={category.color}
                  fillOpacity={isSelected ? 0.9 : 0.7}
                  stroke={isSelected ? "#FFD700" : "rgba(255, 255, 255, 0.3)"}
                  strokeWidth={isSelected ? "3" : "1"}
                  style={{
                    filter: isSelected 
                      ? `drop-shadow(0 0 15px ${category.color})` 
                      : "none",
                    transition: "all 0.3s ease"
                  }}
                />
                
                {/* White circle indicator */}
                <circle
                  cx={centerX + ((radius + innerRadius) / 2) * Math.cos(((category.angle + category.size / 2) * Math.PI) / 180)}
                  cy={centerY + ((radius + innerRadius) / 2) * Math.sin(((category.angle + category.size / 2) * Math.PI) / 180)}
                  r="5"
                  fill="white"
                  opacity={isSelected ? 1 : 0.6}
                  style={{
                    transition: "opacity 0.3s ease"
                  }}
                />
              </g>
            );
          })}
          
          {/* Center circle with "TECH STACKS" text */}
          <circle
            cx={centerX}
            cy={centerY}
            r={innerRadius - 5}
            fill="rgba(20, 20, 30, 0.95)"
            stroke="#FFD700"
            strokeWidth="2"
            style={{ pointerEvents: "none" }}
          />
          <text
            x={centerX}
            y={centerY}
            fill="#FFD700"
            fontSize="16"
            fontWeight="bold"
            textAnchor="middle"
            dominantBaseline="middle"
            style={{
              filter: "drop-shadow(0 0 10px rgba(255, 215, 0, 0.8))",
              pointerEvents: "none"
            }}
          >
            TECH STACKS
          </text>
        </svg>
      </div>

      {/* Technology list for selected category */}
      <motion.div
        className="mt-4 sm:mt-6 w-full max-w-2xl px-4"
        initial={{ opacity: 0, y: 20 }}
        animate={{ 
          opacity: selectedCategory !== null ? 1 : 0,
          y: selectedCategory !== null ? 0 : 20
        }}
        transition={{ duration: 0.3 }}
      >
        {selectedCategory !== null && (
          <div className="bg-[#ffd70013] dark:bg-[#ffd70013] rounded-lg p-4 sm:p-6 border-2 border-[#FFD700] backdrop-blur-sm">
            <h3 className="card-title text-base sm:text-lg md:text-xl mb-4 uppercase font-extrabold text-center text-[#FFD700] dark:text-[#FFD700]">
              {technologyCategories[selectedCategory].name}
            </h3>
            <div className="flex flex-wrap gap-2 sm:gap-3 justify-center">
              {technologyCategories[selectedCategory].technologies.map((tech, idx) => (
                <motion.span
                  key={tech}
                  className="px-3 sm:px-4 py-2 rounded-md bg-card dark:bg-card border-2 border-[#FFD70066] text-xs sm:text-sm font-semibold text-center whitespace-nowrap hover:bg-[#ffd70020] active:bg-[#ffd70030] transition-colors touch-manipulation"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, delay: idx * 0.1 }}
                  whileHover={{ 
                    scale: 1.1,
                    borderColor: "#FFD700",
                    boxShadow: "0 0 15px rgba(255, 215, 0, 0.5)"
                  }}
                  whileTap={{ scale: 0.95 }}
                  style={{
                    color: technologyCategories[selectedCategory].color,
                    minHeight: "44px",
                    display: "inline-flex",
                    alignItems: "center",
                    justifyContent: "center"
                  }}
                >
                  {tech}
                </motion.span>
              ))}
            </div>
          </div>
        )}
      </motion.div>

      {/* Instructions */}
      {selectedCategory === null && (
        <motion.p
          className="mt-4 sm:mt-6 text-xs sm:text-sm text-center px-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          style={{
            color: "hsl(var(--muted-foreground))"
          }}
        >
          Click on any segment to view technologies
        </motion.p>
      )}
    </div>
  );
}

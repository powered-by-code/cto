"use client";
import data from "@/data.json";
import React from "react";

const PartnerLogo: React.FC<{
  partner: {
    name: string;
    industry: string;
    logo: string;
    url: string;
    width: number;
    height: number;
  };
}> = ({ partner }) => {
  return (
    <div className="flex flex-col items-center p-4">
      <a
        href={partner.url}
        target="_blank"
        rel="noopener noreferrer"
        className="hover:opacity-80 transition-opacity text-center group"
      >
        <div className="h-32 w-full flex items-center justify-center mb-2">
          {/* Use actual logo instead of placeholder */}
          {partner.logo ? (
            <img
              src={partner.logo}
              alt={partner.name}
              className="object-contain p-2 w-full h-full grayscale hover:grayscale-0 transition-all duration-300"
              width={partner.width}
              height={partner.height}
            />
          ) : (
            <span className="text-xs">{partner.name.charAt(0)}</span>
          )}
        </div>
        <div className="text-sm font-medium">{partner.name}</div>
        <div className="text-xs opacity-70">{partner.industry}</div>
      </a>
    </div>
  );
};

const cases = [
  {
    name: "Solicy",
    industry: "Fintech",
    logo: "/logos/solicy.png",
    url: "https://solicy.net/?utm_source=partnerwebsite&utm_medium=PBLConsultancy",
    width: 200,
    height: 70,
  },
  {
    name: "reArmenia",
    industry: "Startup",
    logo: "/logos/rearmenia.png",
    url: "https://rearmenia.am",
    width: 200,
    height: 70,
  },
  {
    name: "3n",
    industry: "Startup",
    logo: "/logos/3nstartups.png",
    url: "https://3nstartups.com/",
    width: 200,
    height: 70,
  },
  {
    name: "Avromic",
    industry: "B2G",
    logo: "/logos/avromic.png",
    url: "https://www.avromic.com/",
    width: 200,
    height: 70,
  },
  {
    name: "Metaport",
    industry: "Startup",
    logo: "/logos/metaport.png",
    url: "https://metaport.ai/",
    width: 200,
    height: 70,
  },
  {
    name: "wellbeingbuddy",
    industry: "Startup",
    logo: "/logos/wellbeing.png",
    url: "https://www.wellbeingbuddy.com.au/",
    width: 200,
    height: 70,
  },
];

const Partners: React.FC = () => {
  const [isPaused, setIsPaused] = React.useState(false);
  const sliderRef = React.useRef<HTMLDivElement>(null);
  
  // References to track animation state
  const startTimeRef = React.useRef<number | null>(null);
  const pauseStartTimeRef = React.useRef<number | null>(null);
  const totalPausedTimeRef = React.useRef<number>(0);
  const currentPositionRef = React.useRef<number>(0);
  const previousTimestampRef = React.useRef<number | null>(null);
  
  // Create enough duplicates to ensure smooth looping
  const extendedPartners = [...cases, ...cases, ...cases];
  
  // Function for continuous animation
  React.useEffect(() => {
    const animationDuration = 30000; // 30 seconds for a complete cycle
    let animationFrame: number;
    
    const animate = (timestamp: number) => {
      if (previousTimestampRef.current === null) {
        previousTimestampRef.current = timestamp;
      }
      
      // Initialize start time if not set
      if (startTimeRef.current === null) {
        startTimeRef.current = timestamp;
      }
      
      // Handle pause/resume logic
      if (isPaused) {
        if (pauseStartTimeRef.current === null) {
          pauseStartTimeRef.current = timestamp;
        }
      } else {
        // On resume, add to total paused time
        if (pauseStartTimeRef.current !== null) {
          totalPausedTimeRef.current += timestamp - pauseStartTimeRef.current;
          pauseStartTimeRef.current = null;
        }
        
        // Calculate effective elapsed time (accounting for pauses)
        const effectiveElapsed = timestamp - startTimeRef.current - totalPausedTimeRef.current;
        
        // Calculate position based on effective time - with smoother movement
        const totalItems = cases.length;
        const progress = (effectiveElapsed % animationDuration) / animationDuration;
        
        // Calculate current position smoothly
        const targetPosition = progress * totalItems;
        
        // Apply the transform - use the exact calculated position for smoothness
        if (sliderRef.current) {
          sliderRef.current.style.transform = `translateX(-${targetPosition * 25}%)`;
        }
        
        // Update current position for when we pause again
        currentPositionRef.current = targetPosition;
      }
      
      previousTimestampRef.current = timestamp;
      
      // Request next frame
      animationFrame = requestAnimationFrame(animate);
    };
    
    // Start the animation
    animationFrame = requestAnimationFrame(animate);
    
    // Cleanup
    return () => {
      cancelAnimationFrame(animationFrame);
    };
  }, [isPaused]);
  
  const handleMouseEnter = () => {
    setIsPaused(true);
  };
  
  const handleMouseLeave = () => {
    setIsPaused(false);
  };
  
  return (
    <section className="py-12">
      <div className="mb-12">
        <h2 className="text-3xl font-bold mb-4">Trusted by Industry Leaders</h2>
        <p className="text-base-content/80 mb-8">
          We're proud to partner with leading companies in the tech industry
          globally.{" "}
        </p>
        <div 
          className="relative overflow-hidden"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <div 
            ref={sliderRef}
            className="flex"
            style={{ willChange: "transform" }}
          >
            {extendedPartners.map((partner, index) => (
              <div key={index} className="w-1/4 flex-shrink-0">
                <PartnerLogo partner={partner} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Partners;

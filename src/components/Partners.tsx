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
        className="hover:opacity-80 transition-opacity text-center"
      >
        <div className="h-32 w-full flex items-center justify-center mb-2">
          {/* Use actual logo instead of placeholder */}
          {partner.logo ? (
            <img
              src={partner.logo}
              alt={partner.name}
              className="object-contain p-2 w-full h-full"
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
  const [currentIndex, setCurrentIndex] = React.useState(0);
  const [isTransitioning, setIsTransitioning] = React.useState(true);
  const sliderRef = React.useRef<HTMLDivElement>(null);
  
  // Create an array that duplicates the first 4 items at the end
  const extendedPartners = [...cases, ...cases.slice(0, 4)];
  
  // Function to rotate through partners - continuously forward
  React.useEffect(() => {
    const timer = setInterval(() => {
      if (currentIndex >= cases.length) {
        // We've reached the cloned items, reset without animation
        setIsTransitioning(false);
        setCurrentIndex(0);
        
        // Force browser reflow before re-enabling transitions
        if (sliderRef.current) void sliderRef.current.offsetHeight;
        
        // Re-enable transitions after the reset
        setTimeout(() => {
          setIsTransitioning(true);
        }, 10);
      } else {
        // Normal forward movement
        setCurrentIndex(prevIndex => prevIndex + 1);
      }
    }, 4000);
    
    return () => clearInterval(timer);
  }, [currentIndex, cases.length]);
  
  return (
    <section className="py-12">
      <div className="mb-12">
        <h2 className="text-3xl font-bold mb-4">Trusted by Industry Leaders</h2>
        <p className="text-base-content/80 mb-8">
          We're proud to partner with leading companies in the tech industry
          globally.{" "}
        </p>
        <div className="relative overflow-hidden">
          <div 
            ref={sliderRef}
            className={`flex ${isTransitioning ? 'transition-transform duration-700 ease-in-out' : 'transition-none'}`}
            style={{ transform: `translateX(-${currentIndex * 25}%)` }}
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

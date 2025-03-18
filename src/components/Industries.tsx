import Link from 'next/link';
import { Building2, Music, Hotel, Volume2 } from 'lucide-react';

interface IndustryTagProps {
  name: string;
  icon: React.ReactNode;
}

const IndustryTag: React.FC<IndustryTagProps> = ({ name, icon }) => {
  return (
    <Link href={`/industries/${name.toLowerCase()}`} className="btn w-full">
      {icon}
      <span>{name}</span>
    </Link>
  );
};

const Industries: React.FC = () => {
  const industries = [
    { name: "FinTech", icon: <Building2 className="w-5 h-5" /> },
    { name: "Soundcloud", icon: <Volume2 className="w-5 h-5" /> },
    { name: "Hospitality", icon: <Hotel className="w-5 h-5" /> },
    { name: "Spotify", icon: <Music className="w-5 h-5" /> },
  ];

  return (
    <section className="py-12">
      <div className="flex flex-col md:flex-row gap-8">
        <div className="w-full md:w-1/2 bg-base-300 rounded-lg md:h-64"></div>
        <div className="w-full md:w-1/2">
          <h2 className="text-3xl font-bold mb-4">Industries</h2>
          <p className="mb-6">
            A cat named Mittens has made national headlines after she managed to find her way 
            back home, despite being lost for over a week.
          </p>
          <div className="flex flex-row flex-wrap">
            {industries.map((industry, index) => (
              <div className="w-full md:w-1/2 p-2">
                <IndustryTag key={index} name={industry.name} icon={industry.icon} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Industries; 
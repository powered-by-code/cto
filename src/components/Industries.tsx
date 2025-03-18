import Link from 'next/link';

interface IndustryTagProps {
  name: string;
  icon: string;
}

const IndustryTag: React.FC<IndustryTagProps> = ({ name, icon }) => {
  return (
    <Link href={`/industries/${name.toLowerCase()}`} className="btn bg-base-300 text-white hover:bg-primary hover:text-white gap-2">
      <span>{icon}</span>
      <span>{name}</span>
    </Link>
  );
};

const Industries: React.FC = () => {
  const industries = [
    { name: "FinTech", icon: "🏦" },
    { name: "Soundcloud", icon: "🔊" },
    { name: "Hospitality", icon: "🏨" },
    { name: "Spotify", icon: "🎵" },
  ];

  return (
    <section className="py-12">
      <div className="flex flex-col md:flex-row gap-8">
        <div className="w-full md:w-1/3 bg-base-300 rounded-lg h-48"></div>
        <div className="w-full md:w-2/3">
          <h2 className="text-3xl font-bold mb-4 text-white">Industries</h2>
          <p className="mb-6 text-gray-300">
            A cat named Mittens has made national headlines after she managed to find her way 
            back home, despite being lost for over a week.
          </p>
          <div className="flex flex-wrap gap-2">
            {industries.map((industry, index) => (
              <IndustryTag key={index} name={industry.name} icon={industry.icon} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Industries; 
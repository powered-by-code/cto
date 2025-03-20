import Link from 'next/link';
import { Building2, Music, Hotel, Volume2 } from 'lucide-react';
import data from '@/data.json';

interface IndustryTagProps {
  name: string;
  icon: React.ReactNode;
  id: string;
}

const IndustryTag: React.FC<IndustryTagProps> = ({ name, icon, id }) => {
  return (
    <Link href={`/industries/${id}`} className="btn w-full">
      {icon}
      <span>{name}</span>
    </Link>
  );
};

const Industries: React.FC = () => {
  // Map icon to each industry
  const getIcon = (id: string) => {
    switch (id) {
      case 'fintech':
        return <Building2 className="w-5 h-5" />;
      case 'health-tech':
        return <Volume2 className="w-5 h-5" />;
      case 'e-commerce':
        return <Hotel className="w-5 h-5" />;
      case 'saas':
        return <Music className="w-5 h-5" />;
      default:
        return <Building2 className="w-5 h-5" />;
    }
  };

  // Get only the first 4 industries from data.json
  const industries = data.industries.slice(0, 4).map(industry => ({
    id: industry.id,
    name: industry.title,
    icon: getIcon(industry.id)
  }));

  return (
    <section className="py-12">
      <div className="flex flex-col md:flex-row gap-8">
        <div className="w-full md:w-1/2 bg-base-300 rounded-lg md:h-64"></div>
        <div className="w-full md:w-1/2">
          <h2 className="text-3xl font-bold mb-4">Industries</h2>
          <p className="mb-6">
            We serve a wide range of industries, bringing specialized expertise to the unique 
            technical challenges faced by different sectors.
          </p>
          <div className="flex flex-row flex-wrap">
            {industries.map((industry, index) => (
              <div key={index} className="w-full md:w-1/2 p-2">
                <IndustryTag name={industry.name} icon={industry.icon} id={industry.id} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Industries; 
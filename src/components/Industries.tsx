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
    <Link 
      href={`/industries/${id}`} 
      className="btn w-full bg-base-200 hover:bg-primary/10 text-base-content hover:text-primary border border-base-300 hover:border-primary/30 transition-all shadow-sm hover:shadow group"
    >
      <div className="mr-2 text-primary/70 group-hover:text-primary transition-colors">
      {icon}
      </div>
      <span className="font-medium">{name}</span>
    </Link>
  );
};

// Simple IndustryCard component
interface IndustryCardProps {
  title: string;
  id: string;
  description: string;
  image?: string;
  compact?: boolean;
}

const IndustryCard = ({ title, id, description, image, compact = false }: IndustryCardProps) => {
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

  return (
    <Link href={`/industries/${id}`} className="block h-full">
      <div className="card bg-base-100 h-full hover:shadow-md transition-all">
        <div className="card-body">
          <div className="flex items-center gap-2 mb-2">
            <div className="p-2 rounded-full bg-secondary/20">
              {getIcon(id)}
            </div>
            <h3 className="card-title">{title}</h3>
          </div>
          {!compact && <div className="divider my-1"></div>}
          {!compact && <p>{description}</p>}
          {compact && <p className="line-clamp-2 text-sm">{description}</p>}
        </div>
      </div>
    </Link>
  );
};

const Industries = () => {
  // Get industries from data.json and show only the first 4
  const industries = data.industries.slice(0, 4);

  return (
    <section className="py-16 relative">
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute inset-0 bg-grid-pattern opacity-20"></div>
        
        {/* Analytics Dashboard */}
        <svg className="absolute top-0 right-0 w-80 h-80 text-secondary/20" viewBox="0 0 300 300" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="dashboard-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="rgba(var(--s), 0.3)" />
              <stop offset="100%" stopColor="rgba(var(--p), 0.2)" />
            </linearGradient>
          </defs>
        
          {/* Dashboard frame */}
          <rect x="20" y="20" width="260" height="180" rx="8" fill="rgba(var(--n), 0.15)" stroke="url(#dashboard-gradient)" strokeWidth="2" />
          
          {/* Top header bar */}
          <rect x="20" y="20" width="260" height="25" rx="8 8 0 0" fill="url(#dashboard-gradient)" />
          
          {/* Control buttons */}
          <circle cx="35" cy="32.5" r="5" fill="rgba(255, 255, 255, 0.5)" />
          <circle cx="55" cy="32.5" r="5" fill="rgba(255, 255, 255, 0.5)" />
          <circle cx="75" cy="32.5" r="5" fill="rgba(255, 255, 255, 0.5)" />
          
          {/* Data visualization elements */}
          
          {/* Left sidebar */}
          <rect x="30" y="55" width="60" height="135" rx="4" fill="rgba(var(--n), 0.1)" stroke="rgba(var(--s), 0.2)" strokeWidth="1" />
          
          {/* Sidebar menu items */}
          <rect x="35" y="65" width="50" height="8" rx="2" fill="rgba(var(--s), 0.3)" />
          <rect x="35" y="85" width="50" height="8" rx="2" fill="rgba(var(--s), 0.2)" />
          <rect x="35" y="105" width="50" height="8" rx="2" fill="rgba(var(--s), 0.2)" />
          <rect x="35" y="125" width="50" height="8" rx="2" fill="rgba(var(--s), 0.2)" />
          <rect x="35" y="145" width="50" height="8" rx="2" fill="rgba(var(--s), 0.2)" />
          <rect x="35" y="165" width="50" height="8" rx="2" fill="rgba(var(--s), 0.2)" />
          
          {/* Main content area with charts */}
          
          {/* Top stats cards */}
          <rect x="100" y="55" width="50" height="40" rx="4" fill="rgba(var(--p), 0.2)" stroke="rgba(var(--p), 0.3)" strokeWidth="1" />
          <rect x="160" y="55" width="50" height="40" rx="4" fill="rgba(var(--s), 0.2)" stroke="rgba(var(--s), 0.3)" strokeWidth="1" />
          <rect x="220" y="55" width="50" height="40" rx="4" fill="rgba(var(--a), 0.2)" stroke="rgba(var(--a), 0.3)" strokeWidth="1" />
          
          {/* Bar chart */}
          <rect x="100" y="105" width="170" height="80" rx="4" fill="rgba(var(--n), 0.1)" stroke="rgba(var(--s), 0.2)" strokeWidth="1" />
          
          <rect x="110" y="165" width="15" height="10" rx="1" fill="rgba(var(--p), 0.6)" className="animate-bar-rise" style={{animationDelay: '0.1s'}} />
          <rect x="135" y="150" width="15" height="25" rx="1" fill="rgba(var(--p), 0.6)" className="animate-bar-rise" style={{animationDelay: '0.2s'}} />
          <rect x="160" y="130" width="15" height="45" rx="1" fill="rgba(var(--p), 0.7)" className="animate-bar-rise" style={{animationDelay: '0.3s'}} />
          <rect x="185" y="125" width="15" height="50" rx="1" fill="rgba(var(--s), 0.7)" className="animate-bar-rise" style={{animationDelay: '0.4s'}} />
          <rect x="210" y="115" width="15" height="60" rx="1" fill="rgba(var(--s), 0.8)" className="animate-bar-rise" style={{animationDelay: '0.5s'}} />
          <rect x="235" y="120" width="15" height="55" rx="1" fill="rgba(var(--s), 0.7)" className="animate-bar-rise" style={{animationDelay: '0.6s'}} />
          
          {/* Chart baseline */}
          <line x1="100" y1="175" x2="270" y2="175" stroke="rgba(var(--s), 0.4)" strokeWidth="1" />
          
          {/* Data labels */}
          <rect x="110" y="180" width="15" height="3" rx="1" fill="rgba(var(--n), 0.4)" />
          <rect x="135" y="180" width="15" height="3" rx="1" fill="rgba(var(--n), 0.4)" />
          <rect x="160" y="180" width="15" height="3" rx="1" fill="rgba(var(--n), 0.4)" />
          <rect x="185" y="180" width="15" height="3" rx="1" fill="rgba(var(--n), 0.4)" />
          <rect x="210" y="180" width="15" height="3" rx="1" fill="rgba(var(--n), 0.4)" />
          <rect x="235" y="180" width="15" height="3" rx="1" fill="rgba(var(--n), 0.4)" />
          
          {/* Animation elements - data flow paths */}
          <path 
            d="M100,210 C140,230 180,190 230,220" 
            stroke="rgba(var(--p), 0.4)" 
            strokeWidth="2" 
            fill="none" 
            strokeDasharray="4,4"
            className="animate-data-flow" 
          />
          
          <path 
            d="M120,240 C160,260 200,220 250,250" 
            stroke="rgba(var(--s), 0.4)" 
            strokeWidth="2" 
            fill="none" 
            strokeDasharray="4,4"
            className="animate-data-flow" 
            style={{animationDelay: '1s'}}
          />
        </svg>
        
       
      </div>

      <div className="relative z-10">
        <div className="flex flex-col items-start mb-10">
          <span className="px-4 py-1.5 text-sm font-medium rounded-full bg-secondary/20 text-secondary mb-3 animate-pulse shadow-sm">
            Industries We Serve
          </span>
          <h2 className="text-4xl font-bold mb-4 animate-fade-in-up">Our Expertise</h2>
          <div className="w-20 h-1 bg-secondary/30 rounded"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 stagger-animate">
            {industries.map((industry, index) => (
            <div key={industry.id} className="animate-fade-in-up shadow-md hover:shadow-lg transition-all" style={{animationDelay: `${0.1 + index * 0.1}s`}}>
              <IndustryCard 
                title={industry.title} 
                id={industry.id} 
                description={industry.description}
                image={industry.image}
                compact={true}
              />
              </div>
            ))}
          </div>
        
        <div className="text-center mt-12">
          <Link 
            href="/industries" 
            className="btn btn-secondary btn-lg shadow-md hover:shadow-lg transition-all hover:-translate-y-1 text-base-100"
          >
            VIEW ALL INDUSTRIES
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Industries; 
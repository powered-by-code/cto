import Link from 'next/link';
import data from '@/data.json';
import ServiceCard from './ServiceCard';

const Services = () => {
  // Get services from data.json and show only the first 4
  const services = data.services.filter((service) => !service.hidden).slice(0, 4);

  return (
    <section className="py-16 relative">
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute inset-0 bg-circuit-pattern opacity-20"></div>
      </div>

      <div className="relative z-10">
        <div className="flex flex-col items-start mb-10">
          <span className="px-4 py-1.5 text-sm font-medium rounded-full bg-primary/20 text-primary mb-3 animate-pulse shadow-sm">
            Our Services
          </span>
          <h2 className="text-4xl font-bold mb-4 animate-fade-in-up">How We Can Help</h2>
          <div className="w-20 h-1 bg-primary/30 rounded"></div>
        </div>
        {/* default center */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 stagger-animate">
          {services.map((service, index) => (
            <div key={service.id} className="animate-fade-in-up shadow-md hover:shadow-lg transition-all" style={{animationDelay: `${0.1 + index * 0.1}s`}}>
              <ServiceCard 
                title={service.title} 
                id={service.id} 
                features={service.features?.slice(0, 3)}
                image={service.image}
                compact={true}
              />
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          {/* TODO: uncomment this when we have a services page */}
          {/* <Link 
            href="/services" 
            className="btn btn-primary btn-lg shadow-md hover:shadow-lg transition-all hover:-translate-y-1 text-base-100"
          >
            VIEW ALL SERVICES
          </Link> */}
        </div>
      </div>
    </section>
  );
};

export default Services; 
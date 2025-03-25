import Link from 'next/link';
import data from '@/data.json';
import ServiceCard from './ServiceCard';

const Services = () => {
  // Get services from data.json and show only the first 4
  const services = data.services.slice(0, 4);

  return (
    <section className="py-12">
      <h2 className="text-3xl font-bold mb-8">How We Can Help</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {services.map((service) => (
          <ServiceCard 
            key={service.id} 
            title={service.title} 
            id={service.id} 
            description={service.description}
            image={service.image}
            compact={true}
          />
        ))}
      </div>
      <div className="text-center mt-8">
        <Link href="/services" className="btn btn-primary">
          VIEW ALL SERVICES
        </Link>
      </div>
    </section>
  );
};

export default Services; 
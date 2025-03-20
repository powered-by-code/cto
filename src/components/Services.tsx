import Link from 'next/link';
import Image from 'next/image';
import data from '@/data.json';

// Updated interface with more properties
interface ServiceCardProps {
  title: string;
  id: string;
  description?: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ title, id, description }) => {
  return (
    <Link href={`/services/${id}`} className="card bg-base-200 hover:shadow-xl transition-shadow">
      <div className="card-body p-4">
        <div className="text-xs opacity-70">SERVICES</div>
        {/* TODO: make bolder */}
        <h3 className="font-medium text-lg font-weight-bold">{title}</h3>
        {description && <p className="mt-2 text-sm">{description}</p>}
        <div className="mt-2">→</div>
      </div>
    </Link>
  );
};

const Services: React.FC = () => {
  // Get services from data.json and show only the first 4
  const services = data.services.map(service => ({
    id: service.id,
    title: service.title,
    description: service.description.split('.')[0] // Use only the first sentence of the description
  })).slice(0, 4);

  return (
    <section className="py-12">
      <h2 className="text-3xl font-bold mb-8">How We Can Help</h2>
      {/* make this always 5 */}
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {services.map((service, index) => (
          <ServiceCard 
            key={index} 
            title={service.title} 
            id={service.id} 
            description={service.description} 
          />
        ))}
      </div>
      <div className="text-center mt-8">
        <Link href="/services" className="link link-primary">
          VIEW ALL
        </Link>
      </div>
    </section>
  );
};

export default Services; 
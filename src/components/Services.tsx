import Link from 'next/link';
import Image from 'next/image';

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
        <h3 className="font-medium">{title}</h3>
        {description && <p className="mt-2 text-sm">{description}</p>}
        <div className="mt-2">→</div>
      </div>
    </Link>
  );
};

const Services: React.FC = () => {
  const services = [
    {
      id: "fractional-cto",
      title: "Fractional CTO Services",
      description: "Strategic tech leadership without the full-time cost"
    },
    {
      id: "tech-team-building",
      title: "Tech Team Building",
      description: "Build high-performing technical teams that deliver results"
    },
    {
      id: "pivot-support",
      title: "Technical Pivot Support",
      description: "Navigate technical changes during business pivots"
    },
    {
      id: "tech-cost-optimization",
      title: "Tech Cost Optimization",
      description: "Optimize your technology expenses without compromising growth"
    },
    {
      id: "technical-due-diligence",
      title: "Technical Due Diligence",
      description: "Understand technical risks and opportunities before you invest"
    }
  ];

  return (
    <section className="py-12">
      <h2 className="text-3xl font-bold mb-8">How We Can Help</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4">
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
import Link from 'next/link';

interface ServiceCardProps {
  title: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ title }) => {
  return (
    <div className="card bg-base-200 hover:shadow-xl transition-shadow">
      <div className="card-body p-4">
        <div className="text-xs opacity-70">SERVICES</div>
        <h3 className="font-medium">{title}</h3>
        <Link href="/services" className="mt-2 text-primary">
          <span className="text-lg">→</span>
        </Link>
      </div>
    </div>
  );
};

const Services: React.FC = () => {
  const services = [
    "Climate change and global affairs",
    "Climate change and global affairs",
    "Climate change and global affairs",
    "Climate change and global affairs",
    "Climate change and global affairs"
  ];

  return (
    <section className="py-12">
      <h2 className="text-3xl font-bold mb-8">Services</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4">
        {services.map((service, index) => (
          <ServiceCard key={index} title={service} />
        ))}
      </div>
      <div className="text-center mt-8">
        <Link href="/services" className="btn btn-ghost">VIEW ALL</Link>
      </div>
    </section>
  );
};

export default Services; 
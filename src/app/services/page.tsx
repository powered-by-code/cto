import PageLayout from '@/components/PageLayout';
import Link from 'next/link';
// import Image from 'next/image';
import data from '@/data.json';
import ServiceCard from '@/components/ServiceCard';

// Get services data from data.json
const serviceDetails = data.services;

export default function ServicesPage() {
  return (
    <PageLayout>
      <div className="py-12">
        <h1 className="text-4xl font-bold mb-6">Fractional CTO Services</h1>
        <p className="text-lg mb-12 max-w-3xl">
          Expert tech leadership when you need it, without the full-time cost. We help startup founders, non-technical executives, and growing companies navigate technical challenges, build exceptional teams, and optimize technology investments.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {serviceDetails.map(service => (
            <ServiceCard
              key={service.id}
              id={service.id}
              title={service.title}
              description={service.description}
              features={service.features}
              image={service.image}
            />
          ))}
        </div>
        
        <div className="mt-16 p-8 bg-base-200 rounded-lg">
          <h2 className="text-2xl font-bold mb-4">Not Sure Which Service You Need?</h2>
          <p className="mb-6">Take our quick assessment to find out which of our services best fits your current business challenges.</p>
          <Link href="/assessment" className="btn btn-primary">Take the Assessment</Link>
        </div>
      </div>
    </PageLayout>
  );
} 
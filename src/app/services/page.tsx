import PageLayout from '@/components/PageLayout';
import Link from 'next/link';
// import Image from 'next/image';
import data from '@/data.json';
import ServiceCard from '@/components/ServiceCard';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'AI & Tech Services | Cubeunity',
  description: 'Explore our services: AI strategy, web platform development, legacy modernization, technical IT services, Company Brain, and tech consultancy for SMBs and startups.',
  keywords: 'AI consultancy, web platform development, legacy modernization, technical IT services, company brain, tech consultancy',
  openGraph: {
    title: 'AI & Tech Services | Cubeunity',
    description: 'Explore our services: AI strategy, web platform development, legacy modernization, technical IT services, Company Brain, and tech consultancy for SMBs and startups.',
    type: 'website',
  },
};

// Get services data from data.json
const serviceDetails = data.services;

export default function ServicesPage() {
  return (
    <PageLayout>
      <div className="py-12">
        <h1 className="text-4xl font-bold mb-6">Our Services</h1>
        <p className="text-lg mb-12 max-w-3xl">
          From AI strategy to web platform development and legacy modernization — we give SMBs and startups the technical expertise they need, in plain language, without the full-time tech team cost.
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
      </div>
    </PageLayout>
  );
} 
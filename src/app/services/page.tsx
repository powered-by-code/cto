import PageLayout from '@/components/PageLayout';
import Link from 'next/link';
import Image from 'next/image';
import data from '@/data.json';

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
          {serviceDetails.map((service) => (
            <Link key={service.id} href={`/services/${service.id}`} className="card bg-base-200 shadow-lg hover:shadow-xl transition-shadow">
              <div className="card-body">
                <h2 className="card-title">{service.title}</h2>
                <p className="my-4">{service.description}</p>
                <div>
                  <ul className="space-y-2">
                    {service.features.slice(0, 3).map((feature, index) => (
                      <li key={index} className="flex items-start">
                        <svg className="w-5 h-5 text-primary mt-0.5 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                        </svg>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="card-actions justify-end mt-4">
                  <Link href={`/services/${service.id}`} className="btn btn-sm btn-primary">
                    Learn More
                  </Link>
                </div>
              </div>
            </Link>
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
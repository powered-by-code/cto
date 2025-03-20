import PageLayout from '@/components/PageLayout';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import data from '@/data.json';

// Get service details from data.json
const serviceDetails = data.services;

// Get meeting link from data.json
const meetingLink = data.meetingLink;

export default function ServicePage({ params }: { params: { id: string } }) {
  const service = serviceDetails.find((s) => s.id === params.id);
  
  if (!service) {
    notFound();
  }

  return (
    <PageLayout>
      <div className="py-12">
        <Link href="/services" className="text-primary mb-4 inline-flex items-center">
          <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path>
          </svg>
          Back to All Services
        </Link>
        
        <h1 className="text-4xl font-bold mt-4 mb-6">{service.title}</h1>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <div className="prose max-w-none">
              <p className="text-lg mb-8">
                {service.description}
              </p>
              
              <p className="mb-8">
                {service.longDescription}
              </p>
              
              <h2 className="text-2xl font-bold mt-8 mb-4">What's Included</h2>
              <div className="card bg-base-200 shadow-lg mb-8">
                <div className="card-body">
                  <ul className="space-y-3">
                    {service.features.map((feature, index) => (
                      <li key={index} className="flex items-start">
                        <svg className="w-5 h-5 text-primary mt-0.5 mr-3 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                        </svg>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              
              <h2 className="text-2xl font-bold mt-8 mb-4">Benefits</h2>
              <div className="card bg-base-200 shadow-lg">
                <div className="card-body">
                  <ul className="space-y-3">
                    {service.benefits.map((benefit, index) => (
                      <li key={index} className="flex items-start">
                        <svg className="w-5 h-5 text-primary mt-0.5 mr-3 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                        </svg>
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
          
          <div className="lg:col-span-1">
            <div className="card bg-base-200 shadow-lg">
              <div className="card-body">
                <h3 className="card-title">Ready to Get Started?</h3>
                <p className="my-4">
                  Schedule a free consultation to discuss how our {service.title} can help your business.
                </p>
                <Link href={meetingLink} className="btn btn-primary w-full" target="_blank" rel="noopener noreferrer">
                  Book a Free Consultation
                </Link>
              </div>
            </div>
            
            <div className="mt-8">
              <h3 className="text-xl font-bold mb-4">Success Stories</h3>
              <div className="space-y-4">
                {service.caseStudies.map((caseStudy, index) => (
                  <div key={index} className="card bg-base-200 shadow-sm">
                    <div className="card-body p-4">
                      <h4 className="font-bold">{caseStudy.title}</h4>
                      <p>{caseStudy.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-8">
              <div className="card bg-base-200 shadow-lg">
                <div className="card-body">
                  <h3 className="card-title">Not Sure If This Is Right For You?</h3>
                  <p className="my-4">
                    Take our quick assessment to find out which service best fits your needs.
                  </p>
                  <Link href="/assessment" className="btn btn-outline w-full">
                    Take the Assessment
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </PageLayout>
  );
} 
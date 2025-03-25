import PageLayout from '@/components/PageLayout';
import Link from 'next/link';
import Image from 'next/image';
import data from '@/data.json';
import MeetingButton from '@/components/MeetingButton';

// Get industries data from data.json
const industriesData = data.industries;

export default function IndustriesPage() {
  return (
    <PageLayout>
      <div className="py-12">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold mb-4">Industries We Serve</h1>
          <p className="text-xl max-w-3xl mx-auto">
            We provide specialized technical leadership across various industries, bringing domain expertise to each unique challenge.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {industriesData.map((industry, index) => (
            <Link 
              href={`/industries/${industry.id}`} 
              key={index}
              className="card bg-base-200 shadow-lg hover:shadow-xl transition-shadow overflow-hidden"
            >
              <figure className="relative h-48">
                {industry.image && (
                  <Image 
                    src={industry.image}
                    alt={industry.title}
                    fill
                    className="object-cover"
                  />
                )}
              </figure>
              <div className="card-body">
                <h2 className="card-title">{industry.title}</h2>
                <p className="line-clamp-3 mb-4">{industry.description}</p>
                <div className="card-actions justify-end">
                  <span className="text-primary">Learn more →</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
        
        <div className="card bg-base-200 shadow-lg p-8 text-center mt-16">
          <h2 className="text-2xl font-bold mb-4">Don't See Your Industry?</h2>
          <p className="max-w-2xl mx-auto mb-6">
            Our technical expertise extends beyond these industries. Schedule a consultation to discuss your specific needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <MeetingButton text="Schedule a Free Consultation" />
            <Link href="/services" className="btn btn-outline">
              Explore Our Services
            </Link>
          </div>
        </div>
      </div>
    </PageLayout>
  );
} 
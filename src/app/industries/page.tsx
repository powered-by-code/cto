import PageLayout from '@/components/PageLayout';
import Industries from '@/components/Industries';
import Link from 'next/link';
import Image from 'next/image';
import data from '@/data.json';

// Get industry details from data.json
const industryDetails = data.industries;

export default function IndustriesPage() {
  return (
    <PageLayout>
      <div className="py-12">
        <h1 className="text-4xl font-bold mb-6">Industries We Serve</h1>
        <p className="text-lg mb-12 max-w-3xl">
          Our fractional CTO services are tailored to address the unique technical challenges faced by different industries. 
          We bring specialized expertise to help you navigate industry-specific complexities and build technology that drives 
          your competitive advantage.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {industryDetails.map((industry) => (
            <Link key={industry.id} href={`/industries/${industry.id}`} className="card bg-base-200 shadow-lg hover:shadow-xl transition-shadow">
              <div className="card-body">
                <div className="h-40 bg-gray-300 mb-4 flex items-center justify-center relative">
                  {industry.image ? (
                    <Image
                      src={industry.image}
                      alt={industry.title}
                      fill
                      className="object-cover rounded-t-lg"
                    />
                  ) : (
                    <span className="text-gray-500">Industry Image</span>
                  )}
                </div>
                <h2 className="card-title">{industry.title}</h2>
                <p className="my-4 line-clamp-3">{industry.description}</p>
                <div>
                  <h3 className="font-semibold mb-2">Core Services:</h3>
                  <ul className="space-y-1">
                    {industry.services.slice(0, 3).map((service, index) => (
                      <li key={index} className="flex items-start">
                        <svg className="w-5 h-5 text-primary mt-0.5 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                        </svg>
                        {service}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="card-actions justify-end mt-4">
                  <span className="text-primary">Read more →</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
        
        <div className="mt-16 p-8 bg-base-200 rounded-lg">
          <h2 className="text-2xl font-bold mb-4">Not Sure If We Have Experience In Your Industry?</h2>
          <p className="mb-6">Even if your industry isn't listed here, our technical expertise often applies across sectors. Contact us to discuss your specific needs.</p>
          <Link href="/contact" className="btn btn-primary">Get in Touch</Link>
        </div>
      </div>
    </PageLayout>
  );
} 
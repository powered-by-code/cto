import PageLayout from '@/components/PageLayout';
import Link from 'next/link';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import data from '@/data.json';
import MeetingButton from '@/components/MeetingButton';
import { Metadata } from 'next';

// Get industry details from data.json
const industryDetails = data.industries;

export async function generateStaticParams() {
  return industryDetails.map((ind) => ({
    id: ind.id,
  }));
}

type Params = Promise<{ id: string }>;

export async function generateMetadata({
  params,
}: {
  params: Params;
}): Promise<Metadata> {
  const { id } = await params;
  const industry = industryDetails.find((ind) => ind.id === id);

  if (!industry) {
    return {
      title: "Industry Not Found | Cubeunity",
    };
  }

  return {
    title: `${industry.title} | Fractional CTO Services | Cubeunity`,
    description: industry.description,
    keywords: `${industry.title.toLowerCase()}, fractional CTO services, technical leadership, ${industry.services.slice(0, 3).join(', ').toLowerCase()}`,
    openGraph: {
      title: `${industry.title} | Fractional CTO Services | Cubeunity`,
      description: industry.description,
      type: 'website',
      images: industry.image ? [{ url: industry.image }] : undefined,
    },
  };
}

export default async function IndustryPage({ params }: { params: Params }) {
  const { id } = await params;
  const industry = industryDetails.find((ind) => ind.id === id);
  
  if (!industry) {
    notFound();
  }
  
  return (
    <PageLayout showCTA={false}>
      <div className="py-12">
        <Link href="/industries" className="text-primary mb-4 inline-flex items-center">
          <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path>
          </svg>
          Back to All Industries
        </Link>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-6">
          <div className="lg:col-span-2">
            <h1 className="text-4xl font-bold mb-6">{industry.title}</h1>
            
            <div className="aspect-video bg-base-300 rounded-lg relative mb-8">
              {industry.image && (
                <Image 
                  src={industry.image}
                  alt={industry.title}
                  fill
                  className="object-cover rounded-lg"
                />
              )}
            </div>
            
            <div className="prose max-w-none">
              <p className="text-lg mb-6">
                {industry.description}
              </p>
              
              <p className="mb-8">
                {/* TODO: Uncomment this when we have a long description */}
                {/* {industry.longDescription} */}
              </p>
              
              <h2 className="text-2xl font-bold mt-8 mb-4">Our Technical Expertise</h2>
              <div className="card bg-base-200 shadow-lg mb-8">
                <div className="card-body">
                  <ul className="space-y-3">
                    {industry.services.map((service, index) => (
                      <li key={index} className="flex items-start">
                        <svg className="w-5 h-5 text-primary mt-0.5 mr-3 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                        </svg>
                        {service}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              
              <h2 className="text-2xl font-bold mt-8 mb-4">Common Technical Challenges</h2>
              <div className="card bg-base-200 shadow-lg mb-8">
                <div className="card-body">
                  <ul className="space-y-3">
                    {industry.challenges.map((challenge, index) => (
                      <li key={index} className="flex items-start">
                        <svg className="w-5 h-5 text-primary mt-0.5 mr-3 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                        </svg>
                        {challenge}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              
              <h2 className="text-2xl font-bold mt-8 mb-4">Success Stories</h2>
              <div className="space-y-4">
                {industry.caseStudies.map((caseStudy, index) => (
                  <div key={index} className="card bg-base-200 shadow-lg">
                    <div className="card-body">
                      <h3 className="font-bold text-lg">{caseStudy.title}</h3>
                      <p>{caseStudy.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          <div className="lg:col-span-1">
            <div className="card bg-base-200 shadow-lg sticky top-4">
              <div className="card-body">
                <h3 className="card-title">Need Technical Leadership in {industry.title}?</h3>
                <p className="my-4">
                  Our fractional CTO services help {industry.title.toLowerCase()} companies navigate technical challenges and build scalable systems.
                </p>
                <MeetingButton text="Schedule a Consultation" className="w-full" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </PageLayout>
  );
} 
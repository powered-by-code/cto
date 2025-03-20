import PageLayout from '@/components/PageLayout';
import Link from 'next/link';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import CaseStudyQuiz from '@/components/CaseStudyQuiz';
import data from '@/data.json';

// Get case study details from data.json
const caseStudyDetails = data.caseStudies;

export default function CaseStudyPage({ params }: { params: { id: string } }) {
  const caseStudy = caseStudyDetails.find((cs) => cs.id === params.id);
  
  if (!caseStudy) {
    notFound();
  }

  return (
    <PageLayout>
      <div className="py-12">
        <Link href="/case-studies" className="text-primary mb-4 inline-flex items-center">
          <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path>
          </svg>
          Back to All Case Studies
        </Link>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-6">
          <div className="lg:col-span-2">
            <div className="badge badge-primary mb-2">{caseStudy.industry}</div>
            <h1 className="text-4xl font-bold mb-6">{caseStudy.title}</h1>
            
            <div className="aspect-video bg-base-300 rounded-lg relative mb-8">
              {caseStudy.image && (
                <Image 
                  src={caseStudy.image}
                  alt={caseStudy.title}
                  fill
                  className="object-cover rounded-lg"
                />
              )}
            </div>
            
            <div className="prose max-w-none">
              <h2 className="text-2xl font-bold mt-8 mb-4">The Challenge</h2>
              <p>{caseStudy.challenge}</p>
              
              <h2 className="text-2xl font-bold mt-8 mb-4">Our Solution</h2>
              <p className="whitespace-pre-line">{caseStudy.solution}</p>
              
              <h2 className="text-2xl font-bold mt-8 mb-4">Results</h2>
              <div className="card bg-base-200 shadow-lg mb-8">
                <div className="card-body">
                  <ul className="space-y-3">
                    {caseStudy.results.map((result, index) => (
                      <li key={index} className="flex items-start">
                        <svg className="w-5 h-5 text-primary mt-0.5 mr-3 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                        </svg>
                        {result}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
            
            {caseStudy.testimonial && (
              <div className="mt-8 card bg-base-200 shadow-lg">
                <div className="card-body">
                  <div className="flex items-start">
                    <svg className="w-12 h-12 text-primary opacity-30" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                    </svg>
                    <div className="ml-4">
                      <p className="italic mb-4">{caseStudy.testimonial.quote}</p>
                      <p className="font-bold">{caseStudy.testimonial.author}</p>
                      <p className="text-sm">{caseStudy.testimonial.company}</p>
                    </div>
                  </div>
                </div>
              </div>
            )}

            <div className="mt-8 card bg-base-200 shadow-lg">
              <div className="card-body">
                <h3 className="card-title text-lg">Facing Similar Challenges?</h3>
                <p className="my-4">
                  Our fractional CTO services can help you navigate technical challenges like these and accelerate your business growth.
                </p>
                <div className="flex flex-col gap-3">
                  <Link href="/services" className="btn btn-outline w-full">
                    Explore Our Services
                  </Link>
                  <Link href="/assessment" className="btn btn-outline w-full">
                    Take the CTO Assessment
                  </Link>
                </div>
              </div>
            </div>
          </div>
          
          <div className="lg:col-span-1">
            <div className="card bg-base-200 shadow-lg sticky top-4">
              <div className="card-body">
                <h3 className="card-title">Need Similar Results?</h3>
                <p className="my-4">
                  Our fractional CTO services help businesses solve complex technical challenges and achieve impressive results.
                </p>
                <Link href="/contact" className="btn btn-primary w-full">
                  Book a Consultation
                </Link>
                
                <div className="divider">OR</div>
                
                <Link href="/services" className="btn btn-outline w-full">
                  Explore Services
                </Link>
              </div>
            </div>
            
            <div className="mt-8">
              <h3 className="text-xl font-bold mb-4">Related Case Studies</h3>
              <div className="space-y-4">
                {caseStudyDetails
                  .filter(cs => cs.id !== caseStudy.id && cs.industry === caseStudy.industry)
                  .slice(0, 2)
                  .map((relatedCase, index) => (
                    <Link key={index} href={`/case-studies/${relatedCase.id}`} className="card bg-base-200 shadow-sm hover:shadow-md transition-shadow">
                      <div className="card-body p-4">
                        <h4 className="font-bold">{relatedCase.title}</h4>
                        <p className="text-sm line-clamp-2">{relatedCase.description}</p>
                      </div>
                    </Link>
                  ))}
              </div>
            </div>
            
            <div className="mt-8">
              <div className="card bg-base-200 shadow-lg">
                <div className="card-body">
                  <h3 className="card-title">Related Services</h3>
                  <ul className="mt-4 space-y-3">
                    {data.services.slice(0, 3).map((service, index) => (
                      <li key={index}>
                        <Link href={`/services/${service.id}`} className="flex items-center hover:text-primary transition-colors">
                          <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                          </svg>
                          {service.title}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Case Study Quiz Section */}
        <CaseStudyQuiz caseStudyId={params.id} />
      </div>
    </PageLayout>
  );
} 
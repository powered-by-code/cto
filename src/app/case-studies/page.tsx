import PageLayout from '@/components/PageLayout';
import CaseStudies from '@/components/CaseStudies';
import Link from 'next/link';
import Image from 'next/image';
import data from '@/data.json';

// Get case study details from data.json
const caseStudyDetails = data.caseStudies;

export default function CaseStudiesPage() {
  // Get meeting link from data.json
  const meetingLink = data.meetingLink;
  
  return (
    <PageLayout>
      <div className="py-12">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold mb-4">Client Success Stories</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Explore how our fractional CTO services have helped startups and growing businesses overcome technical challenges and accelerate growth.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {caseStudyDetails.map((caseStudy, index) => (
            <div key={index} className="card bg-base-200 shadow-lg overflow-hidden">
              <figure className="relative h-48">
                {caseStudy.image && (
                  <Image 
                    src={caseStudy.image}
                    alt={caseStudy.title}
                    fill
                    className="object-cover"
                  />
                )}
              </figure>
              <div className="card-body">
                <div className="badge badge-primary mb-2">{caseStudy.industry}</div>
                <h2 className="card-title">{caseStudy.title}</h2>
                <p className="line-clamp-3 mb-4">{caseStudy.description}</p>
                <Link href={`/case-studies/${caseStudy.id}`} className="btn btn-outline btn-sm">
                  Read Case Study
                </Link>
              </div>
            </div>
          ))}
        </div>
        
        <div className="card bg-base-200 shadow-lg p-8 text-center">
          <h2 className="text-2xl font-bold mb-4">Ready to Achieve Similar Results?</h2>
          <p className="max-w-2xl mx-auto mb-6">
            Schedule a free consultation to discuss your technical challenges and learn how our fractional CTO services can help your business grow.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href={meetingLink} className="btn btn-primary" target="_blank" rel="noopener noreferrer">
              Book a Consultation
            </Link>
            <Link href="/services" className="btn btn-outline">
              Explore Our Services
            </Link>
          </div>
        </div>
      </div>
    </PageLayout>
  );
} 
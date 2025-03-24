import PageLayout from '@/components/PageLayout';
import CaseStudies from '@/components/CaseStudies';
import Link from 'next/link';
import Image from 'next/image';
import data from '@/data.json';
import MeetingButton from '@/components/MeetingButton';
import { Metadata } from 'next';

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
        
        <div className="card bg-base-200 shadow-lg mt-12">
          <div className="card-body text-center">
            <h2 className="text-2xl font-bold mb-2">Ready to Discuss Your Technical Challenges?</h2>
            <p className="mb-6 max-w-2xl mx-auto">
              Schedule a free consultation to explore how our expertise can help your business overcome technical hurdles and accelerate growth.
            </p>
            <div className="flex justify-center">
              <MeetingButton text="Schedule a Free Consultation" />
            </div>
          </div>
        </div>
      </div>
    </PageLayout>
  );
} 
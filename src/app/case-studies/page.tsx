import PageLayout from '@/components/PageLayout';
import data from '@/data.json';
import MeetingButton from '@/components/MeetingButton';
import { CaseStudyCard } from '@/components/CaseStudies';

// Get case study details from data.json
const caseStudyDetails = data.caseStudies;

export default function CaseStudiesPage() {
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
            <CaseStudyCard key={index} {...caseStudy} />
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
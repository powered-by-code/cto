import PageLayout from '@/components/PageLayout';
import CaseStudies from '@/components/CaseStudies';
import Link from 'next/link';
import Image from 'next/image';
import data from '@/data.json';

// Get case study details from data.json
const caseStudyDetails = data.caseStudies;

export default function CaseStudiesPage() {
  return (
    <PageLayout>
      <div className="py-12">
        <h1 className="text-4xl font-bold mb-6">Case Studies</h1>
        <p className="text-lg mb-12 max-w-3xl">
          Real-world examples of how our fractional CTO services have helped companies overcome 
          technical challenges, scale operations, and achieve business growth. These stories 
          demonstrate our practical approach to solving complex technical problems.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {caseStudyDetails.map((caseStudy) => (
            <Link key={caseStudy.id} href={`/case-studies/${caseStudy.id}`} className="card bg-base-200 shadow-lg hover:shadow-xl transition-shadow">
              <div className="card-body">
                <div className="h-40 bg-gray-300 mb-4 flex items-center justify-center relative">
                  {caseStudy.image ? (
                    <Image
                      src={caseStudy.image}
                      alt={caseStudy.title}
                      fill
                      className="object-cover rounded-t-lg"
                    />
                  ) : (
                    <span className="text-gray-500">Case Study Image</span>
                  )}
                </div>
                <div className="badge badge-primary mb-2">{caseStudy.industry}</div>
                <h2 className="card-title">{caseStudy.title}</h2>
                <p className="my-4 line-clamp-3">{caseStudy.description}</p>
                <div>
                  <h3 className="font-semibold mb-2">Results:</h3>
                  <ul className="space-y-1">
                    {caseStudy.results.slice(0, 3).map((result, index) => (
                      <li key={index} className="flex items-start">
                        <svg className="w-5 h-5 text-primary mt-0.5 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                        </svg>
                        {result}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="card-actions justify-end mt-4">
                  <span className="text-primary">Read the full case study →</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
        
        <div className="mt-16 p-8 bg-base-200 rounded-lg">
          <h2 className="text-2xl font-bold mb-4">Facing Similar Technical Challenges?</h2>
          <p className="mb-6">Schedule a free consultation to discuss how our fractional CTO services can help your business overcome technical obstacles and accelerate growth.</p>
          <Link href="/contact" className="btn btn-primary">Book a Consultation</Link>
        </div>
      </div>
    </PageLayout>
  );
} 
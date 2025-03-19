import PageLayout from '@/components/PageLayout';
import CaseStudies from '@/components/CaseStudies';
import Link from 'next/link';

// Define case study details
const caseStudyDetails = [
  {
    id: 'saas-scale-architecture',
    title: 'SaaS Platform Scale-Up Architecture',
    industry: 'SaaS',
    description: 'Helping a rapidly growing SaaS company redesign their architecture to handle 10x user growth without sacrificing performance or reliability.',
    image: '/images/case-saas.jpg',
    results: [
      'Reduced infrastructure costs by 40% while handling 10x more traffic',
      'Improved system uptime from 99.5% to 99.99%',
      'Cut database response times by 65%',
      'Implemented robust monitoring and auto-scaling solutions'
    ]
  },
  {
    id: 'fintech-compliance-security',
    title: 'FinTech Compliance & Security',
    industry: 'FinTech',
    description: 'Supporting a financial technology startup in building a secure, compliant payment processing system that met stringent regulatory requirements.',
    image: '/images/case-fintech.jpg',
    results: [
      'Achieved PCI DSS and SOC 2 compliance in record time',
      'Implemented secure architecture processing $10M daily',
      'Passed rigorous security audits with zero critical findings',
      'Reduced development time for compliance features by 50%'
    ]
  },
  {
    id: 'marketplace-platform-scaling',
    title: 'Marketplace Platform Scaling',
    industry: 'Marketplaces',
    description: 'Transforming a struggling marketplace platform into a high-performance system capable of handling millions of transactions.',
    image: '/images/case-marketplace.jpg',
    results: [
      'Redesigned matching algorithm improving conversion by 35%',
      'Built scalable payment and escrow system handling 3M+ monthly transactions',
      'Reduced fraud by 80% through advanced detection systems',
      'Cut infrastructure costs by 45% while improving performance'
    ]
  },
  {
    id: 'healthtech-hipaa-compliance',
    title: 'Health Tech HIPAA Compliance',
    industry: 'Health Tech',
    description: 'Developing a HIPAA-compliant architecture for a telehealth platform ensuring patient data security while supporting rapid growth.',
    image: '/images/case-healthtech.jpg',
    results: [
      'Built fully HIPAA-compliant system passing all security audits',
      'Designed secure video consultation platform supporting 50,000+ daily consultations',
      'Implemented compliant EHR integration with major healthcare systems',
      'Created secure data architecture with end-to-end encryption'
    ]
  },
  {
    id: 'tech-team-turnaround',
    title: 'Technical Team Turnaround',
    industry: 'E-Commerce',
    description: 'Helping an e-commerce company restructure their engineering team, improve development processes, and deliver a critical platform upgrade on time.',
    image: '/images/case-team.jpg',
    results: [
      'Restructured engineering team reducing turnover from 40% to 5%',
      'Implemented agile processes that increased delivery velocity by 60%',
      'Successfully delivered major platform upgrade that had been delayed for months',
      'Reduced critical bugs by 75% through improved QA processes'
    ]
  },
  {
    id: 'ai-ml-infrastructure',
    title: 'AI/ML Infrastructure Optimization',
    industry: 'AI/ML',
    description: 'Building efficient data pipelines and deployment architecture for an AI startup, significantly reducing costs while improving model performance.',
    image: '/images/case-aiml.jpg',
    results: [
      'Reduced model training costs by 70% through infrastructure optimization',
      'Implemented MLOps pipeline reducing deployment time from days to minutes',
      'Created efficient data pipeline processing 500M+ records daily',
      'Designed scalable inference architecture handling 10,000 requests per second'
    ]
  }
];

export default function CaseStudiesPage() {
  return (
    <PageLayout>
      <div className="py-12">
        <h1 className="text-4xl font-bold mb-6">Success Stories</h1>
        <p className="text-lg mb-12 max-w-3xl">
          Explore how our fractional CTO services have helped startups and growing companies solve complex technical challenges and accelerate their growth.
        </p>
        
        <CaseStudies />
        
        <hr className="border-gray-800 my-12" />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {caseStudyDetails.map((caseStudy) => (
            <div key={caseStudy.id} className="card bg-base-200 shadow-lg">
              <figure className="h-48 bg-gray-300">
                {/* Replace with actual images */}
                <div className="w-full h-full flex items-center justify-center bg-primary/10">
                  <span className="text-lg font-medium">{caseStudy.industry}</span>
                </div>
              </figure>
              <div className="card-body">
                <div className="text-xs opacity-70 mb-1">{caseStudy.industry}</div>
                <h3 className="card-title text-xl">{caseStudy.title}</h3>
                <p className="my-4">{caseStudy.description}</p>
                <div className="mt-4">
                  <h4 className="font-bold mb-2 text-sm">Key Results:</h4>
                  <ul className="list-disc pl-5 space-y-1 text-sm">
                    {caseStudy.results.slice(0, 2).map((result, index) => (
                      <li key={index}>{result}</li>
                    ))}
                  </ul>
                </div>
                <div className="card-actions justify-end mt-6">
                  <Link href={`/case-studies/${caseStudy.id}`} className="btn btn-primary">
                    Full Case Study
                  </Link>
                </div>
              </div>
            </div>
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
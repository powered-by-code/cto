import PageLayout from '@/components/PageLayout';
import CaseStudies from '@/components/CaseStudies';
import Link from 'next/link';

// Define case study details
const caseStudyDetails = [
  {
    id: 'global-bank-esg',
    title: 'Global Bank ESG Integration',
    industry: 'Finance',
    description: 'Helping a leading global bank integrate ESG considerations into its investment and lending decisions, enhancing long-term value creation.',
    image: '/images/case-bank.jpg',
    results: [
      'Developed comprehensive ESG integration framework',
      'Trained over 500 investment professionals on ESG analysis',
      'Improved sustainability ratings by two tiers',
      'Mobilized $10 billion in sustainable financing'
    ]
  },
  {
    id: 'energy-company-transition',
    title: 'Energy Company Transition Strategy',
    industry: 'Energy',
    description: 'Supporting a traditional energy company in developing a robust transition strategy to thrive in a low-carbon future.',
    image: '/images/case-energy.jpg',
    results: [
      'Created 30-year climate transition roadmap',
      'Identified $5 billion in low-carbon investment opportunities',
      'Established science-based emissions reduction targets',
      'Aligned executive compensation with sustainability metrics'
    ]
  },
  {
    id: 'consumer-goods-supply-chain',
    title: 'Consumer Goods Sustainable Supply Chain',
    industry: 'Consumer Goods',
    description: 'Transforming the supply chain of a global consumer goods company to enhance sustainability and resilience.',
    image: '/images/case-consumer.jpg',
    results: [
      'Reduced supply chain emissions by 25%',
      'Achieved 100% sustainable sourcing for key raw materials',
      'Improved worker conditions across 200+ supplier facilities',
      'Reduced water use in manufacturing by 30%'
    ]
  },
  {
    id: 'real-estate-climate-resilience',
    title: 'Real Estate Climate Resilience',
    industry: 'Real Estate',
    description: 'Developing a climate resilience strategy for a major real estate portfolio to protect asset value and ensure business continuity.',
    image: '/images/case-realestate.jpg',
    results: [
      'Assessed climate risks across 150+ properties',
      'Implemented resilience measures saving $25M in potential damages',
      'Reduced insurance premiums by 15%',
      'Developed industry-leading climate risk disclosure approach'
    ]
  },
  {
    id: 'technology-net-zero',
    title: 'Technology Company Net Zero Strategy',
    industry: 'Technology',
    description: 'Helping a leading technology company develop and implement a credible net zero strategy across global operations and value chain.',
    image: '/images/case-tech.jpg',
    results: [
      'Achieved carbon neutrality for operations within 2 years',
      'Developed pathway to net zero across value chain by 2040',
      'Implemented internal carbon pricing to drive innovation',
      'Engaged with 100+ suppliers on emissions reduction'
    ]
  },
  {
    id: 'manufacturing-circular-economy',
    title: 'Manufacturing Circular Economy Transformation',
    industry: 'Manufacturing',
    description: 'Transforming a manufacturing company\'s business model from linear to circular, reducing resource use while creating new value streams.',
    image: '/images/case-manufacturing.jpg',
    results: [
      'Reduced virgin material use by 40%',
      'Developed product-as-a-service model for key product lines',
      'Created take-back program recovering 65% of products',
      'Generated $45M in value from circular initiatives'
    ]
  }
];

export default function CaseStudiesPage() {
  return (
    <PageLayout>
      <div className="py-12">
        <h1 className="text-4xl font-bold mb-6">Case Studies</h1>
        <p className="text-lg mb-12 max-w-3xl">
          Explore how we've helped leading organizations across industries navigate complex sustainability challenges and create lasting value.
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
                <div className="card-actions justify-end mt-6">
                  <Link href={`/case-studies/${caseStudy.id}`} className="btn btn-primary">
                    View Case Study
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </PageLayout>
  );
} 
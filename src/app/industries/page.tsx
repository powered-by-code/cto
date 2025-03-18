import PageLayout from '@/components/PageLayout';
import Industries from '@/components/Industries';
import Link from 'next/link';

// Define industry details
const industryDetails = [
  {
    id: 'energy',
    title: 'Energy',
    description: 'We help energy companies navigate the transition to a low-carbon future, manage climate risks, and capitalize on new opportunities in renewable energy and clean technology.',
    image: '/images/industry-energy.jpg',
    services: [
      'Renewable energy strategy',
      'Energy transition planning',
      'Decarbonization roadmaps',
      'Clean technology assessment',
      'Climate risk management'
    ]
  },
  {
    id: 'finance',
    title: 'Finance',
    description: 'We assist financial institutions in integrating ESG considerations into investment decisions, developing sustainable finance products, and managing climate-related financial risks.',
    image: '/images/industry-finance.jpg',
    services: [
      'ESG integration',
      'Sustainable investment strategies',
      'Climate risk assessment',
      'Green and sustainable finance',
      'TCFD reporting and disclosure'
    ]
  },
  {
    id: 'manufacturing',
    title: 'Manufacturing',
    description: 'We support manufacturing companies in reducing their environmental footprint, enhancing resource efficiency, and building resilient and sustainable supply chains.',
    image: '/images/industry-manufacturing.jpg',
    services: [
      'Sustainable manufacturing',
      'Circular economy strategies',
      'Supply chain sustainability',
      'Resource efficiency',
      'Net zero manufacturing'
    ]
  },
  {
    id: 'technology',
    title: 'Technology',
    description: 'We enable technology companies to leverage their innovations for sustainability, reduce their operational impacts, and develop solutions that address environmental and social challenges.',
    image: '/images/industry-technology.jpg',
    services: [
      'Sustainable technology innovation',
      'Green data centers',
      'Sustainable product design',
      'Digital solutions for sustainability',
      'ESG in technology'
    ]
  },
  {
    id: 'consumer-goods',
    title: 'Consumer Goods',
    description: 'We help consumer goods companies respond to growing consumer demand for sustainable products, build responsible supply chains, and reduce environmental impacts across the product lifecycle.',
    image: '/images/industry-consumer.jpg',
    services: [
      'Sustainable product development',
      'Sustainable packaging',
      'Responsible sourcing',
      'Circular business models',
      'Consumer engagement'
    ]
  },
  {
    id: 'real-estate',
    title: 'Real Estate',
    description: 'We assist real estate developers, owners, and investors in enhancing building sustainability, managing climate risks, and capturing value from green building practices.',
    image: '/images/industry-realestate.jpg',
    services: [
      'Green building certification',
      'Climate resilient design',
      'Sustainable property management',
      'Net zero buildings',
      'ESG in real estate'
    ]
  }
];

export default function IndustriesPage() {
  return (
    <PageLayout>
      <div className="py-12">
        <h1 className="text-4xl font-bold mb-6">Industries We Serve</h1>
        <p className="text-lg mb-12 max-w-3xl">
          We work across a diverse range of industries, providing tailored sustainability and climate solutions that address sector-specific challenges and opportunities.
        </p>
        
        <Industries />
        
        <hr className="border-gray-800 my-12" />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {industryDetails.map((industry) => (
            <div key={industry.id} className="card bg-base-200 shadow-lg">
              <figure className="h-48 bg-gray-300">
                {/* Replace with actual images */}
                <div className="w-full h-full flex items-center justify-center bg-primary/10">
                  <span className="text-lg font-medium">{industry.title}</span>
                </div>
              </figure>
              <div className="card-body">
                <h3 className="card-title text-xl">{industry.title}</h3>
                <p className="my-4">{industry.description}</p>
                <div className="mt-4">
                  <h4 className="font-bold mb-2">Key Services:</h4>
                  <ul className="list-disc pl-5 space-y-1">
                    {industry.services.map((service, index) => (
                      <li key={index}>{service}</li>
                    ))}
                  </ul>
                </div>
                <div className="card-actions justify-end mt-6">
                  <Link href={`/industries/${industry.id}`} className="btn btn-primary">
                    Learn More
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
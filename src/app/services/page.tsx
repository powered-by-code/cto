import PageLayout from '@/components/PageLayout';
import Services from '@/components/Services';
import Link from 'next/link';

// Define service details
const serviceDetails = [
  {
    id: 'sustainability-consulting',
    title: 'Sustainability Consulting',
    description: 'Our sustainability consulting services help organizations develop and implement effective sustainability strategies that align with their business goals while addressing environmental and social challenges.',
    features: [
      'Sustainability strategy development',
      'ESG (Environmental, Social, Governance) assessment',
      'Carbon footprint measurement and reduction',
      'Sustainability reporting and disclosure',
      'Stakeholder engagement'
    ]
  },
  {
    id: 'climate-risk-assessment',
    title: 'Climate Risk Assessment',
    description: 'Our climate risk assessment services help organizations identify, assess, and manage climate-related risks and opportunities across their operations and value chains.',
    features: [
      'Physical risk assessment',
      'Transition risk assessment',
      'Climate scenario analysis',
      'Climate adaptation strategy',
      'TCFD alignment and reporting'
    ]
  },
  {
    id: 'esg-integration',
    title: 'ESG Integration',
    description: 'Our ESG integration services help organizations embed environmental, social, and governance considerations into their business strategy, operations, and decision-making processes.',
    features: [
      'ESG strategy development',
      'ESG due diligence',
      'ESG performance improvement',
      'ESG reporting and disclosure',
      'ESG training and capacity building'
    ]
  },
  {
    id: 'sustainable-finance',
    title: 'Sustainable Finance',
    description: 'Our sustainable finance services help financial institutions and companies align their financial strategies and capital allocation with sustainability goals and climate commitments.',
    features: [
      'Green and sustainability-linked financing',
      'Sustainable investment strategies',
      'Impact measurement and management',
      'Climate finance',
      'Sustainable finance frameworks'
    ]
  },
  {
    id: 'net-zero-strategy',
    title: 'Net Zero Strategy',
    description: 'Our net zero strategy services help organizations develop and implement science-based targets and actionable roadmaps to achieve net zero emissions across their value chains.',
    features: [
      'Net zero target setting',
      'Carbon reduction strategy',
      'Carbon offset strategy',
      'Implementation roadmap',
      'Progress monitoring and reporting'
    ]
  }
];

export default function ServicesPage() {
  return (
    <PageLayout>
      <div className="py-12">
        <h1 className="text-4xl font-bold mb-6">Our Services</h1>
        <p className="text-lg mb-12 max-w-3xl">
          We offer a comprehensive range of services to help organizations navigate the complex landscape of sustainability and climate change.
        </p>
        
        <Services />
        
        <hr className="border-gray-800 my-12" />
        
        <h2 className="text-3xl font-bold mb-8">Explore Our Services</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {serviceDetails.map((service) => (
            <div key={service.id} className="card bg-base-200 shadow-lg">
              <div className="card-body">
                <h3 className="card-title text-2xl">{service.title}</h3>
                <p className="my-4">{service.description}</p>
                <div className="mt-4">
                  <h4 className="font-bold mb-2">Key Features:</h4>
                  <ul className="list-disc pl-5 space-y-1">
                    {service.features.map((feature, index) => (
                      <li key={index}>{feature}</li>
                    ))}
                  </ul>
                </div>
                <div className="card-actions justify-end mt-6">
                  <Link href={`/services/${service.id}`} className="btn btn-primary">
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
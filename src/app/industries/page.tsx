import PageLayout from '@/components/PageLayout';
import Industries from '@/components/Industries';
import Link from 'next/link';

// Define industry details
const industryDetails = [
  {
    id: 'saas',
    title: 'SaaS Startups',
    description: 'We help SaaS founders build scalable architectures, optimize cloud infrastructure, implement efficient development processes, and create technical roadmaps that support rapid growth.',
    image: '/images/industry-saas.jpg',
    services: [
      'Cloud architecture optimization',
      'Scalable infrastructure design',
      'Tech debt management',
      'DevOps implementation',
      'SaaS security best practices'
    ]
  },
  {
    id: 'fintech',
    title: 'FinTech',
    description: 'We assist FinTech startups with secure architecture design, regulatory compliance, payment integrations, and building high-reliability systems that handle financial data with the utmost integrity.',
    image: '/images/industry-fintech.jpg',
    services: [
      'Secure payment architectures',
      'Financial data management',
      'Regulatory tech compliance',
      'Banking API integrations',
      'High-reliability system design'
    ]
  },
  {
    id: 'marketplaces',
    title: 'Marketplaces',
    description: 'We support marketplace founders in building platforms that scale with growing users and transactions, implementing efficient matching algorithms, and designing systems that provide exceptional experiences for all sides of the market.',
    image: '/images/industry-marketplace.jpg',
    services: [
      'Marketplace architecture design',
      'Search and matching optimization',
      'Payment and escrow systems',
      'Fraud prevention systems',
      'Scale-ready infrastructure'
    ]
  },
  {
    id: 'e-commerce',
    title: 'E-Commerce',
    description: 'We enable e-commerce companies to build robust shopping experiences, optimize conversion rates through technical improvements, and implement inventory, fulfillment, and payment systems that scale with your business.',
    image: '/images/industry-ecommerce.jpg',
    services: [
      'E-commerce platform selection',
      'Custom storefront development',
      'Payment and checkout optimization',
      'Inventory system integration',
      'Performance optimization'
    ]
  },
  {
    id: 'health-tech',
    title: 'Health Tech',
    description: 'We help health tech founders navigate the unique challenges of building healthcare applications, including HIPAA compliance, secure patient data management, and integration with existing healthcare systems.',
    image: '/images/industry-healthtech.jpg',
    services: [
      'HIPAA-compliant architecture',
      'Healthcare data security',
      'Medical API integrations',
      'Telemedicine implementations',
      'Regulatory compliance'
    ]
  },
  {
    id: 'ai-ml',
    title: 'AI/ML Startups',
    description: 'We assist AI and machine learning startups in building efficient data pipelines, selecting the right infrastructure for model training and deployment, and creating scalable architectures for ML-powered applications.',
    image: '/images/industry-ai.jpg',
    services: [
      'ML infrastructure design',
      'Data pipeline architecture',
      'Model deployment strategies',
      'AI application scaling',
      'ML ops implementation'
    ]
  }
];

export default function IndustriesPage() {
  return (
    <PageLayout>
      <div className="py-12">
        <h1 className="text-4xl font-bold mb-6">Industries We Serve</h1>
        <p className="text-lg mb-12 max-w-3xl">
          We provide fractional CTO services to a wide range of technology-enabled businesses, with specialized expertise in these key sectors.
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
                  <h4 className="font-bold mb-2">Technical Expertise:</h4>
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

        <div className="mt-16 p-8 bg-base-200 rounded-lg">
          <h2 className="text-2xl font-bold mb-4">Working in a Different Industry?</h2>
          <p className="mb-6">Our technology expertise extends beyond these industries. Contact us to discuss how we can help with your specific technical challenges.</p>
          <Link href="/contact" className="btn btn-primary">Get in Touch</Link>
        </div>
      </div>
    </PageLayout>
  );
} 
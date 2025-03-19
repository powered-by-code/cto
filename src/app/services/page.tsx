import PageLayout from '@/components/PageLayout';
import Services from '@/components/Services';
import Link from 'next/link';

// Define service details
const serviceDetails = [
  {
    id: 'fractional-cto',
    title: 'Fractional CTO Services',
    description: 'Bring strategic tech leadership to your startup without the full-time price tag. Get expert guidance when you need it most, whether that\'s a few hours per week or several days per month.',
    features: [
      'Technical strategy development and execution',
      'Technology stack selection and optimization',
      'Technical debt assessment and management',
      'Product roadmap development with your team',
      'Regular strategy sessions and progress reviews'
    ]
  },
  {
    id: 'tech-team-building',
    title: 'Tech Team Building',
    description: 'Build a high-performing technical team that delivers results. We help with recruitment, structure, processes, and culture to create a sustainable engineering organization.',
    features: [
      'Engineering team structure design',
      'Recruitment strategy and technical interviews',
      'Developer onboarding processes',
      'Team performance optimization',
      'Engineering culture development'
    ]
  },
  {
    id: 'pivot-support',
    title: 'Technical Pivot Support',
    description: 'Successfully navigate technical changes during business pivots. We provide the expertise you need to realign your technology with your new business direction quickly and efficiently.',
    features: [
      'Technical feasibility assessment',
      'Legacy system evaluation and migration planning',
      'Technology stack transition strategy',
      'Team restructuring guidance',
      'Risk mitigation during the pivot process'
    ]
  },
  {
    id: 'tech-cost-optimization',
    title: 'Tech Cost Optimization',
    description: 'Identify and eliminate unnecessary technology expenses without compromising growth. Our data-driven approach helps you invest smartly in the tech that truly matters.',
    features: [
      'Comprehensive tech spending audit',
      'Cloud infrastructure optimization',
      'Software license consolidation',
      'Make vs. buy analysis',
      'ROI-focused technology investment strategy'
    ]
  },
  {
    id: 'technical-due-diligence',
    title: 'Technical Due Diligence',
    description: 'Get a clear understanding of the technical risks and opportunities in your investment or acquisition targets. Our thorough assessments provide actionable insights for decision-making.',
    features: [
      'Architecture and code quality review',
      'Technical debt quantification',
      'Team capability assessment',
      'Scalability and security evaluation',
      'Technology risk assessment report'
    ]
  }
];

export default function ServicesPage() {
  return (
    <PageLayout>
      <div className="py-12">
        <h1 className="text-4xl font-bold mb-6">Fractional CTO Services</h1>
        <p className="text-lg mb-12 max-w-3xl">
          Expert tech leadership when you need it, without the full-time cost. We help startup founders, non-technical executives, and growing companies navigate technical challenges, build exceptional teams, and optimize technology investments.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {serviceDetails.map((service) => (
            <div key={service.id} className="card bg-base-200 shadow-lg">
              <div className="card-body">
                <h3 className="card-title text-2xl">{service.title}</h3>
                <p className="my-4">{service.description}</p>
                <div className="mt-4">
                  <h4 className="font-bold mb-2">What's Included:</h4>
                  <ul className="list-disc pl-5 space-y-1">
                    {service.features.map((feature, index) => (
                      <li key={index}>{feature}</li>
                    ))}
                  </ul>
                </div>
                <div className="card-actions justify-end mt-6">
                  <Link href="/contact" className="btn btn-primary">
                    Get Started
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
import PageLayout from '@/components/PageLayout';
import Link from 'next/link';
import { notFound } from 'next/navigation';

// Define service details
const serviceDetails = [
  {
    id: 'fractional-cto',
    title: 'Fractional CTO Services',
    description: 'Bring strategic tech leadership to your startup without the full-time price tag. Get expert guidance when you need it most, whether that\'s a few hours per week or several days per month.',
    longDescription: 'As a startup founder, you\'re juggling countless responsibilities. Technical leadership shouldn\'t be a bottleneck to your growth. Our Fractional CTO service provides the strategic tech guidance you need, when you need it, without the full-time executive cost. We work alongside your team to develop clear technical strategies, make informed architecture decisions, and ensure your technology supports your business goals. Whether you\'re a non-technical founder needing a trusted tech advisor or a technical founder looking to delegate CTO responsibilities, our flexible engagement model adapts to your specific needs and growth stage.',
    features: [
      'Technical strategy development and execution',
      'Technology stack selection and optimization',
      'Technical debt assessment and management',
      'Product roadmap development with your team',
      'Regular strategy sessions and progress reviews'
    ],
    benefits: [
      'Free up founder time to focus on business growth',
      'Reduce technical risk through expert guidance',
      'Make confident technology decisions',
      'Accelerate product development timelines',
      'Save costs compared to hiring a full-time CTO'
    ],
    caseStudies: [
      {
        title: 'E-commerce Startup',
        description: 'Helped a non-technical founder build and scale their e-commerce platform through critical growth phases, reducing development costs by 30% while improving system reliability and performance.'
      },
      {
        title: 'FinTech Scale-up',
        description: 'Provided strategic leadership during a major pivot, guiding the transition to a new tech stack that supported 5x user growth without system degradation.'
      }
    ]
  },
  {
    id: 'tech-team-building',
    title: 'Tech Team Building',
    description: 'Build a high-performing technical team that delivers results. We help with recruitment, structure, processes, and culture to create a sustainable engineering organization.',
    longDescription: 'Building an effective technical team is one of the most challenging aspects of growing a technology business. Our Tech Team Building service guides you through this process, from defining the right roles and team structure to recruiting, onboarding, and developing your engineering talent. We implement proven processes that enhance productivity, code quality, and team satisfaction. Whether you\'re hiring your first developer or scaling a team of dozens, we provide the expertise needed to build a technical organization that delivers consistent results and supports your business objectives.',
    features: [
      'Engineering team structure design',
      'Recruitment strategy and technical interviews',
      'Developer onboarding processes',
      'Team performance optimization',
      'Engineering culture development'
    ],
    benefits: [
      'Hire the right technical talent faster',
      'Reduce costly mis-hires and team turnover',
      'Implement effective development processes',
      'Improve code quality and delivery speed',
      'Build a sustainable engineering culture'
    ],
    caseStudies: [
      {
        title: 'SaaS Healthcare Startup',
        description: 'Built a complete engineering team from the ground up, implementing Agile processes that increased delivery velocity by 40% and reduced bug reports by 60%.'
      },
      {
        title: 'EdTech Company',
        description: 'Restructured an underperforming development team, improving morale, reducing turnover, and delivering a critical product release that had been delayed for months.'
      }
    ]
  },
  {
    id: 'pivot-support',
    title: 'Technical Pivot Support',
    description: 'Successfully navigate technical changes during business pivots. We provide the expertise you need to realign your technology with your new business direction quickly and efficiently.',
    longDescription: 'Business pivots are challenging, especially when they require significant technical changes. Our Technical Pivot Support service helps you navigate these transitions with minimal disruption. We assess your current technical assets, identify what can be leveraged in your new direction, and create a strategic roadmap for the technical changes needed. We work with your team to implement these changes methodically, managing risks and maintaining operational stability throughout the process. Whether you\'re shifting to a new market, changing your business model, or evolving your product offering, we help ensure your technology supports your pivot successfully.',
    features: [
      'Technical feasibility assessment',
      'Legacy system evaluation and migration planning',
      'Technology stack transition strategy',
      'Team restructuring guidance',
      'Risk mitigation during the pivot process'
    ],
    benefits: [
      'Reduce the technical risk of business pivots',
      'Accelerate time-to-market for your new direction',
      'Preserve valuable technical assets and investment',
      'Maintain team productivity during transition',
      'Align technology strategy with new business goals'
    ],
    caseStudies: [
      {
        title: 'B2B Software Company',
        description: 'Guided a pivot from an on-premise solution to a cloud-based SaaS model, preserving 70% of the existing codebase while enabling new business capabilities.'
      },
      {
        title: 'Mobile App Startup',
        description: 'Helped redesign the technical architecture to support a pivot from a consumer app to an enterprise solution, without disrupting existing customer relationships.'
      }
    ]
  },
  {
    id: 'tech-cost-optimization',
    title: 'Tech Cost Optimization',
    description: 'Identify and eliminate unnecessary technology expenses without compromising growth. Our data-driven approach helps you invest smartly in the tech that truly matters.',
    longDescription: 'Technology costs can quickly spiral out of control as your business grows. Our Tech Cost Optimization service provides a systematic approach to identifying inefficiencies and reducing unnecessary expenses without compromising your technical capabilities. We conduct a comprehensive audit of your infrastructure, licenses, development processes, and technology stack to find optimization opportunities. Then we develop and implement a strategic plan to reduce costs while maintaining or improving performance, security, and scalability. This service is particularly valuable for scale-ups experiencing rapid growth, companies preparing for fundraising, or businesses needing to extend their runway.',
    features: [
      'Comprehensive tech spending audit',
      'Cloud infrastructure optimization',
      'Software license consolidation',
      'Make vs. buy analysis',
      'ROI-focused technology investment strategy'
    ],
    benefits: [
      'Reduce monthly technology expenses by 20-40%',
      'Extend your financial runway',
      'Eliminate wasteful or redundant services',
      'Improve system performance and reliability',
      'Create a sustainable technology budget'
    ],
    caseStudies: [
      {
        title: 'Data Analytics Startup',
        description: 'Reduced cloud computing costs by 45% while improving system performance through infrastructure optimization and workload efficiency improvements.'
      },
      {
        title: 'Digital Marketing Platform',
        description: 'Conducted a comprehensive tech stack audit that identified $250,000 in annual savings through consolidation of overlapping tools and renegotiation of vendor contracts.'
      }
    ]
  },
  {
    id: 'technical-due-diligence',
    title: 'Technical Due Diligence',
    description: 'Get a clear understanding of the technical risks and opportunities in your investment or acquisition targets. Our thorough assessments provide actionable insights for decision-making.',
    longDescription: 'Making informed investment decisions requires a deep understanding of a company\'s technical assets, capabilities, and risks. Our Technical Due Diligence service provides a comprehensive assessment of technology investments, acquisitions, or portfolio companies. We evaluate architecture, code quality, scalability, security, technical debt, and team capabilities to identify both risks and opportunities. Our detailed reports help investors, acquirers, and executives make confident decisions with a clear understanding of the technical landscape. We also provide recommendations for post-investment technical improvements to maximize value and minimize risk.',
    features: [
      'Architecture and code quality review',
      'Technical debt quantification',
      'Team capability assessment',
      'Scalability and security evaluation',
      'Technology risk assessment report'
    ],
    benefits: [
      'Make informed investment or acquisition decisions',
      'Identify hidden technical risks before commitment',
      'Discover opportunities for technical value creation',
      'Validate claims made by founding teams',
      'Develop post-investment technical improvement plans'
    ],
    caseStudies: [
      {
        title: 'Venture Capital Firm',
        description: 'Conducted technical due diligence on a potential investment, identifying significant scalability issues that led to a renegotiation of terms and a stronger technical roadmap.'
      },
      {
        title: 'Technology Acquirer',
        description: 'Performed pre-acquisition assessment of a software company, quantifying technical debt and providing a remediation plan that was incorporated into the acquisition agreement.'
      }
    ]
  }
];

export default function ServicePage({ params }: { params: { id: string } }) {
  const service = serviceDetails.find((s) => s.id === params.id);
  
  if (!service) {
    notFound();
  }
  
  return (
    <PageLayout>
      <div className="py-12">
        <div className="mb-8">
          <Link href="/services" className="text-primary flex items-center gap-2">
            <span>←</span> Back to Services
          </Link>
        </div>
        
        <h1 className="text-4xl font-bold mb-6">{service.title}</h1>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <div className="prose max-w-none">
              <p className="text-lg font-medium mb-6">{service.description}</p>
              <p>{service.longDescription}</p>
              
              <h2 className="mt-8 mb-4">What's Included</h2>
              <ul>
                {service.features.map((feature, index) => (
                  <li key={index}>{feature}</li>
                ))}
              </ul>
              
              <h2 className="mt-8 mb-4">Benefits</h2>
              <ul>
                {service.benefits.map((benefit, index) => (
                  <li key={index}>{benefit}</li>
                ))}
              </ul>
            </div>
          </div>
          
          <div className="lg:col-span-1">
            <div className="card bg-base-200 shadow-lg">
              <div className="card-body">
                <h3 className="card-title">Ready to Get Started?</h3>
                <p className="my-4">
                  Schedule a free consultation to discuss how our {service.title} can help your business.
                </p>
                <Link href="/contact" className="btn btn-primary w-full">
                  Book a Consultation
                </Link>
              </div>
            </div>
            
            <div className="mt-8">
              <h3 className="text-xl font-bold mb-4">Success Stories</h3>
              <div className="space-y-4">
                {service.caseStudies.map((caseStudy, index) => (
                  <div key={index} className="card bg-base-200 shadow-sm">
                    <div className="card-body p-4">
                      <h4 className="font-bold">{caseStudy.title}</h4>
                      <p>{caseStudy.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-8">
              <div className="card bg-base-200 shadow-lg">
                <div className="card-body">
                  <h3 className="card-title">Not Sure If This Is Right For You?</h3>
                  <p className="my-4">
                    Take our quick assessment to find out which service best fits your needs.
                  </p>
                  <Link href="/assessment" className="btn btn-outline w-full">
                    Take the Assessment
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </PageLayout>
  );
} 
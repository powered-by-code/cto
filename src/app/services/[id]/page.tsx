import PageLayout from '@/components/PageLayout';
import Link from 'next/link';
import { notFound } from 'next/navigation';

// Define service details
const serviceDetails = [
  {
    id: 'sustainability-consulting',
    title: 'Sustainability Consulting',
    description: 'Our sustainability consulting services help organizations develop and implement effective sustainability strategies that align with their business goals while addressing environmental and social challenges.',
    longDescription: 'Sustainability consulting is a strategic service designed to help businesses integrate environmental, social, and governance (ESG) considerations into their operations and decision-making processes. Our team of experts works closely with clients to identify sustainability challenges and opportunities, develop tailored strategies, and implement practical solutions that create value for both the business and society. We help organizations navigate the complex landscape of sustainability regulations, stakeholder expectations, and market trends, enabling them to build resilience, reduce risks, and capitalize on new opportunities in the transition to a more sustainable future.',
    features: [
      'Sustainability strategy development',
      'ESG (Environmental, Social, Governance) assessment',
      'Carbon footprint measurement and reduction',
      'Sustainability reporting and disclosure',
      'Stakeholder engagement'
    ],
    benefits: [
      'Enhanced brand reputation and stakeholder trust',
      'Improved operational efficiency and cost savings',
      'Reduced environmental impact and resource consumption',
      'Better alignment with regulatory requirements',
      'Increased innovation and competitive advantage'
    ],
    caseStudies: [
      {
        title: 'Global Consumer Goods Company',
        description: 'Developed a comprehensive sustainability strategy that reduced carbon emissions by 30% and waste by 25% while improving brand perception among consumers.'
      },
      {
        title: 'Regional Financial Institution',
        description: 'Created an ESG integration framework that improved the client\'s sustainability rating and attracted new environmentally conscious investors.'
      }
    ]
  },
  {
    id: 'climate-risk-assessment',
    title: 'Climate Risk Assessment',
    description: 'Our climate risk assessment services help organizations identify, assess, and manage climate-related risks and opportunities across their operations and value chains.',
    longDescription: 'Climate risk assessment is a comprehensive process that helps organizations understand and prepare for the impacts of climate change on their business. Our approach combines scientific data, scenario analysis, and business insights to identify both physical risks (such as extreme weather events and long-term climate shifts) and transition risks (such as policy changes, technology disruptions, and market shifts). We work with clients to quantify potential financial impacts, identify critical vulnerabilities, and develop robust adaptation and mitigation strategies. Our assessments are aligned with leading frameworks such as the Task Force on Climate-related Financial Disclosures (TCFD), enabling organizations to meet reporting requirements and stakeholder expectations.',
    features: [
      'Physical risk assessment',
      'Transition risk assessment',
      'Climate scenario analysis',
      'Climate adaptation strategy',
      'TCFD alignment and reporting'
    ],
    benefits: [
      'Enhanced resilience to climate-related disruptions',
      'Improved strategic planning and decision-making',
      'Better risk management and disclosure',
      'Identification of climate-related opportunities',
      'Increased investor confidence and stakeholder trust'
    ],
    caseStudies: [
      {
        title: 'International Energy Company',
        description: 'Conducted a comprehensive climate risk assessment that informed a strategic pivot towards renewable energy investments and reduced exposure to carbon-intensive assets.'
      },
      {
        title: 'Coastal Real Estate Developer',
        description: 'Developed a climate adaptation plan that incorporated sea-level rise projections and extreme weather scenarios, protecting over $500 million in assets.'
      }
    ]
  },
  {
    id: 'esg-integration',
    title: 'ESG Integration',
    description: 'Our ESG integration services help organizations embed environmental, social, and governance considerations into their business strategy, operations, and decision-making processes.',
    longDescription: 'ESG integration is the systematic incorporation of environmental, social, and governance factors into business processes and decision-making. Our comprehensive approach helps organizations move beyond compliance to create sustainable value through strategic ESG integration. We work with clients to assess their current ESG performance, identify material issues, develop tailored integration strategies, and implement effective governance structures and management systems. Our services cover all aspects of ESG integration, from policy development and performance measurement to stakeholder engagement and disclosure, enabling organizations to enhance their sustainability performance while driving business value.',
    features: [
      'ESG strategy development',
      'ESG due diligence',
      'ESG performance improvement',
      'ESG reporting and disclosure',
      'ESG training and capacity building'
    ],
    benefits: [
      'Improved risk management and business resilience',
      'Enhanced access to capital and financing',
      'Strengthened stakeholder relationships',
      'Improved operational efficiency and innovation',
      'Increased long-term shareholder value'
    ],
    caseStudies: [
      {
        title: 'Multinational Manufacturing Company',
        description: 'Implemented an enterprise-wide ESG integration program that improved sustainability performance across 15 countries and resulted in inclusion in a leading sustainability index.'
      },
      {
        title: 'Private Equity Firm',
        description: 'Developed an ESG integration framework for portfolio companies that enhanced value creation and facilitated successful exits at premium valuations.'
      }
    ]
  },
  {
    id: 'sustainable-finance',
    title: 'Sustainable Finance',
    description: 'Our sustainable finance services help financial institutions and companies align their financial strategies and capital allocation with sustainability goals and climate commitments.',
    longDescription: 'Sustainable finance encompasses a range of financial products, services, and strategies that support environmental and social objectives while delivering financial returns. Our team works with financial institutions, investors, and companies to develop and implement sustainable finance solutions that align capital flows with sustainability goals. We provide expertise in green and sustainability-linked financing, sustainable investment strategies, impact measurement, and climate finance. Our services help clients navigate the evolving sustainable finance landscape, capitalize on new opportunities, and contribute to the transition to a low-carbon, resource-efficient, and socially inclusive economy.',
    features: [
      'Green and sustainability-linked financing',
      'Sustainable investment strategies',
      'Impact measurement and management',
      'Climate finance',
      'Sustainable finance frameworks'
    ],
    benefits: [
      'Access to growing sustainable finance markets',
      'Improved risk-adjusted returns',
      'Enhanced reputation and stakeholder trust',
      'Alignment with regulatory developments',
      'Contribution to sustainability goals and positive impact'
    ],
    caseStudies: [
      {
        title: 'Global Investment Bank',
        description: 'Developed a sustainable finance framework that enabled the issuance of $2 billion in green bonds and attracted new environmentally conscious investors.'
      },
      {
        title: 'Renewable Energy Developer',
        description: 'Structured a sustainability-linked loan that reduced financing costs by linking interest rates to achievement of renewable energy capacity targets.'
      }
    ]
  },
  {
    id: 'net-zero-strategy',
    title: 'Net Zero Strategy',
    description: 'Our net zero strategy services help organizations develop and implement science-based targets and actionable roadmaps to achieve net zero emissions across their value chains.',
    longDescription: 'Net zero strategy development is a comprehensive process that helps organizations set and achieve ambitious climate targets aligned with global efforts to limit warming to 1.5°C. Our approach combines scientific expertise, business acumen, and practical implementation experience to create tailored net zero pathways. We work with clients to establish science-based emission reduction targets, identify and prioritize decarbonization opportunities, develop detailed implementation roadmaps, and establish robust monitoring and reporting systems. Our strategies address emissions across the entire value chain (Scopes 1, 2, and 3) and balance reduction measures with appropriate offsetting strategies for hard-to-abate emissions.',
    features: [
      'Net zero target setting',
      'Carbon reduction strategy',
      'Carbon offset strategy',
      'Implementation roadmap',
      'Progress monitoring and reporting'
    ],
    benefits: [
      'Alignment with global climate goals and stakeholder expectations',
      'Reduced exposure to carbon pricing and regulatory risks',
      'Energy and resource efficiency improvements',
      'Innovation and competitive differentiation',
      'Enhanced reputation and stakeholder trust'
    ],
    caseStudies: [
      {
        title: 'Global Technology Company',
        description: 'Developed and implemented a net zero strategy that achieved carbon neutrality for operations within three years and set a pathway to net zero across the value chain by 2040.'
      },
      {
        title: 'Consumer Products Manufacturer',
        description: 'Created a science-based net zero roadmap that identified over $30 million in energy efficiency savings while putting the company on track for 50% emissions reduction by 2030.'
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
              
              <h2 className="mt-8 mb-4">Key Features</h2>
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
                  Contact us today to learn how our {service.title} services can help your organization.
                </p>
                <Link href="/contact" className="btn btn-primary w-full">
                  Request a Consultation
                </Link>
              </div>
            </div>
            
            <div className="mt-8">
              <h3 className="text-xl font-bold mb-4">Case Studies</h3>
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
          </div>
        </div>
      </div>
    </PageLayout>
  );
} 
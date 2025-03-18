import PageLayout from '@/components/PageLayout';
import Link from 'next/link';
import { notFound } from 'next/navigation';

// Define industry details
const industryDetails = [
  {
    id: 'energy',
    title: 'Energy',
    description: 'We help energy companies navigate the transition to a low-carbon future, manage climate risks, and capitalize on new opportunities in renewable energy and clean technology.',
    longDescription: 'The energy sector is at the forefront of the global sustainability transition, facing both significant challenges and unprecedented opportunities. Our specialized team works with energy companies across the value chain—from traditional oil and gas producers to renewable energy developers and utilities—to navigate this complex landscape. We help clients develop robust strategies for the energy transition, manage climate-related risks, seize opportunities in clean energy, and meet the growing expectations of stakeholders for environmental stewardship and climate action. Our deep industry knowledge, combined with our sustainability expertise, enables us to provide practical solutions that enhance business resilience while contributing to a more sustainable energy future.',
    image: '/images/industry-energy.jpg',
    services: [
      'Renewable energy strategy',
      'Energy transition planning',
      'Decarbonization roadmaps',
      'Clean technology assessment',
      'Climate risk management'
    ],
    challenges: [
      'Navigating the transition to low-carbon energy systems',
      'Managing climate-related financial and operational risks',
      'Meeting increasing regulatory requirements and investor expectations',
      'Balancing short-term business needs with long-term sustainability goals',
      'Developing new business models for the energy transition'
    ],
    caseStudies: [
      {
        title: 'Global Oil & Gas Company',
        description: 'Developed a comprehensive energy transition strategy that included a roadmap to achieve net zero emissions by 2050, diversification into renewable energy, and management of climate-related financial risks.'
      },
      {
        title: 'Renewable Energy Developer',
        description: 'Assisted in expanding renewable energy portfolio through strategic planning, sustainability-linked financing, and stakeholder engagement to secure community support for new projects.'
      }
    ]
  },
  {
    id: 'finance',
    title: 'Finance',
    description: 'We assist financial institutions in integrating ESG considerations into investment decisions, developing sustainable finance products, and managing climate-related financial risks.',
    longDescription: 'The financial sector plays a crucial role in directing capital flows toward a more sustainable economy. We work with banks, asset managers, insurers, and other financial institutions to integrate environmental, social, and governance (ESG) factors into their core business processes. Our services help clients navigate the evolving sustainable finance landscape, develop innovative financial products, manage climate-related financial risks, and meet the growing demand from investors and regulators for enhanced ESG performance and disclosure. By combining our financial expertise with deep sustainability knowledge, we help our clients turn sustainability challenges into opportunities for value creation and positive impact.',
    image: '/images/industry-finance.jpg',
    services: [
      'ESG integration',
      'Sustainable investment strategies',
      'Climate risk assessment',
      'Green and sustainable finance',
      'TCFD reporting and disclosure'
    ],
    challenges: [
      'Integrating ESG considerations into investment processes',
      'Assessing and managing climate-related financial risks',
      'Developing credible sustainable finance products and services',
      'Meeting evolving regulatory requirements and reporting standards',
      'Addressing concerns about greenwashing and ensuring transparency'
    ],
    caseStudies: [
      {
        title: 'Global Investment Bank',
        description: 'Developed an ESG integration framework for investment decisions that improved risk-adjusted returns and attracted new sustainability-focused clients, increasing assets under management by 15%.'
      },
      {
        title: 'Regional Commercial Bank',
        description: 'Created a green finance program that mobilized over $500 million for renewable energy, energy efficiency, and sustainable infrastructure projects within two years.'
      }
    ]
  },
  {
    id: 'manufacturing',
    title: 'Manufacturing',
    description: 'We support manufacturing companies in reducing their environmental footprint, enhancing resource efficiency, and building resilient and sustainable supply chains.',
    longDescription: 'Manufacturing companies face increasing pressure to reduce their environmental footprint while maintaining competitiveness in a global market. Our industry experts work with manufacturers across sectors to develop and implement sustainable manufacturing strategies that enhance resource efficiency, reduce emissions, and build resilience. We help clients navigate the transition to circular business models, implement cleaner production processes, develop sustainable supply chain strategies, and engage with stakeholders on sustainability issues. By combining technical expertise with strategic insights, we help our manufacturing clients turn sustainability challenges into opportunities for innovation, cost reduction, and market differentiation.',
    image: '/images/industry-manufacturing.jpg',
    services: [
      'Sustainable manufacturing',
      'Circular economy strategies',
      'Supply chain sustainability',
      'Resource efficiency',
      'Net zero manufacturing'
    ],
    challenges: [
      'Reducing carbon emissions and environmental impacts',
      'Enhancing resource efficiency and minimizing waste',
      'Transitioning to circular economy models',
      'Ensuring sustainability throughout complex supply chains',
      'Meeting customer and stakeholder expectations for sustainable products'
    ],
    caseStudies: [
      {
        title: 'Global Electronics Manufacturer',
        description: 'Implemented a circular economy strategy that reduced virgin material use by 35%, decreased waste by 45%, and generated $30 million in annual cost savings through product redesign and take-back programs.'
      },
      {
        title: 'Automotive Components Supplier',
        description: 'Developed a sustainable supply chain program that improved environmental performance, reduced compliance risks, and strengthened relationships with major automotive customers focused on sustainability.'
      }
    ]
  },
  {
    id: 'technology',
    title: 'Technology',
    description: 'We enable technology companies to leverage their innovations for sustainability, reduce their operational impacts, and develop solutions that address environmental and social challenges.',
    longDescription: 'Technology companies have a unique dual role in sustainability—managing their own environmental impacts while also developing solutions that enable sustainability across sectors. We work with technology firms from startups to global leaders to help them navigate this dual challenge. Our services include strategies to reduce the environmental footprint of operations (particularly data centers and manufacturing), sustainable product design approaches, circular economy business models, and responsible innovation frameworks. We also help technology companies identify opportunities to develop and scale solutions that address sustainability challenges, creating business value while contributing to positive environmental and social outcomes.',
    image: '/images/industry-technology.jpg',
    services: [
      'Sustainable technology innovation',
      'Green data centers',
      'Sustainable product design',
      'Digital solutions for sustainability',
      'ESG in technology'
    ],
    challenges: [
      'Reducing energy consumption and carbon emissions from operations',
      'Designing products for sustainability and circularity',
      'Managing electronic waste and supply chain impacts',
      'Addressing societal concerns about technology ethics and impacts',
      'Developing technologies that enable sustainability solutions'
    ],
    caseStudies: [
      {
        title: 'Global Technology Company',
        description: 'Developed a comprehensive sustainability strategy that achieved carbon neutrality for operations, committed to 100% renewable energy, and created a $1 billion fund for climate solutions.'
      },
      {
        title: 'Enterprise Software Provider',
        description: 'Created a suite of software solutions that help clients monitor, manage, and report on environmental performance, generating a new $100 million revenue stream.'
      }
    ]
  },
  {
    id: 'consumer-goods',
    title: 'Consumer Goods',
    description: 'We help consumer goods companies respond to growing consumer demand for sustainable products, build responsible supply chains, and reduce environmental impacts across the product lifecycle.',
    longDescription: 'Consumer goods companies are increasingly expected to deliver products that are not only high-quality and affordable but also environmentally and socially responsible. We work with consumer goods manufacturers and retailers to develop comprehensive sustainability strategies that address impacts across the product lifecycle—from sourcing and manufacturing to packaging, distribution, consumption, and end-of-life. Our services help clients respond to growing consumer demand for sustainable products, build responsible and resilient supply chains, reduce environmental footprints, and communicate authentically about sustainability. By integrating sustainability into core business strategies, we help consumer goods companies create value while contributing to positive environmental and social outcomes.',
    image: '/images/industry-consumer.jpg',
    services: [
      'Sustainable product development',
      'Sustainable packaging',
      'Responsible sourcing',
      'Circular business models',
      'Consumer engagement'
    ],
    challenges: [
      'Developing products with reduced environmental impacts',
      'Implementing sustainable packaging solutions',
      'Ensuring responsible sourcing of materials and ingredients',
      'Transitioning to circular business models',
      'Communicating credibly about sustainability to consumers'
    ],
    caseStudies: [
      {
        title: 'Global Food and Beverage Company',
        description: 'Developed a sustainable packaging strategy that reduced plastic use by 25%, introduced 100% recyclable packaging across key product lines, and enhanced brand reputation.'
      },
      {
        title: 'Fashion Retailer',
        description: 'Implemented a responsible sourcing program that improved labor conditions and environmental practices across the supply chain while reducing costs through resource efficiency.'
      }
    ]
  },
  {
    id: 'real-estate',
    title: 'Real Estate',
    description: 'We assist real estate developers, owners, and investors in enhancing building sustainability, managing climate risks, and capturing value from green building practices.',
    longDescription: 'The real estate sector has significant environmental impacts through energy use, resource consumption, and land use, while also facing material risks from climate change. We work with real estate developers, owners, investors, and property managers to enhance building sustainability, manage climate risks, and capture value from green building practices. Our services include green building certifications, energy efficiency strategies, climate resilience assessments, sustainable property management approaches, and ESG integration for real estate portfolios. By combining technical expertise with financial analysis, we help real estate clients develop and implement sustainability strategies that create long-term value while reducing environmental impacts and climate risks.',
    image: '/images/industry-realestate.jpg',
    services: [
      'Green building certification',
      'Climate resilient design',
      'Sustainable property management',
      'Net zero buildings',
      'ESG in real estate'
    ],
    challenges: [
      'Reducing energy consumption and carbon emissions from buildings',
      'Enhancing resource efficiency and occupant well-being',
      'Managing physical climate risks to properties',
      'Meeting evolving regulations and stakeholder expectations',
      'Financing green building initiatives and retrofits'
    ],
    caseStudies: [
      {
        title: 'Commercial Property Developer',
        description: 'Implemented a portfolio-wide green building program that achieved LEED certification for 15 properties, reducing operating costs by 20% and increasing occupancy rates and rental premiums.'
      },
      {
        title: 'Real Estate Investment Trust',
        description: 'Developed a climate resilience strategy that identified and mitigated physical climate risks across a $2 billion property portfolio, protecting asset values and reducing insurance costs.'
      }
    ]
  }
];

export default function IndustryPage({ params }: { params: { id: string } }) {
  const industry = industryDetails.find((i) => i.id === params.id);
  
  if (!industry) {
    notFound();
  }
  
  return (
    <PageLayout>
      <div className="py-12">
        <div className="mb-8">
          <Link href="/industries" className="text-primary flex items-center gap-2">
            <span>←</span> Back to Industries
          </Link>
        </div>
        
        <h1 className="text-4xl font-bold mb-6">{industry.title}</h1>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <div className="prose max-w-none">
              <p className="text-lg font-medium mb-6">{industry.description}</p>
              <p>{industry.longDescription}</p>
              
              <h2 className="mt-8 mb-4">Key Services</h2>
              <ul>
                {industry.services.map((service, index) => (
                  <li key={index}>{service}</li>
                ))}
              </ul>
              
              <h2 className="mt-8 mb-4">Industry Challenges</h2>
              <ul>
                {industry.challenges.map((challenge, index) => (
                  <li key={index}>{challenge}</li>
                ))}
              </ul>
            </div>
          </div>
          
          <div className="lg:col-span-1">
            <div className="card bg-base-200 shadow-lg">
              <figure className="h-48 bg-gray-300">
                {/* Replace with actual images */}
                <div className="w-full h-full flex items-center justify-center bg-primary/10">
                  <span className="text-lg font-medium">{industry.title}</span>
                </div>
              </figure>
              <div className="card-body">
                <h3 className="card-title">Ready to Get Started?</h3>
                <p className="my-4">
                  Contact us today to learn how we can help your {industry.title.toLowerCase()} organization navigate sustainability challenges.
                </p>
                <Link href="/contact" className="btn btn-primary w-full">
                  Request a Consultation
                </Link>
              </div>
            </div>
            
            <div className="mt-8">
              <h3 className="text-xl font-bold mb-4">Case Studies</h3>
              <div className="space-y-4">
                {industry.caseStudies.map((caseStudy, index) => (
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
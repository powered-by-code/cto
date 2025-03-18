import PageLayout from '@/components/PageLayout';
import Link from 'next/link';
import { notFound } from 'next/navigation';

// Define case study details
const caseStudyDetails = [
  {
    id: 'global-bank-esg',
    title: 'Global Bank ESG Integration',
    industry: 'Finance',
    description: 'Helping a leading global bank integrate ESG considerations into its investment and lending decisions, enhancing long-term value creation.',
    challenge: 'A leading global investment bank with over $2 trillion in assets under management needed to strengthen its approach to ESG integration across its investment and lending activities. The bank was facing increasing pressure from investors, regulators, and clients to demonstrate how it was managing ESG risks and opportunities, but lacked a consistent framework and capabilities to do so effectively. The challenge was to develop a comprehensive ESG integration approach that would enhance decision-making, create value, and position the bank as a leader in sustainable finance.',
    solution: 'We worked closely with the bank's leadership team to develop and implement a holistic ESG integration strategy. The approach included:\n\n1. Conducting a comprehensive assessment of current ESG practices across different business units and identifying gaps and opportunities.\n\n2. Developing a customized ESG integration framework aligned with the bank's investment philosophy and processes.\n\n3. Creating sector-specific ESG guidelines for high-impact industries.\n\n4. Designing and delivering an ESG training program for investment professionals across the organization.\n\n5. Implementing robust ESG data management and analytics capabilities.\n\n6. Establishing governance structures and KPIs to drive ESG integration and monitor progress.\n\n7. Developing innovative ESG and impact investing products to meet growing client demand.',
    image: '/images/case-bank.jpg',
    results: [
      'Developed comprehensive ESG integration framework',
      'Trained over 500 investment professionals on ESG analysis',
      'Improved sustainability ratings by two tiers',
      'Mobilized $10 billion in sustainable financing',
      'Launched five new ESG-focused investment products',
      'Reduced exposure to high-carbon assets by 35%',
      'Enhanced reporting to meet TCFD recommendations'
    ],
    testimonial: {
      quote: "The ESG integration framework has transformed our approach to investment decision-making. We're now able to identify risks and opportunities we were previously missing, creating value for both our clients and society.",
      author: "Chief Investment Officer",
      company: "Global Investment Bank"
    }
  },
  {
    id: 'energy-company-transition',
    title: 'Energy Company Transition Strategy',
    industry: 'Energy',
    description: 'Supporting a traditional energy company in developing a robust transition strategy to thrive in a low-carbon future.',
    challenge: 'A Fortune 500 energy company with significant fossil fuel assets faced growing pressure from investors, regulators, and other stakeholders to address climate change. The company needed to develop a credible and ambitious transition strategy that would enable it to remain competitive in a decarbonizing world while managing financial and operational risks. The challenge was to create a strategy that balanced short-term business realities with long-term climate imperatives, maintained shareholder value, and positioned the company for success in the energy transition.',
    solution: 'We partnered with the company's executive team to develop a comprehensive climate transition strategy. The approach included:\n\n1. Conducting scenario analysis to understand potential futures and implications for the company's business model under different climate pathways.\n\n2. Assessing the company's carbon footprint across Scopes 1, 2, and 3, and identifying key reduction opportunities.\n\n3. Developing a diversification strategy to expand into renewable energy and low-carbon businesses.\n\n4. Creating a detailed transition roadmap with interim targets and key milestones.\n\n5. Building internal capabilities and adjusting organizational structures to support the transition.\n\n6. Developing a stakeholder engagement strategy to communicate the transition plan and rebuild trust.\n\n7. Redesigning executive compensation to align with climate and energy transition goals.',
    image: '/images/case-energy.jpg',
    results: [
      'Created 30-year climate transition roadmap',
      'Identified $5 billion in low-carbon investment opportunities',
      'Established science-based emissions reduction targets',
      'Aligned executive compensation with sustainability metrics',
      'Launched major renewable energy division',
      'Secured stakeholder support for transition strategy',
      'Improved climate risk disclosure and reporting'
    ],
    testimonial: {
      quote: "This transition strategy has given us a clear path forward in a rapidly changing energy landscape. We're now positioned to be part of the solution to climate change while creating long-term value for our shareholders.",
      author: "CEO",
      company: "Global Energy Corporation"
    }
  },
  {
    id: 'consumer-goods-supply-chain',
    title: 'Consumer Goods Sustainable Supply Chain',
    industry: 'Consumer Goods',
    description: 'Transforming the supply chain of a global consumer goods company to enhance sustainability and resilience.',
    challenge: 'A leading global consumer goods company with operations in over 100 countries faced significant sustainability challenges throughout its complex supply chain. Issues included greenhouse gas emissions, water use, deforestation, human rights concerns, and lack of transparency. The company was experiencing reputational damage, regulatory scrutiny, and pressure from consumers and investors to address these issues. The challenge was to transform the supply chain to enhance sustainability performance while maintaining business competitiveness and operational efficiency.',
    solution: 'We worked with the company to develop and implement a comprehensive sustainable supply chain transformation program. The approach included:\n\n1. Conducting a detailed assessment of environmental and social impacts across the supply chain to identify hotspots and prioritize interventions.\n\n2. Developing sustainable sourcing standards for key raw materials, including environmental and social criteria.\n\n3. Creating a supplier engagement program to drive sustainability improvements and build capacity among suppliers.\n\n4. Implementing technology solutions to enhance supply chain transparency and traceability.\n\n5. Establishing collaborative initiatives with industry peers, NGOs, and governments to address systemic issues.\n\n6. Redesigning packaging to reduce environmental impacts while maintaining product quality and consumer appeal.\n\n7. Developing robust metrics and reporting systems to track progress and drive continuous improvement.',
    image: '/images/case-consumer.jpg',
    results: [
      'Reduced supply chain emissions by 25%',
      'Achieved 100% sustainable sourcing for key raw materials',
      'Improved worker conditions across 200+ supplier facilities',
      'Reduced water use in manufacturing by 30%',
      'Eliminated deforestation from supply chain',
      'Enhanced supply chain transparency and resilience',
      'Improved brand reputation and consumer trust'
    ],
    testimonial: {
      quote: "The transformation of our supply chain has not only reduced our environmental footprint and improved social outcomes, but has also made our business more resilient and responsive to consumer demands for sustainability.",
      author: "Chief Supply Chain Officer",
      company: "Global Consumer Goods Company"
    }
  },
  {
    id: 'real-estate-climate-resilience',
    title: 'Real Estate Climate Resilience',
    industry: 'Real Estate',
    description: 'Developing a climate resilience strategy for a major real estate portfolio to protect asset value and ensure business continuity.',
    challenge: 'A leading real estate investment trust (REIT) with a diverse portfolio of commercial properties valued at over $20 billion faced increasing physical climate risks to its assets. Properties in coastal areas were vulnerable to sea-level rise and increased hurricane intensity, while others faced risks from extreme heat, flooding, and other climate hazards. The challenge was to develop a comprehensive climate resilience strategy to protect asset value, ensure business continuity, meet insurance requirements, and maintain investor confidence.',
    solution: 'We partnered with the REIT to develop and implement a portfolio-wide climate resilience program. The approach included:\n\n1. Conducting a detailed climate risk assessment across the portfolio, using forward-looking climate data and scenarios to identify vulnerabilities.\n\n2. Developing property-specific resilience plans with prioritized adaptation measures based on risk exposure and potential impact.\n\n3. Creating climate-resilient design guidelines for new developments and major renovations.\n\n4. Implementing critical resilience upgrades such as flood protection, backup power systems, and enhanced building envelope performance.\n\n5. Developing business continuity and emergency response plans for high-risk properties.\n\n6. Engaging with tenants to build awareness and collaborative approaches to resilience.\n\n7. Integrating climate risk considerations into acquisition, development, and divestment decisions.',
    image: '/images/case-realestate.jpg',
    results: [
      'Assessed climate risks across 150+ properties',
      'Implemented resilience measures saving $25M in potential damages',
      'Reduced insurance premiums by 15%',
      'Developed industry-leading climate risk disclosure approach',
      'Maintained business continuity during extreme weather events',
      'Enhanced property values in vulnerable locations',
      'Improved investor confidence in long-term portfolio resilience'
    ],
    testimonial: {
      quote: "The climate resilience program has transformed how we evaluate and manage our portfolio. We now have a clear understanding of our climate risks and a strategic approach to addressing them, protecting value for our investors and providing safer spaces for our tenants.",
      author: "Chief Investment Officer",
      company: "Leading Real Estate Investment Trust"
    }
  },
  {
    id: 'technology-net-zero',
    title: 'Technology Company Net Zero Strategy',
    industry: 'Technology',
    description: 'Helping a leading technology company develop and implement a credible net zero strategy across global operations and value chain.',
    challenge: 'A global technology company with operations in 30+ countries and a complex supply chain was committed to addressing climate change but needed a credible and ambitious strategy to achieve net zero emissions. The company's primary challenges included a growing carbon footprint from data centers and manufacturing, significant Scope 3 emissions from suppliers and product use, and the need to balance rapid business growth with ambitious climate targets. The company needed a comprehensive approach that would drive meaningful emissions reductions while supporting innovation and maintaining competitiveness.',
    solution: 'We worked with the company's leadership team to develop and implement a science-based net zero strategy. The approach included:\n\n1. Conducting a comprehensive carbon footprint assessment across Scopes 1, 2, and 3 to establish a baseline and identify key emission sources.\n\n2. Developing science-based targets aligned with a 1.5°C pathway and a net zero goal for 2040.\n\n3. Creating a detailed decarbonization roadmap with prioritized initiatives across operations, supply chain, and products.\n\n4. Implementing a global renewable energy procurement strategy to address data center and facility emissions.\n\n5. Engaging with key suppliers to drive upstream emissions reductions and establish supplier requirements.\n\n6. Redesigning products for energy efficiency and circularity to reduce downstream emissions.\n\n7. Implementing an internal carbon pricing mechanism to drive innovation and investment decisions.',
    image: '/images/case-tech.jpg',
    results: [
      'Achieved carbon neutrality for operations within 2 years',
      'Developed pathway to net zero across value chain by 2040',
      'Implemented internal carbon pricing to drive innovation',
      'Engaged with 100+ suppliers on emissions reduction',
      'Transitioned to 100% renewable electricity globally',
      'Reduced product use phase emissions by 35%',
      'Established industry-leading climate disclosure'
    ],
    testimonial: {
      quote: "Our net zero strategy has become a catalyst for innovation across our business. By tackling climate change, we've not only reduced our environmental impact but have also identified new market opportunities and strengthened our relationships with customers who share our commitment to sustainability.",
      author: "Chief Sustainability Officer",
      company: "Global Technology Company"
    }
  },
  {
    id: 'manufacturing-circular-economy',
    title: 'Manufacturing Circular Economy Transformation',
    industry: 'Manufacturing',
    description: 'Transforming a manufacturing company\'s business model from linear to circular, reducing resource use while creating new value streams.',
    challenge: 'A global manufacturing company with annual revenues of $5 billion faced increasing challenges related to resource scarcity, rising raw material costs, tightening environmental regulations, and growing customer expectations for sustainable products. The company's traditional linear business model (take-make-dispose) was becoming increasingly risky and less profitable. The challenge was to transform the company's approach to one based on circular economy principles, reducing environmental impact while creating new sources of value and competitive advantage.',
    solution: 'We partnered with the company to develop and implement a comprehensive circular economy transformation program. The approach included:\n\n1. Conducting a product lifecycle assessment to identify key opportunities for circular interventions.\n\n2. Redesigning key product lines for durability, repairability, and recyclability.\n\n3. Developing a product-as-a-service business model for select product categories to maintain ownership of materials and build ongoing customer relationships.\n\n4. Creating a reverse logistics system and take-back program to recover products at end-of-life.\n\n5. Establishing an advanced remanufacturing capability to process recovered products and materials.\n\n6. Building partnerships with suppliers, customers, and other stakeholders to create closed-loop material flows.\n\n7. Developing new metrics and KPIs to track circular economy performance and business impacts.',
    image: '/images/case-manufacturing.jpg',
    results: [
      'Reduced virgin material use by 40%',
      'Developed product-as-a-service model for key product lines',
      'Created take-back program recovering 65% of products',
      'Generated $45M in value from circular initiatives',
      'Decreased waste to landfill by 75%',
      'Reduced product carbon footprint by 30%',
      'Strengthened customer relationships through service-based models'
    ],
    testimonial: {
      quote: "The circular economy transformation has fundamentally changed how we think about our business. We've moved from selling products to providing ongoing value to our customers, while significantly reducing our environmental impact and creating new revenue streams.",
      author: "CEO",
      company: "Global Manufacturing Company"
    }
  }
];

export default function CaseStudyPage({ params }: { params: { id: string } }) {
  const caseStudy = caseStudyDetails.find((cs) => cs.id === params.id);
  
  if (!caseStudy) {
    notFound();
  }
  
  return (
    <PageLayout>
      <div className="py-12">
        <div className="mb-8">
          <Link href="/case-studies" className="text-primary flex items-center gap-2">
            <span>←</span> Back to Case Studies
          </Link>
        </div>
        
        <div className="text-sm opacity-70 mb-2">{caseStudy.industry}</div>
        <h1 className="text-4xl font-bold mb-6">{caseStudy.title}</h1>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <div className="prose max-w-none">
              <p className="text-lg font-medium mb-6">{caseStudy.description}</p>
              
              <h2 className="mt-8 mb-4">Challenge</h2>
              <p>{caseStudy.challenge}</p>
              
              <h2 className="mt-8 mb-4">Solution</h2>
              <p>{caseStudy.solution}</p>
              
              <h2 className="mt-8 mb-4">Results</h2>
              <ul>
                {caseStudy.results.map((result, index) => (
                  <li key={index}>{result}</li>
                ))}
              </ul>
            </div>
          </div>
          
          <div className="lg:col-span-1">
            <div className="card bg-base-200 shadow-lg">
              <figure className="h-48 bg-gray-300">
                {/* Replace with actual images */}
                <div className="w-full h-full flex items-center justify-center bg-primary/10">
                  <span className="text-lg font-medium">{caseStudy.industry}</span>
                </div>
              </figure>
              
              <div className="card-body">
                <div className="text-sm font-bold mb-2">Industry</div>
                <p className="mb-4">{caseStudy.industry}</p>
                
                <div className="text-sm font-bold mb-2">Services Provided</div>
                <p className="mb-4">
                  {caseStudy.id === 'global-bank-esg' && 'ESG Integration, Sustainable Finance, Training and Capacity Building'}
                  {caseStudy.id === 'energy-company-transition' && 'Climate Transition Strategy, Scenario Analysis, Renewable Energy Strategy'}
                  {caseStudy.id === 'consumer-goods-supply-chain' && 'Supply Chain Sustainability, Sustainable Sourcing, ESG Risk Management'}
                  {caseStudy.id === 'real-estate-climate-resilience' && 'Climate Risk Assessment, Resilience Planning, Climate Adaptation'}
                  {caseStudy.id === 'technology-net-zero' && 'Net Zero Strategy, Carbon Management, Supplier Engagement'}
                  {caseStudy.id === 'manufacturing-circular-economy' && 'Circular Economy, Product Design, Business Model Innovation'}
                </p>
                
                <Link href="/contact" className="btn btn-primary w-full mt-4">
                  Discuss Your Project
                </Link>
              </div>
            </div>
            
            {caseStudy.testimonial && (
              <div className="mt-8 card bg-base-200 shadow-lg">
                <div className="card-body">
                  <div className="flex items-start">
                    <svg className="w-12 h-12 text-primary opacity-30" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                    </svg>
                    <div className="ml-4">
                      <p className="italic mb-4">{caseStudy.testimonial.quote}</p>
                      <p className="font-bold">{caseStudy.testimonial.author}</p>
                      <p className="text-sm">{caseStudy.testimonial.company}</p>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </PageLayout>
  );
} 
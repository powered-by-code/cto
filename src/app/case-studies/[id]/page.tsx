import PageLayout from '@/components/PageLayout';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import CaseStudyQuiz from '@/components/CaseStudyQuiz';

// Define case study details
const caseStudyDetails = [
  {
    id: 'saas-scale-architecture',
    title: 'SaaS Platform Scale-Up Architecture',
    industry: 'SaaS',
    description: 'Helping a rapidly growing SaaS company redesign their architecture to handle 10x user growth without sacrificing performance or reliability.',
    challenge: 'A fast-growing B2B SaaS company with 50,000+ users was experiencing significant performance degradation and reliability issues as they scaled. Their monolithic architecture couldn\'t handle the increasing load, resulting in slow response times, frequent outages, and escalating cloud infrastructure costs. Customer complaints were rising, and the engineering team was spending more time firefighting than building new features. The company needed to redesign their technical architecture to support their growth trajectory without disrupting their existing customer base.',
    solution: 'As their fractional CTO, we worked closely with the company\'s engineering team to develop and implement a comprehensive architectural transformation. Our approach included:\n\n1. Conducting a thorough assessment of the current architecture, identifying bottlenecks and failure points.\n\n2. Designing a new microservices-based architecture with clear domain boundaries and service interfaces.\n\n3. Implementing a phased migration plan that minimized disruption to existing customers.\n\n4. Redesigning the database layer with proper sharding and caching strategies to improve performance.\n\n5. Setting up comprehensive monitoring and auto-scaling capabilities to anticipate and respond to demand fluctuations.\n\n6. Implementing CI/CD pipelines to streamline deployment and reduce time-to-market.\n\n7. Training the engineering team on best practices for building and maintaining distributed systems.',
    image: '/images/case-saas.jpg',
    results: [
      'Reduced infrastructure costs by 40% while handling 10x more traffic',
      'Improved system uptime from 99.5% to 99.99%',
      'Cut database response times by 65%',
      'Implemented robust monitoring and auto-scaling solutions',
      'Decreased deployment times from hours to minutes',
      'Reduced time spent on maintenance by 70%',
      'Enabled the business to scale to 500,000+ users without performance issues'
    ],
    testimonial: {
      quote: "The architectural transformation led by the fractional CTO was game-changing for our business. We went from constant performance issues to a rock-solid platform that easily handles our growth, all while reducing our cloud costs significantly.",
      author: "CEO",
      company: "B2B SaaS Platform"
    }
  },
  {
    id: 'fintech-compliance-security',
    title: 'FinTech Compliance & Security',
    industry: 'FinTech',
    description: 'Supporting a financial technology startup in building a secure, compliant payment processing system that met stringent regulatory requirements.',
    challenge: 'A fintech startup had developed an innovative payment processing solution but faced significant challenges meeting the stringent security and compliance requirements necessary to operate in the financial sector. They needed to achieve PCI DSS compliance, implement robust security measures, and establish the necessary controls for handling sensitive financial data. Without these elements in place, they couldn\'t launch their product or secure partnerships with financial institutions. The technical team lacked experience with financial compliance frameworks and security best practices.',
    solution: 'Working as their fractional CTO, we guided the company through the complex landscape of financial technology compliance and security. Our approach included:\n\n1. Performing a comprehensive gap analysis against PCI DSS requirements and other relevant regulatory frameworks.\n\n2. Designing a secure architecture for processing and storing sensitive payment information.\n\n3. Implementing end-to-end encryption, secure authentication, and authorization controls.\n\n4. Establishing secure development practices, including code reviews, static analysis, and penetration testing.\n\n5. Creating a comprehensive security monitoring and incident response capability.\n\n6. Developing policies, procedures, and documentation required for compliance certification.\n\n7. Preparing the team for compliance audits and guiding them through the certification process.',
    image: '/images/case-fintech.jpg',
    results: [
      'Achieved PCI DSS and SOC 2 compliance in record time',
      'Implemented secure architecture processing $10M daily',
      'Passed rigorous security audits with zero critical findings',
      'Reduced development time for compliance features by 50%',
      'Established automated security testing in the development pipeline',
      'Secured partnerships with three major financial institutions',
      'Successfully processed over $100M in transactions with zero security incidents'
    ],
    testimonial: {
      quote: "Our fractional CTO didn\'t just help us meet compliance requirements – they built security and compliance into our DNA. Their expertise was invaluable in navigating the complex regulatory landscape and gave our partners and customers confidence in our platform.",
      author: "Founder",
      company: "Payment Processing Startup"
    }
  },
  {
    id: 'marketplace-platform-scaling',
    title: 'Marketplace Platform Scaling',
    industry: 'Marketplaces',
    description: 'Transforming a struggling marketplace platform into a high-performance system capable of handling millions of transactions.',
    challenge: 'A growing online marketplace connecting service providers with consumers was experiencing critical technical issues as they scaled. Their search and matching algorithms were inefficient, resulting in poor matches and low conversion rates. The payment processing system was unreliable, leading to failed transactions and user frustration. Additionally, increasing instances of fraud were damaging the platform\'s reputation. The technical debt had accumulated to a point where new feature development had nearly halted, and the company was losing market share to competitors.',
    solution: 'As their fractional CTO, we led a comprehensive technical transformation of the marketplace platform. Our approach included:\n\n1. Redesigning the search and matching algorithms to improve relevance and conversion rates.\n\n2. Building a reliable payment and escrow system that provided security for both sides of the marketplace.\n\n3. Implementing advanced fraud detection systems using machine learning to identify suspicious patterns.\n\n4. Refactoring the codebase to reduce technical debt and improve maintainability.\n\n5. Optimizing database queries and implementing caching strategies to improve performance.\n\n6. Creating a scalable architecture that could handle growing transaction volumes efficiently.\n\n7. Establishing development best practices and quality assurance processes to prevent future issues.',
    image: '/images/case-marketplace.jpg',
    results: [
      'Redesigned matching algorithm improving conversion by 35%',
      'Built scalable payment and escrow system handling 3M+ monthly transactions',
      'Reduced fraud by 80% through advanced detection systems',
      'Cut infrastructure costs by 45% while improving performance',
      'Decreased page load times by 60%',
      'Increased platform reliability to 99.95% uptime',
      'Enabled the business to scale to over 1 million monthly active users'
    ],
    testimonial: {
      quote: "The technical transformation of our platform was remarkable. Our fractional CTO helped us overcome critical technical challenges that were holding back our growth. The improvements in matching, payments, and fraud prevention transformed the user experience and allowed us to scale confidently.",
      author: "Co-Founder",
      company: "Online Service Marketplace"
    }
  },
  {
    id: 'healthtech-hipaa-compliance',
    title: 'Health Tech HIPAA Compliance',
    industry: 'Health Tech',
    description: 'Developing a HIPAA-compliant architecture for a telehealth platform ensuring patient data security while supporting rapid growth.',
    challenge: 'A telehealth startup had developed an innovative platform connecting patients with healthcare providers, but lacked the technical expertise to implement the stringent security and privacy controls required by HIPAA regulations. Their existing architecture had significant compliance gaps, putting the company at risk of regulatory penalties and limiting their ability to partner with healthcare institutions. They needed to completely redesign their approach to handling protected health information (PHI) while maintaining a seamless user experience and supporting rapid user growth.',
    solution: 'As their fractional CTO, we guided the company through a comprehensive technical redesign focused on HIPAA compliance and scalability. Our approach included:\n\n1. Conducting a thorough HIPAA risk assessment to identify all compliance gaps in the existing system.\n\n2. Designing a secure architecture for storing and transmitting protected health information.\n\n3. Implementing end-to-end encryption for all patient data and communications.\n\n4. Establishing robust access controls, authentication systems, and audit logging.\n\n5. Creating secure video consultation functionality with appropriate technical safeguards.\n\n6. Developing integration capabilities with electronic health record (EHR) systems.\n\n7. Establishing policies, procedures, and training programs to maintain HIPAA compliance.',
    image: '/images/case-healthtech.jpg',
    results: [
      'Built fully HIPAA-compliant system passing all security audits',
      'Designed secure video consultation platform supporting 50,000+ daily consultations',
      'Implemented compliant EHR integration with major healthcare systems',
      'Created secure data architecture with end-to-end encryption',
      'Established comprehensive audit logging and monitoring',
      'Secured partnerships with five major healthcare providers',
      'Scaled to support over 1 million patient accounts while maintaining compliance'
    ],
    testimonial: {
      quote: "Our fractional CTO transformed our telehealth platform from a compliance liability into a secure, robust system that earned the trust of major healthcare providers. Their expertise in both healthcare regulations and scalable architecture was exactly what we needed to grow confidently in this highly regulated space.",
      author: "CEO",
      company: "Telehealth Platform"
    }
  },
  {
    id: 'tech-team-turnaround',
    title: 'Technical Team Turnaround',
    industry: 'E-Commerce',
    description: 'Helping an e-commerce company restructure their engineering team, improve development processes, and deliver a critical platform upgrade on time.',
    challenge: 'An established e-commerce company was facing a critical technical crisis. Their engineering team was suffering from high turnover, low morale, and poor productivity. A major platform upgrade that would enable multi-channel selling had been delayed for months, putting the company\'s growth strategy at risk. The existing codebase was plagued with technical debt, and quality issues were causing frequent production incidents. Leadership had lost confidence in the technical team\'s ability to deliver, and the company was considering outsourcing their entire engineering function.',
    solution: 'Working as their fractional CTO, we led a comprehensive turnaround of the technical organization. Our approach included:\n\n1. Conducting a thorough assessment of team structure, skills, processes, and technology stack.\n\n2. Restructuring the engineering team with clear roles, responsibilities, and reporting lines.\n\n3. Implementing agile development practices with appropriate ceremonies and tooling.\n\n4. Establishing a quality assurance process with automated testing and continuous integration.\n\n5. Creating a prioritized plan to address critical technical debt while delivering new features.\n\n6. Developing a realistic roadmap for completing the delayed platform upgrade.\n\n7. Mentoring team leads and providing hands-on guidance to rebuild confidence and capability.',
    image: '/images/case-team.jpg',
    results: [
      'Restructured engineering team reducing turnover from 40% to 5%',
      'Implemented agile processes that increased delivery velocity by 60%',
      'Successfully delivered major platform upgrade that had been delayed for months',
      'Reduced critical bugs by 75% through improved QA processes',
      'Decreased production incidents by 80%',
      'Improved team morale and collaboration across departments',
      'Established sustainable development practices that continued after our engagement'
    ],
    testimonial: {
      quote: "The transformation of our engineering team exceeded all expectations. Our fractional CTO not only helped us deliver the platform upgrade we desperately needed but rebuilt our entire technical organization. They turned a struggling team into a high-performing unit that now drives our business forward rather than holding it back.",
      author: "COO",
      company: "Multi-channel E-commerce Company"
    }
  },
  {
    id: 'ai-ml-infrastructure',
    title: 'AI/ML Infrastructure Optimization',
    industry: 'AI/ML',
    description: 'Building efficient data pipelines and deployment architecture for an AI startup, significantly reducing costs while improving model performance.',
    challenge: 'An AI startup specializing in computer vision had developed promising machine learning models, but was struggling with the infrastructure needed to deploy them at scale. Their data processing pipeline was inefficient and couldn\'t handle the volume of images required for training. Model training was expensive and time-consuming, limiting their ability to iterate and improve. Their inference architecture couldn\'t support production workloads, and costs were spiraling out of control as they scaled. These technical limitations were preventing the company from meeting customer requirements and achieving product-market fit.',
    solution: 'As their fractional CTO, we redesigned their entire AI/ML infrastructure and deployment architecture. Our approach included:\n\n1. Designing an efficient data ingestion and processing pipeline capable of handling millions of images.\n\n2. Implementing data validation, versioning, and feature stores to ensure model reproducibility.\n\n3. Optimizing the model training infrastructure to reduce costs and accelerate development cycles.\n\n4. Creating a scalable inference architecture with appropriate caching and batching strategies.\n\n5. Implementing MLOps practices for continuous training, evaluation, and deployment of models.\n\n6. Establishing monitoring systems to track model performance and data drift in production.\n\n7. Developing a cost-optimization strategy that balanced performance requirements with infrastructure expenses.',
    image: '/images/case-aiml.jpg',
    results: [
      'Reduced model training costs by 70% through infrastructure optimization',
      'Implemented MLOps pipeline reducing deployment time from days to minutes',
      'Created efficient data pipeline processing 500M+ records daily',
      'Designed scalable inference architecture handling 10,000 requests per second',
      'Decreased model training time by 85%',
      'Improved model accuracy by 15% through better data management',
      'Reduced overall cloud infrastructure costs by 60%'
    ],
    testimonial: {
      quote: "Our fractional CTO\'s expertise in AI infrastructure was transformative for our business. They helped us build systems that not only scaled efficiently but did so at a fraction of our previous costs. The improvements in our data pipeline and inference architecture allowed us to deliver on customer commitments that previously seemed impossible.",
      author: "Founder & CEO",
      company: "Computer Vision AI Startup"
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
            <span>←</span> Back to Success Stories
          </Link>
        </div>
        
        <div className="text-sm opacity-70 mb-2">{caseStudy.industry}</div>
        <h1 className="text-4xl font-bold mb-6">{caseStudy.title}</h1>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <div className="prose max-w-none">
              <p className="text-lg font-medium mb-6">{caseStudy.description}</p>
              
              <h2 className="mt-8 mb-4">The Challenge</h2>
              <p>{caseStudy.challenge}</p>
              
              <h2 className="mt-8 mb-4">Our Approach</h2>
              <p>{caseStudy.solution}</p>
              
              <h2 className="mt-8 mb-4">Results Achieved</h2>
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
                  {caseStudy.id === 'saas-scale-architecture' && 'Fractional CTO, Architecture Design, System Scaling, Cloud Optimization'}
                  {caseStudy.id === 'fintech-compliance-security' && 'Fractional CTO, Security Architecture, Compliance Strategy, FinTech Advisory'}
                  {caseStudy.id === 'marketplace-platform-scaling' && 'Fractional CTO, Marketplace Systems, Technical Strategy, Performance Optimization'}
                  {caseStudy.id === 'healthtech-hipaa-compliance' && 'Fractional CTO, HIPAA Compliance, Healthcare Systems, Security Implementation'}
                  {caseStudy.id === 'tech-team-turnaround' && 'Fractional CTO, Team Leadership, Process Implementation, Technical Mentoring'}
                  {caseStudy.id === 'ai-ml-infrastructure' && 'Fractional CTO, ML Infrastructure, Data Pipeline Design, Cloud Optimization'}
                </p>
                
                <Link href="/contact" className="btn btn-primary w-full mt-4">
                  Schedule a Consultation
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

            <div className="mt-8 card bg-base-200 shadow-lg">
              <div className="card-body">
                <h3 className="card-title text-lg">Facing Similar Challenges?</h3>
                <p className="my-4">
                  Our fractional CTO services can help you navigate technical challenges like these and accelerate your business growth.
                </p>
                <div className="flex flex-col gap-3">
                  <Link href="/services" className="btn btn-outline w-full">
                    Explore Our Services
                  </Link>
                  <Link href="/assessment" className="btn btn-outline w-full">
                    Take the CTO Assessment
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Case Study Quiz Section */}
        <CaseStudyQuiz caseStudyId={params.id} />
      </div>
    </PageLayout>
  );
} 
import PageLayout from '@/components/PageLayout';
import Link from 'next/link';
import { notFound } from 'next/navigation';

// Define industry details
const industryDetails = [
  {
    id: 'saas',
    title: 'SaaS Startups',
    description: 'We help SaaS founders build scalable architectures, optimize cloud infrastructure, implement efficient development processes, and create technical roadmaps that support rapid growth.',
    longDescription: 'Software-as-a-Service businesses face unique technical challenges that require specialized expertise. Our fractional CTO services are tailored to help SaaS founders navigate the complexities of building, scaling, and optimizing their platforms. We understand the critical importance of architecture decisions that enable future growth without requiring costly rewrites. Our team works with SaaS companies at all stages, from early prototypes to scaling enterprises, providing the technical leadership needed to make informed decisions about cloud infrastructure, database design, API architecture, security implementations, and development workflows. We help you build systems that can scale with your user base while keeping technical debt manageable and operating costs optimized.',
    image: '/images/industry-saas.jpg',
    services: [
      'Cloud architecture optimization',
      'Scalable infrastructure design',
      'Tech debt management',
      'DevOps implementation',
      'SaaS security best practices'
    ],
    challenges: [
      'Building scalable architectures that support rapid growth',
      'Optimizing cloud infrastructure costs as usage increases',
      'Implementing efficient CI/CD pipelines and deployment processes',
      'Designing multi-tenant systems with proper data isolation',
      'Balancing feature development with technical debt management'
    ],
    caseStudies: [
      {
        title: 'HR Technology Platform',
        description: 'Redesigned cloud architecture to support 10x user growth while reducing infrastructure costs by 35% through intelligent resource allocation and caching strategies.'
      },
      {
        title: 'B2B Analytics SaaS',
        description: 'Implemented a microservices architecture and DevOps practices that reduced deployment time from days to minutes and improved system reliability during rapid customer acquisition.'
      }
    ]
  },
  {
    id: 'fintech',
    title: 'FinTech',
    description: 'We assist FinTech startups with secure architecture design, regulatory compliance, payment integrations, and building high-reliability systems that handle financial data with the utmost integrity.',
    longDescription: 'Financial technology companies operate in a highly regulated environment where security, reliability, and compliance are paramount. Our fractional CTO services provide the specialized expertise FinTech founders need to navigate complex technical and regulatory requirements. We help design secure systems that protect sensitive financial data, implement robust architecture that ensures transaction integrity, and develop compliance frameworks that satisfy regulatory requirements. Our team has experience with payment processing systems, banking integrations, blockchain implementations, and financial data analysis platforms. We work with your team to build scalable, secure, and compliant technology that gives your users confidence while allowing your business to innovate and grow.',
    image: '/images/industry-fintech.jpg',
    services: [
      'Secure payment architectures',
      'Financial data management',
      'Regulatory tech compliance',
      'Banking API integrations',
      'High-reliability system design'
    ],
    challenges: [
      'Designing systems that meet financial regulatory requirements',
      'Building secure payment processing infrastructure',
      'Implementing robust data protection and privacy controls',
      'Creating high-availability architectures for financial transactions',
      'Integrating with legacy banking systems and financial APIs'
    ],
    caseStudies: [
      {
        title: 'Payment Processing Startup',
        description: 'Designed and implemented a secure payment architecture that achieved PCI DSS compliance while processing over 100,000 transactions daily with 99.99% uptime.'
      },
      {
        title: 'Wealth Management Platform',
        description: 'Built a scalable financial data system that integrated with multiple banking APIs, providing users with a unified view of their investments while maintaining strict security controls.'
      }
    ]
  },
  {
    id: 'marketplaces',
    title: 'Marketplaces',
    description: 'We support marketplace founders in building platforms that scale with growing users and transactions, implementing efficient matching algorithms, and designing systems that provide exceptional experiences for all sides of the market.',
    longDescription: 'Marketplace businesses face the unique challenge of serving multiple user groups simultaneously while ensuring smooth transactions and maintaining platform integrity. Our fractional CTO services help marketplace founders build robust technical foundations that support sustainable growth. We provide expertise in designing scalable architectures that handle increasing transaction volumes, implementing efficient search and matching algorithms, developing fraud prevention systems, and creating seamless payment and fulfillment flows. Our team understands the technical complexities of building systems that serve both sides of a marketplace equally well, with proper incentives and mechanisms to encourage participation and trust. We help you make technology decisions that support your specific marketplace model and growth trajectory.',
    image: '/images/industry-marketplace.jpg',
    services: [
      'Marketplace architecture design',
      'Search and matching optimization',
      'Payment and escrow systems',
      'Fraud prevention systems',
      'Scale-ready infrastructure'
    ],
    challenges: [
      'Building platforms that serve multiple user types effectively',
      'Implementing efficient search and discovery mechanisms',
      'Designing secure payment and escrow systems',
      'Developing fraud detection and prevention systems',
      'Scaling infrastructure to handle increasing transaction volumes'
    ],
    caseStudies: [
      {
        title: 'Service Provider Marketplace',
        description: 'Implemented an intelligent matching system that increased booking conversions by 45% while reducing customer service inquiries through improved provider selection algorithms.'
      },
      {
        title: 'B2B Equipment Marketplace',
        description: 'Designed a secure transaction system with escrow functionality that built trust among users and increased high-value transactions by 60% year-over-year.'
      }
    ]
  },
  {
    id: 'e-commerce',
    title: 'E-Commerce',
    description: 'We enable e-commerce companies to build robust shopping experiences, optimize conversion rates through technical improvements, and implement inventory, fulfillment, and payment systems that scale with your business.',
    longDescription: 'E-commerce businesses require technical solutions that deliver seamless shopping experiences while efficiently managing inventory, payments, and fulfillment. Our fractional CTO services help e-commerce founders make strategic technology decisions that drive growth and operational efficiency. We provide expertise in selecting and customizing e-commerce platforms, optimizing site performance for improved conversion rates, implementing inventory management systems, and integrating with payment processors and shipping providers. Our team helps you navigate technical decisions around content delivery networks, mobile optimization, personalization engines, and security implementations. We work with your team to build scalable, reliable e-commerce systems that provide exceptional customer experiences while supporting your operational needs.',
    image: '/images/industry-ecommerce.jpg',
    services: [
      'E-commerce platform selection',
      'Custom storefront development',
      'Payment and checkout optimization',
      'Inventory system integration',
      'Performance optimization'
    ],
    challenges: [
      'Building high-performance storefronts that convert visitors into customers',
      'Implementing secure and frictionless checkout processes',
      'Integrating inventory, fulfillment, and shipping systems',
      'Creating personalized shopping experiences at scale',
      'Optimizing mobile experiences for e-commerce conversions'
    ],
    caseStudies: [
      {
        title: 'Fashion E-commerce Brand',
        description: 'Redesigned the technical architecture and implemented performance optimizations that reduced page load times by 60%, increasing conversion rates by 25% and average order value by 15%.'
      },
      {
        title: 'Multi-channel Retailer',
        description: 'Implemented an integrated inventory system that unified online and physical store stock management, reducing oversells by 95% and enabling same-day fulfillment options.'
      }
    ]
  },
  {
    id: 'health-tech',
    title: 'Health Tech',
    description: 'We help health tech founders navigate the unique challenges of building healthcare applications, including HIPAA compliance, secure patient data management, and integration with existing healthcare systems.',
    longDescription: 'Healthcare technology companies operate in a highly regulated environment where data security, privacy compliance, and system reliability are critical. Our fractional CTO services provide the specialized expertise health tech founders need to navigate these complex requirements while building innovative solutions. We help design HIPAA-compliant architectures, implement secure patient data management systems, develop integration strategies for electronic health records and medical devices, and create scalable platforms for telehealth and medical data analysis. Our team understands both the technical and regulatory aspects of building healthcare applications, enabling you to create solutions that meet strict compliance requirements while delivering excellent user experiences for patients and healthcare providers.',
    image: '/images/industry-healthtech.jpg',
    services: [
      'HIPAA-compliant architecture',
      'Healthcare data security',
      'Medical API integrations',
      'Telemedicine implementations',
      'Regulatory compliance'
    ],
    challenges: [
      'Building systems that meet HIPAA and other healthcare regulations',
      'Designing secure architecture for sensitive patient data',
      'Integrating with electronic health record (EHR) systems',
      'Implementing telemedicine and remote monitoring solutions',
      'Navigating the complex healthcare IT ecosystem'
    ],
    caseStudies: [
      {
        title: 'Telemedicine Platform',
        description: 'Designed and implemented a HIPAA-compliant video consultation system that scaled to support over 10,000 daily patient consultations with 99.9% uptime during rapid growth.'
      },
      {
        title: 'Healthcare Data Analytics Startup',
        description: 'Built a secure data pipeline that integrated with multiple EHR systems while maintaining strict HIPAA compliance, enabling actionable insights for healthcare providers.'
      }
    ]
  },
  {
    id: 'ai-ml',
    title: 'AI/ML Startups',
    description: 'We assist AI and machine learning startups in building efficient data pipelines, selecting the right infrastructure for model training and deployment, and creating scalable architectures for ML-powered applications.',
    longDescription: 'Artificial intelligence and machine learning startups face unique technical challenges in data management, model development, and production deployment. Our fractional CTO services provide the specialized expertise AI/ML founders need to build effective, scalable, and maintainable systems. We help design efficient data pipelines for collecting, cleaning, and preparing training data, select appropriate infrastructure for model training and deployment, implement MLOps practices for continuous model improvement, and create scalable architectures for ML-powered applications. Our team understands the technical complexities of building AI systems that perform reliably in production environments while allowing for ongoing refinement and optimization. We work with your data scientists and engineers to turn promising models into production-ready systems that deliver value to users.',
    image: '/images/industry-ai.jpg',
    services: [
      'ML infrastructure design',
      'Data pipeline architecture',
      'Model deployment strategies',
      'AI application scaling',
      'ML ops implementation'
    ],
    challenges: [
      'Designing efficient data pipelines for model training',
      'Selecting appropriate infrastructure for AI/ML workloads',
      'Implementing effective MLOps practices for model deployment',
      'Scaling AI applications to handle increasing workloads',
      'Balancing model performance with infrastructure costs'
    ],
    caseStudies: [
      {
        title: 'Computer Vision Startup',
        description: 'Designed a scalable infrastructure for real-time image processing that reduced inference costs by 60% while supporting processing of over 1 million images daily.'
      },
      {
        title: 'NLP Platform',
        description: 'Implemented an MLOps pipeline that automated model training, evaluation, and deployment, reducing time-to-production for new models from weeks to hours.'
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
              
              <h2 className="mt-8 mb-4">Technical Expertise</h2>
              <ul>
                {industry.services.map((service, index) => (
                  <li key={index}>{service}</li>
                ))}
              </ul>
              
              <h2 className="mt-8 mb-4">Common Technical Challenges</h2>
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
                  Schedule a free consultation to discuss your {industry.title.toLowerCase()} technical challenges and how our fractional CTO services can help.
                </p>
                <Link href="/contact" className="btn btn-primary w-full">
                  Book a Consultation
                </Link>
              </div>
            </div>
            
            <div className="mt-8">
              <h3 className="text-xl font-bold mb-4">Success Stories</h3>
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

            <div className="mt-8">
              <div className="card bg-base-200 shadow-lg">
                <div className="card-body">
                  <h3 className="card-title">Explore Our Services</h3>
                  <p className="my-4">
                    Learn more about our specialized fractional CTO services for {industry.title.toLowerCase()}.
                  </p>
                  <Link href="/services" className="btn btn-outline w-full">
                    View Services
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
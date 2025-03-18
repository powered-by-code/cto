import PageLayout from '@/components/PageLayout';
import Resources from '@/components/Resources';
import Link from 'next/link';

// Define resource categories
const categories = [
  { id: 'reports', name: 'Reports & Research' },
  { id: 'guides', name: 'Guides & Toolkits' },
  { id: 'webinars', name: 'Webinars & Events' },
  { id: 'blog', name: 'Blog Posts' }
];

// Define featured resources
const featuredResources = [
  {
    id: 'net-zero-guide',
    title: 'The Complete Guide to Net Zero Strategy',
    category: 'guides',
    description: 'A comprehensive guide to developing and implementing credible net zero strategies for organizations across sectors.',
    image: '/images/resource-net-zero.jpg',
    date: 'May 10, 2023'
  },
  {
    id: 'climate-risk-report',
    title: 'Climate Risk and Financial Disclosure: 2023 Outlook',
    category: 'reports',
    description: 'An analysis of emerging trends in climate risk assessment and disclosure, with practical insights for financial institutions and corporations.',
    image: '/images/resource-climate-risk.jpg',
    date: 'March 15, 2023'
  },
  {
    id: 'esg-integration-webinar',
    title: 'ESG Integration in Investment Decision-Making',
    category: 'webinars',
    description: 'A recorded webinar featuring experts discussing best practices for embedding ESG considerations into investment processes.',
    image: '/images/resource-esg-webinar.jpg',
    date: 'April 21, 2023'
  },
  {
    id: 'supply-chain-resilience',
    title: 'Building Resilient and Sustainable Supply Chains',
    category: 'blog',
    description: 'A blog post exploring strategies for enhancing supply chain sustainability and resilience in the face of climate change and other disruptions.',
    image: '/images/resource-supply-chain.jpg',
    date: 'June 5, 2023'
  },
  {
    id: 'sustainability-reporting',
    title: 'Navigating the Evolving Landscape of Sustainability Reporting',
    category: 'guides',
    description: 'A practical guide to sustainability reporting frameworks and standards, with recommendations for effective disclosure strategies.',
    image: '/images/resource-reporting.jpg',
    date: 'February 28, 2023'
  },
  {
    id: 'circular-economy-report',
    title: 'Circular Economy: Opportunities and Implementation',
    category: 'reports',
    description: 'A research report on circular economy business models and their potential for creating value while reducing environmental impacts.',
    image: '/images/resource-circular.jpg',
    date: 'January 17, 2023'
  }
];

// Define all resources
const allResources = [
  ...featuredResources,
  {
    id: 'biodiversity-business',
    title: 'Biodiversity and Business: Managing Risks and Creating Opportunities',
    category: 'reports',
    description: 'An examination of how businesses can address biodiversity loss and ecosystem degradation while creating sustainable value.',
    image: '/images/resource-biodiversity.jpg',
    date: 'June 22, 2023'
  },
  {
    id: 'sustainable-finance-trends',
    title: 'Sustainable Finance Trends to Watch in 2023',
    category: 'blog',
    description: 'An analysis of key developments in sustainable finance, from green bonds to impact investing and beyond.',
    image: '/images/resource-finance-trends.jpg',
    date: 'January 10, 2023'
  },
  {
    id: 'tcfd-implementation',
    title: 'TCFD Implementation: Lessons from Early Adopters',
    category: 'webinars',
    description: 'A webinar featuring companies that have successfully implemented the TCFD recommendations, sharing insights and best practices.',
    image: '/images/resource-tcfd.jpg',
    date: 'March 30, 2023'
  },
  {
    id: 'esg-data-management',
    title: 'ESG Data: Collection, Management, and Analysis',
    category: 'guides',
    description: 'A practical guide to developing robust systems for ESG data management to support decision-making and reporting.',
    image: '/images/resource-esg-data.jpg',
    date: 'May 25, 2023'
  },
  {
    id: 'renewable-energy-procurement',
    title: 'Corporate Renewable Energy Procurement Strategies',
    category: 'guides',
    description: 'A toolkit for companies looking to source renewable energy, covering PPAs, RECs, on-site generation, and other approaches.',
    image: '/images/resource-renewable.jpg',
    date: 'April 12, 2023'
  },
  {
    id: 'climate-scenario-analysis',
    title: 'Climate Scenario Analysis for Business Strategy',
    category: 'webinars',
    description: 'A webinar on using climate scenarios to inform business strategy, risk management, and disclosure.',
    image: '/images/resource-scenario.jpg',
    date: 'February 15, 2023'
  }
];

export default function ResourcesPage() {
  return (
    <PageLayout>
      <div className="py-12">
        <h1 className="text-4xl font-bold mb-6">Resources</h1>
        <p className="text-lg mb-12 max-w-3xl">
          Explore our collection of reports, guides, webinars, and other resources to help you navigate the complex landscape of sustainability and climate action.
        </p>
        
        <Resources />
        
        <hr className="border-gray-800 my-12" />
        
        <div className="flex flex-wrap gap-2 mb-8">
          <button className="btn btn-sm btn-primary">All</button>
          {categories.map((category) => (
            <button key={category.id} className="btn btn-sm btn-outline">
              {category.name}
            </button>
          ))}
        </div>
        
        <h2 className="text-2xl font-bold mb-8">Featured Resources</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {featuredResources.map((resource) => (
            <div key={resource.id} className="card bg-base-200 shadow-lg">
              <figure className="h-48 bg-gray-300">
                {/* Replace with actual images */}
                <div className="w-full h-full flex items-center justify-center bg-primary/10">
                  <span className="text-lg font-medium">{resource.category}</span>
                </div>
              </figure>
              <div className="card-body">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-xs badge badge-primary">{resource.category}</span>
                  <span className="text-xs opacity-70">{resource.date}</span>
                </div>
                <h3 className="card-title text-xl">{resource.title}</h3>
                <p className="my-4">{resource.description}</p>
                <div className="card-actions justify-end mt-6">
                  <Link href={`/resources/${resource.id}`} className="btn btn-primary">
                    Read More
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <hr className="border-gray-800 my-12" />
        
        <h2 className="text-2xl font-bold mb-8">All Resources</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {allResources.map((resource) => (
            <div key={resource.id} className="card bg-base-200 shadow-sm">
              <div className="card-body">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-xs badge badge-primary">{resource.category}</span>
                  <span className="text-xs opacity-70">{resource.date}</span>
                </div>
                <h3 className="card-title text-lg">{resource.title}</h3>
                <p className="my-2 text-sm">{resource.description}</p>
                <div className="card-actions justify-end mt-4">
                  <Link href={`/resources/${resource.id}`} className="btn btn-sm btn-primary">
                    Read More
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Link href="/subscribe" className="btn btn-primary">
            Subscribe to Our Newsletter
          </Link>
        </div>
      </div>
    </PageLayout>
  );
} 
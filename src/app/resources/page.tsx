import PageLayout from '@/components/PageLayout';
import Resources from '@/components/Resources';
import Link from 'next/link';

// Define resource categories
const categories = [
  "Technical Leadership",
  "Technology Strategy",
  "Tech Team Building",
  "System Architecture",
  "CTO Guides"
];

// Define featured resources
const featuredResources = [
  {
    id: "cto-guide-for-startups",
    title: "The Complete Guide to Fractional CTO Services for Startups",
    category: "Technical Leadership",
    description: "Learn how a fractional CTO can help your startup build scalable technology, make strategic decisions, and accelerate growth - without the full-time executive cost.",
    image: "/images/resource-cto-guide.jpg",
    date: "June 15, 2023"
  },
  {
    id: "tech-team-building",
    title: "Building High-Performance Technical Teams: A Framework for Founders",
    category: "Tech Team Building",
    description: "Discover proven strategies for recruiting, structuring, and developing a technical team that delivers results, even if you don't have a technical background.",
    image: "/images/resource-team-building.jpg",
    date: "May 3, 2023"
  },
  {
    id: "tech-stack-decisions",
    title: "Making Technology Stack Decisions That Won't Haunt You Later",
    category: "Technology Strategy",
    description: "Avoid costly technology mistakes with this guide to selecting the right tech stack for your business needs, future scalability, and resource constraints.",
    image: "/images/resource-tech-stack.jpg",
    date: "April 18, 2023"
  },
  {
    id: "cloud-cost-optimization",
    title: "Cloud Cost Optimization: Stop Overpaying for Infrastructure",
    category: "System Architecture",
    description: "Practical strategies to reduce your cloud infrastructure costs by 30-50% without compromising performance, reliability, or scalability.",
    image: "/images/resource-cloud-costs.jpg",
    date: "March 7, 2023"
  },
  {
    id: "technical-debt-management",
    title: "Technical Debt: When to Pay It Down and When to Live With It",
    category: "Technology Strategy",
    description: "Learn how to identify, measure, and strategically manage technical debt to maintain development velocity while building sustainable systems.",
    image: "/images/resource-tech-debt.jpg",
    date: "February 22, 2023"
  },
  {
    id: "cto-assessment",
    title: "Do You Need a CTO? Take the Assessment",
    category: "CTO Guides",
    description: "Answer 10 questions to evaluate your company's technical leadership needs and determine if a full-time, fractional, or advisory CTO would benefit your business.",
    image: "/images/resource-assessment.jpg",
    date: "January 15, 2023"
  }
];

// Define all resources
const allResources = [
  ...featuredResources,
  {
    id: "scaling-architecture",
    title: "Scalable Architecture Patterns for Growing Applications",
    category: "System Architecture",
    description: "A technical deep dive into architectural patterns that allow your applications to scale efficiently as user demand increases.",
    image: "/images/resource-scaling.jpg",
    date: "December 5, 2022"
  },
  {
    id: "non-technical-founder-guide",
    title: "The Non-Technical Founder's Guide to Making Technical Decisions",
    category: "Technical Leadership",
    description: "How to effectively evaluate technical options, communicate with developers, and make informed technology decisions without a technical background.",
    image: "/images/resource-non-technical.jpg",
    date: "November 20, 2022"
  },
  {
    id: "tech-due-diligence",
    title: "Technical Due Diligence: What Investors Look For in Your Technology",
    category: "Technology Strategy",
    description: "Prepare your startup for technical due diligence with this guide covering what investors examine and how to address common technical red flags.",
    image: "/images/resource-due-diligence.jpg",
    date: "October 14, 2022"
  },
  {
    id: "devops-implementation",
    title: "Implementing DevOps in Small Teams: A Practical Guide",
    category: "Tech Team Building",
    description: "How to implement effective DevOps practices in small development teams to improve deployment frequency, reliability, and development speed.",
    image: "/images/resource-devops.jpg",
    date: "September 8, 2022"
  }
];

export default function ResourcesPage() {
  return (
    <PageLayout>
      <div className="py-12">
        <h1 className="text-4xl font-bold mb-6">Resources</h1>
        <p className="text-lg mb-12 max-w-3xl">
          Explore our library of guides, frameworks, and tools designed to help founders and executives make better technology decisions and build stronger technical teams.
        </p>
        
        <Resources />
        
        <hr className="border-gray-800 my-12" />
        
        <h2 className="text-3xl font-bold mb-8">Featured Resources</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {featuredResources.map((resource) => (
            <div key={resource.id} className="card bg-base-200 shadow-lg h-full">
              <figure className="h-48 bg-gray-300">
                {/* Replace with actual images */}
                <div className="w-full h-full flex items-center justify-center bg-primary/10">
                  <span className="text-lg font-medium">{resource.category}</span>
                </div>
              </figure>
              <div className="card-body">
                <div className="text-xs opacity-70 mb-2">{resource.category} • {resource.date}</div>
                <h3 className="card-title text-xl">{resource.title}</h3>
                <p className="my-4">{resource.description}</p>
                <div className="card-actions justify-end mt-auto">
                  <Link href={`/resources/${resource.id}`} className="btn btn-primary">
                    Read More
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <h2 className="text-3xl font-bold mb-8">All Resources</h2>
        
        <div className="mb-8 flex flex-wrap gap-3">
          <button className="btn btn-sm btn-primary">All Categories</button>
          {categories.map((category) => (
            <button key={category} className="btn btn-sm btn-outline">
              {category}
            </button>
          ))}
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {allResources.map((resource) => (
            <div key={resource.id} className="card card-side bg-base-200 shadow-lg">
              <figure className="w-1/3 bg-gray-300">
                {/* Replace with actual images */}
                <div className="w-full h-full flex items-center justify-center bg-primary/10">
                  <span className="text-sm font-medium">{resource.category}</span>
                </div>
              </figure>
              <div className="card-body w-2/3">
                <div className="text-xs opacity-70 mb-1">{resource.category} • {resource.date}</div>
                <h3 className="card-title text-lg">{resource.title}</h3>
                <p className="text-sm line-clamp-2">{resource.description}</p>
                <div className="card-actions justify-end">
                  <Link href={`/resources/${resource.id}`} className="btn btn-sm btn-primary">
                    Read More
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 p-8 bg-base-200 rounded-lg">
          <h2 className="text-2xl font-bold mb-4">Subscribe to Our Newsletter</h2>
          <p className="mb-6">Get the latest resources, articles, and insights on technical leadership delivered to your inbox monthly.</p>
          <div className="flex gap-4 flex-col sm:flex-row">
            <input type="email" placeholder="Your email address" className="input input-bordered flex-grow" />
            <button className="btn btn-primary">Subscribe</button>
          </div>
        </div>
      </div>
    </PageLayout>
  );
} 
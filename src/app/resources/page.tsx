import PageLayout from '@/components/PageLayout';
import Link from 'next/link';
import Image from 'next/image';

// Define resource categories
const resourceCategories = [
  {
    id: 'guides',
    title: 'Technical Leadership Guides',
    description: 'Comprehensive guides on building and scaling technical teams, architecture decisions, and technology strategy.',
    resources: [
      {
        title: 'Building a High-Performing Engineering Team',
        description: 'Learn the key principles and practices for building and maintaining an exceptional engineering team.',
        type: 'Guide',
        readTime: '15 min read',
        image: '/images/resources/team-building.jpg'
      },
      {
        title: 'Technical Architecture Decision Making',
        description: 'A framework for making confident technical decisions that align with business objectives.',
        type: 'Guide',
        readTime: '12 min read',
        image: '/images/resources/architecture.jpg'
      },
      {
        title: 'Scaling Your Tech Stack',
        description: 'Best practices for scaling your technology infrastructure as your business grows.',
        type: 'Guide',
        readTime: '18 min read',
        image: '/images/resources/scaling.jpg'
      }
    ]
  },
  {
    id: 'templates',
    title: 'Templates & Tools',
    description: 'Ready-to-use templates and tools to help you implement best practices in your organization.',
    resources: [
      {
        title: 'Technical Interview Guide',
        description: 'A comprehensive template for conducting effective technical interviews.',
        type: 'Template',
        readTime: '10 min read',
        image: '/images/resources/interview.jpg'
      },
      {
        title: 'Engineering Team Structure Template',
        description: 'A customizable template for designing your engineering organization structure.',
        type: 'Template',
        readTime: '8 min read',
        image: '/images/resources/structure.jpg'
      },
      {
        title: 'Technical Due Diligence Checklist',
        description: 'A thorough checklist for evaluating technical aspects of potential investments or acquisitions.',
        type: 'Tool',
        readTime: '15 min read',
        image: '/images/resources/due-diligence.jpg'
      }
    ]
  },
  {
    id: 'case-studies',
    title: 'Case Studies & Success Stories',
    description: 'Real-world examples of how companies have successfully implemented technical leadership strategies.',
    resources: [
      {
        title: 'How a FinTech Startup Scaled Their Platform',
        description: 'Learn how we helped a fintech company scale their platform while maintaining security and compliance.',
        type: 'Case Study',
        readTime: '20 min read',
        image: '/images/resources/fintech-case.jpg'
      },
      {
        title: 'Transforming a Legacy SaaS Platform',
        description: 'A detailed look at how we helped modernize a legacy system while maintaining business continuity.',
        type: 'Case Study',
        readTime: '18 min read',
        image: '/images/resources/saas-case.jpg'
      },
      {
        title: 'Optimizing Tech Infrastructure for Growth',
        description: 'How we helped a marketplace platform optimize their technology stack for better performance.',
        type: 'Case Study',
        readTime: '15 min read',
        image: '/images/resources/marketplace-case.jpg'
      }
    ]
  }
];

export default function ResourcesPage() {
  return (
    <PageLayout>
      <div className="py-12">
        <h1 className="text-4xl font-bold mb-6">Resources</h1>
        <p className="text-lg mb-12 max-w-3xl">
          Access our collection of guides, templates, and case studies designed to help you build and scale your technical organization effectively.
        </p>
        
        <div className="space-y-16">
          {resourceCategories.map((category) => (
            <section key={category.id}>
              <h2 className="text-2xl font-bold mb-4">{category.title}</h2>
              <p className="text-gray-600 mb-8">{category.description}</p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {category.resources.map((resource, index) => (
                  <div key={index} className="card bg-base-200 shadow-lg">
                    <figure className="relative h-48">
                      <Image
                        src={resource.image}
                        alt={resource.title}
                        fill
                        className="object-cover"
                      />
                    </figure>
                    <div className="card-body">
                      <div className="flex justify-between items-start mb-2">
                        <span className="badge badge-primary">{resource.type}</span>
                        <span className="text-sm text-gray-500">{resource.readTime}</span>
                      </div>
                      <h3 className="card-title text-xl">{resource.title}</h3>
                      <p className="mt-2">{resource.description}</p>
                      <div className="card-actions justify-end mt-4">
                        <Link href={`/resources/${category.id}/${index}`} className="btn btn-primary">
                          Read More
                        </Link>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          ))}
        </div>
      </div>
    </PageLayout>
  );
} 
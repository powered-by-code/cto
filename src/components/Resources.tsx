import Link from 'next/link';
import Image from 'next/image';
import data from '@/data.json';

interface ResourceLinkProps {
  title: string;
  type: string;
  readTime: string;
  href: string;
}

const ResourceLink: React.FC<ResourceLinkProps> = ({ title, type, readTime, href }) => {
  return (
    <Link 
      href={href} 
      className="btn bg-base-300 hover:bg-primary btn-block justify-between text-left font-normal rounded-full"
    >
      <div className="flex items-center">
        <span>{title}</span>
        <span className="text-xs ml-2 opacity-70">{type} • {readTime}</span>
      </div>
      <span className="text-lg">→</span>
    </Link>
  );
};

const Resources: React.FC = () => {
  // Get the first resource from each category
  const featuredResources = data.resources.flatMap(category => 
    category.resources.slice(0, 1).map(resource => ({
      title: resource.title,
      type: resource.type,
      readTime: resource.readTime,
      href: `/resources/${category.id}/${resource.title.toLowerCase().replace(/\s+/g, '-')}`
    }))
  ).slice(0, 3); // Limit to 3 resources

  return (
    <section className="py-12">
      <h2 className="text-3xl font-bold mb-8 text-center">Resources</h2>
      <div className="max-w-xl mx-auto flex flex-col gap-3">
        {featuredResources.map((resource, index) => (
          <ResourceLink 
            key={index} 
            title={resource.title} 
            type={resource.type}
            readTime={resource.readTime}
            href={resource.href} 
          />
        ))}
        <div className="text-center mt-4">
          <Link href="/resources" className="link link-primary">
            VIEW ALL RESOURCES
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Resources; 
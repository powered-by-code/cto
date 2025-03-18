import Link from 'next/link';

interface ResourceLinkProps {
  title: string;
  href: string;
}

const ResourceLink: React.FC<ResourceLinkProps> = ({ title, href }) => {
  return (
    <Link 
      href={href} 
      className="btn bg-base-300 text-white hover:bg-primary hover:text-white btn-block justify-between text-left font-normal rounded-full"
    >
      <span>{title}</span>
      <span className="text-lg">→</span>
    </Link>
  );
};

const Resources: React.FC = () => {
  const resources = [
    { title: "Who is a Fractional CTO?", href: "/resources/what-is-fractional-cto" },
    { title: "Why Should I Hire a CTO for My Company", href: "/resources/why-hire-cto" },
  ];

  return (
    <section className="py-12">
      <h2 className="text-3xl font-bold mb-8 text-white text-center">Resources</h2>
      <div className="max-w-xl mx-auto flex flex-col gap-3">
        {resources.map((resource, index) => (
          <ResourceLink 
            key={index} 
            title={resource.title} 
            href={resource.href} 
          />
        ))}
      </div>
    </section>
  );
};

export default Resources; 
import Link from 'next/link';
import Image from 'next/image';
import data from '@/data.json';

export default function Resources() {
  // Get the first 3 resources
  const featuredResources = data.resources.slice(0, 3).map(resource => ({
    title: resource.title,
    type: resource.type,
    readTime: resource.readTime,
    description: resource.description,
    image: resource.image,
    id: resource.id
  }));

  return (
    <section className="py-16 bg-base-200">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Featured Resources</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Access our collection of guides, templates, and case studies designed to help you build and scale your technical organization effectively.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredResources.map((resource) => (
            <div key={resource.id} className="card bg-base-100 shadow-lg">
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
                  <Link href={`/resources/${resource.id}`} className="btn btn-primary">
                    Read More
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link href="/resources" className="btn btn-primary">
            View All Resources
          </Link>
        </div>
      </div>
    </section>
  );
} 
import Link from 'next/link';
import Image from 'next/image';
import data from '@/data.json';

interface CaseStudyCardProps {
  id: string;
  title: string;
  industry: string;
  description: string;
  image?: string;
}

const CaseStudyCard: React.FC<CaseStudyCardProps> = ({ id, title, industry, description, image }) => {
  return (
    <Link href={`/case-studies/${id}`} className="card bg-base-200 shadow-md hover:shadow-lg transition-shadow overflow-hidden">
      <figure className="relative h-48 w-full">
        {image ? (
          <Image
            src={image} 
            alt={title}
            fill
            className="object-cover"
          />
        ) : (
          <div className="bg-base-300 w-full h-full flex items-center justify-center">
            <span className="text-base-content/50">No image</span>
          </div>
        )}
      </figure>
      <div className="card-body p-4">
        <div className="badge badge-primary mb-1">{industry}</div>
        <h3 className="font-bold text-lg mb-2">{title}</h3>
        <p className="text-sm opacity-80 line-clamp-2">{description}</p>
      </div>
    </Link>
  );
};

const CaseStudies: React.FC = () => {
  // Get case studies from data.json
  const caseStudies = data.caseStudies;

  return (
    <section className="py-12">
      <h2 className="text-3xl font-bold mb-8">Case Studies</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {caseStudies.slice(0, 3).map((caseStudy, index) => (
          <CaseStudyCard 
            key={index} 
            id={caseStudy.id}
            title={caseStudy.title} 
            industry={caseStudy.industry}
            description={caseStudy.description}
            image={caseStudy.image}
          />
        ))}
      </div>
    </section>
  );
};

export default CaseStudies; 
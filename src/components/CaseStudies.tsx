import Link from 'next/link';
import Image from 'next/image';

interface CaseStudyCardProps {
  title: string;
  category: string;
  image?: string;
}

const CaseStudyCard: React.FC<CaseStudyCardProps> = ({ title, category, image }) => {
  return (
    <div className="card bg-base-300 shadow-md overflow-hidden">
      <figure className="relative h-48 w-full">
        <img
          src={ "https://placehold.co/600x400"} 
          alt={title}
          // fill
          className="object-cover"
        />
      </figure>
      <div className="card-body p-4">
        <div className="text-xs opacity-70">{category}</div>
        <h3 className="font-semibold">{title}</h3>
        <div className="opacity-70 text-sm">Aeneianum</div>
      </div>
    </div>
  );
};

const CaseStudies: React.FC = () => {
  const caseStudies = [
    { title: "Fractional CTO for a local NGO", category: "Project", image: "/images/case-study-1.jpg" },
    { title: "Fractional CTO for a local NGO", category: "Project", image: "/images/case-study-2.jpg" },
    { title: "Fractional CTO for a local NGO", category: "Project", image: "/images/case-study-3.jpg" }
  ];

  return (
    <section className="py-12">
      <h2 className="text-3xl font-bold mb-8 ">Case Studies</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {caseStudies.map((caseStudy, index) => (
          <CaseStudyCard 
            key={index} 
            title={caseStudy.title} 
            category={caseStudy.category}
            image={caseStudy.image}
          />
        ))}
      </div>
    </section>
  );
};

export default CaseStudies; 
import Link from 'next/link';

interface CaseStudyCardProps {
  title: string;
  category: string;
}

const CaseStudyCard: React.FC<CaseStudyCardProps> = ({ title, category }) => {
  return (
    <div className="card bg-base-300 shadow-md">
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
    { title: "Fractional CTO for a local NGO", category: "Project" },
    { title: "Fractional CTO for a local NGO", category: "Project" },
    { title: "Fractional CTO for a local NGO", category: "Project" }
  ];

  return (
    <section className="py-12">
      <h2 className="text-3xl font-bold mb-8 ">Case Studies</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {caseStudies.map((caseStudy, index) => (
          <CaseStudyCard key={index} title={caseStudy.title} category={caseStudy.category} />
        ))}
      </div>
    </section>
  );
};

export default CaseStudies; 
const PartnerLogo: React.FC<{ name: string; category: string }> = ({ name, category }) => {
  return (
    <div className="flex flex-col items-center p-4">
      <div className="h-16 w-16 bg-base-300 rounded-full flex items-center justify-center mb-2">
        {/* Logo placeholder */}
        <span className="text-xs">{name.charAt(0)}</span>
      </div>
      <div className="text-sm font-medium">{name}</div>
      <div className="text-xs">{category}</div>
    </div>
  );
};

const Partners: React.FC = () => {
  const clientPartners = [
    { name: "TechStart", category: "SaaS Startup" },
    { name: "FinEdge", category: "Fintech" },
    { name: "HealthSync", category: "HealthTech" },
    { name: "RetailAI", category: "E-commerce" }
  ];

  const techPartners = [
    { name: "AWS", category: "Cloud Provider" },
    { name: "GCP", category: "Cloud Provider" },
    { name: "Azure", category: "Cloud Provider" },
    { name: "Digital Ocean", category: "Cloud Provider" }
  ];

  return (
    <section className="py-12">
      <div className="mb-12">
        <h2 className="text-3xl font-bold mb-4">Trusted By Innovative Companies</h2>
        <p className="mb-8">We've helped clients across various industries build scalable technology solutions</p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {clientPartners.map((partner, index) => (
            <PartnerLogo key={index} name={partner.name} category={partner.category} />
          ))}
        </div>
      </div>
      
      <div>
        <h2 className="text-3xl font-bold mb-4">Technology Partners</h2>
        <p className="mb-8">We work with leading technology providers to deliver the best solutions</p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {techPartners.map((partner, index) => (
            <PartnerLogo key={index} name={partner.name} category={partner.category} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Partners; 
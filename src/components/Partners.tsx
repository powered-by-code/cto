import data from "@/data.json";

const PartnerLogo: React.FC<{ name: string; category: string }> = ({
  name,
  category,
}) => {
  return (
    <div className="flex flex-col items-center p-4">
      <div className="h-16 w-16 bg-base-300 rounded-full flex items-center justify-center mb-2">
        {/* Logo placeholder */}
        <span className="text-xs">{name.charAt(0)}</span>
      </div>
      <div className="text-sm font-medium">{name}</div>
      <div className="text-xs opacity-70">{category}</div>
    </div>
  );
};

const Partners: React.FC = () => {
  // Use industry data from data.json to create example partners
  const industries = data.industries;
  const clientPartners = industries
    .map((industry) => {
      // Create example company names based on industries
      const companySuffixes = ["Tech", "AI", "Hub", "Logic", "Edge"];
      const randomSuffix =
        companySuffixes[Math.floor(Math.random() * companySuffixes.length)];
      const name = industry.title.split(" ")[0] + randomSuffix;

      return {
        name,
        category: industry.title,
      };
    })
    .slice(0, 4); // Limit to 4 partners

  return (
    <section className="py-12">
      <div className="mb-12">
        <h2 className="text-3xl font-bold mb-4">Trusted by Industry Leaders</h2>
        <p className="text-base-content/80">
          We're proud to partner with leading companies in the tech industry
          globally.{" "}
        </p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {clientPartners.map((partner, index) => (
            <PartnerLogo
              key={index}
              name={partner.name}
              category={partner.category}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Partners;

const PartnerLogo: React.FC<{ name: string }> = ({ name }) => {
  return (
    <div className="flex flex-col items-center p-4">
      <div className="h-16 w-16 bg-base-300 rounded-full flex items-center justify-center mb-2">
        {/* Logo placeholder */}
      </div>
      <div className="text-sm">{name}</div>
    </div>
  );
};

const Partners: React.FC = () => {
  const partners = [
    "Politics Zoom",
    "Daily Minute",
    "Funny Stories",
    "Sports Time",
    "Mindfulness"
  ];

  return (
    <section className="py-12">
      <h2 className="text-3xl font-bold mb-8">Partners</h2>
      <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
        {partners.map((partner, index) => (
          <PartnerLogo key={index} name={partner} />
        ))}
      </div>
    </section>
  );
};

export default Partners; 
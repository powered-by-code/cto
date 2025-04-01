import Link from "next/link";
import {
  Building2,
  Stethoscope,
  ShoppingCart,
  CloudUpload,
  Store,
  School,
  Banknote,
} from "lucide-react";
import data from "@/data.json";
import Image from "next/image";
import { sortByOrder } from "@/utils/sortByOrder";

// const IndustryTag: React.FC<{ tag: string }> = ({ tag }) => {
//   return (
//     <span className="badge badge-outline">{tag}</span>
//   );
// };

// Simple IndustryCard component
interface IndustryCardProps {
  title: string;
  id: string;
  clickable?: boolean;
}

const IndustryCard: React.FC<IndustryCardProps> = ({
  title,
  id,
  clickable = true,
}) => {
  const getIcon = (id: string) => {
    switch (id) {
      case "fintech":
        return <Building2 className="w-5 h-5" />;
      case "health-tech":
        return <Stethoscope className="w-5 h-5" />;
      case "e-commerce":
        return <ShoppingCart className="w-5 h-5" />;
      case "saas":
        return <CloudUpload className="w-5 h-5" />;
      case "marketplaces":
        return <Store className="w-5 h-5" />;
      case "education":
        return <School className="w-5 h-5" />;
      case "fintech":
        return <Banknote className="w-5 h-5" />;
      default:
        return <Building2 className="w-5 h-5" />;
    }
  };

  const CardContent = () => (
    <div className="card bg-base-100 h-full hover:shadow-xl transition-all shadow-md">
      <div className="card-body flex flex-row items-center justify-start gap-3 py-4">
        <div className="p-2 rounded-full bg-secondary/20">{getIcon(id)}</div>
        <h3 className="card-title m-0">{title}</h3>
      </div>
    </div>
  );

  if (!clickable) {
    return <CardContent />;
  }

  return (
    <Link href={`/industries/${id}`} className="block h-full">
      <CardContent />
    </Link>
  );
};

const Industries = () => {
  const industries = data.industries.sort(sortByOrder);

  return (
    <section className="py-8 relative">
      <div className="relative z-10 container mx-auto px-4 ">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 items-stretch h-90">
          {/* Left side image */}
          <div className="relative rounded-lg overflow-hidden shadow-lg h-full">
            <Image
              src="/industries.png"
              alt="Industries Overview"
              className="object-cover w-full h-full"
              width={1000}
              height={1000}
            />
          </div>

          {/* Right side content */}
          <div>
            {/* Title and description moved here */}
            <div className="flex flex-col items-start mb-6">
              <span className="px-3 py-1 text-sm font-medium rounded-full bg-secondary/20 text-secondary mb-2 animate-pulse shadow-sm">
                Industries We Serve
              </span>
              <h2 className="text-3xl font-bold mb-3 animate-fade-in-up">
                Our Expertise
              </h2>
              <p className="text-base-content/80 mb-6">
                We provide expert technical leadership to help businesses build
                scalable, secure, and high-performing systems. By leveraging our
                services, we've empowered companies to drive innovation and
                achieve sustainable growth at every stage of their journey.
              </p>
              <div className="w-16 h-1 bg-secondary/30 rounded mb-6"></div>
            </div>

            {/* Industries grid */}
            <div className="grid grid-cols-3 gap-3 stagger-animate w-full">
              {industries.map((industry, index) => (
                <div
                  key={industry.id}
                  className="animate-fade-in-up"
                  style={{ animationDelay: `${0.1 + index * 0.1}s` }}
                >
                  <IndustryCard
                    title={industry.title}
                    id={industry.id}
                    clickable={false}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="text-center mt-12">
          {/* TODO: uncomment this when we have a industries page */}
          {/* <Link 
            href="/industries" 
            className="btn btn-secondary btn-lg shadow-md hover:shadow-lg transition-all hover:-translate-y-1 text-base-100"
          >
            VIEW ALL INDUSTRIES
          </Link> */}
        </div>
      </div>
    </section>
  );
};

export default Industries;

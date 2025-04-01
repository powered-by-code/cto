import Link from "next/link";
import Image from "next/image";
import { Check, ArrowRight } from "lucide-react";

interface ServiceCardProps {
  id: string;
  title: string;
  description?: string;
  features?: string[];
  image?: string;
  className?: string;
}

const ServiceCard = ({
  id,
  title,
  description,
  features,
  image,
  className = "",
}: ServiceCardProps) => {
  // Generate random delays and durations for more variation
  const animationDelay = `${Math.random() * 2}s`;
  const animationDuration = `${7 + Math.random() * 2}s`; // Random duration between 7-9s
  
  return (
    <Link
      href={`/services/${id}`}
      className={`card hover:shadow-xl transition-shadow h-full ${className}`}
    >
      <figure className="relative overflow-hidden">
        {image && (
          <div className="bg-base-200">
            <div 
              className="animate-float hover:scale-105 transition-transform duration-500"
              style={{ 
                animationDelay,
                animationDuration
              }}
            >
              <Image
                src={image}
                alt={title}
                width={600}
                height={200}
                className="h-30 object-scale-down"
              />
            </div>
          </div>
        )}
      </figure>
      <div className="card-body p-6 flex flex-col justify-between">
        <div>
          <div className="text-xs uppercase tracking-wider opacity-70 font-medium mb-2">
            Service
          </div>
          <h3 className="font-semibold text-lg mb-4">{title}</h3>
          {features && features.length > 0 && (
            <ul className="space-y-2">
              {features.map((feature, index) => (
                <li key={index} className="flex items-start">
                  <Check className="w-4 h-4 text-primary mt-0.5 mr-2 flex-shrink-0" />
                  <span className="text-sm">{feature}</span>
                </li>
              ))}
            </ul>
          )}
        </div>
        <div className="flex items-center text-primary mt-4">
          Learn More <ArrowRight className="ml-2 w-4 h-4" />
        </div>
      </div>
    </Link>
  );
};

export default ServiceCard;

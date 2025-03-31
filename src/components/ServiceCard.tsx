import Link from "next/link";
import Image from "next/image";

interface ServiceCardProps {
  id: string;
  title: string;
  description?: string;
  features?: string[];
  image?: string;
  compact?: boolean;
  className?: string;
}

const ServiceCard = ({
  id,
  title,
  description,
  features,
  image,
  compact = false,
  className = "",
}: ServiceCardProps) => {
  if (compact) {
    return (
      <Link
        href={`/services/${id}`}
        className={`card hover:shadow-xl transition-shadow h-full ${className}`}
      >
        <figure>
          {image && (
            <Image 
              src={image} 
              alt={title} 
              width={600} 
              height={200} 
              className="h-30 object-scale-down bg-base-200"
            />
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
                {features.slice(0, 3).map((feature, index) => (
                  <li key={index} className="flex items-start">
                    <svg
                      className="w-4 h-4 text-primary mt-0.5 mr-2 flex-shrink-0"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <span className="text-sm">{feature}</span>
                  </li>
                ))}
              </ul>
            )}
          </div>
          <div className="flex items-center text-primary mt-4">
            Learn More <span className="ml-2">→</span>
          </div>
        </div>
      </Link>
    );
  }

  return (
    <div
      className={`card shadow-lg hover:shadow-xl transition-shadow ${className}`}
    >
      <figure>
        {image && (
          <div className="mb-4 relative w-full h-48">
            <Image src={image} alt={title} fill  />
          </div>
        )}
      </figure>
      <div className="card-body">
        <h3 className="card-title">{title}</h3>
        <p className="my-4">{description}</p>
        {features && features.length > 0 && (
          <div>
            <ul className="space-y-2">
              {features.slice(0, 3).map((feature, index) => (
                <li key={index} className="flex items-start">
                  <svg
                    className="w-5 h-5 text-primary mt-0.5 mr-2 flex-shrink-0"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  {feature}
                </li>
              ))}
            </ul>
          </div>
        )}
        <div className="card-actions justify-end mt-4">
          <Link href={`/services/${id}`} className="btn btn-primary">
            Learn More
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;

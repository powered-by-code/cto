import Link from "next/link";
// import data from "@/data.json";
// const { meetingLink } = data;
import MeetingButton from "./MeetingButton";
import { Clock, Award, Users } from "lucide-react";

interface CTAProps {
  additionalCTA?: {
    href: string;
    label: string;
  };
}

const iconMap = {
  Clock,
  Award,
  Users,
} as const;

const ctaData = {
  badge: "Strategic Tech Leadership",
  title: "Is Your Startup Ready for Tech Leadership?",
  description:
    "Take our 2-minute CTO Needs Assessment to find out how a fractional CTO can help solve your technical challenges and accelerate your growth.",
  defaultCTA: "Free Consultation",
  features: [
    {
      text: "Takes only 2 minutes",
      icon: "Clock",
    },
    {
      text: "Free personalized report",
      icon: "Award",
    },
    {
      text: "Expert recommendations",
      icon: "Users",
    },
  ],
};

const CTA: React.FC<CTAProps> = ({ additionalCTA }) => {
  // Get meeting link from data.json
  // const meetingLink = data.meetingLink;

  return (
    <section className="py-16 relative">
      {/* Background SVG Decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <svg
          className="absolute -top-24 -right-24 w-64 h-64 text-primary/5 animate-float"
          style={{ animationDelay: "1s" }}
          viewBox="0 0 200 200"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill="currentColor"
            d="M30.5,-51.2C37.9,-45.7,41.3,-33.7,48.9,-22.3C56.5,-10.9,68.3,-0.1,70.8,12.4C73.3,24.8,66.6,38.8,56.2,48.2C45.8,57.5,31.9,62.1,18.1,65.2C4.4,68.3,-9.2,69.8,-22.4,67.2C-35.7,64.6,-48.6,57.9,-57.6,47.2C-66.6,36.4,-71.5,21.7,-73,6.8C-74.5,-8.1,-72.5,-23.2,-65.1,-35C-57.7,-46.9,-44.9,-55.4,-32.1,-58.2C-19.2,-60.9,-6.4,-57.9,3.3,-53.3C13,-48.7,23.1,-42.6,30.5,-35.1L30.5,-35.1Z"
            transform="translate(100 100)"
          />
        </svg>
        <svg
          className="absolute -bottom-16 -left-16 w-48 h-48 text-secondary/5 animate-float"
          style={{ animationDelay: "2s" }}
          viewBox="0 0 200 200"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill="currentColor"
            d="M44.3,-76C58.3,-69.1,71.3,-59.3,79.9,-46.2C88.6,-33.1,92.8,-16.5,92.2,-0.3C91.6,15.8,86.3,31.7,77.4,45.4C68.5,59.2,56,70.8,41.4,77.2C26.8,83.7,10.2,84.9,-6.2,83.3C-22.5,81.6,-38.7,77,-51.8,68.2C-64.9,59.4,-74.9,46.4,-81,31.6C-87.1,16.8,-89.4,0.1,-87.3,-16.3C-85.2,-32.7,-78.8,-48.8,-67.5,-60.9C-56.2,-73,-40.1,-81.1,-24.6,-86C-9.1,-90.9,5.9,-92.7,20.1,-88.5C34.2,-84.3,47.5,-74,58.2,-62.9C68.9,-51.7,77,-39.6,72.9,-29.9Z"
            transform="translate(100 100)"
          />
        </svg>
      </div>

      <div className="card bg-gradient-to-br from-base-100 to-base-200 shadow-2xl border border-primary/10 relative overflow-hidden backdrop-blur-sm">
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>

        <div className="card-body text-center relative z-10 py-12">
          <div className="inline-block px-4 py-1 rounded-full bg-primary/10 text-primary font-medium text-sm mx-auto mb-4 animate-pulse">
            {ctaData.badge}
          </div>

          <h2 className="text-4xl font-bold mb-4">{ctaData.title}</h2>
          <p className="mb-8 max-w-2xl mx-auto text-lg">
            {ctaData.description}
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            {additionalCTA ? (
              <>
                <Link
                  href={additionalCTA.href}
                  className="btn btn-primary btn-lg shadow-lg hover:shadow-xl transition-all hover:-translate-y-1"
                >
                  {additionalCTA.label}
                </Link>
                <MeetingButton
                  variant="outline"
                  className="btn-lg"
                  text={ctaData.defaultCTA}
                />
              </>
            ) : (
              <MeetingButton
                className="btn-primary btn-lg shadow-lg hover:shadow-xl transition-all hover:-translate-y-1"
                text={ctaData.defaultCTA}
              />
            )}
          </div>

          <div className="mt-8 flex flex-wrap justify-center gap-8 text-sm text-base-content/70">
            {ctaData.features.map((feature, index) => {
              const IconComponent =
                iconMap[feature.icon as keyof typeof iconMap];
              return (
                <div key={index} className="flex items-center">
                  <IconComponent className="h-5 w-5 mr-2 text-primary" />
                  <span>{feature.text}</span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;

import Link from 'next/link';

const Hero: React.FC = () => {
  return (
    <div className="hero bg-base-100 py-12">
      <div className="hero-content flex-col md:flex-row justify-between w-full">
        <div className="text-left max-w-xl flex flex-col gap-4">
          <div className="text-base mb-2 text-primary">
            <span className="font-medium">Strategic Technical Leadership for Growing Companies</span>
          </div>
          <h1 className="text-4xl font-bold">CTO-Level Expertise Without the Full-Time Cost</h1>
          <p className="py-4 text-lg">
            CTOprime delivers experienced technical leadership exactly when you need it. 
            Our fractional CTO services help startups and growing companies make confident technical decisions, 
            build scalable systems, and accelerate growth.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link href="/contact" className="btn btn-primary">
              Schedule a Free Consultation
            </Link>
            <Link href="/services" className="btn btn-outline">
              Explore Our Services
            </Link>
          </div>
          <div className="mt-4 flex items-center text-sm">
            <span className="mr-2">✓</span>
            <span>Flexible engagement models</span>
            <span className="mx-2">•</span>
            <span>Fixed monthly pricing</span>
            <span className="mx-2">•</span>
            <span>No long-term contracts</span>
          </div>
        </div>
        <div className="bg-base-300 rounded-lg w-full md:w-1/2 h-48 md:h-64 flex items-center justify-center">
          <span className="text-3xl">👨‍💻</span>
        </div>
      </div>
    </div>
  );
};

export default Hero; 
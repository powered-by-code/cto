import Link from 'next/link';

const Hero: React.FC = () => {
  return (
    <div className="hero bg-base-100 py-12">
      <div className="hero-content flex-col md:flex-row justify-between w-full">
        <div className="text-left max-w-xl">
          <div className="text-base mb-2 text-primary">Podcast episodes</div>
          <h1 className="text-4xl font-bold ">Hire a Fractional CTO from Anywhere</h1>
          <p className="py-4 text-gray-300">
            A cat named Mittens has made national headlines after she managed to find her way 
            back home, despite being lost for over a week.
          </p>
          <Link href="/consultation" className="btn btn-primary">
            FREE CONSULTATION WITH RUBEN <span className="ml-2">👋</span>
          </Link>
        </div>
        <div className="bg-base-300 rounded-lg w-full md:w-1/2 h-48 md:h-64"></div>
      </div>
    </div>
  );
};

export default Hero; 
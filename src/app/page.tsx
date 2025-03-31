import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import Industries from '@/components/Industries';
import CaseStudies from '@/components/CaseStudies';
import Resources from '@/components/Resources';
import CTA from '@/components/CTA';
import Partners from '@/components/Partners';
import Footer from '@/components/Footer';
import data from '@/data.json';

export default function Home() {
  // Find the fractional CTO service and get its additionalCTA
  const fractionalCTOService = data.services.find(s => s.id === 'fractional-cto');
  const additionalCTA = fractionalCTOService?.additionalCTA;

  return (
    <main className="bg-base-100 min-h-screen relative">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        <div className="absolute top-0 inset-x-0 h-96 bg-gradient-to-b from-primary/10 to-transparent"></div>
        <div className="absolute bottom-0 inset-x-0 h-96 bg-gradient-to-t from-secondary/10 to-transparent"></div>
        
        {/* Graph Grid Background */}
        <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
        
        {/* Removing Tech & Growth Data Visualization */}
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <Navbar />
        <Hero />
        
        <hr className="border-base-content/10 my-12" />
        
        <Services />
        
        <hr className="border-base-content/10 my-12" />
        
        <Industries />
        
        <hr className="border-base-content/10 my-12" />
        
        <CaseStudies />
        
        <hr className="border-base-content/10 my-12" />
        
        <Resources />
        
        <hr className="border-base-content/10 my-12" />
        
        <CTA additionalCTA={additionalCTA} />
        
        <hr className="border-base-content/10 my-12" />
        
        <Partners />
      </div>
      
      <Footer />
    </main>
  );
}

import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import Industries from '@/components/Industries';
import CaseStudies from '@/components/CaseStudies';
import Resources from '@/components/Resources';
import CTA from '@/components/CTA';
import Partners from '@/components/Partners';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="bg-base-100 min-h-screen">
      <div className="container mx-auto px-4">
        <Navbar />
        <Hero />
        
        <hr className="border-gray-800 my-8" />
        
        <Services />
        
        <hr className="border-gray-800 my-8" />
        
        <Industries />
        
        <hr className="border-gray-800 my-8" />
        
        <CaseStudies />
        
        <hr className="border-gray-800 my-8" />
        
        <Resources />
        
        <hr className="border-gray-800 my-8" />
        
        <CTA />
        
        <hr className="border-gray-800 my-8" />
        
        <Partners />
      </div>
      
      <Footer />
    </main>
  );
}

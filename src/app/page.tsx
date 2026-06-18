import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import Industries from '@/components/Industries';
import CaseStudies from '@/components/CaseStudies';
import FeaturedArticles from '@/components/FeaturedArticles';
import CTA from '@/components/CTA';
import Partners from '@/components/Partners';
import Footer from '@/components/Footer';
import data from '@/data.json';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'AI Consultancy & Tech Services for SMBs | Cubeunity',
  description: 'AI strategy, web platform development, legacy modernization, and tech services for SMBs and startups. Expert guidance in plain language — no technical knowledge required.',
  keywords: 'AI consultancy, web platform development, legacy modernization, technical IT services, company brain, AI integration, tech consultancy',
  openGraph: {
    title: 'AI Consultancy & Tech Services for SMBs | Cubeunity',
    description: 'AI strategy, web platform development, legacy modernization, and tech services for SMBs and startups. Expert guidance in plain language — no technical knowledge required.',
    type: 'website',
  },
};

export default function Home() {
  const aiStrategyService = data.services.find(s => s.id === 'ai-strategy');
  const additionalCTA = aiStrategyService?.additionalCTA;

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
        
        <hr className="border-base-content/10 my-6" />
        
        <Services />
        
        <hr className="border-base-content/10 my-6" />
        
        <Industries />
        
        <hr className="border-base-content/10 my-6" />

        {/* TODO: uncomment when case studies are ready */}
        
        {/* <CaseStudies /> */}
        
        <hr className="border-base-content/10 my-6" />
        
        <FeaturedArticles />
        
        {/* <hr className="border-base-content/10 my-6" /> */}
        
        <CTA additionalCTA={additionalCTA} />
        
        <hr className="border-base-content/10 my-6" />
        
        <Partners />
      </div>
      
      <Footer />
    </main>
  );
}

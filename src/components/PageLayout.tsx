import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import CTA from '@/components/CTA';
import data from '@/data.json';
interface PageLayoutProps {
  children: React.ReactNode;
  showCTA?: boolean;
}

const PageLayout: React.FC<PageLayoutProps> = ({ children, showCTA = false }) => {
  const fractionalCTOService = data.services.find(s => s.id === 'fractional-cto');
  const additionalCTA = fractionalCTOService?.additionalCTA;
  return (
    <main className="bg-base-100 min-h-screen">
      <div className="container mx-auto px-4">
        <Navbar />
        
        {children}
        
        {showCTA && (
          <>
            <hr className="border-gray-800 my-8" />
            <CTA additionalCTA={additionalCTA} />
          </>
        )}
      </div>
      
      <Footer />
    </main>
  );
};

export default PageLayout; 
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import CTA from '@/components/CTA';

interface PageLayoutProps {
  children: React.ReactNode;
  showCTA?: boolean;
}

const PageLayout: React.FC<PageLayoutProps> = ({ children, showCTA = true }) => {
  return (
    <main className="bg-base-100 min-h-screen">
      <div className="container mx-auto px-4">
        <Navbar />
        
        {children}
        
        {showCTA && (
          <>
            <hr className="border-gray-800 my-8" />
            <CTA />
          </>
        )}
      </div>
      
      <Footer />
    </main>
  );
};

export default PageLayout; 
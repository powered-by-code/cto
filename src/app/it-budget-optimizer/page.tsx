'use client';
import React, { useEffect } from 'react';
import { trackEvent, EventNames, capturePosthogData } from '@/utils/analytics';
import { useSearchParams } from 'next/navigation';

import dynamic from 'next/dynamic';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

// Use dynamic import with SSR disabled for the calculator component
const CostCalculator = dynamic(
  () => import('@/components/CostCalculator'),
  { ssr: false }
);

export default function CostCalculatorPage() {
  const searchParams = useSearchParams();
  
  useEffect(() => {
    // Capture PostHog data first
    capturePosthogData();
    
    // Track page view with enhanced data from localStorage
    trackEvent(EventNames.IT_BUDGET_OPTIMIZER, { email: "" }, {
      action: "page_viewed"
    });
    
    // Check if we have calculatorData in URL params (from email)
    const calculatorData = searchParams.get('calculatorData');
    if (calculatorData) {
      try {
        // Try to parse the decoded calculator data
        const decodedData = decodeURIComponent(calculatorData);
        const parsedData = JSON.parse(decodedData);
        
        console.log('Loading calculator data from URL:', parsedData);
        
        // Use environment variable for the domain
        const domain = process.env.NEXT_PUBLIC_DOMAIN || 'cubeunity.com';
        
        // Track that the user came from email
        trackEvent(EventNames.IT_BUDGET_OPTIMIZER, { email: parsedData.email || "" }, {
          action: "loaded_from_email",
          calculatorData: parsedData,
          fromDomain: domain
        });
        
        // Trigger PDF download automatically
        setTimeout(() => {
          const windowGlobal = window as any;
          // Call the generatePDF function
          if (typeof windowGlobal !== 'undefined' && windowGlobal.generatePDF) {
            windowGlobal.generatePDF();
          } else {
            console.log('PDF generator not ready yet, waiting...');
            // Try again after a delay
            setTimeout(() => {
              if (typeof windowGlobal !== 'undefined' && windowGlobal.generatePDF) {
                windowGlobal.generatePDF();
              }
            }, 2000);
          }
        }, 1500);
      } catch (error) {
        console.error('Error parsing calculator data from URL:', error);
      }
    }
  }, [searchParams]);
  
  return (
    <main className="bg-base-100 min-h-screen relative">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        <div className="absolute top-0 inset-x-0 h-48 sm:h-96 bg-gradient-to-b from-primary/10 to-transparent"></div>
        <div className="absolute bottom-0 inset-x-0 h-48 sm:h-96 bg-gradient-to-t from-secondary/10 to-transparent"></div>
      </div>

      <div className="container mx-auto px-2 sm:px-4 relative z-10">
        <Navbar />
        
        <div className="py-1 sm:py-3">
          <div className="max-w-3xl mx-auto text-center mb-2 sm:mb-6">
            <h1 className="text-xl sm:text-3xl md:text-4xl font-bold mb-1 sm:mb-2 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent h-8 sm:h-12">IT Budget Optimizer</h1>
            <p className="text-xs sm:text-base opacity-80">
              Discover how much your organization could save by switching from commercial tools to open source alternatives.
            </p>
          </div>
          
          <CostCalculator />
          
          <div className="max-w-3xl mx-auto mt-4 sm:mt-10">
            <div className="grid sm:grid-cols-2 gap-2 sm:gap-4 text-xs sm:text-sm">
              <div className="card bg-base-100 shadow-sm sm:shadow-md">
                <div className="card-body p-2 sm:p-4">
                  <h2 className="card-title text-sm sm:text-lg">Why Consider Open Source?</h2>
                  <ul className="list-disc pl-4 space-y-0.5 sm:space-y-1 mt-1 sm:mt-2 text-xs sm:text-sm">
                    <li>Eliminate licensing costs</li>
                    <li>Avoid vendor lock-in</li>
                    <li>Customize solutions to your exact needs</li>
                    <li>Benefit from community-driven innovation</li>
                    <li>Improve security through transparency</li>
                    <li>Scale without license limitations</li>
                  </ul>
                </div>
              </div>
              
              <div className="card bg-base-100 shadow-sm sm:shadow-md">
                <div className="card-body p-2 sm:p-4">
                  <h2 className="card-title text-sm sm:text-lg">Our Migration Support</h2>
                  <ul className="list-disc pl-4 space-y-0.5 sm:space-y-1 mt-1 sm:mt-2 text-xs sm:text-sm">
                    <li>Comprehensive migration planning</li>
                    <li>Tool selection tailored to your needs</li>
                    <li>Data migration assistance</li>
                    <li>User training and onboarding</li>
                    <li>Custom integration development</li>
                    <li>Ongoing support and maintenance</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </main>
  );
} 
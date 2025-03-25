'use client';
import React from 'react';
import dynamic from 'next/dynamic';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

// Use dynamic import with SSR disabled for the calculator component
const CostCalculator = dynamic(
  () => import('@/components/CostCalculator'),
  { ssr: false }
);

export default function CostCalculatorPage() {
  return (
    <main className="bg-base-100 min-h-screen relative">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        <div className="absolute top-0 inset-x-0 h-96 bg-gradient-to-b from-primary/10 to-transparent"></div>
        <div className="absolute bottom-0 inset-x-0 h-96 bg-gradient-to-t from-secondary/10 to-transparent"></div>
        
        {/* Graph Grid Background */}
        <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <Navbar />
        
        <div className="py-16">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Open Source Cost Savings Calculator</h1>
            <p className="text-xl opacity-80">
              Discover how much your organization could save by switching from commercial tools to open source alternatives.
            </p>
          </div>
          
          <CostCalculator />
          
          <div className="max-w-4xl mx-auto mt-20">
            <div className="grid md:grid-cols-2 gap-8">
              <div className="card bg-base-100 shadow-xl">
                <div className="card-body">
                  <h2 className="card-title text-2xl">Why Consider Open Source?</h2>
                  <ul className="list-disc pl-5 space-y-2 mt-4">
                    <li>Eliminate licensing costs</li>
                    <li>Avoid vendor lock-in</li>
                    <li>Customize solutions to your exact needs</li>
                    <li>Benefit from community-driven innovation</li>
                    <li>Improve security through transparency</li>
                    <li>Scale without license limitations</li>
                  </ul>
                </div>
              </div>
              
              <div className="card bg-base-100 shadow-xl">
                <div className="card-body">
                  <h2 className="card-title text-2xl">Our Migration Support</h2>
                  <ul className="list-disc pl-5 space-y-2 mt-4">
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
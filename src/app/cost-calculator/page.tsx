'use client';
import React, { useState } from 'react';
import dynamic from 'next/dynamic';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

// Use dynamic import with SSR disabled for the calculator component
const CostCalculator = dynamic(
  () => import('@/components/CostCalculator'),
  { ssr: false }
);

export default function CostCalculatorPage() {
  const [activeTab, setActiveTab] = useState<number>(0);

  const faqItems = [
    {
      question: 'Is open source software really free?',
      answer: 'While open source software is free to use, there may be costs associated with implementation, support, and maintenance. However, these costs are typically much lower than commercial license fees and give you more control over your technology stack.'
    },
    {
      question: 'How difficult is it to migrate from commercial to open source tools?',
      answer: 'Migration complexity varies depending on your current tools, data volume, and customizations. With proper planning and expertise, migrations can be smooth and minimally disruptive. Our team specializes in planning and executing these transitions effectively.'
    },
    {
      question: 'Are open source alternatives as reliable as commercial products?',
      answer: 'Many popular open source alternatives are backed by large communities and organizations, making them as reliable (and often more secure) than their commercial counterparts. Projects like Linux, PostgreSQL, and GitLab are used by some of the world\'s largest organizations.'
    },
    {
      question: 'How do we get support for open source software?',
      answer: 'Open source projects typically have vibrant communities offering free support through forums, documentation, and issue trackers. For enterprises, many open source projects offer paid support options or have companies providing professional support services. We can help you navigate these options and even provide direct support for your implementation.'
    }
  ];

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
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Open Source Cost Savings Calculator</h1>
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
            
            <div className="card bg-base-100 shadow-xl mt-8">
              <div className="card-body">
                <h2 className="card-title text-2xl mb-4">Frequently Asked Questions</h2>
                <div className="mt-4 space-y-4">
                  {faqItems.map((item, index) => (
                    <div key={index} className="collapse collapse-plus bg-base-200">
                      <input 
                        type="radio" 
                        name="faq-accordion" 
                        checked={activeTab === index} 
                        onChange={() => setActiveTab(index)}
                        className="cursor-pointer peer"
                      /> 
                      <div className="collapse-title text-xl font-medium cursor-pointer peer-checked:bg-primary/10">
                        {item.question}
                      </div>
                      <div className="collapse-content peer-checked:bg-primary/5"> 
                        <p>{item.answer}</p>
                      </div>
                    </div>
                  ))}
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
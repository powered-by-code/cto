'use client';

import { useState } from 'react';
import data from '@/data.json';

// Define quiz questions for each case study
const quizQuestions = {
  'saas-scale-architecture': {
    question: 'Based on this case study, what was the most significant benefit of the microservices architecture redesign?',
    options: [
      { id: 'option1', text: 'Reduced infrastructure costs' },
      { id: 'option2', text: 'Improved system uptime' },
      { id: 'option3', text: 'Faster deployment times' },
      { id: 'option4', text: 'Supporting user growth without performance issues' }
    ]
  },
  'fintech-compliance-security': {
    question: 'What was the most critical outcome of implementing security measures in this FinTech case study?',
    options: [
      { id: 'option1', text: 'Achieving PCI DSS compliance' },
      { id: 'option2', text: 'Securing partnerships with financial institutions' },
      { id: 'option3', text: 'Zero security incidents while processing transactions' },
      { id: 'option4', text: 'Passing security audits with zero critical findings' }
    ]
  },
  'marketplace-platform-scaling': {
    question: 'Which technical improvement had the greatest impact on this marketplace platform?',
    options: [
      { id: 'option1', text: 'Redesigned matching algorithm' },
      { id: 'option2', text: 'Scalable payment and escrow system' },
      { id: 'option3', text: 'Advanced fraud detection systems' },
      { id: 'option4', text: 'Improved platform reliability' }
    ]
  },
  'healthtech-hipaa-compliance': {
    question: 'What was the most valuable aspect of the HIPAA compliance implementation for this telehealth platform?',
    options: [
      { id: 'option1', text: 'End-to-end encryption for patient data' },
      { id: 'option2', text: 'Secure EHR integration capabilities' },
      { id: 'option3', text: 'Comprehensive audit logging and monitoring' },
      { id: 'option4', text: 'Building trust with major healthcare providers' }
    ]
  },
  'tech-team-turnaround': {
    question: 'What was the most important factor in turning around this technical team?',
    options: [
      { id: 'option1', text: 'Restructuring with clear roles and responsibilities' },
      { id: 'option2', text: 'Implementing agile development processes' },
      { id: 'option3', text: 'Improved quality assurance practices' },
      { id: 'option4', text: 'Collaborative processes between departments' }
    ]
  },
  'ai-ml-infrastructure': {
    question: 'What was the most significant outcome of optimizing the AI/ML infrastructure?',
    options: [
      { id: 'option1', text: 'Reduced model training costs' },
      { id: 'option2', text: 'Faster model deployment time' },
      { id: 'option3', text: 'More efficient data pipeline processing' },
      { id: 'option4', text: 'Improved model accuracy' }
    ]
  },
  // Default fallback quiz
  'default': {
    question: 'Based on this case study, what would you say is the most valuable aspect of working with a fractional CTO?',
    options: [
      { id: 'option1', text: 'Technical expertise and specialized knowledge' },
      { id: 'option2', text: 'Cost-effective alternative to a full-time CTO' },
      { id: 'option3', text: 'Strategic guidance for long-term growth' },
      { id: 'option4', text: 'Ability to solve immediate technical challenges' }
    ]
  }
};

export default function CaseStudyQuiz({ caseStudyId }: { caseStudyId: string }) {
  const [quizStep, setQuizStep] = useState(1);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  
  // Get the case study from data.json
  const caseStudy = data.caseStudies.find(cs => cs.id === caseStudyId);
  
  // Get quiz for this case study, or use default if not found
  const quiz = quizQuestions[caseStudyId as keyof typeof quizQuestions] || quizQuestions.default;

  const handleOptionSelect = (optionId: string) => {
    setSelectedOption(optionId);
  };

  const handleNext = () => {
    setQuizStep(2);
  };

  return (
    <div className="mt-16 p-6 bg-base-200 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4">Quick Knowledge Check</h2>
      
      {quizStep === 1 ? (
        /* Step 1: Question */
        <div>
          <p className="mb-6">{quiz.question}</p>
          
          <div className="space-y-3 mb-6">
            {quiz.options.map((option) => (
              <div key={option.id} className="flex items-center">
                <input 
                  type="radio" 
                  id={option.id} 
                  name="quiz" 
                  className="radio radio-primary mr-3" 
                  onChange={() => handleOptionSelect(option.id)}
                  checked={selectedOption === option.id}
                />
                <label htmlFor={option.id}>{option.text}</label>
              </div>
            ))}
          </div>
          
          <button 
            className="btn btn-primary"
            onClick={handleNext}
            disabled={!selectedOption}
          >
            Next
          </button>
        </div>
      ) : (
        /* Step 2: Answer and Email Capture */
        <div>
          <div className="mb-8">
            <div className="p-4 bg-success/10 border border-success/30 rounded-lg mb-6">
              <h3 className="font-bold text-lg mb-2">All answers have merit!</h3>
              <p>
                While all the options represent important outcomes from this case study, each of these 
                technical improvements worked together to create the overall success experienced by 
                the {caseStudy?.industry} company.
              </p>
            </div>
            
            <p className="mb-4">
              A good fractional CTO brings:
            </p>
            <ul className="list-disc pl-5 mb-6 space-y-2">
              <li>Deep technical expertise in specific domains</li>
              <li>Strategic vision and planning capabilities</li>
              <li>Cost-effective leadership compared to full-time executives</li>
              <li>Rapid problem-solving and implementation skills</li>
              <li>Experience from multiple companies and industries</li>
            </ul>
          </div>
          
          <div className="p-4 bg-base-100 border border-base-300 rounded-lg">
            <h3 className="font-bold text-lg mb-3">Want more insights like this?</h3>
            <p className="mb-4">
              Enter your email to receive our complete analysis of this case study, plus exclusive resources on 
              how a fractional CTO could help your {caseStudy?.industry} business overcome similar challenges.
            </p>
            
            <div className="form-control">
              <div className="flex flex-col sm:flex-row gap-2">
                <input type="email" placeholder="your@email.com" className="input input-bordered flex-grow" />
                <button className="btn btn-primary">Send Me Insights</button>
              </div>
              <label className="label">
                <span className="label-text-alt">We respect your privacy and will never share your information.</span>
              </label>
            </div>
          </div>
        </div>
      )}
    </div>
  );
} 
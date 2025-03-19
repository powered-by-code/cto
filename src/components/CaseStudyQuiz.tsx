'use client';

import { useState } from 'react';

export default function CaseStudyQuiz({ caseStudyId }: { caseStudyId: string }) {
  const [quizStep, setQuizStep] = useState(1);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);

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
          <p className="mb-6">Based on this case study, what would you say is the most valuable aspect of working with a fractional CTO?</p>
          
          <div className="space-y-3 mb-6">
            <div className="flex items-center">
              <input 
                type="radio" 
                id="option1" 
                name="quiz" 
                className="radio radio-primary mr-3" 
                onChange={() => handleOptionSelect('option1')}
                checked={selectedOption === 'option1'}
              />
              <label htmlFor="option1">Technical expertise and specialized knowledge</label>
            </div>
            <div className="flex items-center">
              <input 
                type="radio" 
                id="option2" 
                name="quiz" 
                className="radio radio-primary mr-3"
                onChange={() => handleOptionSelect('option2')}
                checked={selectedOption === 'option2'}
              />
              <label htmlFor="option2">Cost-effective alternative to a full-time CTO</label>
            </div>
            <div className="flex items-center">
              <input 
                type="radio" 
                id="option3" 
                name="quiz" 
                className="radio radio-primary mr-3"
                onChange={() => handleOptionSelect('option3')}
                checked={selectedOption === 'option3'}
              />
              <label htmlFor="option3">Strategic guidance for long-term growth</label>
            </div>
            <div className="flex items-center">
              <input 
                type="radio" 
                id="option4" 
                name="quiz" 
                className="radio radio-primary mr-3"
                onChange={() => handleOptionSelect('option4')}
                checked={selectedOption === 'option4'}
              />
              <label htmlFor="option4">Ability to solve immediate technical challenges</label>
            </div>
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
                While all the options are valuable aspects of working with a fractional CTO, in this particular 
                case study, the combination of specialized expertise and immediate problem-solving was crucial 
                for the client's success.
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
              how a fractional CTO could help your business overcome similar challenges.
            </p>
            
            <div className="form-control">
              <div className="flex gap-2">
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
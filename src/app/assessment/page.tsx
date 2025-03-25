'use client';

import PageLayout from '@/components/PageLayout';
import { useState } from 'react';
import data from '@/data.json';
import ServiceCard from '@/components/ServiceCard';

// Define quiz questions
const quizQuestions = [
  {
    id: 'team-size',
    question: 'What is the current size of your technical team?',
    options: [
      { id: 'option1', text: '1-5 developers' },
      { id: 'option2', text: '6-15 developers' },
      { id: 'option3', text: '16-30 developers' },
      { id: 'option4', text: '30+ developers' }
    ]
  },
  {
    id: 'challenges',
    question: 'What are your biggest technical challenges?',
    options: [
      { id: 'option1', text: 'Scaling infrastructure and performance' },
      { id: 'option2', text: 'Team management and hiring' },
      { id: 'option3', text: 'Technical strategy and architecture' },
      { id: 'option4', text: 'Product development and delivery' }
    ]
  },
  {
    id: 'growth',
    question: 'What is your company\'s growth stage?',
    options: [
      { id: 'option1', text: 'Pre-seed/Seed' },
      { id: 'option2', text: 'Series A' },
      { id: 'option3', text: 'Series B' },
      { id: 'option4', text: 'Series C or later' }
    ]
  },
  {
    id: 'budget',
    question: 'What is your monthly technical budget?',
    options: [
      { id: 'option1', text: 'Under $10k' },
      { id: 'option2', text: '$10k - $50k' },
      { id: 'option3', text: '$50k - $200k' },
      { id: 'option4', text: 'Over $200k' }
    ]
  }
];

// Add testimonial data
const testimonials = [
  {
    quote: "The assessment helped us identify critical gaps in our technical leadership. Now we're scaling efficiently.",
    author: "Sarah Chen",
    role: "CEO, TechStart",
    company: "TechStart"
  },
  {
    quote: "Working with a fractional CTO transformed our development process. Best decision we made.",
    author: "Michael Rodriguez",
    role: "Founder",
    company: "GrowthLabs"
  }
];

export default function CTOAssessmentPage() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [showResults, setShowResults] = useState(false);
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const handleAnswer = (questionId: string, answerId: string) => {
    setAnswers(prev => ({ ...prev, [questionId]: answerId }));
    
    if (currentQuestion < quizQuestions.length - 1) {
      setCurrentQuestion(prev => prev + 1);
    } else {
      setShowResults(true);
    }
  };

  const handleEmailSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      // Here you would typically send the email and answers to your backend
      await new Promise(resolve => setTimeout(resolve, 1000)); // Simulate API call
      setSubmitSuccess(true);
    } catch (error) {
      console.error('Error submitting:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <PageLayout>
      <div className="py-12 bg-gradient-to-b from-base-200/50 to-base-100">
        <div className="max-w-3xl mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              CTO Needs Assessment
            </h1>
            <p className="text-xl text-base-content/80 max-w-2xl mx-auto">
              Join 500+ companies who've optimized their technical leadership through our assessment. 
              Take 2 minutes to discover if a fractional CTO is right for you.
            </p>
            
            {/* Add social proof */}
            <div className="flex items-center justify-center gap-4 mt-6">
              <div className="flex -space-x-2">
                {[...Array(4)].map((_, i) => (
                  <div key={i} className="w-8 h-8 rounded-full border-2 border-base-100 bg-primary/10" />
                ))}
              </div>
              <span className="text-sm text-base-content/70">
                12 companies completed this assessment today
              </span>
            </div>
          </div>

          {!showResults ? (
            <div className="card bg-base-100 shadow-xl border border-base-300">
              <div className="card-body">
                <div className="mb-8">
                  <div className="flex justify-between mb-4">
                    <span className="text-sm text-base-content/70">
                      Question {currentQuestion + 1} of {quizQuestions.length}
                    </span>
                    <div className="w-32 h-2 bg-base-300 rounded-full">
                      <div 
                        className="h-full bg-primary rounded-full transition-all duration-300"
                        style={{ width: `${((currentQuestion + 1) / quizQuestions.length) * 100}%` }}
                      />
                    </div>
                  </div>
                  
                  <h2 className="text-2xl font-bold mb-6">
                    {quizQuestions[currentQuestion].question}
                  </h2>
                  
                  <div className="space-y-4">
                    {quizQuestions[currentQuestion].options.map((option) => (
                      <button
                        key={option.id}
                        className={`w-full p-4 text-left rounded-lg border transition-all ${
                          answers[quizQuestions[currentQuestion].id] === option.id
                            ? 'border-primary bg-primary/10'
                            : 'border-base-300 hover:border-primary/50'
                        }`}
                        onClick={() => handleAnswer(quizQuestions[currentQuestion].id, option.id)}
                      >
                        {option.text}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <div className="space-y-8">
              <div className="card bg-base-100 shadow-xl border border-base-300">
                <div className="card-body">
                  <div className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
                    Assessment Complete!
                  </div>
                  <div className="prose max-w-none">
                    <p className="mb-6">
                      Based on your responses, here's our analysis of your technical leadership needs:
                    </p>
                    
                    <ul className="space-y-4">
                      <li className="flex items-start">
                        <svg className="w-5 h-5 text-primary mt-0.5 mr-3 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                        </svg>
                        <span>
                          <strong>Team Size:</strong> Your team size indicates a need for structured technical leadership and scalable processes.
                        </span>
                      </li>
                      
                      <li className="flex items-start">
                        <svg className="w-5 h-5 text-primary mt-0.5 mr-3 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                        </svg>
                        <span>
                          <strong>Technical Challenges:</strong> Your main challenges align with areas where a fractional CTO can provide immediate value.
                        </span>
                      </li>
                      
                      <li className="flex items-start">
                        <svg className="w-5 h-5 text-primary mt-0.5 mr-3 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                        </svg>
                        <span>
                          <strong>Growth Stage:</strong> Your company's growth stage suggests a need for strategic technical guidance to support scaling.
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="card bg-base-100 shadow-xl border border-base-300">
                <div className="card-body">
                  <h2 className="text-2xl font-bold mb-4">Get Your Detailed Report</h2>
                  <p className="mb-6 text-base-content/80">
                    Join 500+ tech leaders who've received personalized insights and actionable recommendations.
                  </p>
                  
                  <form onSubmit={handleEmailSubmit} className="space-y-4">
                    <div className="form-control w-full">
                      <input
                        type="email"
                        placeholder="your@email.com"
                        className="input input-bordered w-full"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        disabled={isSubmitting || submitSuccess}
                      />
                    </div>
                    <button 
                      type="submit" 
                      className={`btn btn-primary w-full ${isSubmitting ? 'loading' : ''}`}
                      disabled={isSubmitting || submitSuccess}
                    >
                      {submitSuccess ? '✓ Report Sent!' : 'Send Me My Report'}
                    </button>
                    <p className="text-xs text-center text-base-content/60">
                      We respect your privacy. No spam, ever.
                    </p>
                  </form>
                </div>
              </div>

              {/* Add testimonials */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                {testimonials.map((testimonial, index) => (
                  <div key={index} className="card bg-base-100 shadow-xl border border-base-300">
                    <div className="card-body">
                      <svg className="w-8 h-8 text-primary/20 mb-4" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                      </svg>
                      <p className="text-base-content/80 mb-4">{testimonial.quote}</p>
                      <div className="flex items-center">
                        <div className="w-10 h-10 rounded-full bg-primary/10 mr-3" />
                        <div>
                          <p className="font-medium">{testimonial.author}</p>
                          <p className="text-sm text-base-content/60">{testimonial.role}, {testimonial.company}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="card bg-base-100 shadow-xl border border-base-300">
                <div className="card-body">
                  <h2 className="text-2xl font-bold mb-4">Recommended Services</h2>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {data.services.slice(0, 4).map((service, index) => (
                      <ServiceCard
                        key={index}
                        id={service.id}
                        title={service.title}
                        description={service.description}
                        features={service.features}
                        image={service.image}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </PageLayout>
  );
} 
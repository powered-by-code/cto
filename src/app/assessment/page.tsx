'use client';

import PageLayout from '@/components/PageLayout';
import { useState } from 'react';
import data from '@/data.json';
import ServiceCard from '@/components/ServiceCard';
import EmailPopup from '@/components/EmailPopup';
// Import Lucide icons
import { 
  MapPin, 
  Clock, 
  Building, 
  Zap, 
  Award, 
  PieChart, 
  CheckCircle,
  Download
} from 'lucide-react';
import { markdown } from 'markdown';

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

// Define quiz questions
const quizQuestions = [
  {
    id: "org_type",
    question: "What type of organization are you?",
    options: [
      { id: "a", text: "Startup", points: 1, type: "startup" },
      { id: "b", text: "Non-profit/NGO", points: 1, type: "nonprofit" },
      { id: "c", text: "Traditional business where technology is a support function", points: 2, type: "traditional" },
      { id: "d", text: "Business with significant technology dependencies", points: 3, type: "tech_dependent" },
      { id: "e", text: "Technology-focused company", points: 4, type: "tech_focused" }
    ],
    category: "type"
  },
  {
    id: "budget",
    question: "What is your budget for technology leadership?",
    options: [
      { id: "a", text: "Limited - under $20,000/month", points: 1 },
      { id: "b", text: "Moderate - $20,000-$50,000/month", points: 2 },
      { id: "c", text: "Substantial - $50,000-$100,000/month", points: 3 },
      { id: "d", text: "Full executive budget - $100,000+/month", points: 4 }
    ],
    category: "time"
  },
  {
    id: "org_size",
    question: "What is the current size of your organization?",
    options: [
      { id: "a", text: "Startup/Early stage (1-10 employees)", points: 1 },
      { id: "b", text: "Small business (11-50 employees)", points: 2 },
      { id: "c", text: "Medium business (51-200 employees)", points: 3 },
      { id: "d", text: "Large business (201+ employees)", points: 4 }
    ],
    category: "type" // Used for scoring
  },
  {
    id: "tech_team",
    question: "What is your current technology team structure?",
    options: [
      { id: "a", text: "No dedicated technology staff", points: 1 },
      { id: "b", text: "1-3 technical staff without senior leadership", points: 2 },
      { id: "c", text: "Small technical team with mid-level management", points: 3 },
      { id: "d", text: "Established technology department", points: 4 }
    ],
    category: "type"
  },
  {
    id: "primary_need",
    question: "What is your primary technology need right now?",
    options: [
      { id: "a", text: "Strategic direction and technology roadmap", points: 1 },
      { id: "b", text: "Solving specific technical challenges", points: 2 },
      { id: "c", text: "Building/scaling technology operations", points: 3 },
      { id: "d", text: "Technology transformation or turnaround", points: 4 }
    ],
    category: "both" // Counts for both type and time
  },
  {
    id: "timeline",
    question: "How quickly do you need technology leadership in place?",
    options: [
      { id: "a", text: "Immediately", points: 4 },
      { id: "b", text: "Within 1 month", points: 3 },
      { id: "c", text: "Within 3 months", points: 2 },
      { id: "d", text: "Flexible timeline", points: 1 }
    ],
    category: "time"
  },
  {
    id: "duration",
    question: "What is your expected duration for this technology leadership role?",
    options: [
      { id: "a", text: "Short-term project (1-3 months)", points: 1 },
      { id: "b", text: "Medium-term engagement (3-6 months)", points: 2 },
      { id: "c", text: "Long-term relationship (6+ months)", points: 3 },
      { id: "d", text: "Permanent position", points: 4 }
    ],
    category: "type"
  },
  {
    id: "involvement",
    question: "How involved should this person be in day-to-day operations?",
    options: [
      { id: "a", text: "Minimal - strategic guidance only", points: 1 },
      { id: "b", text: "Moderate - regular oversight but not daily", points: 2 },
      { id: "c", text: "Substantial - hands-on leadership several days per week", points: 3 },
      { id: "d", text: "Complete - full-time operational involvement", points: 4 }
    ],
    category: "both"
  },
  {
    id: "tech_maturity",
    question: "What is your organization's technology maturity?",
    options: [
      { id: "a", text: "Early stage - limited technology infrastructure", points: 1 },
      { id: "b", text: "Developing - basic systems in place but not optimized", points: 2 },
      { id: "c", text: "Established - functioning technology ecosystem with some challenges", points: 3 },
      { id: "d", text: "Advanced - sophisticated technology environment needing refinement", points: 4 }
    ],
    category: "type"
  },
  {
    id: "transition",
    question: "Is your organization currently in a transition phase?",
    options: [
      { id: "a", text: "No significant transitions underway", points: 1 },
      { id: "b", text: "Minor changes or gradual evolution", points: 2 },
      { id: "c", text: "Significant growth or transformation underway", points: 3 },
      { id: "d", text: "Major pivot, restructuring, or crisis management", points: 4 }
    ],
    category: "time"
  }
];

// Results definitions
const ctoTypeResults = [
  {
    range: [7, 12],
    type: "Strategic Advisor",
    description: "You likely need occasional strategic guidance without operational involvement. A Strategic Advisor can provide expert consultation on technology decisions, market insights, and innovation opportunities without the commitment of an operational role."
  },
  {
    range: [13, 18],
    type: "Fractional CTO",
    description: "Your organization would benefit from regular but part-time technology leadership. A Fractional CTO can provide ongoing strategic guidance and some operational oversight while being more cost-effective than a full-time executive."
  },
  {
    range: [19, 24],
    type: "Interim CTO",
    description: "You're likely facing significant technology challenges or transitions that require dedicated leadership for a defined period. An Interim CTO can provide intensive guidance through these changes and prepare your organization for its next phase."
  },
  {
    range: [25, 28],
    type: "Full-time CTO",
    description: "Your organization's size, complexity, and technology needs justify a permanent, full-time technology executive. A Full-time CTO can provide dedicated leadership, complete alignment with company goals, and full-time availability."
  }
];

// Time commitment results map to different levels of engagement
const timeCommitmentResults = [
  {
    range: [5, 8],
    commitment: "Quarter-time CTO (1/4)",
    description: "Approximately 10 hours per week of technology leadership is recommended. This level is suitable for organizations needing primarily strategic guidance with minimal operational involvement."
  },
  {
    range: [9, 13],
    commitment: "Half-time CTO (1/2)",
    description: "Approximately 20 hours per week of technology leadership is recommended. This level provides a balance of strategic guidance and operational oversight for organizations with moderate technology needs."
  },
  {
    range: [14, 17],
    commitment: "Three-quarter time CTO (3/4)",
    description: "Approximately 30 hours per week of technology leadership is recommended. This substantial commitment is appropriate for organizations with significant technology challenges or those in transition phases."
  },
  {
    range: [18, 20],
    commitment: "Full-time CTO",
    description: "A full 40+ hour per week commitment is recommended. This level is appropriate for organizations with complex technology environments, major transformations underway, or technology-centric business models."
  }
];

// Organization-specific recommendations
const orgTypeRecommendations = {
  startup: "As a **startup**, your primary needs likely revolve around establishing a **strong technical foundation** while managing limited resources. Consider a **part-time** or **Fractional CTO** who can help you make **strategic technology decisions**, avoid costly mistakes, and build a **scalable infrastructure** that can grow with your business. Startups particularly benefit from leaders with experience in rapid iteration and product-market fit validation.",
  
  nonprofit: "**Non-profit organizations** often have unique technology needs and budget constraints. Consider seeking technology leaders with **non-profit experience**, exploring **grant opportunities** for technology leadership funding, and looking into **pro-bono or reduced-rate services** from technology consultants passionate about your mission. A technology leader familiar with non-profit operations can help maximize your impact while managing limited resources.",
  
  traditional: "As a **traditional business** where technology is a support function, focus on technology leaders who can **translate technical concepts** for non-technical stakeholders, prioritize **business-aligned technology strategies**, and consider a **Fractional CTO** who can provide guidance without the cost of a full-time executive. This approach provides executive-level guidance while allowing you to prioritize investments in your core business areas.",
  
  tech_dependent: "With **significant technology dependencies**, your organization requires leadership that deeply understands both your **business domain and technical infrastructure**. Consider a more **substantial time commitment** to ensure proper oversight of your critical technology systems. Look for a CTO with experience in **risk management** and **reliability engineering** to maintain the stability of the systems your business depends on.",
  
  tech_focused: "As a **technology-focused company**, you need leadership that can drive **innovation** while maintaining **operational excellence**. Look for CTOs with specific experience in your **technology stack** and industry who can help **differentiate your offerings** in the market. Your technology leader should be able to balance pushing technical boundaries with maintaining a stable product that customers can rely on.",
  
  other: "Based on your organization's unique profile, you would benefit from customized technology leadership that aligns with your specific industry challenges and opportunities. Consider a technology leader who brings both **broad experience** across multiple domains and the ability to **quickly adapt** to your particular context. This flexible approach allows you to scale your technology leadership as your organization evolves."
};

// For transitions
const transitionRecommendation = "Since you're experiencing significant change, prioritize leadership with change management experience. Consider an Interim CTO to guide you through this transition period, focusing on establishing scalable processes and planning for knowledge transfer to permanent staff.";

export default function CTOAssessmentPage() {
  // State for quiz progress and results
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [showResults, setShowResults] = useState(false);
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [assessmentResults, setAssessmentResults] = useState<{
    typeScore: number;
    timeScore: number;
    ctoType: string;
    ctoTypeDescription: string;
    timeCommitment: string;
    timeCommitmentDescription: string;
    orgSpecificRecommendation: string;
    inTransition: boolean;
  } | null>(null);
  const [showEmailPopup, setShowEmailPopup] = useState(false);

  // Handle answer selection with analytics tracking
  const handleAnswer = (questionId: string, optionId: string) => {
    // Update answers
    const newAnswers = { ...answers, [questionId]: optionId };
    setAnswers(newAnswers);
    
    // Log analytics event
    console.log('Question answered:', {
      questionId,
      optionText: quizQuestions
        .find(q => q.id === questionId)?.options
        .find(o => o.id === optionId)?.text
    });
    
    // Auto-advance to next question after a short delay
    setTimeout(() => {
      if (currentQuestion < quizQuestions.length - 1) {
        setCurrentQuestion(currentQuestion + 1);
      } else {
        calculateResults(newAnswers);
      }
    }, 300);
  };

  // Calculate assessment results with analytics tracking
  const calculateResults = (finalAnswers: Record<string, string>) => {
    let typeScore = 0;
    let timeScore = 0;
    let orgType = '';
    let inTransition = false;
    
    // Process all question answers
    quizQuestions.forEach(question => {
      const answer = finalAnswers[question.id];
      if (!answer) return;
      
      const selectedOption = question.options.find(opt => opt.id === answer);
      if (!selectedOption) return;
      
      // Add points to appropriate category
      if (question.category === 'type' || question.category === 'both') {
        typeScore += selectedOption.points;
      }
      
      if (question.category === 'time' || question.category === 'both') {
        timeScore += selectedOption.points;
      }
      
      // Check for organization type
      if (question.id === 'org_type' && 'type' in selectedOption) {
        orgType = selectedOption.type as string;
      }
      
      // Check if in transition
      if (question.id === 'transition' && selectedOption.points >= 3) {
        inTransition = true;
      }
    });
    
    // Find matching result types based on scores
    const ctoTypeResult = ctoTypeResults.find(
      result => typeScore >= result.range[0] && typeScore <= result.range[1]
    ) || ctoTypeResults[0];
    
    const timeCommitmentResult = timeCommitmentResults.find(
      result => timeScore >= result.range[0] && timeScore <= result.range[1]
    ) || timeCommitmentResults[0];
    
    // Get org-specific recommendation (use 'other' as fallback)
    const orgSpecificRecommendation = orgType 
      ? orgTypeRecommendations[orgType as keyof typeof orgTypeRecommendations] 
      : orgTypeRecommendations.other;
    
    // Save results to state
    setAssessmentResults({
      typeScore,
      timeScore,
      ctoType: ctoTypeResult.type,
      ctoTypeDescription: ctoTypeResult.description,
      timeCommitment: timeCommitmentResult.commitment,
      timeCommitmentDescription: timeCommitmentResult.description,
      orgSpecificRecommendation,
      inTransition
    });
    
    // Track completion event
    console.log('Assessment completed', {
      typeScore,
      timeScore,
      ctoType: ctoTypeResult.type,
      timeCommitment: timeCommitmentResult.commitment,
      organizationType: finalAnswers["org_type"] 
        ? quizQuestions[0].options.find(opt => opt.id === finalAnswers["org_type"])?.text 
        : 'Unknown'
    });
    
    // Show results
    setShowResults(true);
  };

  // Handle email popup submission with analytics
  const handleEmailSubmit = async (formData: { email: string, name?: string, jobTitle?: string }) => {
    console.log('Form data:', formData);
    setIsSubmitting(true);
    try {
      // Simulate API call - replace with actual API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Log analytics event
      console.log('Report requested', {
        email: formData.email,
        name: formData.name,
        jobTitle: formData.jobTitle,
        results: {
          ctoType: assessmentResults?.ctoType,
          timeCommitment: assessmentResults?.timeCommitment,
          organizationType: answers["org_type"] 
            ? quizQuestions[0].options.find(opt => opt.id === answers["org_type"])?.text 
            : 'Unknown'
        }
      });
      
      setSubmitSuccess(true);
      // Close popup after success
      setTimeout(() => {
        setShowEmailPopup(false);
        // Reset success state after the popup is closed
        setTimeout(() => setSubmitSuccess(false), 300);
      }, 2000);
    } catch (error) {
      console.error('Error submitting:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <PageLayout>
      <div className="py-16 bg-gradient-to-br from-base-200/50 via-base-100 to-base-200/30">
        <div className="max-w-3xl mx-auto px-4">
          {/* Enhanced header section with fade-in animation */}
          <div className="text-center mb-16 animate-fadeIn">
            <div className="inline-flex items-center gap-2 px-4 py-2 mb-6 rounded-full bg-primary/10 text-primary text-sm font-medium shadow-sm">
              <Award size={16} />
              <span>Free Technology Assessment</span>
            </div>
            <h1 className="text-5xl font-extrabold mb-6 tracking-tight bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent animate-gradient">
              CTO Needs Assessment
            </h1>
            <p className="text-xl text-base-content/80 max-w-2xl mx-auto leading-relaxed">
              Take 2 minutes to discover the ideal technology leadership solution for your organization.
            </p>

            {/* Added features list with animation */}
            <div className="flex flex-wrap justify-center gap-6 mt-8">
              <div className="flex items-center text-sm text-base-content/70 animate-slideInRight" style={{ animationDelay: '100ms' }}>
                <CheckCircle size={16} className="text-primary mr-2" />
                <span>Personalized Results</span>
              </div>
              <div className="flex items-center text-sm text-base-content/70 animate-slideInRight" style={{ animationDelay: '200ms' }}>
                <CheckCircle size={16} className="text-primary mr-2" />
                <span>Takes 2 Minutes</span>
              </div>
              <div className="flex items-center text-sm text-base-content/70 animate-slideInRight" style={{ animationDelay: '300ms' }}>
                <CheckCircle size={16} className="text-primary mr-2" />
                <span>Expert Recommendations</span>
              </div>
            </div>
          </div>

          {/* Quiz questions section with animations */}
          {!showResults ? (
            <div className="card bg-base-100 shadow-xl border border-base-300 overflow-hidden hover:shadow-2xl transition-all duration-300 animate-slideInUp">
              <div className="card-body p-8">
                <div className="mb-8">
                  {/* Progress indicator with animation */}
                  <div className="flex justify-between items-center mb-8">
                    <span className="flex items-center gap-2 text-sm font-medium text-primary">
                      <PieChart size={18} className="animate-pulse-slow" />
                      <span>Question {currentQuestion + 1} of {quizQuestions.length}</span>
                    </span>
                    <div className="w-36 h-3 bg-base-300 rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-gradient-to-r from-primary to-secondary rounded-full transition-all duration-700 ease-in-out"
                        style={{ width: `${((currentQuestion + 1) / quizQuestions.length) * 100}%` }}
                      />
                    </div>
                  </div>
                  
                  {/* Question with animated entrance */}
                  <h2 className="text-3xl font-bold mb-10 text-base-content leading-tight quiz-step">
                    {quizQuestions[currentQuestion].question}
                  </h2>
                  
                  {/* Answer options with staggered animation */}
                  <div className="space-y-5">
                    {quizQuestions[currentQuestion].options.map((option, index) => (
                      <button
                        key={option.id}
                        className={`w-full p-6 text-left rounded-lg border transition-all duration-300 shadow-sm cursor-pointer
                          ${
                          answers[quizQuestions[currentQuestion].id] === option.id
                              ? 'border-primary bg-primary/10 shadow-md transform scale-[1.02]'
                              : 'border-base-300 hover:border-primary/70 hover:bg-base-200/50 hover:shadow hover:transform hover:scale-[1.01]'
                        }`}
                        onClick={() => handleAnswer(quizQuestions[currentQuestion].id, option.id)}
                        style={{ animationDelay: `${index * 75 + 200}ms` }}
                      >
                        <span className="text-lg fade-in">{option.text}</span>
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ) : (
            // Results section with entrance animation
            <div className="space-y-10 animate-slideInUp">
              {/* Results card with animated entrance */}
              <div className="card bg-base-100 shadow-xl border border-base-300 overflow-hidden hover:shadow-2xl transition-all duration-300">
                <div className="card-body p-8">
                  {/* Results header with animated badge */}
                  <div className="text-center mb-10">
                    <div className="inline-flex items-center gap-2 px-4 py-2 mb-4 rounded-full bg-success/10 text-success text-sm font-medium animate-fadeIn">
                      <CheckCircle size={16} className="animate-bounce" style={{ animationDuration: '2s' }} />
                      <span>Assessment Complete!</span>
                    </div>
                    <h2 className="text-3xl font-extrabold mb-4 tracking-tight bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent animate-gradient">
                      Your Customized CTO Recommendation
                    </h2>
                    <p className="text-lg text-base-content/70 max-w-lg mx-auto">
                      Based on your answers, we've prepared a personalized technology leadership recommendation for your organization.
                    </p>
                  </div>
                  
                  {/* Results content with staggered entrance */}
                  {assessmentResults && (
                  <div className="prose max-w-none">
                      {/* Organization-specific recommendation with entrance animation */}
                      {assessmentResults.orgSpecificRecommendation && (
                        <div className="mb-10 p-8 bg-base-200/50 rounded-lg border border-base-300 hover:shadow-md transition-all duration-300 transform hover:scale-[1.01] animate-fadeIn" style={{ animationDelay: '100ms' }}>
                          <div className="flex items-start mb-6">
                            <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center mr-5 mt-1 flex-shrink-0">
                              <Building size={24} className="text-accent" />
                            </div>
                            <div>
                              <h3 className="text-2xl font-bold text-accent m-0">For Your Organization</h3>
                              <div 
                                className="text-lg text-base-content/80 leading-relaxed mt-4"
                                dangerouslySetInnerHTML={{ 
                                  __html: markdown.toHTML(assessmentResults.orgSpecificRecommendation)
                                }}
                              />
                            </div>
                          </div>
                        </div>
                      )}
                      
                      {/* Time Commitment with entrance animation and delay */}
                      <div className="mb-10 p-8 bg-base-200/50 rounded-lg border border-base-300 hover:shadow-md transition-all duration-300 transform hover:scale-[1.01] animate-fadeIn" style={{ animationDelay: '300ms' }}>
                        <div className="flex items-start mb-6">
                          <div className="w-12 h-12 rounded-full bg-secondary/10 flex items-center justify-center mr-5 mt-1 flex-shrink-0">
                            <Clock size={24} className="text-secondary" />
                          </div>
                          <div>
                            <h3 className="text-2xl font-bold text-secondary m-0">
                              Recommended Time: {' '}
                              <span dangerouslySetInnerHTML={{ 
                                __html: markdown.toHTML(
                                  assessmentResults.timeCommitment
                                    .replace(/(Quarter-time|Half-time|Three-quarter time|Full-time)/g, '**$1**')
                                )
                              }} />
                            </h3>
                            <div 
                              className="text-lg text-base-content/80 leading-relaxed mt-4"
                              dangerouslySetInnerHTML={{ 
                                __html: markdown.toHTML(
                                  assessmentResults.timeCommitmentDescription
                                    .replace(/(\d+ hours per week)/g, '**$1**')
                                    .replace(/(strategic guidance|operational oversight|substantial commitment|full\s\d+\+ hour)/gi, '**$1**')
                                )
                              }}
                            />
                          </div>
                        </div>
                      </div>
                      
                      {/* CTO Type with entrance animation and delay */}
                      <div className="mb-10 p-8 bg-base-200/50 rounded-lg border border-base-300 hover:shadow-md transition-all duration-300 transform hover:scale-[1.01] animate-fadeIn" style={{ animationDelay: '500ms' }}>
                        <div className="flex items-start mb-6">
                          <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mr-5 mt-1 flex-shrink-0">
                            <Award size={24} className="text-primary" />
                          </div>
                          <div>
                            <h3 className="text-2xl font-bold text-primary m-0">
                              Recommended Type: {' '}
                              <span dangerouslySetInnerHTML={{ __html: markdown.toHTML(`**${assessmentResults.ctoType}**`) }} />
                            </h3>
                            <div 
                              className="text-lg text-base-content/80 leading-relaxed mt-4"
                              dangerouslySetInnerHTML={{ 
                                __html: markdown.toHTML(
                                  assessmentResults.ctoTypeDescription
                                    .replace(/(Strategic Advisor|Fractional CTO|Interim CTO|Full-time CTO)/g, '**$1**')
                                    .replace(/(strategic guidance|operational|part-time|defined period|permanent)/g, '**$1**')
                                )
                              }}
                            />
                          </div>
                        </div>
                      </div>
                      
                      {/* Transition-specific recommendation with entrance animation and delay */}
                      {assessmentResults.inTransition && (
                        <div className="mb-10 p-8 bg-base-200/50 rounded-lg border border-base-300 hover:shadow-md transition-all duration-300 transform hover:scale-[1.01] animate-fadeIn" style={{ animationDelay: '700ms' }}>
                          <div className="flex items-start mb-6">
                            <div className="w-12 h-12 rounded-full bg-info/10 flex items-center justify-center mr-5 mt-1 flex-shrink-0">
                              <Zap size={24} className="text-info" />
                            </div>
                            <div>
                              <h3 className="text-2xl font-bold text-info m-0">For Your Transition</h3>
                              <div 
                                className="text-lg text-base-content/80 leading-relaxed mt-4"
                                dangerouslySetInnerHTML={{ 
                                  __html: markdown.toHTML(
                                    transitionRecommendation
                                      .replace(/(change management|Interim CTO|knowledge transfer)/g, '**$1**')
                                  )
                                }}
                              />
                            </div>
                          </div>
                        </div>
                      )}
                      
                      {/* Next steps with entrance animation and delay */}
                      <div className="p-8 bg-primary/5 rounded-lg border border-primary/20 mt-10 hover:shadow-md transition-all duration-300 transform hover:scale-[1.01] animate-fadeIn" style={{ animationDelay: '900ms' }}>
                        <div className="flex items-start mb-4">
                          <MapPin size={20} className="text-primary mr-3 mt-1 flex-shrink-0" />
                          <div>
                            <h3 className="text-xl font-bold text-primary m-0">Next Steps</h3>
                            <div 
                              className="text-lg text-base-content/80 mb-0 leading-relaxed mt-3"
                              dangerouslySetInnerHTML={{ 
                                __html: markdown.toHTML(
                                  "Based on your results, we recommend scheduling a **consultation** to discuss how our services can be tailored to your specific needs. Our experts will help you implement the **right technology leadership solution**."
                                )
                              }}
                            />
                          </div>
                        </div>
                      </div>
                  </div>
                  )}
                  
                  {/* Actions section with animated buttons */}
                  <div className="flex flex-col sm:flex-row gap-4 mt-10 animate-fadeIn" style={{ animationDelay: '1100ms' }}>
                    <button 
                      onClick={() => setShowEmailPopup(true)}
                      className="btn btn-primary flex-1 h-14 transition-transform duration-300 hover:scale-[1.03]"
                    >
                      <Download size={18} className="mr-2" />
                      Get Detailed Report
                    </button>
                    <button 
                      onClick={() => {
                        // This would typically share the results, here we just copy a summary to clipboard
                        if (assessmentResults) {
                          const summary = `My CTO Assessment Results: ${assessmentResults.ctoType} (${assessmentResults.timeCommitment}) - Get your own assessment at ctoprime.com/assessment`;
                          navigator.clipboard.writeText(summary);
                          alert('Summary copied to clipboard!');
                        }
                      }}
                      className="btn btn-outline border-primary text-primary hover:bg-primary hover:text-white flex-1 h-14 transition-transform duration-300 hover:scale-[1.03]"
                    >
                      Share Results
                    </button>
                  </div>
                </div>
              </div>

              {/* Email capture card with improved typography */}
              <div className="card bg-base-100 shadow-xl border border-base-300 overflow-hidden hover:shadow-2xl transition-all duration-300 hover:translate-y-[-5px] animate-fadeIn" style={{ animationDelay: '400ms' }}>
                <div className="card-body p-8">
                  <h2 className="text-2xl font-bold mb-4 flex items-center">
                    <Download size={20} className="inline mr-3 text-primary" />
                    Get Your Detailed Report
                  </h2>
                  <p className="mb-8 text-lg text-base-content/80 leading-relaxed">
                    Receive a comprehensive PDF with personalized insights and actionable recommendations based on your assessment results.
                  </p>
                  
                  <button 
                    onClick={() => setShowEmailPopup(true)}
                    className="btn btn-primary w-full h-14 text-lg font-semibold"
                  >
                    Download My Custom Report
                  </button>
                  <p className="text-sm text-center text-base-content/60 mt-4">
                    We respect your privacy. No spam, ever.
                  </p>
                </div>
              </div>

              {/* Email popup component */}
              <EmailPopup 
                isOpen={showEmailPopup}
                onClose={() => setShowEmailPopup(false)}
                onSubmit={handleEmailSubmit}
                title="Get Your Personalized CTO Assessment Report"
                description="Enter your email to receive a detailed PDF report with actionable insights customized for your organization's needs."
                requireName={true}
                requireJobTitle={true}
              />

              {/* Recommended services card with enhanced styling */}
              <div className="card bg-base-100 shadow-xl border border-base-300 overflow-hidden hover:shadow-2xl transition-all duration-300 hover:translate-y-[-5px] animate-fadeIn" style={{ animationDelay: '600ms' }}>
                <div className="card-body p-8">
                  <h2 className="text-2xl font-bold mb-8 flex items-center">
                    <Award size={20} className="inline mr-3 text-primary" />
                    Recommended Services
                  </h2>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {data.services.slice(0, 4).map((service, index) => (
                      <div 
                        key={index}
                        className="group transition-all duration-300 hover:shadow-md p-4 rounded-lg border border-base-200 hover:border-primary/30 relative overflow-hidden"
                      >
                        <ServiceCard
                          id={service.id}
                          title={service.title}
                          description={service.description}
                          features={service.features}
                          image={service.image}
                        />
                        <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                      </div>
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
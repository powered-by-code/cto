import React, { useState } from 'react';
import UnifiedPopup from './UnifiedPopup';
import { trackEvent, EventNames, triggerPlunkEmail } from '@/utils/analytics';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

interface EmailPopupProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (data: { email: string; name?: string; jobTitle?: string }) => Promise<void>;
  title?: string;
  description?: string;
  requireName?: boolean;
  requireJobTitle?: boolean;
  eventName?: EventNames;
  eventData?: Record<string, any>;
  emailTriggerId?: string;
  serviceUrl?: string;
  serviceName?: string;
}

export default function EmailPopup({
  isOpen,
  onClose,
  onSubmit,
  title = "Get Your Detailed Report",
  description = "Enter your details below and we'll send you a comprehensive report.",
  requireName = true,
  requireJobTitle = true,
  eventName = EventNames.CONTACT_REQUESTED,
  eventData = {},
  emailTriggerId,
  serviceUrl,
  serviceName
}: EmailPopupProps) {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [jobTitle, setJobTitle] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    const userData = {
      email,
      name: name || undefined,
      jobTitle: jobTitle || undefined,
    };
    
    try {
      // Track event in PostHog and Plunk
      await trackEvent(eventName, userData, eventData);
      
      // If an email trigger ID is provided, trigger the email via Plunk
      if (emailTriggerId && email) {
        await triggerPlunkEmail(emailTriggerId, userData, {
          source: eventName,
          ...eventData
        });
      }
      
      // Call the onSubmit handler from props
      await onSubmit(userData);
      
      // Show confirmation screen instead of closing
      setIsSubmitted(true);
      
      // Reset form fields after successful submission
      setEmail('');
      setName('');
      setJobTitle('');
    } catch (error) {
      console.error('Error submitting form:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <UnifiedPopup
      isOpen={isOpen}
      onClose={onClose}
      title={isSubmitted ? "Check Your Email!" : title}
      description={isSubmitted ? "We've sent your report to your email. Please check your inbox and spam folder." : description}
    >
      {!isSubmitted ? (
        <form onSubmit={handleSubmit} className="space-y-4">
          {requireName && (
            <div className="form-control">
              <label className="label">
                <span className="label-text">Full Name</span>
              </label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Enter your full name"
                className="input input-bordered w-full"
                required={requireName}
              />
            </div>
          )}
          
          {requireJobTitle && (
            <div className="form-control">
              <label className="label">
                <span className="label-text">Job Title</span>
              </label>
              <input
                type="text"
                value={jobTitle}
                onChange={(e) => setJobTitle(e.target.value)}
                placeholder="Enter your job title"
                className="input input-bordered w-full"
                required={requireJobTitle}
              />
            </div>
          )}
          
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email Address</span>
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="input input-bordered w-full"
              required
            />
          </div>
          
          <div className="flex justify-end gap-4 mt-6">
            <button
              type="button"
              onClick={onClose}
              className="btn btn-outline"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="btn btn-primary"
              disabled={isSubmitting}
            >
              {isSubmitting ? (
                <>
                  <span className="loading loading-spinner loading-sm mr-2"></span>
                  Sending...
                </>
              ) : (
                'Send Report'
              )}
            </button>
          </div>
        </form>
      ) : (
        <div className="space-y-6">
          <div className="bg-success/10 p-4 rounded-lg">
            <p className="text-success font-medium">Your report is on its way! 📨</p>
          </div>
          
          {serviceUrl && serviceName && (
            <div className="text-center">
              <p className="mb-4">While you wait, learn more about our</p>
              <Link 
                href={serviceUrl}
                className="btn btn-primary btn-block"
                onClick={onClose}
              >
                {serviceName} <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </div>
          )}
          
          <div className="text-center text-sm text-base-content/70">
            <p>Can't find the email? Check your spam folder or contact us for help.</p>
          </div>
        </div>
      )}
    </UnifiedPopup>
  );
} 
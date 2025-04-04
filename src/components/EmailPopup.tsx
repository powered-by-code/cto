import React, { useState } from 'react';

interface EmailPopupProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (data: { email: string; name?: string; jobTitle?: string }) => Promise<void>;
  title?: string;
  description?: string;
  requireName?: boolean;
  requireJobTitle?: boolean;
}

export default function EmailPopup({
  isOpen,
  onClose,
  onSubmit,
  title = "Get Your Detailed Report",
  description = "Enter your details below and we'll send you a comprehensive report.",
  requireName = true,
  requireJobTitle = true
}: EmailPopupProps) {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [jobTitle, setJobTitle] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      await onSubmit({ email, name, jobTitle });
      // Reset form fields after successful submission
      setEmail('');
      setName('');
      setJobTitle('');
      onClose();
    } catch (error) {
      console.error('Error submitting form:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 bg-black/50 flex items-center justify-center z-50"
      style={{ position: 'fixed', top: 0, left: 0, right: 0, bottom: 0 }}
    >
      <div className="bg-base-100 p-8 rounded-lg shadow-xl max-w-md w-full">
        <h3 className="text-2xl font-bold mb-4">{title}</h3>
        <p className="mb-6 text-base-content/80">
          {description}
        </p>
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
      </div>
    </div>
  );
} 
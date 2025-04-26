import React, { useState, ReactNode, useEffect } from 'react';

interface UnifiedPopupProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  description?: string;
  children: ReactNode;
  className?: string;
}

export default function UnifiedPopup({
  isOpen,
  onClose,
  title,
  description,
  children,
  className = ''
}: UnifiedPopupProps) {
  // Effect to prevent body scrolling when popup is open
  useEffect(() => {
    if (isOpen) {
      // Save current scroll position and prevent scrolling
      const scrollY = window.scrollY;
      document.body.style.position = 'fixed';
      document.body.style.width = '100%';
      document.body.style.top = `-${scrollY}px`;
      
      return () => {
        // Restore scrolling and position when popup closes
        document.body.style.position = '';
        document.body.style.width = '';
        document.body.style.top = '';
        window.scrollTo(0, scrollY);
      };
    }
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4"
      style={{ position: 'fixed', top: 0, left: 0, right: 0, bottom: 0 }}
      onClick={(e) => {
        // Close when clicking the background, but not the popup itself
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div 
        className={`bg-base-100 rounded-lg shadow-xl max-w-md w-full max-h-[90vh] overflow-y-auto ${className}`}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="p-6 sm:p-8">
        <h3 className="text-2xl font-bold mb-4">{title}</h3>
        {description && (
          <p className="mb-6 text-base-content/80">
            {description}
          </p>
        )}
        {children}
        </div>
      </div>
    </div>
  );
}
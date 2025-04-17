import React, { useState, ReactNode } from 'react';

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
  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 bg-black/50 flex items-center justify-center z-50"
      style={{ position: 'fixed', top: 0, left: 0, right: 0, bottom: 0 }}
      onClick={(e) => {
        // Close when clicking the background, but not the popup itself
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div 
        className={`bg-base-100 p-8 rounded-lg shadow-xl max-w-md w-full ${className}`}
        onClick={(e) => e.stopPropagation()}
      >
        <h3 className="text-2xl font-bold mb-4">{title}</h3>
        {description && (
          <p className="mb-6 text-base-content/80">
            {description}
          </p>
        )}
        {children}
      </div>
    </div>
  );
}
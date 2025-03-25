'use client';

import Cal from "@calcom/embed-react";
import data from '@/data.json';

// Declare the custom elements for TypeScript
declare global {
  namespace JSX {
    interface IntrinsicElements {
      'cal-inline-widget': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement> & {
        'data-cal-link'?: string;
      }, HTMLElement>;
    }
  }
}

interface CalEmbedProps {
  calLink?: string;
  config?: {
    theme?: 'light' | 'dark';
    [key: string]: any;
  };
  posthogRecordingId?: string;
}

export default function CalEmbed({ calLink, config, posthogRecordingId }: CalEmbedProps) {
  const link = calLink || data.meetingLink.calLink;
  
  // Prepare config with posthog recording ID
  const calConfig = {
    theme: config?.theme || 'light',
    hideEventTypeDetails: false,
    layout: "month_view",
    ...config,
    "metadata[hog]": posthogRecordingId,
  };

  return (
    <div className="w-full">
      <div 
      >
        <Cal calLink={link} config={calConfig} />
      </div>
    </div>
  );
} 
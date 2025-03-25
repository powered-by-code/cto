'use client';

import Cal from "@calcom/embed-react";
import data from '@/data.json';


export default function CalEmbed({ calLink, config, posthogRecordingId }: { calLink: string, config: any, posthogRecordingId: string }) {
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
        <Cal calLink={link} config={calConfig as any} />
      </div>
    </div>
  );
} 
'use client';

import Cal, { getCalApi } from "@calcom/embed-react";
import data from '@/data.json';
import { trackCalComBooking, capturePosthogData } from '@/utils/analytics';
import { useEffect, useRef } from 'react';

export default function CalEmbed({ calLink, config, posthogRecordingId }: { calLink: string, config: any, posthogRecordingId: string }) {
  const link = calLink || data.meetingLink.calLink;
  const bookingStartedRef = useRef(new Set<string>());
  const bookingSuccessfulRef = useRef(new Set<string>());
  
  // Prepare config with posthog recording ID
  const calConfig = {
    theme: config?.theme || 'light',
    hideEventTypeDetails: false,
    layout: "month_view",
    ...config,
    "metadata[hog]": posthogRecordingId,
  };
  
  useEffect(() => {
    // Capture PostHog data on component mount with delay to ensure initialization
    capturePosthogData();
    
    // Track Cal.com booking events
    (async function() {
      const cal = await getCalApi();
      
      // Handle booking started
      // @ts-ignore - the Cal API types are not fully defined
      cal?.on?.('bookingStarted', (data: any) => {
        // Generate a unique ID for this booking started event
        const eventId = `${data.eventType?.id || ''}-${Date.now()}`;
        
        // Check if we've already tracked this specific booking started event
        if (bookingStartedRef.current.has(eventId)) {
          console.log('Preventing duplicate booking_started event', eventId);
          return;
        }
        
        bookingStartedRef.current.add(eventId);
        console.log('Tracking booking_started event', eventId);
        
        // We don't have the email yet, but we track the event started
        trackCalComBooking({ email: "" }, {
          action: "booking_started",
          eventType: data.eventType,
          posthogId: posthogRecordingId,
          eventId: eventId,
          ...data
        });
      });
      
      // Handle booking completed
      // @ts-ignore - the Cal API types are not fully defined
      cal?.on?.('bookingSuccessful', (data: any) => {
        // Generate a unique ID for this booking successful event
        const bookingId = data.booking?.id || `booking-${Date.now()}`;
        
        // Check if we've already tracked this specific booking successful event
        if (bookingSuccessfulRef.current.has(bookingId)) {
          console.log('Preventing duplicate booking_successful event', bookingId);
          return;
        }
        
        bookingSuccessfulRef.current.add(bookingId);
        console.log('Tracking booking_successful event', bookingId);
        
        // Now we have the email from the booking
        const userData = {
          email: data.booking?.attendees?.[0]?.email || "",
          name: data.booking?.attendees?.[0]?.name || ""
        };
        
        // Add a small delay to ensure PostHog data is captured
        setTimeout(() => {
          trackCalComBooking(userData, {
            action: "booking_successful",
            bookingId: bookingId,
            eventType: data.eventType?.title,
            startTime: data.booking?.startTime,
            endTime: data.booking?.endTime,
            posthogId: posthogRecordingId,
            ...data
          });
        }, 500);
      });
    })();
    
    // Clean up refs when component unmounts
    return () => {
      bookingStartedRef.current.clear();
      bookingSuccessfulRef.current.clear();
    };
  }, [posthogRecordingId]);

  return (
    <div className="w-full">
      <div>
        <Cal calLink={link} config={calConfig as any} />
      </div>
    </div>
  );
} 
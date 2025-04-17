import posthog from 'posthog-js';

// Define constants for event names to maintain consistency
export enum EventNames {
  CTO_ASSESSMENT = 'cto-assessment',
  IT_BUDGET_OPTIMIZER = 'it-budget-optimizer',
  CONTACT_REQUESTED = 'contact-requested',
  CAL_COM_BOOKED = 'cal-com-booked'
}

// Define Plunk API key (using env variable in production)
const PLUNK_API_KEY = 'pk_0fe3ff387881309992b931b8e8eff2816709589c17ee9fd4';

// Single localStorage key for all user data
const STORAGE_KEY = 'cubeunity_user_data';

// User data interface
interface UserData {
  email: string;
  name?: string;
  jobTitle?: string;
}

// Event data interface
interface EventData {
  [key: string]: any;
}

// Comprehensive user storage interface
interface UserStorage {
  email?: string;
  name?: string;
  jobTitle?: string;
  posthogDistinctId?: string;
  posthogSessionId?: string;
  posthogDeviceId?: string;
  assessmentResults?: any;
  calculatorData?: any;
  quizAnswers?: Record<string, any>;
  lastCalBooking?: {
    eventType?: string;
    startTime?: string;
    bookingId?: string;
    [key: string]: any;
  };
  lastUpdated?: number;
}

/**
 * Gets all user data from localStorage
 */
export const getUserStorage = (): UserStorage => {
  try {
    const data = localStorage.getItem(STORAGE_KEY);
    return data ? JSON.parse(data) : {};
  } catch (error) {
    console.error('Error getting user storage:', error);
    return {};
  }
};

/**
 * Updates user storage with new data
 */
export const updateUserStorage = (data: Partial<UserStorage>): void => {
  try {
    const existingData = getUserStorage();
    const updatedData = {
      ...existingData,
      ...data,
      lastUpdated: Date.now()
    };
    localStorage.setItem(STORAGE_KEY, JSON.stringify(updatedData));
  } catch (error) {
    console.error('Error updating user storage:', error);
  }
};

/**
 * Capture PostHog data on page load and store it in localStorage
 * This should be called once when the app initializes
 */
export const capturePosthogData = (): void => {
  try {
    // Log the raw values from posthog for debugging
    console.log('PostHog data capture:');
    console.log('Session ID:', posthog.get_session_id());
    console.log('Distinct ID:', posthog.get_property('distinct_id'));
    console.log('Device ID:', posthog.get_property('$device_id'));
    
    // Force posthog to persist and load properties
    posthog.capture('capture_analytics_data');
    
    // Use a small timeout to ensure posthog has time to initialize
    setTimeout(() => {
      const sessionId = posthog.get_session_id();
      const distinctId = posthog.get_property('distinct_id');
      const deviceId = posthog.get_property('$device_id');
      
      // Store PostHog IDs in local storage
      updateUserStorage({
        posthogSessionId: sessionId || '',
        posthogDistinctId: distinctId || '',
        posthogDeviceId: deviceId || ''
      });
      
      console.log('PostHog data stored in localStorage:', { sessionId, distinctId, deviceId });
    }, 500);
  } catch (error) {
    console.error('Error capturing PostHog data:', error);
  }
};

/**
 * Enriches user data with PostHog identifiers
 * @param userData Basic user data
 * @returns Enriched user data with PostHog IDs
 */
const enrichWithPosthogData = (userData: UserData): UserData & { 
  posthogSessionId?: string; 
  posthogDistinctId?: string;
  posthogDeviceId?: string;
} => {
  // Get PostHog data from localStorage instead of making new calls
  const storage = getUserStorage();
  
  return {
    ...userData,
    posthogSessionId: storage.posthogSessionId,
    posthogDistinctId: storage.posthogDistinctId,
    posthogDeviceId: storage.posthogDeviceId
  };
};

/**
 * Sends an event to PostHog and identifies the user
 * @param eventName Event name
 * @param userData User data including email
 * @param eventData Additional event data
 */
const trackPosthog = (
  eventName: EventNames,
  userData: UserData,
  eventData: EventData = {}
): void => {
  try {
    // Get storage data to enhance the event
    const storageData = getUserStorage();
    
    // Set properties without changing the distinct_id
    if (userData.email) {
      posthog.people.set({
        email: userData.email,
        name: userData.name || storageData.name,
        jobTitle: userData.jobTitle || storageData.jobTitle,
        // Include any assessment results in the user properties
        ...(storageData.assessmentResults && { assessmentResults: storageData.assessmentResults }),
        ...(storageData.quizAnswers && { quizAnswers: storageData.quizAnswers })
      });
    }

    // Send the event with all data
    posthog.capture(eventName, {
      ...eventData,
      email: userData.email,
      name: userData.name || storageData.name,
      jobTitle: userData.jobTitle || storageData.jobTitle,
      // Include relevant data from storage for context
      ...(eventName === EventNames.CTO_ASSESSMENT && storageData.assessmentResults && { 
        existingResults: storageData.assessmentResults 
      }),
      ...(eventName === EventNames.IT_BUDGET_OPTIMIZER && storageData.calculatorData && { 
        existingCalculations: storageData.calculatorData 
      })
    });
  } catch (error) {
    console.error('PostHog tracking error:', error);
  }
};

/**
 * Unified tracking function that sends events to both PostHog and Plunk
 * Also updates local storage with user data
 * @param eventName Event name
 * @param userData User data including email
 * @param eventData Additional event data
 */
export const trackEvent = async (
  eventName: EventNames,
  userData: UserData,
  eventData: EventData = {}
): Promise<void> => {
  // Ensure PostHog data is loaded
  // If we don't have PostHog data in storage, attempt to capture it again
  const storage = getUserStorage();
  if (!storage.posthogSessionId && !storage.posthogDistinctId) {
    capturePosthogData();
  }
  
  // Update localStorage with user data if we have an email
  if (userData.email) {
    updateUserStorage({
      email: userData.email,
      name: userData.name,
      jobTitle: userData.jobTitle
    });
  }
  
  // Store quiz answers for CTO Assessment
  if (eventName === EventNames.CTO_ASSESSMENT) {
    if (eventData.action === "completed_assessment") {
      updateUserStorage({
        assessmentResults: {
          ctoType: eventData.ctoType,
          timeCommitment: eventData.timeCommitment,
          typeScore: eventData.typeScore,
          timeScore: eventData.timeScore,
          organizationType: eventData.organizationType
        },
        quizAnswers: eventData.answers
      });
    } else if (eventData.action === "answered_question") {
      const storage = getUserStorage();
      const quizAnswers = storage.quizAnswers || {};
      quizAnswers[eventData.questionId] = {
        questionText: eventData.questionText,
        answerId: eventData.answerId,
        answerText: eventData.answerText
      };
      updateUserStorage({ quizAnswers });
    }
  }
  
  // Store calculator data for IT Budget Optimizer
  if (eventName === EventNames.IT_BUDGET_OPTIMIZER && 
      (eventData.action === "downloaded_pdf" || eventData.action === "requested_report")) {
    updateUserStorage({
      calculatorData: {
        totalSavingsPerYear: eventData.totalSavingsPerYear,
        selectedTools: eventData.selectedTools
      }
    });
  }
  
  // Track in PostHog
  trackPosthog(eventName, userData, eventData);
  
  // Track in Plunk if we have an email and the event is not from a plunk event
  // Add a flag to prevent duplicate calls
  if (userData.email && !eventData.__fromPlunk) {
    // Create a copy of eventData with a flag to prevent recursion
    const plunkEventData = { ...eventData, __fromPlunk: true };
    await trackPlunk(eventName, userData, plunkEventData);
  }
};

/**
 * Sends an event to Plunk
 * @param eventName Event name
 * @param userData User data including email
 * @param eventData Additional event data
 */
const trackPlunk = async (
  eventName: EventNames,
  userData: UserData,
  eventData: EventData = {}
): Promise<void> => {
  try {
    // Get storage data to enhance the event
    const storageData = getUserStorage();
    
    // Debug localStorage contents
    console.log('localStorage data for Plunk:', JSON.stringify(storageData, null, 2));
    
    // Get PostHog IDs directly from PostHog and localStorage
    const posthogData = {
      posthogSessionId: storageData.posthogSessionId || posthog.get_session_id() || '',
      posthogDistinctId: storageData.posthogDistinctId || posthog.get_property('distinct_id') || '',
      posthogDeviceId: storageData.posthogDeviceId || posthog.get_property('$device_id') || ''
    };
    
    console.log('PostHog data for Plunk request:', posthogData);
    
    // Prepare data - keep primitive values as direct template variables
    const data: Record<string, string | number | boolean> = {
      // Include the user data as simple values
      name: userData.name || storageData.name || '',
      firstName: userData.name?.split(' ')[0] || storageData.name?.split(' ')[0] || '',
      jobTitle: userData.jobTitle || storageData.jobTitle || '',
      // Include PostHog identifiers from storage
      ...posthogData,
    };
    
    // Add event data, preserving top-level primitive values
    for (const [key, value] of Object.entries(eventData)) {
      // Skip internal properties
      if (key.startsWith('__')) continue;
      
      // If value is a primitive (string, number, boolean) - keep it as a direct variable
      if (typeof value !== 'object' || value === null) {
        data[key] = value;
      } else {
        // Only stringify complex objects/arrays
        data[key] = JSON.stringify(value);
      }
    }
    
    // Add assessment results if relevant (stringify to avoid nesting)
    if (eventName === EventNames.CTO_ASSESSMENT && storageData.assessmentResults) {
      data.assessmentResults = JSON.stringify(storageData.assessmentResults);
    }
    
    if (eventName === EventNames.CTO_ASSESSMENT && storageData.quizAnswers) {
      data.quizAnswers = JSON.stringify(storageData.quizAnswers);
    }
    
    if (eventName === EventNames.IT_BUDGET_OPTIMIZER && storageData.calculatorData) {
      data.calculatorData = JSON.stringify(storageData.calculatorData);
    }
    
    console.log('Sending Plunk event:', {
      event: eventName,
      email: userData.email,
      data: data
    });
    
    await fetch('https://api.useplunk.com/v1/track', {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${PLUNK_API_KEY}`
      },
      body: JSON.stringify({
        event: eventName,
        email: userData.email,
        data: data
      })
    });
  } catch (error) {
    console.error('Plunk tracking error:', error);
  }
};

/**
 * Track Cal.com booking with all available data
 * @param userData User data
 * @param bookingData Cal.com booking data
 */
export const trackCalComBooking = async (
  userData: UserData, 
  bookingData: any
): Promise<void> => {
  // Prepare all booking data to be passed as event data
  const eventData = {
    action: "cal_booking",
    bookingId: bookingData.id,
    eventType: bookingData.eventType,
    startTime: bookingData.startTime,
    endTime: bookingData.endTime,
    metadata: bookingData.metadata,
    attendees: bookingData.booking?.attendees,
    // Include any other relevant data
    ...bookingData
  };
  
  if (userData.email) {
    // Update storage with Cal.com booking data
    const storage = getUserStorage();
    updateUserStorage({
      email: userData.email,
      name: userData.name || storage.name,
      lastCalBooking: {
        eventType: bookingData.eventType?.title,
        startTime: bookingData.startTime,
        bookingId: bookingData.id
      }
    });
  }
  
  // Use the standard tracking event, which will handle Plunk properly
  await trackEvent(EventNames.CAL_COM_BOOKED, userData, eventData);
};

/**
 * Triggers an email via Plunk
 * @param emailTrigger The email trigger ID
 * @param userData User data including email
 * @param eventData Additional data to include in the email
 */
export const triggerPlunkEmail = async (
  emailTrigger: string,
  userData: UserData,
  eventData: EventData = {}
): Promise<void> => {
  try {
    // Get storage data to enhance the event
    const storageData = getUserStorage();
    
    // Prepare data - ensure that top-level keys are kept as-is for template variables
    // Only stringify nested objects that aren't meant to be template variables
    const data: Record<string, string | number | boolean> = {
      // Include the user data as simple values
      name: userData.name || storageData.name || '',
      firstName: userData.name?.split(' ')[0] || storageData.name?.split(' ')[0] || '',
      jobTitle: userData.jobTitle || storageData.jobTitle || '',
      // Include PostHog identifiers from storage
      posthogSessionId: storageData.posthogSessionId || '',
      posthogDistinctId: storageData.posthogDistinctId || '',
      posthogDeviceId: storageData.posthogDeviceId || '',
    };
    
    // Add event data, but preserve top-level primitive values as direct template variables
    // Only stringify objects/arrays that would cause Plunk to error
    for (const [key, value] of Object.entries(eventData)) {
      // If value is a primitive (string, number, boolean) - keep it as a direct variable
      if (typeof value !== 'object' || value === null) {
        data[key] = value;
      } else {
        // Only stringify complex objects/arrays
        data[key] = JSON.stringify(value);
      }
    }
    
    // Add assessment results if available (stringify to avoid nesting)
    if (storageData.assessmentResults) {
      data.assessmentResults = JSON.stringify(storageData.assessmentResults);
    }
    
    if (storageData.quizAnswers) {
      data.quizAnswers = JSON.stringify(storageData.quizAnswers);
    }
    
    if (storageData.calculatorData) {
      data.calculatorData = JSON.stringify(storageData.calculatorData);
    }
    
    console.log('Sending Plunk email with data:', data);
    
    await fetch('https://api.useplunk.com/v1/track', {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${PLUNK_API_KEY}`
      },
      body: JSON.stringify({
        event: emailTrigger, // Use the email trigger as the event name
        email: userData.email,
        data: data
      })
    });

    // Also track this as a local event for our records
    trackPosthog(EventNames.CONTACT_REQUESTED, userData, {
      action: "email_triggered",
      emailTrigger,
      data: JSON.stringify(data) // Stringify for consistency in logging
    });
    
  } catch (error) {
    console.error('Plunk email trigger error:', error);
  }
}; 
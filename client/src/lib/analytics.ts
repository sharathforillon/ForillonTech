// Analytics wrapper for GA4, LinkedIn Insight Tag, and Meta Pixel
// Supports easy instrumentation for future analytics tools

interface AnalyticsEvent {
  event: string;
  [key: string]: any;
}

declare global {
  interface Window {
    dataLayer?: any[];
    gtag?: (...args: any[]) => void;
    lintrk?: (event: string, properties?: any) => void;
    fbq?: (...args: any[]) => void;
  }
}

class Analytics {
  private isProduction: boolean;

  constructor() {
    this.isProduction = import.meta.env.PROD || false;
  }

  // Initialize GA4
  initGA4(measurementId: string) {
    if (!measurementId || typeof window === 'undefined') return;

    // Load GA4 script
    const script = document.createElement('script');
    script.async = true;
    script.src = `https://www.googletagmanager.com/gtag/js?id=${measurementId}`;
    document.head.appendChild(script);

    // Initialize dataLayer
    window.dataLayer = window.dataLayer || [];
    window.gtag = function() {
      window.dataLayer!.push(arguments);
    };
    window.gtag('js', new Date());
    window.gtag('config', measurementId);

    if (!this.isProduction) {
      console.log('[Analytics] GA4 initialized:', measurementId);
    }
  }

  // Initialize LinkedIn Insight Tag (Official Snippet)
  initLinkedIn(partnerId: string) {
    if (!partnerId || typeof window === 'undefined') return;

    // Official LinkedIn Insight Tag snippet
    (window as any)._linkedin_partner_id = partnerId;
    (window as any)._linkedin_data_partner_ids = (window as any)._linkedin_data_partner_ids || [];
    (window as any)._linkedin_data_partner_ids.push(partnerId);

    // Initialize the lintrk queue
    window.lintrk = window.lintrk || function() {
      const s = (window.lintrk as any).q = (window.lintrk as any).q || [];
      s.push(arguments);
    };

    // Load the LinkedIn Insight Tag script
    const script = document.createElement('script');
    script.type = 'text/javascript';
    script.async = true;
    script.src = 'https://snap.licdn.com/li.lms-analytics/insight.min.js';
    document.head.appendChild(script);

    if (!this.isProduction) {
      console.log('[Analytics] LinkedIn Insight Tag initialized:', partnerId);
    }
  }

  // Initialize Meta Pixel
  initMetaPixel(pixelId: string) {
    if (!pixelId || typeof window === 'undefined') return;

    // Meta Pixel
    window.fbq = window.fbq || function() {
      (window.fbq as any).callMethod ?
        (window.fbq as any).callMethod.apply(window.fbq, arguments) : (window.fbq as any).queue.push(arguments);
    };
    (window.fbq as any).queue = (window.fbq as any).queue || [];
    (window.fbq as any).loaded = true;
    (window.fbq as any).version = '2.0';

    const script = document.createElement('script');
    script.async = true;
    script.src = 'https://connect.facebook.net/en_US/fbevents.js';
    document.head.appendChild(script);

    window.fbq('init', pixelId);
    window.fbq('track', 'PageView');

    if (!this.isProduction) {
      console.log('[Analytics] Meta Pixel initialized:', pixelId);
    }
  }

  // Track feature selection
  trackFeatureSelect(featureName: string, group: 'platform' | 'research', action: 'add' | 'remove', selectedCount: number) {
    const event: AnalyticsEvent = {
      event: 'feature_select',
      feature_name: featureName,
      group,
      action,
      selected_count: selectedCount
    };

    this.sendEvent(event);
  }

  // Track form open
  trackFormOpen(selectedCount: number) {
    const event: AnalyticsEvent = {
      event: 'form_open',
      selected_count: selectedCount
    };

    this.sendEvent(event);
  }

  // Track form submission
  trackFormSubmit(selectedCount: number, leadId?: string) {
    const event: AnalyticsEvent = {
      event: 'form_submit',
      selected_count: selectedCount,
      lead_id: leadId
    };

    this.sendEvent(event);

    // LinkedIn Conversion Tracking (requires numeric conversion ID from Campaign Manager)
    const linkedInConversionId = import.meta.env.VITE_LINKEDIN_CONVERSION_ID;
    if (window.lintrk && linkedInConversionId) {
      window.lintrk('track', { conversion_id: linkedInConversionId });
    }

    // Meta Pixel Conversion
    if (window.fbq) {
      window.fbq('track', 'Lead', {
        content_name: 'Checkbox Demo Request',
        value: selectedCount,
        currency: 'USD'
      });
    }
  }

  // Track CTA clicks
  trackCTAClick(ctaName: string, additionalData?: Record<string, any>) {
    const event: AnalyticsEvent = {
      event: 'cta_click',
      cta_name: ctaName,
      ...additionalData
    };

    this.sendEvent(event);
  }

  // Generic event sender
  private sendEvent(event: AnalyticsEvent) {
    // Send to GA4
    if (window.gtag) {
      window.gtag('event', event.event, event);
    }

    // LinkedIn Insight Tag tracks page views automatically
    // Conversion tracking requires setup in Campaign Manager and numeric conversion IDs
    // See .env.example for VITE_LINKEDIN_CONVERSION_ID configuration

    // Development logging
    if (!this.isProduction) {
      console.log('[Analytics Event]', event);
    }
  }
}

// Singleton instance
export const analytics = new Analytics();

// Auto-initialize with environment variables
if (typeof window !== 'undefined') {
  const gaId = import.meta.env.VITE_GA_MEASUREMENT_ID;
  const linkedInId = import.meta.env.VITE_LINKEDIN_PARTNER_ID;
  const metaPixelId = import.meta.env.VITE_META_PIXEL_ID;

  if (gaId) analytics.initGA4(gaId);
  if (linkedInId) analytics.initLinkedIn(linkedInId);
  if (metaPixelId) analytics.initMetaPixel(metaPixelId);
}

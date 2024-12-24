type AnalyticsEvent = {
    name: string;
    properties?: Record<string, any>;
    timestamp?: number;
  }
  
  export const analytics = {
    trackPageView: (path: string) => {
      const event: AnalyticsEvent = {
        name: 'page_view',
        properties: { path },
        timestamp: Date.now()
      }
      console.log('Track:', event)
    },
  
    trackEvent: (name: string, properties?: Record<string, any>) => {
      const event: AnalyticsEvent = {
        name,
        properties,
        timestamp: Date.now()
      }
      console.log('Track:', event)
    }
  }
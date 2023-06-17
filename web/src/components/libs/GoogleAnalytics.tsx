/* eslint-disable @typescript-eslint/no-explicit-any */
import Script from 'next/script';

export const GA_TRACKING_ID: string = process.env.NEXT_PUBLIC_GA_ID || '';

interface EventProps {
  action: string;
  category: string;
  label: string;
  value: string | number;
}

declare global {
  interface Window {
    gtag: any;
  }
}

// https://developers.google.com/analytics/devguides/collection/gtagjs/pages
export const registerPageView = (url: string): void => {
  if (window && GA_TRACKING_ID) {
    console.log('registerPageView', url);
    window.gtag('config', GA_TRACKING_ID, {
      page_path: url,
    });
  }
};

// https://developers.google.com/analytics/devguides/collection/gtagjs/events
export const registerGaEvent = ({ action, category, label, value }: EventProps): void => {
  if (window && GA_TRACKING_ID) {
    console.log('registerGaEvent', action, category, label, value);
    window.gtag('event', action, {
      event_category: category,
      event_label: label,
      value: value,
    });
  }
};

const GoogleAnalytics = () => {

  return (
    <div>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`}
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive" >
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){window.dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', ${GA_TRACKING_ID});
        `}
      </Script>
    </div>
  );
};

export default GoogleAnalytics;

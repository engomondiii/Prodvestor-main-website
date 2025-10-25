/**
 * PRODVESTOR WEBSITE - Analytics Utilities
 * FILE LOCATION: src/utils/analytics.js
 */

/**
 * Initialize analytics (Google Analytics, etc.)
 */
export function initAnalytics() {
  // Google Analytics
  if (process.env.REACT_APP_GA_TRACKING_ID) {
    const script = document.createElement('script');
    script.async = true;
    script.src = `https://www.googletagmanager.com/gtag/js?id=${process.env.REACT_APP_GA_TRACKING_ID}`;
    document.head.appendChild(script);

    window.dataLayer = window.dataLayer || [];
    function gtag() {
      window.dataLayer.push(arguments);
    }
    gtag('js', new Date());
    gtag('config', process.env.REACT_APP_GA_TRACKING_ID);
  }
}

/**
 * Track page view
 */
export function trackPageView(path, title) {
  if (window.gtag) {
    window.gtag('config', process.env.REACT_APP_GA_TRACKING_ID, {
      page_path: path,
      page_title: title
    });
  }
}

/**
 * Track event
 */
export function trackEvent(action, category, label, value) {
  if (window.gtag) {
    window.gtag('event', action, {
      event_category: category,
      event_label: label,
      value: value
    });
  }
}

/**
 * Track button click
 */
export function trackButtonClick(buttonName, location) {
  trackEvent('click', 'Button', `${buttonName} - ${location}`);
}

/**
 * Track form submission
 */
export function trackFormSubmit(formName, success = true) {
  trackEvent(success ? 'submit_success' : 'submit_error', 'Form', formName);
}

/**
 * Track external link click
 */
export function trackExternalLink(url) {
  trackEvent('click', 'External Link', url);
}

/**
 * Track download
 */
export function trackDownload(fileName) {
  trackEvent('download', 'File', fileName);
}

/**
 * Track search
 */
export function trackSearch(searchTerm, resultsCount) {
  trackEvent('search', 'Search', searchTerm, resultsCount);
}

/**
 * Track video play
 */
export function trackVideoPlay(videoTitle) {
  trackEvent('play', 'Video', videoTitle);
}

/**
 * Track social share
 */
export function trackSocialShare(platform, url) {
  trackEvent('share', 'Social', `${platform} - ${url}`);
}

/**
 * Track error
 */
export function trackError(errorMessage, errorLocation) {
  trackEvent('error', 'Error', `${errorLocation}: ${errorMessage}`);
}

/**
 * Track user timing
 */
export function trackTiming(category, variable, value, label) {
  if (window.gtag) {
    window.gtag('event', 'timing_complete', {
      name: variable,
      value: value,
      event_category: category,
      event_label: label
    });
  }
}

export default {
  initAnalytics,
  trackPageView,
  trackEvent,
  trackButtonClick,
  trackFormSubmit,
  trackExternalLink,
  trackDownload,
  trackSearch,
  trackVideoPlay,
  trackSocialShare,
  trackError,
  trackTiming
};
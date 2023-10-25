/**
 * Creates a virtual page view in google analytics
 * @param pageTitle Title of the page
 * @param page Url of the page
 */
export default function createAnalyticsPageView(pageTitle: string, page: string) {
  if (window.ga !== undefined) {
    window.ga('send', 'pageview', {
      page,
      page_title: pageTitle
    });
  }
}

declare global {
  interface Window {
    ga?: any;
  }
}

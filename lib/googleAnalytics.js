const pageview = (url) => {
  const googleAnalyticsId = process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID
  window.gtag('config', googleAnalyticsId, {
    page_path: url,
  })
}

export { pageview }

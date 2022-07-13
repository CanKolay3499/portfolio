const pageview = (url) => {
  const googleAnalyticsId = process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID
  window.gtag('config', googleAnalyticsId, {
    page_path: url,
  })
}

const event = ({ action, params }) => {
  window.gtag('event', action, params)
}

export { pageview, event }

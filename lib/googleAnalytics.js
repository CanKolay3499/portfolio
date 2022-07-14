import data from '@/data'

const pageview = (url) => {
  window.gtag('config', data.googleAnalyticsId, {
    page_path: url
  })
}

export { pageview }

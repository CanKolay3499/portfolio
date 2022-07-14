import React from 'react'
import { Html, Head, Main, NextScript } from 'next/document'
import data from '@/data'

const Document: React.FC = () => {
  return (
    <Html lang="en">
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700&family=Roboto+Mono:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />

        <script async src={`https://www.googletagmanager.com/gtag/js?id=${data.googleAnalyticsId}`} />

        <script
          dangerouslySetInnerHTML={{
            __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${data.googleAnalyticsId}', {
              page_path: window.location.pathname,
            });
          `
          }}
        />

        <link rel="shortcut icon" href="/favicon.ico" />

        <meta name="description" content="Portfolio - CanKolay3499" />
        <meta name="theme-color" content="#FFFFFF" />

        <meta property="og:type" content="website" />
        <meta property="og:title" content="CanKolay3499" />
        <meta property="og:description" content="My personal website" />
      </Head>
      <body className="text-primary bg-primary">
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}

export default Document

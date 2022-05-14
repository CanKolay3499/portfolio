import React from 'react'
import { Html, Head, Main, NextScript } from 'next/document'

const Document: React.FC<{}> = () => {
  const appName: string = process.env.NEXT_PUBLIC_APP_NAME
  const appDescription: string = process.env.NEXT_PUBLIC_APP_DESCRIPTION

  return (
    <Html lang="en">
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700&family=Roboto+Mono:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />

        <link rel="shortcut icon" href="/favicon.ico" />

        <meta name="application-name" content={appName} />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content={appName} />
        <meta name="description" content={appDescription} />
        <meta name="format-detection" content="telephone=no" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="theme-color" content="#FFFFFF" />

        <meta property="og:type" content="website" />
        <meta property="og:title" content={appName} />
        <meta property="og:description" content={appDescription} />
        <meta property="og:site_name" content={appName} />
      </Head>
      <body className="text-primary bg-primary">
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}

export default Document

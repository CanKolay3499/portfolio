import React from 'react'
import { Html, Head, Main, NextScript } from 'next/document'

const Document: React.FC = () => {
  return (
    <Html lang="en">
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700&family=Roboto+Mono:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />

        <link rel="shortcut icon" href="/favicon.ico" />

        <meta name="description" content="Portfolio - CanKolay3499" />
        <meta name="theme-color" content="#FFFFFF" />

        <meta property="og:type" content="website" />
        <meta property="og:title" content="CanKolay3499" />
        <meta property="og:description" content="Portfolio - CanKolay3499" />
      </Head>
      <body className="text-primary bg-primary">
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}

export default Document

import React from 'react'
import { motion } from 'framer-motion'
import { Header } from '@/components'

import type { AppProps } from 'next/app'

import '@/styles/globals.css'
import Head from 'next/head'

const App: React.FC<AppProps> = ({ Component, pageProps }: AppProps) => {
  const appName: string = process.env.NEXT_PUBLIC_APP_NAME

  return (
    <>
      <Head>
        <title>{appName}</title>

        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no, viewport-fit=cover"
        />
      </Head>

      <motion.main transition={{ duration: 1 }} animate={{ opacity: 1 }} initial={{ opacity: 0 }}>
        <Header />
        <motion.main
          transition={{ duration: 0.5 }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          key={Math.random()}
        >
          <Component {...pageProps} />
        </motion.main>
      </motion.main>
    </>
  )
}

export default App

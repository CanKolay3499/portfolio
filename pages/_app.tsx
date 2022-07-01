import React from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Header } from '@/components'
import Head from 'next/head'
import { SWRConfig } from 'swr'
import axios from 'axios'

import type { AppProps } from 'next/app'

import 'windi.css'
import '@/styles/globals.css'

const App: React.FC<AppProps> = ({ Component, pageProps }: AppProps) => {
  const fetcher: any = (url: string) => axios.get(url).then((res) => res.data)

  return (
    <>
      <Head>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no, viewport-fit=cover"
        />
      </Head>

      <SWRConfig value={{ fetcher }}>
        <Header />
        <AnimatePresence exitBeforeEnter>
          <motion.main
            transition={{ duration: 0.25 }}
            initial={{ y: -25, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 50, opacity: 0 }}
            key={Math.random()}
          >
            <Component {...pageProps} />
          </motion.main>
        </AnimatePresence>
      </SWRConfig>
    </>
  )
}

export default App

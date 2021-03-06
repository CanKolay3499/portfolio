import React, { useEffect } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Header } from '@/components'
import Head from 'next/head'
import { SWRConfig } from 'swr'
import { fetcher, pageview } from '@/lib'
import { useRouter } from 'next/router'

import type { AppProps } from 'next/app'

import '@/styles/globals.css'

const App: React.FC<AppProps> = ({ Component, pageProps }: AppProps) => {
  const router = useRouter()

  useEffect(() => {
    const handleRouteChange = (url: string) => {
      pageview(url)
    }

    router.events.on('routeChangeComplete', handleRouteChange)

    return () => {
      router.events.off('routeChangeComplete', handleRouteChange)
    }
  }, [router.events])

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
            transition={{ duration: 0.2 }}
            initial={{ y: -25, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 25, opacity: 0 }}
            key={router.asPath}
            className="min-h-screen_"
          >
            <Component {...pageProps} />
          </motion.main>
        </AnimatePresence>
      </SWRConfig>
    </>
  )
}

export default App

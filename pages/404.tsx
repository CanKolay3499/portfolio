import React from 'react'
import { Container } from '@/components'
import Link from 'next/link'
import Head from 'next/head'

const Error404Page: React.FC<{}> = () => {
  const appName: string = process.env.NEXT_PUBLIC_APP_NAME

  return (
    <>
      <Head>
        <title>Error - 404 - {appName}</title>
      </Head>

      <Container className="flex flex-col text-4xl font-bold justify-center gap-2 _h-screen">
        <span>Oops,</span>
        <span>Looks like</span>
        <span>you&apos;re lost.</span>
        <Link href="/" passHref>
          <a className="text-2xl mt-1 flex font-bold text-primary-400">
            <p>
              What about going to <span className="text-primary-600">Home page</span>?
            </p>
          </a>
        </Link>
      </Container>
    </>
  )
}

export default Error404Page

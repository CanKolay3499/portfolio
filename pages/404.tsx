import React from 'react'
import { Container } from '@/components'
import Link from 'next/link'
import Head from 'next/head'

const Error404Page: React.FC<{}> = () => {
  return (
    <>
      <Head>
        <title>Error - 404 - CanKolay3499</title>
      </Head>

      <Container className="flex flex-col text-4xl font-bold justify-center gap-2 _h-screen">
        <span>Oops,</span>
        <span>Looks like</span>
        <span>you&apos;re lost.</span>
        <Link href="/" passHref>
          <a className="text-2xl mt-1 flex font-bold text-primary-400">
            What about going to <p className="text-primary-600 mx-1">Home page</p>?
          </a>
        </Link>
      </Container>
    </>
  )
}

export default Error404Page

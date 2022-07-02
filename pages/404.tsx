import React from 'react'
import { Container } from '@/components'
import Link from 'next/link'
import Head from 'next/head'

const Error404Page: React.FC = () => {
  return (
    <>
      <Head>
        <title>Error _ 404 _ Can Kolay</title>
      </Head>

      <Container>
        <h1 className="text-4xl font-bold mb-6 mt-2">404</h1>
        <div className="flex mt-6 flex-col text-4xl font-bold justify-center gap-2">
          <span>Looks like</span>
          <span>you&apos;re lost.</span>
          <Link href="/" passHref>
            <a className="text-2xl mt-1 flex font-bold text-primary-400">
              What about going to <p className="text-primary-600 mx-1">Home page</p>?
            </a>
          </Link>
        </div>
      </Container>
    </>
  )
}

export default Error404Page

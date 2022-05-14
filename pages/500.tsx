import React from 'react'
import { Container } from '@/components'
import Link from 'next/link'
import Head from 'next/head'

const Error500Page: React.FC<{}> = () => {
  const appName: string = process.env.NEXT_PUBLIC_APP_NAME

  return (
    <>
      <Head>
        <title>Error - 500 - {appName}</title>
      </Head>

      <Container className="flex flex-col text-4xl font-bold justify-center gap-2 _h-screen">
        <span>Uhhh,</span>
        <span>Sorry to</span>
        <span>see you in here.</span>
        <span>Probably our code</span>
        <span>or server is</span>
        <span>fucked up.</span>
        <Link href="/" passHref>
          <a className="text-2xl mt-1 flex font-bold text-primary-400">
            <p>
              Could you please open a <span className="text-primary-600">issue in Github</span>?
            </p>
          </a>
        </Link>
      </Container>
    </>
  )
}

export default Error500Page

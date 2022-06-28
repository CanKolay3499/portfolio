import React from 'react'
import Link from 'next/link'
import { Container } from '@/components'
import Head from 'next/head'

const ContactPage: React.FC<{}> = () => {
  return (
    <>
      <Head>
        <title>Contact me - CanKolay3499</title>
      </Head>

      <Container>
        <h1 className="text-4xl font-bold mb-6 mt-2">Contact me</h1>

        <div className="mb-4 border border-primary shadow cursor-pointer flex flex-col justify-center bg-secondary py-2 px-4 rounded-2xl">
          <Link href="mailto:cankolay3499@gmail.com" passHref>
            <a className="text-3xl items-center flex font-medium text-primary-300">E-Mail</a>
          </Link>
          <p className="text-secondary-disabled text-sm font-bold font-mono">
            cankolay3499@gmail.com
          </p>
        </div>

        <div className="mb-4 border border-primary shadow cursor-pointer flex flex-col justify-center bg-secondary py-2 px-4 rounded-2xl">
          <h2 className="text-3xl items-center flex font-medium text-primary-300">Discord</h2>
          <p className="text-secondary-disabled text-sm font-bold font-mono">Can Kolay#5578</p>
        </div>
      </Container>
    </>
  )
}

export default ContactPage

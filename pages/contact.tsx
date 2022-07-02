import React from 'react'
import Link from 'next/link'
import { Container, Box } from '@/components'
import Head from 'next/head'

const ContactPage: React.FC = () => {
  return (
    <>
      <Head>
        <title>Contact me • Can Kolay</title>
      </Head>

      <Container>
        <h1 className="text-4xl font-bold mb-6 mt-2">Contact me</h1>

        <Box>
          <Link href="mailto:cankolay3499@gmail.com" passHref>
            <a className="text-3xl items-center flex font-medium text-primary-400">E-Mail</a>
          </Link>
          <p className="text-secondary-disabled text-sm font-bold font-mono">
            cankolay3499@gmail.com
          </p>
        </Box>

        <Box>
          <h2 className="text-3xl items-center flex font-medium text-primary-400">Discord</h2>
          <p className="text-secondary-disabled text-sm font-bold font-mono">Can Kolay#5578</p>
        </Box>
      </Container>
    </>
  )
}

export default ContactPage

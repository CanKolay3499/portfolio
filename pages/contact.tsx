import React from 'react'
import Link from 'next/link'
import { Container, Box } from '@/components'
import Head from 'next/head'

const ContactPage: React.FC = () => {
  const title: string = process.env.NEXT_PUBLIC_TITLE
  const email: string = process.env.NEXT_PUBLIC_EMAIL
  const discordUsername: string = process.env.NEXT_DISCORD_USERNAME

  return (
    <>
      <Head>
        <title>Contact me • {title}</title>
      </Head>

      <Container>
        <h1 className="text-4xl font-bold mb-6 mt-2">Contact me</h1>

        <Box>
          <Link href={"mailto:" + email} passHref>
            <a className="text-3xl items-center flex font-medium text-primary-400">E-Mail</a>
          </Link>
          <p className="text-secondary-disabled text-sm font-bold font-mono">
            {email}
          </p>
        </Box>

        <Box>
          <h2 className="text-3xl items-center flex font-medium text-primary-400">Discord</h2>
          <p className="text-secondary-disabled text-sm font-bold font-mono">{discordUsername}</p>
        </Box>
      </Container>
    </>
  )
}

export default ContactPage

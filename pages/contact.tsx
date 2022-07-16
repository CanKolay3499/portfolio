import React from 'react'
import Link from 'next/link'
import { Container, Box } from '@/components'
import Head from 'next/head'
import data from '@/data'

const ContactPage: React.FC = () => {
  return (
    <>
      <Head>
        <title>Contact me • {data.title}</title>
      </Head>

      <Container>
        <h1 className="text-4xl font-bold mb-6 mt-2">Contact me</h1>

        {Object.keys(data.contact).map((x: string, index: number): React.ReactNode => {
          return (
            <Box key={index}>
              {data.contact[x].link ? (
                <Link href={data.contact[x].link} passHref>
                  <a className="text-3xl items-center flex font-medium text-primary-400">{x}</a>
                </Link>
              ) : (
                <h2 className="text-3xl items-center flex font-medium text-primary-400">{x}</h2>
              )}
              <p className="text-secondary-disabled text-sm font-bold font-mono">
                {data.contact[x].value}
              </p>
            </Box>
          )
        })}
      </Container>
    </>
  )
}

export default ContactPage

import React from 'react'
import { Container } from '@/components'
import Link from 'next/link'

const Error404Page: React.FC<{}> = () => {
  return (
    <>
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

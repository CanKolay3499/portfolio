import React from 'react'
import { Container, Logo } from '@/components'
import Link from 'next/link'

const Header: React.FC<{}> = () => {
  return (
    <>
      <nav className="h-16 z-50 backdrop-blur backdrop-filter !bg-opacity-50 bg-primary sticky top-0 border-default border-b flex items-center justify-center">
        <Container className="flex justify-between items-center h-16">
          <Link href="/" passHref>
            <a>
              <Logo />
            </a>
          </Link>
        </Container>
      </nav>
    </>
  )
}

export { Header }

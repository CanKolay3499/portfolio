import React from 'react'
import { Container, Logo } from '@/components'

const Footer: React.FC = () => {
  return (
    <>
      <div className="w-screen h-16 border-t border-primary bg-primary">
        <Container className="flex items-center justify-center h-16">
          <Logo />
        </Container>
      </div>
    </>
  )
}

export { Footer }

import React from 'react'
import { Container, Logo } from '@/components'
import { motion } from 'framer-motion'

const Footer: React.FC = () => {
  return (
    <>
      <motion.footer
        transition={{ duration: 0.25 }}
        initial={{ y: 25, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: -25, opacity: 0 }}
        className="w-screen h-16 border-t border-primary bg-primary">
        <Container className="flex items-center justify-center h-16">
          <Logo />
        </Container>
      </motion.footer>
    </>
  )
}

export { Footer }

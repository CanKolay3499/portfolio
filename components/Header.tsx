import React, { useEffect, useState } from 'react'
import { Container, Logo } from '@/components'
import Link from 'next/link'
import { useWindowDimensions } from '@/hooks'
import { AnimatePresence, motion } from 'framer-motion'
import { RiMenu5Fill, RiCloseFill, RiGithubLine } from 'react-icons/ri'
import { useRouter } from 'next/router'
import cn from 'classnames'

const Header: React.FC<{}> = () => {
  const router = useRouter()

  const [header, setHeader] = useState(false)
  const { width } = useWindowDimensions()

  useEffect(() => {
    setHeader(false)
  }, [router.asPath])

  type Link = {
    label: string
    url: string
  }

  const links: Link[] = [
    {
      label: 'Home',
      url: '/'
    },
    {
      label: 'Contact me',
      url: '/contact'
    },
    {
      label: 'Projects',
      url: '/projects'
    }
  ]

  const ToggleHeader: React.FC<{}> = () => {
    return (
      <>
        <button
          onClick={(e) => {
            e.preventDefault()
            setHeader(!header)
          }}
          className="bg-secondary ml-2 border border-primary p-2 flex items-center h-10 w-10 text-3xl justify-center rounded-xl"
        >
          {header ? <RiCloseFill /> : <RiMenu5Fill />}
        </button>
      </>
    )
  }

  const MobileHeader: React.FC<{}> = () => {
    return (
      <>
        <motion.div
          className="fixed mx-auto flex justify-center items-center w-screen inset-0 h-screen z-50"
          transition={{ duration: 0.3, ease: 'easeInOut' }}
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ y: 50, opacity: 0 }}
        >
          <Container className="bg-primary fixed border border-primary rounded-2xl">
            <div className="h-16 w-full px-4 border-b border-primary flex items-center justify-between">
              <motion.h1 className="text-xl font-bold">Links</motion.h1>
              <ToggleHeader />
            </div>
            <div className="flex flex-col py-2 items-center w-full px-4">
              {links.map((link: Link, index: number) => {
                const active = link.url == router.asPath
                return (
                  <Link href={link.url} key={index} passHref>
                    <motion.a
                      className={cn(
                        'mb-1 last:mb-0',
                        active ? 'font-medium text-primary' : 'text-secondary'
                      )}
                    >
                      {link.label}
                    </motion.a>
                  </Link>
                )
              })}
            </div>
          </Container>
        </motion.div>
      </>
    )
  }

  const MobileHeaderOverlay: React.FC<{}> = () => {
    return (
      <>
        <motion.div
          onClick={(e) => {
            e.preventDefault()
            setHeader(!header)
          }}
          transition={{ duration: 0.3 }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 w-screen h-screen bg-secondary !bg-opacity-95 backdrop-filter backdrop-blur-3xl z-40"
        ></motion.div>
      </>
    )
  }

  return (
    <>
      <nav className="h-16 z-50 border-b border-primary backdrop-blur backdrop-filter !bg-opacity-50 bg-primary sticky w-screen top-0 flex items-center justify-center">
        <Container className="flex justify-between items-center h-16">
          <Link href="/" passHref>
            <a className="flex items-center">
              <Logo />
            </a>
          </Link>
          <AnimatePresence exitBeforeEnter>
            {header && width < 768 && (
              <>
                <MobileHeader />
                <MobileHeaderOverlay />
              </>
            )}
          </AnimatePresence>
          <div className="flex items-center">
            {width > 768 && (
              <div className="flex flex-row-reverse items-center">
                {links.map((link: Link, index: number) => {
                  const active = link.url == router.asPath
                  return (
                    <Link href={link.url} key={index} passHref>
                      <motion.a
                        className={cn(
                          'ml-2 last:ml-0',
                          active ? 'font-medium text-primary' : 'text-secondary'
                        )}
                      >
                        {link.label}
                      </motion.a>
                    </Link>
                  )
                })}
              </div>
            )}
            <Link href="https://github.com/CanKolay3499" passHref>
              <a className="ml-2 bg-secondary border border-primary p-2 flex items-center h-10 w-10 text-3xl justify-center rounded-xl">
                <RiGithubLine />
              </a>
            </Link>
            {width < 768 && <ToggleHeader />}
          </div>
        </Container>
      </nav>
    </>
  )
}

export { Header }

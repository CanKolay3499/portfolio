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

  const buttonStyle: string = "bg-secondary ml-2 border border-primary p-2 flex items-center h-10 w-10 text-3xl justify-center rounded-xl"

  const ToggleHeader: React.FC = () => {
    return (
      <>
        <button
          onClick={(e) => {
            e.preventDefault()
            setHeader(!header)
          }}
          className={buttonStyle}
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
          className="fixed mx-auto flex justify-center items-center inset-0 z-40"
          transition={{ duration: 0.3 }}
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          exit={{ scale: 0 }}
        >
          <Container className="bg-primary fixed border border-primary rounded-2xl dark:shadow-2xl">
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
        <motion.div onClick={(e) => {
          e.preventDefault()
          setHeader(!header)
        }}
          transition={{ duration: 0.30 }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="z-30 fixed inset-0 bg-secondary bg-opacity-25 backdrop-filter backdrop-blur-sm"
        >
        </motion.div>
      </>
    )
  }

  return (
    <>
      <nav className={cn("h-16 z-50 transition duration-300 border-b border-primary bg-primary fixed w-screen top-0 flex items-center justify-center", !header ? 'bg-opacity-75 backdrop-filter backdrop-blur-sm' : '')}>
        <Container className="flex justify-between items-center h-16">
          <Link href="/" passHref>
            <a className="flex items-center">
              <Logo />
            </a>
          </Link>

          <div className="flex items-center">
            {width > 768 && (
              <div className="flex flex-row-reverse items-center">
                {links.map((link: Link, index: number) => {
                  const active = link.url == router.asPath
                  return (
                    <Link href={link.url} key={index} passHref>
                      <motion.a
                        className={cn(
                          'ml-2 last:ml-0 transition duration-150',
                          active ? 'font-bold text-primary' : 'text-secondary-disabled hover:text-primary focus:text-primary'
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
              <a target="_blank" className={buttonStyle}>
                <RiGithubLine />
              </a>
            </Link>
            {width < 768 && <ToggleHeader />}
          </div>
        </Container>

      </nav>
      <div className="opacity-0 h-16">.</div>
      <AnimatePresence exitBeforeEnter>
        {header && width < 768 && (
          <>
            <MobileHeader />
            <MobileHeaderOverlay />
          </>
        )}
      </AnimatePresence>
    </>
  )
}

export { Header }

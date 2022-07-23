import React, { useEffect, useState, Fragment } from 'react'
import { Container, Logo } from '@/components'
import Link from 'next/link'
import { useWindowDimensions } from '@/hooks'
import { RiMenu5Fill, RiCloseFill, RiGithubLine } from 'react-icons/ri'
import { useRouter } from 'next/router'
import cn from 'classnames'
import { Dialog, Transition } from '@headlessui/react'
import data from '@/data'

type PageTitleProps = {
  title: string | number
}

const Header: React.FC = () => {
  const router = useRouter()

  const [mobileMenu, setMobileMenu] = useState<boolean | null>(null)

  const { width } = useWindowDimensions()

  useEffect(() => {
    setMobileMenu(false)
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

  const buttonStyle: string =
    'bg-secondary ml-2 border border-primary p-2 flex items-center h-10 w-10 text-3xl justify-center rounded-full'

  return (
    <>
      <header className="h-16 z-50 border-b border-primary bg-primary fixed w-screen top-0 flex items-center justify-center">
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
                      <a
                        className={cn(
                          'ml-2 last:ml-0 transition duration-150',
                          active
                            ? 'font-bold text-primary'
                            : 'text-secondary-disabled hover:text-primary focus:text-primary'
                        )}
                      >
                        {link.label}
                      </a>
                    </Link>
                  )
                })}
              </div>
            )}

            <Link href={'https://github.com/' + data.githubUsername} passHref>
              <a target="_blank" className={buttonStyle}>
                <RiGithubLine />
              </a>
            </Link>

            {width < 768 && (
              <button onClick={() => setMobileMenu(!mobileMenu)} className={buttonStyle}>
                {mobileMenu ? <RiCloseFill /> : <RiMenu5Fill />}
              </button>
            )}
          </div>
        </Container>
      </header>

      {width < 768 && (
        <Transition appear show={mobileMenu} as={Fragment}>
          <Dialog onClose={() => setMobileMenu(false)} as="div">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-200"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <div className="fixed z-[25] backdrop-blur-sm inset-0 bg-black bg-opacity-25" />
            </Transition.Child>

            <div className="fixed z-[75] inset-0 items-center min-h-full w-screen justify-center overflow-y-auto flex">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-200"
                enterFrom="opacity-0 scale-90"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-90"
              >
                <Dialog.Panel className="fixed top-20 bg-primary overflow-hidden w-11/12 max-w-sm border border-primary rounded-2xl shadow-2xl">
                  <div className="h-16 w-full px-4 border-primary border-b flex items-center justify-between">
                    <Dialog.Title as="h1" className="text-2xl font-bold !p-0 !m-0">
                      Links
                    </Dialog.Title>
                  </div>
                  <div className="flex flex-col py-2 items-center w-full px-4">
                    {links.map((link: Link, index: number): React.ReactNode => {
                      const active: boolean = link.url == router.asPath
                      return (
                        <Link href={link.url} key={index} passHref>
                          <a
                            className={cn(
                              'mb-1 last:mb-0',
                              active ? 'font-medium text-primary' : 'text-secondary'
                            )}
                          >
                            {link.label}
                          </a>
                        </Link>
                      )
                    })}
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </Dialog>
        </Transition>
      )}
      <div className="h-16 opacity-0">.</div>
    </>
  )
}

const PageTitle: React.FC<PageTitleProps> = (props: PageTitleProps) => {
  return (
    <>
      <h1 className="text-4xl font-bold mb-6 pb-2 border-b-4 border-primary mt-2">{props.title}</h1>
    </>
  )
}

export { Header, PageTitle }

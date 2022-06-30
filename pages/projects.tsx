import React from 'react'
import { Box, Container } from '@/components'
import Link from 'next/link'
import Head from 'next/head'
import useSWR from 'swr'
import { AnimatePresence, motion } from 'framer-motion'

const ProjectsPage: React.FC<{}> = () => {
  const { data: repos }: any = useSWR('https://api.github.com/users/CanKolay3499/repos')

  return (
    <>
      <Head>
        <title>Projects - CanKolay3499</title>
      </Head>

      <Container>
        <h1 className="text-4xl font-bold mb-6 mt-2">Projects</h1>
        <AnimatePresence exitBeforeEnter>
          {!repos ? (
            <>
              <motion.div
                transition={{ duration: 0.5 }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="mb-4 border border-primary shadow flex flex-col animate-pulse justify-center bg-secondary py-2 px-4 rounded-2xl"
              >
                <div className="flex-1">
                  <div className="text-3xl mb-3 bg-tertiary h-3 rounded shadow w-9/12 block font-medium text-primary-400"></div>
                  <div className="text-3xl mb-1 bg-tertiary h-3 rounded shadow w-full block font-medium text-primary-400"></div>
                  <div className="text-3xl bg-tertiary h-3 rounded shadow w-full block font-medium text-primary-400"></div>
                </div>
              </motion.div>
            </>
          ) : (
            <>
              {repos.filter((repo: any): boolean => {
                return repo.name == 'CanKolay3499' ? false : true
              }).map((repo: any, index: number): React.ReactNode => {
                return (
                  <motion.div
                    transition={{ duration: 0.5 }}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    key={index}
                  >
                    <Box>
                      <Link href={repo.html_url} passHref>
                        <a className="text-3xl items-center flex font-medium text-primary-400">
                          {repo.name}
                          {repo.fork && (
                            <span className="font-medium mx-2 text-secondary-disabled text-sm">(Fork)</span>
                          )}
                        </a>
                      </Link>
                      {repo.description && (
                        <p className="text-secondary-disabled text-sm font-bold font-mono">
                          {repo.description}
                        </p>
                      )}
                    </Box>
                  </motion.div>
                )
              })}
            </>
          )}
        </AnimatePresence>
      </Container>
    </>
  )
}

export default ProjectsPage

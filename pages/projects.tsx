import React from 'react'
import { Box, Container, PageTitle } from '@/components'
import Link from 'next/link'
import Head from 'next/head'
import useSWR from 'swr'
import { AnimatePresence, motion } from 'framer-motion'
import data from '@/data'

const ProjectsPage: React.FC = () => {
  const { data: repos }: any = useSWR(`https://api.github.com/users/${data.githubUsername}/repos`)

  return (
    <>
      <Head>
        <title>Projects • {data.title}</title>
      </Head>

      <Container>
        <PageTitle title="Projects" />

        <AnimatePresence exitBeforeEnter>
          {!repos ? (
            <>
              <motion.div
                transition={{ duration: 0.5 }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className='mb-4 border border-primary cursor-pointer animate-pulse bg-primary py-2 px-4 rounded-2xl'
              >
                <div className="flex-1 animation-pulse">
                  <div className="text-3xl mb-3 bg-secondary h-4 rounded w-6/12 block font-medium text-primary-400"></div>
                  <div className="text-3xl mb-1 bg-secondary h-3 rounded w-full block font-medium text-primary-400"></div>
                  <div className="text-3xl bg-secondary h-3 rounded w-full block font-medium text-primary-400"></div>
                </div>
              </motion.div>
            </>
          ) : (
            <>
              {repos
                .filter((repo: any): boolean => {
                  return repo.name == 'CanKolay3499' ? false : true
                })
                .map((repo: any, index: number): React.ReactNode => {
                  return (
                    <motion.div
                      transition={{ duration: 0.5 }}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      key={index}
                    >
                      <Box className="!p-0">
                        <div className="h-16 w-full px-4 border-primary border-b flex items-center justify-between">
                          <Link href={repo.html_url} passHref>
                            <a className="text-3xl font-medium text-primary-500">
                              {repo.name}

                            </a>
                          </Link>
                          {repo.fork && (
                            <span className="font-bold mx-2 text-secondary-disabled text-sm">
                              (Fork)
                            </span>
                          )}
                        </div>
                        <div className="flex flex-col py-2 items-center text-center w-full px-4">
                          {repo.description && (
                            <p className="font-medium">
                              {repo.description}
                            </p>
                          )}
                          {repo.topics && (
                            <div className="mt-1 flex items-center">
                              {repo.topics.map((topic: string, index: number): React.ReactNode => {
                                return (
                                  <div
                                    className="bg-primary-300 dark:bg-primary-400 text-secondary rounded-full font-mono px-4 mr-2 last:mr-0"
                                    key={index}
                                  >
                                    {topic}
                                  </div>
                                )
                              })}
                            </div>
                          )}
                        </div>
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

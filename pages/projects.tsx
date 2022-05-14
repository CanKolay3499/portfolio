import React from 'react'
import { Container } from '@/components'
import axios from 'axios'
import Link from 'next/link'

import type { GetServerSideProps } from 'next'

type ProjectsPageProps = {
  repos: any
}

const ProjectsPage: React.FC<ProjectsPageProps> = ({ repos }: ProjectsPageProps) => {
  return (
    <>
      <Container>
        <h1 className="text-4xl font-bold mb-6 mt-2">Projects</h1>
        {repos.map((repo: any, index: number) => {
          return (
            <div
              className="mb-4 flex flex-col justify-center bg-secondary py-2 px-4 rounded-2xl"
              key={index}
            >
              <Link href={repo.html_url} passHref>
                <a>
                  <h2 className="text-3xl items-center flex font-medium text-primary-400">
                    {repo.name}
                  </h2>
                </a>
              </Link>
              {repo.fork && <span className="font-medium my-2 text-secondary-disabled">Fork</span>}
              {repo.description && (
                <p className="text-secondary-disabled text-sm font-bold font-mono">
                  {repo.description}
                </p>
              )}
            </div>
          )
        })}
      </Container>
    </>
  )
}

const getServerSideProps: GetServerSideProps = async () => {
  const res = await axios({ method: 'GET', url: 'https://api.github.com/users/CanKolay3499/repos' })
  const repos = res.data

  return {
    props: {
      repos
    }
  }
}

export { getServerSideProps }
export default ProjectsPage

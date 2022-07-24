import React from 'react'
import { Container, PageTitle } from '@/components'
import Head from 'next/head'
import data from '@/data'

const HomePage: React.FC = () => {
  return (
    <>
      <Head>
        <title>About me • {data.title}</title>
      </Head>

      <Container>
        <PageTitle title="About me" />

        <div className="mb-4">
          <h2 className="text-2xl font-medium mb-1">Short bio</h2>
          <div>
            <div
              className="text-secondary font-mono"
              dangerouslySetInnerHTML={{ __html: data.homePage.shortBio }}
            />
          </div>
        </div>

        <div data-nosnippet className="mb-4">
          <h2 className="text-2xl font-medium mb-1">Skills</h2>
          <div className="grid grid-rows-2 grid-cols-2 md:grid-cols-3 gap-2">
            {Object.keys(data.homePage.skills).map(
              (key: string, index: number): React.ReactNode => {
                return (
                  <div key={index}>
                    <h3 className="font-bold text-xl">{key}</h3>
                    <div className="font-medium font-mono text-secondary flex flex-col">
                      {data.homePage.skills[key].map(
                        (skill: string, index: number): React.ReactNode => {
                          return <span key={index}>{skill}</span>
                        }
                      )}
                    </div>
                  </div>
                )
              }
            )}
          </div>
        </div>

        <div data-nosnippet className="mb-4">
          <h2 className="text-3xl font-medium mb-1">My development journey</h2>
          <div>
            {Object.keys(data.homePage.journey)
              .reverse()
              .map((key: string, index: number): React.ReactNode => {
                return (
                  <>
                    <div key={index} className="grid grid-cols-2 mb-2">
                      <h1 className="text-2xl font-bold text-primary-400">{key}</h1>
                      <div>
                        {data.homePage.journey[key].map(
                          (x: string, index: number): React.ReactNode => {
                            return (
                              <p key={index} className="flex items-center">
                                <span className="text-primary-600 mr-2">-</span>
                                <p className="text-secondary">{x}</p>
                              </p>
                            )
                          }
                        )}
                      </div>
                    </div>
                  </>
                )
              })}
          </div>
        </div>
      </Container>
    </>
  )
}

export default HomePage

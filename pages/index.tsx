import React from 'react'
import { Container } from '@/components'
import Head from 'next/head'

const HomePage: React.FC<{}> = () => {
  const appName: string = process.env.NEXT_PUBLIC_APP_NAME

  return (
    <>
      <Head>
        <title>About me - {appName}</title>
      </Head>

      <Container>
        <h1 className="text-4xl font-bold mb-6 mt-2">About me</h1>

        <div className="mb-4">
          <h2 className="text-3xl font-medium mb-1">Short bio</h2>
          <div>
            <div className="text-secondary-disabled font-mono">
              Merhaba, My name is <span className="font-bold text-primary-500 text-lg">Can</span>. I
              living in Turkey 🇹🇷 and I&apos;m 13 years old
            </div>
          </div>
        </div>

        <div className="mb-4">
          <h2 className="text-3xl font-medium mb-1">Skills</h2>
          <div className="grid grid-rows-2 grid-cols-2 md:grid-cols-3 gap-2">
            <div>
              <h3 className="font-bold text-xl">Languages</h3>
              <div className="font-medium font-mono text-secondary flex flex-col">
                <span>Javascript</span>
                <span>Typescript</span>
                <span>Python</span>
                <span>PHP</span>
              </div>
            </div>

            <div>
              <h3 className="font-bold text-xl">Development</h3>
              <div className="font-medium font-mono text-secondary flex flex-col">
                <span>Linux</span>
              </div>
            </div>

            <div>
              <h3 className="font-bold text-xl">Frontend</h3>
              <div className="font-medium font-mono text-secondary flex flex-col">
                <span>React</span>
                <span>CSS</span>
                <span>Scss</span>
                <span>Tailwindcss</span>
              </div>
            </div>

            <div>
              <h3 className="font-bold text-xl">Backend</h3>
              <div className="font-medium font-mono text-secondary flex flex-col">
                <span>Node.js</span>
                <span>Nestjs</span>
              </div>
            </div>

            <div>
              <h3 className="font-bold text-xl">Tools</h3>
              <div className="font-medium font-mono text-secondary flex flex-col">
                <span>Neovim</span>
                <span>Termux</span>
              </div>
            </div>
          </div>
        </div>

        <div className="mb-4">
          <h2 className="text-3xl font-medium mb-1">My development journey</h2>
          <div>
            <div className="grid grid-cols-2 mb-2">
              <h1 className="text-2xl font-bold text-primary-400">2022</h1>
              <div>
                <p className="flex items-center">
                  <span className="text-primary-600 mr-2">-</span>
                  <p className="text-secondary">I started learning lua</p>
                </p>
              </div>
            </div>

            <div className="grid grid-cols-2 mb-2">
              <h1 className="text-2xl font-bold text-primary-400">2021</h1>
              <div>
                <p className="flex">
                  <span className="text-primary-600 mr-2">-</span>
                  <p className="text-secondary items-center">I started learning React</p>
                </p>

                <p className="flex">
                  <span className="text-primary-600 mr-2">-</span>
                  <p className="text-secondary items-center">I started learning Tailwindcss</p>
                </p>
              </div>
            </div>

            <div className="grid grid-cols-2 mb-2">
              <h1 className="text-2xl font-bold text-primary-400">2020</h1>
              <div>
                <p className="flex">
                  <span className="text-primary-600 mr-2">-</span>
                  <p className="text-secondary items-center">I started learning Node.js</p>
                </p>

                <p className="flex">
                  <span className="text-primary-600 mr-2">-</span>
                  <p className="text-secondary items-center">I started learning Python</p>
                </p>
              </div>
            </div>

            <div className="grid grid-cols-2">
              <h1 className="text-2xl font-bold text-primary-400">2019</h1>
              <div>
                <p className="flex">
                  <span className="text-primary-600 mr-2">-</span>
                  <p className="text-secondary items-center">Learned basic HTML, CSS, JS</p>
                </p>
                <p className="flex">
                  <span className="text-primary-600 mr-2">-</span>
                  <p className="text-secondary items-center">My programming journey has started</p>
                </p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </>
  )
}

export default HomePage

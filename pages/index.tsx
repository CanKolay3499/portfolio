import React from 'react'
import { Container, Box } from '@/components'
import { motion } from 'framer-motion'
import Link from 'next/link'
import cn from 'classnames'

const HomePage: React.FC<{}> = () => {
  type Skills = {
    label: string
    percent: number
    className?: string
    delay: number
    learning?: boolean
  }

  const skills: Array<Skills> = [
    {
      label: 'HTML',
      percent: 95,
      className: 'bg-orange-600',
      delay: 0
    },
    {
      label: 'CSS',
      percent: 69,
      className: 'bg-blue-600',
      delay: 0.15
    },
    {
      label: 'JavaScript',
      percent: 85,
      className: 'bg-amber-400',
      delay: 0.3
    },
    {
      label: 'TailwindCSS',
      percent: 90,
      className: 'bg-teal-400',
      delay: 0.45
    },
    {
      label: 'React',
      percent: 75,
      className: 'bg-blue-500',
      delay: 0.6
    },
    {
      label: 'Lua',
      percent: 90,
      className: 'bg-blue-700',
      delay: 0.75
    },
    {
      label: 'PHP',
      percent: 65,
      className: 'bg-purple-700',
      delay: 0.9
    },
    {
      label: 'Python',
      percent: 60,
      className: 'bg-yellow-300',
      delay: 1.05
    },
    {
      label: 'C',
      percent: 35,
      delay: 1.3,
      learning: true
    }
  ]

  return (
    <>
      <Container>
        <div className="my-4 flex items-center text-center flex-col justify-center text-lg">
          <span className="text-2xl mb-1">Hi!</span>
          My name is Can and I&apos;m 13 years old.
        </div>

        <div className="my-4 flex items-center text-center flex-col justify-center text-lg">
          <span className="text-2xl mb-1">My skills</span>
        </div>

        {skills.map((skill: Skills, index: number) => (
          <motion.div
            transition={{ duration: 0.5, ease: 'easeIn', delay: skill.delay }}
            initial={{ opacity: 0, y: '-25%' }}
            animate={{ opacity: 1, y: 0 }}
            className="my-2 relative"
            key={index}
          >
            <div className="rounded-full bg-gray-100 dark:bg-gray-900 h-10">
              <motion.div
                transition={{ duration: 1.5, delay: skill.delay }}
                initial={{ width: '0%', opacity: 0 }}
                animate={{ width: skill.learning ? '%100' : `${skill.percent}%`, opacity: 1 }}
                className={cn(
                  `h-10 rounded-full absolute flex items-center justify-between px-4`,
                  skill?.className
                )}
              >
                <motion.h1
                  transition={{ duration: 0.25, ease: 'easeIn', delay: skill.delay - 0.15 }}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="text-lg font-medium mr-2"
                >
                  {skill.label}
                  <span className="text-xs font-medium text-secondary">
                    {skill.learning && '*'}
                  </span>
                </motion.h1>
                <motion.span
                  transition={{ duration: 0.75, ease: 'easeIn', delay: skill.delay * 2 }}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="text-sm text-white"
                >
                  {skill.percent}%
                </motion.span>
              </motion.div>
            </div>
          </motion.div>
        ))}

        <Container>
          <p className="text-xs text-blue-500 font-medium">* = still learning</p>
        </Container>

        <div className="my-4 flex items-center text-center flex-col justify-center text-lg">
          <span className="text-2xl mb-1">Contact me</span>
        </div>

        <Box>
          <h1 className="text-lg font-medium">Discord</h1>
          <span className="text-sm">Can Kolay#5578</span>
        </Box>

        <Link href="mailto:cankolay3499@gmail.com" passHref>
          <Box className="cursor-pointer">
            <h1 className="text-lg font-medium">Email</h1>
            <span className="text-sm">cankolay3499@gmail.com</span>
          </Box>
        </Link>

        <div className="my-4 flex items-center text-center flex-col justify-center text-lg">
          <span className="text-2xl mb-1">Links</span>
        </div>

        <Link href="https://github.com/CanKolay3499" passHref>
          <Box className="cursor-pointer">
            <h1 className="text-lg font-medium">Github</h1>
            <span className="text-sm">My projects and other stuff</span>
          </Box>
        </Link>

        <Link href="https://youtu.be/dQw4w9WgXcQ" passHref>
          <a className="flex items-center justify-center text-sm font-medium text-white dark:text-black my-4">
            Dont click this link
          </a>
        </Link>
      </Container>
    </>
  )
}

export default HomePage

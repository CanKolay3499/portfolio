import React from 'react'

const Logo: React.FC = () => {
  const title: string = process.env.NEXT_PUBLIC_TITLE

  return (
    <>
      <h1 className="text-3xl font-bold text-primary-500 dark:text-primary-400">{title}</h1>
    </>
  )
}

export { Logo }

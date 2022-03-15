import React from 'react'

const Logo: React.FC<{}> = () => {
  return (
    <>
      <h1 className="text-3xl font-medium font-mono">{process.env.NEXT_PUBLIC_APP_NAME}</h1>
    </>
  )
}

export { Logo }

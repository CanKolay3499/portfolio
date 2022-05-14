import { useState, useEffect } from 'react'

type Props = {
  width: number
  height: number
}

const useWindowDimensions = (): Props => {
  const [windowDimensions, setWindowDimensions] = useState({
    width: undefined,
    height: undefined
  })

  useEffect(() => {
    const handleResize = () => {
      setWindowDimensions({
        width: window.innerWidth,
        height: window.innerHeight
      })
    }

    window.addEventListener('resize', handleResize)

    handleResize()

    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return windowDimensions
}

export { useWindowDimensions }

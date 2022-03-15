import React from 'react'
import cn from 'classnames'

type ContainerProps = {
  children: React.ReactNode
  className?: string
}

const Container: React.FC<ContainerProps> = (props: ContainerProps) => {
  return (
    <>
      <div className={cn('w-11/12 mx-auto max-w-screen-sm', props.className)}>{props.children}</div>
    </>
  )
}

export { Container }

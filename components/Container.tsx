import React, { HTMLProps } from 'react'
import cn from 'classnames'

type Props = {
  children: React.ReactNode
  className?: string
}

type ContainerProps = HTMLProps<HTMLDivElement> & Props

const Container: React.FC<ContainerProps> = (props: ContainerProps) => {
  return (
    <>
      <div {...props} className={cn('w-11/12 mx-auto max-w-screen-sm', props.className)}>
        {props.children}
      </div>
    </>
  )
}

export { Container }

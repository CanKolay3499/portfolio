import React, { HTMLProps } from 'react'
import cn from 'classnames'

type Props = {
  children: React.ReactNode
  className?: string
}

type BoxProps = HTMLProps<HTMLDivElement> & Props

const Box: React.FC<BoxProps> = (props: BoxProps) => {
  return (
    <>
      <div
        {...props}
        className={cn(
          'mb-4 border border-primary dark:shadow-2xl cursor-pointer flex flex-col justify-center bg-secondary py-2 px-4 rounded-2xl',
          props.className
        )}
      >
        {props.children}
      </div>
    </>
  )
}

export { Box }

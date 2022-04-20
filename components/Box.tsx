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
          'border-primary border rounded-2xl py-4 px-6 my-4 w-full hover:border-blue-700 focus:border-blue-700 transition-all duration-300',
          props.className
        )}
      >
        {props.children}
      </div>
    </>
  )
}

export { Box }

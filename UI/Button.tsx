"use client"
import React from 'react'

type Props = {
  text: string;
  color: string;
  children?: React.ReactNode
}

export const Button = React.memo(({ text, color = "bg-white", ...props  }: Props) => {
  return (
    <button>Button</button>
  )
})

Button.displayName = "Button"

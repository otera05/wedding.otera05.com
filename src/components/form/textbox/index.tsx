import classNames from 'classnames'
import { FC } from 'react'

export type TextBoxProps = {
  placeholder?: string
  type?: 'text' | 'tel' | 'url' | 'email' | 'password' | 'time'
  required?: boolean
  width?: string
}

export const TextBox: FC<TextBoxProps> = ({
  placeholder,
  type = 'text',
  required,
  width = 'w-full',
}) => {
  const textBoxClass = classNames('rounded-lg', width)
  return (
    <input
      // className="rounded-lg w-full mr-4"
      className={textBoxClass}
      type={type}
      placeholder={placeholder}
      required={required}
    />
  )
}

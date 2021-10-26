import classNames from 'classnames'
import { FC } from 'react'

export type BadgeProps = {
  color?: string
  text: string
}

export const Badge: FC<BadgeProps> = ({ color = 'bg-red-600', text }) => {
  const badgeClass = classNames(
    color,
    text,
    'inline-flex',
    'items-center',
    'justify-center',
    'px-2',
    'py-1',
    'mr-2',
    'text-xs',
    'font-bold',
    'leading-none',
    'text-red-100',
    'rounded-md',
  )
  return <span className={badgeClass}>{text}</span>
}

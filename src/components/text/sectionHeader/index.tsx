import classNames from 'classNames'
import { FC } from 'react'

export type SectionHeaderProps = {
  font?: string
  text: string
}

export const SectionHeader: FC<SectionHeaderProps> = ({ font, text }) => {
  const sectionHeaderClass = classNames(font, 'text-5xl', 'mt-8 mb-8')
  return <p className={sectionHeaderClass}>{text}</p>
}

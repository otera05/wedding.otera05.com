import { FC } from 'react'

export type ImageProps = {
  src: string
}

export const Image: FC<ImageProps> = ({ src }) => {
  return (
    <img
      className="rounded-lg shadow-xl mb-4"
      src={src}
      alt="happiness image"
    />
  )
}

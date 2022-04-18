import { FC } from 'react'

export type CardProps = {
  imageUrl: string
  author: string
  value: number
}

export const Card: FC<CardProps> = ({ imageUrl, author, value }) => {
  return (
    <div class="max-w-md bg-white mb-10 rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
      <img class="rounded-t-lg" src={imageUrl} alt="" />
      <div class="p-5">
        <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          {value} pt
        </h5>
        <p class="mb-3 font-normal text-lg text-gray-700 dark:text-gray-400">
          投稿者: {author}さん
        </p>
      </div>
    </div>
  )
}

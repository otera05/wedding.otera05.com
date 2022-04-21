import { FC } from 'react'
import useSWR from 'swr'

import { Happiness } from '../../libs/photoUtils'
import { Card } from '../card/index'

const fetcher = (url: string) => fetch(url).then((r) => r.json())

export const GalleryTemplate: FC = () => {
  const { data, error } = useSWR(`/api/photos`, fetcher)
  if (error)
    return (
      <div>
        An error has occurred.
        <p>{error}</p>
      </div>
    )
  if (!data) return <div>Loading...</div>

  return data.happiness.map((h: Happiness) => (
    <Card
      key={h.messageId}
      imageUrl={h.url}
      author={h.userName}
      value={h.value}
    ></Card>
  ))
}

import { FC } from 'react'
import useSWR from 'swr'

import { Happiness } from '../../model/happiness'
import { Card } from '../card/index'

export type listPhotoResponse = {
  results: Happiness[]
}

const fetcher = (url: string): Promise<listPhotoResponse> =>
  fetch(url).then((r) => r.json())

export const GalleryTemplate: FC = () => {
  const { data, error } = useSWR(
    `https://happiness-api.otera05.com/photos`,
    fetcher,
  )
  if (error)
    return (
      <div>
        An error has occurred.
        <p>{error}</p>
      </div>
    )
  if (!data) return <div>Loading...</div>

  return (
    <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mb-10 justify-center">
      {data.results.map((h: Happiness) => (
        <Card
          key={h.messageId}
          imageUrl={h.url}
          author={h.userName}
          value={h.value}
        ></Card>
      ))}
    </div>
  )
}

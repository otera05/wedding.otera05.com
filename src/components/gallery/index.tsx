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

  return data.results.map((h: Happiness) => (
    <Card
      key={h.message_id}
      imageUrl={h.image_url}
      author={h.user_name}
      value={h.value}
    ></Card>
  ))
}

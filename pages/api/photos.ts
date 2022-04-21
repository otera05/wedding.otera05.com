import type { NextApiRequest, NextApiResponse } from 'next'
import { Happiness, fetchItems } from '../../src/libs/photoUtils'

// API のレスポンス型
export type HappinessApiResponse = {
  happiness?: Happiness[]
  debugMessage?: string
}

export default async function happinessApi(
  req: NextApiRequest,
  res: NextApiResponse<HappinessApiResponse>,
): Promise<void> {
  const happiness = await fetchItems()
  if (happiness) {
    res.status(200).json({ happiness: happiness })
  } else {
    res.status(400).json({ debugMessage: `failed to fetch happiness` })
  }
}

import { DynamoDBClient, ScanCommand } from '@aws-sdk/client-dynamodb'

const dbClient = new DynamoDBClient({
  credentials: {
    accessKeyId: process.env.ACCESS_KEY_ID as string,
    secretAccessKey: process.env.SECRET_ACCESS_KEY as string,
  },
  region: process.env.REGION as string,
})

export type Happiness = {
  messageId: string
  happinessId: string
  lineUserId: string
  userName: string
  value: number
  url: string
}

export async function fetchItems(): Promise<Happiness[] | undefined> {
  const cmd = new ScanCommand({
    TableName: 'happiness-checker',
  })
  const output = await dbClient.send(cmd)
  const items = output.Items
  if (!items) return undefined
  const happiness: Happiness[] = []
  items.forEach((item) => {
    happiness.push({
      messageId: item['message_id']['S'] as string,
      happinessId: item['happiness_id']['S'] as string,
      lineUserId: item['line_user_id']['S'] as string,
      userName: item['user_name']['S'] as string,
      value: item['value']['N'] as unknown as number,
      url: item['url']['S'] as string,
    })
  })
  happiness.sort(function (a, b) {
    return b.value - a.value
  })
  return happiness
}

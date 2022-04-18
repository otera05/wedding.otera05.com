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

export async function fetchItems(): Promise<Happiness[]> {
  const cmd = new ScanCommand({
    TableName: 'happiness-checker',
  })
  const output = await dbClient.send(cmd)
  const items = output.Items
  const happiness: Happiness[] = []
  items.forEach((item) => {
    happiness.push({
      messageId: item['message_id']['S'],
      happinessId: item['happiness_id']['S'],
      lineUserId: item['line_user_id']['S'],
      userName: item['user_name']['S'],
      value: item['value']['N'],
      url: item['url']['S'],
    })
  })
  happiness.sort(function (a, b) {
    return b.value - a.value
  })
  return happiness
}

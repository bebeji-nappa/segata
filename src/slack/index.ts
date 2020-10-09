import { WebClient } from '@slack/web-api'

require('dotenv').config()
const web = new WebClient(process.env.SLACK_TOKEN)
const conversationId:string = 'C0147MBL560'

const msg = [
  'セガサターーーーン、シローーーーーーーーーーーーーーーーー!!!!',
  '指が折れるまで!指が折れるまで!',
  'ホーーーームラン!!!',
  'こいつら人間じゃねぇ!!!',
  '名監督...!!!',
  'アタマを使え!!',
  'さくらさーーーーん、さくらさーーーーーーーん!!!',
  '素晴らしいゲームを、ありがとう。野茂くん!'
]

export const join = async () => {
  await web.conversations.join({ channel: conversationId })
}

export const postMessage = async () => {
  const random = Math.floor(Math.random() * msg.length)
  const res = await web.chat.postMessage({ text: msg[random], channel: conversationId })
  console.log(
    `A message was posed to conversation ${res.channel} with id ${res.ts} which contains the message ${res.message}`
  )
}

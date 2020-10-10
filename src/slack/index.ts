import { WebClient } from '@slack/web-api'

require('dotenv').config()
const web = new WebClient(process.env.SLACK_TOKEN)
const conversationId:string = 'XXXXXXXXXX'

const msg = [
  'セガサターーーーン、シローーーーーーーーーーーーーーーーー!!!!',
  '若者よ...\n真剣に取り組んでいるものはあるか?命がけで打ち込んでいる物があるか?\nセガサターン、シロ!\n指が折れるまで......指が折れるまで!',
  'ホーーーームラン!!!',
  'こいつら人間じゃねぇ!!!',
  '名監督...!!!',
  'アタマを使え!!',
  'さくらさーーーーん、さくらさーーーーーーーん!!!',
  '素晴らしいゲームを.......ありがとう、野茂くん!',
  '冬こそ燃えろ!',
  'みんなで戦え!',
  'せがたゲームチャート、スチーム度:満点!'
]

export const join = async () => {
  await web.conversations.join({ channel: conversationId })
}

export const sendMessageGetMethod = async () => {
  const random = Math.floor(Math.random() * msg.length)
  const res = await web.chat.postMessage({ text: msg[random], channel: conversationId })
  console.log(
    `A message was posed to conversation ${res.channel} with id ${res.ts} which contains the message ${res.message}`
  )
}

export const sendMessageSegata = async () => {
  const res = await web.chat.postMessage({ text: 'トォオリリャア!!!', channel: conversationId })
  console.log(
    `A message was posed to conversation ${res.channel} with id ${res.ts} which contains the message ${res.message}`
  )
}

export const sendMessagePostMethod = async (text: string) => {
  const res = await web.chat.postMessage({ text: text, channel: conversationId })
  console.log(
    `A message was posed to conversation ${res.channel} with id ${res.ts} which contains the message ${res.message}`
  )
}

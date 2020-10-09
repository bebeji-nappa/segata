"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.postMessage = exports.join = void 0;
const web_api_1 = require("@slack/web-api");
require('dotenv').config();
const web = new web_api_1.WebClient(process.env.SLACK_TOKEN);
const conversationId = 'C0147MBL560';
const msg = [
    'セガサターーーーン、シローーーーーーーーーーーーーーーーー!!!!',
    '指が折れるまで!指が折れるまで!',
    'ホーーーームラン!!!',
    'こいつら人間じゃねぇ!!!',
    '名監督...!!!',
    'アタマを使え!!',
    'さくらさーーーーん、さくらさーーーーーーーん!!!',
    '素晴らしいゲームを、ありがとう。野茂くん!'
];
exports.join = async () => {
    await web.conversations.join({ channel: conversationId });
};
exports.postMessage = async () => {
    const random = Math.floor(Math.random() * msg.length);
    const res = await web.chat.postMessage({ text: msg[random], channel: conversationId });
    console.log(`A message was posed to conversation ${res.channel} with id ${res.ts} which contains the message ${res.message}`);
};

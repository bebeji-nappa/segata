# せがた三四郎 Slack Bot
Slack のチャンネルでせがた三四郎を召喚する Bot です。

## Usage
### Install App
```bash
$ git clone https://github.com/bebeji-nappa/segata.git
$ yarn install
```

### Set up Slack App Permissions
Slack App の `Bot Token Scopes` に下記の Scope を設定してください。

```markdown
channels:join
channels:read
chat:write
```

Slash Command を使用する場合は、以下の Scope も設定してください。

```markdown
commands
```

### Set up App in local environment
`.env` ファイルを作成し、
[Slack api](https://api.slack.com/) で発行した Bot User OAuth Access Token を 環境変数 `SLACK_TOKEN` に設定します。

```bash
SLACK_TOKEN=xoxb-XXXXXXXXXXXX-XXXXXXXXXXXX-XXXXXXXXXXXXXXXXXXXXXX
```

`./src/slack/index.ts` にある `conversationId` に Channel ID を入力してください。

```typescript
const conversationId:string = 'XXXXXXXXXX' //Channel id
```
最後にターミナルで `tsc` を実行した後、`yarn start` を実行します。

```bash
$ tsc
$ yarn start
```

http://localhost:8080 にアクセスすると、チャンネルにメッセージが投稿されます。

### Deploy in Heroku

**※これは Slash Command を設定する際に行います。ローカル環境で実行する際は、この手順は必要ありません。**

`heroku` に環境変数 `SLACK_TOKEN` を設定し、デプロイします。

```bash
heroku login
heroku config:set SLACK_TOKEN=xoxb-XXXXXXXXXXXX-XXXXXXXXXXXX-XXXXXXXXXXXXXXXXXXXXXX
git add .
git commit -am 'first commit'
git push heroku master
```

その後 Slack api の `Slash commands` で Heroku で作成した URL でコマンドを登録してください。

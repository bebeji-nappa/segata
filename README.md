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
最後にターミナルで `tsc` を実行します。

```bash
$ tsc
```

### Deploy in Heroku

`heroku` に環境変数 `SLACK_TOKEN` を設定し、デプロイします。

```bash
heroku login
heroku config:set SLACK_TOKEN=xoxb-XXXXXXXXXXXX-XXXXXXXXXXXX-XXXXXXXXXXXXXXXXXXXXXX
git add .
git commit -am 'first commit'
git push heroku master
```

その後、[Heroku Scheduler](https://elements.heroku.com/addons/scheduler) を使って、以下のコマンドをジョブに登録してください。

```bash
curl https://XXXXXX.herokuapp.com # 例: Heroku app の URL を登録します
```

これで、一定時間ごとにせがた三四郎がメッセージを送信します。

### Set up Slash Command

**※この手順は Slash Command を設定する際に行います。**

Slack api の `Slash commands` で Heroku で作成した URL でコマンド(例: `/segata` )を登録してください。

Slash command を使うことで、好きなメッセージをせがた三四郎で送ることができます。

```bash
# コマンドが /segata の場合
/segata Hello SEGA!
```

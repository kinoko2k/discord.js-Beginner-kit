# discord.js-Beginner-kit
Beginner kit
初心者キット
お便りはISSUESに付けといて

# 開発環境の作り方
## node.jsのインストール (Windows & Mac)

[ホームページ](https://nodejs.org/ja/)にアクセスして最新版をダウンロード & インストールします。

そして、`npm install discord.js`をコマンドプロンプトで実行してください。
## 開発環境のインストール (Windows & Mac)
[Visual Studio Code](https://code.visualstudio.com/)です。このページにアクセスして最新版をダウンロード & インストールします。

## node.jsのインストール (Ubuntu)

ターミナルを開いて、下記のコマンドを実行してください。
```
sudo apt-get update
sudo apt-get upgrade
sudo apt-get install nodejs
npm install discord.js
```

## 開発環境のインストール (Ubuntu)

[Visual Studio Code](https://code.visualstudio.com/)です。このページにアクセスして最新版をダウンロード & インストールします。

又は、ターミナルを開いて、下記のコマンドを実行してください。
```
$ sudo apt install ./公式サイトからダウンロード.debファイルをインストールしてください
$ sudo apt install -y apt-transport-https
$ sudo apt update
```
起動
```
$ code
```
もし万が一インストールされていないなら追加でこちらのコマンド。
```
$ sudo apt install -y code
```
# BOTの作り方
## 1.BOTアカウントを作る

まずは、[ここ](https://discord.com/developers/applications)にアクセスして、アカウントの登録をします。

## 2.サーバーを作る
サーバーがある人は、3.を見てね

## 3.ボットを作る
まずはここにアクセスします。そして、右上の方にある New Application(新しいアプリ) をクリックします。
そしたら NAME(名前) にボットの名前を入力して Create(作る) を押します。
すると、いろいろなものがでてきます。
```
    APP ICON = ボットのアイコン(初期)
    NAME = ボットの名前(さっき入れたやつ)
    DESCRIPTION (MAXIMUM 400 CHARACTERS) = 説明。400字まで。
    CLIENT ID = ボットの ID(開発者モードをONにすると見れたり)
    CLIENT SECRET = シークレットなやつ、多分他人に見せちゃダメなやつ
```
CLIENT ID はコピーして何かにメモをしてもいいですが、サーバーに行ってBOTを右クリックして、IDをコピーを押すと、同じIDが出てきます。
では左側の SETTINGS を見てください。
今は General Informationを選択しています。Bot をクリックします。
すると画面は変わって真ん中に BUILD-A-BOT と表示されます。横の Add Bot をクリック。
そしたらなんか出てくるので Yes, do it! を押しましょう。
```
でてきたものの翻訳
このアプリにボットを追加しますか？
ボットユーザーを追加すると、アプリがDiscordで目に見えるようになります。 
ただし、このアクションは取り消せません。 賢明に選択してください。 
```
押したあと
-
```
A wild bot has appeared!
```
と出たら成功です。これでボットができます！
でももし、
```
Too many users have this username, please try another.
```
と言われてしまった人は残念ながらその名前は使えないので、他の名前にする様にしましょう。
その名前=test,botなど

ではここに表示されている項目について簡単に説明します。
-
```
    ICON = ボットのアイコン(初期・Discordのアイコン)
    USERNAME = ボットの名前。タグも表示される。
    TOKEN = トークン。ボットの中で一番大事なやつ。ネットに晒したり、他人に見せちゃいけないやつ
    PUBLIC BOT = ON(右) ならそのBOTの CLIENT ID が分かってて、かつ権限(数字)を持っていればだれでもそのBOTをサーバーに招き入れることができます。
    逆に OFF(左) にすれば自分しか追加できなくなります。
    REQUIRES OAUTH2 CODE GRANT = OFF のままにしときましょう。
```
TOKEN(他人に見せちゃいけないやつ) も何かにメモしておきましょう。
次です。サーバーに追加します。
-
さっきコピーした CLIENT ID を使います。
サーバーに追加するときにはURLを使います。
例
```
https://discord.com/api/oauth2/authorize?client_id=759267635707117588&permissions=8&scope=bot
client_id=コピーしたIDを入れる                        ^^^^^^^^^^^^^^^^^^
```
みたいにしてURLに飛ぶと、Discordに接続 と書かれてるページに飛びます。
「サーバーを選択」とあるので、ここでさっき作ったサーバー、又は入れてもらおうとしているサーバーを選びましょう。(BOTを入れるには権限が必要です。)

サーバーを見て、BOTがいたら、成功です。(いない場合はうまくて行ってない場合があります、もう一度試してください。)(BOTはオフライン)

# BOTのコードを書こう！
VSCodeを開いて、新しいファイルを作成し、index.jsと名付けましょう(.jsは拡張子)
そして、下記のコードを入れてください。
```js


const Discord = require('discord.js')
const client = new Discord.Client()

client.on('ready', () => {
  console.log(`${client.user.tag} でログインしています。`)
});

client.on('message', async msg => {
  if (msg.content === '!ping') {
    msg.channel.send('Pong!')
  }
});

client.login('TOKEN(見せちゃいけないやつ)')
```
取りあえずはこれでOK。最後のトークンにはさっきコピーした TOKEN を入れます。
そしたらコンソール(ターミナル)に戻ってください。
そこで `node index.js` と打ってみてください。
```
BOTの名前#BOTのタグ でログインしています。
```
の様に表示されて Discord を開くとボットがオンラインになっていたら、成功です！
!ping と入力してみてください。
するとBOTが「Pong!」と返してくれます！

解説コーナー
-
//のあとの文を見てね

```js
const Discord = require('discord.js')　
const client = new Discord.Client() 
```
ここでは定義をしています。さっき `npm install discord.js` で追加したやつですね。
discord.js を Discord とする
初期化した Client を client とする
(難しすぎてよくわからへん)
```js
client.on('ready', () => {
  console.log(`${client.user.tag} でログインしています。`)
});
```
これは準備が出来たらコマンドプロンプト(ターミナル)に「～でログインしています。」と表示させる。
JavaScript は console.log('メッセージ') がコマンドプロンプト(ターミナル)にメッセージを表示させる基本形です。
エラーがどこで起きているかとかの確認によく使うので、(必ず)覚えておきましょう。
});の;は文の最後という意味です。
```js
client.on('message', async msg => {
  if (msg.content === '!ping') {
    msg.channel.send('Pong!')
  }
});
```
`クライアントがメッセージを受信したら、msgとする。
  もし、発言内容(msg.content)が、'!ping'なら
    発言があったチャンネル(msg.channel)に発言する('Pong!')`
という意味です。

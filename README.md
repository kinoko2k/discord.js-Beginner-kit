# discord.js-Beginner-kit
Beginner kit
初心者キット
お便りはISSUESに付けといて

# 開発環境の作り方
## node.jsのインストール (Windows & Mac)

[ホームページ](https://nodejs.org/ja/)にアクセスして最新版をダウンロード & インストールします。

## 開発環境のインストール (Windows & Mac)
[Visual Studio Code](https://code.visualstudio.com/)です。このページにアクセスして最新版をダウンロード & インストールします。

## node.jsのインストール (Ubuntu)

ターミナルを開いて、下記のコマンドを実行してください。
```
sudo apt-get update
sudo apt-get upgrade
sudo apt-get install nodejs
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



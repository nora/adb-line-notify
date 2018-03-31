# ADB LINE Notify

## 概要
[Dasher](https://github.com/maddox/dasher)を使ってAmazon Dash ButtonとLINE Notifyを連携することをより簡単にできるようにしたもの


## 何ができる？
Amazon Dash Buttonを押したら指定したメッセージがLINE Notifyに届く

すんなりいけば15分でできます


## セットアップ
1. Amazon Dash Buttonの設定を済ませる (**商品選択画面で終了する**)
2. IFTTTとLINE Notifyを連携する
3. [ここ](https://ifttt.com/maker_webhooks)からIFTTTでMaker Webhooksを有効にする
4. IFTTTのアプレットを作成する(`Webhooks` -> `LINE Notify`)  
**❗️`Message`には`{{Value1}}`を設定してください❗️**

### 環境ファイルの設定

```Config File:.env
# MAC Address of Amazon Dash Button
ADB_MAC_ADDRESS="00:00:00:00:00:00"

# IFTTT Webhooks key
IFTTT_KEY="xxxxxxxxxxxxxxxx"

# Notification Message
MESSAGE="This is message."
```

|パラメータ|取得方法|
|:-:|---|
|Amazon Dash ButtonのMACアドレス|`yarn find`  または `npm run find`実行後にAmazon Dash Buttonを押してarp要求を行なっているそれらしいデバイスを探し、MACアドレスを取得する|
|IFTTT Webhooks key|[このページ](https://ifttt.com/services/maker_webhooks/settings)中にあるURL:`https://maker.ifttt.com/use/{key}`の{key}に当たる文字列|


## 使い方

```sh
# Amazon Dash Buttonの監視を開始する
yarn start 

# または
npm run start
```
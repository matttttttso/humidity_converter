# Humidity Converter

### 目次

- [概要](https://github.com/matttttttso/humidity_converter#%E6%A6%82%E8%A6%81)
- [背景](https://github.com/matttttttso/humidity_converter#%E8%83%8C%E6%99%AF)
- [開発環境・使用ツール](https://github.com/matttttttso/humidity_converter#%E9%96%8B%E7%99%BA%E7%92%B0%E5%A2%83%E4%BD%BF%E7%94%A8%E3%83%84%E3%83%BC%E3%83%AB)
- [実装済みの主な機能](https://github.com/matttttttso/humidity_converter#%E5%AE%9F%E8%A3%85%E6%B8%88%E3%81%BF%E3%81%AE%E4%B8%BB%E3%81%AA%E6%A9%9F%E8%83%BD)
- [今後実装していきたい機能](https://github.com/matttttttso/humidity_converter#%E4%BB%8A%E5%BE%8C%E5%AE%9F%E8%A3%85%E3%81%97%E3%81%A6%E3%81%84%E3%81%8D%E3%81%9F%E3%81%84%E6%A9%9F%E8%83%BD)
- [使用例][使用例]

[使用例]:https://github.com/matttttttso/humidity_converter#%E4%BD%BF%E7%94%A8%E4%BE%8B

## 概要

このアプリは温度と相対湿度の値を入力すると、露点温度と絶対湿度（水分量）に変換する機能が主な機能です。

[Humidity Converter](http://18.178.160.115/)  
※天気予報を取得するWebAPI(OpenWeatherMap)は無料枠で利用しているため、1分あたりの呼び出し数に制限があります。(60回/分)

**絶対湿度**、
**露点温度**
という値。皆さんは普段使用しますでしょうか？  
普段使用するのは天気予報等で聞く、温度[℃]と相対湿度[%]だと思いますが、露点温度と絶対湿度を用いると２つの環境の湿度を正確に比較しやすくなります。（[具体例は下部][使用例]）  
アプリでは比べやすいよう２つ入力エリアを設けています。室内に温湿度計がある場合はその値を入力してみましょう。  
また、温湿度計が１つしか無いという方、外の温湿度をざっくりと知りたい方は、下部の天気予報エリアで温湿度を取得しましょう。

## 背景

***部屋干しで生乾きしないようにしたい***

核家族化、共働きの家庭が増える中、洗濯物を太陽の下に毎日干して乾かすは難しく、室内干しでなんとかする機会が増えているのではないでしょうか。洗剤や柔軟剤、ニオイ対策がされているものや乾くスピードが早くなるものなど色々な商品が販売されており、生乾きに悩む方は多いと考えます。  
実際に私も一人暮らし時代の洗濯物は夜に部屋干しで乾かすことが多く、浴室乾燥機のある物件に住んだり除湿機を買ったりして色々と試行錯誤しました。  
外がカラッと乾いている日は外気を取り込んで上げるほうが良いことは明白です。しかし、少し雨模様である日などは換気すべきかどうか迷います。室内と屋外、どっちが乾きやすいのかわからないからです。  
そのようなときにこのアプリを使用して、どうすれば早く乾くか、生乾きを防げるか、ということを考える根拠の１つにしていただければと考えています。

## 開発環境・使用ツール

- HTML(Haml)
- CSS(SCSS)
- Ruby
- Ruby on Rails
- JavaScript
- jQuery
- MySQL
- AWS
- nginx
- Capistrano
- Unicorn
- WebAPI ([OpenWetherMap](https://openweathermap.org/api))

## 実装済みの主な機能

- jQueryを用いた数値換算
- WebAPIを用いた天気予報の取得(Ajax)
- Capistranoを用いた自動デプロイ

## 今後実装していきたい機能

- トップページの実装（今はメイン機能のページのみ）
- ビューを切り替えて情報をわかりやすく表示
- 天気予報の地域入力方法追加（郵便番号、地名）
- 天気予報の地域入力時にインクリメンタルサーチ機能
- 天気予報の値を取得後に自動換算
- 天気予報の時系列表示
- 別の天気APIの利用
- 現在値の自動取得（WebAPI利用）
- 機能追加
  - 空気質([AirVisual API](https://www.airvisual.com/)など)
  - 洗濯物が乾くまでの概算の時間の算出
  - 温湿度の入力値によってアラート機能（熱中症、結露）


## 使用例

温度と相対湿度だけで比較することの難しさがわかる例を以下にまとめます。

- 例１  直感的にわかる場合

  | 場所 | 気温 |相対湿度| 露点温度 |絶対湿度|
  |:---:| ---: | ---: | ---: | ---: |
  | 室内 | 20°C | 60％ | 12.0°CDP | 10.37g/m3 |
  | 屋外 | 18°C | 60％ | 10.1°CDP | 9.21g/m3 |

  予想：室内のほうが湿度は高い？？  
  -> 当たり：室内のほうが絶対湿度は高い（湿気が多い）

- 例２  直感的にわかりそうだけど違う場合１

  | 場所 | 気温 |相対湿度| 露点温度 |絶対湿度|
  |:---:| ---: | ---: | ---: | ---: |
  | 室内 | 28°C | 70％ | 22.0°CDP | 19.04g/m3 |
  | 屋外 | 35°C | 60％ | 26.1°CDP | 23.73g/m3 |

  予想：室内のほうが相対湿度高いので室内のほうが絶対湿度も高い？？  
  -> はずれ：室内のほうが絶対湿度は低い（湿気が少ない）

- 例３  直感的にわかりそうだけど違う場合２

  | 場所 | 気温 |相対湿度| 露点温度 |絶対湿度|
  |:---:| ---: | ---: | ---: | ---: |
  | 室内 | 18°C | 60％ | 10.1°CDP | 9.21g/m3 |
  | 屋外 | 11°C | 85％ | 8.6°CDP | 8.51g/m3 |

  予想：室内のほうが相対湿度低いので室内のほうが絶対湿度も低い？？  
  -> はずれ：室内のほうが絶対湿度は高い（湿気が多い）

[目次に戻る](https://github.com/matttttttso/humidity_converter/blob/master/README.md#%E7%9B%AE%E6%AC%A1)

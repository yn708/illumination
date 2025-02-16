## ■ サービス名

#### [illumination](https://illuminations.vercel.app)



## ■ サービス概要

「Illumination」は、名言や心に響く言葉からのインスピレーションで自分らしく生きることや、日々のモチベーションをサポートするサービスです。  
１日１名言をランダムでお届けします。１日にスタート見ることで、有意義な１日を過ごしたい方におすすめです。
また、何か嫌なことがあった時、自分に自信がない時に見ることで、前向きな気持ちになります。
ぜひご利用ください。

## ■ このサービスへの思い・作りたい理由

自分自身の経験として、落ち込んだ時や、なかなか気持ちが乗らない時に、SNS上で名言を目にしました。その時に、気持ちがポジティブになり、気持ちが晴れた経験があります。
現代社会にはストレスがたくさんあり、ネガティブな情報もたくさんあります。
自分らしく生きたい方や、変わりたい方がも多くいると思います。
そんな方達に向けて自分自身の経験から名言をお届けするサービスを作りたいなと思い作成しています。

## ■ ユーザー層について

性別年齢関係なし。
特に以下の方、

* 自分らしく生きたい方
* モチベーションが欲しい方
* 前向きになりたい方

## サービスの利用イメージ

* 毎朝ランダムに表示される名言を見ることで、気持ちの良い１日をスタートする
* 朝だけでなく。昼、夜に見ることでモチベーションの維持をする
* 何か嫌なことがあった時、大事な用事がある前などに利用することで、前向きな気持ちにする

## ■ 機能一覧

### 名言ランダム表示

保存されている名言をランダムで表示します。
日付の変更と同時に更新されるため、１日１名言。

### 名言一覧表示

保存されている名言の一覧を表示します。

## ■ 実装予定の機能

### ログイン機能

ログインユーザーに以下の機能を提供予定

* いいね（いいねに基づきランキング表示も実装）
* 保存機能（後で見返せる機能）
* 報告機能（著作権違反している名言等に）
* お問い合わせ機能（著作権違反以外のアプリ全般のお問い合わせ）
* ユーザーのオリジナル名言のリクエスト
* 名言一覧の絞り込み、並び替え、検索等のUX機能
  
### 管理者（Admin）機能

* 名言管理（削除、作成更新等）
* ユーザーからのお問い合わせ（報告等）

## ■ 使用技術

| カテゴリー               | 使用技術                                           |
| :----------------------- | :------------------------------------------------- |
| フロントエンド           | TypeScript 5<br>Next.js 14.2.5<br>React 18 |
| バックエンド             | Ruby 3.2.2<br>Ruby on Rails 7.0.8 (API モード)   |
| DB                       | PostgreSQL                                         |
| キャッシュ・セッションストア      | Redis                                  |
| インフラ （予定）                | Vercel / Render                                    |
| CI/CD                    | GitHub Actions                                     |
| 開発環境                 | Docker                                             |
| テスト                 | Jest / React Testing Library / RSpec                 |
| 認証（予定）                     | NextAuth.js（ユーザー用） / devise、devise_token_auth(管理者用)                                     |
| その他（フロントエンド） | ESLint / Prettier / shadcn/ui                |
| その他（バックエンド）   | RuboCop |

## ER 図

![ER図](https://github.com/user-attachments/assets/10ca774e-abac-4615-b631-3f2eaac8ec48)

## インフラ構成図

![インフラ構成図](https://github.com/user-attachments/assets/6a03529f-50b2-41e3-9749-123f3f49730b)

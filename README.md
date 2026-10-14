# ai-enikki

AI が描いて、人間がはんこを押す。AI との開発の思い出を残す絵日記アプリです。

> [!NOTE]
> 開発を始めたばかりです。未完成の項目には「準備中」と書いています。

## これは何か

- AI（Claude Code など）が、その日の開発を振り返って絵（SVG）を描き、CLI から提出します
- 人間が絵に一言とはんこを付けます。はんこを押した日記は公開されます
- 学習用のサンプルアプリです。設計の経緯は [ADR](docs/adr/) に残しています

## 構成

| ディレクトリ    | 中身                              |
| --------------- | --------------------------------- |
| `apps/web`      | Next.js（画面、BFF、認証）※準備中 |
| `apps/api`      | Go の API サーバー ※準備中        |
| `apps/cli`      | Go の CLI（AI が使う）※準備中     |
| `openapi`       | API の契約 ※準備中                |
| `db/migrations` | DB のマイグレーション ※準備中     |
| `infra`         | AWS の構成（CDK）※準備中          |
| `docs`          | 設計資料（ADR など）              |

## 開発環境の構築

### 必要なもの

| ツール                                           | 用途                                   | 入れ方                         |
| ------------------------------------------------ | -------------------------------------- | ------------------------------ |
| [mise](https://mise.jdx.dev/)                    | Node.js、Go、pnpm のバージョンを揃える | `brew install mise`            |
| Docker（[OrbStack](https://orbstack.dev/) など） | DB の起動、ローカル実行                | `brew install --cask orbstack` |

言語とツールのバージョンは [`mise.toml`](mise.toml) で固定しています。

| 言語・ツール | バージョン |
| ------------ | ---------- |
| Node.js      | 24.21.0    |
| Go           | 1.27.2     |
| pnpm         | 12.13.0    |

### 手順

```sh
git clone https://github.com/yuta-shacho/ai-enikki.git
cd ai-enikki
mise trust
mise install
pnpm install
```

### よく使うコマンド

| コマンド        | 中身                           |
| --------------- | ------------------------------ |
| `mise run lint` | lint と整形の確認（CI と同じ） |
| `mise run fmt`  | 整形する                       |
| `mise tasks`    | 使えるコマンドの一覧           |

## ローカル実行

準備中

## 設定

準備中

## テスト

準備中

## リリース

準備中

## コントリビュート

コミットメッセージとマージのルールは [CONTRIBUTING.md](CONTRIBUTING.md) を参照してください。

## ライセンス

[MIT](LICENSE)

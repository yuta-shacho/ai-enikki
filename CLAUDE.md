# CLAUDE.md

AI が描いて人間がはんこを押す絵日記アプリ。エンジニア報酬制度の評価項目を満たすための学習用。概要は [README.md](README.md)、設計の経緯は [docs/adr/](docs/adr/)。

## ルール

- コミットは [CONTRIBUTING.md](CONTRIBUTING.md) に従う。特に次の2つ
  - 空行を除いて最長3行。簡素に書く
  - `Co-Authored-By` を入れない。PR 本文にも Claude Code の帰属表示を入れない
- main に直接 push しない。ブランチを切って PR を作る。マージはユーザーが行う
- ツールは mise で入れたものを使う（`mise exec -- <コマンド>`）
- 決めていないことを勝手に決めない。設計の判断はユーザーに聞く

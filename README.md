# meguritoroge-2021

遠野巡灯篭木（トオノ メグリトロゲ）2021 初回開催のアーカイブサイト。

**開催概要**: 2021年11月19日（金）〜 11月21日（日） / 岩手県遠野市各所

## 技術スタック

- [Next.js 14 (App Router)](https://nextjs.org/)
- TypeScript
- Sass（CSS Modules）

テンプレートは `yukiaga/meguritoroge-2024` をベースに、2021年当時のWordPressサイト（`meguritoroge.com/home/`）のコンテンツを [Internet Archive (Wayback Machine)](https://web.archive.org/web/2024*/meguritoroge.com/home/) から抽出・再構築したもの。

## セットアップ

```bash
npm install
npm run dev
# http://localhost:3000
```

## ビルド

```bash
npm run build
npm start
```

## デプロイ

Vercel へデプロイ、カスタムドメイン `2021.meguritoroge.com` を紐付ける想定。

## 関連リポジトリ

- [meguritoroge](https://github.com/yukiaga/meguritoroge) — プロジェクトページ（メイン）
- [meguritoroge-2022](https://github.com/yukiaga/meguritoroge-2022)
- [meguritoroge-2023](https://github.com/yukiaga/meguritoroge-2023)
- [meguritoroge-2024](https://github.com/yukiaga/meguritoroge-2024)

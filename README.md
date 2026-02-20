# stitch-figma-mcp

Next.js プロジェクト（App Router + TypeScript + Tailwind CSS）

## 必要環境

- [Volta](https://volta.sh/)（Node.js バージョン管理）
- npm

## セットアップ

```bash
# Volta がプロジェクトの Node バージョン（20）を自動で適用
npm install
```

## 開発サーバー

```bash
npm run dev
```

http://localhost:3000 でアプリが起動します。

## ビルド

```bash
npm run build
```

## 本番起動

```bash
npm run start
```

## その他

- `npm run lint` - ESLint でコードチェック
stitchのバイブコーディングテストです

手順
1.Stitchでデザイン作成
2.Stitchでできたデザインをexport
3.2のデザインをFigmaに展開
4.FigmaMCPを使用してコーディング（一旦単位はページごと）

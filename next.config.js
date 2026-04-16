/** @type {import('next').NextConfig} */

// 親プロジェクト(meguritoroge.com)から /2021 へ rewrite された際、
// CSS/JS/画像などが相対パスだと 404 になるため、本番ビルド時は
// アセットURLを 2021.meguritoroge.com 絶対URLに変換する。
const ASSET_PREFIX =
  process.env.NODE_ENV === 'production' ? 'https://2021.meguritoroge.com' : '';

const nextConfig = {
  assetPrefix: ASSET_PREFIX,
  env: {
    NEXT_PUBLIC_ASSET_PREFIX: ASSET_PREFIX,
  },
};

module.exports = nextConfig;

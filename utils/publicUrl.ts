/**
 * /public 配下のファイルへの絶対URLを返すヘルパー。
 *
 * next.config.js の assetPrefix は /_next/ 配下の Next.js 管理
 * アセットにしか効かない。<img src="/foo.jpg"> のような /public/
 * 直接参照は、親ドメイン (meguritoroge.com/2021) からのrewrite時に
 * 404 になってしまうため、このヘルパー経由で絶対URL化する。
 */
export const publicUrl = (path: string): string => {
  const prefix = process.env.NEXT_PUBLIC_ASSET_PREFIX || '';
  return `${prefix}${path}`;
};

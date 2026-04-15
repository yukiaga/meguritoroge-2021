import { Noto_Serif_JP } from '@next/font/google';

// google font インスタンスのエクスポート
// https://nextjs.org/docs/basic-features/font-optimization#reusing-fonts

export const notoSerifJp = Noto_Serif_JP({
  weight: ['200', '300', '400', '500', '600', '700', '900'],
  display: 'swap',
  subsets: ['latin'],
});

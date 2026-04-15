import { Noto_Serif_JP, Josefin_Sans } from 'next/font/google';

export const notoSerifJp = Noto_Serif_JP({
  weight: ['200', '300', '400', '500', '600', '700', '900'],
  display: 'swap',
  subsets: ['latin'],
  variable: '--font-noto-serif-jp',
});

export const josefinSans = Josefin_Sans({
  weight: ['300', '400', '500', '600'],
  display: 'swap',
  subsets: ['latin'],
  variable: '--font-josefin-sans',
});

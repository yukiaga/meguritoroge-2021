import './globals.scss';
import type { Metadata } from 'next';

import { josefinSans, notoSerifJp } from '@/utils/googleFont';

export const metadata: Metadata = {
  title:
    'MEGURITOROGE – 遠野巡灯篭木 2021 – 民俗・芸能・食・音楽 – 異界をめぐる3日間',
  icons: {
    icon: [{ url: '/favicon.ico', sizes: '16x16' }],
  },
  description:
    '動物、妖怪、死者の魂まで、「異界のものたち」の気配が色濃く残る土地、遠野。2021年11月19日〜21日、民俗・芸能・食・音楽を織り交ぜたツアー型イベント「遠野巡灯篭木（トオノ メグリトロゲ）」初回開催の記録。',
  openGraph: {
    title: '遠野巡灯篭木 2021 – 民俗・芸能・食・音楽 – 異界をめぐる3日間',
    description:
      '2021年11月19日〜21日に岩手県遠野市で開催された、民俗・芸能・食・音楽を織り交ぜたツアー型イベント「遠野巡灯篭木」初回の記録。',
    images: [{ url: 'https://2021.meguritoroge.com/ogp.jpg' }],
  },
};

export const viewport = {
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="ja"
      className={`${notoSerifJp.variable} ${josefinSans.variable}`}
    >
      <body>
        <main>{children}</main>
      </body>
    </html>
  );
}

import './globals.scss';
import type { Metadata } from 'next';

import { Footer } from '@/components/partials/Footer/Footer';
import { SideMenu } from '@/components/partials/SideMenu/SideMenu';
import { notoSerifJp } from '@/utils/googleFont';

import styles from './layout.module.scss';

export const metadata: Metadata = {
  title: '遠野巡灯篭木（トオノメグリトロゲ）’21',
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: '16x16' },
      { url: '/favicon.ico', sizes: '32x32' },
    ],
  },
  openGraph: {
    title: '遠野巡灯篭木（トオノメグリトロゲ）’21',
    description:
      '動物、妖怪、死者の魂まで、「異界のものたち」の気配が色濃く残る土地、岩手県遠野市。遠野を舞台に、民俗、芸能、食、音楽など新旧のカルチャーを織りまぜた体験を生み出すツアー型イベント「遠野巡灯篭木（トオノ メグリトロゲ）」2021年初回の記録。',
    images: [
      {
        url: 'https://2021.meguritoroge.com/ogp.jpg',
      },
    ],
  },
  twitter: {
    card: 'summary',
    title: '遠野巡灯篭木（トオノメグリトロゲ）’21',
    description:
      '動物、妖怪、死者の魂まで、「異界のものたち」の気配が色濃く残る土地、岩手県遠野市。遠野を舞台に、民俗、芸能、食、音楽など新旧のカルチャーを織りまぜた体験を生み出すツアー型イベント「遠野巡灯篭木（トオノ メグリトロゲ）」2021年初回の記録。',
    images: [
      {
        url: 'https://2021.meguritoroge.com/ogp.jpg',
      },
    ],
  },
  description:
    '動物、妖怪、死者の魂まで、「異界のものたち」の気配が色濃く残る土地、岩手県遠野市。遠野を舞台に、民俗、芸能、食、音楽など新旧のカルチャーを織りまぜた体験を生み出すツアー型イベント「遠野巡灯篭木（トオノ メグリトロゲ）」2021年初回の記録。',
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
    <html lang="ja" className={notoSerifJp.className}>
      <body>
        <main>
          <div className={styles['content-layout']}>
            <div className={styles['menu']}>
              <SideMenu scrollTargetId="content" />
            </div>
            <div className={styles['content']} id="content">
              <div className={styles['content-inner']}>{children}</div>
              <div className={styles['content-footer']}>
                <Footer />
              </div>
            </div>
          </div>
        </main>
      </body>
    </html>
  );
}

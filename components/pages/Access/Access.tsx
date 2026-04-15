'use client';

import Image from 'next/image';
import { FC, memo } from 'react';

import { ScrollHandler } from '@/components/partials/ScrollHandler/ScrollHandler-2';
import { Title } from '@/components/partials/Title/Title';

import styles from './Access.module.scss';

export const Access: FC = memo(() => {
  return (
    <div className={styles['component-access']}>
      <div className={styles['title']}>
        <ScrollHandler rootMargin={80}>
          <Title titleText="会場・宿泊施設へのアクセス" linkTargetId="access" />
        </ScrollHandler>
      </div>
      <div className={styles['content']}>
        <ScrollHandler rootMargin={80}>
          <div className={styles['content-item']}>
            <p className={styles['title']}>上映会＆トークショー</p>
            <p className={styles['text']}>
              会場：あえりあ遠野 中ホール
              <br />
              〒028-0524 岩手県遠野市新町1-10
              <br />
              日時：2021年11月19日（金）17:00-19:00（開場16:50）
            </p>
          </div>
        </ScrollHandler>

        <ScrollHandler rootMargin={80}>
          <div className={styles['content-item']}>
            <p className={styles['title']}>
              張山しし踊り降臨ライブ＆トークセッション
            </p>
            <p className={styles['text']}>
              会場：遠野ふるさと村
              <br />
              〒028-0661 岩手県遠野市附馬牛町上附馬牛5-89-1
              <br />
              日時：2021年11月20日（土）16:00-18:30
              <br />
              <br />
              ※当日は15:30-15:50の間に、ふるさと村のビジターセンターまでお越しください。スタッフが会場までご案内いたします。
            </p>
          </div>
        </ScrollHandler>

        <ScrollHandler rootMargin={80}>
          <div className={styles['content-item']}>
            <p className={styles['title']}>遠野への行き方</p>
            <div
              className={styles['image']}
              style={{
                position: 'relative',
                width: '100%',
                aspectRatio: '1024 / 492',
              }}
            >
              <Image
                src="/2021/access-map.png"
                alt="遠野へのアクセスマップ"
                fill
                style={{ objectFit: 'contain' }}
              />
            </div>
            <p className={styles['text']}>
              新花巻駅からJR釜石線またはレンタカー等で約40分
              <br />
              東京駅から新幹線をご利用の場合：東北新幹線で新花巻着、JR釜石線で遠野駅着
            </p>
          </div>
        </ScrollHandler>
      </div>
    </div>
  );
});

Access.displayName = 'Access';

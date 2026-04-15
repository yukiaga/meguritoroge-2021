'use client';

import { FC, memo } from 'react';

import { ScrollHandler } from '@/components/partials/ScrollHandler/ScrollHandler-2';
import { Title } from '@/components/partials/Title/Title';

import styles from './Credit.module.scss';

export const Credit: FC = memo(() => {
  return (
    <div className={styles['component-credit']}>
      <div className={styles['title']}>
        <ScrollHandler rootMargin={80}>
          <Title titleText="制作スタッフ / クレジット" linkTargetId="credit" />
        </ScrollHandler>
      </div>
      <div className={styles['text']}>
        <ScrollHandler rootMargin={80}>
          プロデューサー：塚田有那・坂本麻人（一般社団法人 Whole Universe）
          <br />
          遠野ディレクター：富川岳（株式会社 富川屋 / to know）
          <br />
          制作：羽田寛士（TAPES PRODUCTION）、清水聡美
          <br />
          コーディネート：阿部和美、多田陽香、大谷史也
          <br />
          ディナープロデュース：おのひづめ
          <br />
          <br />
          主催：一般社団法人 Whole Universe
          <br />
          助成：文化庁「ARTS for the future!」補助対象事業
        </ScrollHandler>
      </div>
    </div>
  );
});

Credit.displayName = 'Credit';

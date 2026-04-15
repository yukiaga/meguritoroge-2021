'use client';

import { FC, memo } from 'react';

import styles from './Logo.module.scss';

// textColorを受け付ける
type Props = {
  textColor?: string;
};

export const Logo: FC<Props> = memo(({ textColor = '#fff' }) => {
  return (
    <div className={styles['component-menu']} style={{ color: textColor }}>
      <p className={styles['main-title']}>
        <span className={styles['sub-title']}>トオノ メグリトロゲ</span>
        遠野 巡灯篭木
      </p>
      <p className={styles['event-subtitle']}>
        民俗・芸能・食・音楽 異界をめぐる巡礼の3日間
      </p>
    </div>
  );
});

Logo.displayName = 'Logo';

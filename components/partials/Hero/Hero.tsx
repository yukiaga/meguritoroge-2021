'use client';

import { FC, memo } from 'react';

import styles from './Hero.module.scss';

interface Props {
  scrollTargetId?: string;
}

export const Hero: FC<Props> = memo(({ scrollTargetId }) => {
  const handleScrollToTarget = () => {
    if (!scrollTargetId) return;
    const contentInner = document.getElementById(scrollTargetId);
    contentInner?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <div className={styles['component-hero']} id="component-hero">
      <div className={styles['hero']}>
        <img
          src="/2021/hero-olakomi.jpg"
          alt="遠野巡灯篭木 2021"
          className={styles['hero-image']}
        />
      </div>
      <div className={styles['scroll']} onClick={handleScrollToTarget}>
        <p className={styles['scroll-text']}>scroll down</p>
        <div className={styles['scroll-arrow']} />
      </div>
    </div>
  );
});

Hero.displayName = 'Hero';

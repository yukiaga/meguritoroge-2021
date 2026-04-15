'use client';

import { FC, memo } from 'react';

import styles from './MovieText.module.scss';

type Props = {
  title: React.ReactNode;
  text: React.ReactNode;
  videoSrc: string;
};

export const MovieText: FC<Props> = memo(({ title, text, videoSrc }) => {
  return (
    <div className={styles['component-movie-text']}>
      <div className={styles['movie']}>
        <video
          id="hero-video"
          autoPlay
          muted
          loop
          playsInline
          key={videoSrc}
          style={{
            width: '100%',
            height: '100%',
            display: 'block',
          }}
        >
          {videoSrc && <source src={videoSrc} type="video/mp4" />}
        </video>
      </div>
      <div className={styles['content']}>
        <div className={styles['content-title']}>{title}</div>
        <div className={styles['content-text']}>{text}</div>
      </div>
    </div>
  );
});

MovieText.displayName = 'MovieText';

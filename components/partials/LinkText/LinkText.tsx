'use client';

import { FC, memo } from 'react';

import Link from '@/assets/icons/link.svg';

import styles from './LinkText.module.scss';

type Props = {
  text: string;
  url: string;
  textColor?: string;
};

export const LinkText: FC<Props> = memo(({ text, url, textColor = '#000' }) => {
  return (
    <a
      className={styles['component-link-text']}
      style={{ color: textColor }}
      href={url}
      target="_blank"
      rel="noreferrer"
    >
      {text}
      <span className={styles['link-svg']}>
        <Link />
      </span>
    </a>
  );
});

LinkText.displayName = 'LinkText';

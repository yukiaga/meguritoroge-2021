'use client';

import { FC, memo } from 'react';

import styles from './Title.module.scss';

type Props = {
  titleText: string;
  linkTargetId?: string;
};

export const Title: FC<Props> = memo(({ titleText, linkTargetId }) => {
  return (
    <>
      {linkTargetId ? (
        <a href={`/#${linkTargetId}`} id={linkTargetId}>
          <h2 className={styles['component-link-title']}>{titleText}</h2>
        </a>
      ) : (
        <h2 className={styles['component-title']}>{titleText}</h2>
      )}
    </>
  );
});

Title.displayName = 'Title';

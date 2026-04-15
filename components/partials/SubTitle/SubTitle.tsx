'use client';

import { FC, memo } from 'react';

import styles from './SubTitle.module.scss';

type Props = {
  subTitleText: string;
};

export const SubTitle: FC<Props> = memo(({ subTitleText }) => {
  return (
    <>
      <h3 className={styles['component-sub-title']}>{subTitleText}</h3>
    </>
  );
});

SubTitle.displayName = 'SubTitle';

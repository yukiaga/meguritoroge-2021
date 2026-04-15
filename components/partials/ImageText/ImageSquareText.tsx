'use client';

import Image, { StaticImageData } from 'next/image';
import { FC, memo } from 'react';

import styles from './ImageSquareText.module.scss';

type Props = {
  title: string;
  text: React.ReactNode;
  imageSrc: StaticImageData | string;
  imageAlt: string;
};

export const ImageSquareText: FC<Props> = memo(
  ({ title, text, imageSrc, imageAlt }) => {
    return (
      <div className={styles['component-image-text']}>
        <div className={styles['image']}>
          <Image src={imageSrc} alt={imageAlt} fill objectFit="cover" />
        </div>
        <div className={styles['content']}>
          <div className={styles['content-title']}>{title}</div>
          <div className={styles['content-text']}>{text}</div>
        </div>
      </div>
    );
  }
);

ImageSquareText.displayName = 'ImageSquareText';

'use client';

import Image, { StaticImageData } from 'next/image';
import { FC, memo } from 'react';

import useMedia from '@/hooks/useMedia';

import styles from './ImageText.module.scss';

type Props = {
  title: React.ReactNode;
  text: React.ReactNode;
  imageSrc: StaticImageData | string;
  imageAlt: string;
};

export const ImageText: FC<Props> = memo(
  ({ title, text, imageSrc, imageAlt }) => {
    const isSP = useMedia();

    return (
      <div className={styles['component-image-text']}>
        <div className={styles['image']}>
          <Image
            src={imageSrc}
            alt={imageAlt}
            fill
            style={isSP && { objectFit: 'cover' }}
          />
        </div>
        <div className={styles['content']}>
          <div className={styles['content-title']}>{title}</div>
          <div className={styles['content-text']}>{text}</div>
        </div>
      </div>
    );
  }
);

ImageText.displayName = 'ImageText';

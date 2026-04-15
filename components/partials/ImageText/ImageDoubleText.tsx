'use client';

import Image, { StaticImageData } from 'next/image';
import { FC, memo } from 'react';

import useMedia from '@/hooks/useMedia';

import styles from './ImageDoubleText.module.scss';

type Props = {
  title: React.ReactNode;
  text: React.ReactNode;
  imageSrc1: StaticImageData;
  imageSrc2: StaticImageData;
  imageAlt: string;
};

export const ImageDoubleText: FC<Props> = memo(
  ({ title, text, imageSrc1, imageSrc2, imageAlt }) => {
    const isSP = useMedia();

    return (
      <div className={styles['component-image-double-text']}>
        <div className={styles['image']}>
          <div className={styles['image-content']}>
            <Image
              src={imageSrc1}
              alt={imageAlt}
              fill
              style={isSP && { objectFit: 'cover' }}
            />
          </div>
          <div className={styles['image-content']}>
            <Image
              src={imageSrc2}
              alt={imageAlt}
              fill
              style={isSP && { objectFit: 'cover' }}
            />
          </div>
        </div>
        <div className={styles['content']}>
          <div className={styles['content-title']}>{title}</div>
          <div className={styles['content-text']}>{text}</div>
        </div>
      </div>
    );
  }
);

ImageDoubleText.displayName = 'ImageDoubleText';

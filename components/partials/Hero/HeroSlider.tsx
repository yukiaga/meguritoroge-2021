'use client';
// ほぼ全てchatGPT4で生成

import Image, { StaticImageData } from 'next/image';
import { FC, memo, useState } from 'react';

// import ArrowLeft from '@/assets/icons/arrow-left.svg';
// import ArrowRight from '@/assets/icons/arrow-right.svg';
import Logo from '@/assets/logos/logo.svg'; // ロゴSVGをインポート

import styles from './HeroSlider.module.scss';

interface HeroSliderProps {
  images: StaticImageData[];
}

export const HeroSlider: FC<HeroSliderProps> = memo(({ images = [] }) => {
  const [currentSlide, setCurrentSlide] = useState<number>(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  return (
    <div className={styles['hero-slider']}>
      <div className={styles.slides}>
        {images.map((image, index) => (
          <div
            key={index}
            className={styles.slide}
            style={{
              opacity: index === currentSlide ? 1 : 0,
              zIndex: index === currentSlide ? 1 : 0,
            }}
          >
            <Image src={image} alt={`Slide ${index + 1}`} fill />
          </div>
        ))}
      </div>

      <div className={styles.controls}>
        <div className={styles.arrow} onClick={prevSlide}>
          {'<'}
        </div>
        <div className={styles.dots}>
          {images.map((_, index) => (
            <button
              key={index}
              className={`${styles.dot} ${
                index === currentSlide && styles.active
              }`}
              onClick={() => goToSlide(index)}
            />
          ))}
        </div>
        <div className={styles.arrow} onClick={nextSlide}>
          {'>'}
        </div>

        <div className={styles.logo}>
          <Logo />
        </div>
      </div>
    </div>
  );
});

HeroSlider.displayName = 'HeroSlider';

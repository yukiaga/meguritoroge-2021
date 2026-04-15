'use client';

import { FC, memo } from 'react';

import { Logo } from '@/components/partials/Logo/Logo';

import styles from './Menu.module.scss';

type Props = {
  textColor?: string;
  setIsOpen: (isOpen: boolean) => void;
};

export const Menu: FC<Props> = memo(({ textColor = '#fff', setIsOpen }) => {
  const handleClick = () => {
    setIsOpen(false);
  };

  return (
    <div className={styles['component-menu']} style={{ color: textColor }}>
      <div className={styles['logo']}>
        <a href="/">
          <Logo textColor={textColor} />
        </a>
      </div>
      <nav className={styles['list']}>
        <ul className={styles['menu-list']}>
          <li className={styles['menu-item']}>
            <a href="/#overview" onClick={handleClick}>
              <span>- 概要</span>
            </a>
          </li>
          <li className={styles['menu-item']}>
            <a href="/#pickup" onClick={handleClick}>
              <span>- ツアーのみどころ</span>
            </a>
          </li>
          <li className={styles['menu-item']}>
            <a href="/#artists" onClick={handleClick}>
              <span>- 参加アーティスト</span>
            </a>
          </li>
          <li className={styles['menu-item']}>
            <a href="/#talk-guest" onClick={handleClick}>
              <span>- トークショー / ファシリテーター</span>
            </a>
          </li>
          <li className={styles['menu-item']}>
            <a href="/#access" onClick={handleClick}>
              <span>- 会場・アクセス</span>
            </a>
          </li>
          <li className={styles['menu-item']}>
            <a href="/#credit" onClick={handleClick}>
              <span>- クレジット</span>
            </a>
          </li>
        </ul>
      </nav>

      <div className={styles['social-links']}>
        <a
          className={styles['link']}
          href="https://www.facebook.com/meguritoroge/"
          target="_blank"
          rel="noreferrer"
        >
          Facebook
        </a>
        <a
          className={styles['link']}
          href="https://www.instagram.com/tono_meguritoroge/"
          target="_blank"
          rel="noreferrer"
        >
          Instagram
        </a>
      </div>
    </div>
  );
});

Menu.displayName = 'Menu';

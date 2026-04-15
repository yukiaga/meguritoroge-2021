'use client';

import { clsx } from 'clsx';
import { FC, memo } from 'react';

import { CopyClipboard } from '@/components/partials/CopyToClipboard/CopyToClipboard';
import { Logo } from '@/components/partials/Logo/Logo';
import useMedia from '@/hooks/useMedia';

import styles from './Footer.module.scss';

type Props = {
  textColor?: string;
};

export const Footer: FC<Props> = memo(({ textColor = '#fff' }) => {
  const { isSP, isPC } = useMedia();
  return (
    <div className={styles['component-footer']} style={{ color: textColor }}>
      <div className={styles['contents']}>
        {isPC && (
          <div className={styles['content-logo']}>
            <a href="/">
              <Logo textColor={textColor} />
            </a>
          </div>
        )}
        <div className={styles['content-columns']}>
          <ul className={styles['column']}>
            <li className={styles['column-item']}>
              <a href="/#overview">
                <span>概要</span>
              </a>
            </li>
            <li className={styles['column-item']}>
              <a href="/#pickup">
                <span>ツアーのみどころ</span>
              </a>
            </li>
            <li className={styles['column-item']}>
              <a href="/#artists">
                <span>参加アーティスト</span>
              </a>
            </li>
            <li className={styles['column-item']}>
              <a href="/#talk-guest">
                <span>トークショー / ファシリテーター</span>
              </a>
            </li>
            <li className={styles['column-item']}>
              <a href="/#access">
                <span>会場・アクセス</span>
              </a>
            </li>
            <li className={styles['column-item']}>
              <a href="/#credit">
                <span>クレジット</span>
              </a>
            </li>
          </ul>
          <div className={styles['column']}>
            <p className={styles['column-item']}>
              <a
                className={styles['link']}
                href="https://www.facebook.com/meguritoroge/"
                target="_blank"
                rel="noreferrer"
              >
                Facebook
              </a>
            </p>
            <p className={styles['column-item']}>
              <a
                className={styles['link']}
                href="https://www.instagram.com/tono_meguritoroge/"
                target="_blank"
                rel="noreferrer"
              >
                Instagram
              </a>
            </p>
          </div>
          <div className={styles['column']}>
            <p className={styles['column-item']}>
              <a
                className={styles['link']}
                href="https://meguritoroge.com/"
                target="_blank"
                rel="noreferrer"
              >
                プロジェクトトップ
              </a>
            </p>
            <p className={styles['column-item']}>
              <a
                className={styles['link']}
                href="https://2024.meguritoroge.com/"
                target="_blank"
                rel="noreferrer"
              >
                2024
              </a>
            </p>
            <p className={styles['column-item']}>
              <a
                className={styles['link']}
                href="https://2023.meguritoroge.com/"
                target="_blank"
                rel="noreferrer"
              >
                2023
              </a>
            </p>
            <p className={styles['column-item']}>
              <a
                className={styles['link']}
                href="https://2022.meguritoroge.com/"
                target="_blank"
                rel="noreferrer"
              >
                2022
              </a>
            </p>
          </div>
          <div className={styles['column']}>
            <p className={clsx(styles['column-item'], styles['-no-link'])}>
              遠野巡灯篭木実行委員会
            </p>
            <div className={styles['column-item']}>
              <CopyClipboard
                text="contact@meguritoroge.com"
                displayText={<p>contact(at)meguritoroge.com</p>}
              ></CopyClipboard>
            </div>
          </div>
        </div>
      </div>
      {isSP && (
        <div className={styles['content-logo']}>
          <a href="/">
            <Logo textColor={textColor} />
          </a>
        </div>
      )}
      <p className={styles['copy']}>
        Copyright © 2021 MEGURITOROGE | Powered by MEGURITOROGE
      </p>
    </div>
  );
});

Footer.displayName = 'Footer';

// https://zenn.dev/moriatsu/articles/232b92f8ef22b8

'use client';

import { clsx } from 'clsx';
import { FC, memo, PropsWithChildren } from 'react';
import { useInView } from 'react-intersection-observer';

import styles from './ScrollHandler.module.scss';

type Props = {
  rootMargin?: number;
};

export const ScrollHandler: FC<PropsWithChildren<Props>> = memo(
  ({ children, rootMargin = 100 }) => {
    /**
     * スクロールイベントのオプション
     * 「ref」検知する要素
     * 「inView」要素が見えたかどうか(見えたらtrue)
     * 「rootMargin」要素の検知の「余白」を設定
     * 「triggerOnce」検知を一度だけ行うかどうか
     */
    const { ref, inView } = useInView({
      rootMargin: `-${rootMargin}px`,
      triggerOnce: true,
    });

    return (
      /**
       * ★スクロールさせたい要素を囲む
       * refで指定すると対象の要素になる
       * inViewのtrueかfalseを受け取り、styled-componentに渡す
       */
      <div
        className={clsx(
          styles['component-scroll-handler'],
          inView ? styles[`-entered`] : styles[`-entering`]
        )}
        ref={ref}
      >
        {children}
      </div>
    );
  }
);

ScrollHandler.displayName = 'ScrollHandler';

'use client';

import { clsx } from 'clsx';
import {
  FC,
  memo,
  PropsWithChildren,
  useEffect,
  useState,
  useRef,
} from 'react';
import { CSSTransition } from 'react-transition-group';

import styles from './FadeInComponent.module.scss';

type Props = PropsWithChildren<{
  duration?: number;
  canTranslateY?: boolean;
}>;

export const FadeInComponent: FC<Props> = memo(
  ({ children, duration = 500, canTranslateY }) => {
    const [isMounted, setIsMounted] = useState<boolean>(false);
    const nodeRef = useRef<HTMLDivElement>(null);

    // 初回レンダー時にアニメーションを実行するためのフラグ
    useEffect(() => {
      setIsMounted(true);
    }, []);

    return (
      <CSSTransition nodeRef={nodeRef} in={isMounted} timeout={500}>
        {(state: any) => {
          return (
            <div
              className={clsx(
                styles[`-${state}`],
                canTranslateY
                  ? styles['component-fade-in-translate-y']
                  : styles['component-fade-in']
              )}
              style={{ transition: `all ${duration}ms ease-in 0s` }}
            >
              {children}
            </div>
          );
        }}
      </CSSTransition>
    );
  }
);

FadeInComponent.displayName = 'FadeInComponent';

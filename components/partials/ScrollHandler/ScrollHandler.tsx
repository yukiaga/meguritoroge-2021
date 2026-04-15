'use client';

import { clsx } from 'clsx';
import {
  FC,
  memo,
  useState,
  useEffect,
  useRef,
  PropsWithChildren,
  useCallback,
} from 'react';
import { Transition } from 'react-transition-group';

import styles from './ScrollHandler.module.scss';

type ScrollElementProps = {
  isVisible: boolean;
};

const ScrollElement: FC<PropsWithChildren<ScrollElementProps>> = ({
  isVisible,
  children,
}) => {
  const nodeRef = useRef<HTMLDivElement>(null);

  return (
    <Transition
      in={isVisible}
      nodeRef={nodeRef}
      timeout={{ enter: 10, exit: 400 }}
    >
      {(state) => {
        return (
          <div
            ref={nodeRef}
            className={clsx(
              styles['component-scroll-handler'],
              styles[`-${state}`]
            )}
          >
            {children}
          </div>
        );
      }}
    </Transition>
  );
};

// visibleにするスクロール値を定める
type Props = {
  visibleScrollValue?: number;
};

export const ScrollHandler: FC<PropsWithChildren<Props>> = memo(
  ({ children, visibleScrollValue = 0.85 }) => {
    const [isVisible, setIsVisible] = useState<boolean>(false);
    const elementRef = useRef<HTMLDivElement>(null);

    const handleScroll = useCallback(() => {
      const element = elementRef.current;

      console.log('はっか!');

      // isVisibleがtrueの場合は何もしない
      if (isVisible) return;

      // 8.5割の高さまでスクロールしたらisVisibleをtrueにする
      if (element) {
        const isVisible =
          element.getBoundingClientRect().top <
          window.innerHeight * visibleScrollValue;
        setIsVisible(isVisible);
      }
    }, [isVisible, visibleScrollValue]);

    useEffect(() => {
      console.log('usseEffect はっか!');

      window.addEventListener('scroll', handleScroll);
      return () => window.removeEventListener('scroll', handleScroll);
    }, [handleScroll]);

    return (
      <ScrollElement isVisible={isVisible}>
        <div ref={elementRef}>{children}</div>
      </ScrollElement>
    );
  }
);

ScrollHandler.displayName = 'ScrollHandler';

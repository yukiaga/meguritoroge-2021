import { useState, useLayoutEffect, useCallback, useMemo } from 'react';

import { SP_WIDTH, TB_WIDTH } from '@/constants';

interface IUseMedia {
  isSP: boolean;
  isTB: boolean;
  isPC: boolean;
}

/**
 * NOTICE: 正しいサイズの値がStateの値に入るまでに一瞬の間があることに注意する
 * 基本的には「SPのみこの要素を表示する」といった使い方を推奨
 */
const useMedia = (): IUseMedia => {
  /** SPサイズかどうか */
  const [isSP, setIsSP] = useState<boolean>(false);
  /** TBサイズかどうか */
  const [isTB, setIsTB] = useState<boolean>(false);

  const isPC = useMemo<boolean>(() => !isSP && !isTB, [isSP, isTB]);

  const checkWidth = useCallback(() => {
    const spMedia: MediaQueryList = window.matchMedia(
      `(max-width: ${SP_WIDTH}px)`
    );
    const tbMedia: MediaQueryList = window.matchMedia(`(max-width: ${
      TB_WIDTH - 1
    }px)
      and (min-width: ${SP_WIDTH + 1}px)`);

    setIsSP(spMedia.matches);
    setIsTB(tbMedia.matches);
  }, []);

  useLayoutEffect(() => {
    if (window) {
      checkWidth();
      // 画面サイズが変わったときにサイズ判定を再評価する
      window.addEventListener('resize', checkWidth);
    }

    // 取り消す
    return () => {
      if (window) {
        window.removeEventListener('resize', checkWidth);
      }
    };
  }, [checkWidth]);

  return { isSP, isTB, isPC };
};

export default useMedia;

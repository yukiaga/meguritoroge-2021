'use client';

import { clsx } from 'clsx';
import { FC, ReactNode, memo, useState, useCallback } from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';

import ClipCopyBlack from '@/assets/icons/clipcopy-black.svg';
import ClipCopy from '@/assets/icons/clipcopy.svg';

import style from './CopyToClipboard.module.scss';

interface CopyClipboardProps {
  text: string; // クリップボードにコピーされるテキスト
  displayText?: ReactNode; // 表示するテキスト
  color?: 'black' | 'white'; // 表示するテキストの色
}

export const CopyClipboard: FC<CopyClipboardProps> = memo(
  ({ text, displayText = text, color }) => {
    const [isVisibleCopyTooltip, setIsVisibleCopyTooltip] =
      useState<boolean>(false);
    const [mousePosition, setMousePosition] = useState<{
      x: number;
      y: number;
    }>({
      x: 0,
      y: 0,
    });

    const handleCopy = useCallback((e: React.MouseEvent<HTMLInputElement>) => {
      setMousePosition({
        x: e.clientX + 4,
        y: e.clientY + 4,
      });

      setIsVisibleCopyTooltip(true);
      setTimeout(() => setIsVisibleCopyTooltip(false), 400);
    }, []);

    const isBlack: boolean = color === 'black';

    return (
      <>
        <CopyToClipboard text={text}>
          <div
            className={clsx(style['link-text'], isBlack && style['-black'])}
            onClick={handleCopy}
          >
            {displayText}
            <span className={style['clip']}>
              {isBlack ? <ClipCopyBlack /> : <ClipCopy />}
            </span>
          </div>
        </CopyToClipboard>
        <div
          style={{
            top: `${mousePosition.y + 10}px`,
            left: `${mousePosition.x + 6}px`,
          }}
          className={clsx(
            style['clip-board'],
            isVisibleCopyTooltip && style['-show'],
            isBlack && style['-black']
          )}
        >
          Copied
        </div>
      </>
    );
  }
);

CopyClipboard.displayName = 'CopyClipboard';

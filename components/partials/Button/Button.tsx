import { clsx } from 'clsx';
import { FC, memo } from 'react';

import styles from './Button.module.scss';

type Props = {
  text: string;
  textColor?: string;
  url: string;
  disabled?: boolean;
};

export const Button: FC<Props> = memo(
  ({ text, textColor = '#fff', url, disabled }) => {
    // urlを受け取る
    return (
      <div
        className={clsx(
          styles['component-button'],
          disabled && styles['-disabled']
        )}
        style={{ color: textColor }}
      >
        <a
          href={url}
          target="_blank"
          rel="noreferrer"
          className={styles['link']}
        >
          <span className={styles['link-text']}>{text}</span>
        </a>
      </div>
    );
  }
);

Button.displayName = 'Button';

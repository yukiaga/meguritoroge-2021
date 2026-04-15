import { clsx } from 'clsx';
import { FC, memo } from 'react';

import style from './Hamburger.module.scss';

// openかどうか
type Props = {
  isOpen: boolean;
};

export const Hamburger: FC<Props> = memo(({ isOpen }) => {
  return (
    <div
      className={clsx(style['component-hamburger'], isOpen && style['-open'])}
    >
      <div className={clsx(style['line'], style['-top'])} />
      <div className={clsx(style['line'], style['-bottom'])} />
    </div>
  );
});

Hamburger.displayName = 'Hamburger';

'use client';

import { FC, memo } from 'react';

import { Menu } from './Menu';
import styles from './MenuBackground.module.scss';

type Props = {
  setIsOpen: (isOpen: boolean) => void;
};

export const MenuBackground: FC<Props> = memo(({ setIsOpen }) => {
  const handleClick = () => {
    setIsOpen(false);
  };

  return (
    <div className={styles['component-menu-background']}>
      <div className={styles['background']} onClick={handleClick} />
      <div className={styles['menu']}>
        <Menu textColor="#000" setIsOpen={setIsOpen} />
      </div>
    </div>
  );
});

MenuBackground.displayName = 'MenuBackground';

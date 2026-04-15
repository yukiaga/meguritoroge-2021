'use client';

import { FC, memo, useState } from 'react';
import { animateScroll } from 'react-scroll';

import Logo from '@/assets/logos/logo.svg';
import SubLogo from '@/assets/logos/sub-logo.svg';
import { FadeInComponent } from '@/components/partials/FadeInComponent/FadeInComponent';
import { MenuBackground } from '@/components/partials/Menu/MenuBackground';

import { Hamburger } from '../Hamburger/Hamburger';

import styles from './SideMenu.module.scss';

type SideMenuProps = {
  scrollTargetId?: string;
};

export const SideMenu: FC<SideMenuProps> = memo(({ scrollTargetId }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const handleClick = () => setIsOpen((s) => !s);
  const handleScrollToTop = () => {
    if (scrollTargetId) {
      const contentInner = document.getElementById(scrollTargetId);
      if (contentInner) {
        contentInner.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    } else {
      animateScroll.scrollToTop();
    }
  };

  return (
    <div className={styles['component-side-menu']}>
      <div className={styles['hamburger']} onClick={handleClick}>
        <Hamburger isOpen={isOpen} />
      </div>
      <div className={styles['logo']}>
        <Logo />
      </div>
      <div className={styles['sublogo']}>
        <SubLogo />
      </div>
      <div className={styles['scroll']} onClick={handleScrollToTop}>
        <p>top</p>
      </div>
      {isOpen && (
        <div className={styles['menu']}>
          <FadeInComponent duration={70}>
            <div className={styles['menu-content']}>
              <MenuBackground setIsOpen={setIsOpen} />
            </div>
          </FadeInComponent>
        </div>
      )}
    </div>
  );
});

SideMenu.displayName = 'SideMenu';

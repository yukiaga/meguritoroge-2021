import { Access } from '@/components/pages/Access/Access';
import { Credit } from '@/components/pages/Credit/Credit';
import { LiveArtists } from '@/components/pages/LiveArtists/LiveArtists';
import { Overview } from '@/components/pages/Overview/Overview';
import { Pickup } from '@/components/pages/Pickup/Pickup';
import { TalkGuest } from '@/components/pages/TalkGuest/TalkGuest';
import { FadeInComponent } from '@/components/partials/FadeInComponent/FadeInComponent';
import { Hero } from '@/components/partials/Hero/Hero';

import styles from './page.module.scss';

export default function Page() {
  return (
    <div className={styles['top-page']}>
      <FadeInComponent duration={300}>
        <div className={styles['hero-image']}>
          <Hero scrollTargetId="scroll-target" />
        </div>
      </FadeInComponent>

      <div className={styles['top-content']} id="scroll-target">
        <div className={styles['item']}>
          <Overview />
        </div>

        <div className={styles['item']}>
          <Pickup />
        </div>

        <div className={styles['item']}>
          <LiveArtists />
        </div>

        <div className={styles['item']}>
          <TalkGuest />
        </div>

        <div className={styles['item']}>
          <Access />
        </div>

        <div className={styles['item']}>
          <Credit />
        </div>
      </div>
    </div>
  );
}

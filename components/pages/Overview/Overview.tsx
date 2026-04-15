'use client';

import { FC, memo } from 'react';

import { ScrollHandler } from '@/components/partials/ScrollHandler/ScrollHandler-2';
import { SubTitle } from '@/components/partials/SubTitle/SubTitle';
import { Title } from '@/components/partials/Title/Title';

import styles from './Overview.module.scss';

export const Overview: FC = memo(() => {
  return (
    <div className={styles['component-overview']}>
      <div className={styles['title']}>
        <ScrollHandler rootMargin={80}>
          <Title titleText="概要" linkTargetId="overview" />
        </ScrollHandler>
      </div>

      <div className={styles['text']}>
        <ScrollHandler rootMargin={80}>
          動物、妖怪、死者の魂まで、「異界のものたち」の気配が色濃く残る土地、遠野。
          それらの物語はなぜ生まれたのか、いま異界を想像することにどんな意味があるのか。
          2021年の夏、遠野に広がる異界の景色をめぐるツアー型イベント「遠野巡灯篭木（トオノ
          メグリトロゲ）」が初回を迎えました。
          <br />
        </ScrollHandler>
        <br />
        <ScrollHandler rootMargin={80}>
          遠野の民俗文化をめぐるスタディツアー、山と人をつなぐ神事である遠野の郷土芸能「しし踊り」と音楽家たちによるライブセッション、遠野の死生観にまつわるドキュメンタリー映像上映、そして滋味にあふれる発酵と食など、新旧のカルチャーを織り交ぜた体験をお届けする３日間。
          <br />
          <br />
          全国各地から“マレビト（異なる文化圏の人々）”として集結した参加者とともに、遠野に新たな民話を紡ぐことを目指しました。
          <br />
        </ScrollHandler>
      </div>

      <div className={styles['sub-title']}>
        <ScrollHandler rootMargin={80}>
          <SubTitle subTitleText="ディレクター・メッセージ" />
        </ScrollHandler>
      </div>

      <div className={styles['text']}>
        <ScrollHandler rootMargin={80}>
          <span className={styles['text-italic']}>
            ――願わくは、これを語りて平地人を戦慄せしめよ。
            （柳田国男『遠野物語』より）
          </span>
          <br />
        </ScrollHandler>
        <br />
        <ScrollHandler rootMargin={80}>
          柳田国男の『遠野物語』で知られる岩手県遠野市。河童や座敷童子といった妖怪伝承が記録されたこの地域には、いまもその気配が色濃く残っています。妖怪、山の神、田の神、そして死者の魂など、数々の「異界のものたち」にまつわるエピソードは、単なる昔話や伝説にその記憶を押し込めず、厳しい自然環境のなかで人々が感じ取ったリアリティをそのまま映し出しています。
          <br />
        </ScrollHandler>
        <br />
        <ScrollHandler rootMargin={80}>
          そんな遠野にいまも残る風習のひとつに「ムカイトロゲ（迎え灯篭木）」があります。先祖の魂が家に戻ってくるための目印として立てられる旗と灯籠のことで、『遠野物語』の序文にも「旗を高く掲げて魂を招く風あり」と書かれています。
          <br />
        </ScrollHandler>
        <br />
        <ScrollHandler rootMargin={80}>
          「遠野巡灯篭木（トオノ
          メグリトロゲ）」は、そうした目に見えぬ魂への想像をめぐらせるツアー型イベントです。数百年の歴史を持つ伝統芸能と現代カルチャーを織り交ぜ、音楽、芸能、食、語り部たちの声を媒介として、全国各地からマレビトを集め、それぞれが異界の風景を探索し、新たな物語や交流を生み出すことを目指します。
          <br />
        </ScrollHandler>
        <ScrollHandler rootMargin={80}>
          柳田国男は、「
          <span className={styles['text-big']}>
            伝説は（略）文化の水準を異にした二つの部曲の、新たなる接触面に沿うて現れやすい
          </span>
          」と書いています。ある土地にマレビトがやってくる、その境界面にこそ、新たな物語が立ち上がるのです。
          <br />
        </ScrollHandler>
        <br />
        <ScrollHandler rootMargin={80}>
          太鼓の音が響き、体は自然に踊りだす。同じ土を踏みしめ、酒と食を味わい、見えざるものたちの声を聞く。ことばよりも雄弁な「踊るからだ」は、老若男女、普段は異なる生活圏を生きる人々をも交わらせ、分断した境界を融解させることでしょう。人も、動物も、森も、すべてのいのちが等しくなる時空間へ―――遠野の次なる伝説が、いま産声を上げます。
          <br />
        </ScrollHandler>
        <br />
        <ScrollHandler rootMargin={80}>
          本企画プロデューサー・塚田有那（Whole Universe）
        </ScrollHandler>
      </div>

      <div className={styles['sub-title']}>
        <ScrollHandler rootMargin={80}>
          <SubTitle subTitleText="基本情報" />
        </ScrollHandler>
      </div>

      <div className={styles['text']}>
        <ScrollHandler rootMargin={80}>
          遠野巡灯篭木（トオノ メグリトロゲ）’21
          <br />
          開催日：2021年11月19日（金）〜 11月21日（日）
          <br />
          会場：遠野ふるさと村 / あえりあ遠野 ほか遠野市内各所
          <br />
          <br />
          主催：一般社団法人 Whole Universe
          <br />
          助成：文化庁「ARTS for the future!」補助対象事業
        </ScrollHandler>
      </div>
    </div>
  );
});

Overview.displayName = 'Overview';

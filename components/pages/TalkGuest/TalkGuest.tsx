'use client';

import { FC, memo } from 'react';

import { ImageSquareText } from '@/components/partials/ImageText/ImageSquareText';
import { ScrollHandler } from '@/components/partials/ScrollHandler/ScrollHandler-2';
import { SubTitle } from '@/components/partials/SubTitle/SubTitle';
import { Title } from '@/components/partials/Title/Title';

import styles from './TalkGuest.module.scss';

export const TalkGuest: FC = memo(() => {
  return (
    <div className={styles['component-talk-guest']}>
      <div className={styles['title']}>
        <ScrollHandler rootMargin={80}>
          <Title
            titleText="トークショー / ファシリテーター"
            linkTargetId="talk-guest"
          />
        </ScrollHandler>
      </div>

      <div className={styles['content']}>
        <ScrollHandler rootMargin={80}>
          <div>
            <SubTitle subTitleText="トークショー①「遠野における魂のゆくえ」" />
            <p style={{ margin: '1em 0', lineHeight: 1.8 }}>
              遠野の歴史・文化に精通する専門家たちが、遠野に色濃く残る死生観を語るセッション。
            </p>
          </div>
        </ScrollHandler>

        <ScrollHandler rootMargin={80}>
          <div className={styles['content-item']}>
            <ImageSquareText
              title="赤坂 憲雄"
              text={
                <p>
                  1953年、東京都生まれ。専門は民俗学・日本文化論。学習院大学教授。
                  <br />
                  <br />
                  『岡本太郎の見た日本』（岩波書店）でドゥマゴ文学賞、芸術選奨文部科学大臣賞を受賞。『異人論序説』『排除の現象学』（ちくま学芸文庫）、『東西／南北考』『武蔵野をよむ』（岩波新書）、『性食考』『ナウシカ考』（岩波書店）など著書多数。
                </p>
              }
              imageSrc="/2021/facil-akasaka.jpg"
              imageAlt="赤坂 憲雄"
            />
          </div>
        </ScrollHandler>

        <ScrollHandler rootMargin={80}>
          <div className={styles['content-item']}>
            <ImageSquareText
              title="大橋 進"
              text={
                <p>
                  1980年生まれ。岩手県遠野市出身。岩手県遠野市鎮座「遠野郷八幡宮」で神職として働く。
                  <br />
                  <br />
                  著書に『教訓で読み解く遠野物語』『社務ねこオトラ（上下巻）』を電子出版。
                </p>
              }
              imageSrc="/2021/facil-ohashi.jpg"
              imageAlt="大橋 進"
            />
          </div>
        </ScrollHandler>

        <ScrollHandler rootMargin={80}>
          <div>
            <SubTitle subTitleText="トークショー②「見えざるものに耳をすます」" />
            <p style={{ margin: '1em 0', lineHeight: 1.8 }}>
              ドキュメンタリー作品『DIALOGUE WITH
              ANIMA』にサウンドトラックを書き下ろしたアーティストたちのセッション。出演：OLAibi、KOM_I、Kuniyuki
              Takahashi、DAISUKE TANABE。
            </p>
          </div>
        </ScrollHandler>

        <ScrollHandler rootMargin={80}>
          <div>
            <SubTitle subTitleText="ファシリテーター" />
          </div>
        </ScrollHandler>

        <ScrollHandler rootMargin={80}>
          <div className={styles['content-item']}>
            <ImageSquareText
              title="富川 岳（株式会社 富川屋 / to know）"
              text={
                <p>
                  1987年新潟県長岡市生まれ。ローカルプロデューサー。広告会社（spicebox
                  / 博報堂常駐）を経て2016年に岩手県遠野市に移住。Next Commons
                  Lab 立ち上げを経て独立。
                  <br />
                  <br />
                  デザインや情報発信を生業としながら、岩手の豊かな地域文化に傾倒し、民俗学の視点からその土地の物語を編み直し、“いま”を生きる人々の糧とするべくツーリズムや商品開発、デザインを手掛ける。
                </p>
              }
              imageSrc="/2021/facil-tomikawa.jpg"
              imageAlt="富川 岳"
            />
          </div>
        </ScrollHandler>

        <ScrollHandler rootMargin={80}>
          <div className={styles['content-item']}>
            <ImageSquareText
              title="塚田 有那（一般社団法人 Whole Universe）"
              text={
                <p>
                  一般社団法人Whole
                  Universe代表理事。編集者、キュレーター。世界のアートサイエンスを伝えるメディア「Bound
                  Baw」編集長。
                  <br />
                  <br />
                  2010年、サイエンスと異分野をつなぐプロジェクト「SYNAPSE」を若手研究者と共に始動。16年より、JST/RISTEX「人と情報のエコシステム（HITE）」のメディア戦略を担当。近著に『ART
                  SCIENCE is.』など。
                </p>
              }
              imageSrc="/2021/facil-tsukada.jpg"
              imageAlt="塚田 有那"
            />
          </div>
        </ScrollHandler>
      </div>
    </div>
  );
});

TalkGuest.displayName = 'TalkGuest';

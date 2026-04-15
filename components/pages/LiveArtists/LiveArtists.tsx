'use client';

import { FC, memo } from 'react';

import { ImageSquareText } from '@/components/partials/ImageText/ImageSquareText';
import { ScrollHandler } from '@/components/partials/ScrollHandler/ScrollHandler-2';
import { Title } from '@/components/partials/Title/Title';

import styles from './LiveArtists.module.scss';

export const LiveArtists: FC = memo(() => {
  return (
    <div className={styles['component-artists']}>
      <div className={styles['title']}>
        <ScrollHandler rootMargin={80}>
          <Title titleText="参加アーティスト" linkTargetId="artists" />
        </ScrollHandler>
      </div>
      <div className={styles['content']}>
        <ScrollHandler rootMargin={80}>
          <div className={styles['content-item']}>
            <ImageSquareText
              title="OLAibi"
              text={
                <p>
                  モンゴルをルーツに持ち、18歳でドイツに渡り電子音楽や現代音楽に触れる。その後、太鼓を中心としたマルチアーティストとして活動を始め、OOIOOのドラマーとして活動後、広大な森に移り住み、年月をかけ森の生物の生態と音を録り続けている。
                  <br />
                  <br />
                  様々な国、民族の言語を全てカタカナに置き換え、語感と言霊を頼りにリリックを綴り、そこにドラム、民族楽器、おもちゃのキーボードなどをサンプリングしたビートと、住まう森の音を織り重ねパフォーマンスを行っている。
                </p>
              }
              imageSrc="/2021/artist-olaibi.jpg"
              imageAlt="OLAibi"
            />
          </div>
        </ScrollHandler>

        <ScrollHandler rootMargin={80}>
          <div className={styles['content-item']}>
            <ImageSquareText
              title="KOM_I"
              text={
                <p>
                  歌手・アーティスト。1992年生まれ、神奈川育ち。ホームパーティで音楽活動の勧誘を受け歌い始める。
                  <br />
                  <br />
                  「水曜日のカンパネラ」のボーカルとして、国内だけでなく世界中のフェスに出演、ツアーを廻り、その土地や人々と呼応しながらライブパフォーマンスを創り上げている。好きな食べ物は南インド料理。趣味は世界各地に受け継がれる祭祀や儀礼を見学すること、唄や踊りを習うこと。
                  <br />
                  <br />
                  音楽活動の他にも、モデルや役者、ナレーターなど、様々なジャンルで活動している。
                </p>
              }
              imageSrc="/2021/artist-komi.jpg"
              imageAlt="KOM_I"
            />
          </div>
        </ScrollHandler>

        <ScrollHandler rootMargin={80}>
          <div className={styles['content-item']}>
            <ImageSquareText
              title="Kuniyuki Takahashi"
              text={
                <p>
                  札幌を拠点に活動するKuniyuki Takahashi。
                  <br />
                  <br />
                  彼の音楽は、国境を問わず常に独特の世界観を持ち、世界各国のプロデューサー、DJから高い評価を得ている。DJ
                  NatureやVakulaなどの海外アーティストとの共作を行い、2017年sound
                  of speedよりこれらの共作をまとめたアルバムがリリースされた。
                  <br />
                  <br />
                  国内のアーティストでは、サカナクションのリミックスなども手がける。
                </p>
              }
              imageSrc="/2021/artist-kuniyuki.jpg"
              imageAlt="Kuniyuki Takahashi"
            />
          </div>
        </ScrollHandler>

        <ScrollHandler rootMargin={80}>
          <div className={styles['content-item']}>
            <ImageSquareText
              title="DAISUKE TANABE"
              text={
                <p>
                  偶然の重なりから初ライヴはロンドンの廃墟で行われた大規模スクウォットパーティー。
                  <br />
                  <br />
                  2006年、紆余曲折を経てリリースした初のEPがBBC Radio1 Worldwide
                  Awardにノミネートされ、その後も世界最大規模の都市型フェスSónar
                  Barcelonaへの出演、イタリアでのデザインの祭典ミラノサローネへの楽曲提供等幅広く活動中。釣り好き。
                </p>
              }
              imageSrc="/2021/artist-daisuke.jpg"
              imageAlt="DAISUKE TANABE"
            />
          </div>
        </ScrollHandler>
      </div>
    </div>
  );
});

LiveArtists.displayName = 'LiveArtists';

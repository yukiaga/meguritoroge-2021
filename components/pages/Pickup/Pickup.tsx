'use client';

import { FC, memo } from 'react';

import { ImageText } from '@/components/partials/ImageText/ImageText';
import { ScrollHandler } from '@/components/partials/ScrollHandler/ScrollHandler-2';
import { Title } from '@/components/partials/Title/Title';

import styles from './Pickup.module.scss';

export const Pickup: FC = memo(() => {
  return (
    <div className={styles['component-pickup']}>
      <div className={styles['title']}>
        <ScrollHandler rootMargin={80}>
          <Title titleText="ツアーのみどころ" linkTargetId="pickup" />
        </ScrollHandler>
      </div>
      <div className={styles['content']}>
        <ScrollHandler rootMargin={80}>
          <div className={styles['content-item']}>
            <ImageText
              title={
                <p>
                  ①遠野の民俗芸能「張山しし踊り」と
                  <br />
                  音楽家たちのライブセッション
                </p>
              }
              text={
                <p>
                  太鼓の音に揺さぶられ、動物と人が一体化するような神事「しし踊り」は遠野の夏を代表する伝統芸能です。今回は柳田国男も『遠野物語』のなかで著した、菅原神社の例祭で奉納される「張山しし踊り」を鑑賞。
                  <br />
                  <br />
                  また同日・同神社において、OLAibi + KOM_I、Kuniyuki
                  Takahashi、DAISUKE
                  TANABEといったアーティストたちが、「しし踊り」に触発されたパフォーマンスを披露。太古から遠野で受け継がれてきた神事と現代の音楽家たちが交わる、特別なライブセッションとなりました。
                </p>
              }
              imageSrc="/2021/pickup-sishi.jpg"
              imageAlt="張山しし踊り"
            />
          </div>
        </ScrollHandler>

        <ScrollHandler rootMargin={80}>
          <div className={styles['content-item']}>
            <ImageText
              title={<p>②専門家ガイドによる遠野スタディツアー</p>}
              text={
                <p>
                  遠野のフィールドワークやユニークなツアーを手がける「to
                  know」のローカルガイドによるスタディツアーを開催。
                  <br />
                  <br />
                  物語が生まれた背景を、ガイドとの解説とともにより深く体感することができる、遠野を初めて訪れる参加者のためのコンテンツ。遠野に伝わる民話や風景の奥行きを、土地の案内人と歩みながら味わう時間となりました。
                </p>
              }
              imageSrc="/2021/pickup-kappa.jpg"
              imageAlt="スタディツアー"
            />
          </div>
        </ScrollHandler>

        <ScrollHandler rootMargin={80}>
          <div className={styles['content-item']}>
            <ImageText
              title={
                <p>
                  ③発酵の滋味を感じる、
                  <br />
                  どぶろく＆遠野食材イタリアンディナー
                </p>
              }
              text={
                <p>
                  古くから残る発酵技術を極め、唯一無二のどぶろくをプロデュースするオーベルジュ宿「とおの屋
                  要」提供の新酒どぶろくと、新進気鋭のシェフが遠野で営むイタリアンレストラン「おのひづめ」プロデュースによるディナー。
                  <br />
                  <br />
                  奥深い遠野の滋味を体全身で味わう、最高の体験。またバーカウンターでは、遠野の名物スナック「トマトとぶ」が出張営業。遠野が育んできた文化を食から知ることができる、幸福な一夜となりました。
                </p>
              }
              imageSrc="/2021/pickup-food.jpg"
              imageAlt="どぶろく＆遠野食材ディナー"
            />
          </div>
        </ScrollHandler>

        <ScrollHandler rootMargin={80}>
          <div className={styles['content-item']}>
            <ImageText
              title={
                <p>
                  ④遠野の死生観に迫る
                  <br />
                  ドキュメンタリー上映会＆トークショー
                </p>
              }
              text={
                <p>
                  「目に見えないものはある」といまも強く信じられる遠野において、死や魂はどんなものと考えられてきたのか。そうした遠野の死生観は現代とどう接続しうるのかをテーマとした新作ドキュメンタリー作品『DIALOGUE
                  WITH ANIMA』の上映会と関連トークショーを開催しました。
                  <br />
                  <br />
                  妖怪伝承で知られる岩手県・遠野市を舞台に、日本土着の死生観について訪ね歩いた短編ドキュメンタリー作品。サウンドトラックにはKuniyuki
                  Takahashi、DAISUKE TANABE、OLAibi
                  ら5名のアーティストが参加しています。
                </p>
              }
              imageSrc="/2021/pickup-anima.jpg"
              imageAlt="Dialogue with Anima"
            />
          </div>
        </ScrollHandler>
      </div>
    </div>
  );
});

Pickup.displayName = 'Pickup';

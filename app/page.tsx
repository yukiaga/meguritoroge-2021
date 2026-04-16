import Image from 'next/image';

import { publicUrl } from '@/utils/publicUrl';

import styles from './page.module.scss';

type Person = {
  name: string;
  role?: string;
  image: string;
  bio: string;
};

const artists: Person[] = [
  {
    name: 'OLAibi',
    role: 'LIVE SESSION',
    image: publicUrl('/2021/artist-olaibi.jpg'),
    bio: 'モンゴルをルーツに持ち、18歳でドイツに渡り電子音楽や現代音楽に触れる。その後、太鼓を中心としたマルチアーティストとして活動を始め、OOIOOのドラマーとして活動後、広大な森に移り住み、年月をかけ森の生物の生態と音を録り続けている。',
  },
  {
    name: 'KOM_I',
    role: 'LIVE SESSION',
    image: publicUrl('/2021/artist-komi.jpg'),
    bio: '歌手・アーティスト。1992年生まれ、神奈川育ち。「水曜日のカンパネラ」のボーカルとして、国内だけでなく世界中のフェスに出演、ツアーを廻り、その土地や人々と呼応しながらライブパフォーマンスを創り上げている。趣味は世界各地に受け継がれる祭祀や儀礼を見学すること、唄や踊りを習うこと。',
  },
  {
    name: 'Kuniyuki Takahashi',
    role: 'LIVE SESSION',
    image: publicUrl('/2021/artist-kuniyuki.jpg'),
    bio: '札幌を拠点に活動するKuniyuki Takahashi。彼の音楽は国境を問わず常に独特の世界観を持ち、世界各国のプロデューサー、DJから高い評価を得ている。DJ NatureやVakulaなどの海外アーティストとの共作を行い、国内ではサカナクションのリミックスなども手がける。',
  },
  {
    name: 'DAISUKE TANABE',
    role: 'LIVE SESSION',
    image: publicUrl('/2021/artist-daisuke.jpg'),
    bio: '偶然の重なりから初ライヴはロンドンの廃墟で行われた大規模スクウォットパーティー。2006年、紆余曲折を経てリリースした初のEPがBBC Radio1 Worldwide Awardにノミネートされ、その後も世界最大規模の都市型フェスSónar Barcelonaへの出演、イタリアでのデザインの祭典ミラノサローネへの楽曲提供等幅広く活動中。釣り好き。',
  },
];

const talkGuests: Person[] = [
  {
    name: '赤坂 憲雄',
    role: '民俗学者 / 学習院大学教授',
    image: publicUrl('/2021/facil-akasaka.jpg'),
    bio: '1953年、東京都生まれ。専門は民俗学・日本文化論。『岡本太郎の見た日本』（岩波書店）でドゥマゴ文学賞、芸術選奨文部科学大臣賞を受賞。『異人論序説』『排除の現象学』『東西／南北考』『武蔵野をよむ』『性食考』『ナウシカ考』など著書多数。',
  },
  {
    name: '大橋 進',
    role: '遠野郷八幡宮 神職',
    image: publicUrl('/2021/facil-ohashi.jpg'),
    bio: '1980年生まれ。岩手県遠野市出身。岩手県遠野市鎮座「遠野郷八幡宮」で神職として働く。著書に『教訓で読み解く遠野物語』『社務ねこオトラ（上下巻）』を電子出版。',
  },
];

const facilitators: Person[] = [
  {
    name: '富川 岳',
    role: '株式会社 富川屋 / to know',
    image: publicUrl('/2021/facil-tomikawa.jpg'),
    bio: '1987年新潟県長岡市生まれ。ローカルプロデューサー。広告会社（spicebox / 博報堂常駐）を経て2016年に岩手県遠野市に移住。Next Commons Lab 立ち上げを経て独立。デザインや情報発信を生業としながら、岩手の豊かな地域文化に傾倒し、民俗学の視点からその土地の物語を編み直し、「いま」を生きる人々の糧とするべくツーリズムや商品開発、デザインを手掛ける。',
  },
  {
    name: '塚田 有那',
    role: '一般社団法人 Whole Universe / プロデューサー',
    image: publicUrl('/2021/facil-tsukada.jpg'),
    bio: '一般社団法人Whole Universe代表理事。編集者、キュレーター。世界のアートサイエンスを伝えるメディア「Bound Baw」編集長。2010年、サイエンスと異分野をつなぐプロジェクト「SYNAPSE」を若手研究者と共に始動。近著に『ART SCIENCE is.』など。',
  },
];

export default function Page() {
  return (
    <div className={styles.page}>
      {/* HERO */}
      <section className={styles.hero}>
        <nav className={styles['hero-nav']}>
          <a href="#about">ABOUT</a>
          <a href="#pickup">EVENT</a>
          <a href="#artists">ARTISTS</a>
          <a href="#talk">TALK</a>
          <a href="#access">ACCESS</a>
        </nav>

        <p className={styles['hero-sub']}>トオノ メグリトロゲ</p>
        <h1 className={styles['hero-title']}>
          遠野
          <br />
          巡灯篭木
        </h1>
        <p className={styles['hero-tagline']}>
          民俗・芸能・食・音楽 &ndash; 異界をめぐる3日間
        </p>
      </section>

      {/* WHITE CONTENT */}
      <div className={styles.content} id="about">
        {/* Logo */}
        <div className={styles['logo-row']}>
          <Image
            src={publicUrl('/2021/logo.png')}
            alt="遠野巡灯篭木"
            width={194}
            height={106}
          />
        </div>

        {/* Event dates */}
        <div className={styles.section}>
          <p className={styles['event-schedule']}>
            2021年11月19日（金）〜 11月21日（日）
            <br />
            遠野巡灯篭木ツアー
            <br />
            <br />
            11月19日（金）『DIALOGUE WITH ANIMA』上映会＆トークショー
            <br />
            11月20日（土）「張山しし踊り」と音楽家たちのライブセッション
          </p>

          <p className={styles.paragraph}>
            動物、妖怪、死者の魂まで、「異界のものたち」の気配が色濃く残る土地、遠野。それらの物語はなぜ生まれたのか、いま異界を想像することにどんな意味があるのか。この夏、遠野に広がる異界の景色をめぐるツアー型イベントを開催します。
          </p>
          <br />
          <p className={styles.paragraph}>
            遠野の民俗文化をめぐるスタディツアー、山と人をつなぐ神事である遠野の郷土芸能「しし踊り」と音楽家たちによるライブセッション、遠野の死生観にまつわるドキュメンタリー映像上映、そして滋味にあふれる発酵と食など、新旧のカルチャーを織り交ぜた体験をお届けする３日間。
          </p>
          <br />
          <p className={styles.paragraph}>
            全国各地から&ldquo;マレビト（異なる文化圏の人々）&rdquo;として集結した参加者とともに、遠野に新たな民話を紡いでいきます。
          </p>
        </div>

        {/* Shrine banner */}
        <div className={styles.banner}>
          <img src={publicUrl('/2021/hero-live-1.jpg')} alt="菅原神社の例祭" />
        </div>

        {/* Director's Message */}
        <div className={styles.section}>
          <h2 className={styles['section-title']}>ディレクター・メッセージ</h2>

          <p className={`${styles.paragraph} ${styles.italic}`}>
            ――願わくは、これを語りて平地人を戦慄せしめよ。
            （柳田国男『遠野物語』より）
          </p>
          <br />
          <p className={styles.paragraph}>
            柳田国男の『遠野物語』で知られる岩手県遠野市。河童や座敷童子といった妖怪伝承が記録されたこの地域には、いまもその気配が色濃く残っています。妖怪、山の神、田の神、そして死者の魂など、数々の「異界のものたち」にまつわるエピソードは、単なる昔話や伝説にその記憶を押し込めず、厳しい自然環境のなかで人々が感じ取ったリアリティをそのまま映し出しています。
          </p>
          <br />
          <p className={styles.paragraph}>
            そんな遠野にいまも残る風習のひとつに「ムカイトロゲ（迎え灯篭木）」があります。先祖の魂が家に戻ってくるための目印として立てられる旗と灯籠のことで、『遠野物語』の序文にも「旗を高く掲げて魂を招く風あり」と書かれています。
          </p>
          <br />
          <p className={styles.paragraph}>
            「遠野巡灯篭木（トオノ
            メグリトロゲ）」は、そうした目に見えぬ魂への想像をめぐらせるツアー型イベントです。数百年の歴史を持つ伝統芸能と現代カルチャーを織り交ぜ、音楽、芸能、食、語り部たちの声を媒介として、全国各地からマレビトを集め、それぞれが異界の風景を探索し、新たな物語や交流を生み出すことを目指します。
          </p>
          <br />
          <p className={styles.paragraph}>
            太鼓の音が響き、体は自然に踊りだす。同じ土を踏みしめ、酒と食を味わい、見えざるものたちの声を聞く。ことばよりも雄弁な「踊るからだ」は、老若男女、普段は異なる生活圏を生きる人々をも交わらせ、分断した境界を融解させることでしょう。人も、動物も、森も、すべてのいのちが等しくなる時空間へ――遠野の次なる伝説が、いま産声を上げます。
          </p>
          <br />
          <p
            className={styles.paragraph}
            style={{ textAlign: 'right', marginTop: 24 }}
          >
            本企画プロデューサー・塚田有那（Whole Universe）
          </p>
        </div>

        {/* PICKUP */}
        <div id="pickup" className={styles.section}>
          <h2 className={styles['section-title']}>ツアーのみどころ</h2>

          <div className={styles['pickup-item']}>
            <h3 className={styles['sub-title']}>
              ①遠野の民俗芸能「張山しし踊り」と音楽家たちのライブセッション
            </h3>
            <p className={styles.paragraph}>
              太鼓の音に揺さぶられ、動物と人が一体化するような神事「しし踊り」は遠野の夏を代表する伝統芸能です。今回は柳田国男も『遠野物語』のなかで著した、菅原神社の例祭で奉納される「張山しし踊り」を鑑賞。また同日・同神社において、OLAibi
              + KOM_I、Kuniyuki Takahashi、DAISUKE
              TANABEといったアーティストたちが、「しし踊り」に触発されたパフォーマンスを披露します。
            </p>
            <div className={styles['pickup-image']}>
              <img
                src={publicUrl('/2021/pickup-sishi.jpg')}
                alt="張山しし踊り"
              />
            </div>
          </div>

          <div className={styles['pickup-item']}>
            <h3 className={styles['sub-title']}>
              ②専門家ガイドによる遠野スタディツアー
            </h3>
            <p className={styles.paragraph}>
              遠野のフィールドワークやユニークなツアーを手がける「to
              know」のローカルガイドによるスタディツアーを開催。物語が生まれた背景を、ガイドとの解説とともにより深く体感することができる、遠野を初めて訪れる参加者のためのコンテンツ。遠野に伝わる民話や風景の奥行きを、土地の案内人と歩みながら味わう時間となりました。
            </p>
            <div className={styles['pickup-image']}>
              <img src={publicUrl('/2021/pickup-kappa.jpg')} alt="カッパ淵" />
            </div>
          </div>

          <div className={styles['pickup-item']}>
            <h3 className={styles['sub-title']}>
              ③発酵の滋味を感じる、どぶろく＆遠野食材イタリアンディナー
            </h3>
            <p className={styles.paragraph}>
              古くから残る発酵技術を極め、唯一無二のどぶろくをプロデュースするオーベルジュ宿「とおの屋
              要」提供の新酒どぶろくと、新進気鋭のシェフが遠野で営むイタリアンレストラン「おのひづめ」プロデュースによるディナー。奥深い遠野の滋味を体全身で味わう、最高の体験。またバーカウンターでは、遠野の名物スナック「トマトとぶ」が出張営業。遠野が育んできた文化を食からも体感する、特別な一夜をお届けします。
            </p>
            <div className={styles['pickup-image']}>
              <img
                src={publicUrl('/2021/pickup-food.jpg')}
                alt="どぶろくと遠野食材のディナー"
              />
            </div>
          </div>

          <div className={styles['pickup-item']}>
            <h3 className={styles['sub-title']}>
              ④遠野の死生観に迫るドキュメンタリー上映会＆トークショー
            </h3>
            <p className={styles.paragraph}>
              「目に見えないものはある」といまも強く信じられる遠野において、死や魂はどんなものと考えられてきたのか。そうした遠野の死生観は現代とどう接続しうるのかをテーマとした新作ドキュメンタリー作品『DIALOGUE
              WITH
              ANIMA』の上映会と関連トークショーを開催。妖怪伝承で知られる岩手県・遠野市を舞台に、日本土着の死生観について訪ね歩いた短編ドキュメンタリー作品。サウンドトラックにはKuniyuki
              Takahashi、DAISUKE TANABE、OLAibi
              ら5名のアーティストが参加しています。
            </p>
            <div className={styles['pickup-image']}>
              <img
                src={publicUrl('/2021/pickup-anima.jpg')}
                alt="Dialogue with Anima"
              />
            </div>
          </div>
        </div>

        {/* LIVE ARTISTS */}
        <div id="artists" className={styles.section}>
          <h2 className={styles['section-title']}>
            LIVE SESSION &ndash; 参加アーティスト
          </h2>
          <div className={styles['profile-grid']}>
            {artists.map((p) => (
              <div key={p.name} className={styles.profile}>
                <div className={styles['profile-img']}>
                  <img src={p.image} alt={p.name} />
                </div>
                <p className={styles['profile-name']}>{p.name}</p>
                {p.role && <p className={styles['profile-role']}>{p.role}</p>}
                <p className={styles['profile-bio']}>{p.bio}</p>
              </div>
            ))}
          </div>
        </div>

        {/* TALK SHOW */}
        <div id="talk" className={styles.section}>
          <h2 className={styles['section-title']}>
            トークショー①「遠野における魂のゆくえ」
          </h2>
          <p className={styles.paragraph}>
            遠野の歴史・文化に精通する専門家たちが、遠野に色濃く残る死生観を語るセッション。
          </p>
          <div className={styles['profile-grid']}>
            {talkGuests.map((p) => (
              <div key={p.name} className={styles.profile}>
                <div className={styles['profile-img']}>
                  <img src={p.image} alt={p.name} />
                </div>
                <p className={styles['profile-name']}>{p.name}</p>
                {p.role && <p className={styles['profile-role']}>{p.role}</p>}
                <p className={styles['profile-bio']}>{p.bio}</p>
              </div>
            ))}
          </div>

          <h2 className={styles['section-title']}>
            トークショー②「見えざるものに耳をすます」
          </h2>
          <p className={styles.paragraph}>
            ドキュメンタリー作品『DIALOGUE WITH
            ANIMA』にサウンドトラックを書き下ろしたアーティストたちのセッション。
            <br />
            出演：OLAibi、KOM_I、Kuniyuki Takahashi、DAISUKE TANABE
          </p>

          <h3 className={styles['sub-title']}>ファシリテーター</h3>
          <div className={styles['profile-grid']}>
            {facilitators.map((p) => (
              <div key={p.name} className={styles.profile}>
                <div className={styles['profile-img']}>
                  <img src={p.image} alt={p.name} />
                </div>
                <p className={styles['profile-name']}>{p.name}</p>
                {p.role && <p className={styles['profile-role']}>{p.role}</p>}
                <p className={styles['profile-bio']}>{p.bio}</p>
              </div>
            ))}
          </div>
        </div>

        {/* ACCESS */}
        <div id="access" className={styles.section}>
          <h2 className={styles['section-title']}>
            会場・宿泊施設へのアクセス
          </h2>

          <h3 className={styles['sub-title']}>上映会＆トークショー</h3>
          <p className={styles.paragraph} style={{ textAlign: 'center' }}>
            会場：あえりあ遠野 中ホール
            <br />
            〒028-0524 岩手県遠野市新町1-10
            <br />
            日時：2021年11月19日（金）17:00&ndash;19:00（開場16:50）
          </p>

          <h3 className={styles['sub-title']}>
            張山しし踊り降臨ライブ＆トークセッション
          </h3>
          <p className={styles.paragraph} style={{ textAlign: 'center' }}>
            会場：遠野ふるさと村
            <br />
            〒028-0661 岩手県遠野市附馬牛町上附馬牛5-89-1
            <br />
            日時：2021年11月20日（土）16:00&ndash;18:30
          </p>

          <h3 className={styles['sub-title']}>遠野への行き方</h3>
          <div
            className={styles['pickup-image']}
            style={{ aspectRatio: '1024 / 492' }}
          >
            <img
              src={publicUrl('/2021/access-map.png')}
              alt="遠野へのアクセス"
              style={{ objectFit: 'contain' }}
            />
          </div>
          <p className={styles.paragraph} style={{ textAlign: 'center' }}>
            新花巻駅からJR釜石線またはレンタカー等で約40分
          </p>
        </div>

        {/* CREDITS */}
        <div className={styles.section}>
          <h2 className={styles['section-title']}>制作スタッフ</h2>
          <p className={styles.paragraph} style={{ textAlign: 'center' }}>
            プロデューサー：塚田有那・坂本麻人（一般社団法人 Whole Universe）
            <br />
            遠野ディレクター：富川岳（株式会社 富川屋 / to know）
            <br />
            制作：羽田寛士（TAPES PRODUCTION）、清水聡美
            <br />
            コーディネート：阿部和美、多田陽香、大谷史也
            <br />
            ディナープロデュース：おのひづめ
            <br />
            <br />
            主催：一般社団法人 Whole Universe
            <br />
            助成：文化庁「ARTS for the future!」補助対象事業
          </p>
        </div>

        <p className={styles['archive-notice']}>
          このサイトは2021年当時のウェブサイトを、アーカイブから再構成したものです。
          <br />
          <a
            href="https://web.archive.org/web/2021*/meguritoroge.com/home/"
            target="_blank"
            rel="noreferrer"
            style={{ textDecoration: 'underline' }}
          >
            Wayback Machineで当時のサイトを見る
          </a>
        </p>
      </div>

      {/* FOOTER */}
      <footer className={styles.footer}>
        <p className={styles['footer-tagline']}>
          民俗・芸能・食・音楽 &ndash; 異界をめぐる3日間
        </p>
        <nav className={styles['footer-links']}>
          <a href="https://meguritoroge.com/" target="_blank" rel="noreferrer">
            PROJECT
          </a>
          <a
            href="https://2024.meguritoroge.com/"
            target="_blank"
            rel="noreferrer"
          >
            2024
          </a>
          <a
            href="https://2023.meguritoroge.com/"
            target="_blank"
            rel="noreferrer"
          >
            2023
          </a>
          <a
            href="https://2022.meguritoroge.com/"
            target="_blank"
            rel="noreferrer"
          >
            2022
          </a>
        </nav>
        <p className={styles['footer-copy']}>&copy; 2021 MEGURITOROGE</p>
      </footer>
    </div>
  );
}

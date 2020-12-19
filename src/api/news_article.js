// 商品リストの配列
const database = [
  {
    id: 201808100,
    name: 'mureQ',
    date: '2018.08.10',
    img: '',
    content:
    `
      <img src = '' oncontextmenu='return false;' onselectstart='return false;' onmousedown='return false;' />
      <p>
        所属研究室で行われたハッカソンでの製作物です。
        アイデア出しと、フロントエンド、デザイナーとして初期段階の製作に関わりました。
        このシステムはReact.jsを用いて実装しました。
      </p>
    `,
    moreInfo: 'https://mureq.com/',
    tag: 'work'
  },
  {
    id: 202003170,
    name: 'メッセージ画面のスクリーンショットを用いた横断型返信忘れ防止手法の検討',
    date: '2020.03.17',
    img: 'http://naoto.nkmr.io/images/matsuken.JPG',
    content:
      `
        <img src = 'http://naoto.nkmr.io/images/gn110_illust_research.png' oncontextmenu='return false;' onselectstart='return false;' onmousedown='return false;' />
        <p>
          コミュニケーションツールにおいて返信しなければいけないメッセージに対して、画像として探せるサムネイル生成手法の検討を行った研究です。
        </p>
        <p>
          カジュアルな会話とフォーマルな会話を想定した架空のメッセージ画像を記憶したのち、サムネイル画像を提示し想起する実験を行いました。
          その結果、フォーマルな場面において、アイコン画像とメッセージテキストの一部を切り取ったものが有用である可能性が示唆されました。
        </p>
      `,
    moreInfo: 'https://dl.nkmr-lab.org/papers/238',
    tag: 'research'
  },
  {
    id: 202003170,
    name: '第110回GN研究会にてリモート発表を行いました！',
    date: '2020.03.17',
    img: 'http://naoto.nkmr.io/images/matsuken.JPG',
    content:
      `
        <p>
          2020年3月16日〜17日にオンラインにて開催された第110回GN研究会に参加しました。
        </p>
      `,
    moreInfo: '',
    tag: 'info'
  },
  {
    id: 202002260,
    name: '城崎温泉へ行きました。',
    date: '2020.02.26',
    img: 'http://naoto.nkmr.io/images/matsuken.JPG',
    content:
      `
        <img src = 'http://naoto.nkmr.io/images/kinosaki.jpg' oncontextmenu='return false;' onselectstart='return false;' onmousedown='return false;' />
        <p>
          2020年2月に、城崎温泉へ旅行に行きました。
        </p>
      `,
    moreInfo: '',
    tag: 'diary'
  },
  {
    id: 201910270,
    name: '第2回コミック工学研究会に参加しました！',
    date: '2019.10.27',
    img: 'http://naoto.nkmr.io/images/matsuken.JPG',
    content:
      `
        <p>
          2019年10月25日〜26日に開催された第2回コミック工学研究会に参加しました。
          参加報告記事も書かせていただいたので、そちらも合わせてご覧ください。
        </p>
      `,
    moreInfo: 'http://nkmr-lab.org/news/cc2_comic_report.html',
    tag: 'info'
  },
  {
    id: 201908011,
    name: '松山直人オフィシャルサイト',
    date: '2019.08.01',
    img: '',
    content:
    `
      <img src = 'http://naoto.nkmr.io/images/matsuken_homepage.png' oncontextmenu='return false;' onselectstart='return false;' onmousedown='return false;' />
      <p>
        このサイトを作りました。実装はVue.jsを用いて行いました。
      </p>
    `,
    moreInfo: '',
    tag: 'work'
  },
  {
    id: 201908010,
    name: 'ホームページをリニューアルしました！',
    date: '2019.08.01',
    img: 'http://naoto.nkmr.io/images/matsuken.JPG',
    content:
      `
        <p>
          この度ホームページのリニューアルを行いました。
          これからもどうぞよろしくお願いします。
        </p>
      `,
    moreInfo: '',
    tag: 'info'
  },
  {
    id: 201907180,
    name: '大学院に合格しました！',
    date: '2019.07.18',
    img: '',
    content:
      `
        <p>
          2020年度より明治大学先端数理科学研究科先端メディアサイエンス専攻に進学します。
        </p>
      `,
    moreInfo: '',
    tag: 'info'
  },
  // {
  //   id: 201902270,
  //   name: '2019.02.25-27 大阪旅行',
  //   date: '2019.02.27',
  //   img: '',
  //   content:
  //     `
  //       <p>
  //         2020年度より明治大学先端数理科学研究科先端メディアサイエンス専攻に進学します。
  //       </p>
  //     `,
  //   moreInfo: '',
  //   tag: 'diary'
  // },
  {
    id: 201812050,
    name: 'ユーザの視線情報分析に基づく現実空間のBADUI検出に関する検討',
    date: '2018.12.05',
    img: '',
    content:
    `
      <p>
        視線情報から現実空間におけるBADUIを検出可能かどうかを検証した研究です。
      </p>
      <img src = 'http://naoto.nkmr.io/images/illust_research_BADUI.png' oncontextmenu='return false;' onselectstart='return false;' onmousedown='return false;' />
      <p>
        BADUIを操作した際の視線情報を取得・分析を行った結果、
        BADUIの操作に迷ったユーザと迷わなかったユーザでは視線の動きや視線交差回数に差が生じ、
        このことより視線情報からBADUIの操作に迷っているユーザを検出できる可能性が示唆されました。
      </p>
      <img src = 'http://naoto.nkmr.io/images/sighci180_presentation.JPG' oncontextmenu='return false;' onselectstart='return false;' onmousedown='return false;' />
      <p>
        なお、この研究について2018年12月4日〜5日に開催された情報処理学会第180回HCI研究会にて登壇発表を行い、
        学生奨励賞を受賞しました。
      </p>
    `,
    moreInfo: 'http://nkmr-lab.org/news/hci180_badui_eye_matsuyama.html',
    tag: 'research'
  },
  {
    id: 201701160,
    name: 'みのるくんのひみつのおえかき',
    date: '2017.01.16',
    img: '',
    content:
    `
      <img src = 'http://naoto.nkmr.io/images/Minorukun2.png' oncontextmenu='return false;' onselectstart='return false;' onmousedown='return false;' />
      <p>
        大学1年生のプログラミング演習のグループワークでの製作物です。
        お題が表示され、そのお題に沿って絵を描くクイズ形式のペイントツールです。このシステムはProcessingで実装しました。
        なお、このシステムについて、2017年1月16日に学科内で開催されたプログラミング演習にて発表しました。
      </p>
    `,
    moreInfo: '',
    tag: 'work'
  },
  {
    id: 201801100,
    name: 'なんでもインスタ映え',
    date: '2018.01.10',
    img: '',
    content:
    `
      <img src = 'http://naoto.nkmr.io/images/insta_bae.png' oncontextmenu='return false;' onselectstart='return false;' onmousedown='return false;' />
      <p>
        大学2年生のCMP演習のグループワークでの製作物です。
        画像にフィルターをかけたり、絵を描いたりできる画像加工ツールです。このシステムはJavaScriptで実装しました。
        なお、このシステムについて、2018年1月10日に学科内で開催されたCMP演習にて発表しました。
      </p>
    `,
    moreInfo: '',
    tag: 'work'
  },
  {
    id: 201605300,
    name: 'HSPカラオケ',
    date: '2016.05.30',
    img: '',
    content:
    `
      <img src = 'http://naoto.nkmr.io/images/HSPkaraoke.png' oncontextmenu='return false;' onselectstart='return false;' onmousedown='return false;' />
      <p>
        FMSに入学して最初に作ったプログラムです。
        2016年5月30日に学科内で開催されたEP演習にて発表しました。
      </p>
    `,
    moreInfo: '',
    tag: 'work'
  }
]
// インポート先で使用できる関数をオブジェクトとしてまとめたもの
export default {
  fetch(id) {
    return database
  },
  find(id) {
    return database.find(el => el.id === id)
  },
  asyncFind(id, callback) {
    setTimeout(() => {
      callback(database.find(el => el.id === id))
    }, 1000)
  }
}

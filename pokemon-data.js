// 30匹の人気ポケモンデータベース
const pokemonDatabase = {
  // 初代スターター
  bulbasaur: {
    name: "フシギダネ",
    maxHP: 100,
    type: "くさ",
    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png",
    moves: [
      { name: "つるのムチ", power: 35, type: "くさ", accuracy: 100, pp: 10 },
      { name: "どくのこな", power: 0, type: "どく", accuracy: 75, pp: 35 },
      { name: "はっぱカッター", power: 55, type: "くさ", accuracy: 95, pp: 25 },
      { name: "ソーラービーム", power: 120, type: "くさ", accuracy: 100, pp: 10 }
    ],
    stats: { attack: 49, defense: 49, speed: 45, special: 65 }
  },
  charmander: {
    name: "ヒトカゲ",
    maxHP: 100,
    type: "ほのお",
    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png",
    moves: [
      { name: "ひのこ", power: 40, type: "ほのお", accuracy: 100, pp: 25 },
      { name: "かみつく", power: 60, type: "あく", accuracy: 100, pp: 25 },
      { name: "かえんほうしゃ", power: 95, type: "ほのお", accuracy: 100, pp: 15 },
      { name: "フレアドライブ", power: 120, type: "ほのお", accuracy: 100, pp: 15 }
    ],
    stats: { attack: 52, defense: 43, speed: 65, special: 60 }
  },
  squirtle: {
    name: "ゼニガメ",
    maxHP: 100,
    type: "みず",
    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/7.png",
    moves: [
      { name: "みずでっぽう", power: 40, type: "みず", accuracy: 100, pp: 25 },
      { name: "からにこもる", power: 0, type: "みず", accuracy: 100, pp: 40 },
      { name: "なみのり", power: 90, type: "みず", accuracy: 100, pp: 15 },
      { name: "ハイドロポンプ", power: 110, type: "みず", accuracy: 80, pp: 5 }
    ],
    stats: { attack: 48, defense: 65, speed: 43, special: 50 }
  },

  // 進化形
  venusaur: {
    name: "フシギバナ",
    maxHP: 160,
    type: "くさ",
    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/3.png",
    moves: [
      { name: "はなふぶき", power: 90, type: "くさ", accuracy: 100, pp: 15 },
      { name: "どくのこな", power: 0, type: "どく", accuracy: 75, pp: 35 },
      { name: "ソーラービーム", power: 120, type: "くさ", accuracy: 100, pp: 10 },
      { name: "あなほり", power: 80, type: "じめん", accuracy: 100, pp: 10 }
    ],
    stats: { attack: 82, defense: 83, speed: 80, special: 100 }
  },
  charizard: {
    name: "リザードン",
    maxHP: 160,
    type: "ほのお",
    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/6.png",
    moves: [
      { name: "かえんほうしゃ", power: 95, type: "ほのお", accuracy: 100, pp: 15 },
      { name: "ドラゴンクロー", power: 80, type: "ドラゴン", accuracy: 100, pp: 15 },
      { name: "フレアドライブ", power: 120, type: "ほのお", accuracy: 100, pp: 15 },
      { name: "そらをとぶ", power: 90, type: "ひこう", accuracy: 95, pp: 15 }
    ],
    stats: { attack: 84, defense: 78, speed: 100, special: 109 }
  },
  blastoise: {
    name: "カメックス",
    maxHP: 160,
    type: "みず",
    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/9.png",
    moves: [
      { name: "なみのり", power: 90, type: "みず", accuracy: 100, pp: 15 },
      { name: "ハイドロポンプ", power: 110, type: "みず", accuracy: 80, pp: 5 },
      { name: "からにこもる", power: 0, type: "みず", accuracy: 100, pp: 40 },
      { name: "ハイドロカノン", power: 150, type: "みず", accuracy: 90, pp: 5 }
    ],
    stats: { attack: 83, defense: 100, speed: 78, special: 85 }
  },

  // ピカチュウ系
  pikachu: {
    name: "ピカチュウ",
    maxHP: 100,
    type: "でんき",
    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png",
    moves: [
      { name: "でんきショック", power: 40, type: "でんき", accuracy: 100, pp: 30 },
      { name: "でんこうせっか", power: 40, type: "ノーマル", accuracy: 100, pp: 30 },
      { name: "10まんボルト", power: 90, type: "でんき", accuracy: 100, pp: 15 },
      { name: "かみなり", power: 110, type: "でんき", accuracy: 70, pp: 10 }
    ],
    stats: { attack: 55, defense: 40, speed: 90, special: 50 }
  },
  raichu: {
    name: "ライチュウ",
    maxHP: 120,
    type: "でんき",
    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/26.png",
    moves: [
      { name: "10まんボルト", power: 90, type: "でんき", accuracy: 100, pp: 15 },
      { name: "かみなり", power: 110, type: "でんき", accuracy: 70, pp: 10 },
      { name: "でんこうせっか", power: 40, type: "ノーマル", accuracy: 100, pp: 30 },
      { name: "ボルテッカー", power: 120, type: "でんき", accuracy: 100, pp: 15 }
    ],
    stats: { attack: 90, defense: 55, speed: 110, special: 90 }
  },

  // イーブイ系
  eevee: {
    name: "イーブイ",
    maxHP: 100,
    type: "ノーマル",
    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/133.png",
    moves: [
      { name: "でんこうせっか", power: 40, type: "ノーマル", accuracy: 100, pp: 30 },
      { name: "しっぽをふる", power: 0, type: "ノーマル", accuracy: 100, pp: 30 },
      { name: "とっしん", power: 90, type: "ノーマル", accuracy: 85, pp: 20 },
      { name: "はねる", power: 0, type: "ノーマル", accuracy: 100, pp: 40 }
    ],
    stats: { attack: 55, defense: 50, speed: 55, special: 45 }
  },
  vaporeon: {
    name: "シャワーズ",
    maxHP: 160,
    type: "みず",
    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/134.png",
    moves: [
      { name: "みずでっぽう", power: 40, type: "みず", accuracy: 100, pp: 25 },
      { name: "なみのり", power: 90, type: "みず", accuracy: 100, pp: 15 },
      { name: "ハイドロポンプ", power: 110, type: "みず", accuracy: 80, pp: 5 },
      { name: "オーロラビーム", power: 65, type: "こおり", accuracy: 100, pp: 20 }
    ],
    stats: { attack: 65, defense: 60, speed: 65, special: 110 }
  },
  jolteon: {
    name: "サンダース",
    maxHP: 160,
    type: "でんき",
    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/135.png",
    moves: [
      { name: "でんきショック", power: 40, type: "でんき", accuracy: 100, pp: 30 },
      { name: "10まんボルト", power: 90, type: "でんき", accuracy: 100, pp: 15 },
      { name: "かみなり", power: 110, type: "でんき", accuracy: 70, pp: 10 },
      { name: "でんじは", power: 0, type: "でんき", accuracy: 100, pp: 20 }
    ],
    stats: { attack: 65, defense: 60, speed: 130, special: 110 }
  },
  flareon: {
    name: "ブースター",
    maxHP: 160,
    type: "ほのお",
    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/136.png",
    moves: [
      { name: "ひのこ", power: 40, type: "ほのお", accuracy: 100, pp: 25 },
      { name: "かえんほうしゃ", power: 95, type: "ほのお", accuracy: 100, pp: 15 },
      { name: "フレアドライブ", power: 120, type: "ほのお", accuracy: 100, pp: 15 },
      { name: "かみつく", power: 60, type: "あく", accuracy: 100, pp: 25 }
    ],
    stats: { attack: 130, defense: 60, speed: 65, special: 110 }
  },

  // 人気ポケモン
  mewtwo: {
    name: "ミュウツー",
    maxHP: 200,
    type: "エスパー",
    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/150.png",
    moves: [
      { name: "サイコキネシス", power: 90, type: "エスパー", accuracy: 100, pp: 10 },
      { name: "ブチギレる", power: 0, type: "ノーマル", accuracy: 100, pp: 15 },
      { name: "シャドーボール", power: 80, type: "ゴースト", accuracy: 100, pp: 15 },
      { name: "殴る", power: 70, type: "かくとう", accuracy: 100, pp: 25 }
    ],
    stats: { attack: 110, defense: 90, speed: 130, special: 154 }
  },
  mew: {
    name: "ミュウ",
    maxHP: 180,
    type: "エスパー",
    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/151.png",
    moves: [
      { name: "サイコキネシス", power: 90, type: "エスパー", accuracy: 100, pp: 10 },
      { name: "みがわり", power: 0, type: "ノーマル", accuracy: 100, pp: 10 },
      { name: "へんしん", power: 0, type: "ノーマル", accuracy: 100, pp: 10 },
      { name: "メテオ", power: 100, type: "いわ", accuracy: 100, pp: 5 }
    ],
    stats: { attack: 100, defense: 100, speed: 100, special: 100 }
  },

  // その他人気ポケモン
  dragonite: {
    name: "カイリュー",
    maxHP: 180,
    type: "ドラゴン",
    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/149.png",
    moves: [
      { name: "ドラゴンクロー", power: 80, type: "ドラゴン", accuracy: 100, pp: 15 },
      { name: "りゅうのいぶき", power: 60, type: "ドラゴン", accuracy: 100, pp: 20 },
      { name: "そらをとぶ", power: 90, type: "ひこう", accuracy: 95, pp: 15 },
      { name: "げきりん", power: 120, type: "ドラゴン", accuracy: 100, pp: 10 }
    ],
    stats: { attack: 134, defense: 95, speed: 80, special: 100 }
  },
  snorlax: {
    name: "カビゴン",
    maxHP: 200,
    type: "ノーマル",
    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/143.png",
    moves: [
      { name: "たいあたり", power: 40, type: "ノーマル", accuracy: 100, pp: 35 },
      { name: "ねむる", power: 0, type: "ノーマル", accuracy: 100, pp: 10 },
      { name: "すてみタックル", power: 120, type: "ノーマル", accuracy: 100, pp: 15 },
      { name: "はかいこうせん", power: 150, type: "ノーマル", accuracy: 90, pp: 5 }
    ],
    stats: { attack: 110, defense: 110, speed: 30, special: 65 }
  },
  gyarados: {
    name: "ギャラドス",
    maxHP: 180,
    type: "みず",
    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/130.png",
    moves: [
      { name: "なみのり", power: 90, type: "みず", accuracy: 100, pp: 15 },
      { name: "ハイドロポンプ", power: 110, type: "みず", accuracy: 80, pp: 5 },
      { name: "りゅうのいぶき", power: 60, type: "ドラゴン", accuracy: 100, pp: 20 },
      { name: "ハイパービーム", power: 150, type: "ノーマル", accuracy: 90, pp: 5 }
    ],
    stats: { attack: 125, defense: 79, speed: 81, special: 100 }
  },
  alakazam: {
    name: "フーディン",
    maxHP: 140,
    type: "エスパー",
    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/65.png",
    moves: [
      { name: "サイコキネシス", power: 90, type: "エスパー", accuracy: 100, pp: 10 },
      { name: "サイコビーム", power: 65, type: "エスパー", accuracy: 100, pp: 20 },
      { name: "ねんりき", power: 50, type: "エスパー", accuracy: 100, pp: 25 },
      { name: "さいみんじゅつ", power: 0, type: "エスパー", accuracy: 60, pp: 20 }
    ],
    stats: { attack: 50, defense: 45, speed: 120, special: 135 }
  },
  machamp: {
    name: "カイリキー",
    maxHP: 160,
    type: "かくとう",
    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/68.png",
    moves: [
      { name: "からてチョップ", power: 50, type: "かくとう", accuracy: 100, pp: 25 },
      { name: "ローキック", power: 65, type: "かくとう", accuracy: 100, pp: 20 },
      { name: "メガトンパンチ", power: 80, type: "かくとう", accuracy: 85, pp: 20 },
      { name: "クロスチョップ", power: 100, type: "かくとう", accuracy: 80, pp: 5 }
    ],
    stats: { attack: 130, defense: 80, speed: 55, special: 65 }
  },
  gengar: {
    name: "ゲンガー",
    maxHP: 160,
    type: "ゴースト",
    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/94.png",
    moves: [
      { name: "シャドーボール", power: 80, type: "ゴースト", accuracy: 100, pp: 15 },
      { name: "あやしいひかり", power: 0, type: "ゴースト", accuracy: 100, pp: 10 },
      { name: "したでなめる", power: 30, type: "ゴースト", accuracy: 100, pp: 30 },
      { name: "どくどく", power: 0, type: "どく", accuracy: 90, pp: 10 }
    ],
    stats: { attack: 65, defense: 60, speed: 110, special: 130 }
  },
  lapras: {
    name: "ラプラス",
    maxHP: 180,
    type: "みず",
    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/131.png",
    moves: [
      { name: "なみのり", power: 90, type: "みず", accuracy: 100, pp: 15 },
      { name: "オーロラビーム", power: 65, type: "こおり", accuracy: 100, pp: 20 },
      { name: "れいとうビーム", power: 90, type: "こおり", accuracy: 100, pp: 10 },
      { name: "ハイドロポンプ", power: 110, type: "みず", accuracy: 80, pp: 5 }
    ],
    stats: { attack: 85, defense: 80, speed: 60, special: 95 }
  },
  aerodactyl: {
    name: "プテラ",
    maxHP: 160,
    type: "いわ",
    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/142.png",
    moves: [
      { name: "いわおとし", power: 50, type: "いわ", accuracy: 90, pp: 15 },
      { name: "つばめがえし", power: 60, type: "ひこう", accuracy: 100, pp: 20 },
      { name: "そらをとぶ", power: 90, type: "ひこう", accuracy: 95, pp: 15 },
      { name: "いわなだれ", power: 75, type: "いわ", accuracy: 90, pp: 10 }
    ],
    stats: { attack: 105, defense: 65, speed: 130, special: 60 }
  },
  articuno: {
    name: "フリーザー",
    maxHP: 180,
    type: "こおり",
    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/144.png",
    moves: [
      { name: "れいとうビーム", power: 90, type: "こおり", accuracy: 100, pp: 10 },
      { name: "ふぶき", power: 110, type: "こおり", accuracy: 70, pp: 5 },
      { name: "つばめがえし", power: 60, type: "ひこう", accuracy: 100, pp: 20 },
      { name: "そらをとぶ", power: 90, type: "ひこう", accuracy: 95, pp: 15 }
    ],
    stats: { attack: 85, defense: 100, speed: 85, special: 125 }
  },
  zapdos: {
    name: "サンダー",
    maxHP: 180,
    type: "でんき",
    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/145.png",
    moves: [
      { name: "10まんボルト", power: 90, type: "でんき", accuracy: 100, pp: 15 },
      { name: "かみなり", power: 110, type: "でんき", accuracy: 70, pp: 10 },
      { name: "つばめがえし", power: 60, type: "ひこう", accuracy: 100, pp: 20 },
      { name: "そらをとぶ", power: 90, type: "ひこう", accuracy: 95, pp: 15 }
    ],
    stats: { attack: 90, defense: 85, speed: 100, special: 125 }
  },
  moltres: {
    name: "ファイヤー",
    maxHP: 180,
    type: "ほのお",
    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/146.png",
    moves: [
      { name: "かえんほうしゃ", power: 95, type: "ほのお", accuracy: 100, pp: 15 },
      { name: "だいもんじ", power: 110, type: "ほのお", accuracy: 85, pp: 5 },
      { name: "つばめがえし", power: 60, type: "ひこう", accuracy: 100, pp: 20 },
      { name: "そらをとぶ", power: 90, type: "ひこう", accuracy: 95, pp: 15 }
    ],
    stats: { attack: 100, defense: 90, speed: 90, special: 125 }
  },

  // ラティアス・ラティオス
  latias: {
    name: "ラティアス",
    maxHP: 180,
    type: "ドラゴン",
    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/380.png",
    moves: [
      { name: "ドラゴンクロー", power: 80, type: "ドラゴン", accuracy: 100, pp: 15 },
      { name: "サイコキネシス", power: 90, type: "エスパー", accuracy: 100, pp: 10 },
      { name: "みがわり", power: 0, type: "ノーマル", accuracy: 100, pp: 10 },
      { name: "りゅうのいぶき", power: 60, type: "ドラゴン", accuracy: 100, pp: 20 }
    ],
    stats: { attack: 80, defense: 90, speed: 110, special: 110 }
  },
  latios: {
    name: "ラティオス",
    maxHP: 180,
    type: "ドラゴン",
    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/381.png",
    moves: [
      { name: "ドラゴンクロー", power: 80, type: "ドラゴン", accuracy: 100, pp: 15 },
      { name: "サイコキネシス", power: 90, type: "エスパー", accuracy: 100, pp: 10 },
      { name: "みがわり", power: 0, type: "ノーマル", accuracy: 100, pp: 10 },
      { name: "りゅうのいぶき", power: 60, type: "ドラゴン", accuracy: 100, pp: 20 }
    ],
    stats: { attack: 90, defense: 80, speed: 110, special: 110 }
  },

  // 可愛い系ポケモン
  jigglypuff: {
    name: "プリン",
    maxHP: 140,
    type: "ノーマル",
    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/39.png",
    moves: [
      { name: "うたう", power: 0, type: "ノーマル", accuracy: 55, pp: 15 },
      { name: "ウィンク", power: 0, type: "ノーマル", accuracy: 100, pp: 20 },
      { name: "たいあたり", power: 40, type: "ノーマル", accuracy: 100, pp: 35 },
      { name: "すてみタックル", power: 120, type: "ノーマル", accuracy: 100, pp: 15 }
    ],
    stats: { attack: 45, defense: 20, speed: 20, special: 25 }
  },
  clefairy: {
    name: "ピッピ",
    maxHP: 120,
    type: "ノーマル",
    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/35.png",
    moves: [
      { name: "ウィンク", power: 0, type: "ノーマル", accuracy: 100, pp: 20 },
      { name: "メテオ", power: 100, type: "いわ", accuracy: 100, pp: 5 },
      { name: "たいあたり", power: 40, type: "ノーマル", accuracy: 100, pp: 35 },
      { name: "つきのひかり", power: 0, type: "ノーマル", accuracy: 100, pp: 5 }
    ],
    stats: { attack: 45, defense: 48, speed: 35, special: 60 }
  },
  togepi: {
    name: "トゲピー",
    maxHP: 100,
    type: "ノーマル",
    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/175.png",
    moves: [
      { name: "ウィンク", power: 0, type: "ノーマル", accuracy: 100, pp: 20 },
      { name: "たいあたり", power: 40, type: "ノーマル", accuracy: 100, pp: 35 },
      { name: "つきのひかり", power: 0, type: "ノーマル", accuracy: 100, pp: 5 },
      { name: "あくび", power: 0, type: "ノーマル", accuracy: 100, pp: 10 }
    ],
    stats: { attack: 20, defense: 65, speed: 20, special: 40 }
  },
  magikarp: {
    name: "コイキング",
    maxHP: 40,
    type: "みず",
    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/129.png",
    moves: [
      { name: "はねる", power: 0, type: "ノーマル", accuracy: 100, pp: 40 },
      { name: "はねる", power: 0, type: "ノーマル", accuracy: 100, pp: 40 },
      { name: "はねる", power: 0, type: "ノーマル", accuracy: 100, pp: 40 },
      { name: "はねる", power: 0, type: "ノーマル", accuracy: 100, pp: 40 }
    ],
    stats: { attack: 10, defense: 55, speed: 80, special: 20 }
  },
  psyduck: {
    name: "コダック",
    maxHP: 100,
    type: "みず",
    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/54.png",
    moves: [
      { name: "みずでっぽう", power: 40, type: "みず", accuracy: 100, pp: 25 },
      { name: "サイコキネシス", power: 90, type: "エスパー", accuracy: 100, pp: 10 },
      { name: "たいあたり", power: 40, type: "ノーマル", accuracy: 100, pp: 35 },
      { name: "あくび", power: 0, type: "ノーマル", accuracy: 100, pp: 10 }
    ],
    stats: { attack: 52, defense: 48, speed: 55, special: 65 }
  },
  slowpoke: {
    name: "ヤドン",
    maxHP: 120,
    type: "みず",
    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/79.png",
    moves: [
      { name: "みずでっぽう", power: 40, type: "みず", accuracy: 100, pp: 25 },
      { name: "サイコキネシス", power: 90, type: "エスパー", accuracy: 100, pp: 10 },
      { name: "あくび", power: 0, type: "ノーマル", accuracy: 100, pp: 10 },
      { name: "ねむる", power: 0, type: "ノーマル", accuracy: 100, pp: 10 }
    ],
    stats: { attack: 65, defense: 65, speed: 15, special: 40 }
  },
  vulpix: {
    name: "ロコン",
    maxHP: 100,
    type: "ほのお",
    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/37.png",
    moves: [
      { name: "ひのこ", power: 40, type: "ほのお", accuracy: 100, pp: 25 },
      { name: "あやしいひかり", power: 0, type: "ゴースト", accuracy: 100, pp: 10 },
      { name: "ウィンク", power: 0, type: "ノーマル", accuracy: 100, pp: 20 },
      { name: "かえんほうしゃ", power: 95, type: "ほのお", accuracy: 100, pp: 15 }
    ],
    stats: { attack: 41, defense: 40, speed: 65, special: 65 }
  },
  growlithe: {
    name: "ガーディ",
    maxHP: 120,
    type: "ほのお",
    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/58.png",
    moves: [
      { name: "ひのこ", power: 40, type: "ほのお", accuracy: 100, pp: 25 },
      { name: "かみつく", power: 60, type: "あく", accuracy: 100, pp: 25 },
      { name: "かえんほうしゃ", power: 95, type: "ほのお", accuracy: 100, pp: 15 },
      { name: "フレアドライブ", power: 120, type: "ほのお", accuracy: 100, pp: 15 }
    ],
    stats: { attack: 70, defense: 45, speed: 60, special: 70 }
  },

  // メガニューム
  mega_charizard_x: {
    name: "メガリザードンX",
    maxHP: 180,
    type: "ほのお・ドラゴン",
    image: "https://zukan.pokemon.co.jp/zukan-api/up/images/index/3d12b5be5422a9198988501b8699cf1d.png",
    moves: [
      { name: "かえんほうしゃ", power: 115, type: "ほのお", accuracy: 100, pp: 15 },
      { name: "ドラゴンクロー", power: 100, type: "ドラゴン", accuracy: 100, pp: 15 },
      { name: "フレアドライブ", power: 140, type: "ほのお", accuracy: 100, pp: 15 },
      { name: "そらをとぶ", power: 110, type: "ひこう", accuracy: 95, pp: 15 }
    ],
    stats: { attack: 130, defense: 111, speed: 100, special: 109 }
  },

  // その他
  diglett: {
    name: "ディグダ",
    maxHP: 80,
    type: "じめん",
    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/50.png",
    moves: [
      { name: "じしん", power: 100, type: "じめん", accuracy: 100, pp: 10 },
      { name: "あなほり", power: 80, type: "じめん", accuracy: 100, pp: 10 },
      { name: "たいあたり", power: 40, type: "ノーマル", accuracy: 100, pp: 35 },
      { name: "すなかけ", power: 0, type: "じめん", accuracy: 100, pp: 15 }
    ],
    stats: { attack: 55, defense: 25, speed: 95, special: 35 }
  },
  dugtrio: {
    name: "ダグトリオ",
    maxHP: 100,
    type: "じめん",
    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/51.png",
    moves: [
      { name: "じしん", power: 100, type: "じめん", accuracy: 100, pp: 10 },
      { name: "あなほり", power: 80, type: "じめん", accuracy: 100, pp: 10 },
      { name: "すなかけ", power: 0, type: "じめん", accuracy: 100, pp: 15 },
      { name: "どろかけ", power: 20, type: "じめん", accuracy: 100, pp: 10 }
    ],
    stats: { attack: 100, defense: 50, speed: 120, special: 50 }
  },
  scyther: {
    name: "ストライク",
    maxHP: 140,
    type: "むし",
    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/123.png",
    moves: [
      { name: "つばめがえし", power: 60, type: "ひこう", accuracy: 100, pp: 20 },
      { name: "はさむ", power: 55, type: "むし", accuracy: 100, pp: 30 },
      { name: "つるのムチ", power: 35, type: "くさ", accuracy: 100, pp: 10 },
      { name: "いあいぎり", power: 50, type: "ノーマル", accuracy: 95, pp: 30 }
    ],
    stats: { attack: 110, defense: 80, speed: 105, special: 55 }
  },
  jynx: {
    name: "ルージュラ",
    maxHP: 140,
    type: "こおり",
    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/124.png",
    moves: [
      { name: "れいとうビーム", power: 90, type: "こおり", accuracy: 100, pp: 10 },
      { name: "サイコキネシス", power: 90, type: "エスパー", accuracy: 100, pp: 10 },
      { name: "あやしいひかり", power: 0, type: "ゴースト", accuracy: 100, pp: 10 },
      { name: "ウィンク", power: 0, type: "ノーマル", accuracy: 100, pp: 20 }
    ],
    stats: { attack: 50, defense: 35, speed: 95, special: 95 }
  },

  // 特別なポケモン - スペシャルファイター
  specialfighter: {
    name: "スペシャルファイター",
    maxHP: 150,
    type: "かくとう",
    image: "image (1).png",
    moves: [
      { name: "四の字固め", power: 200, type: "かくとう", accuracy: 30, pp: 5 },
      { name: "ヒップドロップ", power: 85, type: "かくとう", accuracy: 100, pp: 20 },
      { name: "メガトンパンチ", power: 80, type: "かくとう", accuracy: 85, pp: 20 },
      { name: "パソコンで殴る", power: 95, type: "はがね", accuracy: 90, pp: 15 }
    ],
    stats: { attack: 120, defense: 80, speed: 85, special: 70 }
  },

  // ポケモントレーナー
  pokemontrainer: {
    name: "ポケモントレーナー",
    maxHP: 140,
    type: "ノーマル",
    image: "ポケモントレーナー.png",
    moves: [
      { name: "でんこうせっか", power: 40, type: "ノーマル", accuracy: 100, pp: 30 },
      { name: "みずでっぽう", power: 40, type: "みず", accuracy: 100, pp: 25 },
      { name: "だいもんじ", power: 110, type: "ほのお", accuracy: 85, pp: 5 },
      { name: "ウィンク", power: 0, type: "ノーマル", accuracy: 100, pp: 20 }
    ],
    stats: { attack: 90, defense: 70, speed: 95, special: 85 }
  },

  // 人気ポケモン追加
  lucario: {
    name: "ルカリオ",
    maxHP: 160,
    type: "かくとう・エスパー",
    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/448.png",
    moves: [
      { name: "はどうだん", power: 80, type: "かくとう", accuracy: 100, pp: 20 },
      { name: "サイコキネシス", power: 90, type: "エスパー", accuracy: 100, pp: 10 },
      { name: "メタルクロー", power: 50, type: "はがね", accuracy: 95, pp: 35 },
      { name: "りゅうのはどう", power: 85, type: "ドラゴン", accuracy: 100, pp: 10 }
    ],
    stats: { attack: 110, defense: 70, speed: 90, special: 115 }
  },
  gardevoir: {
    name: "サーナイト",
    maxHP: 150,
    type: "エスパー・フェアリー",
    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/282.png",
    moves: [
      { name: "サイコキネシス", power: 90, type: "エスパー", accuracy: 100, pp: 10 },
      { name: "ムーンフォース", power: 95, type: "フェアリー", accuracy: 100, pp: 15 },
      { name: "マジカルシャイン", power: 80, type: "フェアリー", accuracy: 100, pp: 10 },
      { name: "さいみんじゅつ", power: 0, type: "エスパー", accuracy: 60, pp: 20 }
    ],
    stats: { attack: 65, defense: 65, speed: 80, special: 125 }
  },
  greninja: {
    name: "ゲッコウガ",
    maxHP: 160,
    type: "みず・あく",
    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/658.png",
    moves: [
      { name: "みずのはどう", power: 60, type: "みず", accuracy: 100, pp: 20 },
      { name: "あくのはどう", power: 80, type: "あく", accuracy: 100, pp: 15 },
      { name: "つじぎり", power: 70, type: "あく", accuracy: 100, pp: 15 },
      { name: "だいもんじ", power: 110, type: "ほのお", accuracy: 85, pp: 5 }
    ],
    stats: { attack: 95, defense: 67, speed: 122, special: 103 }
  },
  charizard: {
    name: "リザードン",
    maxHP: 160,
    type: "ほのお・ひこう",
    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/6.png",
    moves: [
      { name: "かえんほうしゃ", power: 95, type: "ほのお", accuracy: 100, pp: 15 },
      { name: "ドラゴンクロー", power: 80, type: "ドラゴン", accuracy: 100, pp: 15 },
      { name: "フレアドライブ", power: 120, type: "ほのお", accuracy: 100, pp: 15 },
      { name: "そらをとぶ", power: 90, type: "ひこう", accuracy: 95, pp: 15 }
    ],
    stats: { attack: 84, defense: 78, speed: 100, special: 109 }
  },
  venusaur: {
    name: "フシギバナ",
    maxHP: 160,
    type: "くさ・どく",
    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/3.png",
    moves: [
      { name: "はなふぶき", power: 90, type: "くさ", accuracy: 100, pp: 15 },
      { name: "どくのこな", power: 0, type: "どく", accuracy: 75, pp: 35 },
      { name: "ソーラービーム", power: 120, type: "くさ", accuracy: 100, pp: 10 },
      { name: "あなほり", power: 80, type: "じめん", accuracy: 100, pp: 10 }
    ],
    stats: { attack: 82, defense: 83, speed: 80, special: 100 }
  },
  blastoise: {
    name: "カメックス",
    maxHP: 160,
    type: "みず",
    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/9.png",
    moves: [
      { name: "なみのり", power: 90, type: "みず", accuracy: 100, pp: 15 },
      { name: "ハイドロポンプ", power: 110, type: "みず", accuracy: 80, pp: 5 },
      { name: "からにこもる", power: 0, type: "みず", accuracy: 100, pp: 40 },
      { name: "ハイドロカノン", power: 150, type: "みず", accuracy: 90, pp: 5 }
    ],
    stats: { attack: 83, defense: 100, speed: 78, special: 85 }
  },
  umbreon: {
    name: "ブラッキー",
    maxHP: 160,
    type: "あく",
    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/197.png",
    moves: [
      { name: "あくのはどう", power: 80, type: "あく", accuracy: 100, pp: 15 },
      { name: "つじぎり", power: 70, type: "あく", accuracy: 100, pp: 15 },
      { name: "かみつく", power: 60, type: "あく", accuracy: 100, pp: 25 },
      { name: "あくび", power: 0, type: "ノーマル", accuracy: 100, pp: 10 }
    ],
    stats: { attack: 65, defense: 110, speed: 65, special: 60 }
  },
  espeon: {
    name: "エーフィ",
    maxHP: 160,
    type: "エスパー",
    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/196.png",
    moves: [
      { name: "サイコキネシス", power: 90, type: "エスパー", accuracy: 100, pp: 10 },
      { name: "サイコビーム", power: 65, type: "エスパー", accuracy: 100, pp: 20 },
      { name: "ねんりき", power: 50, type: "エスパー", accuracy: 100, pp: 25 },
      { name: "さいみんじゅつ", power: 0, type: "エスパー", accuracy: 60, pp: 20 }
    ],
    stats: { attack: 65, defense: 60, speed: 110, special: 130 }
  },
  sylveon: {
    name: "ニンフィア",
    maxHP: 160,
    type: "フェアリー",
    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/700.png",
    moves: [
      { name: "ムーンフォース", power: 95, type: "フェアリー", accuracy: 100, pp: 15 },
      { name: "マジカルシャイン", power: 80, type: "フェアリー", accuracy: 100, pp: 10 },
      { name: "じゃれつく", power: 90, type: "フェアリー", accuracy: 90, pp: 10 },
      { name: "ウィンク", power: 0, type: "ノーマル", accuracy: 100, pp: 20 }
    ],
    stats: { attack: 65, defense: 65, speed: 60, special: 110 }
  },

  // 女の子に人気のポケモン追加
  miltank: {
    name: "ミルタンク",
    maxHP: 160,
    type: "ノーマル",
    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/241.png",
    moves: [
      { name: "たいあたり", power: 40, type: "ノーマル", accuracy: 100, pp: 35 },
      { name: "ミルクのみ", power: 0, type: "ノーマル", accuracy: 100, pp: 10 },
      { name: "すてみタックル", power: 120, type: "ノーマル", accuracy: 100, pp: 15 },
      { name: "ウィンク", power: 0, type: "ノーマル", accuracy: 100, pp: 20 }
    ],
    stats: { attack: 80, defense: 105, speed: 100, special: 40 }
  },
  chansey: {
    name: "ラッキー",
    maxHP: 200,
    type: "ノーマル",
    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/113.png",
    moves: [
      { name: "ウィンク", power: 0, type: "ノーマル", accuracy: 100, pp: 20 },
      { name: "いやしのすず", power: 0, type: "ノーマル", accuracy: 100, pp: 10 },
      { name: "たまなげ", power: 50, type: "ノーマル", accuracy: 90, pp: 20 },
      { name: "すてみタックル", power: 120, type: "ノーマル", accuracy: 100, pp: 15 }
    ],
    stats: { attack: 5, defense: 5, speed: 50, special: 35 }
  },
  clefable: {
    name: "ピクシー",
    maxHP: 140,
    type: "フェアリー",
    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/36.png",
    moves: [
      { name: "ウィンク", power: 0, type: "ノーマル", accuracy: 100, pp: 20 },
      { name: "メテオ", power: 100, type: "いわ", accuracy: 100, pp: 5 },
      { name: "ムーンフォース", power: 95, type: "フェアリー", accuracy: 100, pp: 15 },
      { name: "つきのひかり", power: 0, type: "ノーマル", accuracy: 100, pp: 5 }
    ],
    stats: { attack: 70, defense: 73, speed: 60, special: 85 }
  },
  wigglytuff: {
    name: "プクリン",
    maxHP: 160,
    type: "ノーマル・フェアリー",
    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/40.png",
    moves: [
      { name: "うたう", power: 0, type: "ノーマル", accuracy: 55, pp: 15 },
      { name: "ウィンク", power: 0, type: "ノーマル", accuracy: 100, pp: 20 },
      { name: "すてみタックル", power: 120, type: "ノーマル", accuracy: 100, pp: 15 },
      { name: "ムーンフォース", power: 95, type: "フェアリー", accuracy: 100, pp: 15 }
    ],
    stats: { attack: 70, defense: 45, speed: 45, special: 75 }
  },
  togetic: {
    name: "トゲチック",
    maxHP: 120,
    type: "ノーマル・ひこう",
    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/176.png",
    moves: [
      { name: "ウィンク", power: 0, type: "ノーマル", accuracy: 100, pp: 20 },
      { name: "つきのひかり", power: 0, type: "ノーマル", accuracy: 100, pp: 5 },
      { name: "そらをとぶ", power: 90, type: "ひこう", accuracy: 95, pp: 15 },
      { name: "ムーンフォース", power: 95, type: "フェアリー", accuracy: 100, pp: 15 }
    ],
    stats: { attack: 40, defense: 85, speed: 40, special: 80 }
  },
  togekiss: {
    name: "トゲキッス",
    maxHP: 160,
    type: "フェアリー・ひこう",
    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/468.png",
    moves: [
      { name: "ムーンフォース", power: 95, type: "フェアリー", accuracy: 100, pp: 15 },
      { name: "そらをとぶ", power: 90, type: "ひこう", accuracy: 95, pp: 15 },
      { name: "つきのひかり", power: 0, type: "ノーマル", accuracy: 100, pp: 5 },
      { name: "ウィンク", power: 0, type: "ノーマル", accuracy: 100, pp: 20 }
    ],
    stats: { attack: 50, defense: 95, speed: 80, special: 120 }
  },
  shaymin: {
    name: "シェイミ",
    maxHP: 160,
    type: "くさ",
    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/492.png",
    moves: [
      { name: "はなふぶき", power: 90, type: "くさ", accuracy: 100, pp: 15 },
      { name: "つきのひかり", power: 0, type: "ノーマル", accuracy: 100, pp: 5 },
      { name: "ソーラービーム", power: 120, type: "くさ", accuracy: 100, pp: 10 },
      { name: "ウィンク", power: 0, type: "ノーマル", accuracy: 100, pp: 20 }
    ],
    stats: { attack: 100, defense: 100, speed: 100, special: 100 }
  },
  minccino: {
    name: "チラーミィ",
    maxHP: 100,
    type: "ノーマル",
    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/572.png",
    moves: [
      { name: "ウィンク", power: 0, type: "ノーマル", accuracy: 100, pp: 20 },
      { name: "たいあたり", power: 40, type: "ノーマル", accuracy: 100, pp: 35 },
      { name: "すてみタックル", power: 120, type: "ノーマル", accuracy: 100, pp: 15 },
      { name: "つきのひかり", power: 0, type: "ノーマル", accuracy: 100, pp: 5 }
    ],
    stats: { attack: 50, defense: 40, speed: 75, special: 40 }
  },
  cinccino: {
    name: "チラチーノ",
    maxHP: 140,
    type: "ノーマル",
    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/573.png",
    moves: [
      { name: "ウィンク", power: 0, type: "ノーマル", accuracy: 100, pp: 20 },
      { name: "すてみタックル", power: 120, type: "ノーマル", accuracy: 100, pp: 15 },
      { name: "つきのひかり", power: 0, type: "ノーマル", accuracy: 100, pp: 5 },
      { name: "たいあたり", power: 40, type: "ノーマル", accuracy: 100, pp: 35 }
    ],
    stats: { attack: 95, defense: 60, speed: 115, special: 60 }
  },
  fennekin: {
    name: "フォッコ",
    maxHP: 100,
    type: "ほのお",
    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/653.png",
    moves: [
      { name: "ひのこ", power: 40, type: "ほのお", accuracy: 100, pp: 25 },
      { name: "ウィンク", power: 0, type: "ノーマル", accuracy: 100, pp: 20 },
      { name: "かえんほうしゃ", power: 95, type: "ほのお", accuracy: 100, pp: 15 },
      { name: "つきのひかり", power: 0, type: "ノーマル", accuracy: 100, pp: 5 }
    ],
    stats: { attack: 45, defense: 40, speed: 60, special: 62 }
  },
  braixen: {
    name: "テールナー",
    maxHP: 120,
    type: "ほのお",
    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/654.png",
    moves: [
      { name: "かえんほうしゃ", power: 95, type: "ほのお", accuracy: 100, pp: 15 },
      { name: "ウィンク", power: 0, type: "ノーマル", accuracy: 100, pp: 20 },
      { name: "サイコキネシス", power: 90, type: "エスパー", accuracy: 100, pp: 10 },
      { name: "つきのひかり", power: 0, type: "ノーマル", accuracy: 100, pp: 5 }
    ],
    stats: { attack: 59, defense: 58, speed: 73, special: 90 }
  },
  delphox: {
    name: "マフォクシー",
    maxHP: 160,
    type: "ほのお・エスパー",
    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/655.png",
    moves: [
      { name: "かえんほうしゃ", power: 95, type: "ほのお", accuracy: 100, pp: 15 },
      { name: "サイコキネシス", power: 90, type: "エスパー", accuracy: 100, pp: 10 },
      { name: "ウィンク", power: 0, type: "ノーマル", accuracy: 100, pp: 20 },
      { name: "つきのひかり", power: 0, type: "ノーマル", accuracy: 100, pp: 5 }
    ],
    stats: { attack: 69, defense: 72, speed: 104, special: 114 }
  },
  floette: {
    name: "フラエッテ",
    maxHP: 120,
    type: "フェアリー",
    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/670.png",
    moves: [
      { name: "ムーンフォース", power: 95, type: "フェアリー", accuracy: 100, pp: 15 },
      { name: "ウィンク", power: 0, type: "ノーマル", accuracy: 100, pp: 20 },
      { name: "つきのひかり", power: 0, type: "ノーマル", accuracy: 100, pp: 5 },
      { name: "はなふぶき", power: 90, type: "くさ", accuracy: 100, pp: 15 }
    ],
    stats: { attack: 45, defense: 47, speed: 52, special: 75 }
  },
  florges: {
    name: "フラージェス",
    maxHP: 160,
    type: "フェアリー",
    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/671.png",
    moves: [
      { name: "ムーンフォース", power: 95, type: "フェアリー", accuracy: 100, pp: 15 },
      { name: "ウィンク", power: 0, type: "ノーマル", accuracy: 100, pp: 20 },
      { name: "つきのひかり", power: 0, type: "ノーマル", accuracy: 100, pp: 5 },
      { name: "はなふぶき", power: 90, type: "くさ", accuracy: 100, pp: 15 }
    ],
    stats: { attack: 65, defense: 68, speed: 75, special: 112 }
  },
  primarina: {
    name: "アシレーヌ",
    maxHP: 160,
    type: "みず・フェアリー",
    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/730.png",
    moves: [
      { name: "ハイドロポンプ", power: 110, type: "みず", accuracy: 80, pp: 5 },
      { name: "ムーンフォース", power: 95, type: "フェアリー", accuracy: 100, pp: 15 },
      { name: "ウィンク", power: 0, type: "ノーマル", accuracy: 100, pp: 20 },
      { name: "つきのひかり", power: 0, type: "ノーマル", accuracy: 100, pp: 5 }
    ],
    stats: { attack: 74, defense: 74, speed: 60, special: 126 }
  },
  mimikyu: {
    name: "ミミッキュ",
    maxHP: 160,
    type: "ゴースト・フェアリー",
    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/778.png",
    moves: [
      { name: "ムーンフォース", power: 95, type: "フェアリー", accuracy: 100, pp: 15 },
      { name: "シャドーボール", power: 80, type: "ゴースト", accuracy: 100, pp: 15 },
      { name: "ウィンク", power: 0, type: "ノーマル", accuracy: 100, pp: 20 },
      { name: "つきのひかり", power: 0, type: "ノーマル", accuracy: 100, pp: 5 }
    ],
    stats: { attack: 90, defense: 80, speed: 96, special: 105 }
  },
  alcremie: {
    name: "マホイップ",
    maxHP: 160,
    type: "フェアリー",
    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/869.png",
    moves: [
      { name: "ムーンフォース", power: 95, type: "フェアリー", accuracy: 100, pp: 15 },
      { name: "ウィンク", power: 0, type: "ノーマル", accuracy: 100, pp: 20 },
      { name: "つきのひかり", power: 0, type: "ノーマル", accuracy: 100, pp: 5 },
      { name: "マジカルシャイン", power: 80, type: "フェアリー", accuracy: 100, pp: 10 }
    ],
    stats: { attack: 60, defense: 75, speed: 64, special: 110 }
  }
};

// グローバル変数として設定
window.pokemonDatabase = pokemonDatabase;

// 初期選択可能なポケモン（バトル開始時）
const starterPokemon = [
  'pikachu', 'eevee', 'charmander', 'squirtle', 'bulbasaur',
  'mewtwo', 'mew', 'dragonite', 'snorlax', 'gyarados',
  'specialfighter', 'machamp', 'jynx', 'pokemontrainer', 'angrymaster',
  // 可愛い系ポケモン
  'jigglypuff', 'clefairy', 'togepi', 'magikarp', 'psyduck', 'slowpoke', 'vulpix', 'growlithe',
  // メガニューム
  'mega_charizard_x',
  // その他人気ポケモン
  'lapras', 'aerodactyl', 'articuno', 'zapdos', 'moltres', 'alakazam', 'gengar',
  // 新しく追加した人気ポケモン
  'lucario', 'gardevoir', 'greninja', 'charizard', 'venusaur', 'blastoise', 'umbreon', 'espeon', 'sylveon',
  // 女の子に人気のポケモン
  'miltank', 'chansey', 'clefable', 'wigglytuff', 'togetic', 'togekiss', 'shaymin',
  'minccino', 'cinccino', 'fennekin', 'braixen', 'delphox', 'floette', 'florges',
  'primarina', 'mimikyu', 'alcremie'
];

window.starterPokemon = starterPokemon;
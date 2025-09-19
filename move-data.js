// 技データベース
export const moveDatabase = {
  // ノーマルタイプ
  tackle: { name: "たいあたり", power: 40, type: "ノーマル", accuracy: 100, pp: 35, description: "相手に体当たりして攻撃する" },
  scratch: { name: "ひっかく", power: 40, type: "ノーマル", accuracy: 100, pp: 35, description: "鋭い爪で相手をひっかく" },
  quickAttack: { name: "でんこうせっか", power: 40, type: "ノーマル", accuracy: 100, pp: 30, description: "素早く攻撃する" },
  takeDown: { name: "とっしん", power: 90, type: "ノーマル", accuracy: 85, pp: 20, description: "全力で突進する" },
  doubleEdge: { name: "すてみタックル", power: 120, type: "ノーマル", accuracy: 100, pp: 15, description: "自分もダメージを受ける強力な攻撃" },
  hyperBeam: { name: "はかいこうせん", power: 150, type: "ノーマル", accuracy: 90, pp: 5, description: "次のターンは動けない強力な光線" },
  slam: { name: "たたきつける", power: 80, type: "ノーマル", accuracy: 75, pp: 20, description: "尻尾や腕で相手を叩きつける" },
  strength: { name: "かいりき", power: 80, type: "ノーマル", accuracy: 100, pp: 15, description: "怪力を振りかざして攻撃する" },
  cut: { name: "いあいぎり", power: 50, type: "ノーマル", accuracy: 95, pp: 30, description: "鋭い刃で切り裂く" },
  fly: { name: "そらをとぶ", power: 90, type: "ひこう", accuracy: 95, pp: 15, description: "1ターン目で空に舞い上がり、2ターン目で攻撃" },

  // ほのおタイプ
  ember: { name: "ひのこ", power: 40, type: "ほのお", accuracy: 100, pp: 25, description: "小さな火の玉を発射する" },
  flamethrower: { name: "かえんほうしゃ", power: 95, type: "ほのお", accuracy: 100, pp: 15, description: "激しい炎を吐き出す" },
  fireBlast: { name: "だいもんじ", power: 110, type: "ほのお", accuracy: 85, pp: 5, description: "大文字の形の炎で攻撃する" },
  firePunch: { name: "ほのおのパンチ", power: 75, type: "ほのお", accuracy: 100, pp: 15, description: "炎の拳で攻撃する" },
  flameWheel: { name: "かえんぐるま", power: 60, type: "ほのお", accuracy: 100, pp: 25, description: "炎に包まれて突進する" },
  fireSpin: { name: "ほのおのうず", power: 35, type: "ほのお", accuracy: 85, pp: 15, description: "炎の渦で相手を包み込む" },
  flareBlitz: { name: "フレアドライブ", power: 120, type: "ほのお", accuracy: 100, pp: 15, description: "炎に包まれて突進する" },

  // みずタイプ
  waterGun: { name: "みずでっぽう", power: 40, type: "みず", accuracy: 100, pp: 25, description: "水を勢いよく発射する" },
  surf: { name: "なみのり", power: 90, type: "みず", accuracy: 100, pp: 15, description: "大波で相手を襲う" },
  hydroPump: { name: "ハイドロポンプ", power: 110, type: "みず", accuracy: 80, pp: 5, description: "大量の水を激しく発射する" },
  waterPulse: { name: "みずのはどう", power: 60, type: "みず", accuracy: 100, pp: 20, description: "水の波動で攻撃する" },
  aquaTail: { name: "アクアテール", power: 90, type: "みず", accuracy: 90, pp: 10, description: "尻尾を水に包んで振り回す" },
  hydroCannon: { name: "ハイドロカノン", power: 150, type: "みず", accuracy: 90, pp: 5, description: "次のターンは動けない強力な水攻撃" },
  bubble: { name: "あわ", power: 40, type: "みず", accuracy: 100, pp: 30, description: "泡を大量に発射する" },

  // でんきタイプ
  thundershock: { name: "でんきショック", power: 40, type: "でんき", accuracy: 100, pp: 30, description: "弱い電気を流す" },
  thunderbolt: { name: "10まんボルト", power: 90, type: "でんき", accuracy: 100, pp: 15, description: "強力な電気を流す" },
  thunder: { name: "かみなり", power: 110, type: "でんき", accuracy: 70, pp: 10, description: "落雷で攻撃する" },
  thunderPunch: { name: "かみなりのパンチ", power: 75, type: "でんき", accuracy: 100, pp: 15, description: "電気の拳で攻撃する" },
  voltTackle: { name: "ボルテッカー", power: 120, type: "でんき", accuracy: 100, pp: 15, description: "電気に包まれて突進する" },
  thunderWave: { name: "でんじは", power: 0, type: "でんき", accuracy: 100, pp: 20, description: "弱い電気で相手をマヒさせる" },
  spark: { name: "スパーク", power: 65, type: "でんき", accuracy: 100, pp: 20, description: "体に電気を帯びて突進する" },

  // くさタイプ
  vineWhip: { name: "つるのムチ", power: 35, type: "くさ", accuracy: 100, pp: 10, description: "つるで相手を叩く" },
  razorLeaf: { name: "はっぱカッター", power: 55, type: "くさ", accuracy: 95, pp: 25, description: "鋭い葉っぱで攻撃する" },
  solarBeam: { name: "ソーラービーム", power: 120, type: "くさ", accuracy: 100, pp: 10, description: "太陽光を集めて強力な光線を発射" },
  petalDance: { name: "はなふぶき", power: 90, type: "くさ", accuracy: 100, pp: 15, description: "花びらを舞い散らせて攻撃する" },
  leechSeed: { name: "やどりぎのタネ", power: 0, type: "くさ", accuracy: 90, pp: 10, description: "相手に種を植え付け、HPを吸い取る" },
  sleepPowder: { name: "ねむりごな", power: 0, type: "くさ", accuracy: 75, pp: 15, description: "眠りを誘う粉をまく" },
  stunSpore: { name: "しびれごな", power: 0, type: "くさ", accuracy: 75, pp: 30, description: "マヒを誘う粉をまく" },

  // こおりタイプ
  iceBeam: { name: "れいとうビーム", power: 90, type: "こおり", accuracy: 100, pp: 10, description: "氷の光線を発射する" },
  blizzard: { name: "ふぶき", power: 110, type: "こおり", accuracy: 70, pp: 5, description: "猛吹雪で攻撃する" },
  icePunch: { name: "れいとうパンチ", power: 75, type: "こおり", accuracy: 100, pp: 15, description: "氷の拳で攻撃する" },
  auroraBeam: { name: "オーロラビーム", power: 65, type: "こおり", accuracy: 100, pp: 20, description: "オーロラの光線で攻撃する" },
  powderSnow: { name: "ゆきなだれ", power: 40, type: "こおり", accuracy: 100, pp: 25, description: "雪を降らせて攻撃する" },

  // かくとうタイプ
  karateChop: { name: "からてチョップ", power: 50, type: "かくとう", accuracy: 100, pp: 25, description: "手刀で攻撃する" },
  lowKick: { name: "ローキック", power: 65, type: "かくとう", accuracy: 100, pp: 20, description: "低い位置を蹴る" },
  megaPunch: { name: "メガトンパンチ", power: 80, type: "かくとう", accuracy: 85, pp: 20, description: "強力なパンチで攻撃する" },
  megaKick: { name: "メガトンキック", power: 120, type: "かくとう", accuracy: 75, pp: 5, description: "強力なキックで攻撃する" },
  submission: { name: "じごくぐるま", power: 80, type: "かくとう", accuracy: 80, pp: 25, description: "自分もダメージを受ける投げ技" },
  highJumpKick: { name: "とびひざげり", power: 130, type: "かくとう", accuracy: 90, pp: 10, description: "高く跳んで膝蹴りを決める" },
  crossChop: { name: "クロスチョップ", power: 100, type: "かくとう", accuracy: 80, pp: 5, description: "両手を交差させて攻撃する" },

  // どくタイプ
  poisonSting: { name: "どくばり", power: 15, type: "どく", accuracy: 100, pp: 35, description: "毒針で攻撃する" },
  poisonPowder: { name: "どくのこな", power: 0, type: "どく", accuracy: 75, pp: 35, description: "毒の粉をまいて相手を毒にする" },
  acid: { name: "ようかいえき", power: 40, type: "どく", accuracy: 100, pp: 30, description: "酸性の液体で攻撃する" },
  sludge: { name: "ヘドロこうげき", power: 65, type: "どく", accuracy: 100, pp: 20, description: "汚泥を投げつけて攻撃する" },
  toxic: { name: "どくどく", power: 0, type: "どく", accuracy: 90, pp: 10, description: "猛毒を植え付ける" },

  // じめんタイプ
  earthquake: { name: "じしん", power: 100, type: "じめん", accuracy: 100, pp: 10, description: "地面を揺らして攻撃する" },
  dig: { name: "あなほり", power: 80, type: "じめん", accuracy: 100, pp: 10, description: "1ターン目で穴を掘り、2ターン目で攻撃" },
  sandAttack: { name: "すなかけ", power: 0, type: "じめん", accuracy: 100, pp: 15, description: "砂をかけて命中率を下げる" },
  mudSlap: { name: "どろかけ", power: 20, type: "じめん", accuracy: 100, pp: 10, description: "泥をかけて命中率を下げる" },
  boneClub: { name: "ホネこんぼう", power: 65, type: "じめん", accuracy: 85, pp: 20, description: "骨の棒で攻撃する" },
  fissure: { name: "じわれ", power: 0, type: "じめん", accuracy: 30, pp: 5, description: "相手を一撃で倒す" },

  // ひこうタイプ
  gust: { name: "かぜおこし", power: 40, type: "ひこう", accuracy: 100, pp: 35, description: "強風を起こして攻撃する" },
  wingAttack: { name: "つばさでうつ", power: 60, type: "ひこう", accuracy: 100, pp: 35, description: "翼で攻撃する" },
  aerialAce: { name: "つばめがえし", power: 60, type: "ひこう", accuracy: 100, pp: 20, description: "必中技の翼攻撃" },
  drillPeck: { name: "ドリルくちばし", power: 80, type: "ひこう", accuracy: 100, pp: 20, description: "回転しながら突き刺す" },
  skyAttack: { name: "ゴッドバード", power: 140, type: "ひこう", accuracy: 90, pp: 5, description: "次のターンは動けない強力な攻撃" },

  // エスパータイプ
  confusion: { name: "ねんりき", power: 50, type: "エスパー", accuracy: 100, pp: 25, description: "念力で攻撃する" },
  psychic: { name: "サイコキネシス", power: 90, type: "エスパー", accuracy: 100, pp: 10, description: "強力な念力で攻撃する" },
  psybeam: { name: "サイコビーム", power: 65, type: "エスパー", accuracy: 100, pp: 20, description: "不思議な光線で攻撃する" },
  hypnosis: { name: "さいみんじゅつ", power: 0, type: "エスパー", accuracy: 60, pp: 20, description: "催眠術で相手を眠らせる" },
  dreamEater: { name: "ゆめくい", power: 100, type: "エスパー", accuracy: 100, pp: 15, description: "眠っている相手のHPを吸い取る" },
  teleport: { name: "テレポート", power: 0, type: "エスパー", accuracy: 100, pp: 20, description: "その場から逃げる" },

  // むしたイプ
  bugBite: { name: "むしくい", power: 60, type: "むし", accuracy: 100, pp: 20, description: "虫が噛みついて攻撃する" },
  stringShot: { name: "いとをはく", power: 0, type: "むし", accuracy: 95, pp: 40, description: "糸を吐いて相手の素早さを下げる" },
  leechLife: { name: "きゅうけつ", power: 80, type: "むし", accuracy: 100, pp: 10, description: "相手のHPを吸い取る" },
  pinMissile: { name: "ミサイルばり", power: 25, type: "むし", accuracy: 95, pp: 20, description: "針を連続で発射する" },
  megahorn: { name: "メガホーン", power: 120, type: "むし", accuracy: 85, pp: 10, description: "大きな角で突き刺す" },

  // いわタイプ
  rockThrow: { name: "いわおとし", power: 50, type: "いわ", accuracy: 90, pp: 15, description: "岩を投げつけて攻撃する" },
  rockSlide: { name: "いわなだれ", power: 75, type: "いわ", accuracy: 90, pp: 10, description: "岩の雪崩で攻撃する" },
  stoneEdge: { name: "ストーンエッジ", power: 100, type: "いわ", accuracy: 80, pp: 5, description: "鋭い岩で攻撃する" },
  meteor: { name: "メテオ", power: 100, type: "いわ", accuracy: 100, pp: 5, description: "隕石を落として攻撃する" },

  // ゴーストタイプ
  lick: { name: "したでなめる", power: 30, type: "ゴースト", accuracy: 100, pp: 30, description: "舌でなめて攻撃する" },
  shadowBall: { name: "シャドーボール", power: 80, type: "ゴースト", accuracy: 100, pp: 15, description: "影の球で攻撃する" },
  confuseRay: { name: "あやしいひかり", power: 0, type: "ゴースト", accuracy: 100, pp: 10, description: "不思議な光で相手を混乱させる" },
  nightShade: { name: "ナイトヘッド", power: 0, type: "ゴースト", accuracy: 100, pp: 15, description: "相手のレベル分のダメージを与える" },

  // ドラゴンタイプ
  dragonBreath: { name: "りゅうのいぶき", power: 60, type: "ドラゴン", accuracy: 100, pp: 20, description: "竜の息で攻撃する" },
  dragonClaw: { name: "ドラゴンクロー", power: 80, type: "ドラゴン", accuracy: 100, pp: 15, description: "竜の爪で攻撃する" },
  dragonPulse: { name: "りゅうのはどう", power: 85, type: "ドラゴン", accuracy: 100, pp: 10, description: "竜の波動で攻撃する" },
  outrage: { name: "げきりん", power: 120, type: "ドラゴン", accuracy: 100, pp: 10, description: "2-3ターン連続で攻撃する" },

  // あくタイプ
  bite: { name: "かみつく", power: 60, type: "あく", accuracy: 100, pp: 25, description: "鋭い牙で噛みつく" },
  crunch: { name: "かみくだく", power: 80, type: "あく", accuracy: 100, pp: 15, description: "強く噛み砕く" },
  darkPulse: { name: "あくのはどう", power: 80, type: "あく", accuracy: 100, pp: 15, description: "悪の波動で攻撃する" },
  nightSlash: { name: "つじぎり", power: 70, type: "あく", accuracy: 100, pp: 15, description: "暗闇で切り裂く" },

  // はがねタイプ
  metalClaw: { name: "メタルクロー", power: 50, type: "はがね", accuracy: 95, pp: 35, description: "鋼の爪で攻撃する" },
  ironTail: { name: "アイアンテール", power: 100, type: "はがね", accuracy: 75, pp: 15, description: "鋼の尻尾で攻撃する" },
  steelWing: { name: "はがねのつばさ", power: 70, type: "はがね", accuracy: 90, pp: 25, description: "鋼の翼で攻撃する" },
  flashCannon: { name: "ラスターカノン", power: 80, type: "はがね", accuracy: 100, pp: 10, description: "光る大砲で攻撃する" },

  // フェアリータイプ
  fairyWind: { name: "ようせいのかぜ", power: 40, type: "フェアリー", accuracy: 100, pp: 30, description: "妖精の風で攻撃する" },
  moonblast: { name: "ムーンフォース", power: 95, type: "フェアリー", accuracy: 100, pp: 15, description: "月の力で攻撃する" },
  playRough: { name: "じゃれつく", power: 90, type: "フェアリー", accuracy: 90, pp: 10, description: "じゃれついて攻撃する" },
  dazzlingGleam: { name: "マジカルシャイン", power: 80, type: "フェアリー", accuracy: 100, pp: 10, description: "眩い光で攻撃する" }
};

// 技の効果（状態変化など）
export const moveEffects = {
  // 状態変化技
  sleep: { name: "ねむり", duration: "1-3ターン", effect: "行動できない" },
  paralysis: { name: "マヒ", duration: "永続", effect: "25%の確率で行動できない" },
  poison: { name: "どく", duration: "永続", effect: "毎ターンHP減少" },
  confusion: { name: "こんらん", duration: "1-4ターン", effect: "50%の確率で自分を攻撃" },
  burn: { name: "やけど", duration: "永続", effect: "毎ターンHP減少、物理攻撃の威力半減" },
  freeze: { name: "こおり", duration: "1-3ターン", effect: "行動できない" },

  // 能力変化技
  attackUp: { name: "攻撃アップ", stages: 1, effect: "攻撃力が1.5倍になる" },
  defenseUp: { name: "防御アップ", stages: 1, effect: "防御力が1.5倍になる" },
  speedUp: { name: "素早さアップ", stages: 1, effect: "素早さが1.5倍になる" },
  accuracyDown: { name: "命中率ダウン", stages: 1, effect: "命中率が0.67倍になる" },

  // 回復技
  recover: { name: "HP回復", amount: "最大HPの50%", effect: "HPを回復する" },
  rest: { name: "ねむる", amount: "最大HPの100%", effect: "HPを全回復するが2ターン眠る" }
};

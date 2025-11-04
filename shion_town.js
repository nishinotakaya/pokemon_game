// シオンタウンのマップデータとロジック

// シオンタウンのマップ定義（20x20）
const shionTownMap = Array(20).fill(null).map((_, row) =>
  Array(20).fill(null).map((_, col) => {
    // 外周は家や壁（進入不可）
    if (row === 0 || row === 19 || col === 0 || col === 19) {
      return { type: 'house', walkable: false };
    }

    // ポケモンセンター（左上の角、2x2のサイズ）
    if ((row >= 2 && row <= 3 && col >= 2 && col <= 3)) {
      return { type: 'pokemonCenter', walkable: false };
    }

    // 水エリア（進入不可）
    if ((row >= 5 && row <= 7 && col >= 10 && col <= 12) ||
      (row >= 12 && row <= 14 && col >= 5 && col <= 7)) {
      return { type: 'water', walkable: false };
    }

    // 中央部（4-15行目、4-15列目）は草むらと道が混在
    if (row >= 4 && row <= 15 && col >= 4 && col <= 15) {
      // ランダムに草むらを配置（75%の確率で草むら）
      return Math.random() > 0.25
        ? { type: 'grass', walkable: true }
        : { type: 'path', walkable: true };
    }

    // それ以外は道
    return { type: 'path', walkable: true };
  })
);

// シオンタウンで出現する野生ポケモンのリスト（より強めのポケモンも含む）
const shionWildPokemon = [
  'pikachu', 'eevee', 'vaporeon', 'jolteon', 'flareon',
  'squirtle', 'charmander', 'bulbasaur', 'venusaur', 'charizard',
  'raichu', 'gyarados', 'lapras', 'snorlax', 'dragonite',
  'mewtwo', 'mew', 'alakazam', 'gengar', 'machamp',
  'arcanine', 'alakazam', 'gengar', 'gyarados', 'lapras',
  'aerodactyl', 'articuno', 'zapdos', 'moltres', 'dragonite',
  'lucario', 'gardevoir', 'greninja', 'umbreon', 'espeon'
];

// ランダムな野生ポケモンを取得する関数（シオンタウン用）
function getRandomWildPokemonShion() {
  if (!window.pokemonDatabase || Object.keys(window.pokemonDatabase).length === 0) {
    console.error('ポケモンデータベースが読み込まれていません');
    return null;
  }

  // リストから利用可能なポケモンのみをフィルタリング
  const availablePokemon = shionWildPokemon.filter(key => window.pokemonDatabase[key]);

  if (availablePokemon.length === 0) {
    console.error('利用可能なポケモンがありません');
    // フォールバック: 基本的なポケモンを返す
    const fallbackPokemon = ['pikachu', 'eevee'];
    const availableFallback = fallbackPokemon.filter(key => window.pokemonDatabase[key]);
    if (availableFallback.length > 0) {
      return availableFallback[0];
    }
    return null;
  }

  // ランダムに選択
  const randomIndex = Math.floor(Math.random() * availablePokemon.length);
  return availablePokemon[randomIndex];
}

// グローバル関数を更新（ロケーションに応じて適切なポケモンを返す）
const originalGetRandomWildPokemon = window.getRandomWildPokemon || function (location) {
  if (location === 'shion') {
    return getRandomWildPokemonShion();
  }
  // デフォルトはマサラタウンのポケモンリストを使用
  const masaraPokemon = [
    'pikachu', 'eevee', 'bulbasaur', 'charmander', 'squirtle',
    'rattata', 'pidgey', 'caterpie', 'weedle', 'pidgey'
  ];
  const availablePokemon = masaraPokemon.filter(key => window.pokemonDatabase && window.pokemonDatabase[key]);
  if (availablePokemon.length === 0) {
    // フォールバック: 基本的なポケモンを返す
    const fallbackPokemon = ['pikachu', 'eevee'];
    const availableFallback = fallbackPokemon.filter(key => window.pokemonDatabase && window.pokemonDatabase[key]);
    if (availableFallback.length > 0) {
      return availableFallback[0];
    }
    return null;
  }
  return availablePokemon[Math.floor(Math.random() * availablePokemon.length)];
};

// グローバル変数として設定
window.shionTownMap = shionTownMap;
window.shionWildPokemon = shionWildPokemon;
window.getRandomWildPokemon = originalGetRandomWildPokemon;

// シオンタウン用の関数も追加
window.getRandomWildPokemonShion = getRandomWildPokemonShion;

console.log('シオンタウンのマップデータを読み込みました');

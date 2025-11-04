// マサラタウンのマップデータとロジック

// マサラタウンのマップ定義（15x15）
const masaraTownMap = Array(15).fill(null).map((_, row) =>
  Array(15).fill(null).map((_, col) => {
    // 外周は家や壁（進入不可）
    if (row === 0 || row === 14 || col === 0 || col === 14) {
      return { type: 'house', walkable: false };
    }

    // 中央部（3-11行目、3-11列目）は草むらと道が混在
    if (row >= 3 && row <= 11 && col >= 3 && col <= 11) {
      // ランダムに草むらを配置（70%の確率で草むら）
      return Math.random() > 0.3
        ? { type: 'grass', walkable: true }
        : { type: 'path', walkable: true };
    }

    // それ以外は道
    return { type: 'path', walkable: true };
  })
);

// マサラタウンで出現する野生ポケモンのリスト
const masaraWildPokemon = [
  'pikachu', 'eevee', 'bulbasaur', 'charmander', 'squirtle',
  'rattata', 'pidgey', 'caterpie', 'weedle', 'pidgey',
  'nidoran', 'zubat', 'oddish', 'psyduck', 'poliwag',
  'abra', 'machop', 'bellsprout', 'tentacool', 'geodude',
  'ponyta', 'slowpoke', 'magnemite', 'farfetchd', 'doduo',
  'seel', 'grimer', 'shellder', 'gastly', 'onix'
];

// ランダムな野生ポケモンを取得する関数
function getRandomWildPokemon(location = 'masara') {
  const pokemonList = location === 'masara' ? masaraWildPokemon : masaraWildPokemon;

  if (!window.pokemonDatabase || Object.keys(window.pokemonDatabase).length === 0) {
    console.error('ポケモンデータベースが読み込まれていません');
    return null;
  }

  // リストから利用可能なポケモンのみをフィルタリング
  const availablePokemon = pokemonList.filter(key => window.pokemonDatabase[key]);

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

// グローバル変数として設定
window.masaraTownMap = masaraTownMap;
window.masaraWildPokemon = masaraWildPokemon;
window.getRandomWildPokemon = getRandomWildPokemon;

console.log('マサラタウンのマップデータを読み込みました');

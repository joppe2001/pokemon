document.addEventListener('DOMContentLoaded', () => {
  const pokemonList = [
    'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png',
    'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png',
    'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png',
    'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/7.png',
    'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/39.png',
    'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/52.png',
    'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/133.png'
  ];

  const borderContent = document.getElementById('border-content');
  const spriteWidth = 50; // Width + margin-right
  const animationDuration = 10; // Animation duration in seconds

  function createPokemonSprite(url) {
    const div = document.createElement('div');
    div.className = 'pokemon';
    div.style.backgroundImage = `url(${url})`;
    return div;
  }

  function addPokemonSet() {
    pokemonList.forEach(url => {
      const sprite = createPokemonSprite(url);
      borderContent.appendChild(sprite);
    });
  }

  addPokemonSet(); // Initial set of Pokémon

  let currentSpriteIndex = 0;

  borderContent.addEventListener('scroll', () => {
    const scrollLeft = borderContent.scrollLeft;
    const spriteWidthWithMargin = spriteWidth + 10; // Add margin-right
    const visibleSprites = Math.floor(scrollLeft / spriteWidthWithMargin) + 1;

    while (borderContent.children.length < visibleSprites + 2) {
      const nextSpriteUrl = pokemonList[currentSpriteIndex % pokemonList.length];
      const nextSprite = createPokemonSprite(nextSpriteUrl);
      borderContent.appendChild(nextSprite);
      currentSpriteIndex++;
    }
  });
});

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

  function createPokemonSprite(url, index) {
    const div = document.createElement('div');
    div.className = 'pokemon';
    div.style.backgroundImage = `url(${url})`;
    div.style.animationDelay = `${index * 1.5}s`; // Adjust animation delay for better continuity
    return div;
  }

  function populateBorder() {
    const totalSprites = Math.ceil(window.innerWidth / 50) * 2; // Calculate required sprites for seamless loop
    for (let i = 0; i < totalSprites; i++) {
      const url = pokemonList[i % pokemonList.length];
      const sprite = createPokemonSprite(url, i);
      borderContent.appendChild(sprite);
    }
  }

  populateBorder();
});

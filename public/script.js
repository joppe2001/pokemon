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

  function checkAndRemoveOffscreenPokemon() {
    const pokemonElements = document.querySelectorAll('.pokemon');
    pokemonElements.forEach(sprite => {
      const rect = sprite.getBoundingClientRect();
      if (rect.right < 0) {
        sprite.remove();
      }
    });
  }

  function animate() {
    const pokemonElements = document.querySelectorAll('.pokemon');
    if (pokemonElements.length === 0 || pokemonElements[pokemonElements.length - 1].getBoundingClientRect().right < window.innerWidth) {
      addPokemonSet();
    }
    checkAndRemoveOffscreenPokemon();
    requestAnimationFrame(animate);
  }

  addPokemonSet(); // Initial set of Pokémon
  animate(); // Start the animation loop
});

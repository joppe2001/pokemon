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

  function duplicatePokemonSet() {
    const pokemonSprites = borderContent.children;
    Array.prototype.forEach.call(pokemonSprites, sprite => {
      const duplicate = sprite.cloneNode(true);
      borderContent.appendChild(duplicate);
    });
  }

  addPokemonSet(); // Initial set of Pokémon
  duplicatePokemonSet(); // Duplicate the set for infinite loop

  borderContent.style.animation = `scroll ${animationDuration}s linear infinite`;
});

document.styleSheets[0].insertRule(`
  @keyframes scroll {
    0% { transform: translateX(0); }
    100% { transform: translateX(-100%); }
  }
`);

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

  function animateSprites() {
    const firstSprite = borderContent.firstElementChild;
    const spriteWidth = firstSprite.offsetWidth + 10; // Include margin-right
    const totalWidth = borderContent.scrollWidth;

    borderContent.animate(
      [
        { transform: 'translateX(0)' },
        { transform: `translateX(-${spriteWidth}px)` }
      ],
      {
        duration: 1000,
        iterations: Infinity,
        easing: 'linear'
      }
    );

    setInterval(() => {
      borderContent.appendChild(borderContent.firstElementChild);
      borderContent.style.transform = `translateX(-${spriteWidth}px)`;
    }, 1000);
  }

  addPokemonSet(); // Initial set of Pokémon
  animateSprites(); // Start the animation loop
});

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

    function move() {
      const sprites = document.querySelectorAll('.pokemon');
      sprites.forEach(sprite => {
        const currentX = parseFloat(getComputedStyle(sprite).transform.split(',')[4]) || 0;
        sprite.style.transform = `translateX(${currentX - spriteWidth}px)`;
      });

      const lastSprite = borderContent.lastElementChild;
      if (lastSprite.getBoundingClientRect().right < window.innerWidth) {
        addPokemonSet();
      }

      requestAnimationFrame(move);
    }

    move();
  }

  addPokemonSet(); // Initial set of Pokémon
  animateSprites(); // Start the animation loop
});

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

  function animateSprites() {
    const totalWidth = borderContent.scrollWidth;

    borderContent.animate(
      [
        { transform: 'translateX(0)' },
        { transform: `translateX(-${totalWidth}px)` }
      ],
      {
        duration: animationDuration * 1000,
        iterations: Infinity,
        easing: 'linear'
      }
    );

    setInterval(() => {
      const firstSprite = borderContent.firstElementChild;
      borderContent.appendChild(firstSprite);
      borderContent.style.transition = 'none';
      borderContent.style.transform = `translateX(0)`;
      setTimeout(() => {
        borderContent.style.transition = 'transform 0s linear';
        borderContent.style.transform = `translateX(-${spriteWidth}px)`;
      }, 0);
    }, animationDuration * 1000 / (borderContent.children.length / 2));
  }

  addPokemonSet(); // Initial set of Pokémon
  animateSprites(); // Start the animation loop
});

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
  const spriteWidth = 40 + 10; // Width + margin-right
  const animationDuration = 10; // Animation duration in seconds

  function createPokemonSprite(url) {
    const div = document.createElement('div');
    div.className = 'pokemon';
    div.style.backgroundImage = `url(${url})`;
    div.style.width = '40px';
    div.style.height = '40px';
    div.style.marginRight = '10px';
    div.style.position = 'absolute';
    div.style.bottom = '0';
    div.style.transform = `translateX(${window.innerWidth}px)`;
    return div;
  }

  function addPokemonSet() {
    pokemonList.forEach(url => {
      const sprite = createPokemonSprite(url);
      borderContent.appendChild(sprite);
      requestAnimationFrame(() => moveSprite(sprite));
    });
  }

  function moveSprite(sprite) {
    const startTime = performance.now();
    function animate(time) {
      const elapsed = time - startTime;
      const progress = elapsed / (animationDuration * 1000);
      const currentX = window.innerWidth - (window.innerWidth + spriteWidth) * progress;
      sprite.style.transform = `translateX(${currentX}px)`;

      if (progress < 1) {
        requestAnimationFrame(animate);
      } else {
        sprite.remove();
      }
    }
    requestAnimationFrame(animate);
  }

  function animate() {
    const lastSprite = borderContent.lastChild;
    if (!lastSprite || lastSprite.getBoundingClientRect().right < window.innerWidth) {
      addPokemonSet();
    }
    requestAnimationFrame(animate);
  }

  addPokemonSet(); // Initial set of Pokémon
  animate(); // Start the animation loop
});

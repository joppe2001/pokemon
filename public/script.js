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
    const spriteCount = borderContent.children.length;

    borderContent.style.display = 'flex';
    borderContent.style.animation = `scroll ${animationDuration}s linear infinite`;

    const keyframes = `
      @keyframes scroll {
        0% { transform: translateX(0); }
        100% { transform: translateX(-${totalWidth}px); }
      }
    `;

    const styleSheet = document.createElement("style");
    styleSheet.type = "text/css";
    styleSheet.innerText = keyframes;
    document.head.appendChild(styleSheet);

    // Create a clone of the first sprite and append it to the end
    // This creates a seamless loop
    const firstSprite = borderContent.firstElementChild.cloneNode(true);
    borderContent.appendChild(firstSprite);
  }

  addPokemonSet(); // Initial set of Pokémon
  animateSprites(); // Start the animation loop
});

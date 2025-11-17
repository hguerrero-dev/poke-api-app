export const pokemonTypeColors = {
  normal: { badge: 'gray', card: '#A8A878' },
  fire: { badge: 'orange', card: '#F08030' },
  water: { badge: 'blue', card: '#6890F0' },
  electric: { badge: 'yellow', card: '#F8D030' },
  grass: { badge: 'green', card: '#78C850' },
  ice: { badge: 'cyan', card: '#98D8D8' },
  fighting: { badge: 'red', card: '#C03028' },
  poison: { badge: 'purple', card: '#A040A0' },
  ground: { badge: 'brown', card: '#E0C068' },
  flying: { badge: 'indigo', card: '#A890F0' },
  psychic: { badge: 'pink', card: '#F85888' },
  bug: { badge: 'lime', card: '#A8B820' },
  rock: { badge: 'amber', card: '#B8A038' },
  ghost: { badge: 'violet', card: '#705898' },
  dragon: { badge: 'iris', card: '#7038F8' },
  dark: { badge: 'gray', card: '#705848' },
  steel: { badge: 'gray', card: '#B8B8D0' },
  fairy: { badge: 'pink', card: '#EE99AC' }
};

export const getPokemonColor = (pokemonData) => {
  const primaryType = pokemonData?.types?.[0]?.type?.name;
  return pokemonTypeColors[primaryType] || pokemonTypeColors.normal;
};

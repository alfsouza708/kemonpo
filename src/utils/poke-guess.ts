import { Pokemon } from "@/lib/types";

export function formatPokemonJSON(data: any): Pokemon {
  return {
    id: data.id,
    name: data.name[0].toUpperCase() + data.name.slice(1),
    height: data.height / 10,
    weight: data.weight / 10,
    sprite:
      data.pokemon_v2_pokemonsprites[0].sprites["official-artwork"]
        .front_default,
    typing: data.pokemon_v2_pokemontypes.map(
      (type: any) => type.pokemon_v2_type.name
    ),
  };
}

export function getRandomIntInclusive(min: number, max: number) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

export function getRandomPokemon(data: Pokemon[]) {
  return data[getRandomIntInclusive(0, 386)];
}

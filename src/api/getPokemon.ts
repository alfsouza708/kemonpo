import { gql, useQuery } from "@apollo/client";
import { Pokemon } from "@/lib/types";

const GET_POKEMONS = gql`
  query samplePokeAPIquery {
    pokemon_v2_pokemon(limit: 386) {
      id
      name
      height
      weight
      pokemon_v2_pokemontypes {
        pokemon_v2_type {
          name
        }
      }
      pokemon_v2_pokemonsprites {
        id
        sprites(path: "other")
      }
    }
  }
`;

function formatPokemonJSON(data: any): Pokemon {
  return {
    id: data.id,
    name: data.name,
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

function getAllPokemon() {
  const { loading, error, data } = useQuery(GET_POKEMONS);
  let formattedPokemon = [];

  if (loading) return "Loading...";
  if (error) return `Error! ${error.message}`;

  formattedPokemon = data.pokemon_v2_pokemon.map((pokemon: any) =>
    formatPokemonJSON(pokemon)
  );

  return formattedPokemon;
}

export { getAllPokemon };

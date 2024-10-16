import { gql } from "@apollo/client";

const GET_POKEMON = gql`
  query getAllPokemon {
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

export { GET_POKEMON };

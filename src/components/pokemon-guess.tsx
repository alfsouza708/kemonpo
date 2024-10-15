import GuessInput from "@/components/guess-input";

import { Pokemon } from "@/lib/types";

type Props = {
  pokemonList: Pokemon[];
};

export default function PokemonGuess({ pokemonList }: Props) {
  return <GuessInput pokemonList={pokemonList} />;
}

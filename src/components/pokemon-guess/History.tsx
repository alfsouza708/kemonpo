import type { Pokemon } from "@/lib/types";
import GuessedPokemon from "@/components/pokemon-guess/GuessedPokemon";

type Props = {
  pokemonList: Pokemon[];
  chosen: Pokemon;
};

export default function History({ pokemonList, chosen }: Props) {
  return (
    <div className="flex flex-col gap-4 md:gap-6">
      {pokemonList.length > 0 &&
        pokemonList.map((poke, i) => (
          <GuessedPokemon key={i} chosen={chosen} guessed={poke} />
        ))}
    </div>
  );
}

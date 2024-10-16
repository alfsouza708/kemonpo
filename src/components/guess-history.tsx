import { Pokemon } from "@/lib/types";
import GuessPoke from "@/components/guess-poke";

type Props = {
  pokemonList: Pokemon[];
  chosen: Pokemon;
};

export default function GuessHistory({ pokemonList, chosen }: Props) {
  return (
    <>
      {pokemonList.length > 0 &&
        pokemonList.map((poke, i) => (
          <GuessPoke key={i} chosen={chosen} guessed={poke} />
        ))}
    </>
  );
}

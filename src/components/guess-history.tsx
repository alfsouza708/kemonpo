import { Pokemon } from "@/lib/types";
import GuessPoke from "@/components/guess-poke";

type Props = {
  pokemonList: Pokemon[];
  chosen: Pokemon;
};

export default function GuessHistory({ pokemonList, chosen }: Props) {
  return (
    <div className="flex flex-col gap-4 md:gap-6">
      {pokemonList.length > 0 &&
        pokemonList.map((poke, i) => (
          <GuessPoke key={i} chosen={chosen} guessed={poke} />
        ))}
    </div>
  );
}

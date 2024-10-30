import GuessedPokemon from "@/components/pokemon-guess/GuessedPokemon";
import { useGuessStore } from "@/store/use-guess-store";

export default function History() {
  const { history } = useGuessStore();

  return (
    <div className="flex flex-col gap-4 md:gap-6">
      {history.length > 0 &&
        history.map((poke, i) => <GuessedPokemon key={i} guessed={poke} />)}
    </div>
  );
}

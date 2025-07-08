import type { Pokemon, Infos, Typing } from "@/lib/types";
import GuessInfos from "@/components/pokemon-guess/GuessInfos";
import { useGuessStore } from "@/store/use-guess-store";

type Props = {
  guessed: Pokemon;
};

export default function GuessedPokemon({ guessed }: Props) {
  const { chosen } = useGuessStore();

  const infos: Infos = {
    type1: chosen.typing[0] === guessed.typing[0] ? "correct" : "incorrect",
    type2: checkSecondType(guessed.typing, chosen.typing),
    height: checkComparison(guessed.height, chosen.height),
    weight: checkComparison(guessed.weight, chosen.weight),
  };

  function checkSecondType(guessed: string[], chosen: string[]): Typing {
    const guessedType1 = guessed[0]
    const guessedType2 = guessed[1]
    const chosenType1 = chosen[0]
    const chosenType2 = chosen[1]

    // 1 Type Correct
    if (guessedType1 === chosenType1) {
      // Guessed Pokemon has 2 types
      if (guessed.length > 1) {
        // Chosen Pokemon has 2 types
        if (chosen.length > 1) {
          // Compare Guessed Pokemon Type 2 and Chosen Pokemon Type 2
          return guessedType2 === chosenType2 ? "correct" : "incorrect";
        }
        // Compare Guessed Pokemon Type 2 and Chosen Pokemon Type 1
        return guessedType2 === chosenType1 ? "correct" : "incorrect";
      }
      // Guessed Pokemon has 1 type, Chosen Pokemon has 2 types
      if (chosen.length > 1) {
        // Compare Guessed Pokemon Type 1 and Chosen Pokemon Type 2
        return guessedType1 === chosenType2 ? "correct" : "incorrect";
      }

      return guessedType1 === chosenType1 ? "correct" : "incorrect";
    }

    return "unavailable";
  }

  function checkComparison(guessed: number, chosen: number) {
    if (guessed > chosen) return "lesserThan";
    if (guessed < chosen) return "greaterThan";
    return "equal";
  }

  return (
    <div className="flex justify-start items-center gap-2 h-16 w-auto rounded-full bg-popover relative">
      <img
        src={guessed.sprite}
        alt={`${guessed.name}`}
        className="h-16 w-16 sm:h-20 sm:w-20"
      />
      <p className="text-[8px] sm:text-sm w-32 md:w-48 text-primary">
        {guessed.name}
      </p>

      <GuessInfos pokemon={guessed} infos={infos} />
    </div>
  );
}

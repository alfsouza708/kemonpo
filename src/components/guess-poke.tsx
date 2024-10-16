import { Pokemon, Infos, Typing } from "@/lib/types";
import GuessInfos from "@/components/guess-infos";

type Props = {
  guessed: Pokemon;
  chosen: Pokemon;
};

export default function GuessPoke({ chosen, guessed }: Props) {
  const infos: Infos = {
    type1: chosen.typing[0] === guessed.typing[0] ? "correct" : "incorrect",
    type2: checkSecondType(guessed.typing, chosen.typing),
    height: checkComparison(guessed.height, chosen.height),
    weight: checkComparison(guessed.weight, chosen.weight),
  };

  function checkSecondType(guessed: string[], chosen: string[]): Typing {
    if (guessed[0] === chosen[0]) {
      if (guessed.length > 1) {
        if (chosen.length > 1) {
          return chosen[1] === guessed[1] ? "correct" : "incorrect";
        }
        return guessed[1] === chosen[0] ? "correct" : "incorrect";
      }

      if (chosen.length > 1) {
        return chosen[1] === guessed[1] ? "correct" : "incorrect";
      }

      if (guessed[0] === chosen[0]) return "correct";

      return "incorrect";
    }

    return "unavailable";
  }

  function checkComparison(guessed: number, chosen: number) {
    if (guessed > chosen) return "lesserThan";
    if (guessed < chosen) return "greaterThan";
    return "equal";
  }

  return (
    <div className="flex justify-start items-center gap-2 h-16 w-auto rounded-full bg-zinc-950 relative">
      <img
        src={guessed.sprite}
        alt={`${guessed.name}`}
        className="h-20 w-20 md:h-24 md:w-24"
      />
      <p className="text-sm w-32 md:w-48">{guessed.name}</p>

      <GuessInfos pokemon={guessed} infos={infos} />
    </div>
  );
}

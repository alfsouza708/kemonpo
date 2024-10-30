import { useState } from "react";

import Input from "@/components/pokemon-guess/GuessInput";
import History from "@/components/pokemon-guess/History";
import Dialog from "@/components/pokemon-guess/GuessDialog";

import { useGuessStore } from "@/store/use-guess-store";

export default function PokemonGuess() {
  const [open, setOpen] = useState(false);

  const { available, chosen, history, updateAvailable, updateHistory } =
    useGuessStore();

  function updateCurrentAvailable(name: string) {
    const selectedPokemon = available?.find(
      (pokemon) => pokemon.name.toLowerCase() === name.toLowerCase()
    );

    if (selectedPokemon === chosen) {
      setOpen(true);
      return;
    }

    const newAvailable = available.filter(
      (pokemon) => pokemon.name.toLowerCase() !== name.toLowerCase()
    );

    updateAvailable(newAvailable);
    updateHistory([selectedPokemon!, ...history]);
  }

  return (
    <section className="py-6 px-1 md:p-5 flex flex-col justify-center items-center gap-8 w-full">
      <h1 className="text-xl md:text-2xl">Who's that Pokémon?</h1>

      <Input updateCurrentAvailable={updateCurrentAvailable} />

      <History />

      <Dialog open={open} setOpen={setOpen} />
    </section>
  );
}

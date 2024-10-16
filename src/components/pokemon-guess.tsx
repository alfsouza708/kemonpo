import { useState } from "react";

import GuessInput from "@/components/guess-input";
import GuessHistory from "@/components/guess-history";

import { Pokemon } from "@/lib/types";
import { getRandomPokemon } from "@/lib/utils";

type Props = {
  pokemonList: Pokemon[];
};

export default function PokemonGuess({ pokemonList }: Props) {
  const [chosen, setChosen] = useState<Pokemon>(getRandomPokemon(pokemonList));
  const [available, setAvailable] = useState<Pokemon[]>(pokemonList);
  const [history, setHistory] = useState<Pokemon[]>([]);

  function updateAvailable(name: string) {
    const selectedPokemon = available?.find(
      (pokemon) => pokemon.name.toLowerCase() === name.toLowerCase()
    );

    if (selectedPokemon === chosen) {
      // dialog to show winner pokemon
      alert("ALL I DO IS WIN WIN WIN");
      newGame();
      return;
    }

    const newAvailable = available.filter(
      (pokemon) => pokemon.name.toLowerCase() !== name.toLowerCase()
    );

    setAvailable(newAvailable);
    setHistory([selectedPokemon!, ...history]);
  }

  function newGame() {
    setAvailable(pokemonList);
    setHistory([]);
    setChosen(getRandomPokemon(pokemonList));
  }

  return (
    <section className="p-5 flex flex-col justify-center items-center gap-8 w-full">
      <h1 className="text-xl md:text-2xl">Who's that Pokémon?</h1>

      <GuessInput pokemonList={available} updateAvailable={updateAvailable} />

      <GuessHistory pokemonList={history} chosen={chosen} />

      <p>{chosen.name}</p>
    </section>
  );
}

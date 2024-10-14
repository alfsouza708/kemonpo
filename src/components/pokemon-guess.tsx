import { useState } from "react";
import { Input } from "@/components/ui";
import { FormEvent, Pokemon } from "@/lib/types";

type Props = {
  pokemonList: Pokemon[];
};

export default function PokemonGuess({ pokemonList }: Props) {
  const [pokemon, setPokemon] = useState("");

  function getRandomIntInclusive(min: number, max: number) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  function handleSubmit(event: FormEvent) {
    event.preventDefault();
    alert(JSON.stringify(pokemonList[getRandomIntInclusive(0, 365)]));
    setPokemon("");
  }

  return (
    <form onSubmit={handleSubmit}>
      <Input
        name="pokemon"
        placeholder="Guess the Pokémon"
        value={pokemon}
        onChange={(e) => setPokemon(e.target.value)}
        autoComplete="off"
      />
    </form>
  );
}

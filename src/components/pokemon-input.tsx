import { useState } from "react";
import { Input } from "@/components/ui";
import { FormEvent } from "@/lib/types";

export default function PokemonInput() {
  const [pokemon, setPokemon] = useState("");

  function handleSubmit(event: FormEvent) {
    event.preventDefault();
    alert(pokemon);
    setPokemon("");
  }

  return (
    <form onSubmit={handleSubmit}>
      <Input
        name="pokemon"
        placeholder="Guess the Pokémon"
        value={pokemon}
        onChange={(e) => setPokemon(e.target.value)}
      />
    </form>
  );
}

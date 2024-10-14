import { useEffect, useState } from "react";
import { Input } from "@/components/ui";
import { FormEvent, Pokemon } from "@/lib/types";

type Props = {
  pokemonList: Pokemon[];
};

export default function PokemonGuess({ pokemonList }: Props) {
  const [pokemon, setPokemon] = useState("");
  const [possibilities, setPossibilities] = useState<Pokemon[]>([]);

  const isPossibilitiesAvailable = pokemon && possibilities.length > 0;

  useEffect(() => {
    const possiblePokemon = pokemonList
      .filter((poke) => poke.name.toLowerCase().includes(pokemon))
      .slice(0, 5);
    setPossibilities(possiblePokemon);
  }, [pokemon]);

  function handleSubmit(event: FormEvent) {
    event.preventDefault();
    alert(possibilities[0].name);
    // pokemonList[getRandomIntInclusive(0, 365)]
    setPokemon("");
  }

  return (
    <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
      <Input
        name="pokemon"
        placeholder="Guess the Pokémon"
        value={pokemon}
        onChange={(e) => setPokemon(e.target.value)}
        autoComplete="off"
        className="text-center"
      />
      {isPossibilitiesAvailable && (
        <ul className="flex flex-col justify-start gap-3 absolute bg-zinc-700 p-4 mt-10 z-10 rounded-b-md">
          {possibilities.map((pokemon) => (
            <li className="flex gap-6" key={`sprite-${pokemon.name}`}>
              <img
                src={pokemon.sprite}
                alt={`sprite-${pokemon.id}`}
                className="w-12"
              />
              <p className="self-center">{pokemon.name}</p>
            </li>
          ))}
        </ul>
      )}
    </form>
  );
}

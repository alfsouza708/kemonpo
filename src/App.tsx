import { Separator } from "@/components/ui";

import Header from "@/components/header";
import PokemonGuess from "@/components/pokemon-guess";

import { GET_POKEMON } from "@/api/queries";
import { useQuery } from "@apollo/client";
import { formatPokemonJSON } from "./lib/utils";

export default function App() {
  const { loading, error, data } = useQuery(GET_POKEMON);

  if (loading)
    return <h1 className="p-8 flex justify-center items-center">Loading...</h1>;
  if (error) return <h1 className="p-8">{`Error: ${error.message}`}</h1>;

  const pokemonList = data.pokemon_v2_pokemon.map((pokemon: any) =>
    formatPokemonJSON(pokemon)
  );

  return (
    <div className="flex flex-col justify-start items-center h-screen bg-zinc">
      <Header />

      <Separator />

      <section className="p-8 flex flex-col justify-center items-center gap-8 w-full">
        <h1 className="text-xl md:text-2xl">Who's that Pokémon?</h1>

        <PokemonGuess pokemonList={pokemonList} />
      </section>
    </div>
  );
}

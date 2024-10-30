import Header from "@/components/Header";
import Settings from "@/components/Settings";
import { Separator } from "@/components/ui";

import PokemonGuess from "@/components/pokemon-guess/PokemonGuess";

import { pokemonList } from "@/lib/data";

// import { useQuery } from "@apollo/client";

// import { GET_POKEMON } from "@/api/queries";
// import { formatPokemonJSON } from "@/lib/utils";

export default function App() {
  // GraphQL API has a 100 use limit, so the data is stored on a JSON for the purpose of this project

  // const { loading, error, data } = useQuery(GET_POKEMON);

  // if (loading)
  //   return <h1 className="p-8 flex justify-center items-center">Loading...</h1>;
  // if (error) return <h1 className="p-8">{`Error: ${error.message}`}</h1>;

  // const pokemonList = data.pokemon_v2_pokemon.map((pokemon: unknown) =>
  //   formatPokemonJSON(pokemon)
  // );

  return (
    <div className="flex flex-col justify-start items-center h-screen bg-zinc">
      <div className="top-0 sticky w-full z-10 bg-background">
        <Settings />

        <Separator />
      </div>

      <Header />

      <PokemonGuess pokemonList={pokemonList} />
    </div>
  );
}

import { lazy, Suspense } from "react";
import Header from "@/components/Header";
import Settings from "@/components/Settings";

const PokemonGuess = lazy(
  () => import("@/components/pokemon-guess/PokemonGuess")
);

// import { useQuery } from "@apollo/client";

// import { GET_POKEMON } from "@/api/queries";
// import { formatPokemonJSON } from "@/utils/poke-guess";

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
      <Settings />

      <Header />

      <Suspense
        fallback={
          <h1 className="p-8 flex justify-center items-center">Loading...</h1>
        }
      >
        <PokemonGuess />
      </Suspense>
    </div>
  );
}

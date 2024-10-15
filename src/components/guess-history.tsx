import { Pokemon } from "@/lib/types";

type Props = {
  pokemonList: Pokemon[];
};

export default function GuessHistory({ pokemonList }: Props) {
  return (
    <>
      {pokemonList.length > 0 &&
        pokemonList.map((poke, i) => <div key={i}>{poke.name}</div>)}
    </>
  );
}

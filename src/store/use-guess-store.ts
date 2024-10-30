import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

import { Pokemon } from "@/lib/types";
import { pokemonList } from "@/lib/data";
import { getRandomPokemon } from "@/utils/poke-guess";

type State = {
  chosen: Pokemon;
  available: Pokemon[];
  history: Pokemon[];
};

const initialState = {
  chosen: getRandomPokemon(pokemonList),
  available: pokemonList,
  history: [],
};

export const useGuessStore = create(
  persist(
    (set) => ({
      chosen: initialState.chosen,
      available: initialState.available,
      history: initialState.history,
      updateChosen: (chosen: State["chosen"]) =>
        set(() => ({ chosen: chosen })),
      updateHistory: (history: State["history"]) =>
        set(() => ({ history: history })),
      updateAvailable: (available: State["available"]) =>
        set(() => ({ available: available })),
      newGame: () =>
        set(() => ({
          chosen: getRandomPokemon(pokemonList),
          available: pokemonList,
          history: [],
        })),
    }),
    {
      name: "pokemon-guess",
      storage: createJSONStorage(() => localStorage),
    }
  )
);

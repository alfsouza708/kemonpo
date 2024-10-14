import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import { Pokemon } from "@/lib/types";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatPokemonJSON(data: any): Pokemon {
  return {
    id: data.id,
    name: data.name,
    height: data.height / 10,
    weight: data.weight / 10,
    sprite:
      data.pokemon_v2_pokemonsprites[0].sprites["official-artwork"]
        .front_default,
    typing: data.pokemon_v2_pokemontypes.map(
      (type: any) => type.pokemon_v2_type.name
    ),
  };
}

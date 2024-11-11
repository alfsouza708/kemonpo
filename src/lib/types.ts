type Pokemon = {
  id: number;
  name: string;
  height: number;
  weight: number;
  sprite: string;
  typing: PossibleTypes[];
};

type PokemonData = {
  id: number;
  name: string;
  height: number;
  weight: number;
  pokemon_v2_pokemonsprites: {
    sprites: {
      "official-artwork": {
        front_default: string;
      };
    };
  }[];
  pokemon_v2_pokemontypes: {
    pokemon_v2_type: {
      name: PossibleTypes;
    };
  }[];
};

type Typing = "correct" | "incorrect" | "unavailable";

type Infos = {
  type1: Exclude<Typing, "unavailable">;
  type2: Typing;
  height: "equal" | "greaterThan" | "lesserThan";
  weight: "equal" | "greaterThan" | "lesserThan";
};

type PossibleTypes =
  | "bug"
  | "dark"
  | "dragon"
  | "fairy"
  | "fighting"
  | "fire"
  | "flying"
  | "ghost"
  | "grass"
  | "ground"
  | "electric"
  | "ice"
  | "normal"
  | "poison"
  | "psychic"
  | "rock"
  | "steel"
  | "water";

export type { Pokemon, PokemonData, Infos, Typing, PossibleTypes };

type Pokemon = {
  id: number;
  name: string;
  height: number;
  weight: number;
  sprite: string;
  typing: PossibleTypes[];
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

export type { Pokemon, Infos, Typing, PossibleTypes };

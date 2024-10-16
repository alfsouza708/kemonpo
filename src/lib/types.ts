type Pokemon = {
  id: number;
  name: string;
  height: number;
  weight: number;
  sprite: string;
  typing: string[];
};

type Typing = "correct" | "incorrect" | "unavailable";

type Infos = {
  type1: Exclude<Typing, "unavailable">;
  type2: Typing;
  height: "equal" | "greaterThan" | "lesserThan";
  weight: "equal" | "greaterThan" | "lesserThan";
};

export type { Pokemon, Infos, Typing };

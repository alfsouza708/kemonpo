type FormEvent = React.FormEvent<HTMLFormElement>;
type MouseEvent = React.MouseEvent<HTMLButtonElement>;
type ChangeEvent = React.ChangeEvent<HTMLInputElement>;

type Pokemon = {
  id: string;
  name: string;
  height: number;
  weight: number;
  sprite: string;
  typing: string[];
};

export type { ChangeEvent, FormEvent, MouseEvent, Pokemon };

import { useEffect, useState } from "react";

import {
  Command,
  CommandGroup,
  CommandItem,
  CommandList,
  Input,
  Popover,
  PopoverContent,
} from "@/components/ui";
import * as PopoverPrimitive from "@radix-ui/react-popover";
import { Command as CommandPrimitive } from "cmdk";

import { Pokemon } from "@/lib/types";

type Props = {
  pokemonList: Pokemon[];
};

export default function GuessInput({ pokemonList }: Props) {
  const [pokemon, setPokemon] = useState<string>("");
  const [possibilities, setPossibilities] = useState<Pokemon[]>([]);
  const [open, setOpen] = useState<boolean>(false);
  const [value, setValue] = useState<string>("");

  useEffect(() => {
    const possiblePokemon = pokemonList
      .filter((poke) => poke.name.toLowerCase().includes(pokemon.toLowerCase()))
      .slice(0, 5);
    setPossibilities(possiblePokemon);
  }, [pokemon]);

  // https://github.com/shadcn-ui/ui/issues/173

  return (
    <div className="flex items-center w-64 lg:w-80">
      <Popover open={open} onOpenChange={setOpen}>
        <Command>
          <PopoverPrimitive.Anchor asChild>
            <CommandPrimitive.Input
              asChild
              value={pokemon}
              onValueChange={setPokemon}
              onKeyDown={(e) => setOpen(e.key !== "Escape")}
              onFocus={() => setOpen(true)}
              onBlur={(e) => {
                if (!e.relatedTarget?.hasAttribute("cmdk-list")) {
                  setPokemon(value ? pokemon : "");
                }
              }}
            >
              <Input
                placeholder="Guess the Pokémon..."
                className="w-full text-center"
              />
            </CommandPrimitive.Input>
          </PopoverPrimitive.Anchor>
          {!open && <CommandList aria-hidden="true" className="hidden" />}
          <PopoverContent
            asChild
            onOpenAutoFocus={(e) => e.preventDefault()}
            onInteractOutside={(e) => {
              if (
                e.target instanceof Element &&
                e.target.hasAttribute("cmdk-input")
              ) {
                e.preventDefault();
              }
            }}
            className="w-[--radix-popover-trigger-width] p-0 max-h-96"
          >
            <CommandList>
              <CommandGroup>
                {possibilities?.map((pokemon) => (
                  <CommandItem
                    key={pokemon.id}
                    value={pokemon.name}
                    onMouseDown={(e) => e.preventDefault()}
                    onSelect={(currentValue) => {
                      setValue(currentValue === value ? "" : currentValue);
                      setPokemon(pokemon.name);
                      setOpen(false);
                    }}
                    className="flex gap-5"
                  >
                    <img
                      src={pokemon.sprite}
                      alt={`sprite-${pokemon.id}`}
                      className="w-12"
                    />
                    <p className="self-center">{pokemon.name}</p>
                  </CommandItem>
                ))}
              </CommandGroup>
            </CommandList>
          </PopoverContent>
        </Command>
      </Popover>
    </div>
  );
}

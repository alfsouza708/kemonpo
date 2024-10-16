import { Infos, Pokemon } from "@/lib/types";
import { cn } from "@/lib/utils";
import { Activity } from "lucide-react";

type Props = {
  pokemon: Pokemon;
  infos: Infos;
};

export default function GuessInfos({ infos, pokemon }: Props) {
  return (
    <div className="text-white flex justify-center items-center gap-1 h-full">
      <div
        className={cn(
          infos.type1 === "correct" ? "bg-emerald-400" : "bg-red-600",
          "flex flex-col justify-center items-center rounded-full w-14 h-14"
        )}
      >
        <Activity className="mb-1" />
        <p className="text-[6px]">{pokemon.typing[0].toUpperCase()}</p>
      </div>
      <div
        className={cn(
          infos.type2 === "correct" ? "bg-emerald-400" : "bg-red-600",
          infos.type2 === "unavailable" ? "bg-zinc-800" : "",
          "flex flex-col justify-center items-center rounded-full w-14 h-14"
        )}
      >
        <Activity className="mb-1" />
        <p className="text-[6px]">
          {pokemon.typing[1]?.toUpperCase() ?? pokemon.typing[0]?.toUpperCase()}
        </p>
      </div>
      <div
        className={cn(
          infos.height === "equal" ? "bg-emerald-400" : "bg-red-600",
          infos.height === "lesserThan"
            ? ` before:bg-zinc-800 before:flex before:justify-center before:items-center before:pt-[2px] before:content-[url(src/assets/arrow-down.png)] before:h-5 before:w-5 before:absolute before:top-0 before:right-14 before:rounded-full`
            : ``,
          infos.height === "greaterThan"
            ? `before:bg-zinc-800 before:flex before:justify-center before:items-center before:pt-[2px] before:content-[url(src/assets/arrow-up.png)] before:h-5 before:w-5 before:absolute before:top-0 before:right-14 before:rounded-full`
            : ``,
          "flex flex-col justify-center items-center rounded-full w-14 h-14"
        )}
      >
        <p className="text-sm my-1">{pokemon.height}</p>
        <p className="text-[10px]">M</p>
      </div>
      <div
        className={cn(
          infos.weight === "equal" ? "bg-emerald-400" : "bg-red-600",
          infos.weight === "lesserThan"
            ? ` before:bg-zinc-800 before:flex before:justify-center before:items-center before:pt-[2px] before:content-[url(src/assets/arrow-down.png)] before:h-5 before:w-5 before:absolute before:top-0 before:right-0 before:rounded-full`
            : ``,
          infos.weight === "greaterThan"
            ? `before:bg-zinc-800 before:flex before:justify-center before:items-center before:pt-[2px] before:content-[url(src/assets/arrow-up.png)] before:h-5 before:w-5 before:absolute before:top-0 before:right-0 before:rounded-full`
            : ``,
          "flex flex-col justify-center items-center rounded-full w-14 h-14"
        )}
      >
        <p className="text-sm my-1">{pokemon.weight}</p>
        <p className="text-[10px]">KG</p>
      </div>
    </div>
  );
}

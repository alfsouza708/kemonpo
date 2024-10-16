import { allTypes } from "@/lib/icons";
import { PossibleTypes } from "@/lib/types";

export default function TypeImg({ type }: { type: PossibleTypes }) {
  const TypeImg = allTypes[type];

  return <TypeImg className="mb-1" />;
}

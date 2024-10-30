import { ModeToggle } from "@/components/ui";
import ResetButton from "@/components/pokemon-guess/ResetButton";

export default function Settings() {
  return (
    <div className="flex justify-center items-center gap-4 p-4">
      <ModeToggle />

      <ResetButton />
    </div>
  );
}

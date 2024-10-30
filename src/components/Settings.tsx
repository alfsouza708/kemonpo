import { ModeToggle, Separator } from "@/components/ui";
import ResetButton from "@/components/pokemon-guess/ResetButton";

export default function Settings() {
  return (
    <div className="top-0 sticky w-full z-10 bg-background">
      <div className="flex justify-center items-center gap-4 p-4">
        <ModeToggle />

        <ResetButton />
      </div>

      <Separator />
    </div>
  );
}

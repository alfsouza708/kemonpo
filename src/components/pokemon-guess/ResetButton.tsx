import { useState } from "react";

import {
  Button,
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui";
import { useGuessStore } from "@/store/use-guess-store";
import { Repeat2 } from "lucide-react";

export default function ResetButton() {
  const [open, setOpen] = useState(false);
  const { newGame } = useGuessStore();

  return (
    <>
      <Button
        variant="outline"
        size="icon"
        className="bg-popover"
        onClick={() => setOpen(true)}
      >
        <Repeat2 className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all" />
      </Button>

      <Dialog open={open} onOpenChange={setOpen}>
        {open && (
          <DialogContent>
            <DialogHeader>
              <DialogTitle></DialogTitle>
              <DialogDescription></DialogDescription>
            </DialogHeader>

            <Button
              onClick={() => {
                setOpen(false);
                newGame();
              }}
            >
              New Guess?
            </Button>
          </DialogContent>
        )}
      </Dialog>
    </>
  );
}

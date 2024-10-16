import {
  Button,
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui";
import { Pokemon } from "@/lib/types";
import AudioPath from "@/assets/captured.mp3";

type Props = {
  open: boolean;
  chosen: Pokemon;
  setOpen: (arg0: boolean) => void;
};

export default function GuessDialog({ open, setOpen, chosen }: Props) {
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      {open && (
        <DialogContent>
          <DialogHeader>
            <DialogTitle></DialogTitle>
            <DialogDescription></DialogDescription>
          </DialogHeader>
          <div className="flex flex-col justify-center items-center gap-8 mb-6">
            <p>Gotcha!</p>
            <img
              className="w-24 h-24 bg-black rounded-full"
              src={chosen.sprite}
              alt="sprite"
            />
            <p>{chosen.name} captured!</p>
            <audio src={AudioPath} autoPlay />
          </div>
          <DialogFooter>
            <Button onClick={() => setOpen(false)}>New Game?</Button>
          </DialogFooter>
        </DialogContent>
      )}
    </Dialog>
  );
}

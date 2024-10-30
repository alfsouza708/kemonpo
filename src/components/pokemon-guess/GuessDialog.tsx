import {
  Button,
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui";
import AudioPath from "@/assets/captured.mp3";
import { useGuessStore } from "@/store/use-guess-store";

type Props = {
  open: boolean;
  setOpen: (arg0: boolean) => void;
};

export default function GuessDialog({ open, setOpen }: Props) {
  const { chosen, newGame } = useGuessStore();

  function handleClose() {
    setOpen(false);
    newGame();
  }

  return (
    <Dialog open={open} onOpenChange={handleClose}>
      {open && (
        <DialogContent>
          <DialogHeader>
            <DialogTitle></DialogTitle>
            <DialogDescription></DialogDescription>
          </DialogHeader>

          <div className="flex flex-col justify-center items-center gap-8 mb-6">
            <p>Gotcha!</p>
            <img
              className="w-48 h-48 bg-black rounded-full overflow-visible"
              src={chosen.sprite}
              alt="sprite"
            />
            <p>{chosen.name} captured!</p>
            <audio src={AudioPath} autoPlay />
          </div>

          <DialogFooter>
            <Button onClick={handleClose}>New Game?</Button>
          </DialogFooter>
        </DialogContent>
      )}
    </Dialog>
  );
}

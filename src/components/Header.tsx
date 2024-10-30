import KemonpoLogo from "@/assets/kemonpo-logo.png";
import { Separator } from "@/components/ui";

export default function Header() {
  return (
    <>
      <img src={KemonpoLogo} alt="kemonpo logo" className="w-64" />

      <Separator />
    </>
  );
}

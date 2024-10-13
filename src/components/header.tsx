import KemonpoLogo from "@/assets/kemonpo-logo.png";

export default function Header() {
  return (
    <a href="/">
      <img src={KemonpoLogo} alt="kemonpo logo" className="w-64" />
    </a>
  );
}

import Header from "@/components/header";
import { Separator } from "@/components/ui/separator";

export default function App() {
  return (
    <div className="flex flex-col justify-start items-center h-screen bg-zinc">
      <Header />

      <Separator />

      <section className="p-8 flex flex-col justify-center items-center gap-8 w-full">
        <h1>Who's that Pokémon?</h1>
      </section>
    </div>
  );
}

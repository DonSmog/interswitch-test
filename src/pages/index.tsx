import { Hero } from "@/components/Hero";
import { StarShips } from "@/components/Starships";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col z-0 relative">
      <Hero />
      <StarShips />
    </main>
  );
}

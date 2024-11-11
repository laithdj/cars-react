import { HydrateClient } from "~/trpc/server";
import { AllInventory } from "./_components/inventory";

export default async function Home() {
  return (
    <HydrateClient>
      <main className="m-6 grid min-h-screen grid-rows-[auto,1fr] gap-4">
        <h1 className="text-5xl font-extrabold tracking-tight sm:text-[5rem]">
          Karmo Inventory
        </h1>
        <div className="h-full">
          <AllInventory />
        </div>
      </main>
    </HydrateClient>
  );
}

"use client";

import { api } from "~/trpc/react";

export function AllInventory() {
  const [inventory] = api.inventory.getAll.useSuspenseQuery(); // calls trpc route

  // TODO Please add a table component here
  return <div className="w-full max-w-xs">*Add table here*</div>;
}

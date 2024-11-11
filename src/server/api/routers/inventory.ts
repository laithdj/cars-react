import { Inventory } from "@prisma/client";

import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";

export const inventoryRouter = createTRPCRouter({
  /**
   * Get all Inventory TODO:
   */
  getAll: publicProcedure.query(async ({ ctx }) => {
    return [] as Inventory[];
  }),
});

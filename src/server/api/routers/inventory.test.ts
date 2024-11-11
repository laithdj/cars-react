import { expect, test } from "vitest";
import { createCaller } from "~/server/api/root";
import { db } from "~/server/db";
// TODO:
test("Should return all inventory", async () => {
  //   const _caller = createCaller({ db, headers: new Headers() }); // used to call trpc routes
  expect(1).toBe(1);
});

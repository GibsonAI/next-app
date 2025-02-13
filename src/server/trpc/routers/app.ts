import { z } from "zod";
import { router, publicProcedure } from "@/server/trpc";
import { gibson } from "@/gibson";

export const appRouter = router({
  greet: publicProcedure.query(() => {
    return "Welcome to Gibson's Next.js Template! This guide will help you start building your type-safe full stack TypeScript application using the Gibson client to store and retrieve your data.";
  }),
});

export type AppRouter = typeof appRouter;

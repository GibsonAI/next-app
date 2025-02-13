import { z } from "zod";
import { router, publicProcedure } from "@/server/trpc";

/**
 * This is the main router for the application.
 * It contains all the procedures that can be called from the client.
 *
 * You can organize your procedures into multiple routers.
 * These procedures are a great place to put your business logic and
 * use the Gibson client to store and retrieve your data.
 */
export const appRouter = router({
  greet: publicProcedure.input(z.object({}).optional()).query(() => {
    return "Welcome to Gibson's Next.js Template! This guide will help you start building your type-safe full stack TypeScript application using the Gibson client to store and retrieve your data.";
  }),
});

export type AppRouter = typeof appRouter;

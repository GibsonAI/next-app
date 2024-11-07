import { appRouter } from "@/server/trpc/routers/app";
import { createCallerFactory } from "@/server/trpc/trpc";

/**
 * Creates a "caller" to invoke tRPC procedures on the server.
 */
export const createCaller = createCallerFactory(appRouter);

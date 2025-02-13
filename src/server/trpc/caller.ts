import { appRouter } from "@/server/trpc/routers/app";
import { createCallerFactory } from "@/server/trpc";

/**
 * Creates a "caller" to invoke tRPC procedures on the server
 * e.g. from a react server component or server action
 * which allows you to share validation and business logic regardless of rendering strategy.
 * See https://trpc.io/docs/server/server-side-calls for more information.
 */
export const createCaller = createCallerFactory(appRouter);

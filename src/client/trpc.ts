import { createTRPCReact } from "@trpc/react-query";
import { type AppRouter } from "@/server/trpc/routers/app";

/**
 * Type-safe react-query (aka TanStack Query) client for tRPC requests from the browser/client only.
 */
export const trpc = createTRPCReact<AppRouter>({});

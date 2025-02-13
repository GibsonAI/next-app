import { NextRequest } from "next/server";
import { fetchRequestHandler } from "@trpc/server/adapters/fetch";
import { createContext } from "@/server/trpc/context";
import { appRouter } from "@/server/trpc/routers/app";

/**
 * Next.js server route for tRPC
 */
const handler = (req: NextRequest) =>
  fetchRequestHandler({
    endpoint: "/api/trpc",
    req,
    router: appRouter,
    createContext: () => createContext(),
  });

export { handler as GET, handler as POST };

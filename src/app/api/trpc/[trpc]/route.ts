import { fetchRequestHandler } from "@trpc/server/adapters/fetch";
import { createContext } from "@/server/trpc/context";
import { appRouter } from "@/server/trpc/routers/app";

/**
 * Next.js server route for tRPC
 */
const handler = (req: Request, res: Response) =>
  fetchRequestHandler({
    endpoint: "/api/trpc",
    req,
    router: appRouter,
    createContext: () => createContext(req, res),
  });

export { handler as GET, handler as POST };

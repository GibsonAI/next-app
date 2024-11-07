/**
 * Creates the context object for tRPC routers + procedures
 * This can include authentication information, database connections, etc.
 */
export const createContext = async (req: Request, res: Response) => {
  // Add any additional context you need here
  return { req, res };
};

export type Context = Awaited<ReturnType<typeof createContext>>;

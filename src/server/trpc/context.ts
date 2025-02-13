/**
 * Creates the context object for tRPC routers + procedures
 * This can include authentication information, database connections, etc.
 */
export const createContext = async () => {
  // Add any additional context you need here, e.g user session, database connections, etc.
  return {};
};

export type Context = Awaited<ReturnType<typeof createContext>>;

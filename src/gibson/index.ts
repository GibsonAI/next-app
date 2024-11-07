import createFetchClient from "openapi-fetch";
import type { paths } from "@/gibson/types"; // generated with `npm run typegen`

/**
 * Fetch client for Gibson API requests originating from the Next.js server only.
 * e.g. API routes, tRPC, server components, or server actions
 */
export const gibson = createFetchClient<paths>({
  baseUrl: process.env.GIBSON_API_URL,
  headers: {
    "X-Gibson-API-Key": process.env.GIBSON_API_KEY,
  },
});

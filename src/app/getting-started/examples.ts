export const trpc = `
import { z } from "zod";
import { router, publicProcedure } from "@/server/trpc";
import { gibson } from "@/gibson";

export const appRouter = router({
  greet: publicProcedure
    .input(
      z.object({
        uuid: z.string().uuid(),
      })
    )
    .query(({ input }) => {
      const { first_name } = gibson.GET("/-/v1/user/{uuid}", {
        params: {
          path: { uuid },
        },
      });
      return \`Hello \${first_name}!\`;
    }),
});

export type AppRouter = typeof appRouter;
`;

export const greeting = `
"use client";

import { trpc } from "@/client/trpc";

export function Greeting() {
  const { data, error, isLoading } = trpc.greet.useQuery({
    uuid: "123",
  });

  return (
    <div>
      {isLoading && "Loading..."}
      {error && \`Error loading: \${error.message}\`}
      {data && data}
    </div>
  );
}
`;

export const serverAction = `
"use server";

import { gibson } from "@/gibson";

export async function greet(uuid: string) {
  const { first_name } = await gibson.GET("/-/v1/user/{uuid}", {
    params: { path: { uuid } },
  });
  return \`Hello \${first_name}!\`;
}
`;

export const clientAction = `
"use client";

import { useState, useEffect } from "react";
import { greet } from "@/server/actions/greeting";

export function ClientSideGreeting() {
  const [greeting, setGreeting] = useState<string>();

  useEffect(() => {
    greet("123").then((greeting) => {
      setGreeting(greeting);
    });
  }, []);

  return <div>{greeting}</div>;
}
`;

export const serverComponent = `
import { gibson } from "@/gibson";

export async function ServerComponent() {
  const { first_name } = await gibson.GET("/-/v1/user/{uuid}", {
    params: { path: { uuid: "123" } },
  });
  return \`Hello \${first_name}!\`;
}
`;

export const apiRoute = `
import { NextResponse } from "next/server";
import { gibson } from "@/gibson";

/**
 * This is a standard HTTP endpoint available at /api/greet
 */
export async function GET(request: Request) {
  const { first_name } = await gibson.GET("/-/v1/user/{uuid}", {
    params: { path: { uuid: "123" } },
  });
  return NextResponse.json({ message: \`Hello \${first_name}!\` });
}
`;

"use client";

import { trpc } from "@/client/trpc";

export function Greeting() {
  const { data, error, isLoading } = trpc.greet.useQuery();

  return (
    <div>
      {isLoading && "Loading..."}
      {error && `Error loading: ${error.message}`}
      {data && data}
    </div>
  );
}

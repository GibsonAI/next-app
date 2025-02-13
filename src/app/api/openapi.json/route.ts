import { NextRequest, NextResponse } from "next/server";

/**
 * Next.js HTTP server route for serving the project's OpenAPI spec
 * This isn't required for the type-safe client generation, but serves as a
 * sample for how to use environment variables only available on the server within a route.
 */
export async function GET(req: NextRequest) {
  console.log(req);
  const response = await fetch(process.env.GIBSON_API_SPEC!);
  const data = await response.json();
  return NextResponse.json(data);
}

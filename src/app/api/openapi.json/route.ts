import { NextResponse } from "next/server";

/**
 * Sample Next.js HTTP server route
 */
export async function GET(req: Request) {
  const response = await fetch(process.env.GIBSON_API_SPEC!);
  const data = await response.json();
  return NextResponse.json(data);
}

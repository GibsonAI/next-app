import { NextRequest, NextResponse } from "next/server";

/**
 * Sample Next.js HTTP server route
 */
export async function GET(req: NextRequest) {
  console.log(req);
  // Business logic can go here
  return NextResponse.json({ message: "Hello from the Next.js server!" });
}

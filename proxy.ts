import { NextResponse, type NextRequest } from "next/server";

export function proxy(req: NextRequest) {
  // rename to `middleware` on Next 15 or older
  if (!req.cookies.get("token")) {
    return NextResponse.redirect(new URL("/login", req.url));
  }
  return NextResponse.next();
}

export const config = {
  matcher: ["/admin/:path*", "/student/:path*"],
};

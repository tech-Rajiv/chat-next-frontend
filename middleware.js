import { NextResponse } from "next/server";

export function middleware(req) {
  const token = req.cookies.get("token")?.value;
  const { pathname } = req.nextUrl;

  // ✅ Protect private routes only
  if (!token && pathname.startsWith("/dashboard")) {
    console.log("middleware: no token → redirecting to /login");
    const loginUrl = new URL("/login", req.url);
    return NextResponse.redirect(loginUrl);
  }

  // ✅ Optional: prevent logged-in user from re-visiting login/signup
  if (
    token &&
    (pathname === "/login" || pathname === "/signup" || pathname === "/")
  ) {
    const dashboardUrl = new URL("/dashboard", req.url);
    return NextResponse.redirect(dashboardUrl);
  }

  console.log("middleware: allowing request");
  return NextResponse.next();
}

export const config = {
  matcher: ["/", "/login", "/signup", "/dashboard/:path*"],
};

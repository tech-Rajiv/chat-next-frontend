import { NextResponse } from "next/server";

export function middleware(req) {
  const token = req.cookies.get("token")?.value;
  console.log("token: in middleware", token);

  const url = req.nextUrl.clone();

  //  If logged in and tries to go to login/register → redirect to dashboard
  if (
    token &&
    (url.pathname === "/login" ||
      url.pathname === "/signup" ||
      url.pathname === "/")
  ) {
    url.pathname = "/dashboard";
    return NextResponse.redirect(url);
  }

  //  If not logged in and tries to go to protected route → redirect to login
  if (
    !token &&
    (url.pathname.startsWith("/dashboard") || url.pathname.startsWith("/chat"))
  ) {
    url.pathname = "/login";
    console.log("middlewre forcing to login");

    return NextResponse.redirect(url);
  }
  console.log("middlewre doing next");

  // Otherwise, allow request
  return NextResponse.next();
}

// 👇 This tells Next.js which routes the middleware should run on
export const config = {
  matcher: [
    "/",
    "/signup",
    "/chat",
    "/login",
    "/register",
    "/dashboard/:path*",
  ],
};

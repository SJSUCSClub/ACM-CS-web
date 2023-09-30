import { withAuth } from "next-auth/middleware"
import { NextResponse } from "next/server"

export default withAuth(
  // `withAuth` augments your `Request` with the user's token.
  function middleware(req) {
    console.log(req.nextauth?.token)
    const url = req.nextUrl.pathname;
    const userRole = req?.nextauth?.token?.role;

    if (url?.startsWith("/admin") && userRole !== "admin") {
      return NextResponse.redirect(new URL("/", req.url))
    }
  },
  {
    callbacks: {
      authorized: ({ token }) => {
        if (!token) {
          return false
        }
      },
    },
  }
)

export const config = { matcher: ["/admin/:path*"] }
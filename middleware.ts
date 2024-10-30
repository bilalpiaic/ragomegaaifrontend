import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { getToken } from 'next-auth/jwt';

// Define paths for single and double protection
const singleProtectedPaths = ['/cart', '/checkout'];
const doubleProtectedPaths = ['/dashboard'];

export async function middleware(req: NextRequest) {
  const token = await getToken({ req, secret: process.env.NEXTAUTH_SECRET });

  const { pathname } = req.nextUrl;

  // Check for single protected pages (user must be logged in)
  if (singleProtectedPaths.includes(pathname)) {
    if (!token) {
      return NextResponse.redirect(new URL('/login', req.url));
    }
  }

  // Check for double protected page (user must be logged in and be an admin)
  if (doubleProtectedPaths.includes(pathname)) {
    if (!token) {
      return NextResponse.redirect(new URL('/login', req.url));
    }

    if (!token.isAdmin) {
      return NextResponse.redirect(new URL('/', req.url));
    }
  }

  // Allow access if conditions are met
  return NextResponse.next();
}

export const config = {
  matcher: ['/cart', '/checkout', '/dashboard'],
};

import NextAuth from 'next-auth';

import { authConfig } from '@/app/(auth)/auth.config';

export default NextAuth(authConfig).auth;

export const config = {
  matcher: [
    // Include routes that should be protected
    '/((?!_next/static|_next/image|favicon.ico|opengraph-image|twitter-image|og-image.jpg|twitter-image.jpg|images|.*\\.jpg$|.*\\.png$|.*\\.jpeg$|.*\\.gif$|.*\\.webp$|.*\\.svg$|.*\\.ico$|manifest\\.json).*)',
  ],
};

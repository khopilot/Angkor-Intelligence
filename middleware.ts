import NextAuth from 'next-auth';

import { authConfig } from '@/app/(auth)/auth.config';

export default NextAuth(authConfig).auth;

export const config = {
  matcher: [
    '/', 
    '/:id', 
    '/api/:path*', 
    '/login', 
    '/register',
    // Exclude image files and manifest from authentication
    '/((?!images|.*\\.jpg$|.*\\.png$|.*\\.jpeg$|.*\\.gif$|.*\\.webp$|manifest\\.json).*)',
  ],
};

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
    // Exclude image files, manifest, and other public assets from authentication
    '/((?!_next|images|.*\\.jpg$|.*\\.png$|.*\\.jpeg$|.*\\.gif$|.*\\.webp$|.*\\.svg$|.*\\.ico$|manifest\\.json|favicon\\.ico).*)',
  ],
};

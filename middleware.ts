import { clerkMiddleware, createRouteMatcher } from '@clerk/nextjs/server';

const protectedRoutes = createRouteMatcher([
  '/',
  '/upcoming',
  '/meeting(.*)',
  '/previous',
  '/recordings',
  '/personal-room',
]);

export default clerkMiddleware(async (auth, req) => {
  const authResult = await auth(); // Wait for the auth to resolve
  if (protectedRoutes(req)) {
    if (!authResult.isSignedIn) {
      // Redirect to sign-in if the user is not signed in
      return authResult.redirectToSignIn();
    }
  }
});

export const config = {
  matcher: ['/((?!.+\\.[\\w]+$|_next).*)', '/', '/(api|trpc)(.*)'],
};

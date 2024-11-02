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
  console.log('Auth Result:', authResult); // Log the auth result for debugging
  
  const signInPath = '/sign-in'; // Define sign-in path
  const signUpPath = '/sign-up'; // Define sign-up path

  // Check if the user is authenticated
  const isAuthenticated = !!authResult.userId; // Use a truthy check to determine authentication

  if (protectedRoutes(req)) {
    if (!isAuthenticated) {
      console.log('User not authenticated, redirecting to sign-in.'); // Log the redirect action
      // Redirect to sign-in if the user is not signed in
      return authResult.redirectToSignIn();
    }
  }

  // If the user is authenticated and the request is for the sign-in or sign-up page,
  // redirect to the homepage
  if (isAuthenticated && (req.url === signInPath || req.url === signUpPath)) {
    console.log('User authenticated, redirecting to homepage.'); // Log the redirect action
    return Response.redirect('/app/root/home', 302); // Adjust the URL according to your routing structure
  }
});

export const config = {
  matcher: ['/((?!.+\\.[\\w]+$|_next).*)', '/', '/(api|trpc)(.*)'],
};

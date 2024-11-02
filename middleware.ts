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
  const authResult = await auth(); 
  console.log('Auth Result:', authResult); 
  
  const signInPath = '/sign-in'; 
  const signUpPath = '/sign-up'; 

  const isAuthenticated = !!authResult.userId; 
  if (protectedRoutes(req)) {
    if (!isAuthenticated) {
      console.log('User not authenticated, redirecting to sign-in.'); 
      return authResult.redirectToSignIn();
    }
  }

  if (isAuthenticated && (req.url === signInPath || req.url === signUpPath)) {
    console.log('User authenticated, redirecting to homepage.'); 
    return Response.redirect('/app/root/home', 302);
  }
});

export const config = {
  matcher: ['/((?!.+\\.[\\w]+$|_next).*)', '/', '/(api|trpc)(.*)'],
};

import { redirect } from '@sveltejs/kit';

export const GET = async ({ url, locals: { supabase } }) => {
  // Get the code from the auth server
  const code = url.searchParams.get('code');

  // Next page for redirect
  const next = url.searchParams.get('next') ?? '/';

  if (code) {
    // Get a session in exchange for the code and store it in our cookies
    await supabase.auth.exchangeCodeForSession(code);
  }

  throw redirect(303, next);
};

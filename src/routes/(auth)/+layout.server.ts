import { redirect } from '@sveltejs/kit';
import type { LayoutServerLoad } from './$types';

export const load: LayoutServerLoad = async ({ url, locals: { getSession } }) => {
  const session = await getSession();

  // If user is signed in and not currently signing out,
  // do not allow them to access auth pages
  if (url.pathname !== '/auth/signout' && session) {
    throw redirect(303, '/');
  }
};

import { redirect } from '@sveltejs/kit';
import type { LayoutServerLoad } from './$types';

export const load: LayoutServerLoad = async ({ url, locals: { supabase, getSession } }) => {
  const session = await getSession();

  if (!session) {
    throw redirect(307, '/auth/signin');
  }

  const user = session.user!;

  // Get user's profile
  const { data: userProfile } = await supabase
    .from('profiles')
    .select(`*`)
    .match({ user_id: user.id })
    .maybeSingle();

  if (!userProfile && url.pathname !== '/profile/update') {
    throw redirect(307, '/profile/update');
  }

  const allowedPaths: string[] = ['/', '/profile'];
  if (!allowedPaths.includes(url.pathname)) {
    if (url.pathname !== '/profile/update') {
      throw redirect(307, '/profile/update');
    }
  }

  return { userProfile };
};

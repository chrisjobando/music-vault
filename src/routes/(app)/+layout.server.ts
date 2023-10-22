import { redirect } from '@sveltejs/kit';
import type { LayoutServerLoad } from './$types';

export const load: LayoutServerLoad = async ({ url, locals: { supabase, getSession } }) => {
  const session = await getSession();

  if (!session) {
    throw redirect(307, '/auth/signin');
  }

  const user_id = session.user.id;

  // Get user's profile
  const { data: userProfile } = await supabase
    .from('profiles')
    .select('*')
    .match({ user_id })
    .maybeSingle();

  if (!userProfile && url.pathname !== '/auth/create-profile') {
    throw redirect(307, '/auth/create-profile');
  }

  return { userProfile };
};

import { redirect } from '@sveltejs/kit';
import type { LayoutServerLoad } from './$types';

export const load: LayoutServerLoad = async ({ url, locals: { supabase, getSession } }) => {
  const session = await getSession();

  if (!session) {
    throw redirect(307, '/auth/signin');
  }

  const user = session.user!;

  // Get user's profile
  const { data: userAccount } = await supabase
    .from('account')
    .select(`*`)
    .match({ id: user.id })
    .maybeSingle();

  //   const allowedPaths: string[] = [];
  //   if (!allowedPaths.includes(url.pathname)) {
  //     if (url.pathname !== '/account/update') {
  //       throw redirect(307, '/account/update');
  //     }
  //   }

  return { userAccount, website: url.origin };
};

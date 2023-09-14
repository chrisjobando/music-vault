import { fault, success } from '$lib/utils';
import { fail, redirect } from '@sveltejs/kit';
import type { Actions } from './$types';

export const actions: Actions = {
  default: async ({ request, locals: { supabase, getSession } }) => {
    const formData = await request.formData();
    const display_name = formData.get('display_name') as string;
    const first_name = formData.get('first_name') as string;
    const last_name = formData.get('last_name') as string;
    const avatar_url = formData.get('avatar_url') as string;

    const session = await getSession();
    if (!session) {
      throw redirect(307, '/auth/signin');
    }

    const user_id = session.user.id;

    const inputProfile = {
      display_name,
      first_name,
      last_name,
      avatar_url,
      user_id
    };

    const { data: userProfile, error: existingUserProfileError } = await supabase
      .from('profiles')
      .select(`*`)
      .match({ user_id })
      .maybeSingle();

    if (existingUserProfileError) {
      return fail(500, fault('Server error. Try again later', { userProfile: inputProfile }));
    }

    if (!userProfile) {
      const { data: createdProfile, error: createProfileError } = await supabase
        .from('profiles')
        .insert(inputProfile)
        .select();

      if (createProfileError) {
        return fail(500, fault('Server error. Try again later', { userProfile: inputProfile }));
      }

      return success('Your profile was created successfully.', { userProfile: createdProfile });
    }
    const { data: updatedProfile, error: updateProfileError } = await supabase
      .from('profiles')
      .update(inputProfile)
      .match({ user_id })
      .select();
    if (updateProfileError) {
      return fail(500, fault('Server error. Try again later', { userProfile: inputProfile }));
    }

    return success('Your profile was updated successfully.', { userProfile: updatedProfile });
  }
};

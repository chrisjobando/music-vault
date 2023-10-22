// Interfaces
import type { IProfileErrors } from '$lib/schema/validationSchema';
import type { IProfiles, IUpdateProfiles } from '$lib/types';
import type { Actions } from './$types';

// Validation
import { ProfileSchema } from '$lib/schema/validationSchema';
import { ZodError } from 'zod';

// Utils
import { findUpdatedProfileFields } from '$lib/api/profile/helpers';
import { fault, formatError, success } from '$lib/api/utils';
import { fail, redirect } from '@sveltejs/kit';

export const actions: Actions = {
  default: async ({ request, locals: { supabase, getSession } }) => {
    const formData = await request.formData();
    const display_name = formData.get('display_name') as string;
    const first_name = formData.get('first_name') as string;
    const last_name = formData.get('last_name') as string;
    const avatar_url = formData.get('avatar_url') as string;
    const originalProfile = JSON.parse(formData.get('original_profile') as string) as IProfiles;

    const session = await getSession();
    if (!session) {
      throw redirect(307, '/auth/signin');
    }

    const nullableLastName = last_name === '' ? null : last_name;
    const nullableAvatarUrl = avatar_url === '' ? null : avatar_url;

    try {
      ProfileSchema.parse({
        display_name,
        first_name,
        last_name: nullableLastName,
        avatar_url: nullableAvatarUrl
      });
    } catch (err) {
      if (err instanceof ZodError) {
        const errors: IProfileErrors = formatError(err);
        return fail(400, fault('', { errors }));
      }
    }

    const user_id = session.user.id;

    const userProfile: IUpdateProfiles = {
      display_name,
      first_name,
      last_name: nullableLastName,
      avatar_url: nullableAvatarUrl
    };

    const updatedProfile: IUpdateProfiles = findUpdatedProfileFields(userProfile, originalProfile);

    const { data: updatedProfileData, error: updateProfileError } = await supabase
      .from('profiles')
      .update(updatedProfile)
      .match({ user_id })
      .select()
      .maybeSingle();

    if (updateProfileError) {
      return fail(500, fault('Server error. Try again later'));
    }

    return success('Your profile was updated successfully.', { userProfile: updatedProfileData });
  }
};

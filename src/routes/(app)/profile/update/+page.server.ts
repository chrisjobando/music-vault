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
import { v4 as uuidv4 } from 'uuid';

export const actions: Actions = {
  default: async ({ request, locals: { supabase, getSession } }) => {
    const formData = await request.formData();
    const display_name = formData.get('display_name') as string;
    const first_name = formData.get('first_name') as string;
    const last_name = formData.get('last_name') as string;
    const avatar = formData.get('avatar') as File;
    const originalProfile = JSON.parse(formData.get('original_profile') as string) as IProfiles;

    const session = await getSession();
    if (!session) {
      throw redirect(307, '/auth/signin');
    }

    const user_id = session.user.id;

    let nullableAvatarUrl = null;
    if (avatar.size > 0) {
      if (originalProfile.avatar_url) {
        // Delete original avatar
        const originalFileName = originalProfile.avatar_url.split('/').pop() as string;

        const { error: deleteAvatarError } = await supabase.storage
          .from('avatars')
          .remove([originalFileName]);

        if (deleteAvatarError) {
          return fail(500, fault('Server error. Try again later'));
        }
      }

      const fileExt = avatar.name.split('.').pop();
      const fileGuid = uuidv4();
      const fileName = `${fileGuid}.${fileExt}`;

      const { error: uploadAvatarError } = await supabase.storage
        .from('avatars')
        .upload(fileName, avatar);

      if (uploadAvatarError) {
        return fail(500, fault('Server error. Try again later'));
      }

      const { data: avatarUrlData } = await supabase.storage.from('avatars').getPublicUrl(fileName);

      nullableAvatarUrl = avatarUrlData.publicUrl;
    }

    const nullableLastName = last_name === '' ? null : last_name;

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

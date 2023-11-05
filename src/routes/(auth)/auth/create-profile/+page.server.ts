// Interfaces
import type { IInputProfiles } from '$lib/types';
import type { Actions, PageServerLoad } from './$types';

// Utils
import { fault, formatError } from '$lib/api/utils';
import { ProfileSchema } from '$lib/schema/validationSchema';
import { fail, redirect } from '@sveltejs/kit';
import { v4 as uuidv4 } from 'uuid';
import { ZodError } from 'zod';

export const load: PageServerLoad = async ({ locals: { supabase, getSession } }) => {
  const session = await getSession();

  if (!session) {
    throw redirect(307, '/auth/signin');
  }

  const user_id = session.user.id;

  // If user has a profile, redirect to profile page
  const { data: userProfileData, error: existingUserProfileError } = await supabase
    .from('profiles')
    .select(`*`)
    .match({ user_id })
    .maybeSingle();

  if (existingUserProfileError) {
    return fail(500, fault('Server error. Try again later'));
  }

  if (userProfileData) {
    throw redirect(307, '/');
  }

  return;
};

export const actions: Actions = {
  default: async ({ request, locals: { supabase, getSession } }) => {
    const formData = await request.formData();
    const display_name = formData.get('display_name') as string;
    const first_name = formData.get('first_name') as string;
    const last_name = formData.get('last_name') as string;
    const avatar = formData.get('avatar') as File;

    const session = await getSession();
    if (!session) {
      throw redirect(307, '/auth/signin');
    }

    const user_id = session.user.id;

    let nullableAvatarUrl = null;
    if (avatar.size > 0) {
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
        const errors = formatError(err);
        return fail(400, fault('', { errors }));
      }
    }

    const inputProfile: IInputProfiles = {
      display_name,
      first_name,
      last_name: nullableLastName,
      avatar_url: nullableAvatarUrl,
      user_id
    };

    const { error: createProfileError } = await supabase
      .from('profiles')
      .insert(inputProfile)
      .select();
    if (createProfileError) {
      return fail(500, fault('Server error. Try again later'));
    }

    throw redirect(307, '/');
  }
};

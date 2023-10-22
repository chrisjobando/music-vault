import { fault, formatError, success } from '$lib/api/utils';
import { AuthSignUpSchema } from '$lib/schema/validationSchema';
import { AuthApiError } from '@supabase/supabase-js';
import { fail } from '@sveltejs/kit';
import { ZodError } from 'zod';
import type { Actions } from './$types';

export const actions: Actions = {
  default: async ({ request, url, locals: { supabase } }) => {
    const formData = await request.formData();
    const email = formData.get('email') as string;
    const password = formData.get('password') as string;
    const confirm_password = formData.get('confirm_password') as string;

    try {
      AuthSignUpSchema.parse({ email, password, confirm_password });
    } catch (err) {
      if (err instanceof ZodError) {
        const errors = formatError(err);
        return fail(400, fault('', { errors, email }));
      }
    }

    const { error: signUpError } = await supabase.auth.signUp({
      email,
      password,
      options: {
        emailRedirectTo: `${url.origin}/auth/callback?next=/profile/update`
      }
    });

    if (signUpError) {
      if (signUpError instanceof AuthApiError && signUpError.status === 400) {
        return fail(400, fault('Invalid credentials.', { email }));
      }

      return fail(500, fault(signUpError.message, { email }));
    }

    return success('Please check your email to confirm account creation.', { email });
  }
};

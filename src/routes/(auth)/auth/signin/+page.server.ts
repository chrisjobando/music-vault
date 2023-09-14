import { fault } from '$lib/utils';
import { AuthApiError } from '@supabase/supabase-js';
import { fail, redirect } from '@sveltejs/kit';
import type { Actions } from './$types';

export const actions: Actions = {
  default: async ({ request, locals: { supabase } }) => {
    const formData = await request.formData();
    const email = formData.get('email') as string;
    const password = formData.get('password') as string;

    const { error: signInError } = await supabase.auth.signInWithPassword({
      email,
      password
    });

    if (signInError) {
      if (signInError instanceof AuthApiError && signInError.status === 400) {
        return fail(400, fault('Email or Password is incorrect.', { email }));
      }

      return fail(500, fault('Server error. Try again later.', { email }));
    }

    throw redirect(303, '/');
  }
};

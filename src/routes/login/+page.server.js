import { AuthApiError } from '@supabase/supabase-js'
import { fail, redirect } from '@sveltejs/kit'

/**
 * @type {import('@sveltejs/kit').Actions}
 */
export const actions = {
  signin: async ({ request, locals: { supabase } }) => {
    const formData = await request.formData()

    let email = formData.get('email')
    let password = formData.get('password')

    // Client-side validation will ensure these are strings
    if (typeof email !== 'string') {
      email = ''
    }
    if (typeof password !== 'string') {
      password = ''
    }

    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    })

    if (error) {
      if (error instanceof AuthApiError && error.status === 400) {
        return fail(400, {
          error: 'Invalid credentials.',
          values: {
            email,
          },
        })
      }
      return fail(500, {
        error: 'Server error. Try again later.',
        values: {
          email,
        },
      })
    }

    throw redirect(303, '/')
  },

  signout: async ({ locals: { supabase } }) => {
    await supabase.auth.signOut()
    throw redirect(303, '/')
  },
}

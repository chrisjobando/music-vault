import type { LayoutServerLoad } from './$types';

/**
 * Handles session on server-side
 */
export const load: LayoutServerLoad = async ({ locals: { getSession } }) => {
  return {
    session: await getSession()
  };
};

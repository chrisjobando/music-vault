import { supabase } from "$lib/server/supabaseClient";

export async function load() {
  const { data: users, error  } = await supabase.from("users").select();

  if (error) {
    console.error(error)
  }

  return {
    users: users ?? [],
  };
}

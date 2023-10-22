import { Database } from '$lib/schema/database';
import { Session, SupabaseClient } from '@supabase/supabase-js';

// Unplugin icons
import type * as Icons from 'unplugin-icons/types/svelte';
export default Icons;

declare global {
  namespace App {
    interface Locals {
      supabase: SupabaseClient<Database>;
      getSession(): Promise<Session | null>;
    }
    interface PageData {
      session: Session | null;
    }
    // interface Error {}
    // interface Platform {}
  }
}

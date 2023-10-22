<script lang="ts">
  // Global CSS
  import '../app.postcss';
  // Svelte
  import { invalidate } from '$app/navigation';
  import { onMount } from 'svelte';

  /**
   * @description Global data store for the app. Contains the supabase client and session.
   */
  export let data;

  const { supabase, session } = data;

  onMount(() => {
    const { data } = supabase.auth.onAuthStateChange((_event, _session) => {
      // Check for expired session
      if (_session?.expires_at !== session?.expires_at) {
        invalidate('supabase:auth');
      }
    });

    // Unsubscribe to changes when page is destroyed to prevent memory leaks
    return () => data.subscription.unsubscribe();
  });
</script>

<svelte:head>
  <title>Music Vault</title>
</svelte:head>

<slot />

<script lang="ts">
  // Global CSS
  import '../app.postcss';
  // Svelte
  import { browser } from '$app/environment';
  import { invalidate } from '$app/navigation';
  import { onMount } from 'svelte';
  // Skeleton UI Components
  import {
    AppShell,
    Toast,
    autoModeWatcher,
    initializeStores,
    storePopup
  } from '@skeletonlabs/skeleton';
  // Floating UI for Popups
  import { arrow, autoUpdate, computePosition, flip, offset, shift } from '@floating-ui/dom';

  // Set theme according to user's OS theme
  if (browser) {
    autoModeWatcher();
  }

  // Initialize stores - used for drawer, modal and toast stores
  initializeStores();

  // Set required Floating UI modules
  storePopup.set({ computePosition, autoUpdate, flip, shift, offset, arrow });

  /**
   * @description Global data store for the app. Contains the supabase client and session.
   */
  export let data;

  let { supabase, session } = data;
  $: ({ supabase, session } = data);

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

<Toast />

<AppShell regionPage="relative" slotPageHeader="sticky top-0 z-10">
  <!-- <svelte:fragment slot="header">
		<HeaderComponent />
	</svelte:fragment>

	<svelte:fragment slot="sidebarLeft">
		<SideBarComponent />
	</svelte:fragment>

	<svelte:fragment slot="pageHeader"><h1>Page Header</h1></svelte:fragment> -->

  <slot />

  <!-- <svelte:fragment slot="pageFooter">Page Footer</svelte:fragment> -->
</AppShell>

<script lang="ts">
  // Skeleton UI Components
  import { AppShell } from '@skeletonlabs/skeleton';
  // Components
  import { HeaderComponent, SideBarComponent } from '$lib/components';

  /**
   * @description Global data store for the app. Contains the supabase client and session.
   */
  export let data;

  $: ({ userProfile } = data);
</script>

<AppShell regionPage="relative" slotPageHeader="sticky top-0 z-10">
  <svelte:fragment slot="header">
    <HeaderComponent {userProfile} />
  </svelte:fragment>

  <svelte:fragment slot="sidebarLeft">
    <SideBarComponent {userProfile} />
  </svelte:fragment>
  <slot />
</AppShell>

<script lang="ts">
  // Skeleton UI Components
  import { AppShell } from '@skeletonlabs/skeleton';
  // Components
  import { HeaderComponent, SideBarComponent } from '$lib/components';
</script>

<AppShell regionPage="relative" slotPageHeader="sticky top-0 z-10">
  <svelte:fragment slot="header">
    <HeaderComponent />
  </svelte:fragment>

  <svelte:fragment slot="sidebarLeft">
    <SideBarComponent />
  </svelte:fragment>

  <svelte:fragment slot="pageHeader"><h1>Page Header</h1></svelte:fragment>

  <slot />
</AppShell>

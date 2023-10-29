<script lang="ts">
  // Svelte
  import { page } from '$app/stores';
  // Components
  import { Sidebar } from '$lib/components/navigation';

  /**
   * @description Data store for the app
   * @description Contains global store and user profile
   */
  export let data;

  const { userProfile } = data;
</script>

{#if $page.route.id && userProfile}
  <div>
    <Sidebar {userProfile} />
    <div><slot /></div>
  </div>
{/if}

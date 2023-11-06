<script lang="ts">
  // Svelte
  import { page } from '$app/stores';
  // Components
  import { Navbar } from '$lib/components/navigation';

  /**
   * @description Data store for the app
   * @description Contains global store and user profile
   */
  export let data;

  const { userProfile } = data;
</script>

{#if $page.route.id && userProfile}
  <div>
    <Navbar {userProfile} />
    <div class="mx-auto max-w-6xl p-10"><slot /></div>
  </div>
{/if}

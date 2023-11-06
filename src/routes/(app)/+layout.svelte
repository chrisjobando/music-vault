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

  const year = new Date().getFullYear();
</script>

{#if $page.route.id && userProfile}
  <div class="flex min-h-screen flex-col">
    <Navbar {userProfile} />

    <div class="mx-auto w-full max-w-6xl p-10"><slot /></div>

    <footer class="footer mt-auto bg-base-200 p-4 text-base-content">
      <aside>
        <p>Copyright © {year} - All rights reserved by Christopher Obando</p>
      </aside>
    </footer>
  </div>
{/if}

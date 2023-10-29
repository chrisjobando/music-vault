<script lang="ts">
  // Svelte
  import { page } from '$app/stores';
  // Components
  import { Avatar } from '$lib/components/profile';
  // Interfaces
  import type { IProfiles } from '$lib/types';
  // Page routes
  import { Routes } from '$lib/routes';

  /**
   * @description User's account data
   */
  export let userProfile: Omit<IProfiles, 'created_at' | 'id' | 'user_id'>;
</script>

<nav>
  <ul>
    <h4>Music Vault</h4>

    {#each Routes as route}
      <li class={$page.url.pathname === route.path ? 'font-bold ' : ''}>
        <a href={route.path}>{route.name}</a>
      </li>
    {/each}
  </ul>

  {#if userProfile}
    <a href="/profile" class={$page.url.pathname.startsWith('/profile') ? ' font-bold' : ''}>
      <Avatar {userProfile} />
      <p>{userProfile.display_name}</p>
    </a>
  {/if}
</nav>

<script lang="ts">
  // Svelte
  import { page } from '$app/stores';
  // Components
  import { Avatar } from '$lib/components/profile';
  // Interfaces
  import type { IUserProfile } from '$lib/types';
  // Page routes
  import { Routes } from '$lib/routes';

  /**
   * @description User's account data
   */
  export let userProfile: IUserProfile | null;
</script>

<nav
  class="sticky left-0 top-0 hidden h-screen border-r-2 border-black bg-white p-5 sm:flex sm:w-60 sm:flex-col sm:justify-between"
>
  <ul>
    <h4 class="my-4">Music Vault</h4>

    {#each Routes as route}
      <li class="{$page.url.pathname === route.path ? 'font-bold ' : ''}my-2">
        <a href={route.path}>{route.name}</a>
      </li>
    {/each}
  </ul>

  {#if userProfile}
    <a
      href="/profile"
      class="flex items-center{$page.url.pathname.startsWith('/profile') ? ' font-bold' : ''}"
    >
      <Avatar size="small" {userProfile} />
      <p class="textContainer ml-2">{userProfile.display_name}</p>
    </a>
  {/if}
</nav>

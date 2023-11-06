<script lang="ts">
  // Svelte
  import { enhance } from '$app/forms';
  import { page } from '$app/stores';
  // Components
  import { Avatar } from '$lib/components/profile';
  // Interfaces
  import type { IProfiles } from '$lib/types';
  // Utils
  import cx from 'classnames';
  // Page routes
  import { Routes } from '$lib/routes';

  /**
   * @description User's account data
   */
  export let userProfile: Omit<IProfiles, 'created_at' | 'id' | 'user_id'>;
</script>

<div class="drawer">
  <input id="side-drawer" type="checkbox" class="drawer-toggle" />
  <div class="drawer-content flex flex-col">
    <nav class="navbar sticky w-full bg-base-200">
      <div class="flex-none lg:hidden">
        <label for="side-drawer" aria-label="open sidebar" class="btn btn-square btn-ghost">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            class="inline-block h-6 w-6 stroke-current"
            ><path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4 6h16M4 12h16M4 18h16"
            ></path></svg
          >
        </label>
      </div>

      <div class="flex-none px-2">
        <a class="btn btn-ghost text-xl normal-case" href="/">Music Match</a>
      </div>

      <div class="hidden flex-1 lg:flex">
        <ul class="menu menu-horizontal">
          {#each Routes as route}
            <li>
              <a
                href={route.path}
                class={cx({
                  'font-bold': $page.url.pathname === route.path,
                  'font-normal': $page.url.pathname !== route.path
                })}
              >
                {route.name}
              </a>
            </li>
          {/each}
        </ul>

        <div class="dropdown-end dropdown ml-auto">
          <div class="flex items-center">
            <button class="btn btn-circle btn-ghost">
              <Avatar size="xs" {userProfile} />
            </button>
            <p class="mx-2">{userProfile.display_name}</p>
          </div>

          <ul
            class="menu dropdown-content rounded-box menu-sm z-[1] mt-3 w-52 bg-base-200 p-2 shadow"
          >
            <li>
              <a
                class={cx({
                  'font-bold': $page.url.pathname.includes('/profile'),
                  'font-normal': !$page.url.pathname.includes('/profile')
                })}
                href="/profile"
              >
                Profile
              </a>
            </li>
            <li>
              <form method="POST" action="/auth/signout" use:enhance>Logout</form>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </div>

  <div class="drawer-side z-50">
    <label for="side-drawer" aria-label="close sidebar" class="drawer-overlay"></label>
    <ul class="menu min-h-full w-80 bg-base-100 p-4">
      <li>
        <a
          href="/"
          class={cx('text-xl', {
            'font-bold': $page.url.pathname === '/',
            'font-normal': $page.url.pathname !== '/'
          })}
        >
          Home
        </a>
      </li>
      {#each Routes as route}
        <li>
          <a
            href={route.path}
            class={cx('text-xl', {
              'font-bold': $page.url.pathname === route.path,
              'font-normal': $page.url.pathname !== route.path
            })}
            >{route.name}
          </a>
        </li>
      {/each}

      <div class="dropdown dropdown-top mt-auto">
        <div class="flex items-center">
          <button class="btn btn-circle btn-ghost">
            <Avatar size="xs" {userProfile} />
          </button>
          <p class="mx-2">{userProfile.display_name}</p>
        </div>

        <ul class="menu dropdown-content rounded-box menu-sm z-10 mb-3 w-52 bg-base-200 p-2 shadow">
          <li>
            <a
              class={cx({
                'font-bold': $page.url.pathname.includes('/profile'),
                'font-normal': !$page.url.pathname.includes('/profile')
              })}
              href="/profile"
            >
              Profile
            </a>
          </li>
          <li>
            <form method="POST" action="/auth/signout" use:enhance>Logout</form>
          </li>
        </ul>
      </div>
    </ul>
  </div>
</div>

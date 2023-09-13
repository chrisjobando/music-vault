<script lang="ts">
  import { enhance } from '$app/forms';
  import { getToastStore } from '@skeletonlabs/skeleton';
  import { afterUpdate } from 'svelte';
  import type { ActionData } from './$types';

  /**
   * @description Toggles password visibility
   */
  let showPassword = false;

  /**
   * @description Form data
   */
  export let form: ActionData;

  // Initialize toast store - used to queue toast messages
  const toastStore = getToastStore();

  // Show toast message if there is an error
  afterUpdate(() => {
    if (form?.error !== undefined) {
      toastStore.trigger({
        message: form.error,
        background: 'variant-filled-warning'
      });
    }
  });
</script>

<svelte:head>
  <title>Sign in to Music Vault</title>
  <meta name="description" content="Sign in to Music Vault" />
</svelte:head>

<form method="POST" use:enhance class="content-center justify-center p-8">
  <div class="authContainer mx-auto rounded-md bg-surface-500 py-8">
    <div class="mx-auto">
      <h1 class="my-16 text-center text-5xl font-bold">Sign in to Music Vault</h1>

      <hr class="mx-24 my-8 h-px !border-none bg-surface-400" />

      <div class="mx-auto w-full max-w-sm">
        <label class="label pb-4">
          <span>Email</span>
          <input
            required
            type="email"
            name="email"
            autocomplete="email"
            value={form?.values?.email ?? ''}
            placeholder="john@example.com"
            class="input w-full px-3 py-3 pr-16"
          />
        </label>

        <label class="label">
          <span>Password</span>
          <div class="relative w-full">
            <div class="absolute inset-y-0 right-0 z-10 flex items-center px-2">
              <input id="toggle" class="hidden" type="checkbox" bind:checked={showPassword} />
              <label
                for="toggle"
                class="flex w-12 cursor-pointer justify-center rounded bg-gray-300 px-2 py-1 text-sm text-gray-600 hover:bg-gray-400"
                >{showPassword ? 'Hide' : 'Show'}</label
              >
            </div>
            <input
              required
              name="password"
              placeholder="Password"
              type={showPassword ? 'text' : 'password'}
              class="input w-full appearance-none px-3 py-3 pr-16 focus:outline-none"
            />
          </div>
        </label>

        <button class="variant-filled-primary btn my-8 w-full">Sign in</button>

        <!-- <p class="text-center underline">Forgot your password?</p> -->
      </div>

      <hr class="mx-24 my-8 h-px !border-none bg-surface-400" />

      <p class="py-4 text-center">
        Don't have an account? <a
          class="underline"
          data-sveltekit-preload-data="tap"
          href="/auth/signup">Sign up for Music Vault</a
        >.
      </p>
    </div>
  </div>
</form>

<style>
  .authContainer {
    max-width: 736px;
  }
</style>

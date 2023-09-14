<script lang="ts">
  import { enhance } from '$app/forms';
  import type { ActionData } from './$types';

  /**
   * @description Toggles password visibility
   */
  let showPassword = false;

  /**
   * @description Form data
   */
  export let form: ActionData;
</script>

<svelte:head>
  <title>Sign up for Music Vault</title>
  <meta name="description" content="Sign up for Music Vault" />
</svelte:head>

<form method="POST" use:enhance class="content-center justify-center p-8">
  <div class="authContainer mx-auto rounded-md bg-surface-500 py-8">
    <div class="mx-auto">
      <h1 class="my-16 text-center text-5xl font-bold">Sign up for Music Vault</h1>

      {#if form && form.message !== undefined}
        <aside
          role="alert"
          class="alert {form.success
            ? 'variant-filled-success'
            : 'variant-filled-error'} mx-auto w-full max-w-sm"
        >
          <div class="alert-message">
            <p>{form.message}</p>
          </div>
        </aside>
      {/if}

      <hr class="mx-24 my-8 h-px !border-none bg-surface-400" />

      <div class="mx-auto w-full max-w-sm">
        <label class="label pb-4">
          <span>What is your email?</span>
          <input
            required
            type="email"
            name="email"
            autocomplete="email"
            placeholder="john@example.com"
            value={form?.email ?? ''}
            class="input w-full px-3 py-3 pr-16"
          />
        </label>

        <label class="label pb-4">
          <span>Create a password</span>
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

        <button class="variant-filled-primary btn my-8 w-full">Sign up</button>
      </div>

      <hr class="mx-24 my-8 h-px !border-none bg-surface-400" />

      <p class="py-4 text-center">
        Have an account? <a class="underline" href="/auth/signin" data-sveltekit-preload-data="tap"
          >Sign in</a
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

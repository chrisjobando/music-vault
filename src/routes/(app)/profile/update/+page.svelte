<script lang="ts">
  import { enhance } from '$app/forms';
  import type { ActionData, PageData } from './$types';

  /**
   * @description Form data
   */
  export let form: ActionData;

  export let data: PageData;
</script>

<svelte:head>
  <title>Update Profile</title>
  <meta name="description" content="Sign up for Music Vault" />
</svelte:head>

<form method="POST" use:enhance class="content-center justify-center p-8">
  <div class="authContainer mx-auto rounded-md bg-surface-500 py-8">
    <div class="mx-auto">
      <h1 class="my-16 text-center text-5xl font-bold">Profile</h1>

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
          <span>Username</span>
          <input
            required
            type="text"
            name="display_name"
            placeholder="JohnDoe123"
            class="input w-full px-3 py-3 pr-16"
            value={data?.userAccount?.display_name ?? ''}
          />
        </label>

        <label class="label pb-4">
          <span>First Name</span>
          <input
            required
            type="text"
            name="first_name"
            placeholder="John"
            autocomplete="given-name"
            class="input w-full px-3 py-3 pr-16"
            value={data?.userAccount?.first_name ?? ''}
          />
        </label>

        <label class="label pb-4">
          <span>Last Name</span>
          <input
            type="text"
            name="last_name"
            placeholder="Doe"
            autocomplete="family-name"
            class="input w-full px-3 py-3 pr-16"
            value={data?.userAccount?.last_name ?? ''}
          />
        </label>

        <label class="label">
          <span>Avatar URL</span>
          <input
            type="text"
            name="avatar_url"
            placeholder="https://picsum.photos/100"
            class="input w-full px-3 py-3 pr-16"
            value={data?.userAccount?.avatar_url ?? ''}
          />
        </label>

        <button class="variant-filled-primary btn my-8 w-full">Update</button>
      </div>
    </div>
  </div>
</form>

<style>
  .authContainer {
    max-width: 736px;
  }
</style>

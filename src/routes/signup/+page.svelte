<script lang="ts">
  /**
   * @description Toggles password visibility
   */
  let showPassword = false;
</script>

<div class="content-center justify-center p-8">
  <div class="loginContainer mx-auto rounded-md bg-surface-500 py-8">
    <div class="mx-auto">
      <h1 class="my-16 text-center text-5xl font-bold">Sign up for Music Vault</h1>

      <hr class="mx-24 my-8 h-px !border-none bg-surface-400" />

      <div class="mx-auto w-full max-w-sm">
        <label class="label pb-4">
          <span>What is your email?</span>
          <input
            class="input w-full px-3 py-3 pr-16"
            type="email"
            placeholder="john@example.com"
            autocomplete="email"
          />
        </label>

        <label class="label pb-4">
          <span>Create a password</span>
          <div class="relative w-full">
            <div class="absolute inset-y-0 right-0 z-10 flex items-center px-2">
              <input id="toggle" class="hidden" type="checkbox" bind:checked={showPassword} />
              <label
                class="flex w-12 cursor-pointer justify-center rounded bg-gray-300 px-2 py-1 text-sm text-gray-600 hover:bg-gray-400"
                for="toggle">{showPassword ? 'Hide' : 'Show'}</label
              >
            </div>
            <input
              class="input w-full appearance-none px-3 py-3 pr-16 focus:outline-none"
              type={showPassword ? 'text' : 'password'}
              placeholder="Password"
            />
          </div>
        </label>

        <label class="label pb-4">
          <span>What is your first name?</span>
          <input
            class="input w-full px-3 py-3 pr-16"
            type="text"
            placeholder="John"
            autocomplete="given-name"
          />
        </label>

        <label class="label">
          <span>What is your last name?</span>
          <input
            class="input w-full px-3 py-3 pr-16"
            type="text"
            placeholder="Doe"
            autocomplete="family-name"
          />
        </label>

        <button class="variant-filled-primary btn my-8 w-full">Sign up</button>
      </div>

      <hr class="mx-24 my-8 h-px !border-none bg-surface-400" />

      <p class="py-4 text-center">
        Have an account? <a class="underline" data-sveltekit-preload-data="tap" href="/login"
          >Log in</a
        >.
      </p>
    </div>
  </div>
</div>

<style>
  .loginContainer {
    max-width: 736px;
  }
</style>

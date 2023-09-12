<script lang="ts">
  /**
   * @description - Toggles password visibility
   */
  let showPassword = false;
</script>

<div class="content-center justify-center p-8">
  <div class="loginContainer mx-auto bg-surface-500 py-8 text-center">
    <div class="mx-auto">
      <h1 class="my-16 text-5xl font-bold">Log in to Music Vault</h1>

      <hr class="mx-24 my-8" />

      <div class="mx-auto w-full max-w-sm">
        <label class="label pb-4">
          <span>Email</span>
          <input
            class="input w-full px-3 py-3 pr-16"
            type="email"
            placeholder="john@example.com"
            autocomplete="email"
          />
        </label>

        <label class="label">
          <span>Password</span>
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

        <button class="variant-filled-primary btn my-8 w-full">Log in</button>
      </div>
    </div>
  </div>
</div>

<style>
  .loginContainer {
    max-width: 736px;
  }
</style>

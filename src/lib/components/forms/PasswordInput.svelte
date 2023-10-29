<script lang="ts">
  // Visibility Icons
  import VisibleIcon from '~icons/mdi/visibility';
  import InvisibleIcon from '~icons/mdi/visibility-off';

  // Props
  /**
   * @description Error Message
   */
  export let inputError: string | undefined = undefined;

  /**
   * @description Input label
   */
  export let label = 'Password';

  /**
   * @description Input name
   */
  export let name = 'password';

  /**
   * @description Whether the input is required
   */
  export let required = false;

  /**
   * @description Input value
   */
  export let value = '';

  // Variables
  /**
   * @description Toggles password visibility
   */
  let showPassword = true;

  // Functions
  /**
   * @description Toggles password visibility
   */
  function togglePasswordVisibility() {
    showPassword = !showPassword;
  }
</script>

<div class="form-control w-full max-w-xs">
  <label for={name} class="label">
    <span class="label-text">{label}</span>
  </label>
  {#if showPassword}
    <div class="relative flex">
      <input
        type="text"
        autocomplete="current-password"
        placeholder="At least 6 characters"
        class="input input-bordered w-full max-w-xs pr-12{inputError ? ' input-error' : ''}"
        {name}
        {required}
        bind:value
      />
      <button class="absolute right-3 top-3 h-6 w-6" on:click={togglePasswordVisibility}>
        <InvisibleIcon />
      </button>
    </div>
  {:else}
    <div class="relative flex">
      <input
        type="password"
        autocomplete="current-password"
        placeholder="At least 6 characters"
        class="input input-bordered w-full max-w-xs pr-12{inputError ? ' input-error' : ''}"
        {name}
        {required}
        bind:value
      />
      <button class="absolute right-3 top-3 h-6 w-6" on:click={togglePasswordVisibility}>
        <VisibleIcon />
      </button>
    </div>
  {/if}
  {#if inputError}
    <label class="label" for={name}>
      <span class="label-text-alt text-error">{inputError}</span>
    </label>
  {/if}
</div>

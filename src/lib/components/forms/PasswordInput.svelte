<script lang="ts">
  // Utils
  import { marginTop, type IMarginType } from '../utils';
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
   * @description Required indicator
   */
  export let required: boolean = false;

  /**
   * @description Margin top
   */
  export let top: IMarginType | undefined = undefined;

  /**
   * @description Input value
   */
  export let value = '';

  // Variables
  /**
   * @description Toggles password visibility
   */
  let showPassword = false;

  /**
   * @description Top margin styling
   */
  const topMargin = top ? ` ${marginTop[top]}` : '';

  // Functions
  /**
   * @description Toggles password visibility
   */
  function togglePasswordVisibility() {
    showPassword = !showPassword;
  }
</script>

<div class="form-control w-full max-w-md{topMargin}">
  <label for={name} class="label">
    <span class="label-text"
      >{label}
      {#if required}
        <span class="text-error">*</span>
      {/if}
    </span>
  </label>
  {#if showPassword}
    <div class="relative flex">
      <input
        type="text"
        autocomplete="current-password"
        placeholder="At least 6 characters"
        class="input input-bordered w-full pr-12{inputError ? ' input-error' : ''}"
        {name}
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
        class="input input-bordered w-full pr-12{inputError ? ' input-error' : ''}"
        {name}
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

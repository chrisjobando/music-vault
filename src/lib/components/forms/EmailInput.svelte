<script lang="ts">
  // Utils
  import { marginTop, type IMarginType } from '../utils';

  // Props
  /**
   * @description Error Message
   */
  export let inputError: string | undefined = undefined;

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
   * @description Top margin styling
   */
  const topMargin = top ? ` ${marginTop[top]}` : '';
</script>

<div class="form-control w-full max-w-md{topMargin}">
  <label for="email" class="label">
    <span class="label-text"
      >Email
      {#if required}
        <span class="text-error">*</span>
      {/if}
    </span>
  </label>
  <input
    name="email"
    type="email"
    autocomplete="email"
    placeholder="john@example.com"
    class="input input-bordered{inputError ? ' input-error' : ''}"
    bind:value
  />
  {#if inputError}
    <label class="label" for="email">
      <span class="label-text-alt text-error">{inputError}</span>
    </label>
  {/if}
</div>

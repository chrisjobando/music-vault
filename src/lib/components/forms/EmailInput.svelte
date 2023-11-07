<script lang="ts">
  // Styling
  import cx from 'classnames';
  // Utils
  import type { IMarginType } from '../utils';

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
</script>

<div
  class={cx('form-control w-full max-w-md', {
    'mt-2': top === 'sm',
    'mt-4': top === 'md',
    'mt-8': top === 'lg',
    'mt-10': top === 'xl'
  })}
>
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

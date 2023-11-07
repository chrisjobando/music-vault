<script lang="ts">
  // Styling
  import cx from 'classnames';
  // Utils
  import type { IMarginType } from '../utils';

  // Props
  /**
   * @description Input autocomplete
   */
  export let autocomplete: string | undefined = undefined;

  /**
   * @description Error Message
   */
  export let inputError: string | undefined = undefined;

  /**
   * @description Input label
   */
  export let label = 'Label';

  /**
   * @description Form name
   */
  export let name = 'name';

  /**
   * @description Input placeholder
   */
  export let placeholder = 'Placeholder';

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
  <label for={name} class="label">
    <span class="label-text"
      >{label}
      {#if required}
        <span class="text-error">*</span>
      {/if}
    </span>
  </label>
  <input
    type="text"
    class="input input-bordered{inputError ? ' input-error' : ''}"
    {name}
    {placeholder}
    {autocomplete}
    bind:value
  />
  {#if inputError}
    <label class="label" for={name}>
      <span class="label-text-alt text-error">{inputError}</span>
    </label>
  {/if}
</div>

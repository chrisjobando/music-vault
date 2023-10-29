<script lang="ts">
  // Utils
  import { marginTop, type IMarginType } from '../utils';

  // Props
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

  // Variables
  /**
   * @description Top margin styling
   */
  const topMargin = top ? ` ${marginTop[top]}` : '';
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
  <input
    type="number"
    class="input input-bordered{inputError ? ' input-error' : ''}"
    {name}
    {placeholder}
    bind:value
  />
  {#if inputError}
    <label class="label" for={name}>
      <span class="label-text-alt text-error">{inputError}</span>
    </label>
  {/if}
</div>

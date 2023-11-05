<script lang="ts">
  // Utils
  import { marginTop, type IMarginType } from '../utils';

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
   * @description Create top margin styling
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
    type="file"
    accept="image/*"
    class="file-input file-input-bordered{inputError ? ' file-input-error' : ''}"
    {name}
    {autocomplete}
    bind:value
  />
  {#if inputError}
    <label class="label" for={name}>
      <span class="label-text-alt text-error">{inputError}</span>
    </label>
  {/if}
</div>

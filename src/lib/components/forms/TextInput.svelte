<script lang="ts">
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
   * @description Whether the input is required
   */
  export let required = false;

  /**
   * @description Input value
   */
  export let value = '';
</script>

<div class="form-control w-full max-w-xs">
  <label for={name} class="label">
    <span class="label-text">{label}</span>
  </label>
  <input
    type="text"
    class="input input-bordered w-full max-w-xs{inputError ? ' input-error' : ''}"
    {name}
    {required}
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

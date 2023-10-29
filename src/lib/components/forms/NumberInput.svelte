<script lang="ts">
  // Props
  /**
   * @description Input value
   */
  export let value: number | null;

  /**
   * @description Form name
   */
  export let name = 'name';

  /**
   * @description Input label
   */
  export let label = 'Label';

  /**
   * @description Whether the input is required
   */
  export let required = false;

  /**
   * @description Input placeholder
   */
  export let placeholder = 'Placeholder';

  /**
   * @description Error Message
   */
  export let inputError: string | undefined = undefined;
</script>

<label
  ><p>
    {label}
    {#if required}
      <span>*</span>
    {/if}
  </p>
  <input type="number" {name} {placeholder} bind:value />
  {#if inputError}
    <p><span>{inputError}</span></p>
  {:else}
    <div />
  {/if}
</label>

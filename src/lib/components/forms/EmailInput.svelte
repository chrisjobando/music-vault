<script lang="ts">
  // Props
  /**
   * @description Input value
   */
  export let value = '';

  /**
   * @description Whether the input is required
   */
  export let required = false;

  /**
   * @description Error Message
   */
  export let inputError: string | undefined = undefined;
</script>

<label
  ><p>
    Email
    {#if required}
      <span>*</span>
    {/if}
  </p>
  <input name="email" type="email" autocomplete="email" placeholder="john@example.com" bind:value />
  {#if inputError}
    <p><span>{inputError}</span></p>
  {:else}
    <div />
  {/if}
</label>

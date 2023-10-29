<script lang="ts">
  // Props
  /**
   * @description Input value
   */
  export let value = '';

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
   * @description Error Message
   */
  export let inputError: string | undefined = undefined;

  // Variables
  /**
   * @description Toggles password visibility
   */
  // let showPassword = false;
</script>

<label
  ><p>
    {label}
    {#if required}
      <span>*</span>
    {/if}
  </p>
  <input type="password" placeholder="At least 6 characters" {name} bind:value />
  {#if inputError}
    <p><span>{inputError}</span></p>
  {:else}
    <div />
  {/if}
</label>

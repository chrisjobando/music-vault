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

<label class="block"
  ><p class="font-bold">
    {label}
    {#if required}
      <span class="text-red">*</span>
    {/if}
  </p>
  <input
    type="password"
    placeholder="At least 6 characters"
    class="border-neob mt-2 w-full shadow-light focus:-translate-y-1 focus:shadow-harsh"
    {name}
    bind:value
  />
  {#if inputError}
    <p class="text-red mt-1 pl-2 text-sm"><span>{inputError}</span></p>
  {:else}
    <div class="mt-1 h-5 w-full" />
  {/if}
</label>

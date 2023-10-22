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

<label class="block"
  ><p class="font-bold">
    Email
    {#if required}
      <span class="text-red">*</span>
    {/if}
  </p>
  <input
    name="email"
    type="email"
    autocomplete="email"
    placeholder="john@example.com"
    class="border-neob mt-2 w-full shadow-light focus:-translate-y-1 focus:shadow-harsh"
    bind:value
  />
  {#if inputError}
    <p class="text-red mt-1 pl-2 text-sm"><span>{inputError}</span></p>
  {:else}
    <div class="mt-1 h-5 w-full" />
  {/if}
</label>

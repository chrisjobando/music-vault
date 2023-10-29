<script lang="ts">
  // Props
  /**
   * @description Error Message
   */
  export let inputError: string | undefined = undefined;

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
  <label for="email" class="label">
    <span class="label-text">Email</span>
  </label>
  <input
    name="email"
    type="email"
    autocomplete="email"
    placeholder="john@example.com"
    class="input input-bordered w-full max-w-xs{inputError ? ' input-error' : ''}"
    {required}
    bind:value
  />
  {#if inputError}
    <label class="label" for="email">
      <span class="label-text-alt text-error">{inputError}</span>
    </label>
  {/if}
</div>

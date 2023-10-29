<script lang="ts">
  // Components
  import SubmitButton from './SubmitButton.svelte';
  // Icons
  import SearchIcon from '~icons/mdi/search';

  // Props
  /**
   * @description Input value
   */
  export let value = '';

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

  /**
   * @description Input autocomplete
   */
  export let autocomplete: string | undefined = undefined;

  /**
   * @description Whether the search is disabled
   * @description Can only be true is isSearch is true
   */
  export let disabled = false;

  /**
   * @description Whether the input is for search
   */
  export let isSearch = false;

  /**
   * @description setLoadingCallback function
   */
  export let setLoadingCallback: undefined | (() => void) = undefined;
</script>

<label
  ><p>
    {label}
    {#if required}
      <span>*</span>
    {/if}
  </p>
  {#if isSearch}
    <div>
      <input type="text" {name} {placeholder} {autocomplete} bind:value />
      <SubmitButton
        onClick={() => {
          if (setLoadingCallback) {
            setLoadingCallback();
          }
        }}
        bind:disabled
      >
        <SearchIcon />
      </SubmitButton>
    </div>
  {:else}
    <input type="text" {name} {placeholder} {autocomplete} bind:value />
  {/if}
  {#if inputError}
    <p><span>{inputError}</span></p>
  {:else}
    <div />
  {/if}
</label>

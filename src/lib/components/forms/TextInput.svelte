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

<label class="block w-full"
  ><p class="font-bold">
    {label}
    {#if required}
      <span class="text-red">*</span>
    {/if}
  </p>
  {#if isSearch}
    <div class="flex">
      <input
        type="text"
        class="border-neob mt-2 flex flex-grow shadow-light focus:-translate-y-1 focus:shadow-harsh"
        {name}
        {placeholder}
        {autocomplete}
        bind:value
      />
      <SubmitButton
        icon
        classes="ml-4 mb-0 !w-11"
        buttonColor="secondary"
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
    <input
      type="text"
      class="border-neob mt-2 w-full shadow-light focus:-translate-y-1 focus:shadow-harsh"
      {name}
      {placeholder}
      {autocomplete}
      bind:value
    />
  {/if}
  {#if inputError}
    <p class="mt-1 pl-2 text-sm text-red"><span>{inputError}</span></p>
  {:else}
    <div class="mt-1 h-5 w-full" />
  {/if}
</label>

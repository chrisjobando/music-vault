<script lang="ts">
  // Components
  import RecordTile from './RecordTile.svelte';
  // Interfaces
  import type { IRecordErrors } from '$lib/schema/validationSchema';
  import type { IRecords } from '$lib/types';
  import { sortRecordsByField, type IRecordSortableFields } from './utils';
  // Icons
  import DownArrow from '~icons/mdi/arrow-down';
  import UpArrow from '~icons/mdi/arrow-up';

  // Props
  /**
   * @description Record list data
   */
  export let recordListData: IRecords[];

  /**
   * @description Form errors
   */
  export let formErrors: IRecordErrors | undefined;

  /**
   * @description Clear form errors
   */
  export let clearFormErrors: () => void;

  /**
   * @description Set Loading Callback
   */
  export let setLoadingCallback: undefined | ((loading: boolean) => void) = undefined;

  // Variables
  /**
   * @description Grid template
   */
  const gridTemplateColumns = 'grid-cols-[1fr_5fr_5fr] md:grid-cols-[1fr_7fr_6fr_4fr_2fr]';

  /**
   * @description Sort field, 'created_at' by default
   */
  let sortField: IRecordSortableFields = 'created_at';

  /**
   * @description Record data, sorted by create time by default
   */
  $: sortedRecordData = sortRecordsByField(recordListData, sortField);

  let sortAsc = true;

  $: isSortingField = (field: IRecordSortableFields) => field === sortField;

  function changeSortField(field: IRecordSortableFields) {
    if (field === sortField) {
      sortAsc = !sortAsc;
      sortedRecordData = sortedRecordData.reverse();
      return;
    }
    sortAsc = true;
    sortField = field;
  }
</script>

<div class="border-neob bg-white shadow-light">
  <!-- List Header -->
  <div class="grid border-b-2 p-3 shadow-light {gridTemplateColumns}">
    <div />

    <button
      class="flex{!isSortingField('title') ? ' font-normal' : ''}"
      on:click={() => changeSortField('title')}
      >Title
      {#if isSortingField('title')}
        {#if sortAsc}
          <UpArrow class="ml-1" />
        {:else}
          <DownArrow class="ml-1" />
        {/if}
      {/if}
    </button>

    <button
      class="flex justify-end md:justify-start{!isSortingField('artist') ? ' font-normal' : ''}"
      on:click={() => changeSortField('artist')}
      >Artist
      {#if isSortingField('artist')}
        {#if sortAsc}
          <UpArrow class="ml-1" />
        {:else}
          <DownArrow class="ml-1" />
        {/if}
      {/if}
    </button>

    <button
      class="hidden md:flex{!isSortingField('genre') ? ' font-normal' : ''}"
      on:click={() => changeSortField('genre')}
      >Genre
      {#if isSortingField('genre')}
        {#if sortAsc}
          <UpArrow class="ml-1" />
        {:else}
          <DownArrow class="ml-1" />
        {/if}
      {/if}
    </button>

    <button
      class="hidden pr-3 md:flex md:justify-end{!isSortingField('year') ? ' font-normal' : ''}"
      on:click={() => changeSortField('year')}
      >Year
      {#if isSortingField('year')}
        {#if sortAsc}
          <UpArrow class="ml-1" />
        {:else}
          <DownArrow class="ml-1" />
        {/if}
      {/if}
    </button>
  </div>

  <!-- List Items -->
  <div class="max-h-96 overflow-y-scroll">
    {#each sortedRecordData as recordData, recordIdx}
      <RecordTile
        {recordIdx}
        {recordData}
        {gridTemplateColumns}
        {clearFormErrors}
        {setLoadingCallback}
        bind:formErrors
      />
    {/each}
  </div>
</div>

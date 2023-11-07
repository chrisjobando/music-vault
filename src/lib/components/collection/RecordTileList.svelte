<script lang="ts">
  // Components
  import RecordTile from './RecordTile.svelte';
  // Styling
  import cx from 'classnames';
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

<div class="mt-4 overflow-x-auto">
  <table class="table">
    <!-- List Header -->
    <thead>
      <tr>
        <th></th>
        <th>
          <button
            class={cx('flex gap-1', { 'font-normal': !isSortingField('title') })}
            on:click={() => changeSortField('title')}
            >Title
            {#if isSortingField('title')}
              {#if sortAsc}
                <UpArrow />
              {:else}
                <DownArrow />
              {/if}
            {/if}
          </button>
        </th>

        <th>
          <button
            class={cx('flex gap-1', { 'font-normal': !isSortingField('artist') })}
            on:click={() => changeSortField('artist')}
            >Artist
            {#if isSortingField('artist')}
              {#if sortAsc}
                <UpArrow />
              {:else}
                <DownArrow />
              {/if}
            {/if}
          </button>
        </th>

        <th>
          <button
            class={cx('flex gap-1', { 'font-normal': !isSortingField('genre') })}
            on:click={() => changeSortField('genre')}
            >Genre
            {#if isSortingField('genre')}
              {#if sortAsc}
                <UpArrow />
              {:else}
                <DownArrow />
              {/if}
            {/if}
          </button>
        </th>

        <th>
          <button
            class={cx('flex gap-1', { 'font-normal': !isSortingField('year') })}
            on:click={() => changeSortField('year')}
            >Year
            {#if isSortingField('year')}
              {#if sortAsc}
                <UpArrow />
              {:else}
                <DownArrow />
              {/if}
            {/if}
          </button>
        </th>
      </tr>
    </thead>

    <tbody>
      <!-- List Items -->
      {#each sortedRecordData as recordData, recordIdx}
        <RecordTile
          {recordIdx}
          {recordData}
          {clearFormErrors}
          {setLoadingCallback}
          bind:formErrors
        />
      {/each}
    </tbody>
  </table>
</div>

<script lang="ts">
  // Components
  import DeleteRecordConfirmationModal from './DeleteRecordConfirmationModal.svelte';
  import EditRecordModal from './EditRecordModal.svelte';
  // Interface
  import type { IRecordErrors } from '$lib/schema/validationSchema';
  import type { IRecords } from '$lib/types';

  // Props
  /**
   * @description Record data
   */
  export let recordData: IRecords;

  /**
   * @description Record index in collection list
   */
  export let recordIdx: number;

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
   * @description Edit Record Modal State
   */
  let showEditRecordModal = false;

  /**
   * @description Delete Confirmation Modal State
   */
  let showDeleteConfirmationModal = false;

  function openEditRecordModal(state: boolean) {
    clearFormErrors();
    showEditRecordModal = state;
  }

  function openDeleteRecordConfirmationModal(state: boolean) {
    clearFormErrors();
    showDeleteConfirmationModal = state;
  }
</script>

<div>
  <p>{recordIdx + 1}</p>

  <button on:click={() => openEditRecordModal(true)}>{recordData.title}</button>
  <p>{recordData.artist}</p>
  <p>
    {recordData.genre === null ? '' : recordData.genre}
  </p>
  <p>
    {recordData.year === null ? '' : recordData.year}
  </p>
</div>

<!-- View Record Modal -->

<!-- Edit Record Modal -->
{#if showEditRecordModal}
  <EditRecordModal
    {recordData}
    {setLoadingCallback}
    {openEditRecordModal}
    {openDeleteRecordConfirmationModal}
    bind:formErrors
    bind:showEditRecordModal
  />
{/if}

<!-- Delete Confirmation Modal -->
{#if showDeleteConfirmationModal}
  <DeleteRecordConfirmationModal
    {recordData}
    {setLoadingCallback}
    {openEditRecordModal}
    {openDeleteRecordConfirmationModal}
    bind:showDeleteConfirmationModal
  />
{/if}

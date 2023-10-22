<script lang="ts">
  // Components
  import DeleteRecordConfirmationModal from './DeleteRecordConfirmationModal.svelte';
  import EditRecordModal from './EditRecordModal.svelte';
  // Interface
  import type { IRecordErrors } from '$lib/schema/validationSchema';
  import type { IRecords } from '$lib/types';

  // Props
  /**
   * @description Grid template columns
   */
  export let gridTemplateColumns: string;

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
  export let setLoadingCallback: () => void;

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

<div class="grid {gridTemplateColumns} border-b-2 border-[#e5e5e5] p-3 last-of-type:border-b-0">
  <p class="pr-3 text-right">{recordIdx + 1}</p>

  <button
    class="textContainer pr-3 text-left hover:underline"
    on:click={() => openEditRecordModal(true)}>{recordData.title}</button
  >
  <p class="textContainer pr-3 text-right md:text-left">{recordData.artist}</p>
  <p class="textContainer !hidden pr-3 md:!block">
    {recordData.genre === null ? '' : recordData.genre}
  </p>
  <p class="textContainer !hidden pr-3 text-right md:!block">
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

<script lang="ts">
  // Forms
  import { enhance } from '$app/forms';
  // Components
  import { SubmitButton } from '../forms';
  import { BaseModal } from '../index';
  // Interfaces
  import type { IDeleteRecord } from '$lib/types';

  // Props
  /**
   * @description Record data
   */
  export let recordData: IDeleteRecord;

  /**
   * @description Loading callback
   */
  export let setLoadingCallback: () => void;

  // Variables
  /**
   * @description Modal State
   */
  export let showDeleteConfirmationModal = false;

  /**
   * @description Modal edit record close callback
   */
  export let openEditRecordModal: (state: boolean) => void;

  /**
   * @description Modal close callback
   */
  export let openDeleteRecordConfirmationModal: (state: boolean) => void;
</script>

<form
  method="POST"
  action="?/deleteRecord"
  use:enhance={({ formData }) => {
    formData.set('record_id', recordData.id);
    return async ({ result, update }) => {
      update();

      if (result.type === 'success') {
        openDeleteRecordConfirmationModal(false);
        openEditRecordModal(false);
      }
    };
  }}
>
  <BaseModal
    closeText="Cancel"
    onCancelCallback={() => openDeleteRecordConfirmationModal(false)}
    bind:showModal={showDeleteConfirmationModal}
  >
    <h3 slot="header" class="my-4">Delete Record?</h3>

    <div slot="content" class="grid grid-cols-1 gap-4">
      <h4>{recordData.title}</h4>
    </div>

    <div slot="footer" class="ml-auto">
      <SubmitButton
        text="Delete"
        classes="!w-32"
        buttonColor="warning"
        onClick={setLoadingCallback}
      />
    </div>
  </BaseModal>
</form>

<script lang="ts">
  // Forms
  import { enhance } from '$app/forms';
  // Components
  import { NumberInput, SubmitButton, TextInput } from '../forms';
  import { BaseButton, BaseModal } from '../index';
  // Interfaces
  import type { IEditRecord, IUserRecord } from '$lib/types';
  // Icons
  import type { IRecordErrors } from '$lib/schema/validationSchema';
  import DeleteIcon from '~icons/mdi/trash-can-outline';

  // Props
  /**
   * @description Record data
   */
  export let recordData: IEditRecord;

  /**
   * @description Record data for form
   */
  let formValues: IUserRecord = {
    title: recordData.title,
    artist: recordData.artist,
    genre: recordData.genre !== null ? recordData.genre : '',
    year: recordData.year ?? null
  };

  const originalFormValues = structuredClone(formValues);

  /**
   * @description Modal State
   */
  export let showEditRecordModal = false;

  /**
   * @description Form errors
   */
  export let formErrors: IRecordErrors | undefined;

  let titleErrors: string | undefined;
  let artistErrors: string | undefined;
  let yearErrors: string | undefined;
  let genreErrors: string | undefined;

  $: if (formErrors) {
    titleErrors = formErrors.title;
    artistErrors = formErrors.artist;
    yearErrors = formErrors.year;
    genreErrors = formErrors.genre;
  }

  $: disableUpdate = JSON.stringify(originalFormValues) === JSON.stringify(formValues);

  /**
   * @description Loading callback
   */
  export let setLoadingCallback: undefined | ((loading: boolean) => void) = undefined;

  /**
   * @description Modal close callback
   */
  export let openEditRecordModal: (state: boolean) => void;

  /**
   * @description Modal open delete confirmation
   */
  export let openDeleteRecordConfirmationModal: (state: boolean) => void;
</script>

<form
  method="POST"
  action="?/updateRecord"
  use:enhance={({ formData }) => {
    formData.set('original_record', JSON.stringify(recordData));
    return async ({ result, update }) => {
      update();

      if (result.type === 'success') {
        openEditRecordModal(false);
      }
    };
  }}
>
  <BaseModal
    closeText="Cancel"
    onCancelCallback={() => openEditRecordModal(false)}
    bind:showModal={showEditRecordModal}
  >
    <div slot="header">
      <h3>Edit Record</h3>
      <BaseButton text="" onClick={() => openDeleteRecordConfirmationModal(true)}>
        <DeleteIcon />
      </BaseButton>
    </div>

    <div slot="content">
      <TextInput
        required
        name="title"
        label="Title"
        placeholder="Record Title"
        bind:value={formValues.title}
        bind:inputError={titleErrors}
      />
      <TextInput
        required
        name="artist"
        label="Artist"
        placeholder="Record Artist"
        bind:value={formValues.artist}
        bind:inputError={artistErrors}
      />
      <NumberInput
        name="year"
        label="Year"
        placeholder="Record Year"
        bind:value={formValues.year}
        bind:inputError={yearErrors}
      />
      <TextInput
        name="genre"
        label="Genre"
        placeholder="Record Genre"
        bind:value={formValues.genre}
        bind:inputError={genreErrors}
      />
    </div>

    <div slot="footer">
      <SubmitButton text="Update" onClick={setLoadingCallback} bind:disabled={disableUpdate} />
    </div>
  </BaseModal>
</form>
